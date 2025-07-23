import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import NumberedList from '@/components/NumberedList';

export const metadata: Metadata = {
  title: 'Invest and Explore New Zealand | Investor Pathway to NZ Residency',
  description: 'Secure your family\'s future with New Zealand residency through the Active Investor Plus visa. Professional investment guidance from USD 2.9 million.',
};

export default function HomePage() {
  const globalRankings = [
    { number: '01', description: '1st for ease of starting a business' },
    { number: '02', description: '2nd for democracy' },
    { number: '03', description: '4th for corruption transparency' },
    { number: '04', description: '4th on the Global Gender Gap index' },
    { number: '05', description: '5th for business friendliness' },
  ];

  const requirements = [
    {
      number: '01',
      description: 'Invest between USD2.9 million* and USD5.8 million* choosing between a range of \'Growth\' or \'Balanced\' investment options. We\'re happy to chat through the specifics with you.'
    },
    {
      number: '02',
      description: 'For the Growth investment category, meet a minimum of USD2.9 million* investment, and spend a minimum of 21 days in New Zealand across the three-year conditional visa period.'
    },
    {
      number: '03',
      description: 'For the Balanced investment category, meet a minimum of USD5.8 million* investment, and spend a minimum of 105 days in New Zealand, across a five-year conditional visa period.'
    },
    {
      number: '04',
      description: 'Be of good health and character.'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Invest and Explore New Zealand"
        subtitle="Your investor pathway to residency in New Zealand"
        backgroundClass="bg-white"
        textColor="text-gray-900"
        showPattern={true}
      />

      {/* Introduction Section */}
      <ContentSection
        title="Gain New Zealand residency with the Active Investor Plus visa"
        content="In an ever-changing world, securing your family's future with a 'Plan B' is a wise move. New Zealand, renowned for its safety and stability, offers an ideal haven. Let us help you build a secure future for your family in New Zealand. Greener Pastures New Zealand offers a comprehensive solution for securing residency through the Active Investor Plus visa (New Zealand's 'golden visa'). From personalised investment strategies to relocation support and lifestyle planning, our goal is a seamless transition for your family to this remarkable country."
        backgroundClass="bg-gray-50"
        textColor="text-gray-900"
        layout="center"
      />

      {/* Why New Zealand Section */}
      <ContentSection
        title="Why New Zealand?"
        content="A rare combination of safety, beauty, and opportunity. With its thriving global economy, stable democracy, and breathtaking landscapes, New Zealand stands out as a top destination for those seeking an exceptional lifestyle and a secure future through permanent residency. These strengths are reflected in New Zealand's impressive global rankings for multiple considerations."
        backgroundClass="bg-white"
        textColor="text-gray-900"
        layout="center"
      />

      {/* Global Rankings */}
      <NumberedList
        title="Global Rankings"
        items={globalRankings}
        backgroundClass="bg-gray-50"
        textColor="text-gray-900"
      />

      {/* Active Investor Plus Visa Section */}
      <ContentSection
        title="The Active Investor Plus visa"
        content="Gain New Zealand permanent residency by investing as little as USD2.9 million* for a three-year term. During the investment period your spouse and children can enjoy the same benefits as you.

Essentially, the Active Investor Plus (AIP) visa requires the investor to:"
        backgroundClass="bg-gray-900"
        textColor="text-white"
        layout="center"
      />

      {/* Requirements */}
      <NumberedList
        title="Requirements"
        items={requirements}
        backgroundClass="bg-gray-900"
        textColor="text-white"
      />

      {/* Disclaimer */}
      <ContentSection
        title=""
        content="* The USD investment value is based on the NZD5 million to NZD10 million investment requirement, assuming a conversion rate of USD0.58 to NZD1.0. The total investment required depends on the investment category selected. For the latest and most up-to-date information, please contact a Greener Pastures representative."
        backgroundClass="bg-gray-100"
        textColor="text-gray-700"
        layout="center"
      />
    </>
  );
}

