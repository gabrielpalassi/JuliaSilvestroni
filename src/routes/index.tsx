import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, MessageCircle, Video, Tag } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  site,
  services,
  plans,
  principles,
  faq,
  posts,
  coupons,
  nav,
  contactUrl,
  instagramUrl,
  PLACEHOLDER,
} from "@/content/site";
import portrait from "@/assets/foto-profissional.png";
import aboutPortrait from "@/assets/foto-profissional-2.png";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Júlia Silvestroni | Nutricionista" },
      {
        name: "description",
        content:
          "Nutrição com método, leveza e resultado. Cuide da sua alimentação com um acompanhamento online pensado para você. Conheça a nutricionista Júlia Silvestroni.",
      },
      { property: "og:title", content: "Júlia Silvestroni | Nutricionista" },
      {
        property: "og:description",
        content:
          "Nutrição com método, leveza e resultado. Um acompanhamento online para comer bem e cuidar de você.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Btn({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const ext = href.startsWith("http");
  return (
    <a
      href={href}
      {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={
        variant === "primary"
          ? "group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
          : "group inline-flex items-center gap-2 rounded-full border border-foreground/25 px-7 py-3.5 text-sm transition-colors hover:border-foreground hover:bg-foreground/5"
      }
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function Placeholder({ label }: { label: string }) {
  return <span className="placeholder-note">{label}</span>;
}

function Index() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden pt-28 md:pt-36">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 md:grid-cols-12 md:pb-32">
            <div className="md:col-span-6">
              <Reveal>
                <p className="eyebrow">Comer bem pode ser simples</p>
                <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl lg:text-[5.5rem]">
                  Nutrição com método, <em className="text-accent">leveza</em> e resultado.
                </h1>
                <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
                  Cuidar da alimentação pode ser mais simples e prazeroso. Um plano feito para você,
                  com metas claras para chegar aos resultados que busca.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Btn href={contactUrl}>Agende sua consulta</Btn>
                  <Btn href="#sobre" variant="ghost">
                    Conheça meu trabalho
                  </Btn>
                </div>
              </Reveal>
            </div>
            <div className="relative order-first md:order-none md:col-span-6">
              <div
                className="blob absolute -right-10 -top-6 size-72 bg-sage/60 md:size-[28rem]"
                aria-hidden
              />
              <Reveal delay={150} className="relative md:absolute md:inset-0">
                <img
                  src={portrait}
                  width={1816}
                  height={1488}
                  fetchPriority="high"
                  alt="Júlia Silvestroni, nutricionista, sentada em um sofá"
                  className="aspect-[9/10] w-full rounded-t-[12rem] rounded-b-2xl object-cover md:aspect-auto md:h-full"
                />
                <div className="absolute -bottom-6 -left-4 rounded-2xl bg-card px-5 py-4 shadow-xl md:-left-10">
                  <p className="font-display text-lg">Nutricionista pela USP</p>
                  <p className="text-xs text-muted-foreground">
                    {site.crn || "CRN " + PLACEHOLDER}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="bg-sand/50 py-24 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12 md:items-center">
            <Reveal className="md:col-span-5">
              <img
                src={aboutPortrait}
                width={1418}
                height={1458}
                loading="lazy"
                alt="Retrato de Júlia Silvestroni, nutricionista"
                className="aspect-[5/6] w-full rounded-2xl object-cover object-center md:aspect-[3/4]"
              />
            </Reveal>
            <Reveal delay={100} className="md:col-span-6 md:col-start-7">
              <p className="eyebrow">Sobre mim</p>
              <h2 className="mt-5 text-4xl leading-tight md:text-6xl">Prazer, sou a Júlia.</h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Sou nutricionista formada pela Universidade de São Paulo e acredito que alcançar
                  seus objetivos pode ser um processo leve, com comida gostosa e escolhas que cabem
                  no seu dia.
                </p>
                <p>
                  No acompanhamento, unimos ciência e estratégia para transformar o que você busca
                  em passos práticos. Quero ajudar você a alcançar suas metas com mudanças que
                  funcionem hoje e continuem fazendo parte da sua vida.
                </p>
              </div>
              <dl className="mt-10 grid gap-6 border-t pt-8 sm:grid-cols-2">
                <div>
                  <dt className="eyebrow">Formação</dt>
                  {site.education.map((e) => (
                    <dd key={e} className="mt-2">
                      {e}
                    </dd>
                  ))}
                </div>
                <div>
                  <dt className="eyebrow">Registro</dt>
                  <dd className="mt-2">
                    {site.crn || <Placeholder label={"CRN " + PLACEHOLDER} />}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="atendimento" className="py-24 md:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Atendimento</p>
                <h2 className="mt-5 max-w-xl text-4xl leading-tight md:text-6xl">
                  Vamos cuidar da sua alimentação?
                </h2>
              </div>
              <p className="max-w-sm text-muted-foreground">
                Atendimento 100% online, com plano alimentar, guia individualizado e suporte pelo
                WhatsApp em todos os planos. Você escolhe o tempo de acompanhamento que combina com
                o seu momento.
              </p>
            </Reveal>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 100}>
                  <article className="group flex h-full flex-col rounded-2xl border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                    <span className="font-display text-5xl text-sage">0{i + 1}</span>
                    <h3 className="mt-8 text-2xl">{s.title}</h3>
                    <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{s.text}</p>
                    {!s.confirmed && (
                      <div className="mt-6">
                        <Placeholder label={PLACEHOLDER} />
                      </div>
                    )}
                    <a
                      href={contactUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 text-sm text-primary"
                    >
                      Quero agendar{" "}
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-12 rounded-2xl border bg-sand/40 p-6 md:mt-16 md:p-8">
              <h3 className="text-2xl md:text-3xl">Seu tempo de acompanhamento</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Todos os planos incluem os cuidados acima. O que muda é o número de consultas e o
                período para seguirmos em contato.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
                {plans.map((plan) => (
                  <li key={plan.consultations} className="border-t border-accent/30 pt-4">
                    <p className="font-display text-2xl">{plan.consultations}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {plan.period}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                O período começa na data da contratação. As consultas são agendadas dentro desse
                prazo, conforme sua disponibilidade e preferência.
              </p>
              <a
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-primary hover:underline"
              >
                Conversar sobre os planos <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                Valores, formas de pagamento e duração de cada consulta pelo WhatsApp.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ABORDAGEM */}
        <section className="bg-primary py-24 text-primary-foreground md:py-36">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="eyebrow text-primary-foreground/60">Abordagem</p>
              <h2 className="mt-5 text-4xl leading-tight md:text-6xl">
                Um cuidado que combina com você.
              </h2>
              <img
                src={food2}
                width={1024}
                height={1024}
                loading="lazy"
                alt="Cesta com cenouras, tomates e folhas frescas"
                className="mt-10 aspect-square w-full rounded-2xl object-cover"
              />
            </Reveal>
            <div className="space-y-12 md:col-span-6 md:col-start-7 md:pt-24">
              {principles.map((p, i) => (
                <Reveal
                  key={p.n}
                  delay={i * 100}
                  className="border-t border-primary-foreground/20 pt-8"
                >
                  <span className="text-sm text-sage">{p.n}</span>
                  <h3 className="mt-3 text-3xl">{p.title}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-primary-foreground/75">
                    {p.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INSTAGRAM */}
        <section className="bg-sand/50 py-24 md:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Um pouco do que compartilho</p>
                <h2 className="mt-5 text-4xl md:text-6xl">@{site.instagram}</h2>
              </div>
              <Btn href={instagramUrl} variant="ghost">
                Acompanhe no Instagram
              </Btn>
            </Reveal>
            <div className="mt-14 grid gap-6 xl:grid-cols-3">
              {posts.map((p, i) => (
                <Reveal key={p.id} delay={i * 100} className="min-w-0">
                  <article className="overflow-hidden rounded-2xl border bg-card">
                    <iframe
                      src={`https://www.instagram.com/p/${p.id}/embed/`}
                      title={`Publicação ${i + 1} de Júlia Silvestroni no Instagram`}
                      loading="lazy"
                      className="h-[540px] w-full border-0"
                    />
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-2 border-t p-5 text-sm text-primary hover:underline"
                    >
                      Ver publicação {i + 1} no Instagram{" "}
                      <ArrowUpRight className="size-4 shrink-0" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Você também pode abrir cada publicação no Instagram pelos links acima.
            </p>
          </div>
        </section>

        {/* CUPONS E PARCERIAS */}
        <section id="parcerias" className="border-b py-24 md:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <p className="eyebrow">Parcerias</p>
              <h2 className="mt-5 text-4xl md:text-6xl">Cupons &amp; Parcerias</h2>
              <p className="mt-5 max-w-xl text-muted-foreground">
                Tem desconto para você nas marcas parceiras! É só usar o cupom na hora da compra.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {coupons.map((coupon, i) => (
                <Reveal key={coupon.brand} delay={i * 100}>
                  <article className="flex h-full flex-col rounded-2xl border bg-card p-8">
                    <Tag className="size-6 text-accent" aria-hidden="true" />
                    <h3 className="mt-6 text-3xl">{coupon.brand}</h3>
                    <p className="mt-2 text-primary">{coupon.discount}</p>
                    <div className="mt-6 rounded-xl border border-dashed border-accent/60 bg-sand/50 p-4">
                      <p className="text-xs text-muted-foreground">Cupom</p>
                      <code className="mt-2 block break-all text-sm font-semibold select-all">
                        {coupon.code}
                      </code>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="py-24 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="eyebrow">Dúvidas</p>
              <h2 className="mt-5 text-4xl md:text-6xl">Perguntas frequentes</h2>
            </Reveal>
            <Reveal delay={100} className="md:col-span-7 md:col-start-6">
              <Accordion type="single" collapsible>
                {faq.map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger className="py-6 text-left font-display text-xl font-normal hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section id="contato" className="px-4 pb-24 md:px-6">
          <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-accent px-8 py-20 text-center text-accent-foreground md:py-28">
            <img
              src={food1}
              loading="lazy"
              width={1024}
              height={1024}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-multiply"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-4xl leading-tight md:text-6xl">
                Vamos dar o primeiro passo?
              </h2>
              <p className="mx-auto mt-6 max-w-md text-accent-foreground/85">
                Vou adorar conhecer você e saber o que busca. Me chame para conversar sobre o
                acompanhamento e descobrir como podemos começar.
              </p>
              <a
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 text-sm text-foreground transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="size-4" />{" "}
                {site.whatsapp ? "Agendar pelo WhatsApp" : "Falar pelo Instagram"}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <a
              href="#inicio"
              className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <img
                src="/brand/logo-rodape.svg"
                alt={`${site.name}, nutricionista`}
                width={364}
                height={140}
                loading="lazy"
                className="h-auto w-64 max-w-full"
              />
            </a>
            <p className="mt-2 text-sm text-muted-foreground">{site.crn || "CRN " + PLACEHOLDER}</p>
          </div>
          <nav aria-label="Rodapé" className="flex flex-col gap-2 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-muted-foreground hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <Instagram className="size-4" />@{site.instagram}
            </a>
            <a
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <MessageCircle className="size-4" />
              +55 (11) 99712-5332
            </a>
            <a href="/privacidade" className="text-muted-foreground hover:text-foreground">
              Política de privacidade
            </a>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-7xl px-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}
