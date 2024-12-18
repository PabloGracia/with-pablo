import React from "react";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

import logoRocket from "@/images/logos/Rocket Holding Hand.svg";
import mourningRibbon from "@/images/logos/Black Ribbon.svg";
import squareCircleLogo from "@/images/logos/square-circle-logo.svg";
import { SimpleLayout } from "@/components/SimpleLayout";

type ProjectProps = {
  logo: ImageProps["src"];
  href: string;
  title: string;
  description: string;
};

const PROJECTS: ProjectProps[] = [
  {
    title: "WithPablo",
    description: "This personal page you're visiting",
    href: "/projects/with-pablo",
    logo: logoRocket,
  },
  {
    title: "Ajuda Dana",
    description: 'Volunteering "marketplace"',
    href: "/projects/ajudadana",
    logo: mourningRibbon,
  },
  {
    title: "Pynqle",
    description: "Track your expenses with your significant other",
    href: "/projects/pynqle",
    logo: squareCircleLogo,
  },
];

function ArrowIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="currentColor" d="M5 12h14" />
      <path stroke="currentColor" d="m12 5 7 7-7 7" />
    </svg>
  );
}

function Project({ href, logo, description, title }: ProjectProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col flex-1 w-auto gap-y-6 rounded-2xl transition delay-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 p-6"
    >
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={logo} alt="" className="h-7 w-7" />
      </div>
      <div className="flex flex-col gap-y-3">
        <h3 className="text-zinc-800 dark:text-zinc-100 text-md font-semibold">
          {title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          {description}
        </p>
      </div>
      <p className="flex gap-2 text-zinc-400 dark:text-zinc-200 text-sm font-medium transition group-hover:text-teal-500 dark:group-hover:text-teal-400">
        <ArrowIcon className="h-6 w-6" />
        <span>See more details</span>
      </p>
    </Link>
  );
}

function ProjectsGrid({ projects }: { projects: ProjectProps[] }) {
  return (
    <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((props, index) => (
        <li key={index}>
          <Project {...props} />
        </li>
      ))}
    </ul>
  );
}

export default async function Page() {
  return (
    <SimpleLayout
      header="Things I've put a little bit of my soul trying to create something great."
      description="This section is reserved to projects I've worked on outside of my corporate expertise. Be it apps I've developed myself to solve specific problems, volunteering projects, or hobby creations, you can find out more about each of them in here."
    >
      <ProjectsGrid projects={PROJECTS} />
    </SimpleLayout>
  );
}
