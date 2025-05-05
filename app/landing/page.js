"use client";
import Hero from "./section/hero"
import HoverImageShowcase from "./section/HoverImageShowcase";
import Services from "./section/services";
import PropertyListings from "./section/propertyListings"; // New component
import WhoWeAre from "./section/whoweare";
import ExpertCrads from "./section/expertCard";
import Testimonials from "./section/testimonials";
import FAQ from "./section/faq";
import ContactForm from "./section/contactform";
import Footer from "../../components/footer";

 
export default function LandingPage() {
  return (
    <div>
        <Hero/>
        <HoverImageShowcase/>
        <Services/>
        <PropertyListings /> 
        <WhoWeAre/>
        <ExpertCrads/>
        <Testimonials/>
        <FAQ/>
        <ContactForm/>
        <Footer />
    </div>
  );
}