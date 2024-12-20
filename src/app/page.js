import AboutUs from "@/components/AboutUs";
import ChooseUs from "@/components/ChooseUs";
import Accordion from "@/components/Countries";
import Faq from "@/components/Faq";
import NewsPortal from "@/components/NewsPortal";
import Notice from "@/components/Notice";
import SelectTab from "@/components/SelectTab";
import ServicesCom from "@/components/ServicesCom";
import Slider from "@/components/Slider";

import VisaService from "@/components/VisaService";
import SectionTitle from "@/shared/SectionTitles";
import ServiceHistory from "@/shared/ServiceHistory";


export default function Home() {
  return (
    <div>
      <SelectTab />
      <Notice />
      <AboutUs />
      <div className="overflow-x-hidden">
        <Accordion />
      </div>
      <VisaService />
      <ServicesCom />
      <ServiceHistory />
      <ChooseUs />
      <SectionTitle subHeading={'OUR COURSES'} heading1={'Best available courses'} heading2={'for you and boost your carrier'} width={60} />
      <Slider />
      <Faq />
      <NewsPortal />
    </div>
  );
}
