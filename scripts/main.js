/*
-- Utils --
*/
const getRandInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getChar = (min, max) => {
    return String.fromCharCode(getRandInt(min, max));
};

/*
-- DNA --
*/

class DNA {
    constructor(size) {
        this.genes = Array.from({ length: size }, () => getChar(32, 128));
        this.fitness = 0;
    }

    // Getters & Setters
    getGenes() {
        return this.genes;
    }

    getGene(index) {
        return this.genes[index];
    }

    setGene(index, gene) {
        this.genes[index] = gene;
    }

    getFitness() {
        return this.fitness;
    }

    // Calculation methods
    calcFitness(target) {
        let fitness = 0;
        for (let i = 0; i < this.genes.length; i++) {
            if (this.genes[i] === target[i]) {
                fitness++;
            }
        }
        this.fitness = fitness / this.genes.length;
    }

    crossover(partner) {
        const child = new DNA(this.genes.length);
        const middle = getRandInt(0, this.genes.length - 1);
        for (let i = 0; i < this.genes.length; i++) {
            child.setGene(i, i > middle ? this.genes[i] : partner.getGene(i));
        }
        return child;
    }

    mutate(mutationRate) {
        for (let i = 0; i < this.genes.length; i++) {
            if (Math.random() < mutationRate) {
                this.genes[i] = getChar(32, 128);
            }
        }
    }

    toString() {
        return this.genes.join("");
    }
}

/*
-- Population --
*/

class Population {
    constructor(target, mutationRate, populationSize, threshold) {
        this.target = target;
        this.threshold = threshold;
        this.mutationRate = mutationRate;

        this.population = Array.from({ length: populationSize }, () => new DNA(target.length));
        this.darwin = [];

        this.generations = 0;
        this.finished = false;
        this.perfectScore = 1;
        this.best = "";

        this.bestFitness = 0;
        this.averageFitness = 0;
        this.worstFitness = 1;

        this.calculateFitness();
    }

    calculateFitness() {
        this.population.forEach((dna) => {
            dna.calcFitness(this.target);
        });
    }

    naturalSelection() {
        this.darwin = [];
        this.population.forEach((dna) => {
            const n = Math.floor(dna.getFitness() * 100);
            this.darwin.push(...Array.from({ length: n }, () => dna));
        });
    }

    generate() {
        this.population = this.population.map(() => {
            const parentA = this.getRandomDNA();
            const parentB = this.getRandomDNA();
            const child = parentA.crossover(parentB);
            child.mutate(this.mutationRate);
            return child;
        });

        this.generations++;
    }

    getRandomDNA() {
        return this.darwin[getRandInt(0, this.darwin.length - 1)];
    }

    getBest() {
        let worldRecord = 0;
        let index = 0;

        this.population.forEach((dna, i) => {
            const fitness = dna.getFitness();
            if (fitness > worldRecord) {
                worldRecord = fitness;
                index = i;
            }
        });

        if (worldRecord === this.perfectScore) {
            this.finished = true;
        }

        this.bestFitness = worldRecord;
        this.best = this.population[index].getGenes().join("");
        return this.best;
    }

    getAverageFitness() {
        const total = this.population.reduce((sum, dna) => sum + dna.getFitness(), 0);
        this.averageFitness = total / this.population.length;
        return this.averageFitness;
    }

    getWorstFitness() {
        let worldRecord = 1;

        this.population.forEach((dna) => {
            const fitness = dna.getFitness();
            if (fitness < worldRecord) {
                worldRecord = fitness;
            }
        });

        this.worstFitness = worldRecord;
        return this.worstFitness;
    }

    evaluate() {
        let worldRecord = 0;
        let index = 0;

        this.population.forEach((dna, i) => {
            const fitness = dna.getFitness();
            if (fitness > worldRecord) {
                worldRecord = fitness;
                index = i;
            }
        });

        if (worldRecord === this.perfectScore) {
            this.finished = true;
        }

        this.bestFitness = worldRecord;
        this.best = this.population[index].getGenes().join("");
    }
}


// Cadena objetivo que se desea encontrar
const target = "Washington Yandun";

// Parámetros de configuración del algoritmo genético
const mutationRate = 0.01; // Tasa de mutación
const populationSize = 200; // Tamaño de la población
const threshold = 1; // Umbral de puntaje perfecto

// Crear una nueva población
const population = new Population(target, mutationRate, populationSize, threshold);

// Ejecutar el algoritmo hasta encontrar la cadena objetivo o alcanzar un número máximo de generaciones
while (!population.finished) {
    // Calcular el puntaje de aptitud de cada individuo en la población
    population.calculateFitness();

    // Seleccionar los individuos más aptos para la reproducción
    population.naturalSelection();

    // Generar una nueva generación a partir de la reproducción y mutación de los individuos seleccionados
    population.generate();

    // Calcular el puntaje de aptitud después de generar una nueva generación
    population.calculateFitness();

    // Obtener y mostrar información sobre la generación actual
    const generation = population.generations;
    const bestFitness = population.bestFitness;
    const averageFitness = population.getAverageFitness();
    const worstFitness = population.getWorstFitness();
    const bestPhrase = population.getBest();

    console.log(`Generation: ${generation}`);
    console.log(`Best Fitness: ${bestFitness}`);
    console.log(`Average Fitness: ${averageFitness}`);
    console.log(`Worst Fitness: ${worstFitness}`);
    console.log(`Best Phrase: ${bestPhrase}`);
    console.log("------------------------");

    // Evaluar si se ha encontrado la cadena objetivo
    if (bestPhrase === target) {
        population.finished = true; // Establecer la propiedad "finished" en true
    }
}


// El algoritmo ha finalizado y se ha encontrado la cadena objetivo
console.log("Algorithm finished!");
console.log(`Target phrase found: ${population.best}`);
console.log(`Total generations: ${population.generations}`);
