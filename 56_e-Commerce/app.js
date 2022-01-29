const router = new VueRouter({
  routes: [
    { path: "/login", component: "login_form" },
    { path: "/sign-up", component: "signup_form" },
    { path: "/product-list", component: "product_list" },
    { path: "/category/:category/product_list", component: "product_list" },
  ],
});

var app = new Vue({
  router,
  data: {
    message: "hello world!",
    logged: localStorage.getItem("token") === null,
  },
  methods: {
    OnLogin: function (token) {
      this.logged = true;
      localStorage.setItem("token", token);
      console.log("Evento Login recibido en App");
    },
    DoLogout: function () {
      this.logged = false;
      localStorage.removeItem("token");
      this.$router.push("login");
    },
  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("login");
    } else {
      this.logged = true;
      this.$router.push("product-list");
    }
  },
}).$mount("#app");
