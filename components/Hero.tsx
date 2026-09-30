import { Sparkles, TrendingUp, Home, Shield } from "lucide-react";
import { Button } from "./Button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="grid-pattern relative overflow-hidden pt-6 lg:pt-10">
      <div className="mx-auto grid max-w-7xl gap-16 px-5  lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-8 lg:pb-32">
        <div className="group relative min-h-[22rem] rounded-[2rem] border border-white bg-[#6507E9] p-5 text-white shadow-2xl shadow-white transition-shadow duration-500 hover:shadow-primary/40 sm:min-h-[28rem]">
          <div className="absolute inset-5 flex items-center justify-center overflow-hidden rounded-[1.5rem] border-2 border-black">
            <div className="pointer-events-none absolute left-6 top-6 flex size-12 rotate-[-8deg] animate-float items-center justify-center rounded-2xl bg-gradient-to-br from-white/90 to-white/60 text-[#6507E9] shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
              <Home className="size-6" />
            </div>
            <div
              className="pointer-events-none absolute bottom-8 left-10 flex size-10 rotate-[10deg] animate-float items-center justify-center rounded-full bg-gradient-to-br from-white/90 to-white/50 text-[#6507E9] shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
              style={{ animationDelay: "1s" }}
            >
              <TrendingUp className="size-5" />
            </div>
            <div
              className="pointer-events-none absolute right-8 bottom-12 flex size-12 rotate-[6deg] animate-float items-center justify-center rounded-2xl bg-gradient-to-br from-white/90 to-white/60 text-[#6507E9] shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
              style={{ animationDelay: "0.5s" }}
            >
              <Shield className="size-6" />
            </div>
            <div
              className="pointer-events-none absolute right-10 top-10 flex size-9 rotate-[-12deg] animate-float items-center justify-center rounded-full bg-gradient-to-br from-white/80 to-white/40 text-[#6507E9] shadow-[0_6px_16px_rgba(0,0,0,0.3)]"
              style={{ animationDelay: "1.5s" }}
            >
              <Sparkles className="size-4" />
            </div>

            <div className="relative">
              <span className="absolute inset-0 -m-3 animate-ping-slow rounded-full border border-white" />
              <span className="absolute inset-0 -m-6 animate-ping-slower rounded-full border border-white" />

              <div className="relative h-60 w-60 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl shadow-primary/25 transition-transform duration-500 ease-out group-hover:scale-105">
                <Image
                  src="/img/cr.png"
                  alt="Charles M. Bucklin"
                  fill
                  sizes="240px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          </div>
          <span className="absolute right-8 top-8 font-mono text-[10px] uppercase tracking-widest text-white text-muted-foreground">
            Charles M. Bucklin
          </span>
        </div>

        <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
          Your trusted partner in <span className="text-primary">home financing.</span>
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">
          We understand that buying a home in today's dynamic market can feel overwhelming.
          At Advanced Mortgage LLC, we're here to guide you through every step of the journey.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/contact">Apply Now</Button>
          <Button href="/loan-programs" variant="outline">
            View Loan Programs
          </Button>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
          <Sparkles className="size-4" />
          Advanced Mortgage LLC
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-wrap gap-x-12 gap-y-6 border-t border-border px-5 py-8 text-sm lg:px-8">
        <span className="text-muted-foreground">Trusted by teams at</span>
        <span className="font-semibold">PULSE</span>
        <span className="font-semibold">MOTION</span>
        <span className="font-semibold">KINETIC</span>
        <span className="font-semibold">FIELDWORK</span>
      </div>

      <div className="mt-4 border-t border-border p-16 pt-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          Charles M. Bucklin was born in Washington DC, raised in Rockville, MD, and has been a member of the
          Sarasota community since 2020. As an active member in his community, he loves to help people with
          their financial goals. Being President of Advanced Mortgage LLC has placed him in the position of doing
          just that.
        </p>
        <p className="mt-2">
          Starting in the mortgage business in 2005 has made Mr. Bucklin extremely knowledgeable in all areas
          and programs in the mortgage business. Since opening Advanced Mortgage LLC, Mr. Bucklin has earned
          many awards and is now licensed in <span className="font-medium text-primary">PA, CO, DC, FL, MD, VA, and WV</span>.
          Mr. Bucklin enjoys spending time with his family, travelling, and being outdoors.
        </p>
      </div>
    </section>
  );
}