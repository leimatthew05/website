import React, { useState, useEffect, useMemo } from "react";
import Img from "../lightbox-components/Modal";

// Simple carousel that shows one image at a time in a fixed-size container.
// Props:
// - images: either a flat array of image objects or an array of rows (nested arrays)
// - width: CSS width for the carousel container (default: '800px')
// - height: CSS height for the carousel container (default: '600px')
export default function Carousel({ images = [], width = "800px", height = "600px" }) {
  // flatten nested arrays if needed
  const flat = useMemo(() => {
    if (!images) return [];
    if (Array.isArray(images) && images.length > 0 && Array.isArray(images[0])) {
      return images.reduce((acc, row) => acc.concat(row), []);
    }
    return images;
  }, [images]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, flat]);

  const prev = () => {
    setIndex((i) => (flat.length ? (i - 1 + flat.length) % flat.length : 0));
  };
  const next = () => {
    setIndex((i) => (flat.length ? (i + 1) % flat.length : 0));
  };

  if (!flat || flat.length === 0) {
    return null;
  }

  const current = flat[index];

  const containerStyle = {
    width: width,
    height: height,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#111",
    // center horizontally when given a fixed width
    margin: "0 auto",
  };

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.5)",
    border: "none",
    color: "white",
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: "20px",
  };

  const leftStyle = { ...arrowStyle, left: "8px" };
  const rightStyle = { ...arrowStyle, right: "8px" };

  // Modal Img expects width prop as CSS width and height as maxHeight.
  // We'll place the Img inside a fixed-size box and give it width: 100% and maxHeight: height
  return (
    <div style={containerStyle} aria-roledescription="carousel">
      <button
        aria-label="Previous"
        style={leftStyle}
        onClick={prev}
        type="button"
      >
        ‹
      </button>

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* pointerEvents none above prevents the wrapper from intercepting clicks; Img itself is clickable */}
          <Img
            small={current.file}
            large={current.large_file || current.file}
            alt={current.caption || current.file}
            // let the image size naturally but constrain its max height to the carousel height
            width="auto"
            height={height}
            className="carousel-image"
          />
        </div>
      </div>

      <button
        aria-label="Next"
        style={rightStyle}
        onClick={next}
        type="button"
      >
        ›
      </button>

      {/* simple position indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "8px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          fontSize: "14px",
          background: "rgba(0,0,0,0.4)",
          padding: "4px 8px",
          borderRadius: "12px",
        }}
      >
        {index + 1} / {flat.length}
      </div>
    </div>
  );
}
