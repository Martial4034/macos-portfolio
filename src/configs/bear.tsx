import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-heroicons-outline:computer-desktop",
    md: [
      {
        id: "about-me",
        title: "Présentation",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Salut ! Je me présente, moi c'est Ma..."
      },
      {
        id: "contact-me",
        title: "Contactez moi",
        file: "markdown/contact.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "N'hesite pas a me contactez par mail..."
      },
      {
        id: "competences",
        title: "Compétences/Expériences",
        file: "markdown/competences.md",
        icon: "i-octicon:browser",
        excerpt: "Au niveau de mes expériences..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "agence-le-home",
        title: "Agence le Home",
        file: "https://raw.githubusercontent.com/Martial4034/Agence-le-Home/main/README.md",
        icon: "i-heroicons-outline:home",
        excerpt: "À 18 ans, j'ai refondé l'agence immobilière de mes parents...",
        link: "https://www.agencelehome.fr/"
      },
      {
        id: "pigly-agency",
        title: "Pigly Agency",
        file: "https://raw.githubusercontent.com/Martial4034/PiglyAgency/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "À 16 ans, ma première boite, destiné à aidé...",
        link: "https://github.com/Martial4034/PiglyAgency"
      },
      {
        id: "formulaire",
        title: "Formulaire VUEJS",
        file: "https://raw.githubusercontent.com/Martial4034/formulaire/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "Un devoir donné durant le BTS SIO...",
        link: "https://github.com/Martial4034/Formulaire"
      },
      {
        id: "pigly",
        title: "Pigly Mobile App",
        file: "https://raw.githubusercontent.com/Martial4034/Pigly/main/README.md",
        icon: "i-akar-icons:sword",
        excerpt: "À 17 ans, on développe Pigly, une appli mobile...",
        link: "https://vuepress-theme-gungnir.vercel.app"
      },
      {
        id: "cass-croute",
        title: "Cass-Croute",
        file: "https://raw.githubusercontent.com/Martial4034/Cass-Croute/main/README.md",
        icon: "i-icon-park-outline:heavy-metal",
        excerpt: "À 15 ans, j’ai créé Cass-Croute, une plateform...",
        link: "https://github.com/Martial4034/Cass-Croute"
      },
      {
        id: "old-portfolio",
        title: "Fisrt Portfolio",
        file: "https://raw.githubusercontent.com/Martial4034/Old-minimalist-portfolio/main/README.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "À 13 ans, portfolio minimaliste moderne que je ..",
        link: "https://github.com/Martial4034/Old-minimalist-portfolio"
      },
      // https://heroicons.com/
    ]
  }
];

export default bear;
