import Hero from "@/app/pages/Hero";
import Section from "@/app/components/wrapper/Section";
import About from "@/app/pages/About";
import Skills from "@/app/pages/Skills";
import Work from "@/app/pages/Work";
import Contact from "@/app/pages/Contact";

export const revalidate = 0;

const sections = [
  {
    name: "home",
    slug: "home",
    page: <Hero />,
  },
  {
    name: "about",
    slug: "about",
    page: <About />,
  },
  {
    name: "skills",
    slug: "skills",
    page: <Skills />,
  },
  {
    name: "work",
    slug: "work",
    page: <Work />,
  },
  {
    name: "contact",
    slug: "contact",
    page: <Contact />,
  },
];

export default function Home() {
  return (
    <div>
      {sections.map((section) => (
        <Section
          key={section.name}
          name={section.name}
          slug={section.slug}
          page={section.page}
          navigation={sections}
        />
      ))}
    </div>
  );
}
