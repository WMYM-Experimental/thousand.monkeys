class Population {
    constructor(target, treshold, mutationRate) {
        this.target = target;
        this.treshold = treshold;
        this.mutationRate = mutationRate;

        this.population = [];
        this.darwin = [];

        this.generations = 0;
        this.finished = false;
        this.perfectScore = 1;
        this.best = "";

        this.bestFitness = 0;
        this.averageFitness = 0;
        this.populationSize = 0;
        this.worstFitness = 0;

        for (let i = 0; i < this.treshold; i++) {
            this.population[i] = new DNA(this.target.length);
        }
    }

    calcFitness() {
        this.population.forEach((individual) => {
            individual.calcFitness(this.target);
        });
    }

    naturalSelection() {
        this.darwin = [];
        this.population.forEach((individual) => {
            let n = individual.fitness * 100;
            for (let i = 0; i < n; i++) {
                this.darwin.push(individual);
            }
        });
    }

    createPopulation() {}

    evaluate() {}
}

export default Population;
