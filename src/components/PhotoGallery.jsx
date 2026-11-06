// import { useEffect, useState } from "react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   Expand,
//   Images,
//   Pause,
//   Play,
//   X,
// } from "lucide-react";

// import { galleryImages } from "../data/galleryData";

// const ORANGE = "#F26A00";
// const BROWN = "#5A3827";

// const PhotoGallery = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [lightboxIndex, setLightboxIndex] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(true);

//   const total = galleryImages.length;

//   const nextSlide = () => {
//     setActiveIndex((prev) => (prev + 1) % total);
//   };

//   const prevSlide = () => {
//     setActiveIndex((prev) => (prev - 1 + total) % total);
//   };

//   const openLightbox = (index) => {
//     setLightboxIndex(index);
//   };

//   const closeLightbox = () => {
//     setLightboxIndex(null);
//   };

//   // Automatic slideshow
//   useEffect(() => {
//     if (!isPlaying || total < 2 || lightboxIndex !== null) {
//       return;
//     }

//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % total);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [isPlaying, total, lightboxIndex]);

//   // Keyboard navigation for lightbox
//   useEffect(() => {
//     if (lightboxIndex === null) return;

//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         closeLightbox();
//       }

//       if (event.key === "ArrowRight") {
//         setLightboxIndex((prev) => (prev + 1) % total);
//       }

//       if (event.key === "ArrowLeft") {
//         setLightboxIndex((prev) => (prev - 1 + total) % total);
//       }
//     };

//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.body.style.overflow = previousOverflow;
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [lightboxIndex, total]);

//   if (total === 0) {
//     return (
//       <section className="bg-white px-6 py-16 text-center">
//         <p className="text-gray-500">
//           Installation photos will be available soon.
//         </p>
//       </section>
//     );
//   }

//   return (
//     <section
//       id="photo-gallery"
//       className="bg-white px-5 py-20 sm:px-8 lg:py-24"
//     >
//       <div className="mx-auto max-w-7xl">
//         {/* Section Header */}
//         <div className="mx-auto mb-12 max-w-3xl text-center">
//           <span
//             className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold"
//             style={{
//               backgroundColor: "#F7F1EA",
//               color: ORANGE,
//             }}
//           >
//             <Images size={17} />
//             Our Project Gallery
//           </span>

//           <h2
//             className="mt-5 text-3xl font-extrabold sm:text-4xl lg:text-5xl"
//             style={{ color: BROWN }}
//           >
//             Explore Our Window Transformations
//           </h2>

//           <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
//             Browse our collection of custom blinds and shades. Discover
//             inspiration for your next window project.
//           </p>
//         </div>

//         {/* Featured Slideshow */}
//         <div
//           className="group relative overflow-hidden rounded-3xl bg-gray-100 shadow-xl"
//           onMouseEnter={() => setIsPlaying(false)}
//           onMouseLeave={() => setIsPlaying(true)}
//         >
//           <div className="relative h-[300px] sm:h-[450px] lg:h-[560px]">
//             {galleryImages.map((image, index) => (
//               <img
//                 key={image.id}
//                 src={image.src}
//                 alt={image.alt}
//                 className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
//                   activeIndex === index
//                     ? "opacity-100"
//                     : "pointer-events-none opacity-0"
//                 }`}
//                 loading={index === 0 ? "eager" : "lazy"}
//               />
//             ))}

//             {/* Gradient */}
//             <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

//             {/* Top Badge */}
//             <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#5A3827] backdrop-blur sm:left-8 sm:top-8">
//               FEATURED INSTALLATIONS
//             </div>

//             {/* Expand Button */}
//             <button
//               type="button"
//               onClick={() => openLightbox(activeIndex)}
//               aria-label="View image full screen"
//               className="absolute right-5 top-5 rounded-full bg-white/90 p-3 text-[#5A3827] transition hover:bg-white sm:right-8 sm:top-8"
//             >
//               <Expand size={20} />
//             </button>

