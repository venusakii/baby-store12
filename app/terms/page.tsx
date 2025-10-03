import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-balance">Terms of Use</h1>
            <p className="text-lg text-muted-foreground">Last updated: December 25, 2024</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                Welcome to PuppyStore.com. By using our website, you agree to these Terms of Use. If you do not agree
                with any of these terms, please do not use our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Service Description</h2>
              <p className="leading-relaxed">
                PuppyStore.com is an informational website providing reviews and recommendations for newborn products.
                We are participants in the Amazon affiliate program and may receive commissions from purchases made
                through our links.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Website Use</h2>
              <p className="leading-relaxed">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website only for lawful purposes</li>
                <li>Not violate intellectual property rights</li>
                <li>Not post malicious content or spam</li>
                <li>Not attempt to gain unauthorized access to website systems</li>
                <li>Provide accurate information when registering</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
              <p className="leading-relaxed">
                All materials on the website, including texts, images, logos, and design, are the property of PuppyStore
                or used with permission from copyright holders. Copying, distribution, or use of materials without
                written permission is prohibited.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Affiliate Links</h2>
              <p className="leading-relaxed">
                Our website contains affiliate links to Amazon. We may receive commissions from purchases made through
                these links, at no additional cost to you. This helps us maintain the website and create quality
                content.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Disclaimer</h2>
              <p className="leading-relaxed">
                Information on the website is provided "as is". We do not guarantee the accuracy, completeness, or
                timeliness of information. Use of information from the website is at your own risk. We are not
                responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Purchase decisions made based on our reviews</li>
                <li>Quality of products purchased from third parties</li>
                <li>Temporary unavailability of the website</li>
                <li>Loss of data or profits</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. User Content</h2>
              <p className="leading-relaxed">
                By posting reviews or comments on the website, you grant us a non-exclusive right to use, reproduce, and
                distribute this content. You warrant that your content does not violate third-party rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, our liability is limited to the amount you paid for using the
                website (if applicable). We are not liable for indirect, incidental, or special damages.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">9. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to change these terms at any time. Significant changes will be posted on the
                website. Continued use of the website after changes means your agreement to the new terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">10. Applicable Law</h2>
              <p className="leading-relaxed">
                These terms are governed by the laws of the Russian Federation. All disputes are subject to
                consideration in courts at the location of the website administration.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">11. Contact Information</h2>
              <p className="leading-relaxed">For questions related to the terms of use, contact:</p>
              <ul className="list-none space-y-2">
                <li>Email: legal@puppystore.com</li>
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
