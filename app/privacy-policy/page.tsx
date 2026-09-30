import Link from "next/link";
import { 
  Shield, 
  Mail, 
  Phone, 
  FileText, 
  Users, 
  Lock, 
  Bell, 
  Share2, 
  Eye,
  ArrowUpRight,
  CheckCircle
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Advanced Mortgage LLC",
  description: "Learn how Advanced Mortgage LLC collects, uses, and protects your personal information. Your privacy matters to us.",
};

const sections = [
  {
    icon: Shield,
    title: "Introduction",
    content: `At Advanced Mortgage LLC, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information, including any SMS disclosures as required by law. By using our website or services, you consent to the practices described in this policy.`
  },
  {
    icon: FileText,
    title: "Information We Collect",
    content: `We may collect personal information when you visit our website, fill out forms, or communicate with us. This may include:`,
    list: ["Name", "Email address", "Phone number", "Any additional information provided through web forms"]
  },
  {
    icon: Bell,
    title: "How We Use Your Information",
    content: `Your information is used for the following purposes:`,
    list: [
      "To provide and improve our services",
      "To contact you regarding your inquiries or transactions",
      "To send SMS messages for updates, notifications, or marketing purposes (if consent is given)"
    ],
    note: "By providing your phone number and submitting forms on our website, you are consenting to receive SMS text messages from Advanced Mortgage LLC. Message frequency may vary."
  },
  {
    icon: Mail,
    title: "SMS Disclosure",
    content: `By clicking "Submit," you agree to Advanced Mortgage, LLC's Terms of Use and Privacy Policy. You consent to receive phone calls and SMS messages from Advanced Mortgage, LLC, to provide updates on your order and/or for marketing purposes. Message frequency depends on your activity. You may opt-out by texting "STOP". Message and data rates may apply. Reply "HELP" to receive help.`,
    list: [
      "Receive text messages and notifications from Advanced Mortgage LLC.",
      "Allow us to use your information in compliance with this Privacy Policy.",
      "Message Frequency: Message frequency depends on your activity.",
      'Opt-Out Instructions: Reply "STOP" to any text message to unsubscribe from future messaging.',
      'Help Information: Reply "HELP" to receive more information.',
      "Rates: Message and data rates may apply based on your mobile carrier."
    ]
  },
  {
    icon: Share2,
    title: "Third-Party Sharing",
    content: `We do not share your data with third parties for marketing or promotional purposes. If any data is shared with third parties, it will exclude text messaging opt-in data and consent. Text messaging opt-in data is not shared with third parties under any circumstances.`
  },
  {
    icon: Eye,
    title: "Your Rights",
    content: `You have the right to:`,
    list: [
      "Access and request a copy of your personal data.",
      "Opt-out of SMS messaging at any time.",
      "Request corrections to your personal information.",
      "Request deletion of your personal data where legally permissible."
    ]
  },
  {
    icon: Lock,
    title: "Data Security",
    content: `We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.`
  },
  {
    icon: FileText,
    title: "Privacy Policy Updates",
    content: `This policy may be updated periodically to reflect changes in our practices or legal requirements. The latest version will always be available on our website.`
  },
  {
    icon: Users,
    title: "Contact Information",
    content: `If you have any questions or concerns about this Privacy Policy, please contact us at:`,
    contact: true
  },
  {
    icon: CheckCircle,
    title: "Consent",
    content: `By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.`
  },
  {
    icon: Shield,
    title: "Privacy Policy Accessibility",
    content: `Our Privacy Policy is accessible via the link on any form requiring personal information or phone number submission.`
  }
];

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-16 overflow-x-hidden rounded-2xl">
      {/* Hero Section */}
      <section className="relative rounded-2xl bg-gradient-to-r from-[#6507E9] to-[#33007a] py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
            <Shield className="size-3.5" />
            Privacy Policy
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Privacy <span className="text-[#63F807]">Matters</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/80 text-lg">
            Learn how we collect, use, and protect your personal information.
          </p>
          <p className="mt-2 text-sm text-white/60">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="space-y-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-6 shadow-lg transition-all hover:shadow-primary/5 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-2.5 shrink-0">
                  <section.icon className="size-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-semibold tracking-tight">
                    {section.title}
                  </h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p>{section.content}</p>
                    
                    {section.list && (
                      <ul className="mt-3 space-y-2">
                        {section.list.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.note && (
                      <div className="mt-3 rounded-lg bg-primary/5 p-3 text-sm text-primary">
                        <p className="font-medium">{section.note}</p>
                      </div>
                    )}

                    {section.contact && (
                      <div className="mt-4 space-y-2 rounded-lg bg-muted p-4">
                        <a
                          href="tel:+12027024861"
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Phone className="size-4 text-primary" />
                          Direct: 202.702.4861
                        </a>
                        <a
                          href="tel:+19412232125"
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Phone className="size-4 text-primary" />
                          Office: 941.223.2125
                        </a>
                        <a
                          href="mailto:charlie@advancedmortgagellc.com"
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail className="size-4 text-primary" />
                          charlie@advancedmortgagellc.com
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl border border-border bg-gradient-to-r from-[#1A6686]/5 to-[#00587E]/5 p-6 text-center sm:p-8">
          <h3 className="text-lg font-semibold">Have Questions?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We're here to help. Contact us anytime for privacy-related concerns.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:scale-105"
          >
            Contact Us
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}