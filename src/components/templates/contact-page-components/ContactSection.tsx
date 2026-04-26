"use client";

import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Eyebrow } from "@/src/components/common/Eyebrow";
import { Description } from "@/src/components/common/Description";

export const ContactSection = () => {
  return (
    <section className="relative w-full bg-white pt-20 pb-20">
      <div className="max-w-(--max-content-width) mx-auto px-(--spacing-page-x) relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-12 lg:gap-16">
          {/* Left: Contact details */}
          <div className="w-full lg:w-[45%] flex flex-col items-start lg:py-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <Eyebrow className="text-black/65">Contact Us</Eyebrow>
            </div>

            <SectionHeading className="lg:text-[3rem] mb-6 max-w-2xl">
              Get in Touch <br />
              with Our Team.
            </SectionHeading>

            <div className="w-14 h-[2px] bg-black mb-7" />

            <Description className="max-w-xl text-black/70 mb-10">
              Whether you have a question about our products, distribution, or anything else, our team is ready to answer all your questions.
            </Description>

            <div className="flex flex-col gap-8 w-full mt-2">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-sans font-semibold text-lg text-black mb-1">Our Location</h4>
                  <p className="font-sans text-black/70 text-base">Balaju Bhatbhateni<br/>Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-sans font-semibold text-lg text-black mb-1">Phone Number</h4>
                  <p className="font-sans text-black/70 text-base">+977-1-4123456</p>
                  <p className="font-sans text-black/70 text-base">+977-9800000000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-sans font-semibold text-lg text-black mb-1">Email Address</h4>
                  <p className="font-sans text-black/70 text-base">info@saleshubnepal.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Big map */}
          <div className="w-full lg:w-[55%] min-h-[400px] lg:min-h-full relative overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.18)] rotate-1 bg-white p-3 z-10 flex">
             <div className="w-full h-full relative overflow-hidden bg-gray-100">
               <iframe 
                  src="https://maps.google.com/maps?q=Balaju%20Bhatbhateni,%20Kathmandu&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '500px' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full flex-1 filter grayscale-[20%] contrast-125"
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
