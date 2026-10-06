"use client";
import { HowItWorks } from "@/components/HowItWorks";
import { BookAppointment } from "@/components/BookAppointment";
import { SectionDivider } from "@/components/ui/SectionDivider";

import { PageHeader } from "@/components/PageHeader";

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader title="How Treatment Works" breadcrumbLabel="How It Works" backgroundImage="/images/hero-consultation.jpg" />
      <HowItWorks />
      <SectionDivider variant="leaf-center" />
      <BookAppointment />
    </>
  );
}
