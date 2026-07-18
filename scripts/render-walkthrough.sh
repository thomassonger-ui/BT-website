#!/bin/bash
# Render the 36 stills into one continuous scrub-friendly walkthrough film.
set -e
SRC=/tmp/BT-website/public/images/rooms
OUT=/tmp/film
mkdir -p $OUT/clips
cd $OUT

CLIP_DUR=2.0   # seconds per still
FPS=24
FRAMES=48      # CLIP_DUR * FPS
W=1440; H=810

# 1) One gently-zooming clip per still (upscale first to avoid zoompan shimmer)
i=0
for room in 01-exterior 02-entry 03-foyer 04-living 05-great 06-dining 07-kitchen 08-lanai 09-pool; do
  for f in 1 2 3 4; do
    img="$SRC/${room}-${f}.jpg"
    ffmpeg -v error -y -i "$img" -vf "scale=2880:1620:force_original_aspect_ratio=increase,crop=2880:1620,zoompan=z='1+0.12*on/${FRAMES}':d=${FRAMES}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':fps=${FPS}:s=${W}x${H}" -frames:v ${FRAMES} -c:v libx264 -preset fast -crf 18 -pix_fmt yuv420p clips/$(printf "%02d" $i).mp4
    i=$((i+1))
  done
done
echo "clips done: $i"

# 2) Chain with xfade: dissolve within a room, blur-melt between rooms
STEP=1.4   # clip starts every 1.4s (0.6s overlap)
FADE=0.6
inputs=""
for j in $(seq 0 35); do inputs="$inputs -i clips/$(printf "%02d" $j).mp4"; done

filter=""
prev="[0:v]"
for j in $(seq 1 35); do
  # transition index j-1; room boundary when j % 4 == 0
  if [ $((j % 4)) -eq 0 ]; then trans="hblur"; else trans="fade"; fi
  offset=$(python3 -c "print(round(${j}*${STEP}-${FADE},3))")
  outlbl="[x${j}]"
  filter="${filter}${prev}[${j}:v]xfade=transition=${trans}:duration=${FADE}:offset=${offset}${outlbl};"
  prev="[x${j}]"
done
filter="${filter%?}"

ffmpeg -v error -y $inputs -filter_complex "$filter" -map "[x35]" \
  -c:v libx264 -preset medium -crf 23 -g 4 -pix_fmt yuv420p -movflags +faststart \
  walkthrough.mp4

ffprobe -v error -show_entries format=duration,size -of csv walkthrough.mp4
# poster
ffmpeg -v error -y -i walkthrough.mp4 -frames:v 1 -q:v 3 poster.jpg
echo DONE
