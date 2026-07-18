/** Route-level loading state. */
export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-soft-white" role="status" aria-live="polite">
      <div className="text-center">
        <div
          aria-hidden="true"
          className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-cream border-t-teal-700 motion-reduce:animate-none"
        />
        <p className="mt-4 text-sm text-muted">Loading…</p>
      </div>
    </div>
  );
}
