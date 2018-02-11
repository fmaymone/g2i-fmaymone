export default {
    mudarTexto(texto) {
        console.log("Emtrei no mudar texto")
        console.log(texto)
         return {
              type: 'MUDAR_TEXTO',
              payload: texto
         }
    }
}