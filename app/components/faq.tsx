"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  [
    "How much home can I afford?",
    "Your comfort zone depends on income, debts, down payment, credit, taxes, insurance, and your goals. We look at the full picture before recommending a path.",
  ],
  [
    "How much should I put down?",
    "There is no one-size-fits-all answer. Some programs allow a lower down payment, while putting more down can reduce your monthly payment or mortgage insurance.",
  ],
  [
    "Will checking rates hurt my credit?",
    "A conversation and a rough estimate do not require a hard credit inquiry. If you decide to move forward, we will explain every step before it happens.",
  ],
  [
    "How long does the process take?",
    "Every loan is different, but our team keeps the process organized with clear milestones and proactive communication from application through closing.",
  ],
];

function Faq() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        {/* Left Side */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
            Good questions welcome
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Let's clear things up.
          </h2>
          <p className="mt-5 text-md font-semibold tracking-tight sm:text-lg">
            Still wondering? That's what we're here for. Reach out and we'll talk
            it through.
          </p>
        </div>

        {/* Right Side - FAQ Accordion */}
        <div className="space-y-2">
          {faqs.map(([question, answer], i) => (
            <div
              key={question}
              className="rounded-2xl border border-border bg-card/50 transition-all hover:border-primary/30"
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                aria-expanded={active === i}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium transition-colors hover:text-primary sm:px-6"
              >
                <span>{question}</span>
                {active === i ? (
                  <Minus className="size-5 shrink-0 text-primary" />
                ) : (
                  <Plus className="size-5 shrink-0 text-muted-foreground group-hover:text-primary" />
                )}
              </button>
              {active === i && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-200">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
                    {answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;