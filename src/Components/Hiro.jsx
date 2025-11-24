import { ArrowRight, MessageCircle, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Hero = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-gray-100 relative">
      {/* HERO Content (unchanged) */}
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {t("hero.heading_part1")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("hero.heading_part2")}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            {t("hero.subtext")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={scrollToContact}
              className="flex items-center px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition"
            >
              {t("hero.get_started")} <ArrowRight className="ml-2" size={20} />
            </button>

            <button
              onClick={scrollToServices}
              className="px-8 py-4 text-lg border border-gray-400 rounded-lg hover:bg-gray-100 transition"
            >
              {t("hero.explore_services")}
            </button>
          </div>
        </div>
      </div>

      {/* WHATSAPP FLOATING BUTTON (theme switcher style) */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* MAIN SMALL BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all"
        >
          <MessageCircle size={28} />
        </button>

        {/* OPEN PANEL */}
        {open && (
          <div className="absolute bottom-16 right-0 bg-white shadow-xl rounded-xl p-4 w-48 flex flex-col items-center gap-4 border">
            {/* WhatsApp Action Button */}
            <a
              href="https://wa.me/9779702016450"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
            >
              <MessageCircle size={24} /> Chat Now
            </a>

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-black transition"
            >
              <X size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
