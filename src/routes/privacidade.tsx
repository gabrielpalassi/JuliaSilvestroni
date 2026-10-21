import { createFileRoute, Link } from "@tanstack/react-router";
import { site, instagramUrl } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacidade")({
  head: () =>
    pageHead({
      title: "Política de privacidade | Júlia Silvestroni",
      description: "Como tratamos seus dados, em conformidade com a LGPD.",
      path: "/privacidade",
    }),
  component: Privacy,
});

function Privacy() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Voltar
      </Link>
      <h1 className="mt-8 text-5xl">Política de privacidade</h1>
      <div className="mt-10 space-y-5 leading-relaxed text-muted-foreground">
        <p>
          Este site não possui formulários e não coleta dados pessoais diretamente. Os botões de
          contato direcionam para canais externos (Instagram ou WhatsApp), sujeitos às políticas
          dessas plataformas.
        </p>
        <p>
          As publicações incorporadas do Instagram são carregadas diretamente dessa plataforma, que
          pode tratar dados de navegação conforme sua própria política de privacidade.
        </p>
        <p>
          As informações compartilhadas durante o atendimento são tratadas com sigilo profissional,
          conforme o Código de Ética do Nutricionista e a Lei Geral de Proteção de Dados (Lei
          13.709/2018).
        </p>
        <p>
          Se tiver alguma dúvida sobre seus dados, fale com {site.name} pelo{" "}
          <a className="underline" href={instagramUrl}>
            Instagram
          </a>
          .
        </p>
      </div>
    </main>
  );
}
