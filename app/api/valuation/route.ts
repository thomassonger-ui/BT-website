import { handleLead } from "@/lib/forms/handle-lead";

export async function POST(request: Request) {
  return handleLead("valuation", request);
}
