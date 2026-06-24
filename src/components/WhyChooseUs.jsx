import {
  Ruler,
  BadgeCheck,
  Home,
  ShieldCheck,
  Wrench,
  PhoneCall,
} from "lucide-react";

const features = [
  {
    icon: <Home size={34} />,
    title: "Free In-Home Consultation",
    description:
      "Our team visits your home or office to understand your window covering needs.",
  },
  {
    icon: <Ruler size={34} />,
    title: "Accurate Measurements",
    description:
      "We professionally measure your windows to ensure a perfect custom fit.",
  },
  {
    icon: <BadgeCheck size={34} />,
    title: "Quality Products",
    description:
      "We provide stylish, durable, and modern blinds and shades for every room.",
  },
  {
    icon: <Wrench size={34} />,
    title: "Professional Installation",
    description:
      "Our experienced installers ensure clean and secure installation.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Affordable Pricing",
    description:
      "Transparent pricing with quality service and no hidden charges.",
  },
  {
    icon: <PhoneCall size={34} />,
    title: "Friendly Support",
    description:
      "We are always available to answer questions and help customers.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="bg-[#F7F1EA] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#F26A00] shadow-sm">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-[#5A3827]">
            Trusted Window Blinds Experts
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Season Blinds provides professional measurement, custom blinds, and
            expert installation with excellent customer service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F26A00]/10 text-[#F26A00] transition group-hover:bg-[#F26A00] group-hover:text-white">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-2xl font-bold text-[#5A3827]">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 grid grid-cols-1 items-center gap-10 rounded-3xl bg-white p-10 shadow-xl lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="rounded-full bg-[#F7F1EA] px-4 py-2 text-sm font-semibold text-[#F26A00]">
              Local & Reliable
            </span>

            <h3 className="mt-6 text-4xl font-extrabold leading-tight text-[#5A3827]">
              Bringing Comfort, Privacy & Style To Your Windows
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              From modern roller shades to elegant zebra blinds, we help
              homeowners choose the right window coverings that match their
              space and budget.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-[#F26A00] px-8 py-4 font-bold text-white transition hover:bg-[#d85f00]"
            >
              Book Free Measurement
            </a>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-3xl bg-[#F7F1EA] p-8 text-center">
              <h4 className="text-5xl font-extrabold text-[#F26A00]">100%</h4>
              <p className="mt-3 font-semibold text-[#5A3827]">
                Customer Focused
              </p>
            </div>

            <div className="rounded-3xl bg-[#F7F1EA] p-8 text-center">
              <h4 className="text-5xl font-extrabold text-[#F26A00]">Free</h4>
              <p className="mt-3 font-semibold text-[#5A3827]">Measurement</p>
            </div>

            <div className="rounded-3xl bg-[#F7F1EA] p-8 text-center">
              <h4 className="text-5xl font-extrabold text-[#F26A00]">Custom</h4>
              <p className="mt-3 font-semibold text-[#5A3827]">
                Blinds & Shades
              </p>
            </div>

            <div className="rounded-3xl bg-[#F7F1EA] p-8 text-center">
              <h4 className="text-5xl font-extrabold text-[#F26A00]">Pro</h4>
              <p className="mt-3 font-semibold text-[#5A3827]">Installation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
