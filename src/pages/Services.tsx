import Header from "../components/Header";

export default function Service() {
  return (
    <div>
      <Header />

      <section className="bg-[var(--color-primary)] mb-20">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10">
          <div className="md:grid md:grid-cols-2 md:grid-rows-2">
            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-semibold flex items-center">
              Our Services
            </h1>
            <p className="text-white lg:text-xl pb-5 row-start-2 pt-10 md:pt-0 lg:pt-10">
              Lorem ipsum dolor sit amet consectetur. Eros nulla sit
              pellentesque mostie odio amet consectetur maecenas. Et cursus
              sapien at nisl mattis est phasellus. Sit sagittis donec nullam
              nunc volutpat suscipit pulvinar. Morbi ultrices gravida elementum
              eget.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
