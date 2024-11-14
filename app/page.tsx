import Link from "next/link";

import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { Container } from "@/components/Container";
import logoMicrosoft from "@/images/logos/microsoft.svg";
import logoPlantylight from "@/images/logos/plantylight.svg";
import logoRicardo from "@/images/logos/ricardo.svg";
import Image, { type ImageProps } from "next/image";

type ResumeItemProps = {
  logo: ImageProps["src"];
  dates: {
    from: string;
    to?: string;
  };
  company: string;
  jobTitle: string;
  order: number;
};

const JOB_EXPERIENCES: ResumeItemProps[] = [
  {
    company: "Microsoft",
    dates: {
      from: "2022",
    },
    logo: logoMicrosoft,
    jobTitle: "Product Manager",
    order: 3,
  },
  {
    company: "plantylight",
    dates: {
      from: "2023",
    },
    logo: logoPlantylight,
    jobTitle: "3D Designer",
    order: 4,
  },
  {
    company: "Microsoft",
    dates: { from: "2020", to: "2022" },
    jobTitle: "Software Engineer",
    logo: logoMicrosoft,
    order: 2,
  },
  {
    company: "Ricardo",
    dates: {
      from: "2018",
      to: "2020",
    },
    jobTitle: "Software Engineer",
    logo: logoRicardo,
    order: 1,
  },
];

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function ResumeItem({ company, dates, logo, jobTitle }: ResumeItemProps) {
  const endDate = dates.to || new Date().getFullYear().toString();
  const endLabel = dates.to || "Present";

  return (
    <li className="flex gap-4">
      <div className="flex mt-1 h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          className="w-7 h-7 rounded-full"
          src={logo}
          alt={`${company} logo`}
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{jobTitle}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${dates.from} until ${endLabel}`}
        >
          <time dateTime={dates.from}>{dates.from}</time>{" "}
          <span aria-hidden="true">-</span>{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

type ResumeProps = {
  experiences: ResumeItemProps[];
};

function Resume({ experiences }: ResumeProps) {
  return (
    <div className="flex flex-col p-8 border border-zinc-100 dark:border-zinc-700/40 rounded-2xl gap-y-6 w-auto">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />{" "}
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {experiences
          .sort((a, b) => b.order - a.order)
          .map((role, roleIndex) => (
            <ResumeItem key={roleIndex} {...role} />
          ))}
      </ol>
    </div>
  );
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="flex flex-col max-w-2xl gap-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Web developer, Product Manager, and 3D printing enthusiast.
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Pablo, a <span>Product Engineer</span> based in Valencia,
            Spain. I&apos;m passionate about building products that make a
            positive difference in people&apos;s lives.
          </p>
          <div className="flex flex-row gap-x-6">
            <SocialLink
              href="https://github.com/PabloGracia"
              aria-label="Follow on Github"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/pablograciagil/"
              aria-label="Follow on Linkedin"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <Resume experiences={JOB_EXPERIENCES} />
      </Container>
    </>
  );
}
