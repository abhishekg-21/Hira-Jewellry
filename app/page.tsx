// app/page.tsx
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
// import Rakhshabandhan2025 from "./components/Rakhshabandhan2025";
import SummerBannerMarquee from "./components/SummerBannerMarquee";
import InstagramGrid from "./components/InstagramGrid";
import SummerCollection from "./components/SummerCollection";
import VideoBanner from "./components/VideoBanner";
import BlogSection from "./components/BlogSection";
import CustomizeCta from "./components/CustomizeCta";
import RecentBlogPosts from "./components/RecentBlogPosts";
import FeatureMarquee from "./components/FeatureMarquee";
import AboutHiraSection from "./components/AboutHiraSection";
import InstagramSection from "./components/InstagramSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      
      <HeroBanner
        videoSrc="/video/VN20250429_123637.mp4"
        imageSrc="/images/IMG-20250505-WA0014.jpg"
        altText="Raksha Bandhan Banner"
        title="Sale Is Live"
        subtitle="Raksha Bandhan"
        ctaUrl="/collections/raksha-bandhan-2025"
        textAlignment="left"
        // padding="py-12"
      />
      {/* <Rakhshabandhan2025 /> */}
      <InstagramGrid />
      <SummerCollection />
      <SummerBannerMarquee />
      <VideoBanner />
      <BlogSection />
      <CustomizeCta />
      <RecentBlogPosts />
      <FeatureMarquee />
      <AboutHiraSection
        title={"Kolkata Karigars\n with a Bombay pulse"}
        body={
          "We are manufacturers of fine Gold and Silver Jewelry. With 35+ years of experience " +
          "we offer great work, quality and prices. Quality should never be a compromise. " +
          "We design pieces to be unique, durable and to be passed on. When you get order from us, " +
          "you become part of our family."
        }
        img="/images/brands/hira_vermile/abouthirasection/WhatsApp_Image_2025-05-15_at_12.00.04_PM (1).jpg"  // first image (pinned base)
        // img2="/images/brands/hira_vermile/abouthirasection/WhatsApp_Image_2025-05-15_at_12.00.05_PM_4f4e0040-43d1-45ce-9500-459546885266.webp"    // second image (slides over)
        alt="Polishing the piece"
        // alt2="Finished ring"
        background="#fff9f3"
      />
      <InstagramSection />

      <TestimonialsSection />
      
    </>
  );
}
