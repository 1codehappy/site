// Translations for the website content
'use client';

import { useState, useEffect } from 'react';

export type Locale = 'en' | 'pt';

export type TranslationKey =
  // Navigation
  | 'nav_home'
  | 'nav_about'
  | 'nav_services'
  | 'nav_portfolio'
  | 'nav_contact'
  | 'nav_experience'

  // Hero section
  | 'hero_welcome'
  | 'hero_title'
  | 'hero_subtitle'
  | 'hero_cta'
  | 'hero_cta_primary'
  | 'hero_cta_secondary'
  | 'hero_scroll'
  | 'hero_scroll_aria'
  | 'hero_cta_contact'
  | 'hero_cta_portfolio'

  // About section
  | 'about_title'
  | 'about_subtitle'
  | 'about_content'
  | 'about_desc_1'
  | 'about_desc_2'
  | 'about_skills_title'
  | 'about_tech_title'
  | 'about_founded'
  | 'about_who'
  | 'about_p1'
  | 'about_p2'
  | 'about_skill1_title'
  | 'about_skill1_desc'
  | 'about_skill2_title'
  | 'about_skill2_desc'
  | 'about_skill3_title'
  | 'about_skill3_desc'
  | 'about_skill4_title'
  | 'about_skill4_desc'

  // Services section
  | 'services_title'
  | 'services_description'
  | 'service1_title'
  | 'service1_desc'
  | 'service2_title'
  | 'service2_desc'
  | 'service3_title'
  | 'service3_desc'
  | 'service4_title'
  | 'service4_desc'

  // Portfolio section
  | 'portfolio_title'
  | 'portfolio_description'
  | 'portfolio_all'

  // Contact section
  | 'contact_title'
  | 'contact_description'
  | 'contact_subtitle'
  | 'contact_cta'
  | 'contact_info_title'
  | 'contact_info_text'
  | 'contact_email'
  | 'contact_phone'
  | 'contact_location'
  | 'contact_social'
  | 'contact_country'
  | 'contact_form_title'
  | 'contact_form_name'
  | 'contact_form_email'
  | 'contact_form_subject'
  | 'contact_form_message'
  | 'contact_form_submit'
  | 'contact_form_send'
  | 'contact_form_sending'
  | 'contact_form_success_title'
  | 'contact_form_success_message'
  | 'contact_form_success_description'
  | 'contact_form_error_title'
  | 'contact_form_error_message'

  // Footer
  | 'footer_description'
  | 'footer_rights'
  | 'footer_quick_links'
  | 'footer_contact'
  | 'footer_address'

  // Services
  | 'services_title'
  | 'services_subtitle'
  | 'services_item1_title'
  | 'services_item1_desc'
  | 'services_item2_title'
  | 'services_item2_desc'
  | 'services_item3_title'
  | 'services_item3_desc'
  | 'services_item4_title'
  | 'services_item4_desc';

type Translations = {
  [key in TranslationKey]: {
    [locale in Locale]: string;
  };
};

