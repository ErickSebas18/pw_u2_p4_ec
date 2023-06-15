const calcu = Vue.createApp({
  data() {
    return {
      operacion: "",
      num1: 0,
      num2: 0,
      idResultado: "",
    };
  },

  methods: {
    numero(valor) {
      if (this.operacion != "") {
        this.num1 += parseInt(valor);
        this.idResultado = this.num1;
      } else {
        this.num2 += parseInt(valor);
        this.idResultado = this.num2;
      }
    },

    inicializar() {
      this.operacion = "";
      this.num1 = 0;
      this.num2 = 0;
    },

    guardarOperacion(simbolo) {
      this.operacion = simbolo;
    },

    resultado() {
      switch (this.operacion) {
        case "+": {
          this.idResultado = this.num1 + this.num2;
          inicializar();
          break;
        }

        case "-": {
          this.idResultado = this.num2 - this.num1;
          inicializar();
          break;
        }

        case "x": {
          this.idResultado = this.num1 * this.num2;
          inicializar();
          break;
        }

        case "/": {
          this.idResultado = this.num1 / this.num2;
          inicializar();
          break;
        }
      }
    },
  },
});
calcu.mount("#calcu");
