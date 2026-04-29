import NavHeader from "@/components/NavHeader";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ToolsSection from "@/components/ToolsSection";
import ForWhoSection from "@/components/ForWhoSection";
import IntermediateCTASection from "@/components/IntermediateCTASection";
import LearningSection from "@/components/LearningSection";
import DiagnosisSection from "@/components/DiagnosisSection";
import CommunitySection from "@/components/CommunitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UrgencySection from "@/components/UrgencySection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen mobile-pb">
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

      {/* 9 — Comunidade: cases reais de alunos */}
      <CommunitySection />

      {/* 10 — Prova social */}
      <TestimonialsSection />

      {/* 11 — FOMO: urgência após prova social */}
      <UrgencySection />

      {/* 12 — Remoção de risco: garantia + CTA */}
      <GuaranteeSection />

      {/* 13 — Objeções: FAQ */}
      <FAQSection />

      {/* 14 — CTA final */}
      <FinalCTASection />

      <FooterSection />

      {/* Barra de compra fixa no rodapé — só mobile */}
      <MobileCTA />
    </div>
  );
};

export default Index;
