
const imageModules = import.meta.glob(
  "../assets/gallary/gallery_photos/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

export const galleryImages = Object.entries(imageModules)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true })
  )
  .map(([path, src], index) => ({
    id: index + 1,
    src,
    title: `Season Blinds Installation ${index + 1}`,
    alt: `Custom window blinds installation ${index + 1}`,
    filename: path.split("/").pop(),
  }));
