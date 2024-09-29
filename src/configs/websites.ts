import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/Martial4034"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/martial-laubier-4979a5267/"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:m.laubier@eleve.leschartreux.net"
      }
    ]
  },
  freq: {
    title: "You Frequently Visited",
    sites: [
      {
        id: "bisourivage",
        title: "BisouRivage",
        img: "img/sites/bisou_rivage.jpg",
        link: "https://www.bisourivage.fr/"
      },
      {
        id: "agencelehome",
        title: "Le Home",
        img: "/img/icons/launchpad/agence_le_home_logo.png",
        link: "https://www.agencelehome.fr/"
      },
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "openai",
        title: "OpenAI",
        img: "img/sites/openai.svg",
        link: "https://openai.com/"
      },
      {
        id: "reddit",
        title: "Reddit",
        img: "img/sites/reddit.svg",
        link: "https://www.reddit.com/"
      },
      {
        id: "hacker-news",
        title: "Hacker News",
        img: "img/sites/hacker.svg",
        link: "https://news.ycombinator.com/"
      },
      {
        id: "hackthebox",
        title: "Hack T Box",
        img: "img/sites/hackthebox.png",
        link: "https://www.hackthebox.com/"
      },
      {
        id: "aideadline",
        title: "AI Deadlines",
        img: "https://aideadlin.es/static/img/favicon.png",
        link: "https://aideadlin.es/",
        inner: true
      },
      {
        id: "oh-my-cv",
        title: "OhMyCV",
        img: "https://ohmycv.app/apple-touch-icon.png",
        link: "https://ohmycv.app/"
      },
      {
        id: "steam",
        title: "Steam",
        img: "img/sites/steam.svg",
        link: "https://store.steampowered.com/"
      },
      {
        id: "nazo",
        title: "Nazo",
        link: "https://nazo.one-story.cn"
      },
      {
        id: "svgomg",
        title: "SVGOMG",
        img: "https://jakearchibald.github.io/svgomg/imgs/icon.png",
        link: "https://jakearchibald.github.io/svgomg/"
      },
      {
        id: "tiny-png",
        title: "Tiny PNG",
        img: "https://tinypng.com/images/panda-chewing-2x.png",
        link: "https://tinypng.com/"
      }
    ]
  }
};

export default websites;
