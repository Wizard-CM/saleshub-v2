import React from "react";
import { ContactSection } from "@/src/components/templates/contact-page-components/ContactSection";

export const metadata = {
  title: "Contact Us - SalesHubNepal",
  description: "Get in touch with SalesHubNepal. We are located at Balaju Bhatbhateni, Kathmandu.",
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen">
      {/* Spacer to account for fixed navbar */}
      <div className="h-(--navbar-height) w-full bg-white" />
      <ContactSection />
    </main>
  );
}
