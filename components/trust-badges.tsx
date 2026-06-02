import { Shield, Truck, Smartphone, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

const badges = [
  { icon: Smartphone, label: "Mobile Money Accepted", sub: "MTN MoMo · Telecel · AirtelTigo" },
  { icon: Truck, label: "Nationwide Delivery", sub: "Across Ghana" },
  { icon: Shield, label: "Secure Ordering", sub: "WhatsApp verified checkout" },
  { icon: Headphones, label: "Customer Support", sub: "Friendly assistance" },
];

export function TrustBadges({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {badges.map(({ icon: Icon, label, sub }) => (
        <div
          key={label}
          className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/50 p-4 backdrop-blur-sm"
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
            <Icon className="size-5" aria-hidden />
          </div>
          <div>
            <p className="text-sm font-medium">{label}</p>
            <p className="text-xs text-muted-foreground">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
