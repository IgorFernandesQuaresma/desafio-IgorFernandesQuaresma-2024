class RecintosZoo {

    constructor() {
    
        this.animaisHabilitados = [
            {tipo: "LEAO", tamanho: 3, bioma: ["savana"], carnivoro: true },
            {tipo: "LEOPARDO", tamanho: 2, bioma: ["savana"], carnivoro: true },
            {tipo: "CROCODILO", tamanho: 3, bioma: ["rio"], carnivoro: true },
            {tipo: "MACACO", tamanho: 1, bioma: ["savana", "floresta"], carnivoro: false },
            {tipo: "GAZELA", tamanho: 2, bioma: ["savana"], carnivoro: false },
            {tipo: "HIPOPOTAMO", tamanho: 4, bioma: ["savana", "rio"], carnivoro: false }
        ];

        
        this.recintos = [
            { numero: 1, bioma: "savana", tamanhoTotal: 10, animaisExistentes: [{ tipo: "MACACO", quantidade: 3 }] },
            { numero: 2, bioma: "floresta", tamanhoTotal: 5, animaisExistentes: [] },  
            { numero: 3, bioma: "savana e rio", tamanhoTotal: 7, animaisExistentes: [{ tipo: "GAZELA", quantidade: 1 }] },
            { numero: 4, bioma: "rio", tamanhoTotal: 8, animaisExistentes: [] },  
            { numero: 5, bioma: "savana", tamanhoTotal: 9, animaisExistentes: [{ tipo: "LEAO", quantidade: 1 }] }
        ];
    }

    analisaRecintos(animal, quantidade) {
        const animalHabilitado = this.animaisHabilitados.find(ani => ani.tipo === animal);
        if (!animalHabilitado) {
            return { erro: "Animal inválido", recintosViaveis: null };
        }

        if (quantidade <= 0) {
            return { erro: "Quantidade inválida", recintosViaveis: null };
        }
        

    } 
        

}



export { RecintosZoo as RecintosZoo };
