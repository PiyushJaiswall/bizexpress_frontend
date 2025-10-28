"use client";

import { Building2, FileText, Scale, Users, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Building2,
    title: "Private Limited Company",
    description: "Register your private limited company with ease",
    href: "/start-your-business/private-limited-company",
  },
  {
    icon: Users,
    title: "LLP Registration",
    description: "Limited Liability Partnership for professionals",
    href: "/start-your-business/llp",
  },
  {
    icon: FileText,
    title: "GST Registration",
    description: "Complete GST registration and filing services",
    href: "/tax-and-advisory/gst-registration",
  },
  {
    icon: Scale,
    title: "Trademark Registration",
    description: "Protect your brand with trademark registration",
    href: "/trademark",
  },
  {
    icon: TrendingUp,
    title: "Startup India",
    description: "Get recognized as a startup and access benefits",
    href: "/startup-india",
  },
  {
    icon: Shield,
    title: "CFO Services",
    description: "Virtual CFO for financial planning and compliance",
    href: "/cfo-services",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="heading-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive business solutions from incorporation to compliance
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.href} href={service.href}>
              <div className="group p-8 border rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
