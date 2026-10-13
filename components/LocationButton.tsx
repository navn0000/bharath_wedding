import { MapPin, Navigation } from "lucide-react";

interface LocationButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "outline" | "gold";
  icon?: "pin" | "directions";
}

const variants = {
  primary: "btn-primary",
  outline: "btn-outline",
  gold: "btn-gold",
} as const;

export default function LocationButton({
  href,
  label,
  variant = "primary",
  icon = "pin",
}: LocationButtonProps) {
  const Icon = icon === "pin" ? MapPin : Navigation;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${variants[variant]}`}
    >
      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{label}</span>
      <span className="sr-only"> (opens Google Maps)</span>
    </a>
  );
}
