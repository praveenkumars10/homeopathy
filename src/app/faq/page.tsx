"use client";
import { FAQ } from "@/components/FAQ";
import { BookAppointment } from "@/components/BookAppointment";
import { SectionDivider } from "@/components/ui/SectionDivider";

import { PageHeader } from "@/components/PageHeader";

export default function FAQPage() {
  return (
    <>
      <PageHeader title="Frequently Asked Questions" breadcrumbLabel="FAQ" backgroundImage="/images/banner_treatments.jpg" />
      <FAQ />
      <SectionDivider variant="botanical" />
      <BookAppointment />
    </>
  );
}
