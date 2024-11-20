import { Container } from "@/components/Container";

export default async function Page() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="lg:row-span-2">
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hello there. I&apos;m Pablo Gracia Gil, and I live in sunny
            Valencia, Spain. Stay and get to know me better!
          </h1>
          <p>
            I&apos;ve always been drawn to building things. I&apos;m a creator
            at heart - the kind of person who sees a problem and can&apos;t help
            but think &quot;I could build something to fix that&quot;. In the
            past few years, and as a consequence of my professional evolution,
            I&apos;ve continued developing a strong love for building things,
            with a shift into building thigs{" "}
            <span className="italic"> that matter</span>.{" "}
          </p>
          <p>
            It&apos;s not just about creating something new - it&apos;s about
            solving real problems that make a positive difference in
            people&apos;s lives. Through a transition early in my career into
            Software Development I learnt how to bring ideas to life through
            code. However, it was dipping my toes in the Product world what
            really opened my eyes to the bigger picture. I learned that great
            products aren&apos;t just about clean code or fancy features - they
            are about understanding what people truly need and finding elegant
            ways to deliver it. This perspective has completely changed how I
            approach problem-solving, both in my professional work and personal
            projects.
          </p>
          <p>
            Speaking of personal projects - last year I found myself frustrated
            with how complicated it was to manage shared finances with my wife.
            I shopped around for solutions and found that none of them truly
            fitted my needs. So, I decided to build one for us. And I&apos;ll
            admit it: perhaps the excitement about building my own app made me
            overlook some existing solutions that could have worked. Alas, this
            is a decision I don&apos;t regret. I have had tremendous fun
            building this project from scratch.
          </p>
          <p>
            On another note on personal projects (aka,{" "}
            <span className="italic">hobbies</span>), I have always had a strong
            interest in 3D Design (CAD). Last year, I decided to check a
            long-lasting item in my wishlist, and treated myself to a 3D
            printer. Oh boy, has it been fun. There&apos;s something incredibly
            satisfying about starting with an idea on a screen and ending with a
            functional piece that you can hold with your hands. I wanted to put
            my newly acquired skills and capabilities to practice, so I started
            creating prototypes and pieces that my wife&apos;s business (
            <a href="https://plantylight.com/">plantylight</a>) would eventually
            transform in home decor items.
          </p>
          <p>
            If there is one thing to take from this thesis, is that I love
            creating things of value. As I mentioned before,{" "}
            <span className="italic">I&apos;m a creator at heart.</span> If you
            want to create things with me, you can find me at{" "}
            <a
              href="mailto:talk@with-pablo.com"
              className="text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
              talk@with-pablo.com
            </a>
            . Thank you for coming to my TED Talk.
          </p>
        </div>
      </div>
    </Container>
  );
}

/*
I'm a creator at heart - the kind of person who sees a problem and can't help but think "I could build something to fix that." Whether it's crafting web applications, designing 3D-printed solutions for businesses, or developing a budgeting app to help couples manage their finances better, I'm driven by the satisfaction of turning ideas into real, useful things.
My journey has taken me from web development to product management, and I've found that these roles complement each other perfectly. As a developer, I learned how to build solutions from the ground up. As a product manager, I've honed the ability to ensure those solutions truly matter to the people using them. It's not just about writing code or shipping features - it's about creating something that makes a difference in someone's life.
This mindset extends beyond my professional work. When I noticed my partner and I struggling with shared budgeting, I didn't just look for existing solutions - I built one. When local businesses needed custom 3D-printed parts, I dove into CAD design to help them out. That's who I am: someone who thrives on turning challenges into opportunities to create something valuable.

I've always been drawn to building things that matter. It's not just about creating something new - 
it's about solving real problems that make a difference in people's lives. Recently, this drive led 
me to help a local business overcome their manufacturing challenges through 3D design and printing. 
There's something incredibly satisfying about starting with an idea on a screen and ending with a 
functional piece that solves a real business need.

My background in web development taught me how to bring ideas to life through code, but it was moving 
into product management that really opened my eyes to the bigger picture. I learned that great 
products aren't just about clean code or fancy features - they're about understanding what people 
truly need and finding elegant ways to deliver it. This perspective has completely changed how I 
approach problem-solving, both in my professional work and personal projects.

Speaking of personal projects - last year I found myself frustrated with how complicated it was to 
manage shared finances with my partner. Instead of settling for existing solutions that didn't quite 
fit, I decided to build something better. That's just how my mind works - when I see a problem that 
affects real people (in this case, couples trying to budget together), I can't help but roll up my 
sleeves and create a solution. It's this combination of technical skills and human-centered thinking 
that gets me excited about what I do.

*/
