'use client';

import { ServicesSection } from '@/components/public/ServicesSection';
import { ProjectsSection } from '@/components/public/ProjectsSection';
import { TeamSection } from '@/components/public/TeamSection';
import { ClientsSection } from '@/components/public/ClientsSection';
import { AlliancesSection } from '@/components/public/AlliancesSection';

export function HomePageContent() {
  return (
    <>
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <ClientsSection />
      <AlliancesSection />
    </>
  );
}
