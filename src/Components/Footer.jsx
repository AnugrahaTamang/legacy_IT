import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 py-12 px-4 border-t border-gray-300">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Legacy IT
            </h3>
            <p className="text-gray-600">{t("footer.tagline")}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61584054964744"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/legacy91847"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <RiTwitterXLine size={20} />
              </a>
              <a
                href="https://wa.me/9779702016450"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <IoLogoWhatsapp size={20} />
              </a>
              <a
                href="https://www.instagram.com/legacyit825/"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.services_title")}</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-600 transition-colors"
                >
                  {t("footer.services.web_dev")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-600 transition-colors"
                >
                  {t("footer.services.digital_marketing")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-600 transition-colors"
                >
                  {t("footer.services.it_support")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-600 transition-colors"
                >
                  {t("footer.services.cloud")}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.company_title")}</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-600 transition-colors"
                >
                  {t("footer.company.about")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {t("footer.company.careers")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {t("footer.company.blog")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-600 transition-colors"
                >
                  {t("footer.company.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.legal_title")}</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {t("footer.legal.privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {t("footer.legal.terms")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {t("footer.legal.cookies")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Legacy IT. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
