import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setAlert({ type: "error", message: t("contact.alert_error") });
      return;
    }

    // Prepare Web3Forms payload
    const form = new FormData();
    form.append("access_key", "e2bead67-296c-464d-bf3a-ceab750f0b27");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject);
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setAlert({ type: "success", message: t("contact.alert_success") });

        // Clear form on success
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setAlert({
          type: "error",
          message: data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setAlert({
        type: "error",
        message: "Network error — please try again later.",
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("contact.heading")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("contact.subtext")}
          </p>
        </div>

        {/* Alert */}
        {alert.message && (
          <p
            className={`text-center mb-6 text-lg font-medium ${
              alert.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {alert.message}
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                {t("contact.info_title")}
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t("contact.email")}</h4>
                    <p className="text-gray-600">legacyit825@gmail.com</p>
                    <p className="text-gray-600">dino.goodseed@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t("contact.phone")}</h4>
                    <p className="text-gray-600">+977-9702016450</p>
                    <p className="text-gray-600">+977-legacynum</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t("contact.office")}</h4>
                    <p className="text-gray-600">Kantinagar Tole</p>
                    <p className="text-gray-600">Lalitpur, Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-100 rounded-lg p-6">
              <h4 className="font-semibold mb-2">
                {t("contact.business_hours")}
              </h4>
              <p className="text-gray-600">{t("contact.hours.weekdays")}</p>
              <p className="text-gray-600">{t("contact.hours.saturday")}</p>
              <p className="text-gray-600">{t("contact.hours.sunday")}</p>
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder={t("contact.form.name")}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />

            <input
              type="email"
              placeholder={t("contact.form.email")}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />

            <input
              type="text"
              placeholder={t("contact.form.subject")}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />

            <textarea
              placeholder={t("contact.form.message")}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              rows="6"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg flex items-center justify-center text-lg font-medium"
            >
              {t("contact.form.send")} <Send size={18} className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
