import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Language options
  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Spanish" },
    { code: "pt", label: "Portuguese" },
  ];

  // Change language
  const changeLang = (e) => i18n.changeLanguage(e.target.value);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-19 w-auto object-contain"
            />

            <div className="flex flex-col leading-tight">
              <h1 className="font-bold text-3xl text-blue-600">
                Legacy <small className="text-gray-400">I.T.</small>
              </h1>
              <span className="text-sm text-gray-600">
                Digital Transformation
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 mx-auto">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t("navbar.services")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t("navbar.about")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t("navbar.contact")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition"
            >
              {t("navbar.get_started")}
            </button>
          </div>

          {/* Desktop Language Dropdown */}
          <div className="hidden md:flex">
            <select
              className="border border-gray-300 bg-white px-3 py-1 rounded-md text-sm"
              value={i18n.language}
              onChange={changeLang}
            >
              {languages.map((lng) => (
                <option key={lng.code} value={lng.code}>
                  {lng.label}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 text-center">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t("navbar.services")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t("navbar.about")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t("navbar.contact")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition"
            >
              {t("navbar.get_started")}
            </button>

            {/* Mobile Language Dropdown */}
            <div className="flex justify-center">
              <select
                className="border border-gray-300 bg-white px-3 py-1 rounded-md text-sm"
                value={i18n.language}
                onChange={changeLang}
              >
                {languages.map((lng) => (
                  <option key={lng.code} value={lng.code}>
                    {lng.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
