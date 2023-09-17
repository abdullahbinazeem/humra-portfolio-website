import Hero from "@/pages/Hero";
import Section from "./wrapper/Section";
import About from "@/pages/About";
import Skills from "@/pages/Skills";

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
];

export default function Home() {
  return (
    <div>
      {sections.map((section) => (
        <Section
          name={section.name}
          slug={section.slug}
          page={section.page}
          navigation={sections}
        />
      ))}
    </div>
  );
}
