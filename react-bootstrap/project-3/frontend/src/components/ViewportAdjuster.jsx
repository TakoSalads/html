import { useEffect } from "react";

function ViewportAdjuster() {
  useEffect(() => {
    const siteWidth = 1280;
    const scale = Math.min(window.innerWidth / siteWidth, 1); // Prevents overscaling on large screens
    const metaTag = document.querySelector('meta[name="viewport"]');

    if (metaTag) {
      metaTag.setAttribute("content", `width=${siteWidth}, initial-scale=${scale}`);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "viewport";
      newMeta.content = `width=${siteWidth}, initial-scale=${scale}`;
      document.head.appendChild(newMeta);
    }
  }, []);

  return null; // No visible output
}

export default ViewportAdjuster;
