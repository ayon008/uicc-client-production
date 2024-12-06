import AboutUs from "@/components/AboutUs";
import Accordion from "@/components/Countries";
import Notice from "@/components/Notice";
import SelectTab from "@/components/SelectTab";
import VisaService from "@/components/VisaService";
import SectionTitle from "@/shared/SectionTitles";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <SelectTab /> */}
      <Notice />
      <AboutUs />
      <VisaService />
      <div>
        <Accordion />
      </div>
    </div>
  );
}
