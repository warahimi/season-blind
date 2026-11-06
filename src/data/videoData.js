
export const videoCategories = [
  "All",
  "Installations",
  "Motorized Blinds",
  "Product Demos",
];

// Replace these placeholder URLs with your actual
// Season Blinds YouTube video links.
export const videos = [
  {
    id: 1,
    title: "Modern Zebra Blinds Installation",
    description:
      "See how our team installs beautiful zebra blinds in a modern home.",
    category: "Installations",
    youtubeUrl: "https://www.youtube.com/watch?v=m96r6bQ7G80",
  },
  {
    id: 2,
    title: "Motorized Blinds Demonstration",
    description:
      "Discover the convenience of motorized window blinds.",
    category: "Motorized Blinds",
    youtubeUrl: "https://www.youtube.com/watch?v=nQsFaArw5bU",
  },
  {
    id: 3,
    title: "Custom Roller Shades Installation",
    description:
      "A look at our professional roller shades installation process.",
    category: "Installations",
    youtubeUrl: "https://www.youtube.com/watch?v=JXBXUgOiPgM",
  },
  {
    id: 4,
    title: "Honeycomb Shades Product Demo",
    description:
      "Explore the features of energy-efficient honeycomb shades.",
    category: "Product Demos",
    youtubeUrl: "https://www.youtube.com/watch?v=gfUmjsbN6hY",
  },
  {
    id: 5,
    title: "Living Room Window Transformation",
    description:
      "See the difference custom window coverings can make.",
    category: "Installations",
    youtubeUrl: "https://www.youtube.com/watch?v=uvfyJCVbj00",
  },
  {
    id: 6,
    title: "Smart Motorized Shades",
    description:
      "Learn how motorized shades add convenience and style.",
    category: "Motorized Blinds",
    youtubeUrl: "https://www.youtube.com/watch?v=4YJVb4n36S4",
  },
];

// Supports normal YouTube URLs, Shorts URLs,
// youtu.be links, embed URLs, and video IDs.
export const getYouTubeId = (url) => {
  if (!url) return null;

  const value = url.trim();

  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) {
    return value;
  }

  try {
    const parsed = new URL(value);
    const hostname = parsed.hostname.toLowerCase();

    if (hostname === "youtu.be" || hostname === "www.youtu.be") {
      const id = parsed.pathname.split("/")[1];
      return /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null;
    }

    if (
      hostname === "youtube.com" ||
      hostname === "www.youtube.com" ||
      hostname === "m.youtube.com"
    ) {
      const id =
        parsed.searchParams.get("v") ||
        parsed.pathname.match(/^\/(?:shorts|embed|live)\/([^/]+)/)?.[1];

      return /^[a-zA-Z0-9_-]{11}$/.test(id || "")
        ? id
        : null;
    }
  } catch {
    return null;
  }

  return null;
};
