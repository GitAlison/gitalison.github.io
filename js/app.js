const Ebook = {
  template: "#ebook-component",
};

const Home = {
  template: "#home-component",
  data: function () {
    return {
      message: "Hello Friend :) \n Meu nome é: \n Alison Aguiar.",
      display: "",
    };
  },
  mounted: function () {
    this.typing();
  },
  methods: {
    typing() {
      let index = 0;
      let simbols = "こんにちは。あなたの日本語聞かせてほしいな！まずは練習！";
      const interval = setInterval(() => {
        if (index < this.message.length) {
          this.display += this.message[index];
          index++;
        } else {
          clearInterval(interval);
          this.display += this.choose(simbols);
        }
      }, 120);
    },
    choose(choices) {
      var index = Math.floor(Math.random() * choices.length);
      return choices[index];
    },
  },
};

const Contato = {
  template: "#contato-component",
  // template: '<div> Portifolio</div>',

  data: function () {
    return {
      email: "contato@alisonaguiar.com",
      phone: "(85) 9 8118 2610",
      instagram: "@alison_aguiarof",
    };
  },
  mounted: function () {},
};
const Portifolio = {
  // template: '<div> Portifolio</div>',
  template: "#portifolio-component",
  props: ["posts"],
  data: function () {
    return {
      selectedPost: undefined,
    };
  },
  // mounted: function() {
  //     fetch('https://alisonportifolio.herokuapp.com/portifolio/projects/').then(
  //         data => {
  //             data.json()
  //                 .then((posts) => {
  //                     this.posts = posts;
  //                 })

  //         }
  //     );
  // },
  methods: {
    imageSecure(url) {
      return url.replace("http", "https");
    },
    selectPost(post) {
      this.selectedPost = post;
    },
    unselectPost() {
      this.selectedPost = undefined;
    },
  },
};

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { path: "/ebook", component: Ebook },
  { path: "/contato", component: Contato },
  { path: "/portifolio", component: Portifolio, props: true },
];

// const router = new VueRouter({
//     routes // short for `routes: routes`
// })
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

const app = Vue.createApp({
  data() {
    return {
      posts: [],
      selectedPost: undefined,
      time: undefined,
    };
  },
  mounted: function () {
    fetch("https://alisonportifolio.herokuapp.com/portifolio/projects/").then(
      (data) => {
        data.json().then((posts) => {
          this.posts = posts;
        });
      }
    );

    setInterval(() => {
      let date = new Date();
      this.time = `${date.getDate()}/${date.getUTCMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${date.getMilliseconds()}`;
    }, 10);
  },
  methods: {
    imageSecure(url) {
      return url.replace("http", "https");
    },
    selectPost(post) {
      this.selectedPost = post;
    },
    unselectPost() {
      this.selectedPost = undefined;
    },
  },
});
app.use(router)
app.mount("#app");
