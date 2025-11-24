import { Globe, TrendingUp, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Services = () => {
  const { t } = useTranslation();

  const servicesList = [
    { icon: Globe, key: "webservices" },
    { icon: TrendingUp, key: "marketing" },
    { icon: Wrench, key: "it" },
  ];

  // ✨ Fade-in animation on scroll
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold animate-fade">
            {t("services.heading")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-slow">
            {t("services.subheading")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;

            // Access nested object with returnObjects:true
            const data = t(`services.${service.key}`, { returnObjects: true });

            return (
              <div
                key={idx}
                className="
                  service-card opacity-0 translate-y-8
                  border border-gray-200 rounded-xl p-6 shadow-md
                  bg-white transition-all duration-500

                  hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.03]
                  active:scale-[0.98]
                  
                  cursor-pointer
                "
              >
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6 shadow-md scale-100 group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-white" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-2 transition-all duration-300 group-hover:text-blue-600">
                  {data.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">{data.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {data.features.map((f, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-500 transition-all duration-300 hover:translate-x-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        /* Fade-in heading */
        .animate-fade {
          animation: fadeIn 1.2s ease forwards;
        }

        .animate-fade-slow {
          animation: fadeIn 1.8s ease forwards;
        }

        /* Scroll animation for cards */
        .animate-show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Keyframes */
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Services;
