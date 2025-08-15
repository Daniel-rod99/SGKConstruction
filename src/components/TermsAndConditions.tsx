import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* HERO / TÍTULO */}
      <section className="bg-[var(--color-primary)] text-white">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 py-12 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold">Terms & Conditions</h1>
          <p className="mt-3 md:mt-4 text-white/90">
            Effective date: January 15, 2025
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <main className="flex-1">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 py-10 md:py-16">
          {/* Intro */}
          <p className="text-sm md:text-base text-gray-600 mb-6">
            These Terms & Conditions (“Terms”) govern your access to and use of
            the website, services, proposals, estimates, and any work performed
            by <span className="font-semibold">SGK Construction</span> (“we,”
            “us,” or “our”). By using our website or engaging our services, you
            agree to these Terms.
          </p>

          {/* Índice */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
            <h2 className="font-semibold text-lg mb-3">Contents</h2>
            <ul className="grid md:grid-cols-2 gap-y-2 list-disc list-inside text-sm md:text-base">
              <li>
                <a className="hover:underline" href="#definitions">
                  1. Definitions
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#scope">
                  2. Scope of Services
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#quotes">
                  3. Quotes & Payments
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#changes">
                  4. Changes & Cancellations
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#timeline">
                  5. Timeline & Access
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#warranty">
                  6. Warranty
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#client">
                  7. Client Responsibilities
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#permits">
                  8. Permits & Compliance
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#materials">
                  9. Materials & Substitutions
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#media">
                  10. Photos & Marketing
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#ip">
                  11. Intellectual Property
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#privacy">
                  12. Privacy
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#thirdparties">
                  13. Third-Party Links
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#liability">
                  14. Limitation of Liability
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#indemnity">
                  15. Indemnification
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#force">
                  16. Force Majeure
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#law">
                  17. Governing Law & Disputes
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#updates">
                  18. Updates to These Terms
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#contact">
                  19. Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Secciones */}
          <section id="definitions" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">1. Definitions</h3>
            <p className="text-gray-700">
              “Client” means any person or entity requesting our services.
              “Project” means the scope of work described in our proposal or
              agreement. “Website” means our online site and related pages.
            </p>
          </section>

          <section id="scope" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">2. Scope of Services</h3>
            <p className="text-gray-700">
              We provide construction, remodeling, repairs, and related services
              as described in written proposals or contracts. Only written
              agreements signed by both parties define the final scope,
              deliverables, and exclusions.
            </p>
          </section>

          <section id="quotes" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">3. Quotes & Payments</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                Quotes/estimates are based on available information and may be
                revised after site inspection or design changes.
              </li>
              <li>
                Payment schedule (e.g., deposit, progress payments, final
                payment) will be stated in the agreement.
              </li>
              <li>
                Late payments may incur fees and/or project suspension until
                accounts are current.
              </li>
            </ul>
          </section>

          <section id="changes" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              4. Changes & Cancellations
            </h3>
            <p className="text-gray-700">
              Any change to scope, materials, or schedule must be documented in
              a written change order and may affect cost and timeline. Client
              cancellations after acceptance may be subject to costs incurred,
              including materials and labor scheduled.
            </p>
          </section>

          <section id="timeline" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">5. Timeline & Access</h3>
            <p className="text-gray-700">
              We strive to meet projected timelines; however, schedules are
              subject to factors beyond our control (permits, inspections,
              supply chain, weather). Client must provide timely site access,
              utilities, and approvals to avoid delays.
            </p>
          </section>

          <section id="warranty" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">6. Warranty</h3>
            <p className="text-gray-700">
              We warrant our workmanship for a period stated in the agreement.
              Manufacturer warranties for materials apply as provided by the
              manufacturer. Warranty is void for misuse, lack of maintenance, or
              unauthorized alterations.
            </p>
          </section>

          <section id="client" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              7. Client Responsibilities
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                Provide accurate information, timely decisions, and site access.
              </li>
              <li>Remove/secure personal items in work areas.</li>
              <li>Comply with safety instructions and site rules.</li>
            </ul>
          </section>

          <section id="permits" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              8. Permits & Compliance
            </h3>
            <p className="text-gray-700">
              Unless otherwise agreed in writing, Client is responsible for
              permits, approvals, and HOA requirements. We will comply with
              applicable codes and regulations for work under our control.
            </p>
          </section>

          <section id="materials" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              9. Materials & Substitutions
            </h3>
            <p className="text-gray-700">
              If specified materials become unavailable, we may propose
              equivalent substitutions. Natural variations in materials (e.g.,
              wood, stone) are expected and not considered defects.
            </p>
          </section>

          <section id="media" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              10. Photos & Marketing
            </h3>
            <p className="text-gray-700">
              With Client consent, we may photograph or record the Project for
              portfolio and marketing purposes. We will avoid sharing personal
              identifying information without permission.
            </p>
          </section>

          <section id="ip" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              11. Intellectual Property
            </h3>
            <p className="text-gray-700">
              All designs, drawings, and content we create remain our
              intellectual property unless otherwise agreed in writing. Client
              receives a limited license to use deliverables for the Project.
            </p>
          </section>

          <section id="privacy" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">12. Privacy</h3>
            <p className="text-gray-700">
              We respect your privacy and handle personal information in line
              with our practices. For details, see our Privacy Policy.
            </p>
          </section>

          <section id="thirdparties" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              13. Third-Party Links
            </h3>
            <p className="text-gray-700">
              Our website may contain links to third-party sites. We are not
              responsible for their content, policies, or practices.
            </p>
          </section>

          <section id="liability" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              14. Limitation of Liability
            </h3>
            <p className="text-gray-700">
              To the fullest extent permitted by law, we are not liable for
              indirect, incidental, special, or consequential damages. Our total
              liability related to a Project is limited to the amounts paid for
              the specific work giving rise to the claim.
            </p>
          </section>

          <section id="indemnity" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">15. Indemnification</h3>
            <p className="text-gray-700">
              Client agrees to indemnify and hold us harmless from claims
              arising out of Client-provided information, materials, or Client’s
              breach of these Terms.
            </p>
          </section>

          <section id="force" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">16. Force Majeure</h3>
            <p className="text-gray-700">
              We are not responsible for delays or failures caused by events
              beyond our reasonable control, including extreme weather,
              pandemics, strikes, or supply shortages.
            </p>
          </section>

          <section id="law" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              17. Governing Law & Disputes
            </h3>
            <p className="text-gray-700">
              These Terms are governed by the laws of the State of California,
              without regard to conflict of law principles. Any dispute shall be
              resolved in state or federal courts located in Los Angeles County,
              California.
            </p>
          </section>

          <section id="updates" className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              18. Updates to These Terms
            </h3>
            <p className="text-gray-700">
              We may update these Terms from time to time. Changes are effective
              upon posting on this page with a revised effective date.
            </p>
          </section>

          <section id="contact" className="mb-2">
            <h3 className="text-xl font-semibold mb-2">19. Contact</h3>
            <p className="text-gray-700">
              For any questions about these Terms, please contact us at{" "}
              <a
                href="mailto:sgkconstruction.la@gmail.com"
                className="text-[var(--color-secondary)] hover:underline"
              >
                sgkconstruction.la@gmail.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+18188222232"
                className="text-[var(--color-secondary)] hover:underline"
              >
                +1 818 822 2232
              </a>
              .
            </p>
          </section>

          {/* Nota legal breve */}
          <div className="mt-8 text-xs text-gray-500">
            This page provides general terms for online use and typical project
            engagements. It is not legal advice. For specific legal wording,
            consult your attorney.
          </div>
        </div>
      </main>

      <div className="h-[200px] bg-white flex relative"></div>

      <Footer />
    </div>
  );
}
