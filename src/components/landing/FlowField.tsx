import { useEffect, useRef } from "react";

export default function FlowField() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || !("IntersectionObserver" in window)) return;

    const setActive = (active: boolean) => {
      frame.contentWindow?.postMessage({ type: "goldhouse-flowfield-active", active }, window.location.origin);
    };
    const observer = new IntersectionObserver(([entry]) => {
      setActive(entry.isIntersecting);
    }, { rootMargin: "10% 0px" });

    const onLoad = () => setActive(true);
    frame.addEventListener("load", onLoad);
    observer.observe(frame);
    return () => {
      setActive(false);
      frame.removeEventListener("load", onLoad);
      observer.disconnect();
    };
  }, []);

  return (
    <iframe
      ref={frameRef}
      className="flow-field"
      src="/goldhouse-arcade-flowfield-preview-v2.html"
      title="GoldHouse animated WebGL flow field"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
