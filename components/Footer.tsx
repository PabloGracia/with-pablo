import { PAGE_LINKS } from "@/constants/page-links";
import Link from "next/link";
import { ContainerInner, ContainerOuter } from "./Container";

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <ContainerInner className="pb-16 pt-10 border-t border-zinc-100 dark:border-zinc-700/40">
          <div className="flex flex-col flex-1  gap-y-6 justify-between sm:flex-row">
            <div className="flex flex-row space-x-2 text-zinc-800 dark:text-zinc-200 text-sm font-semibold">
              {PAGE_LINKS.sort((a, b) => a.order - b.order).map(
                ({ href, label, order }) => (
                  <Link
                    href={href}
                    key={order}
                    className="transition hover:text-teal-500 dark:hover:text-teal-400"
                  >
                    {label}
                  </Link>
                )
              )}
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} Pablo Gracia Gil. All rights
              reserved.
            </p>
          </div>
        </ContainerInner>
      </ContainerOuter>
    </footer>
  );
}