//             {/* Bottom Content */}
//             <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 text-white sm:p-8">
//               <div>
//                 <p className="text-sm font-medium text-orange-200">
//                   Season Blinds
//                 </p>
//                 <h3 className="mt-1 text-xl font-bold sm:text-3xl">
//                   {galleryImages[activeIndex].title}
//                 </h3>
//                 <p className="mt-2 text-sm text-white/80">
//                   {activeIndex + 1} / {total}
//                 </p>
//               </div>

//               {/* Slider Controls */}
//               <div className="flex items-center gap-2">
//                 <button
//                   type="button"
//                   onClick={() => setIsPlaying((prev) => !prev)}
//                   aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
//                   className="rounded-full bg-white/20 p-3 backdrop-blur transition hover:bg-white/40"
//                 >
//                   {isPlaying ? <Pause size={19} /> : <Play size={19} />}
//                 </button>

//                 <button
//                   type="button"
//                   onClick={prevSlide}
//                   aria-label="Previous slide"
//                   className="rounded-full bg-white/20 p-3 backdrop-blur transition hover:bg-white/40"
//                 >
//                   <ArrowLeft size={20} />
//                 </button>

//                 <button
//                   type="button"
//                   onClick={nextSlide}
//                   aria-label="Next slide"
//                   className="rounded-full bg-white/20 p-3 backdrop-blur transition hover:bg-white/40"
//                 >
//                   <ArrowRight size={20} />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Slideshow Progress */}
//           <div className="absolute bottom-0 left-0 right-0 flex gap-1 bg-black/20">
//             {galleryImages.map((image, index) => (
//               <button
//                 key={image.id}
//                 type="button"
//                 onClick={() => setActiveIndex(index)}
//                 aria-label={`Go to slide ${index + 1}`}
//                 className={`h-1 flex-1 transition-colors ${
//                   index === activeIndex ? "bg-[#F26A00]" : "bg-white/40"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Gallery Grid Header */}
//         <div className="mb-8 mt-16 flex flex-wrap items-end justify-between gap-4">
//           <div>
//             <h3
//               className="text-2xl font-extrabold sm:text-3xl"
//               style={{ color: BROWN }}
//             >
//               All Installations
//             </h3>
//             <p className="mt-2 text-gray-500">
//               Click any photo to view it in full size.
//             </p>
//           </div>

//           <span className="rounded-full bg-[#F7F1EA] px-4 py-2 text-sm font-semibold text-[#5A3827]">
//             {total} Photos
//           </span>
//         </div>

//         {/* Responsive Photo Grid */}
//         <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
//           {galleryImages.map((image, index) => (
//             <button
//               key={image.id}
//               type="button"
//               onClick={() => openLightbox(index)}
//               className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:aspect-[4/3]"
//               aria-label={`Open ${image.title}`}
//             >
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 loading="lazy"
//                 className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
//               />

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

//               <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
//                 <p className="text-sm font-semibold">{image.title}</p>
//                 <p className="mt-1 text-xs text-orange-200">View Photo</p>
//               </div>

//               <div className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-[#5A3827] opacity-0 transition group-hover:opacity-100">
//                 <Expand size={18} />
//               </div>
//             </button>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-16 rounded-3xl bg-[#F7F1EA] px-6 py-12 text-center sm:px-10">
//           <h3 className="text-2xl font-extrabold text-[#5A3827] sm:text-3xl">
//             Inspired by What You See?
//           </h3>

//           <p className="mx-auto mt-4 max-w-xl text-gray-600">
//             Let Season Blinds help you find the perfect window coverings for
//             your home or office.
//           </p>

//           <a
//             href="#contact"
//             className="mt-7 inline-flex rounded-full bg-[#F26A00] px-8 py-4 font-bold text-white shadow-md transition hover:bg-[#d85f00]"
//           >
//             Get Free Measurement & Quote
//           </a>
//         </div>
//       </div>

