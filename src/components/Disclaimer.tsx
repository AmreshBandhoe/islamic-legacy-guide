import { Info } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface DisclaimerProps {
  text?: string;
  className?: string;
}

export function Disclaimer({ text, className = "" }: DisclaimerProps) {
  const { t } = useI18n();
  const content = text ?? t.common.disclaimer;
  return (
    <div
      className={`flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-5 text-sm leading-relaxed text-foreground/85 ${className}`}
    >
      <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
      <p>{content}</p>
    </div>
  );
}
