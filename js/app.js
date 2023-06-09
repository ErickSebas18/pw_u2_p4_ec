console.log("Componente Vue");
console.log(Vue);

const app = Vue.createApp({
  //Opcion API
  //opcion1,
  //opcion2,
  //opcion3

  /*template: `
    <h1>HOLA MUNDO </h1>
    <p> Desde Vue.js </p>`*/

  /*opcion del optionAPI que me permite declarar propiedades reactivas*/
  /*me permiten vincular información de la vista con mi programación javascript*/
  data() {
    return {
      nombre: "Erick",
      apellido: "Chávez",
      mensaje: "Hola Mundo 2 desde VUE.JS",
    };
  },

  methods: {
    cambiarNombre() {
      console.log("Boton Cambiar Nombre");
      this.nombre = "Sebastián"
    },

    cambiarApellido() {
      console.log("Boton Cambiar Nombre");
      this.apellido = "García"
    },
  },
});

app.mount("#app");
