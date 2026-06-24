import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Johnson",
    location: "Federal Way, WA",
    review:
      "Season Blinds did an amazing job in our living room. The blinds look modern and the installation was very professional.",
  },
  {
    name: "Sarah Williams",
    location: "Enumclaw, WA",
    review:
      "Very friendly service and affordable pricing. They helped us choose the perfect shades for our home.",
  },
  {
    name: "David Miller",
    location: "Kent, WA",
    review:
      "From measurement to installation everything was smooth and easy. Highly recommended for custom blinds.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#F7F1EA] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#F26A00] shadow-sm">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-[#5A3827]">
            What Our Customers Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Customer satisfaction is our priority. Here’s what homeowners say
            about Season Blinds.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Stars */}
              <div className="flex gap-1 text-[#F26A00]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#F26A00" strokeWidth={1.5} />
                ))}
              </div>

              {/* Review */}
              <p className="mt-6 leading-8 text-gray-600">
                “{testimonial.review}”
              </p>

              {/* User */}
              <div className="mt-8 border-t border-gray-100 pt-6">
                <h3 className="text-xl font-bold text-[#5A3827]">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#F26A00]">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-block rounded-full bg-[#F26A00] px-8 py-4 font-bold text-white shadow-md transition hover:bg-[#d85f00]"
          >
            Get Your Free Quote Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
