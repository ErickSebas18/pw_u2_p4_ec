const arreglo = [
  {
    nombre: "Erick",
    apellido: "Chávez",
  },
  {
    nombre: "Erick2",
    apellido: "Chávez2",
  },
  {
    nombre: "Cristian",
    apellido: "Arboleda",
  },
  {
    nombre: "Andrés",
    apellido: "Benavides",
  },
  {
    nombre: "Christian",
    apellido: "Moya",
  },
  {
    nombre: "Kevin",
    apellido: "Topanta",
  },
  {
    nombre: "Alexander",
    apellido: "Condor",
  },
  {
    nombre: "Ismael",
    apellido: "Xhindon",
  },
  {
    nombre: "Juan",
    apellido: "Jumbo",
  },
  {
    nombre: "Lenin",
    apellido: "Guananga",
  },
];

console.log(arreglo);

const app = Vue.createApp({
  data() {
    return {
      miArreglo: arreglo,
      nombre: "Erick",
    };
  },
  methods: {
    agregarEstudiante(event) {
      console.log("Vamos agregar");
      console.log(this.nombre);
      console.log(event.charCode);
      if (event.charCode == "13") {
        console.log("presionó Enter");
        const nuevoEstudiante = {
          nombre: this.nombre,
        };
        // Agregar al final
        this.miArreglo.push(nuevoEstudiante);
      } else {
        console.log("No es Enter");
      }
    },

    agregarEstudiante2() {
      console.log("Vamos agregar");
      console.log("presionó Enter");
        const nuevoEstudiante = {
          nombre: this.nombre,
        };
        this.miArreglo.push(nuevoEstudiante);
    },
  },
});

app.mount("#app2");
