// app/page.tsx
import { SeoSchemaHome } from "@/components/seo-schema-home";
import HeroSection from "@/components/home/hero-section";
import ProfileSection from "@/components/home/profile-section";
import ProblemsSection from "@/components/home/problems-section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import SolutionsSection from "@/components/home/solutions-section";
import WhyBrokerSection from "@/components/home/why-broker-section";
import SocialProofSection from "@/components/home/social-proof-section";
import AuthoritySection from "@/components/home/authority-section";
import VideoInstitutionalSection from "@/components/home/video-institutional-section";
import LeadCaptureSection from "@/components/home/lead-capture-section";
import FaqFinalCtaSection from "@/components/home/faq-final-cta-section";

export default function HomePage() {
    return (
        <>
            <SeoSchemaHome />
            <HeroSection />
            <ProfileSection />
            <ProblemsSection />
            <HowItWorksSection />
            <SolutionsSection />
            <WhyBrokerSection />
            <SocialProofSection />
            <AuthoritySection />
            <VideoInstitutionalSection />
            <LeadCaptureSection />
            <FaqFinalCtaSection />
        </>
    );
}
