import { brand, heroContent } from "../data/siteData";
import logo from "../assets/logo.jpeg";
import heroImage from "../assets/hero-blinds.jpeg";

const HomeHero = () => {
  return (
    //<section className="min-h-screen bg-[#F7F1EA] pt-24">
    <section id="home" className="min-h-screen bg-[#F7F1EA] pt-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <img
              src={logo}
              alt="Season Blinds Logo"
              className="h-16 w-16 rounded-full object-cover shadow-md"
            />
            <div>
              <h2 className="text-xl font-bold text-[#5A3827]">{brand.name}</h2>
              <p className="text-sm font-semibold tracking-widest text-[#F26A00]">
                {brand.subtitle}
              </p>
            </div>
          </div>

          <span className="inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#F26A00] shadow-sm">
            {heroContent.badge}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#1F1F1F] md:text-3xl lg:text-5xl">
            {heroContent.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-700">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-[#F26A00] px-8 py-4 text-center font-semibold text-white shadow-lg transition hover:bg-[#d85f00]"
            >
              {heroContent.primaryButton}
            </a>

            <a
              href="#gallery"
              className="rounded-full border-2 border-[#5A3827] px-8 py-4 text-center font-semibold text-[#5A3827] transition hover:bg-[#5A3827] hover:text-white"
            >
              {heroContent.secondaryButton}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="font-bold text-[#5A3827]">Free</h3>
              <p className="text-sm text-gray-600">Home measurement</p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="font-bold text-[#5A3827]">Custom</h3>
              <p className="text-sm text-gray-600">Blinds & shades</p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="font-bold text-[#5A3827]">Pro</h3>
              <p className="text-sm text-gray-600">Installation</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-[#F26A00] opacity-20"></div>

          <img
            src={heroImage}
            alt="Installed blinds by Season Blinds"
            className="relative h-[500px] w-full rounded-3xl object-cover shadow-2xl"
          />

          <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 p-5 shadow-lg backdrop-blur">
            <p className="text-sm font-semibold text-gray-600">
              Call for Quote
            </p>
            <p className="text-xl font-bold text-[#F26A00]">{brand.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
