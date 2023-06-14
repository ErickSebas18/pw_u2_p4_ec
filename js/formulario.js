const app = Vue.createApp({
    data() {
        return {
            fNombre: false,
            fApellido: false,
            fCiudad: false,
            fGenero: false,
            nombre: "",
            apellido: "",
            ciudad: "",
            genero: "",
            myList: [],
        };
    },

    methods:{
        addPersona(){
            if(this.nombre && this.apellido && this.ciudad && this.genero){
                this.myList.push({
                    nombre: this.nombre,
                    apellido: this.apellido,
                    ciudad: this.ciudad,
                    genero: this.genero
                });

                this.nombre = "";
                this.apellido = "";
                this.ciudad = "";
                this.genero = "";


                this.fNombre = false;
                this.fApellido = false;
                this.fCiudad = false;
                this.fGenero = false;
            } else {
                this.fNombre = !this.nombre ? true : false;
                this.fApellido = !this.apellido ? true : false;
                this.fCiudad = !this.ciudad ? true : false;
                this.fGenero = !this.nombre ? true : false;
            }
        },
    },
});

app.mount("#app")