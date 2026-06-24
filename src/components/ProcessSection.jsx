import { CalendarCheck, Ruler, FileText, Wrench } from "lucide-react";

const steps = [
  {
    icon: <CalendarCheck size={34} />,
    number: "01",
    title: "Book Appointment",
    description:
      "Call or message us to schedule a free visit for your home or office.",
  },
  {
    icon: <Ruler size={34} />,
    number: "02",
    title: "We Measure",
    description:
      "Our team visits your place and takes accurate window measurements.",
  },
  {
    icon: <FileText size={34} />,
    number: "03",
    title: "You Get Quote",
    description:
      "We help you choose the right blinds and provide a clear price quote.",
  },
  {
    icon: <Wrench size={34} />,
    number: "04",
    title: "We Install",
    description:
      "After approval, we install your custom blinds professionally and cleanly.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-[#F7F1EA] px-5 py-2 text-sm font-semibold text-[#F26A00]">
            Our Process
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-[#5A3827]">
            Simple Steps To Get Your New Blinds
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From the first call to final installation, we make the process easy,
            clear, and stress-free.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-3xl bg-[#F7F1EA] p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute right-6 top-6 text-5xl font-extrabold text-[#F26A00]/20">
                {step.number}
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F26A00] text-white shadow-md">
                {step.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#5A3827]">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-3xl bg-[#5A3827] px-8 py-14 text-center text-white shadow-xl">
          <h3 className="text-3xl font-extrabold">
            Ready To Upgrade Your Windows?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-100">
            Contact Season Blinds today and get your free home measurement and
            quote.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-[#F26A00] px-8 py-4 font-bold text-white transition hover:bg-[#d85f00]"
          >
            Book Free Measurement
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
