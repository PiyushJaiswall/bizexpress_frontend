"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, TechStart Inc",
    content: "BizExpress made company registration incredibly smooth. Professional team and transparent pricing.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "CEO, GreenLeaf Solutions",
    content: "Excellent service! They handled everything from incorporation to GST. Highly recommended.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Director, CloudTech",
    content: "Their CFO services helped us scale efficiently. Expert advice and timely support.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our <span className="heading-gradient">Clients Say</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
