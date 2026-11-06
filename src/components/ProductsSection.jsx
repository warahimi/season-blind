import { brand } from "../data/siteData";
import zebra_blinds from "../assets/gallary/zebra-blinds.jpeg";
import roller_shades from "../assets/gallary/roller-shed.jpeg";
import vertical_dream_blinds from "../assets/gallary/vertical-dream-blinds.jpeg";
import honeycomb_shades from "../assets/gallary/honeycomb-shades.jpeg";
import roman_shades from "../assets/gallary/roman-shades.jpeg";
import drapery_curtains from "../assets/gallary/drapery-curtains.jpeg";

const products = [
  {
    title: "Zebra Blinds",
    description:
      "Modern dual-layer blinds that provide privacy while allowing natural light.",
    image: zebra_blinds,
  },
  {
    title: "Roller Shades",
    description:
      "Clean and minimal shades perfect for modern homes and offices.",
    image: roller_shades,
  },
  {
    title: "Vertical Dream Blinds",
    description: "Great solution for sliding doors and large window spaces.",
    image: vertical_dream_blinds,
  },
  {
    title: "Honeycomb Shades",
    description: "Energy-efficient shades designed for insulation and comfort.",
    image: honeycomb_shades,
  },
  {
    title: "Roman Shades",
    description:
      "Elegant fabric shades that add warmth and luxury to any room.",
    image: roman_shades,
  },
  {
    title: "Drapery Curtains",
    description:
      "Stylish flowing curtains that add elegance, privacy, and comfort to any space.",
    image: drapery_curtains,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-[#F7F1EA] px-5 py-2 text-sm font-semibold text-[#F26A00]">
            Our Products
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-[#5A3827]">
            Stylish Window Blinds & Shades
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer custom window coverings designed to match your home style,
            privacy needs, and budget.
          </p>
        </div>

        {/* Product Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#5A3827]">
                  {product.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {product.description}
                </p>

                <button className="mt-6 rounded-full bg-[#F26A00] px-6 py-3 font-semibold text-white transition hover:bg-[#d85f00]">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-[#F26A00] px-8 py-14 text-center text-white shadow-xl">
          <h3 className="text-3xl font-extrabold">
            Need Help Choosing the Right Blinds?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-100">
            Our team will visit your home, take measurements, and help you
            select the perfect blinds and shades.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-[#F26A00] transition hover:bg-[#F7F1EA]"
          >
            Request Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
