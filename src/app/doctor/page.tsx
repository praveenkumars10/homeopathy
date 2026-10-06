"use client";
import { DoctorProfile } from "@/components/DoctorProfile";
import { BookAppointment } from "@/components/BookAppointment";
import { SectionDivider } from "@/components/ui/SectionDivider";

import { PageHeader } from "@/components/PageHeader";

export default function DoctorPage() {
  return (
    <>
      <PageHeader title="Meet the Doctor" breadcrumbLabel="Doctor" backgroundImage="/images/banner_doctor.jpg" />
      <DoctorProfile />
      <SectionDivider variant="botanical" />
      <BookAppointment />
    </>
  );
}
