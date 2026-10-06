"use client";
import { Testimonials } from "@/components/Testimonials";
import { BookAppointment } from "@/components/BookAppointment";
import { SectionDivider } from "@/components/ui/SectionDivider";

import { PageHeader } from "@/components/PageHeader";

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader title="Patient Testimonials" breadcrumbLabel="Reviews" backgroundImage="/images/hero-consultation.jpg" />
      <Testimonials />
      <SectionDivider variant="leaf-center" />
      <BookAppointment />
    </>
  );
}
