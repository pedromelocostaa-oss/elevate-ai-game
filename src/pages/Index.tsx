import NavHeader from "@/components/NavHeader";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ToolsSection from "@/components/ToolsSection";
import ForWhoSection from "@/components/ForWhoSection";
import IntermediateCTASection from "@/components/IntermediateCTASection";
import LearningSection from "@/components/LearningSection";
import DiagnosisSection from "@/components/DiagnosisSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UrgencySection from "@/components/UrgencySection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navegação fixa */}
      <NavHeader />

      {/* 1 — Gancho e proposta de valor */}
      <HeroSection />

      {/* 2 — Problema: quem usa superficialmente vs. quem domina */}
      <ProblemSection />

      {/* 3 — Solução: o que muda quando você aprende do jeito certo */}
      <SolutionSection />

      {/* 4 — Prova de conteúdo: ferramentas cobertas */}
      <ToolsSection />

      {/* 5 — Qualificação: para quem é e para quem não é */}
      <ForWhoSection />

      {/* 6 — CTA intermediário: primeiro ponto de compra após qualificação */}
      <IntermediateCTASection />

      {/* 7 — O que você vai conseguir fazer (outcomes, não módulos) */}
      <LearningSection />

      {/* 8 — Diferencial: diagnóstico personalizado */}
      <DiagnosisSection />

      {/* 9 — Prova social */}
      <TestimonialsSection />

      {/* 10 — FOMO: urgência após prova social */}
      <UrgencySection />

      {/* 11 — Remoção de risco: garantia + CTA */}
      <GuaranteeSection />

      {/* 12 — Objeções: FAQ */}
      <FAQSection />

      {/* 13 — CTA final */}
      <FinalCTASection />

      <FooterSection />
    </div>
  );
};

export default Index;
