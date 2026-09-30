
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Phone, Mail, MapPin } from "lucide-react";
import { loanPrograms } from "@/app/data/loanPrograms";
import { Hero } from "@/components/Hero";
import {
  Home,
  TrendingUp,
  RefreshCw,
  Shield,
  Award,
  Building2,
  Landmark,
  ArrowUpRight,
} from "lucide-react";


export const metadata = { title: "About Us | Advanced Mortgage LLC" };

const teamMembers = [
  {
    name: "Charles M. Bucklin",
    title: "President",
    email: "charlie@advancedmortgagellc.com",
    phone: "202.702.4861",
    phone2: "941.223.2125",
    nmls: "NMLS ID: 460665",
    image: "/img/c.png",
    bio: "Charles M. Bucklin was born in Washington DC, raised in Rockville, MD, and has been a member of the Sarasota community since 2020. As an active member in his community, he loves to help people with their financial goals. Being President of Advanced Mortgage LLC has placed him in the position of doing just that. Starting in the mortgage business in 2005 has made Mr. Bucklin extremely knowledgeable in all areas and programs in the mortgage business. Since opening Advanced Mortgage LLC, Mr. Bucklin has earned many awards and is now licensed in PA, CO, DC, FL, MD, VA, and WV. Mr. Bucklin enjoys spending time with his family, travelling, and being outdoors.",
  },
  {
    name: "Ernest M. Jones III",
    title: "Sr. Loan Advisor",
    email: "ernest@advancedmortgagellc.com",
    phone: "703.587.6252",
    phone2: "941.310.1414",
    nmls: "NMLS ID: 2399525",
    image: "/img/eb.jpg",
    bio: "Ernest M. Jones III is a Senior Loan Advisor with extensive experience in the mortgage industry. He is dedicated to helping clients navigate the complexities of home financing with personalized guidance and expert advice.",
  },
  {
    name: "Erin Rehman",
    title: "Loan Advisor",
    email: "Erin@advancedmortgagellc.com",
    phone: "240.401.3569",
    nmls: "NMLS ID: 2530618",
    image: "/img/eg.jpg",
    bio: "Erin Rehman is a dedicated Loan Advisor committed to helping clients achieve their homeownership dreams. With a focus on personalized service, Erin guides borrowers through every step of the mortgage process.",
  },
  {
    name: "Marie Estrada Sapalicio",
    title: "Loan Advisor",
    email: "marie@advancedmortgagellc.com",
    phone: "240.793.0110",
    nmls: "NMLS ID: 460683",
    image: "/img/im.jpg",
    bio: "Marie Estrada Sapalicio is a skilled Loan Advisor who brings expertise and compassion to every client interaction. She specializes in helping borrowers find the right mortgage solutions for their unique situations.",
  },
];

