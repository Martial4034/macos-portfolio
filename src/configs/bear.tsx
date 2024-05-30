import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
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
        id: "pigly-agency",
        title: "Pigly Agency",
        file: "https://raw.githubusercontent.com/Martial4034/PiglyAgency/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "Ma première boite, destiné à aidé...",
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
      // {
      //   id: "oh-vue-icons",
      //   title: "Oh, Vue Icons!",
      //   file: "https://github.com/Martial4034/Cass-Croute/edit/main/README.md",
      //   icon: "i-fa-brands:vuejs",
      //   excerpt: "Importing icons from different icon packs in Vue easily...",
      //   link: "https://oh-vue-icons.js.org"
      // },
      // {
      //   id: "text-classification",
      //   title: "Text Classification",
      //   file: "https://raw.githubusercontent.com/Renovamen/Text-Classification/master/README.md",
      //   icon: "i-gg:format-text",
      //   excerpt: "PyTorch implementation of text classificaiton models...",
      //   link: "https://github.com/Renovamen/Text-Classification"
      // },
      // {
      //   id: "speech-emotion-recognition",
      //   title: "Speech Emotion",
      //   file: "https://raw.githubusercontent.com/Renovamen/Speech-Emotion-Recognition/master/README.md",
      //   icon: "i-ant-design:audio-filled",
      //   excerpt: "Speech emotion recognition using Keras and sklearn...",
      //   link: "https://github.com/Renovamen/Speech-Emotion-Recognition"
      // },
      // {
      //   id: "pcalg-py",
      //   title: "PC Algorithm",
      //   file: "https://raw.githubusercontent.com/Renovamen/pcalg-py/master/README.md",
      //   icon: "i-tabler:atom-2",
      //   excerpt: "Implement PC algorithm in Python...",
      //   link: "https://github.com/Renovamen/pcalg-py"
      // },
      // {
      //   id: "midgard",
      //   title: "Midgard",
      //   file: "https://raw.githubusercontent.com/Renovamen/midgard/master/README.md",
      //   icon: "i-bx:game",
      //   excerpt: "An interactive version of my resume, powered by Vue...",
      //   link: "https://resume.zxh.io/"
      // },
      // {
      //   id: "image-captioning",
      //   title: "Image Captioning",
      //   file: "https://raw.githubusercontent.com/Renovamen/Image-Captioning/master/README.md",
      //   icon: "i-bi:image-fill",
      //   excerpt: "PyTorch implementation of image captioning models...",
      //   link: "https://github.com/Renovamen/Image-Captioning"
      // },
      // {
      //   id: "wordle-helper",
      //   title: "Wordle Helper",
      //   file: "https://raw.githubusercontent.com/Renovamen/wordle-helper/main/README.md",
      //   icon: "i-bi:grid-1x2",
      //   excerpt: "Help you solve Wordle puzzles...",
      //   link: "https://wordle.zxh.io"
      // },
      // {
      //   id: "cube-solver",
      //   title: "Cube Solver",
      //   file: "https://raw.githubusercontent.com/Renovamen/Just-a-Cube/master/README.md",
      //   icon: "i-bx:cube",
      //   excerpt: "A rubik's cube solver (layer-by-layer & two-phase)...",
      //   link: "https://cube.zxh.io"
      // },
      // {
      //   id: "alkaid",
      //   title: "Alkaid",
      //   file: "https://raw.githubusercontent.com/Renovamen/alkaid/main/README.md",
      //   icon: "i-simple-icons:stellar",
      //   excerpt: "Minimal reinforcement-learning toolbox for PyTorch...",
      //   link: "https://github.com/Renovamen/alkaid"
      // },
      // {
      //   id: "fishmail",
      //   title: "Fishmail",
      //   file: "https://raw.githubusercontent.com/Renovamen/Fishmail/master/README.md",
      //   icon: "i-game-icons:fish-escape",
      //   excerpt: "上班的时候装作在 Gmail 上查邮件的样子看知乎摸鱼...",
      //   link: "https://fishmail.vercel.app"
      // }
    ]
  }
];

export default bear;
