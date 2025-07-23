import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import NumberedList from '@/components/NumberedList';

export const metadata: Metadata = {
  title: 'NZ Active Investor Plus Visa',
  description: 'Complete guide to the New Zealand Active Investor Plus visa - requirements, process, and benefits for investors seeking NZ residency.',
};

export default function InvestorVisaPage() {
  const keyFeatures = [
    {
      number: '01',
      title: 'Minimum Investment',
      description: 'USD2.9 million* for Growth category investments in Direct Investments or Managed Funds'
    },
    {
      number: '02',
      title: 'Investment Timeline',
      description: '6 months from Approval in Principle to transfer and invest, with option for 6-month extension'
    },
    {
      number: '03',
      title: 'Investment Period',
      description: 'Retain investment for 36 months with checkpoints at 24 and 36 months'
    },
    {
      number: '04',
      title: 'Residency Requirement',
      description: 'Spend a minimum of 21 days in New Zealand over the investment period'
    },
  ];

  const processSteps = [
    {
      number: '01',
      description: 'Applications must include completed application forms and should be accompanied by the appropriate fees and supporting documents.'
    },
    {
      number: '02',
      description: 'The processing time is approximately 6 – 9 months from application submission to approval.'
    },
    {
      number: '03',
      description: 'Investments can be made across the first three years and need to be maintained for a fourth.'
    },
    {
      number: '04',
      description: 'After maintaining their investments in New Zealand for four years and fulfilling the minimum residency requirement of 117 days, investors become eligible to apply for permanent residency.'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="The NZ Active Investor Plus visa"
        subtitle="Designed to attract valuable investors and encourage investment that supports the local economy"
        description="The Active Investor Plus visa allows applicants and their families to live, work, and study in New Zealand. After your required investment period, you are able to become a New Zealand permanent resident."
        backgroundClass="bg-white"
        textColor="text-gray-900"
        showPattern={true}
      />

      {/* Requirements */}
      <ContentSection
        title="Requirements of the visa"
        content="From 1 April 2025, the Active Investor Plus visa will change. Active Investor Plus visa applicants will be required to choose between two investment categories - Growth or Balanced - offering a broad range of investment options and benefits."
        backgroundClass="bg-gray-50"
        textColor="text-gray-900"
        layout="center"
      />

      {/* Key Features */}
      <NumberedList
        title="Key Features"
        items={keyFeatures}
        backgroundClass="bg-white"
        textColor="text-gray-900"
      />

      {/* Additional Requirements */}
      <ContentSection
        title=""
        content="The Active Investor Plus visa applicant must also demonstrate good character and a standard of health.

* The USD investment value is based on the NZD5 million to NZD10 million investment requirement, assuming a conversion rate of USD0.58 to NZD1.0. The total investment required depends on the investment category selected. For the latest and most up-to-date information, please contact a Greener Pastures representative."
        backgroundClass="bg-gray-50"
        textColor="text-gray-900"
        layout="center"
      />

      {/* Process */}
      <NumberedList
        title="How does the visa process work?"
        items={processSteps}
        backgroundClass="bg-gray-900"
        textColor="text-white"
      />

      {/* Family Benefits */}
      <ContentSection
        title="Your family"
        content="New Zealand will extend a warm welcome to your family. Your spouse or partner, as well as any qualifying dependent children 24 years and under, can be included in your visa application, allowing them to share the same residency benefits as you. Together, your family can build a fulfilling life in New Zealand and become eligible for permanent residency after just four years.

A visa holder may take up residence anywhere in New Zealand and can study at all schools and tertiary education providers as a domestic student. After you become a permanent resident, you may have the opportunity to apply for New Zealand citizenship, granting you full rights and solidifying your permanent place in one of the world's most sought-after countries."
        backgroundClass="bg-white"
        textColor="text-gray-900"
        layout="center"
      />

      {/* Property Information */}
      <ContentSection
        title="What to know about purchasing property"
        content="To purchase residential property, you generally need to be a permanent resident of New Zealand. However, those spending less time in the country may still be able to purchase with additional approval. Our experienced Immigration Partners will be able to provide property advice based on your individual situation and requirements."
        backgroundClass="bg-gray-50"
        textColor="text-gray-900"
        layout="center"
        ctaText="Contact Us for Guidance"
        ctaLink="/contact"
      />
    </>
  );
}

