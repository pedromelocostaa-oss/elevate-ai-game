import { useState, useEffect } from "react";
import { HOTMART_URL, PRICE } from "@/lib/constants";

const MobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 py-3 bg-background/95 backdrop-blur-sm border-t border-border shadow-xl transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={HOTMART_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-primary-foreground font-bold text-base rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
      >
        Quero me tornar indispensável — {PRICE}
      </a>
      <p className="text-center text-[10px] text-muted-foreground mt-1.5">
        Garantia de 7 dias · Acesso imediato
      </p>
    </div>
  );
};

export default MobileCTA;
