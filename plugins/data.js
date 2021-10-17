export default (ctx, inject) => {
  // Initialize API factories
  const factories = {
      skills:[
        {
          name:'HtmL',
          img: '/html.png'
        },
        {
          name:'Css',
          img: '/css.png'
        },
        {
          name:'JavaScript',
          img: '/js.png'
        },
        {
          name:'VueJS',
          img: '/vue.png'
        },
        {
          name:'NuxtJS',
          img: '/nuxt.png'
        },
        {
          name:'ReactJS',
          img: '/react.png'
        },
        {
          name:'NextJS',
          img: '/next.png'
        },
        {
          name:'NodeJS',
          img: '/node.png'
        },
        {
          name:'PrismaIO',
          img: '/prisma.png'
        },
        {
          name:'DataBase',
          img: '/database.png'
        }
      ],
    links: {
        facebook: 'https://www.facebook.com/ogabek.yuldoshev.75/',
        instagram: 'https://www.instagram.com/ogabek_sw/',
        github: 'https://github.com/OgabekYuldoshev',
        linkedin: 'https://www.linkedin.com/in/ogabek-yuldoshev-64184a207/',
        telegram:'https://t.me/anonymcooder'
    },
    user:{
      email:'yuldashoff1@gmail.com',
      phone:'+998 94 536 07 73'
    },
    works:[
      {
        name: "onlineStore",
        img: '/market.jpg',
        use: ['NextJS', 'Redux', "VueJS", "NuxtJS"],
        links:[
          {
            name: "Auto Market",
            link: 'https://auto-shopping.vercel.app/'
          },
          {
          name: "Market",
          link: 'https://tinfis.vercel.app/'
        },{
          name: "Progressing",
          link: 'https://unknown.vercel.app/'
        }]
      },
      {
        name: "landingPages",
        img: '/web.jpg',
        use: ['HtmL', 'Css', 'Js', "JQuery"],
        links:[
          {
          name: "Interior",
          link: 'https://interior-web-site.vercel.app/'
        },
        {
          name: "Hotels",
          link: 'https://ae-two.vercel.app/'
        },
        {
          name: "Tour",
          link: 'https://tour-gold.vercel.app/'
        },  ]
      },
      {
        name: "games",
        img: '/game.jpg',
        use: ['Js', "JQuery"],
        links:[
          {
          name: "Play",
          link: 'https://catchball.vercel.app/'
        },
        ]
      }
    ]
  };
  //  console.log(ctx)
  // Inject $api
  inject("info", factories);
};
