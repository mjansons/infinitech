import Header from "@/components/Header/Header";
import styles from "@/app/page.module.css";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Results from "@/components/Results/Results";
import Services from "@/components/Services/Services";
import Faq from "@/components/Faq/Faq";
import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const sections = {
    about: { section: "About", href: "about" },
    services: { section: "Services", href: "services" },
    results: { section: "Results", href: "results" },
    faq: { section: "FAQ", href: "faq" },
    contactUs: { section: "Contact Us", href: "contact-us" },
  };

  const headerSections = {
    about: sections.about,
    services: sections.services,
    results: sections.results,
    faq: sections.faq,
  };

  return (
    <>
      <Header sectionButtons={headerSections} />

      <main className={styles.main}>
        <Hero />
        <About sectionId={sections.about.href} />
        <Results sectionId={sections.results.href} />
        <Services sectionId={sections.services.href} />
        <Faq sectionId={sections.faq.href} />
        <ContactUs sectionId={sections.contactUs.href} />
        <Footer sectionButtons={headerSections} />
      </main>
    </>
  );
}
