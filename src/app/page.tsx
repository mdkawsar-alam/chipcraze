import CategoryList from "@/components/ui/homeComponents/category/Category";
import HeroSection from "@/components/ui/homeComponents/HeroSection/HeroSection";
import NewsletterSignup from "@/components/ui/homeComponents/NewsletterSignup/NewsletterSignup";
import SpecialOffers from "@/components/ui/homeComponents/SpecialOffers/SpecialOffers";
import Testimonials from "@/components/ui/homeComponents/Testimonials/Testimonials";



export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoryList />
      <SpecialOffers />
      <Testimonials/>
      <NewsletterSignup/>
    
    </div>
  );
}
