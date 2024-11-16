import { Hammer, Wrench, HardHat, Cone, ArrowRight } from "lucide-react";

export function UnderConstruction() {
  const tools = [
    { icon: Hammer, text: "Hammering out the details" },
    { icon: Wrench, text: "Tightening up loose ends" },
    { icon: HardHat, text: "Safety first, bugs last" },
    { icon: Cone, text: "Optimizing user pathways" },
  ];

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-4">
      {/* Main Content Container */}
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Animated Construction Icons */}
        <div className="flex justify-center gap-4 mb-8">
          {tools.map(({ icon: Icon }, index) => (
            <div
              key={index}
              className="animate-bounce"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Icon size={40} className="text-yellow-400" />
            </div>
          ))}
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-transparent bg-clip-text">
          Something Amazing Is Being Built
        </h1>

        {/* Subheading */}
        <p className="text-xl text-zinc-300 mb-8">
          I&apos;m currently working to bring this page to reality. Please hang
          on tight!
        </p>

        {/* Progress Section */}
        <div className="bg-zinc-800 p-6 rounded-lg shadow-xl border border-zinc-700">
          <div className="space-y-4">
            {tools.map(({ icon: Icon, text }, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-left"
              >
                <Icon className="text-yellow-400" />
                <span className="text-zinc-300 flex items-center gap-1">
                  {text}
                  <span className="inline-flex gap-1 text-yellow-400">
                    <span className="animate-pulse">.</span>
                    <span
                      className="animate-pulse"
                      style={{ animationDelay: "0.3s" }}
                    >
                      .
                    </span>
                    <span
                      className="animate-pulse"
                      style={{ animationDelay: "0.6s" }}
                    >
                      .
                    </span>
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12">
          <p className="text-lg text-zinc-400">Expected Completion</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <span className="text-zinc-400">Planning</span>
            <ArrowRight className="text-zinc-500" />
            <span className="text-yellow-400">Development</span>
            <ArrowRight className="text-zinc-500" />
            <span className="text-zinc-400">Launch</span>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-zinc-400 mt-8">
          Don&apos;t worry, I&apos;m making sure every pixel is in its perfect
          place.
          <br />
          Check back soon!
        </p>
      </div>
    </div>
  );
}
