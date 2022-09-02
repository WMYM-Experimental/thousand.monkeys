import { DNA } from "./DNA";
import { getRandInt, getChar } from "./utils";

class Population {
    target: string;
    treshold: number;
    mutationRate: number;
    population: DNA[];
    darwin: DNA[];
    generations: number;
    finished: boolean;
    perfectScore: number;
    best: string;
    bestFitness: number;
    worstFitness: number;
    avergeFitness: number;
    pupulationSize: number;

    constructor(
        target: string,
        mutationRate: number,
        populationSize: number,
        treshold: number
    ) {
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
        this.pupulationSize = populationSize;
        this.avergeFitness = 0;
        this.worstFitness = 0;

        for (let i = 0; i < this.treshold; i++) {
            this.population[i] = new DNA(this.target.length);
        }
    }

    public calcFitness(): void {
        this.population.forEach((dna) => {
            dna.calcFitness(this.target);
        });
    }

    public naturalSelection(): void {
        this.darwin = [];
        this.population.forEach((dna) => {
            const n = dna.getFitness() * 100;
            for (let i = 0; i < n; i++) {
                this.darwin.push(dna);
            }
        });
    }

    public generate(): void {
        this.population.forEach((dna, index) => {
            const parentA = this.darwin[getRandInt(0, this.darwin.length - 1)];
            const parentB = this.darwin[getRandInt(0, this.darwin.length - 1)];
            const child = parentA.crossover(parentB);
            child.mutate(this.mutationRate);
            this.population[index] = child;
        });
        this.generations++;
    }

    public getBest(): string {
        let worldRecord = 0;
        let index = 0;
        this.population.forEach((dna, i) => {
            if (dna.getFitness() > worldRecord) {
                index = i;
                worldRecord = dna.getFitness();
            }
        });
        if (worldRecord === this.perfectScore) {
            this.finished = true;
        }
        this.bestFitness = worldRecord;
        this.best = this.population[index].getGenes().join("");
        return this.best;
    }

    public getAverageFitness(): number {
        let total = 0;
        this.population.forEach((dna) => {
            total += dna.getFitness();
        });
        this.avergeFitness = total / this.population.length;
        return this.avergeFitness;
    }

    public getWorstFitness(): number {
        let worldRecord = 1;
        this.population.forEach((dna) => {
            if (dna.getFitness() < worldRecord) {
                worldRecord = dna.getFitness();
            }
        });
        this.worstFitness = worldRecord;
        return this.worstFitness;
    }

    public isFinished(): boolean {
        return this.finished;
    }

    public getGenerations(): number {
        return this.generations;
    }
}

export { Population };
