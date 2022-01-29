Vue.component("b-component", {
  methods: {
    GoToA: function () {
      this.$router.push("/a");
    },
  },
  template: `
        <div>
            <p> Hola soy el componente B </p>
            <button v-on:click="GoToB">Ir a A</button>
        </div>    
  `,
});
