"use client";

import React, { useState } from "react";
import { Hero } from "@/components/Hero";
import { Treatments } from "@/components/Treatments";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { DoctorProfile } from "@/components/DoctorProfile";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { BookAppointment } from "@/components/BookAppointment";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  const [selectedCondition, setSelectedCondition] = useState<string | undefined>(undefined);

  return (
    <>
      {/* 2. Hero Section */}
      <Hero />

      {/* Botanical Transition Divider */}
      <SectionDivider variant="botanical" className="my-0" />

      {/* 3. What We Treat */}
      <Treatments onSelectCondition={(condition) => setSelectedCondition(condition)} />

      {/* Organic Wave Transition into Dark Band */}
      <SectionDivider variant="wave-top" fillColor="#1F4B3F" className="-mb-1" />

      {/* 4. Why Choose Us (Dark Green Band with Animated Counters) */}
      <WhyChooseUs />

      {/* Organic Wave Transition out of Dark Band */}
      <SectionDivider variant="wave-bottom" fillColor="#1F4B3F" className="-mt-1" />

      {/* 5. How Treatment Works */}
      <HowItWorks />

      {/* Botanical Divider */}
      <SectionDivider variant="leaf-center" />

      {/* 6. Meet the Doctor */}
      <DoctorProfile />

      {/* Botanical Divider */}
      <SectionDivider variant="botanical" />

      {/* 7. Patient Testimonials */}
      <Testimonials />

      {/* Botanical Divider */}
      <SectionDivider variant="leaf-center" />

      {/* 8. Frequently Asked Questions */}
      <FAQ />

      {/* Botanical Divider */}
      <SectionDivider variant="botanical" />

      {/* 9. Book an Appointment (WhatsApp deep-link form + clinic info + map) */}
      <BookAppointment selectedCondition={selectedCondition} />
    </>
  );
}
