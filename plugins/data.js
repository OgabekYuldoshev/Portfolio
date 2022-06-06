export default (ctx, inject) => {
  // Initialize API factories
  const factories = {
    skills: [
      {
        name: "HtmL",
        img: "/html.png",
      },
      {
        name: "Css",
        img: "/css.png",
      },
      {
        name: "Sass",
        img: "/sass.png",
      },
      {
        name: "JavaScript",
        img: "/js.png",
      },
      {
        name: "ReactJS",
        img: "/react.png",
      },
      {
        name: "NextJS",
        img: "/next.png",
      },
      {
        name: "Redux",
        img: "/redux.svg",
      },
      {
        name: "ViteJs",
        img: "/vitejs.png",
      },
      {
        name: "VueJS",
        img: "/vue.png",
      },
      {
        name: "NuxtJS",
        img: "/nuxt.svg",
      },
      {
        name: "NodeJS",
        img: "/nodejs.svg",
      },
      {
        name: "ExpressJS",
        img: "/express.png",
      },
      {
        name: "PrismaIO",
        img: "/prisma.png",
      },
      {
        name: "MySql",
        img: "/mysql.svg",
      },
      {
        name: "MongoDB",
        img: "/mongodb.svg",
      },
      {
        name: "UI Widgets",
        img: "/widget.png",
      },
    ],
    links: {
      facebook: "https://www.facebook.com/ogabek.yuldoshev.75/",
      instagram: "https://www.instagram.com/ogabek_sw/",
      github: "https://github.com/OgabekYuldoshev",
      linkedin: "https://www.linkedin.com/in/ogabek-yuldoshev-64184a207/",
      telegram: "https://t.me/anonymcooder",
    },
    user: {
      email: "yuldashoff1@gmail.com",
      phone: "+998 94 536 07 73",
    },

    works: [
      {
        name: "Imulife.Uz",
        img: "/works/imulife.png",
        use: ["ReactJS", "NextJs"],
        live: "https://qorasedanauz.vercel.app/",
      },
      {
        name: "Khojamatov.Uz for Professor",
        img: "/works/khojamatov.png",
        use: ["ReactJS", "Vite", "PHP"],
        live: "https://professors.vercel.app/",
      },
      {
        name: "QoraSuvAgro.Uz Sanoat Taminoti",
        img: "/works/qorasuv.png",
        use: ["ReactJS", "PHP"],
        live: "https://qorasuvagro.vercel.app/",
      },
      {
        name: "FoodEX System",
        img: "/works/foodex.png",
        use: ["Nodejs", "ExpressJS", "ReactJS", "NuxtJS", "MongoDB"],
        live: "https://foodex-deller.vercel.app/",
      },
      {
        name: "Portfolio Web Site",
        img: "/works/shazik.png",
        use: ["Nodejs", "ExpressJS", "EJS", "MongoDB"],
        code: "https://github.com/OgabekYuldoshev/shazik",
        live: "http://shazik.herokuapp.com/",
      },
      {
        name: "Interior Design Site",
        img: "/works/inter.png",
        use: ["HTML", "CSS", "JS"],
        code: "https://github.com/OgabekYuldoshev/Interior-Web-Site",
        live: "https://interior-web-site.vercel.app/",
      },
      {
        name: "Online Auto Store",
        img: "/works/auto-shopping.png",
        use: ["VueJS", "NuxtJS"],
        code: "https://github.com/OgabekYuldoshev/auto-shopping",
        live: "https://auto-shopping.vercel.app/",
      },
      {
        name: "AE Hotel",
        img: "/works/ae.png",
        use: ["HTML", "CSS", "GSap", "JS", "JQuery"],
        code: "https://github.com/OgabekYuldoshev/ae",
        live: "https://ae-two.vercel.app/",
      },
      {
        name: "Game",
        img: "/works/game.png",
        use: ["HTML", "CSS", "JS", "JQuery"],
        code: "https://github.com/OgabekYuldoshev/Catch-this-Ball",
        live: "https://catchball.vercel.app/",
      },
    ],
  };

  inject("info", factories);
};
