import { toast } from "sonner";

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Until accounts and the speaking app ship, the primary CTA sends people to the plans. */
export function startFree() {
  scrollToId("pricing");
  toast("Speaking practice is opening soon", {
    description: "The AI coach is in build. Choose the plan you want and you'll be first in line.",
  });
}