//       {/* Full Screen Lightbox */}
//       {lightboxIndex !== null && (
//         <div
//           role="dialog"
//           aria-modal="true"
//           aria-label="Photo gallery viewer"
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
//           onClick={closeLightbox}
//         >
//           {/* Close */}
//           <button
//             type="button"
//             onClick={closeLightbox}
//             aria-label="Close gallery"
//             className="absolute right-5 top-5 z-10 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/30"
//           >
//             <X size={25} />
//           </button>

//           {/* Previous */}
//           {total > 1 && (
//             <button
//               type="button"
//               onClick={(event) => {
//                 event.stopPropagation();
//                 setLightboxIndex((prev) => (prev - 1 + total) % total);
//               }}
//               aria-label="Previous image"
//               className="absolute left-3 z-10 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/30 sm:left-8"
//             >
//               <ChevronLeft size={28} />
//             </button>
//           )}

//           {/* Full Image */}
//           <div
//             className="flex max-h-[85vh] max-w-6xl flex-col items-center"
//             onClick={(event) => event.stopPropagation()}
//           >
//             <img
//               src={galleryImages[lightboxIndex].src}
//               alt={galleryImages[lightboxIndex].alt}
//               className="max-h-[75vh] max-w-full rounded-xl object-contain"
//             />

//             <div className="mt-5 text-center text-white">
//               <h3 className="text-lg font-semibold">
//                 {galleryImages[lightboxIndex].title}
//               </h3>
//               <p className="mt-1 text-sm text-white/60">
//                 {lightboxIndex + 1} of {total}
//               </p>
//             </div>
//           </div>

//           {/* Next */}
//           {total > 1 && (
//             <button
//               type="button"
//               onClick={(event) => {
//                 event.stopPropagation();
//                 setLightboxIndex((prev) => (prev + 1) % total);
//               }}
//               aria-label="Next image"
//               className="absolute right-3 z-10 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/30 sm:right-8"
//             >
//               <ChevronRight size={28} />
//             </button>
//           )}
//         </div>
//       )}
//     </section>
//   );
// };

// export default PhotoGallery;

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  Images,
  Pause,
  Play,
  X,
} from "lucide-react";

import { galleryImages } from "../data/galleryData";

const ORANGE = "#F26A00";
const BROWN = "#5A3827";

const PhotoGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const total = galleryImages.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  // Automatic slideshow
  useEffect(() => {
    if (!isPlaying || total < 2 || lightboxIndex !== null) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, total, lightboxIndex]);

  // Keyboard navigation and scroll lock for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % total);
      }

      if (event.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev - 1 + total) % total);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, total]);

  if (total === 0) {
    return (
      <section id="photo-gallery" className="bg-white px-6 py-20 text-center">
        <p className="text-gray-500">
          Installation photos will be available soon.
        </p>
      </section>
    );
  }

  return (
    <section
      id="photo-gallery"
      className="bg-white px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold"
            style={{
              backgroundColor: "#F7F1EA",
              color: ORANGE,
            }}
          >
            <Images size={17} />
            Our Project Gallery
          </span>

          <h2
            className="mt-5 text-3xl font-extrabold sm:text-4xl lg:text-5xl"
            style={{ color: BROWN }}
          >
            Explore Our Window Transformations
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Browse our collection of custom blinds and shades. Discover
            inspiration for your next window project.
          </p>
        </div>

        {/* ================= FEATURED SLIDESHOW ================= */}
        <div
          className="group relative overflow-hidden rounded-3xl bg-[#241C18] shadow-xl"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <div className="relative h-[450px] sm:h-[550px] lg:h-[700px]">
            {galleryImages.map((image, index) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
                  activeIndex === index
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}

            {/* Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

            {/* Featured Badge */}
            <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#5A3827] backdrop-blur sm:left-8 sm:top-8">
              FEATURED INSTALLATIONS
            </div>

            {/* Full Screen Button */}
            <button
              type="button"
              onClick={() => openLightbox(activeIndex)}
              aria-label="View image full screen"
              className="absolute right-5 top-5 rounded-full bg-white/90 p-3 text-[#5A3827] transition hover:bg-white sm:right-8 sm:top-8"
            >
              <Expand size={20} />
            </button>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 text-white sm:p-8">
              <div>
                <p className="text-sm font-medium text-orange-200">
                  Season Blinds
                </p>

                <h3 className="mt-1 text-xl font-bold sm:text-3xl">
                  {galleryImages[activeIndex].title}
                </h3>

                <p className="mt-2 text-sm text-white/80">
                  {activeIndex + 1} / {total}
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPlaying((prev) => !prev)}
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                  className="rounded-full bg-white/20 p-3 backdrop-blur transition hover:bg-white/40"
                >
                  {isPlaying ? <Pause size={19} /> : <Play size={19} />}
                </button>

                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="rounded-full bg-white/20 p-3 backdrop-blur transition hover:bg-white/40"
                >
                  <ArrowLeft size={20} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="rounded-full bg-white/20 p-3 backdrop-blur transition hover:bg-white/40"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Slideshow Progress Indicators */}
          <div className="absolute bottom-0 left-0 right-0 flex gap-1 bg-black/20">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1 flex-1 transition-colors ${
                  index === activeIndex ? "bg-[#F26A00]" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= GALLERY GRID HEADER ================= */}
        <div className="mb-8 mt-16 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3
              className="text-2xl font-extrabold sm:text-3xl"
              style={{ color: BROWN }}
            >
              All Installations
            </h3>

            <p className="mt-2 text-gray-500">
              Click any photo to view it in full size.
            </p>
          </div>

          <span className="rounded-full bg-[#F7F1EA] px-4 py-2 text-sm font-semibold text-[#5A3827]">
            {total} Photos
          </span>
        </div>

        {/* ================= RESPONSIVE PHOTO GRID ================= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative h-[400px] overflow-hidden rounded-2xl bg-[#F7F1EA] text-left shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[480px] lg:h-[550px]"
              aria-label={`Open ${image.title}`}
            >
              {/* Full Image - No Cropping */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
              />

              {/* Hover Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              {/* Image Title */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-3 p-5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-lg font-bold">{image.title}</p>

                <p className="mt-1 text-sm text-orange-200">View Full Photo</p>
              </div>

              {/* Expand Icon */}
              <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/90 p-3 text-[#5A3827] opacity-0 shadow-md transition group-hover:opacity-100">
                <Expand size={20} />
              </div>
            </button>
          ))}
        </div>

        {/* ================= CALL TO ACTION ================= */}
        <div className="mt-16 rounded-3xl bg-[#F7F1EA] px-6 py-12 text-center sm:px-10">
          <h3 className="text-2xl font-extrabold text-[#5A3827] sm:text-3xl">
            Inspired by What You See?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Let Season Blinds help you find the perfect window coverings for
            your home or office.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex rounded-full bg-[#F26A00] px-8 py-4 font-bold text-white shadow-md transition hover:bg-[#d85f00]"
          >
            Get Free Measurement & Quote
          </a>
        </div>
      </div>

      {/* ================= FULL SCREEN LIGHTBOX ================= */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery"
            className="absolute right-5 top-5 z-10 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/30"
          >
            <X size={25} />
          </button>

          {/* Previous Image */}
          {total > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + total) % total);
              }}
              aria-label="Previous image"
              className="absolute left-3 z-10 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/30 sm:left-8"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Full Image */}
          <div
            className="flex max-h-[85vh] max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-h-[75vh] max-w-full rounded-xl object-contain"
            />

            <div className="mt-5 text-center text-white">
              <h3 className="text-lg font-semibold">
                {galleryImages[lightboxIndex].title}
              </h3>

              <p className="mt-1 text-sm text-white/60">
                {lightboxIndex + 1} of {total}
              </p>
            </div>
          </div>

          {/* Next Image */}
          {total > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % total);
              }}
              aria-label="Next image"
              className="absolute right-3 z-10 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/30 sm:right-8"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
