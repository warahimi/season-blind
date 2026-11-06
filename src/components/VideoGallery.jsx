import { useMemo, useState } from "react";
// import { Play, Youtube, ArrowUpRight, Video, Clapperboard } from "lucide-react";
import { Play, ArrowUpRight, Video, Clapperboard } from "lucide-react";

import { videos, videoCategories, getYouTubeId } from "../data/videoData";

const ORANGE = "#F26A00";
const BROWN = "#5A3827";

const VideoGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingId, setPlayingId] = useState(null);

  // Only show videos that have a valid YouTube URL.
  const availableVideos = useMemo(
    () =>
      videos
        .map((video) => ({
          ...video,
          youtubeId: getYouTubeId(video.youtubeUrl),
        }))
        .filter((video) => video.youtubeId),
    [],
  );

  const filteredVideos = availableVideos.filter(
    (video) => activeCategory === "All" || video.category === activeCategory,
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setPlayingId(null);
  };

  const handlePlay = (id) => {
    setPlayingId(id);
  };

  // Hide the section until real videos are added.
  if (availableVideos.length === 0) {
    return null;
  }

  return (
    <section
      id="videos"
      className="scroll-mt-24 bg-[#F7F1EA] px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold shadow-sm"
            style={{ color: ORANGE }}
          >
            <Clapperboard size={18} />
            Our Videos
          </span>

          <h2
            className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl"
            style={{ color: BROWN }}
          >
            Watch Our Blinds Installations
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            See Season Blinds in action! Explore our professional installations,
            product demonstrations, and beautiful window transformations.
          </p>
        </div>

        {/* ================= CATEGORY FILTERS ================= */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {videoCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${
                activeCategory === category
                  ? "bg-[#F26A00] text-white shadow-md"
                  : "border border-gray-200 bg-white text-[#5A3827] hover:border-[#F26A00] hover:text-[#F26A00]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ================= VIDEO GRID ================= */}
        {filteredVideos.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video) => {
              const isPlaying = playingId === video.id;

              return (
                <article
                  key={video.id}
                  className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Video Player / Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-[#241C18]">
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                        title={video.title}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => handlePlay(video.id)}
                        aria-label={`Play ${video.title}`}
                        className="relative h-full w-full overflow-hidden"
                      >
                        {/* YouTube Thumbnail */}
                        <img
                          src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                          alt={video.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/40" />

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F26A00] text-white shadow-xl transition duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                            <Play
                              size={30}
                              fill="currentColor"
                              className="ml-1"
                            />
                          </div>
                        </div>

                        {/* Category Badge */}
                        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#5A3827] shadow-sm">
                          {video.category}
                        </span>

                        {/* YouTube Label */}
                        <span className="absolute bottom-4 right-4 flex items-center gap-1 rounded-lg bg-black/75 px-3 py-1.5 text-xs font-semibold text-white">
                          {/* <Youtube size={15} /> */}
                          <Play size={15} fill="currentColor" />
                          Watch Video
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Video Information */}
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#F26A00]">
                      <Video size={16} />
                      <span>{video.category}</span>
                    </div>

                    <h3 className="text-xl font-extrabold leading-snug text-[#5A3827]">
                      {video.title}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-sm leading-7 text-gray-600">
                      {video.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                      <span className="text-xs font-medium text-gray-500">
                        Season Blinds
                      </span>

                      <a
                        href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#F26A00] transition hover:text-[#d85f00]"
                      >
                        YouTube
                        <ArrowUpRight size={17} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-14 rounded-3xl bg-white px-6 py-16 text-center">
            <Video size={36} className="mx-auto text-[#F26A00]" />
            <p className="mt-4 text-gray-600">
              No videos available in this category yet.
            </p>
          </div>
        )}

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-20 overflow-hidden rounded-3xl bg-[#5A3827] px-6 py-12 text-center text-white shadow-xl sm:px-10 sm:py-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
            {/* <Youtube size={32} className="text-orange-300" /> */}
            <Play size={32} fill="currentColor" className="text-orange-300" />
          </div>

          <h3 className="mt-6 text-2xl font-extrabold sm:text-3xl">
            Ready to Transform Your Windows?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-orange-100">
            Inspired by our installations? Contact Season Blinds today for a
            free measurement and personalized quote.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#F26A00] px-8 py-4 font-bold text-white shadow-lg transition hover:bg-[#d85f00]"
          >
            Get Free Measurement & Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
