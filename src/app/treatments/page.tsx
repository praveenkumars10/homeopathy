"use client";
import React, { useState } from "react";
import { Treatments } from "@/components/Treatments";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { BookAppointment } from "@/components/BookAppointment";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { PageHeader } from "@/components/PageHeader";

export default function TreatmentsPage() {
  const [selectedCondition, setSelectedCondition] = useState<string | undefined>(undefined);
  return (
    <>
      <PageHeader title="Our Specialised Treatments" breadcrumbLabel="Treatments" backgroundImage="/images/banner_treatments.jpg" />
      <Treatments onSelectCondition={setSelectedCondition} />

      <SectionDivider variant="wave-top" fillColor="#1F4B3F" className="-mb-1" />

      {/* How Treatment Works — moved here from main nav */}
      <HowItWorks />

      <SectionDivider variant="wave-bottom" fillColor="#1F4B3F" className="-mt-1" />

      {/* FAQ — moved here from main nav */}
      <FAQ />

      <SectionDivider variant="botanical" />
      <BookAppointment selectedCondition={selectedCondition} />
    </>
  );
}
