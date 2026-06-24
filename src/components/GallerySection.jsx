import gallery1 from "../assets/gallary/gallery-1.jpeg";
import gallery2 from "../assets/gallary/gallery-2.jpeg";
import gallery3 from "../assets/gallary/gallery-3.jpeg";
import gallery4 from "../assets/gallary/gallery-4.jpeg";
import gallery5 from "../assets/gallary/gallery-5.jpeg";
import gallery6 from "../assets/gallary/gallery-6.jpeg";

const galleryImages = [
  {
    image: gallery1,
    title: "Living Room Blinds",
  },
  {
    image: gallery2,
    title: "Modern Window Shades",
  },
  {
    image: gallery3,
    title: "Custom Home Blinds",
  },
  {
    image: gallery4,
    title: "Bedroom Window Covering",
  },
  {
    image: gallery5,
    title: "Office Blinds",
  },
  {
    image: gallery6,
    title: "Elegant Shade Design",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-[#F7F1EA] px-5 py-2 text-sm font-semibold text-[#F26A00]">
            Our Work
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-[#5A3827]">
            Recent Blinds Installations
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Take a look at some of our recent window covering projects.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90"></div>

              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm font-medium text-orange-100">
                  Season Blinds Project
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block rounded-full bg-[#F26A00] px-8 py-4 font-bold text-white shadow-md transition hover:bg-[#d85f00]"
          >
            Request Your Free Measurement
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
