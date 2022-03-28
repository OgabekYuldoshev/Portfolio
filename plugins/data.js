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
        name: "JavaScript",
        img: "/js.png",
      },
      {
        name: "VueJS",
        img: "/vue.png",
      },
      {
        name: "NuxtJS",
        img: "/nuxt.png",
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
        name: "NodeJS",
        img: "/node.png",
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
        img: "/mysql.png",
      },
      {
        name: "MongoDB",
        img: "/mongodb.png",
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
        name: "QoraSuvAgro Sanoat Taminoti",
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
        name: "Online Store",
        img: "/works/shopping.png",
        use: ["VueJS", "NuxtJS"],
        code: "https://github.com/OgabekYuldoshev/shopping",
        live: "https://unknown.vercel.app/product/hello",
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
  //  console.log(ctx)
  // Inject $api
  inject("info", factories);
};
