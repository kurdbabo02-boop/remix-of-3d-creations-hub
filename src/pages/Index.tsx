import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ShowroomPreview from "@/components/home/ShowroomPreview";
import CustomCTA from "@/components/home/CustomCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <ShowroomPreview />
      <CustomCTA />
    </Layout>
  );
};

export default Index;
