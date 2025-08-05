import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

export default function Footer() {
  return (
    <section
      className="bg-[var(--color-primary)] text-white"
      style={{
        marginTop: "-200px",
        paddingTop: "220px",
        paddingBottom: "40px",
      }}
    >
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        <h2 className="text-2xl md:text-4xl font-semibold mb-12">
          Build your dream property with new experience.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="mb-5 text-[var(--color-secondary)] font-semibold text-2xl">
              SGK Construction
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:underline">
                  Connect with us.
                </a>
              </li>
              <div className="flex">
                <FacebookOutlinedIcon className="w-32 h-32" />
              </div>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 uppercase">Quick links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services/architecture" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/services/design" className="hover:underline">
                  Company
                </a>
              </li>
              <li>
                <a href="/services/consulting" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 uppercase">Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/projects/residential" className="hover:underline">
                  Residential
                </a>
              </li>
              <li>
                <a href="/projects/commercial" className="hover:underline">
                  Business
                </a>
              </li>
              <li>
                <a href="/projects/industrial" className="hover:underline">
                  Industrial
                </a>
              </li>
              <li>
                <a href="/projects/renovation" className="hover:underline">
                  Hospitality
                </a>
              </li>
              <li>
                <a href="/projects/renovation" className="hover:underline">
                  Educational
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 uppercase">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/blog" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 uppercase">Contact</h3>
            <ul className="space-y-2 text-sm">
              <p>1045 Regent Dr, Los Angeles, California, United States</p>

              <li>
                <a href="mailto:info@company.com" className="hover:underline">
                  contact@sgkconstruction.com
                </a>
              </li>
              <li>
                <a href="/locations" className="hover:underline">
                  618-417-2716
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-500 border-opacity-30 mt-12 pt-6 text-center text-sm text-[12px]">
          ©Copyright 2025 SGK Construction. All rights reserved.
        </div>
      </div>
    </section>
  );
}
