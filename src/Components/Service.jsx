import { Globe, TrendingUp, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const servicesList = [
    { icon: Globe, key: "webservices" },
    { icon: TrendingUp, key: "marketing" },
    { icon: Wrench, key: "it" },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("services.heading")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-2xl font-semibold mb-2">{data.title}</h3>
                <p className="text-gray-600 mb-6">{data.description}</p>

                <ul className="space-y-2">
                  {data.features.map((f, index) => (
                    <li key={index} className="flex items-center text-gray-500">
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
    </section>
  );
};

export default Services;
