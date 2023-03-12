import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    cprogramming,
    java,
    md,
    shellscripting,
    php,
    python,
    typescript,
    html,
    css,
    mysql,
    postman,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    godaddy,
    amrita,
    clubhouse,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Pentester",
      icon: web,
    },
    {
      title: "Full-stack developer",
      icon: mobile,
    },
    {
      title: "BugHunter",
      icon: backend,
    },
    {
      title: "Entrepreneur",
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
      name: "C",
      icon: cprogramming,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Markdown",
      icon: md,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Shell Scripting",
      icon: shellscripting,
    },
    {
      name: "MySql",
      icon: mysql,
    },
    {
      name: "Postman",
      icon: postman,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Facebook",
      company_name: "facebook.com/whitehat",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "September 2022",
      points: [
        "Response: Not applicable",
        "Case no: 104817922389786",
        "The reasons why this report was closed as not applicable for our bug bounty program should have been explained more precisely in previous correspondence by the security team.",
      ],
    },
    {
      title: "Godaddy",
      company_name: "hackerone.com",
      icon: godaddy,
      iconBg: "#383E56",
      date: "August 2022",
      points: [
        "Response: Duplicate",
        "Reported using Hackerone",
      ],
    },
    {
      title: "Amrita Vishwa Vidyapeetam",
      company_name: "-",
      icon: amrita,
      iconBg: "#E6DEDD",
      date: "June 2022",
      points: [
        "Response: Valid",
        "Private Program",
      ],
    },
    {
      title: "Clubhouse",
      company_name: "hackerone.com",
      icon: clubhouse,
      iconBg: "#383E56",
      date: "March 2022",
      points: [
        "Response: Valid",
        "Not a security vulnerablity",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "OM - OSINT ME",
      description:
        "To create a solution to fetch the complete information about a person when a username, e-mail address, phone number, or any unique identifier is provided as the input.",
      tags: [
        {
          name: "osint",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "maltego",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    // {
    //   name: "Job IT",
    //   description:
    //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "restapi",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];

export { services, technologies, experiences, testimonials, projects };