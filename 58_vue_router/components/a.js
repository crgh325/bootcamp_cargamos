Vue.component("a-component", {
  methods: {
    GoToB: function () {
      this.$router.push("/b");
    },
  },
  template: `
        <div>
            <p> Hola soy el componente A </p>
            <button v-on:click="GoToB">Ir a B</button>
        </div>    
  `,
});
