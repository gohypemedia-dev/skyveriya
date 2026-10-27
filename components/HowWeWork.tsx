"use client";

import React from "react";

export default function HowWeWork() {
  const principles = [
    {
      title: "Selectively.",
      body: "We take on a limited number of clients at a time, so each receives real attention.",
    },
    {
      title: "Rigorously.",
      body: "Every agreement, record and certificate is prepared to a standard that buyers, galleries and institutions can trust.",
    },
    {
      title: "In step with you.",
      body: "Whether you are building foundations or expanding internationally, we bring the right support at the right moment. We never bring more than you need.",
    },
  ];

  return (
    <section
      id="how-we-work"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#F3E0DC] text-[#5C2018] select-none"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.14em] text-[#5C2018] mb-12 sm:mb-16">
          How we work
        </h2>

        <div className="space-y-10 sm:space-y-12">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="pt-8 border-t border-[#BC4639]/25 first:border-t-0 first:pt-0"
            >
              <h3 className="font-editorial text-xl sm:text-2xl font-normal text-[#5C2018] mb-3">
                {item.title}
              </h3>
              <p className="font-editorial text-base sm:text-lg text-[#5C2018]/85 leading-relaxed max-w-2xl">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
