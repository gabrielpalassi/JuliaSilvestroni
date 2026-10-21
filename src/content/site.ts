// Conteúdo editável do site. Itens marcados com [A CONFIRMAR] precisam de dados reais.
export const PLACEHOLDER = "[A CONFIRMAR]";

export const site = {
  url: "https://juliasilvestroni.vercel.app",
  name: "Júlia Silvestroni",
  title: "Nutricionista",
  education: ["Nutrição pela Universidade de São Paulo (USP)"],
  crn: "CRN-3 88003/P",
  city: "São Paulo, SP",
  address: "", // atendimento apenas online
  whatsapp: "5511997125332",
  instagram: "nutri.jusilvestroni",
  email: "",
};

export const instagramUrl = `https://www.instagram.com/${site.instagram}/`;
export const contactUrl =
  "https://api.whatsapp.com/send?phone=%205511997125332&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+as+consultas!";

export const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#parcerias", label: "Parcerias" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export const services = [
  {
    title: "Plano alimentar e guia individualizado",
    text: "Você recebe um plano alimentar completo e um guia feito para ajudar a colocar as orientações em prática. Um cuidado pensado para facilitar sua rotina e trabalhar suas metas.",
    confirmed: true,
  },
  {
    title: "Suporte pelo WhatsApp",
    text: "Durante o acompanhamento, você pode enviar dúvidas todos os dias, em qualquer horário. Por lá, também conversamos sobre ajustes no plano e sugestões de receitas.",
    confirmed: true,
  },
  {
    title: "Consultas no seu ritmo",
    text: "Nossos encontros são online, por videochamada. Você tem liberdade para combinar as datas das consultas dentro do período do plano, conforme sua disponibilidade e preferência.",
    confirmed: true,
  },
];

export const plans = [
  { consultations: "1 consulta", period: "30 dias de acompanhamento" },
  { consultations: "2 consultas", period: "90 dias de acompanhamento" },
  { consultations: "4 consultas", period: "150 dias de acompanhamento" },
  { consultations: "6 consultas", period: "210 dias de acompanhamento" },
];

export const principles = [
  {
    n: "01",
    title: "Sua rotina faz parte",
    text: "Seus horários, suas preferências e os momentos à mesa ajudam a construir um plano que faça sentido no seu dia a dia.",
  },
  {
    n: "02",
    title: "Ciência na prática",
    text: "Do prato à suplementação, quando necessária, você entende o papel de cada orientação. Tudo tem um motivo e é pensado para ajudar você a alcançar suas metas.",
  },
  {
    n: "03",
    title: "Do seu jeito",
    text: "Comer bem também tem a ver com prazer. Vamos encontrar espaço para o que você gosta, respeitando seu ritmo e seus objetivos.",
  },
];

export const coupons = [
  { brand: "Mais Mu", discount: "10% de desconto", code: "NUTRIJULIASILVESTRONI" },
  { brand: "Abracadabra", discount: "10% de desconto", code: "nutrijusilvestroni" },
  { brand: "RAKKAU", discount: "40% de desconto", code: "FABRICA" },
];

export const faq = [
  {
    q: "Como é a primeira consulta?",
    a: "É o momento de conhecer você! Conversamos sobre sua alimentação, sua saúde e o que você gostaria de alcançar com o acompanhamento. Se tiver exames recentes, vale separá-los, assim como a lista de medicamentos ou suplementos em uso. No agendamento, te explico como se preparar para o nosso encontro.",
  },
  {
    q: "Qual o valor e a duração da consulta?",
    a: "Me chame no WhatsApp! Por lá, te conto os valores, as formas de pagamento e a duração de cada consulta. Os períodos dos planos indicam o tempo total de acompanhamento, não a duração de cada encontro.",
  },
  {
    q: "Como funciona o acompanhamento?",
    a: "Todos os planos incluem um plano alimentar completo, um guia individualizado e suporte pelo WhatsApp durante o período contratado. Você escolhe entre 1, 2, 4 ou 6 consultas, com liberdade para combinar as datas dentro do período do seu plano.",
  },
  {
    q: "Como funciona o suporte pelo WhatsApp?",
    a: "Durante o período do seu acompanhamento, você pode enviar mensagens todos os dias, em qualquer horário, para esclarecer dúvidas, conversar sobre ajustes no plano e receber sugestões de receitas.",
  },
  {
    q: "Quando começa o período do plano?",
    a: "O período de acompanhamento começa na data da contratação. Dentro desse período, você tem liberdade para agendar suas consultas de acordo com sua disponibilidade e preferência. Combinamos as datas pelo WhatsApp.",
  },
  {
    q: "Você atende por plano de saúde?",
    a: "O atendimento é particular. Disponibilizo recibo para você solicitar reembolso, caso seu convênio ofereça essa opção. Vale confirmar as condições diretamente com a operadora.",
  },
];

// Publicações selecionadas pela profissional, exibidas pela incorporação do Instagram.
export const posts = [
  { id: "DNT_EOLhDNU", url: "https://www.instagram.com/p/DNT_EOLhDNU/?img_index=1" },
  { id: "DMbPJaPJcT1", url: "https://www.instagram.com/p/DMbPJaPJcT1/?img_index=1" },
  { id: "DYBS3QQln4r", url: "https://www.instagram.com/p/DYBS3QQln4r/?img_index=1" },
] as const;
