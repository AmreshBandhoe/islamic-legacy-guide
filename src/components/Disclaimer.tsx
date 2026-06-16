import { Info } from "lucide-react";

interface DisclaimerProps {
  text?: string;
  className?: string;
}

export function Disclaimer({
  text = "Dit is algemene informatie. Voor persoonlijk advies of het opstellen van een testament kunt u terecht bij een notaris.",
  className = "",
}: DisclaimerProps) {
  return (
    <div
      className={`flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-5 text-sm leading-relaxed text-foreground/85 ${className}`}
    >
      <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
      <p>{text}</p>
    </div>
  );
}
