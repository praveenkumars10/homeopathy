"use client";
import { BookAppointment } from "@/components/BookAppointment";

import { PageHeader } from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Online Consultation Booking" breadcrumbLabel="Online Consultation" backgroundImage="/images/banner_doctor.jpg" />
      <BookAppointment compactTop />
    </>
  );
}
