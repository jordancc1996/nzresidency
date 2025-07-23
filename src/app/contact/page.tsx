import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our New Zealand residency experts. Contact us for a consultation about the Active Investor Plus visa and investment options.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Ready to start your New Zealand residency journey?"
        description="Get in touch with our experienced team for a confidential consultation about your investment and residency options."
        backgroundClass="bg-white"
        textColor="text-gray-900"
        showPattern={true}
      />

      {/* Contact Information */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team is ready to help you explore your options for New Zealand residency. 
                  Contact us for a confidential consultation to discuss your investment goals and 
                  immigration timeline.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Primary Contact
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      <strong className="text-gray-900">Mischa Mannix-Opie</strong><br />
                      Director of Client Experience
                    </p>
                    <p>
                      <strong className="text-gray-900">Email:</strong><br />
                      <a 
                        href="mailto:mischa@nzresidency.com" 
                        className="text-green-700 hover:text-green-800 transition-colors"
                      >
                        mischa@nzresidency.com
                      </a>
                    </p>
                    <p>
                      <strong className="text-gray-900">Phone:</strong><br />
                      <a 
                        href="tel:+6421578054" 
                        className="text-green-700 hover:text-green-800 transition-colors"
                      >
                        +64 21 578 054
                      </a>
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong className="text-gray-900">Monday - Friday:</strong> 9:00 AM - 6:00 PM NZST</p>
                    <p><strong className="text-gray-900">Saturday:</strong> 10:00 AM - 2:00 PM NZST</p>
                    <p><strong className="text-gray-900">Sunday:</strong> Closed</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    We also accommodate consultations outside regular hours by appointment.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
  <p className="text-gray-600 mb-4">
    Please contact us directly using the information provided. We&apos;ll respond to your inquiry within 24 hours.
  </p>
  <div className="space-y-3">
    <p className="text-sm text-gray-500">
      <strong>Email:</strong> <a href="mailto:mischa@nzresidency.com" className="text-green-700 hover:text-green-800">info@nzresidency.com</a>
    </p>
    <p className="text-sm text-gray-500">
      <strong>Phone:</strong> <a href="tel:+6421578054" className="text-green-700 hover:text-green-800">+64 21 578 054</a>
    </p>
  </div>
</div>

      {/* Additional Information */}
      <ContentSection
        title="What to Expect"
        content="When you contact us, you'll receive a prompt response from our experienced team. We typically respond to all inquiries within 24 hours during business days.

Your initial consultation will cover your investment goals, timeline for residency, and any specific questions you have about the New Zealand Active Investor Plus visa process. We will provide you with detailed information about investment options, visa requirements, and our comprehensive support services.

All consultations are confidential, and there's no obligation to proceed. We believe in providing transparent, honest advice to help you make informed decisions about your family's future in New Zealand."
        backgroundClass="bg-white"
        textColor="text-gray-900"
        layout="center"
      />

      {/* FAQ Section */}
      <ContentSection
        title="Frequently Asked Questions"
        content="**How long does the visa process take?**
The Active Investor Plus visa process typically takes 6-9 months from application submission to approval, followed by the investment implementation period.

**What are the minimum investment requirements?**
The minimum investment is USD 2.9 million for the Growth category or USD 5.8 million for the Balanced category, based on current exchange rates.

**Can my family be included in the application?**
Yes, your spouse/partner and dependent children under 24 can be included in your visa application and will receive the same residency benefits.

**Do I need to live in New Zealand full-time?**
No, the Growth category requires only 21 days in New Zealand over the three-year investment period, while the Balanced category requires 105 days over five years."
        backgroundClass="bg-gray-50"
        textColor="text-gray-900"
        layout="center"
      />
    </>
  );
}

