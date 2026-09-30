"use client";

import { useState, useEffect } from "react";
import {
 
  Building,
  Award,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  MessageCircle,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Whatioffer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const portfolioSlides = [
    {
      id: 1,
      title: "Expert Mortgage Guidance",
      icon: <Award className="w-12 h-12 text-primary" />,
      description:
        "At Advanced Mortgage LLC, we're here to guide you through every step of the journey, offering personalized solutions and expert advice tailored to current trends.",
      details: [
        "Personalized mortgage solutions",
        "Expert advice for current market trends",
        "Guidance for first-time homebuyers",
        "Refinance options for homeowners",
      ],
      image: "/img/hero.png",
    },
    {
      id: 2,
      title: "Our Mission & Integrity",
      icon: <Target className="w-12 h-12 text-primary" />,
      description:
        "At Advanced Mortgage our Mission is to serve individuals and families with the utmost integrity.",
      details: [
        "NMLS ID: 1762428",
        "Charles M. Bucklin, NMLS ID: 460665",
        "Serving PA, DC, FL, MD, VA, & WV",
        "Commitment to transparency",
      ],
      image: "/img/tes3.jpg",
    },
    {
      id: 3,
      title: "Comprehensive Loan Programs",
      icon: <Building className="w-12 h-12 text-primary" />,
      description:
        "Whether you're a first-time homebuyer navigating rising interest rates or a seasoned homeowner considering a refinance, we have the expertise and resources to help you achieve your dream of homeownership.",
      details: [
        "FHA, VA, USDA, and Conventional loans",
        "Jumbo loans and refinance options",
        "Down payment assistance programs",
        "Reverse mortgage solutions",
      ],
      image: "/img/home.jpg",
    },
    {
      id: 4,
      title: "Empowering Homeownership",
      icon: <Heart className="w-12 h-12 text-primary" />,
      description:
        "We're here to empower you to make informed decisions and feel confident in your path to homeownership.",
      details: [
        "Educational resources for buyers",
        "Transparent loan process",
        "From application to closing and beyond",
        "Total finance charges explained",
      ],
      image: "/img/we.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % portfolioSlides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(
      (prev) => (prev - 1 + portfolioSlides.length) % portfolioSlides.length,
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* ── Section Header ── */}
      <div className="text-center mb-12">
        <p className="font-mono text-xs uppercase tracking-[.25em] text-primary mb-2">
          About Advanced Mortgage
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          What <span className="text-primary">We Offer</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      </div>

      {/* ── Portfolio Carousel ── */}
      <div className="bg-card rounded-2xl shadow-xl border border-border p-8 mb-12">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
          What <span className="text-primary">We Offer</span>
        </h3>
        <div className="relative overflow-hidden rounded-xl">
          <div
            className="flex transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {portfolioSlides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 p-4 md:p-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* LEFT SIDE: Text Content */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="mb-4 p-4 bg-primary/10 rounded-2xl">
                      {slide.icon}
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      {slide.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {slide.description}
                    </p>
                    <ul className="space-y-2 w-full max-w-md">
                      {slide.details.map((detail, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle
                            size={16}
                            className="text-primary flex-shrink-0"
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RIGHT SIDE: Image */}
                  <div className="relative w-full aspect-[3/4] md:aspect-square flex items-center justify-center mt-6 md:mt-0">
                    <div className="absolute inset-0 bg-[#6507E9] rounded-3xl md:rounded-[40px] transform md:rotate-[-3deg] scale-105 z-0" />
                    <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={slide.image || "/path/to/default-image.jpg"}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-primary rounded-full p-2 shadow-lg z-20">
                        <div className="text-white font-serif text-2xl leading-none">
                          “
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-muted-foreground"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {portfolioSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-muted-foreground"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:scale-105 shadow-lg shadow-primary/25"
        >
          Get Started Today
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Whatioffer;