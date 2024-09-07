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
        
        let recintosViaveis = [];
    
        this.recintos.forEach (recinto => {
            
            //Verifica seo bioma é compativel com o bioma e faz uma verificação para o recinto savana e rio
            const biomaValido = animalHabilitado.bioma.includes(recinto.bioma) || 
                (recinto.bioma === "savana e rio" && animalHabilitado.bioma.includes("savana") || animalHabilitado.bioma.includes("rio"));
    
            if (!biomaValido) return;


            //verifica se o recinto tem animal, caso sim verifica se o animal selecionado é carnivoro e n coloca
            const recintoComAnimais = recinto.animaisExistentes.length > 0;

            if (animalHabilitado.carnivoro && recintoComAnimais) {
                const existeOutroAnimal = recinto.animaisExistentes.some(ani => ani.tipo !== animal);
                if (existeOutroAnimal) return; 
            }
    
            //verifica se o recinto tem carnivororo, caso sim verifica se é da mesma especie
            const recintoContemCarnivoro = recinto.animaisExistentes.some(ani => {
                let infoAnimal = this.animaisHabilitados.find(a => a.tipo === ani.tipo);
                return infoAnimal.carnivoro;
            });

            if (recintoContemCarnivoro && !animalHabilitado.carnivoro) return; 
    
    
        
            let espacoOcupado = recinto.animaisExistentes.reduce((total, ani) => {
                let infoAnimal = this.animaisHabilitados.find(a => a.tipo === ani.tipo);
                return total + (infoAnimal.tamanho * ani.quantidade);
            }, 0);
    
            const espacoNecessario = animalHabilitado.tamanho * quantidade;
            const espacoDisponivel = recinto.tamanhoTotal - espacoOcupado;
            const espacoLivreApos = recinto.tamanhoTotal - (espacoOcupado + espacoNecessario) ;

            if (espacoDisponivel < espacoNecessario) return;

            recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoLivreApos} total: ${recinto.tamanhoTotal})`);
            
            console.log('Espaço livre:', espacoLivreApos); 

    /*fecha foreach*/});
            if (recintosViaveis.length > 0) {
                return { recintosViaveis };
            } else {
                return { erro: "Não há recinto viável" };
            }
/*fecha classe*/}} 
    

const zoo = new RecintosZoo();
const resultado = zoo.analisaRecintos("MACACO", 10);
console.log(resultado);


export { RecintosZoo as RecintosZoo };



