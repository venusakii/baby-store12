import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-balance">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last updated: December 25, 2024</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. General Provisions</h2>
              <p className="leading-relaxed">
                This Privacy Policy defines the procedure for processing and protecting information about users of the
                PuppyStore.com website (hereinafter - "Website"). We take the protection of your personal data seriously
                and are committed to ensuring its security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. What Information We Collect</h2>
              <p className="leading-relaxed">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal information: name, email address, which you provide voluntarily</li>
                <li>Technical information: IP address, browser type, operating system</li>
                <li>Usage information: pages you visit, time spent on the site</li>
                <li>Cookies and similar technologies to improve website functionality</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. How We Use Information</h2>
              <p className="leading-relaxed">The collected information is used for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and improving our services</li>
                <li>Sending informational newsletters (only with your consent)</li>
                <li>Analyzing website usage and improving user experience</li>
                <li>Ensuring security and preventing fraud</li>
                <li>Complying with legal requirements</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Data Transfer to Third Parties</h2>
              <p className="leading-relaxed">
                We do not sell, exchange, or transfer your personal data to third parties without your consent, except
                as required by law. We may transfer data to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Amazon partners as part of the affiliate program (only for processing purchases)</li>
                <li>Service providers who help us operate the website</li>
                <li>Law enforcement agencies when there are legal requirements</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Cookies</h2>
              <p className="leading-relaxed">
                We use cookies to improve website functionality. Cookies are small files that are saved on your device.
                You can configure your browser to reject cookies, but this may limit website functionality.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Data Security</h2>
              <p className="leading-relaxed">
                We apply modern technical and organizational measures to protect your data from unauthorized access,
                modification, disclosure, or destruction. However, no method of data transmission over the internet is
                absolutely secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Your Rights</h2>
              <p className="leading-relaxed">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Receive information about what data we store about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent to data processing</li>
                <li>File a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">8. Changes to the Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy. We will notify you of significant changes through the website or by
                email. We recommend periodically reviewing this page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">9. Contact Information</h2>
              <p className="leading-relaxed">If you have questions about this Privacy Policy, contact us:</p>
              <ul className="list-none space-y-2">
                <li>Email: privacy@puppystore.com</li>
                <li>Phone: +7 (800) 123-45-67</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />
      <CookieBanner />
    </div>
  )
}
