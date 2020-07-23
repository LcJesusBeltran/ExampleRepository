const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: ['Manzana','pera','otro'],
        objetos: [
            {nombre:'pera',cantidad:10},
            {nombre:'manzana',cantidad:0},
            {nombre:'platano',cantidad:20}
        ],
        nuevaFruta: '',
        nuevacantidad: 0,
        total:0
    },
    methods:{
        agregarFruta: function(){
            console.log('diste click');
        },
        agregafrutas(){
            this.objetos.push({
                nombre: this.nuevaFruta, 
                cantidad: this.nuevacantidad
            })
            this.nuevaFruta = '';
            this.nuevacantidad = 0;
        }
    },
    computed:{
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.objetos)
            {
                this.total += fruta.cantidad;
            }
            // try
            return this.total;
        }
    }
})
