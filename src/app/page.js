import AboutUs from "@/components/AboutUs";
import Accordion from "@/components/Countries";
import SelectTab from "@/components/SelectTab";
import VisaService from "@/components/VisaService";
import SectionTitle from "@/shared/SectionTitles";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <AboutUs />
      <SectionTitle subHeading={'VISA SERVICES'} heading1={'Committed to provide you'} heading2={'the best visa services'} width={60} />
      <VisaService />
      <Accordion />
    </div>
  );
}
