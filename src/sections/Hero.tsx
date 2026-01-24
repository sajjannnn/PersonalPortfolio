import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download, Github, Linkedin, Twitter } from "lucide-react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Prisma",
  "Jest",
  "Cypress",
  "Figma",
  "Git",
  "GitHub Actions",
];

const Hero = () => {
  return (
    <section>
      <div className="absolute inset-0 ">
        <img src="/hero-bg.jpg" alt="Hero Image" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background "></div>
      </div>

      {/* Green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none ">
        {[...Array(30)].map((_, i) => (
          <div key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="h-2 w-2 bg-primary rounded-full" />
                Software Engineer - React Specialist
              </span>
            </div>
            {/* Headline  */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-400">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">precision.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-600">
                Hi, I'm Pedro Machado — a software engineer specializing in React, Next.js, and TypeScript. I build scalable, performant web applications that users love.
              </p>
            </div>
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow Me:</span>

              {[
                { icon: Github, href: "https://github.com/sajjannnn" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sajjan-kumar18" },
                { icon: Twitter, href: "https://x.com/ctrlsazz" },
              ].map((social, idx) => (
                <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  {<social.icon className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* right Content */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via transparent to-primary/10 blur-2xl animate-pulse"/>
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="/profile-photo.jpg" alt="Sajjan Kumar" className="w-full aspect-[4/5] object-cover rounded-2xl" />
                {/* Floating badge */}
                <div className="absolute -buttom-4 -right-4 glass rounded-xl px-4 py-1 animate-float animation-delay-500">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                    <span className="text-sm font-medium">
                      Available For Work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center"> Technologies I worked with</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills,...skills].map((skill,idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl text-muted-foreground/50 font-semibold hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="absolute buttom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
        href="#about" 
        className="flex flex-col items-center gap-2 text-muted-foreground hover:">
          <span className="text-xs uppercase tracking-wider">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce"/>
        </a>
      </div>
    </section>
  );
};

export default Hero;
