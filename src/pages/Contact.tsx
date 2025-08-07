import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div>
      <Header />

      <section className="bg-[var(--color-primary)] mb-20">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10">
          <div className="md:grid md:grid-cols-2 md:grid-rows-2">
            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-semibold flex items-center">
              Contact us
            </h1>
            <p className="text-white lg:text-xl pb-5 row-start-2 pt-10 md:pt-0 lg:pt-10">
              SGKConstruction’s legacy of successfully completed projects is the
              best demonstration of our capabilities. We have a diverse
              portfolio which showcases our deep expertise and experience.
            </p>
          </div>
        </div>
      </section>

      <ContactForm showImage={false} />

      <Footer />
    </div>
  );
}
