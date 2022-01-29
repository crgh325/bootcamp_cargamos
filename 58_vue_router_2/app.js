const router = new VueRouter({
  routes: [
    { path: "/home", component: "home" },
    { path: "/contact", component: "contact" },
    { path: "/quienes-somos", component: "who" },
  ],
});

var app = new Vue({
  router,
}).$mount("#app");
