import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useNav } from "../Providers/NavProvider";

export default function Section({ title, id, element }) {
  const ref = useRef(null);
  const { setActiveLink } = useNav();
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveLink(id);
    }
  }, [isInView, id, setActiveLink]);

  return (
    <section id={id} ref={ref} className=" min-h-screen h-max flex flex-col items-center justify-center">
      {element}
    </section>
  );
}
