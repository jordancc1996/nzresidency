import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import NumberedList from '@/components/NumberedList';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive services for New Zealand residency including visa guidance, investment management, and relocation support.',
};

export default function OurServicesPage() {
  const services = [
    {
      number: '01',
      title: 'Visa Consultation & Application',
      description: 'Expert guidance through the Active Investor Plus visa application process, including document preparation and submission support.'
    },
    {
      number: '02',
      title: 'Investment Strategy & Management',
      description: 'Tailored investment solutions designed to meet visa requirements while optimizing potential returns and managing risk.'
    },
    {
      number: '03',
      title: 'Legal & Compliance Support',
      description: 'Ongoing legal support to ensure compliance with all visa conditions and New Zealand regulations throughout your journey.'
    },
    {
      number: '04',
      title: 'Relocation Services',
      description: 'Comprehensive relocation support including property search, school enrollment, banking setup, and lifestyle integration.'
    },
    {
      number: '05',
      title: 'Ongoing Client Support',
      description: 'Dedicated client relationship management throughout your investment period and beyond, ensuring a smooth transition to permanent residency.'
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Comprehensive assessment of your eligibility, goals, and timeline for New Zealand residency through the investor visa program.'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Creation of a customized investment and immigration strategy tailored to your specific circumstances and objectives.'
    },
    {
      number: '03',
      title: 'Application Preparation',
      description: 'Meticulous preparation and submission of your visa application with all required documentation and supporting evidence.'
    },
    {
      number: '04',
      title: 'Investment Implementation',
      description: 'Execution of your investment strategy with ongoing monitoring and compliance management throughout the investment period.'
    },
    {
      number: '05',
      title: 'Residency Transition',
      description: 'Support through the transition to permanent residency and assistance with long-term settlement in New Zealand.'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive support for your New Zealand residency journey"
        backgroundClass="bg-white"
        textColor="text-gray-900"
        showPattern={true}
      />

      {/* Introduction */}
      <ContentSection
        title="End-to-End Support for Your Success"
        content="We provide comprehensive support throughout your entire New Zealand residency journey, from initial consultation to permanent residency and beyond. Our experienced team combines deep expertise in immigration law, investment management, and relocation services to ensure your success.

Our holistic approach means you have a single point of contact for all aspects of your residency application and settlement process. We understand that moving to a new country is a significant life decision, and we're committed to making the process as smooth and stress-free as possible for you and your family."
        backgroundClass="bg-gray-50"
        textColor="text-gray-900"
        layout="center"
      />

      {/* Services */}
      <NumberedList
        title="Our Core Services"
        items={services}
        backgroundClass="bg-white"
        textColor="text-gray-900"
      />

      {/* Process */}
      <NumberedList
        title="Our Process"
        items={processSteps}
        backgroundClass="bg-gray-900"
        textColor="text-white"
      />

      {/* Why Choose Us */}
      <ContentSection
        title="Why Choose Our Services"
        content="With years of experience in New Zealand immigration and investment management, our team has successfully guided hundreds of families through the residency process. We maintain strong relationships with government agencies, investment managers, and service providers throughout New Zealand.

Our success rate speaks for itself, with over 95% of our clients successfully obtaining their New Zealand residency. We pride ourselves on providing personalized service, transparent communication, and ongoing support that extends well beyond the completion of your visa application.

Every client receives dedicated attention from our experienced team, ensuring that your unique circumstances and goals are fully understood and addressed throughout the process."
        backgroundClass="bg-white"
        textColor="text-gray-900"
        layout="center"
      />

      {/* Client Testimonials */}
      <ContentSection
        title="Client Success Stories"
        content="Our clients consistently praise our professional approach, attention to detail, and commitment to their success. From busy executives to growing families, we've helped people from all walks of life achieve their goal of New Zealand residency.

Many of our clients have gone on to establish successful businesses, pursue educational opportunities, and build fulfilling lives in New Zealand. We maintain long-term relationships with our clients, providing ongoing support and advice as they settle into their new home.

The testimonials we receive highlight not just our technical expertise, but our genuine care for each client's success and wellbeing throughout their journey to New Zealand residency."
        backgroundClass="bg-gray-50"
        textColor="text-gray-900"
        layout="center"
        ctaText="Start Your Journey Today"
        ctaLink="/contact"
      />
    </>
  );
}

