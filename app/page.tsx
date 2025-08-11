// app/page.tsx
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Rakhshabandhan2025 from "./components/Rakhshabandhan2025";
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
        videoSrc="/video/vd1.mp4"
        imageSrc="/images/Sale Is Live (9).png"
        altText="Raksha Bandhan Banner"
        title="Sale Is Live"
        subtitle="Raksha Bandhan"
        ctaText="SHOP NOW"
        ctaUrl="/collections/raksha-bandhan-2025"
        textAlignment="left"
        padding="py-12"
      />
      <Rakhshabandhan2025 />
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
        img1="/images/Earring1.jpg"  // first image (pinned base)
        img2="/images/Bracelet.jpg"    // second image (slides over)
        alt1="Polishing the piece"
        alt2="Finished ring"
        background="#fff9f3"
      />
      <InstagramSection />

      <TestimonialsSection />
      
    </>
  );
}
