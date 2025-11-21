import { Award, Users, Target, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, label: t("about.stats.happy_clients"), value: "500+" },
    {
      icon: Award,
      label: t("about.stats.projects_completed"),
      value: "1,200+",
    },
    { icon: Target, label: t("about.stats.success_rate"), value: "98%" },
    {
      icon: TrendingUp,
      label: t("about.stats.years_experience"),
      value: "15+",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              {t("about.heading")}
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              {t("about.paragraph1")}
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              {t("about.paragraph2")}
            </p>

            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-4">
                {t("about.mission_title")}
              </h3>
              <p className="text-gray-600">{t("about.mission_text")}</p>
            </div>
          </div>

          {/* RIGHT SIDE — STATS GRID */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center space-y-4 border border-gray-200 hover:shadow-xl transition shadow-sm"
                >
                  {/* ICON BOX */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto">
                    <Icon className="text-white" size={24} />
                  </div>

                  {/* TEXT */}
                  <div>
                    <div className="text-3xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
