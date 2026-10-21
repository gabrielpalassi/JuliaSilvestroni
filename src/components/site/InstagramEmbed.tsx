import { useEffect, useRef, useState } from "react";

export function InstagramEmbed({ id, title }: { id: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    // Start well before the post enters the viewport, including on long mobile layouts.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "4000px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-[540px]">
      {!loaded && (
        <div aria-hidden="true" className="absolute inset-0 flex flex-col p-5">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full bg-muted motion-safe:animate-pulse" />
            <div className="h-3 w-32 rounded-full bg-muted motion-safe:animate-pulse" />
          </div>
          <div className="my-5 flex flex-1 items-center justify-center rounded-lg bg-muted/50">
            <span className="text-sm text-muted-foreground">Carregando publicação…</span>
          </div>
          <div className="h-3 w-3/4 rounded-full bg-muted motion-safe:animate-pulse" />
        </div>
      )}
      {shouldLoad && (
        <iframe
          src={`https://www.instagram.com/p/${id}/embed/`}
          title={title}
          loading="eager"
          onLoad={() => setLoaded(true)}
          className={`relative h-full w-full border-0 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}
