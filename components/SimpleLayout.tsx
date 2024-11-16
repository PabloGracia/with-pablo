import { Container } from "./Container";

type SimpleLayoutProps = {
  header: string;
  description: string;
  children: React.ReactNode;
};

export function SimpleLayout({
  children,
  description,
  header,
}: SimpleLayoutProps) {
  return (
    <Container className="mt-16 sm:mt-32">
      <article>
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {header}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </header>
        {children && <div className="mt-16 sm:mt-20">{children}</div>}
      </article>
    </Container>
  );
}
