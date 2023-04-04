import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    imagineshop,
    qrcode,
    mcdonalds,
    alwaysbmx,
    gastosmensais,
    calculadora,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Trabalho",
    },
    {
      id: "contact",
      title: "Contato",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Engenharia Eletrônica",
      company_name: "IFSC",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Ago 2018 - atualmente",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Curso Web Moderno Completo com JavaScript 2022 + Projetos",
      company_name: "Cod3r Cursos",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2022 - Mai 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Curso CS50x de Ciências da Computação",
      company_name: "Harvard",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Nov 2021 - Mar 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Curso MongoDB do básico ao avançado",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Mai 2022 - Jun 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Curso TypeScript do básico ao avançado",
      company_name: "UDEMY",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jun 2022 - Jul 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Desenvolvimento Full Stack",
      company_name: "Estácio de Sá",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Vicente proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Vicente does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Vicente optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Imagine Shop",
      description:
        "Loja virtual para venda de produtos de bicicletas BMX.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: imagineshop,
      source_code_link: "https://github.com/",
      live_demo_link: "https://youtube.com",
    },
    {
      name: "Gerador QR Code",
      description:
        "Aplicação web que gera um QR Code para URL que você quiser.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: qrcode,
      source_code_link: "https://github.com/vicentecrespop/Gerador-QRCode",
      live_demo_link: "https://gerador-qrc-ode.vercel.app/",
    },
    {
      name: "Gastos Mensais",
      description:
        "Aplicação web para cadastrar seus gastos mensais.",
      tags: [
        {
          name: "vuejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gastosmensais,
      source_code_link: "https://github.com/vicentecrespop/VueGastosMensais",
      live_demo_link: "https://vue-gastos-mensais.vercel.app/",
    },
    {
      name: "Calculadora de Celular",
      description:
        "Aplicação web para simular uma calculadora de celular.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: calculadora,
      source_code_link: "https://github.com/vicentecrespop/CalculadoraCelular",
      live_demo_link: "https://calculadora-celular.vercel.app/",
    },
    {
      name: "Always BMX",
      description:
        "Loja virtual para venda de produtos de bicicletas BMX.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "stripe",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "orange-text-gradient",
        },
      ],
      image: alwaysbmx,
      source_code_link: "https://github.com/vicentecrespop/e-commerce-stripe",
      live_demo_link: "https://e-commerce-stripe-teste.vercel.app/",
    },
    {
      name: "Cópia do McDonald's",
      description:
        "Cópia do site do McDonald's Brasil.",
      tags: [
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: mcdonalds,
      source_code_link: "https://github.com/vicentecrespop/McDonaldsTemplate",
      live_demo_link: "https://mc-donalds-template.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };