import AboutUs from "@/components/AboutUs";
import Accordion from "@/components/Countries";
import NewsPortal from "@/components/NewsPortal";
import Notice from "@/components/Notice";
import SelectTab from "@/components/SelectTab";
import ServicesCom from "@/components/ServicesCom";

import VisaService from "@/components/VisaService";


export default function Home() {
  return (
    <div>
      <SelectTab />
      <Notice />
      <AboutUs />
      <div>
        <Accordion />
      </div>
      <VisaService />
      <ServicesCom />
      <NewsPortal />
    </div>
  );
}