export const translations: Translations = {
  // Navigation
  nav_home: {
    'en': 'Home',
    'pt': 'Início'
  },
  nav_about: {
    'en': 'About',
    'pt': 'Sobre'
  },
  nav_services: {
    'en': 'Services',
    'pt': 'Serviços'
  },
  nav_portfolio: {
    'en': 'Portfolio',
    'pt': 'Portfólio'
  },
  nav_contact: {
    'en': 'Contact',
    'pt': 'Contato'
  },

  // Hero section
  hero_welcome: {
    'en': 'Welcome to Code Happy',
    'pt': 'Bem-vindo à Code Happy'
  },
  hero_title: {
    'en': 'Technology Solutions',
    'pt': 'Soluções em Tecnologia'
  },
  hero_subtitle: {
    'en': 'Transforming ideas into efficient digital solutions. Always seeking innovation and excellence in technology.',
    'pt': 'Transformando ideias em soluções digitais eficientes. Sempre buscando inovação e excelência em tecnologia.'
  },
  hero_cta: {
    'en': 'Contact Us',
    'pt': 'Entre em Contato'
  },
  hero_cta_contact: {
    'en': 'Contact Us',
    'pt': 'Entre em Contato'
  },
  hero_cta_portfolio: {
    'en': 'Our Projects',
    'pt': 'Nossos Projetos'
  },

  // About section
  about_title: {
    'en': 'About Us',
    'pt': 'Sobre Nós'
  },
  about_who: {
    'en': 'Who We Are',
    'pt': 'Quem Somos'
  },
  about_p1: {
    'en': 'Code Happy is a technology company founded in 2020 by Gilberto Michishita Junior, focused on providing innovative digital solutions for businesses of all sizes.',
    'pt': 'A Code Happy é uma empresa de tecnologia fundada em 2020 por Gilberto Michishita Junior, focada em fornecer soluções digitais inovadoras para empresas de todos os tamanhos.'
  },
  about_p2: {
    'en': 'Our main focus is developing high-performance web and mobile applications that not only work exceptionally well but also provide intuitive and enjoyable user experiences. We believe technology should be a tool to improve people\'s lives.',
    'pt': 'Nosso foco principal é desenvolver aplicações web e móveis de alta performance que não apenas funcionam excepcionalmente bem, mas também proporcionam experiências intuitivas e agradáveis aos usuários. Acreditamos que a tecnologia deve ser uma ferramenta para melhorar a vida das pessoas.'
  },
  about_skill1_title: {
    'en': 'Outsourcing',
    'pt': 'Outsourcing'
  },
  about_skill1_desc: {
    'en': 'IT team and professional allocation',
    'pt': 'Alocação de profissionais e equipes de TI'
  },
  about_skill2_title: {
    'en': 'Consulting',
    'pt': 'Consultoria'
  },
  about_skill2_desc: {
    'en': 'Strategic IT solutions and guidance',
    'pt': 'Soluções estratégicas e orientação em TI'
  },
  about_skill3_title: {
    'en': 'Infrastructure',
    'pt': 'Infraestrutura'
  },
  about_skill3_desc: {
    'en': 'Cloud and server solutions',
    'pt': 'Soluções em nuvem e servidores'
  },
  about_skill4_title: {
    'en': 'Development',
    'pt': 'Desenvolvimento'
  },
  about_skill4_desc: {
    'en': 'Custom software and applications',
    'pt': 'Software e aplicações personalizadas'
  },

  // Services section
  services_title: {
    'en': 'Our Services',
    'pt': 'Nossos Serviços'
  },
  services_description: {
    'en': 'We provide comprehensive technology solutions to meet your business needs.',
    'pt': 'Fornecemos soluções completas em tecnologia para atender às necessidades do seu negócio.'
  },
  services_subtitle: {
    'en': 'Explore what we can do for your business',
    'pt': 'Explore o que podemos fazer pelo seu negócio'
  },
  service1_title: {
    'en': 'IT Outsourcing',
    'pt': 'Outsourcing de TI'
  },
  service1_desc: {
    'en': 'Professional allocation and dedicated teams to support your IT operations and projects, ensuring expertise and efficiency.',
    'pt': 'Alocação de profissionais e equipes dedicadas para apoiar suas operações e projetos de TI, garantindo expertise e eficiência.'
  },
  service2_title: {
    'en': 'Technology Consulting',
    'pt': 'Consultoria em Tecnologia'
  },
  service2_desc: {
    'en': 'Strategic guidance on digital transformation, technology adoption, and process optimization for your business.',
    'pt': 'Orientação estratégica em transformação digital, adoção de tecnologia e otimização de processos para o seu negócio.'
  },
  service3_title: {
    'en': 'IT Infrastructure',
    'pt': 'Infraestrutura de TI'
  },
  service3_desc: {
    'en': 'Full audit of your technology infrastructure, with detailed reports on vulnerabilities, opportunities for optimization, and action plans.',
    'pt': 'Auditoria completa de sua infraestrutura tecnológica, com relatórios detalhados sobre vulnerabilidades, oportunidades de otimização e planos de ação.'
  },
  service4_title: {
    'en': 'Cloud Solutions',
    'pt': 'Soluções em Nuvem'
  },
  service4_desc: {
    'en': 'Cloud solutions, server management, and network infrastructure design and implementation for reliable operations.',
    'pt': 'Soluções em nuvem, gerenciamento de servidores e design e implementação de infraestrutura de rede para operações confiáveis.'
  },

  // Portfolio section
  portfolio_title: {
    'en': 'Our Portfolio',
    'pt': 'Nosso Portfólio'
  },
  portfolio_description: {
    'en': 'A selection of our most recent work and significant projects.',
    'pt': 'Uma seleção dos nossos trabalhos mais recentes e projetos significativos.'
  },
  portfolio_all: {
    'en': 'All',
    'pt': 'Todos'
  },

  // Contact section
  contact_title: {
    'en': 'Contact Us',
    'pt': 'Entre em Contato'
  },
  contact_description: {
    'en': 'Get in touch with us through the form below or our contact information.',
    'pt': 'Entre em contato conosco através do formulário abaixo ou de nossas informações de contato.'
  },
  contact_subtitle: {
    'en': 'Have a question or want to work together? Reach out to us.',
    'pt': 'Tem uma pergunta ou quer trabalhar conosco? Entre em contato.'
  },
  contact_info_title: {
    'en': 'Contact Information',
    'pt': 'Informações de Contato'
  },
  contact_info_text: {
    'en': 'We are always open to new opportunities, collaborations, and conversations about technology. Do not hesitate to reach out through any of the channels below.',
    'pt': 'Estamos sempre abertos a novas oportunidades, colaborações e conversas sobre tecnologia. Não hesite em entrar em contato por qualquer um dos canais abaixo.'
  },
  contact_email: {
    'en': 'Email',
    'pt': 'Email'
  },
  contact_phone: {
    'en': 'Phone',
    'pt': 'Telefone'
  },
  contact_location: {
    'en': 'Location',
    'pt': 'Localização'
  },
  contact_social: {
    'en': 'Find us on social media',
    'pt': 'Encontre-nos nas redes sociais'
  },
  contact_form_title: {
    'en': 'Send a Message',
    'pt': 'Envie uma Mensagem'
  },
  contact_form_name: {
    'en': 'Full Name',
    'pt': 'Nome Completo'
  },
  contact_form_email: {
    'en': 'Email',
    'pt': 'Email'
  },
  contact_form_subject: {
    'en': 'Subject',
    'pt': 'Assunto'
  },
  contact_form_message: {
    'en': 'Message',
    'pt': 'Mensagem'
  },
  contact_form_submit: {
    'en': 'Submit',
    'pt': 'Enviar'
  },
  contact_form_send: {
    'en': 'Send Message',
    'pt': 'Enviar Mensagem'
  },
  contact_form_sending: {
    'en': 'Sending...',
    'pt': 'Enviando...'
  },
  contact_form_success_title: {
    'en': 'Message Sent!',
    'pt': 'Mensagem Enviada!'
  },
  contact_form_success_message: {
    'en': 'Thank you for reaching out! We will get back to you as soon as possible.',
    'pt': 'Obrigado pelo contato! Responderemos o mais breve possível.'
  },
  contact_form_success_description: {
    'en': 'We\'ll get back to you as soon as possible.',
    'pt': 'Retornaremos o mais breve possível.'
  },
  contact_form_error_title: {
    'en': 'Something went wrong',
    'pt': 'Algo deu errado'
  },
  contact_form_error_message: {
    'en': 'Please try again later or contact us directly.',
    'pt': 'Por favor, tente novamente mais tarde ou entre em contato diretamente.'
  },

  // Footer
  footer_description: {
    'en': 'Thank you for visiting our website. We look forward to connecting with you!',
    'pt': 'Obrigado por visitar nosso site. Esperamos nos conectar com você!'
  },
  footer_rights: {
    'en': 'All rights reserved.',
    'pt': 'Todos os direitos reservados.'
  },
  footer_quick_links: {
    'en': 'Quick Links',
    'pt': 'Links Rápidos'
  },
  footer_contact: {
    'en': 'Contact',
    'pt': 'Contato'
  },
  footer_address: {
    'en': 'Nelson Nogueira da Silva, Vera Cruz - SP, Brazil',
    'pt': 'Rua Nelson Nogueira da Silva, Vera Cruz - SP, Brasil'
  },
  nav_experience: {
    'en': 'Home',
    'pt': 'Início'
  },
  hero_cta_primary: {
    'en': 'Contact Us',
    'pt': 'Entre em Contato'
  },
  hero_cta_secondary: {
    'en': 'Learn More',
    'pt': 'Saiba Mais'
  },
  hero_scroll: {
    'en': 'Scroll Down',
    'pt': 'Rolar para Baixo'
  },
  about_founded: {
    'en': 'Founded in 2020 by Gilberto Michishita Junior',
    'pt': 'Fundada em 2020 por Gilberto Michishita Junior'
  },
  about_tech_title: {
    'en': 'Technologies We Use',
    'pt': 'Tecnologias que Utilizamos'
  },
  about_subtitle: {
    'en': 'Learn more about our approach',
    'pt': 'Saiba mais sobre nossa abordagem'
  },
  about_desc_1: {
    'en': 'We are a dedicated team of developers passionate about creating innovative web and mobile solutions for businesses of all sizes.',
    'pt': 'Somos uma equipe dedicada de desenvolvedores apaixonados por criar soluções web e móveis inovadoras para empresas de todos os tamanhos.'
  },
  about_desc_2: {
    'en': 'Our approach combines cutting-edge technology with user-centered design to deliver solutions that not only meet but exceed client expectations.',
    'pt': 'Nossa abordagem combina tecnologia de ponta com design centrado no usuário para entregar soluções que não apenas atendem, mas superam as expectativas dos clientes.'
  },
  about_content: {
    'en': 'We provide innovative solutions',
    'pt': 'Fornecemos soluções inovadoras'
  },
  about_skills_title: {
    'en': 'Our Skills',
    'pt': 'Nossas Habilidades'
  },
  contact_country: {
    'en': 'Brazil',
    'pt': 'Brasil'
  },
  hero_scroll_aria: {
    'en': 'Scroll down',
    'pt': 'Rolar para baixo'
  }
};

// Hook for getting translations based on current language
export const useTranslation = () => {
  // Use React hooks for client-side code
  const [locale, setLocale] = useState<Locale>('en');

  // Check localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = window.localStorage.getItem('language') as Locale;
      if (storedLang && (storedLang === 'en' || storedLang === 'pt')) {
        setLocale(storedLang);
      }
    }
  }, []);

  const t = (key: TranslationKey) => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][locale] || key;
  };

  return { t, locale };
};
