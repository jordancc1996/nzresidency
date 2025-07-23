import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import NumberedList from '@/components/NumberedList';

export const metadata: Metadata = {
  title: 'Investment Solutions',
  description: 'Explore our comprehensive investment solutions for the New Zealand Active Investor Plus visa, including Growth and Balanced portfolio options.',
};

export default function InvestmentSolutionsPage() {
  const fundFeatures = [
    {
      number: '01',
      title: 'Diversified Portfolio',
      description: 'Our investment solutions offer diversified exposure across multiple asset classes and sectors within the New Zealand economy.'
    },
    {
      number: '02',
      title: 'Professional Management',
      description: 'Experienced fund managers with deep knowledge of the New Zealand market and regulatory requirements.'
    },
    {
      number: '03',
      title: 'Visa Compliance',
      description: 'All investment options are specifically designed to meet Active Investor Plus visa requirements and regulations.'
    },
    {
      number: '04',
      title: 'Transparent Reporting',
      description: 'Regular reporting and updates on your investment performance and compliance status throughout the investment period.'
    },
    {
      number: '05',
      title: 'Exit Strategy',
      description: 'Clear exit strategies and liquidity options available at the end of your required investment period.'
    },
  ];

  const investmentCategories = [
    {
      number: '01',
      title: 'Growth Category',
      description: 'Minimum USD 2.9 million investment focused on higher growth potential investments including direct investments and managed funds targeting emerging sectors.'
    },
    {
      number: '02',
      title: 'Balanced Category',
      description: 'Minimum USD 5.8 million investment offering a balanced approach between growth and stability, suitable for conservative investors seeking steady returns.'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Investment Solutions"
        subtitle="Tailored investment strategies for your New Zealand residency journey"
        backgroundClass="bg-white"
        textColor="text-gray-900"
        showPattern={true}
      />

      {/* Introduction */}
      <ContentSection
        title="Professional Investment Management"
        content="Our investment solutions are specifically designed to meet the requirements of the New Zealand Active Investor Plus visa while providing you with professional portfolio management and potential returns. We work with experienced fund managers and investment professionals who understand both the regulatory requirements and the New Zealand market landscape.

Each investment solution is carefully structured to ensure compliance with visa requirements while offering the potential for capital growth and income generation. Our team provides ongoing support throughout your investment period, ensuring you remain compliant and informed about your investment performance."
        backgroundClass="bg-gray-50"
        textColor="text-gray-900"
        layout="center"
      />

      {/* Investment Categories */}
      <NumberedList
        title="Investment Categories"
        items={investmentCategories}
        backgroundClass="bg-white"
        textColor="text-gray-900"
      />

      {/* Fund Features */}
      <NumberedList
        title="Key Features"
        items={fundFeatures}
        backgroundClass="bg-gray-900"
        textColor="text-white"
      />

      {/* Investment Process */}
      <ContentSection
        title="Our Investment Process"
        content="We begin with a comprehensive consultation to understand your investment goals, risk tolerance, and timeline. Our team then recommends the most suitable investment category and specific investment options that align with your objectives and visa requirements.

Throughout the investment period, we provide regular reporting and updates, ensuring you stay informed about your investment performance and compliance status. Our experienced team is always available to answer questions and provide guidance as needed.

As your investment period nears completion, we work with you to develop an appropriate exit strategy, whether that involves maintaining your investments in New Zealand or transitioning to other investment opportunities."
        backgroundClass="bg-white"
        textColor="text-gray-900"
        layout="center"
      />

      {/* Risk Considerations */}
      <ContentSection
        title="Important Considerations"
        content="All investments carry risk, and past performance is not indicative of future results. The value of investments can go down as well as up, and you may not get back the full amount invested. It's important to understand that while our investment solutions are designed to meet visa requirements, they are genuine investments subject to market conditions and economic factors.

We recommend that all potential investors seek independent financial and legal advice before making any investment decisions. Our team can provide detailed information about specific investment options, including risk profiles, expected returns, and liquidity terms."
        backgroundClass="bg-gray-50"
        textColor="text-gray-900"
        layout="center"
        ctaText="Discuss Your Investment Options"
        ctaLink="/contact"
      />
    </>
  );
}

