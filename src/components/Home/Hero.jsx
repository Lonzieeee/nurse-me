import "./Hero.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Hero() {
  const videoRef = useRef(null);
  const [shouldRenderVideo, setShouldRenderVideo] = useState(false);

  useEffect(() => {
    const updateShouldRender = () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isTabletOrLarger = window.innerWidth >= 769;
      setShouldRenderVideo(!prefersReducedMotion && isTabletOrLarger);
    };

    updateShouldRender();
    window.addEventListener("resize", updateShouldRender);
    return () => window.removeEventListener("resize", updateShouldRender);
  }, []);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      videoEl.pause();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
            videoEl.play().catch(() => {});
          } else {
            videoEl.pause();
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, [shouldRenderVideo]);

  return (
    <section className="hero">
     
      {shouldRenderVideo && (
        <video
          ref={videoRef}
          className="hero-video"
          src="https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/hero(1).mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/fallback-min.png"
        />
      )}

   
      <div className="overlay"></div>

    
      <div className="hero-content">
        <h1>Compassionate <span className="care-highlight">Care at Home</span></h1>
        <p>
          Affordable, accessible, and professional healthcare services delivered
          to your doorstep.
        </p>
        <div className="hero-buttons">
          <Link to="/services/book" className="btn primary">
            Book a Visit Now
          </Link>
          <Link to="/services/join" className="btn secondary">
            Join as a Healthcare Provider
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
