import { Award, Headphones, Shield, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

const badges = [
  {
    icon: Truck,
    label: "Fast Delivery",
    sub: "Reliable nationwide shipping across Ghana",
  },
  {
    icon: Award,
    label: "Quality Assurance",
    sub: "Premium fabrics and expert craftsmanship",
  },
  {
    icon: Shield,
    label: "Secure Ordering",
    sub: "Safe WhatsApp checkout you can trust",
  },
  {
    icon: Headphones,
    label: "Customer Support",
    sub: "Friendly assistance when you need it",
  },
];

export function TrustBadges({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {badges.map(({ icon: Icon, label, sub }) => (
        <div
          key={label}
          className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md"
        >
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-gold transition-colors group-hover:bg-gold group-hover:text-white">
            <Icon className="size-5" aria-hidden />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide">{label}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
