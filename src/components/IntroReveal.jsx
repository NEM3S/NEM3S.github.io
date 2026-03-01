import { motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

export default function IntroReveal({ targetRef, playKey }) {
  const overlayRef = useRef(null);
  const [origin, setOrigin] = useState(null);

  const initialClip = useMemo(() => `circle(150% at 50% 50%)`, []);

  useEffect(() => {
    setOrigin(null);

    const el = targetRef?.current;
    const overlay = overlayRef.current;
    if (!el || !overlay) return;

    const t = setTimeout(() => {
      requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const o = overlay.getBoundingClientRect();

        setOrigin({
          x: (r.left + r.width / 2) - o.left,
          y: (r.top + r.height / 2) - o.top,
        });
      });
    }, 100);

    return () => clearTimeout(t);
  }, [targetRef, playKey]);

  return (
    <motion.div
      ref={overlayRef}
      key={playKey}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ background: "var(--intro-color)" }}
      initial={{ clipPath: initialClip }}
      animate={
        origin
          ? { clipPath: `circle(0px at ${origin.x}px ${origin.y}px)` }
          : { clipPath: initialClip }
      }
      transition={{ duration: origin ? 1.5 : 0, ease: [.64,.13,.64,.74] }}
    />
  );
}