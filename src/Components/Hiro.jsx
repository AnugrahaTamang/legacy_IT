import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {/* HEADING */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {t("hero.heading_part1")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("hero.heading_part2")}
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            {t("hero.subtext")}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            {/* Get Started */}
            <button
              onClick={scrollToContact}
              className="flex items-center px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition"
            >
              {t("hero.get_started")} <ArrowRight className="ml-2" size={20} />
            </button>

            {/* Explore Services */}
            <button
              onClick={scrollToServices}
              className="px-8 py-4 text-lg border border-gray-400 rounded-lg hover:bg-gray-100 transition"
            >
              {t("hero.explore_services")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
