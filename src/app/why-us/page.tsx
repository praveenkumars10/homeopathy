"use client";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { BookAppointment } from "@/components/BookAppointment";
import { SectionDivider } from "@/components/ui/SectionDivider";

import { PageHeader } from "@/components/PageHeader";

export default function WhyUsPage() {
  return (
    <>
      <PageHeader title="Why Choose Us" breadcrumbLabel="Why Us" backgroundImage="/images/hero-consultation.jpg" />
      <WhyChooseUs />
      <SectionDivider variant="wave-bottom" fillColor="#1F4B3F" className="-mt-1" />
      <BookAppointment />
    </>
  );
}