const loanCategories = [
  { label: "Conventional Fixed Rate Mortgages (FRM)", slug: "/fixed-rate-frm-loans", icon: Home },
  { label: "Adjustable Rate Mortgages (ARM)", slug: "/adjustable-rate-arm-loans", icon: TrendingUp },
  { label: "Refinance Mortgage Loans", slug: "/refinance", icon: RefreshCw },
  { label: "FHA Mortgage Loans", slug: "/fha-loans", icon: Shield },
  { label: "VA Mortgage Loans", slug: "/va-home-loans", icon: Award },
  { label: "Jumbo Loans", slug: "/jumbo-loans", icon: Building2 },
  { label: "Home Equity Loans", slug: "/home-equity-loans", icon: Landmark },
  { label: "Reverse Mortgage Loans", slug: "/reverse-mortgage-loans", icon: Home },
];
export default function AboutPage() {
  return (
    <main className="pt-36 overflow-x-hidden">
      <Hero/>
      <section className="mx-auto max-w-7xl px-5 pb-12 lg:px-8 lg:pb-16">
        <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
          About Advanced Mortgage
        </p>
        <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-[-.05em] sm:text-7xl">
          Your trusted partner in
          <span className="text-primary"> home financing.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
          We understand that buying a home in today's dynamic market can feel overwhelming.
          At Advanced Mortgage LLC, we're here to guide you through every step of the journey,
          offering personalized solutions and expert advice tailored to current trends.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-card">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
              Our Mission
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight">
              Serve with integrity, guide with expertise.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                At Advanced Mortgage our Mission is to serve individuals and families with the
                utmost integrity. Advanced Mortgage, NMLS ID: 1762428 / Charles M. Bucklin, NMLS ID: 460665.
              </p>
              <p>
                Financing a home in PA, DC, FL, MD, VA, & WV can be one of the biggest commitments
                you will ever make – let Advanced Mortgage help guide you throughout the entire
                loan process from application to closing and beyond.
              </p>
              <p className="text-sm text-muted-foreground/70">
                Total finance charges may be higher over the life of the loan.
              </p>
            </div>
            <Button href="/contact" className="mt-6 self-start">
              Apply Now <ArrowUpRight className="ml-1 size-4" />
            </Button>
          </div>
          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-[.25em] text-primary">
              Licensed States
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["PA", "CO", "DC", "FL", "MD", "VA", "WV"].map((state) => (
                <span
                  key={state}
                  className="rounded-lg bg-primary/10 px-3 py-2 text-center font-semibold text-primary"
                >
                  {state}
                </span>
              ))}
            </div>
            <div className="mt-6 border-t border-border pt-6">
              <h4 className="text-sm font-medium">Contact Us</h4>
              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Phone className="size-4 text-primary" />
                  <span>202.702.4861</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="size-4 text-primary" />
                  <span>941.223.2125</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="size-4 text-primary" />
                  <span>charlie@advancedmortgagellc.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="size-4 text-primary" />
                  <span>1777 Tamiami Trail Office 5 Suite 304, Port Charlotte, FL 33948</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Programs Quick Links */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
            Our Loan Programs
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Find the right mortgage for you
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you're buying your first home or refinancing, we have a solution.
          </p>
        </div>
       <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {loanCategories.map((category) => {
    const program = loanPrograms.find((p) => p.slug === category.slug);
    const Icon = category.icon;
    return (
      <Link
        key={category.slug}
        href={`/loan-programs/${category.slug}`}
        className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/5"
      >
        <div className="mb-3 rounded-lg bg-primary/10 p-2.5 w-fit text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="size-5" />
        </div>
        <h3 className="font-medium group-hover:text-primary transition-colors">
          {category.label}
        </h3>
        {program && (
          <p className="mt-1 text-xs text-muted-foreground">{program.accent}</p>
        )}
        <span className="mt-3 inline-flex items-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          Learn more <ArrowUpRight className="ml-1 size-3" />
        </span>
      </Link>
    );
  })}
</div>
      </section>

      {/* Team Section */}
      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
              Meet Our Team
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Experts you can trust
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Our team of dedicated professionals is here to guide you through every step
              of your home financing journey.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="rounded-3xl border border-border bg-background p-6 transition-all hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex items-start gap-5">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm font-medium text-primary">{member.title}</p>
                    <p className="text-xs text-muted-foreground">{member.nmls}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-1.5 border-t border-border pt-4 text-sm">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="size-4 text-primary" />
                    {member.email}
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\./g, "")}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="size-4 text-primary" />
                    {member.phone}
                  </a>
                  {member.phone2 && (
                    <a
                      href={`tel:${member.phone2.replace(/\./g, "")}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors ml-6"
                    >
                      <Phone className="size-4 text-primary/70" />
                      {member.phone2}
                    </a>
                  )}
                </div>

                {member.bio && (
                  <p className="mt-4 text-sm text-muted-foreground line-clamp-3">
                    {member.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="rounded-3xl bg-gradient-to-r from-[#6507E9] to-[#6507E9] p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to start your journey?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/80">
            Let us help you navigate the mortgage process with confidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 font-semibold text-[#6507E9] transition-all hover:scale-105 hover:bg-[white]/90"
            >
              Apply Now
            </Link>
            <Link
              href="/loan-programs"
              className="rounded-full bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              View Loan Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}