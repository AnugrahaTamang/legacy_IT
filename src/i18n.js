import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          footer: {
            tagline:
              "Transforming businesses through innovative technology solutions.",
            services_title: "Services",
            services: {
              web_dev: "Web Development",
              digital_marketing: "Digital Marketing",
              it_support: "IT Support",
              cloud: "Cloud Solutions",
            },
            company_title: "Company",
            company: {
              about: "About Us",
              careers: "Careers",
              blog: "Blog",
              contact: "Contact",
            },
            legal_title: "Legal",
            legal: {
              privacy: "Privacy Policy",
              terms: "Terms of Service",
              cookies: "Cookie Policy",
            },
            rights: "All rights reserved.",
          },
          contact: {
            heading: "Get In Touch",
            subtext:
              "Ready to start your project? Contact us today for a free consultation.",
            alert_error: "❌ Please fill in all required fields.",
            alert_success: "✅ Message Sent! Thank you for contacting us.",
            info_title: "Contact Information",
            email: "Email",
            phone: "Phone",
            office: "Office",
            business_hours: "Business Hours",
            hours: {
              weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
              saturday: "Saturday: 10:00 AM - 4:00 PM",
              sunday: "Sunday: Closed",
            },
            form: {
              name: "Your Name *",
              email: "Your Email *",
              subject: "Subject",
              message: "Your Message *",
              send: "Send Message",
            },
          },
          about: {
            heading: "About Legacy IT",
            paragraph1:
              "Founded in 2008, Legacy IT has been at the forefront of digital transformation, helping businesses leverage technology to achieve their goals. Our team of expert developers, designers, and strategists work tirelessly to deliver innovative solutions.",
            paragraph2:
              "We believe in building lasting partnerships with our clients, providing not just services, but strategic guidance that drives real business results. From startups to enterprises, we've helped organizations of all sizes succeed in the digital landscape.",
            mission_title: "Our Mission",
            mission_text:
              "To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation in an ever-evolving digital world.",
            stats: {
              happy_clients: "Happy Clients",
              projects_completed: "Projects Completed",
              success_rate: "Success Rate",
              years_experience: "Years of Experience",
            },
          },
          hero: {
            heading_part1: "Transform Your Business with",
            heading_part2: "Expert IT Solutions",
            subtext:
              "Legacy IT delivers cutting-edge web services, digital marketing, and comprehensive IT support to help your business thrive in the digital age.",
            get_started: "Get Started",
            explore_services: "Explore Services",
          },
          navbar: {
            services: "Services",
            about: "About",
            contact: "Contact",
            get_started: "Get Started",
          },
          services: {
            heading: "Our Services",
            subheading:
              "Comprehensive IT solutions designed to accelerate your business growth",
            webservices: {
              title: "Web Services",
              description:
                "Custom web development, responsive design, and modern web applications tailored to your business needs.",
              features: [
                "Custom Website Development",
                "E-commerce Solutions",
                "Progressive Web Apps",
                "API Integration",
              ],
            },
            marketing: {
              title: "Digital Marketing",
              description:
                "Strategic digital marketing campaigns that drive traffic, engagement, and conversions for your brand.",
              features: [
                "SEO Optimization",
                "Social Media Marketing",
                "Content Strategy",
                "Analytics & Reporting",
              ],
            },
            it: {
              title: "IT Problem Solving",
              description:
                "Expert technical support and solutions to keep your systems running smoothly and securely.",
              features: [
                "24/7 Technical Support",
                "System Maintenance",
                "Security Solutions",
                "Cloud Migration",
              ],
            },
          },
        },
      },
      es: {
        translation: {
          footer: {
            tagline:
              "Transformando negocios mediante soluciones tecnológicas innovadoras.",
            services_title: "Servicios",
            services: {
              web_dev: "Desarrollo Web",
              digital_marketing: "Marketing Digital",
              it_support: "Soporte TI",
              cloud: "Soluciones en la Nube",
            },
            company_title: "Empresa",
            company: {
              about: "Sobre Nosotros",
              careers: "Carreras",
              blog: "Blog",
              contact: "Contacto",
            },
            legal_title: "Legal",
            legal: {
              privacy: "Política de Privacidad",
              terms: "Términos de Servicio",
              cookies: "Política de Cookies",
            },
            rights: "Todos los derechos reservados.",
          },
          contact: {
            heading: "Ponte en Contacto",
            subtext:
              "¿Listo para comenzar tu proyecto? Contáctanos hoy para una consulta gratuita.",
            alert_error: "❌ Por favor completa todos los campos requeridos.",
            alert_success: "✅ ¡Mensaje enviado! Gracias por contactarnos.",
            info_title: "Información de Contacto",
            email: "Correo Electrónico",
            phone: "Teléfono",
            office: "Oficina",
            business_hours: "Horario de Atención",
            hours: {
              weekdays: "Lunes - Viernes: 9:00 AM - 6:00 PM",
              saturday: "Sábado: 10:00 AM - 4:00 PM",
              sunday: "Domingo: Cerrado",
            },
            form: {
              name: "Tu Nombre *",
              email: "Tu Correo *",
              subject: "Asunto",
              message: "Tu Mensaje *",
              send: "Enviar Mensaje",
            },
          },
          about: {
            heading: "Sobre Legacy IT",
            paragraph1:
              "Fundada en 2008, Legacy IT ha estado a la vanguardia de la transformación digital, ayudando a las empresas a aprovechar la tecnología para alcanzar sus objetivos. Nuestro equipo de desarrolladores, diseñadores y estrategas trabaja incansablemente para ofrecer soluciones innovadoras.",
            paragraph2:
              "Creemos en construir relaciones duraderas con nuestros clientes, proporcionando no solo servicios, sino orientación estratégica que genera resultados reales. Desde startups hasta empresas, hemos ayudado a organizaciones de todos los tamaños a tener éxito en el mundo digital.",
            mission_title: "Nuestra Misión",
            mission_text:
              "Empoderar a las empresas con soluciones tecnológicas innovadoras que impulsen el crecimiento, la eficiencia y la innovación en un mundo digital en constante evolución.",
            stats: {
              happy_clients: "Clientes Satisfechos",
              projects_completed: "Proyectos Completados",
              success_rate: "Tasa de Éxito",
              years_experience: "Años de Experiencia",
            },
          },
          hero: {
            heading_part1: "Transforma tu negocio con",
            heading_part2: "Soluciones IT Expertas",
            subtext:
              "Legacy IT ofrece servicios web avanzados, marketing digital y soporte IT integral para ayudar a tu negocio a prosperar en la era digital.",
            get_started: "Comenzar",
            explore_services: "Explorar Servicios",
          },
          navbar: {
            services: "Servicios",
            about: "Acerca de",
            contact: "Contacto",
            get_started: "Comenzar",
          },
          services: {
            heading: "Nuestros Servicios",
            subheading:
              "Soluciones informáticas completas diseñadas para acelerar el crecimiento de tu negocio",
            webservices: {
              title: "Servicios Web",
              description:
                "Desarrollo web personalizado, diseño responsivo y aplicaciones modernas adaptadas a las necesidades de tu negocio.",
              features: [
                "Desarrollo de Sitios Web",
                "Soluciones de Comercio Electrónico",
                "Aplicaciones Web Progresivas",
                "Integración de API",
              ],
            },
            marketing: {
              title: "Marketing Digital",
              description:
                "Campañas estratégicas de marketing digital que impulsan el tráfico, la participación y las conversiones.",
              features: [
                "Optimización SEO",
                "Marketing en Redes Sociales",
                "Estrategia de Contenido",
                "Análisis y Reportes",
              ],
            },
            it: {
              title: "Solución de Problemas de TI",
              description:
                "Soporte técnico experto y soluciones para mantener tus sistemas funcionando sin problemas y de forma segura.",
              features: [
                "Soporte Técnico 24/7",
                "Mantenimiento del Sistema",
                "Soluciones de Seguridad",
                "Migración a la Nube",
              ],
            },
          },
        },
      },

      pt: {
        translation: {
          footer: {
            tagline:
              "Transformando negócios através de soluções tecnológicas inovadoras.",
            services_title: "Serviços",
            services: {
              web_dev: "Desenvolvimento Web",
              digital_marketing: "Marketing Digital",
              it_support: "Suporte de TI",
              cloud: "Soluções em Nuvem",
            },
            company_title: "Empresa",
            company: {
              about: "Sobre Nós",
              careers: "Carreiras",
              blog: "Blog",
              contact: "Contato",
            },
            legal_title: "Legal",
            legal: {
              privacy: "Política de Privacidade",
              terms: "Termos de Serviço",
              cookies: "Política de Cookies",
            },
            rights: "Todos os direitos reservados.",
          },
          contact: {
            heading: "Entre em Contato",
            subtext:
              "Pronto para iniciar seu projeto? Contate-nos hoje para uma consulta gratuita.",
            alert_error: "❌ Por favor, preencha todos os campos obrigatórios.",
            alert_success: "✅ Mensagem enviada! Obrigado por nos contatar.",
            info_title: "Informações de Contato",
            email: "Email",
            phone: "Telefone",
            office: "Escritório",
            business_hours: "Horário Comercial",
            hours: {
              weekdays: "Segunda - Sexta: 9:00 AM - 6:00 PM",
              saturday: "Sábado: 10:00 AM - 4:00 PM",
              sunday: "Domingo: Fechado",
            },
            form: {
              name: "Seu Nome *",
              email: "Seu Email *",
              subject: "Assunto",
              message: "Sua Mensagem *",
              send: "Enviar Mensagem",
            },
          },
          about: {
            heading: "Sobre a Legacy IT",
            paragraph1:
              "Fundada em 2008, a Legacy IT está na vanguarda da transformação digital, ajudando empresas a aproveitar a tecnologia para alcançar seus objetivos. Nossa equipe de desenvolvedores, designers e estrategistas trabalha incansavelmente para entregar soluções inovadoras.",
            paragraph2:
              "Acreditamos em construir parcerias duradouras com nossos clientes, oferecendo não apenas serviços, mas orientação estratégica que gera resultados reais. De startups a grandes empresas, ajudamos organizações de todos os tamanhos a terem sucesso no mundo digital.",
            mission_title: "Nossa Missão",
            mission_text:
              "Capacitar empresas com soluções tecnológicas de ponta que impulsionem crescimento, eficiência e inovação em um mundo digital em constante evolução.",
            stats: {
              happy_clients: "Clientes Satisfeitos",
              projects_completed: "Projetos Concluídos",
              success_rate: "Taxa de Sucesso",
              years_experience: "Anos de Experiência",
            },
          },
          hero: {
            heading_part1: "Transforme seu negócio com",
            heading_part2: "Soluções de TI Especializadas",
            subtext:
              "A Legacy IT fornece serviços web inovadores, marketing digital e suporte completo de TI para ajudar seu negócio a prosperar na era digital.",
            get_started: "Começar",
            explore_services: "Explorar Serviços",
          },
          navbar: {
            services: "Serviços",
            about: "Sobre",
            contact: "Contato",
            get_started: "Começar",
          },
          services: {
            heading: "Nossos Serviços",
            subheading:
              "Soluções completas de TI projetadas para acelerar o crescimento do seu negócio",
            webservices: {
              title: "Serviços Web",
              description:
                "Desenvolvimento web personalizado, design responsivo e aplicações modernas adaptadas às necessidades do seu negócio.",
              features: [
                "Desenvolvimento de Sites Personalizados",
                "Soluções de E-commerce",
                "Aplicativos Web Progressivos",
                "Integração de API",
              ],
            },
            marketing: {
              title: "Marketing Digital",
              description:
                "Campanhas estratégicas de marketing digital que aumentam o tráfego, engajamento e conversões para sua marca.",
              features: [
                "Otimização SEO",
                "Marketing de Mídias Sociais",
                "Estratégia de Conteúdo",
                "Análises e Relatórios",
              ],
            },
            it: {
              title: "Resolução de Problemas de TI",
              description:
                "Suporte técnico especializado e soluções para manter seus sistemas funcionando de forma suave e segura.",
              features: [
                "Suporte Técnico 24/7",
                "Manutenção do Sistema",
                "Soluções de Segurança",
                "Migração para a Nuvem",
              ],
            },
          },
        },
      },
    },
  });
