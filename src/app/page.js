import AboutUs from "@/components/AboutUs";
import SelectTab from "@/components/SelectTab";
import SectionTitle from "@/shared/SectionTitles";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      {/* <SelectTab /> */}
      <AboutUs />
      <SectionTitle subHeading={'VISA SERVICES'} heading1={'Committed to provide you'} heading2={'the best visa services'} width={60}/>
    </div>
  );
}
