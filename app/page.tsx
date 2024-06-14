//import Features from "@/components/features";
//import Hero from "@/components/hero";
import Info from "@/components/heros/info";
import Info2 from "@/components/heros/info2";
// import Integrations from "@/components/integrations";
import Logogrid from "@/components/logogrid";
//import Header from "@/components/sections/headermain";
import HeroX from "@/components/sections/hero_format";

//import HTemplate from "@/components/sections/h-template";
//import Image from "next/image";
//import FooterBlock from "@/components/sections/footer"
//import Banner from "@/components/sections/banner";
//import HeroSection from "@/components/sections/citations";
import HeroStarter from "@/components/sections/hero_starter"
//import CardsGroup from "@/components/cards-group";
import Footer2 from "@/components/footer/footer";
import Integrations from "@/components/integration/integrations";
import Banner1 from "@/components/banner/banner1";
//import InfoTabs from "@/components/heros/info2-tabs_included";
import Tabs from "@/components/Tab/tabs";
//import Steps from "@/components/steps/steps";
import Features1 from "@/components/features/features1";
import Steps2 from "@/components/steps/steps2";
import Facts from "@/components/features/features2";


export default function Home() {

  const tabs = [
    {
      title: 'Essay Review',
      content: 'Our expert reviewers will provide comprehensive feedback on your essays, helping you refine your writing skills and craft compelling narratives that stand out to admissions committees.',
      fields: ['Grammar and spelling check', 'Structural analysis', 'Content evaluation'],
    },
    {
      title: 'Application Guidance',
      content: 'Get personalized advice and assistance throughout the entire application process. From selecting the right universities to polishing your application materials, we\'re here to help you navigate every step of the way.',
      fields: ['University selection', 'Application timeline planning', 'Interview preparation'],
    },
    {
      title: 'Mock Interviews',
      content: 'Practice your interview skills with mock interviews conducted by experienced professionals. Receive constructive feedback and tips to help you perform your best during actual university interviews.',
      fields: ['General interview practice', 'Specific university interview simulations', 'Feedback and improvement'],
    },
  ];
  

  return (
   
       <div>


        <HeroStarter/>
        <Logogrid/>
        <Info/>
        <Info2/>
        <Facts/>
        <Tabs tabs={tabs}/>
        <HeroX/>
        <Features1/>
        <Integrations/>
        <Steps2/>
        <Banner1/>
        <Footer2/>



        {/* <Hero/> */}
        {/* <HeroSection/> */}
        {/* <Header/> */}
        {/* <Features/> */}
        {/* <Howitworks/> */}
        {/* <Integrations/> */}
        {/* <HTemplate/> */}
        {/* <Banner/> */}
        {/* <CardsGroup/> */}
        {/* <InfoTabs/> */}
        {/* <Steps/> */}
        {/* <FooterBlock/> */}
        
        

      
       </div>
  );
}
