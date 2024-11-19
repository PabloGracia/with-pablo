import { Container } from "@/components/Container";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

import paiportaTree from "@/images/paiporta-tree.png";
import flippedCar from "@/images/paiporta-turned-car.jpeg";
import blueVan from "@/images/paiporta-blue-van.jpeg";
import requestsSummary from "@/images/ajudadana-requests-offers.png";
import supabaseIcon from "@/images/logos/supabase-logo-icon.svg";
import nextJsIcon from "@/images/logos/nextjs-icon-dark-background.svg";
import tailwindCSS from "@/images/logos/tailwindcss-mark.svg";

type TechStackItemProps = {
  logo: ImageProps["src"];
  name: string;
};
function TechStackItem({ name, logo }: TechStackItemProps) {
  return (
    <div className="flex flex-row text-zinc-700 dark:text-zinc-300 items-center space-x-4">
      <div className="w-7 h-7 content-center">
        <Image src={logo} alt={`${name} logo`} />
      </div>
      <span>{name}</span>
    </div>
  );
}

export default function Page() {
  return (
    <Container className="mt-16 sm:mt-32">
      <article className="text-base text-zinc-600 dark:text-zinc-400 space-y-10">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Ajudadana was born to give people a place to request and offer help,
          as a relief measure in the face of the 2024 Dana disaster in Valencia,
          Spain.
        </h1>
        <section className="mt-6 space-y-2">
          <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            TL;DR
          </h3>
          <p>
            In response to devastating floods in Valencia, I helped develop
            Ajudadana - a critical platform connecting flood victims with
            volunteers. The platform processed over 1,000 help requests and
            10,000 volunteer offers in its first weeks. I focused on building
            request matching systems, contributing to a project that became a
            vital resource during the crisis. You can see my contributions in my{" "}
            <Link
              href="https://github.com/PabloGracia"
              aria-label="Visit Pablo Gracia's GitHub profile to see contributions to Ajudadana"
            >
              GitHub profile
            </Link>
            .
          </p>
        </section>
        <section className="mt-6 flex flex-col gap-3 space-y-2">
          <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            The story
          </h3>
          <p>
            In the night of october 29th, 2024, torrential floods devastated
            numerous villages in the province of Valencia, leaving hundreds of
            deaths, and houses, business and general livelihood of the villages
            ravaged overnight. Government help faltered, and citizens took to
            mobilize themselves and provide help to the affected citizens and
            villages. There was, however, a huge logistics problem.
          </p>
          <div className="flex justify-between pl-2 pr-4 py-4 gap-6">
            <div className="flex-1">
              <Image
                className="rounded-lg object-cover"
                alt="Car flipped upside down due to flood damage in Valencia"
                src={flippedCar}
              />
            </div>
            <div className="flex-1">
              <Image
                className="rounded-lg object-cover"
                alt="Riverbed where the flood originated"
                src={paiportaTree}
              />
            </div>
          </div>
          <p>
            Different villagers needed different help, and volunteers
            didn&apos;t know where their help would be most needed. Some people
            would need food and water, others would need assistance cleaning the
            mud. Older citizens needed access to medicines, and others required
            the help of tradesmen to assist with plumbing, electricity, or other
            necessities. Volunteers would bring hoes and shovels to clean mud,
            non-perishable food and diapers for affected people, or medical and
            psychological help for assistance. The main problem is that it
            wasn&apos;t clear which village was in higher need of help, and even
            within that village, which street or house required immediate help.
            To help with that situation,{" "}
            <Link
              className="text-zinc-800 dark:text-zinc-100 font-semibold"
              href="https://ajudadana.es/"
            >
              https://ajudadana.es/
            </Link>{" "}
            was created.
          </p>
          <div className="flex justify-between pl-2 pr-4 py-4 gap-6">
            <div className="flex-1">
              <Image
                className="rounded-lg object-cover"
                alt="Ground floor levels destroyed by the mud"
                src={blueVan}
              />
            </div>
          </div>
          <p>
            Within the span of three days, the website was up and running,
            helping to match people who seeked help with a specific situation
            with people who were willing to provide that help. The first few
            days after the disaster struck, I volunteered my time and energy
            cleaning rubble and mud off the streets and busineses. Once I found
            about this project, I felt I needed to help with this initiative
            with everything I could, so I traded rolling up my sleeves to clean
            mud to roll up my sleeves and code.
          </p>
          <p>
            It was an extremely fast-paced environment where truly urgent
            requests were coming left and right. People in help needed to be
            able to update and delete their already-fulfilled requests.
            Volunteers who were calling people to match people offering help and
            requesting help needed specific CRM features to allow them to do
            this job. We had to make sure user privacy was kept as secure as
            possible, as even in the more dire situations there were bad actors
            with ill intentions. Overall, it was a very intense collaboration
            among several of us who volunteered our time and skills, with very
            positive outcomes. The website appeared on several news stations to
            spread people&apos;s knowledge about it, and was highly praised by
            those that used it to request for help. Overall, we received{" "}
            <span className="font-bold text-zinc-800 dark:text-zinc-100">
              more than 1K requests of help and more than 10K offers to help.
            </span>
          </p>
          <div className="flex justify-between pl-2 pr-4 py-4 gap-6">
            <div className="flex-1">
              <Image
                className="rounded-lg object-cover"
                alt="Ground floor levels destroyed by the mud"
                src={requestsSummary}
              />
            </div>
          </div>
        </section>
        <section className="mt-6 space-y-6">
          <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Tech stack and implementation
          </h3>
          <p>
            The web was built using a combination of NextJS + TailwindCSS in the
            frontend and Supabase in the backend, giving us extreme speed of
            development and helping us ship very quickly features such as user
            authentication and with high security, thanks to Postgres Row Level
            Security.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TechStackItem logo={nextJsIcon} name="NextJS" />
            <TechStackItem logo={tailwindCSS} name="TailwindCSS" />
            <TechStackItem logo={supabaseIcon} name="Supabase" />
          </div>
          <div className="space-y-1">
            <p>
              Working under extreme time pressure, we had to balance rapid
              development with security and reliability. Key features included:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Implementing secure user authentication while maintaining ease
                of access
              </li>
              <li>
                Creating a robust matching system between help requests and
                offers
              </li>
              <li>Ensuring data privacy and protection</li>
            </ul>
          </div>
          <p>
            This project taught valuable lessons about rapid deployment in
            crisis situations, balancing security with accessibility, and the
            importance of clear communication in team collaboration. The
            platform&apos;s success demonstrated how technology can effectively
            coordinate community response during natural disasters.
          </p>
        </section>
      </article>
    </Container>
  );
}
