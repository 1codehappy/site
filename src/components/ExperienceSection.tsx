import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Desenvolvedor Full Stack Senior",
      company: "Tech Solutions Brasil",
      period: "2022 - Presente",
      description: "Desenvolvimento e manutenção de aplicações web de alta performance utilizando React, Node.js e AWS. Liderança de equipe e implementação de metodologias ágeis para melhorar a produtividade."
    },
    {
      title: "Desenvolvedor Full Stack",
      company: "Inovação Digital Ltda",
      period: "2020 - 2022",
      description: "Desenvolvimento de aplicações web e mobile usando Vue.js, Laravel e React Native. Implementação de soluções de CI/CD e automatização de processos."
    },
    {
      title: "Desenvolvedor Frontend",
      company: "WebTech Brasil",
      period: "2018 - 2020",
      description: "Desenvolvimento de interfaces de usuário responsivas e interativas usando HTML, CSS e JavaScript. Migração de projetos legados para Angular e implementação de testes automatizados."
    }
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="experiencia" className="bg-white dark:bg-dark">
      <div className="container">
        <div className="section-heading">
          <motion.h2 
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            Experiência Profissional
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mt-2 mb-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Minha jornada profissional reflete minha paixão por desenvolvimento de software
            e tecnologias inovadoras.
          </motion.p>
        </div>

        <div 
          ref={ref} 
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="relative">
            {/* Linha do tempo vertical */}
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-primary transform md:translate-x-[-50%]" />
            
            {/* Experiências */}
            {experiences.map((exp, index) => (
              <TimelineItem 
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                isEven={index % 2 === 0}
                delay={0.3 + index * 0.1}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const TimelineItem = ({ 
  title, 
  company, 
  period, 
  description, 
  isEven,
  delay,
  inView
}: {
  title: string;
  company: string;
  period: string;
  description: string;
  isEven: boolean;
  delay: number;
  inView: boolean;
}) => {
  const fadeIn = {
    hidden: { opacity: 0, x: isEven ? -20 : 20 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <motion.div 
      className={`relative flex md:flex-row flex-col ${isEven ? 'md:flex-row-reverse' : ''} mb-12`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.5, delay }}
    >
      {/* Ponto na timeline */}
      <div className="absolute left-[-8px] md:left-1/2 top-0 h-4 w-4 rounded-full bg-primary transform md:translate-x-[-50%]" />
      
      {/* Conteúdo */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
        <div className="card hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <h4 className="text-primary font-medium">{company}</h4>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">
            <FiCalendar className="mr-2" />
            <span>{period}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
      
      {/* Espaço para timeline centralizada no mobile */}
      <div className="w-full md:w-1/2" />
    </motion.div>
  )
}

export default ExperienceSection
