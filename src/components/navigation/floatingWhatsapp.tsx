import { useState, useEffect, useRef } from "react";
import WhatsAppIcon from "@/icons/whatsapp";
import Link from "next/link";
import { motion } from "motion/react";
import { Divide } from "lucide-react";

export default function FloatingWhatsapp() {
  const iconRef = useRef<HTMLAnchorElement>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const [isStoped, setIsStopped] = useState(false);
  const [topPosition, setTopPosition] = useState<number>(0);

  const handleScroll = () => {
    const icon = iconRef.current;
    const footer = footerRef.current;
    if (!icon || !footer) return;

    const iconheight = icon.offsetHeight;
    const footertop = footer.getBoundingClientRect().top;
    const iconFromBottom = window.innerHeight - iconheight;

    if (footertop <= iconFromBottom) {
      setIsStopped(true);
      setTopPosition(window.scrollY + footertop - iconheight / 2);
    } else {
      setIsStopped(false);
    }
  };
  useEffect(() => {
    footerRef.current = document.getElementById("footer");
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
      <Link
        ref={iconRef}
        href="https://wa.me/6285869887731"
        className={`${
          isStoped ? "absolute" : "fixed bottom-8 "
        } right-5 2xl:right-50 z-100 left-auto  lg:size-15 size-10 md:size-13 bg-light-primary p-2.5 rounded-full`}
        style={isStoped ? { top: topPosition } : {}}
      >
        <WhatsAppIcon className="lg:size-10 md:size-8 size-5 shrink-0 text-primary" />
      </Link>
    </motion.div>
  );
}
