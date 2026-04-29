import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Não tenho tempo para fazer mais um curso.",
    a: "O conteúdo foi construído para caber na sua rotina. Você pode consumir em pedaços de 20 minutos — no almoço, entre reuniões, no transporte. Não precisa de blocos de 2 horas. A maioria dos alunos começa a aplicar na primeira semana sem ter terminado o conteúdo todo.",
  },
  {
    q: "Já uso ChatGPT todo dia. Acho que já sei o suficiente.",
    a: "Esse é exatamente o perfil de quem mais aproveita o produto. 90% das pessoas que nos procuram dizem isso — e todas descobriram que estavam usando apenas 10% do potencial disponível. Há 9 ferramentas além do ChatGPT, e formas de usar cada uma que provavelmente você nunca viu.",
  },
  {
    q: "Não sou técnico. Tenho medo de não conseguir aplicar.",
    a: "Virada Profissional foi feito especificamente para quem não é da área de tecnologia. Sem código, sem jargão, sem pressuposto de conhecimento técnico. Se você sabe usar WhatsApp e e-mail, você consegue aplicar tudo o que está aqui.",
  },
  {
    q: "R$157 é caro para um curso.",
    a: "Se você economizar 1 hora por semana usando as ferramentas certas, você recupera o investimento em menos de um mês. A maioria dos alunos relata economizar 5 horas ou mais por semana a partir da segunda semana. E tem 7 dias de garantia: se não valeu, devolvemos tudo.",
  },
  {
    q: "E se o conteúdo não servir para a minha área?",
    a: "Há módulos específicos para Vendas, CS, Marketing, Operações, Jurídico, Financeiro e RH. Se sua área não está listada, o diagnóstico personalizado — incluso no seu acesso — analisa a sua rotina específica e te diz exatamente onde e como aplicar IA no seu caso.",
  },
  {
    q: "O produto vai ficar desatualizado rápido com a evolução da IA?",
    a: "As ferramentas ensinadas (ChatGPT, Claude, Gemini, etc.) são as líderes de mercado com roadmap de anos pela frente. E o método — saber identificar onde aplicar IA no seu trabalho — é independente de versão. Você aprende a raciocinar com IA, não a decorar menus de um software.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center tracking-tight mb-4">
          Dúvidas frequentes
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-12">
          As perguntas que todo mundo tem antes de comprar — respondidas sem enrolação.
        </p>

        <Accordion type="single" collapsible className="grid gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-xl px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold text-sm py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
