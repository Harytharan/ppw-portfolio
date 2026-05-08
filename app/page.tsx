import { About } from "@/components/About";
import { CareerPlan } from "@/components/CareerPlan";
import { CertificateEvidence } from "@/components/CertificateEvidence";
import { Contact } from "@/components/Contact";
import { CVSection } from "@/components/CVSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { ReflectiveJournal } from "@/components/ReflectiveJournal";
import { Skills } from "@/components/Skills";
import { portfolioData } from "@/lib/data";

export default function Home() {
  const data = portfolioData;

  return (
    <>
      <Navbar />
      <main>
        <Hero
          fullName={data.profile.fullName}
          title={data.profile.title}
          tagline={data.profile.tagline}
          careerGoal={data.profile.careerGoal}
          cvUrl={data.profile.cvUrl}
        />
        <About
          fullName={data.profile.fullName}
          university={data.profile.university}
          degree={data.profile.degree}
          introduction={data.profile.introduction}
          profileImageUrl={data.profile.profileImageUrl}
        />
        <ReflectiveJournal entries={data.journals} />
        <CareerPlan career={data.career} />
        <CVSection
          cv={data.cv}
          email={data.contact.email}
          phone={data.contact.phone}
          university={data.profile.university}
          address={data.contact.address}
          cvUrl={data.profile.cvUrl}
        />
        <CertificateEvidence certificates={data.certificates} />
        <Skills categories={data.skills} />
        <Projects projects={data.projects} />
        <Contact contact={data.contact} />
      </main>
      <Footer
        fullName={data.profile.fullName}
        footerText={data.settings.footerText}
      />
    </>
  );
}
