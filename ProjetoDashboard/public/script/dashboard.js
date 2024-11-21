function modelMensagem(id, texto){
    try {
        let element = document.getElementById(id);
        return element.innerHTML = texto
    } catch (error) {
        console.error('Erro ao iniciar o modulo de mensagens: ', error)
    }
}

function modelKPI(){
    try {
        const dadosKPI = {
            vendasKPI: 200.00,
            numClientes: 112,
            cancelamentos: 10,
            ativacoes: 20,
        }

        modelMensagem('vendas', dadosKPI.vendasKPI)
        modelMensagem('numClientes', dadosKPI.numClientes)
        modelMensagem('ativacoes', dadosKPI.ativacoes)
        modelMensagem('cancelamento', dadosKPI.cancelamentos)
        modelMensagem('saldo', dadosKPI.ativacoes - dadosKPI.cancelamentos)
        
    } catch (error) {
        console.error('Erro ao instnaciar o modelo de KPI: ', error)
    }
}

modelKPI()
