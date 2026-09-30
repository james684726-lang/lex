import Image from "next/image";
import Link from "next/link";
import React from "react";
import HomeUI from "./homeui";

function Heros() {
  return (
    <section className="relative border rounded-xl bg-gradient-to-r from-[#182D88] to-[#182D82] py-10">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/mb.png"
          alt="Business funding background"
          fill
          className="object-cover rounded-2xl"
        />
        <div className="absolute rounded-2xl inset-0 bg-gradient-to-r from-[#182D88]/85 to-[#182D82]/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text */}
          <div className="max-w-xl">
            <h1 className="text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Advanced Mortgage LLC
            </h1>

            <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
              We understand that buying a home in today’s dynamic market can
              feel overwhelming. At Advanced Mortgage LLC, we’re here to
              guide you through every step of the journey, offering
              personalized solutions and expert advice tailored to current
              trends.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
             <Link href="/loan-programs"> <button className="rounded-md bg-[#182D88] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:scale-105 hover:bg-[#182D88]/90">
                View Loan Types
              </button>
              </Link>
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white transition-all hover:scale-105 hover:text-[#63F807]/90">
              <Link href="/contact">
                Begin Application
                <span aria-hidden>&rarr;</span>
                </Link>
              </button>
            </div>

            {/* Footnote */}
            <p className="mt-6 text-xs text-white/60">
              ** Conditions apply. Please consult your loan officer for more
              details.
            </p>
          </div>


          <div>
            <HomeUI/>
          </div>
        
        
        
        
        
        </div>
      </div>
    </section>
  );
}

export default Heros;




