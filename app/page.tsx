import Image from "next/image";
import Section from "./components/section";

export default function Home() {
  return (
    <div>
      <Section index={1} href={"#home"}></Section>
    </div>
  );
}
