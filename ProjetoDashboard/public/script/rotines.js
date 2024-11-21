function reiniciarPagina(){
    try {
        let reflesh = location.reload();
        return reflesh
    } catch (error) {
        console.error('Erro ao instanciar o modelo de reiniciação da pagina: ', error)
    }
}