import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import NumberedList from '@/components/NumberedList';

export const metadata: Metadata = {
  title: 'Discover New Zealand',
  description: 'Explore the benefits of living in New Zealand - from world-class education and healthcare to stunning natural beauty and business opportunities.',
};

export default function DiscoverNewZealandPage() {
  const benefits = [
    {
      number: '01',
      title: 'World-Class Education',
      description: 'Access to top-tier education system with universities consistently ranked among the world\'s best. Your children can study as domestic students with significantly reduced fees.'
    },
    {
      number: '02',
      title: 'Universal Healthcare',
      description: 'Comprehensive public healthcare system providing quality medical care for you and your family at no cost for most services.'
    },
    {
      number: '03',
      title: 'Business Opportunities',
      description: 'Ranked #1 globally for ease of starting a business, with a stable economy and strong trade relationships across the Asia-Pacific region.'
    },
    {
      number: '04',
      title: 'Natural Beauty',
      description: 'From pristine beaches to snow-capped mountains, New Zealand offers unparalleled natural beauty and outdoor recreation opportunities.'
    },
    {
      number: '05',
      title: 'Safety & Stability',
      description: 'One of the world\'s safest countries with low crime rates, political stability, and a peaceful, welcoming society.'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Discover New Zealand"
        subtitle="A land of opportunity, beauty, and endless possibilities"
        backgroundClass="bg-white"
        textColor="text-gray-900"
        showPattern={true}
      />

      {/* Introduction */}
      <ContentSection
        title="Why choose New Zealand for your family's future?"
        content="New Zealand consistently ranks among the world's top countries for quality of life, safety, and opportunity. With its stunning natural landscapes, world-class education system, and thriving economy, New Zealand offers the perfect environment for families seeking a secure and prosperous future.

The country's stable democracy, low corruption levels, and business-friendly environment make it an ideal destination for investors and entrepreneurs. From the vibrant cities of Auckland and Wellington to the pristine wilderness of Fiordland, New Zealand provides a unique blend of modern amenities and natural beauty that's hard to find anywhere else in the world."
        backgroundClass="bg-gray-50"
        textColor="text-gray-900"
        layout="center"
      />

      {/* Benefits */}
      <NumberedList
        title="Key Benefits"
        items={benefits}
        backgroundClass="bg-white"
        textColor="text-gray-900"
      />

      {/* Lifestyle Section */}
      <ContentSection
        title="The New Zealand Lifestyle"
        content="New Zealanders, known as 'Kiwis,' are renowned for their friendly, laid-back attitude and strong sense of community. The country's work-life balance culture means more time for family, outdoor activities, and personal pursuits.

With English as the primary language and a multicultural society that welcomes immigrants, New Zealand makes it easy for international families to integrate and feel at home. The country's compact size means you're never far from either bustling city life or pristine natural environments.

Whether you're interested in world-class wine regions, adventure sports, cultural experiences, or simply enjoying some of the world's most beautiful beaches, New Zealand offers a lifestyle that's both enriching and relaxing."
        backgroundClass="bg-gray-900"
        textColor="text-white"
        layout="center"
        ctaText="Learn About Investment Options"
        ctaLink="/investment-solutions"
      />
    </>
  );
}

