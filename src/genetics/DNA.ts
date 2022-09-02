import { getChar, getRandInt } from "./utils";

class DNA {
    private genes: string[];
    public fitness: number;

    constructor(size: number) {
        this.genes = [];
        this.fitness = 0;
        for (let i = 0; i < size; i++) {
            this.genes[i] = getChar(32, 128);
        }
    }

    //getters & setters
    public getGenes(): string[] {
        return this.genes;
    }

    public getGene(index: number): string {
        return this.genes[index];
    }

    public setGene(index: number, gene: string): void {
        this.genes[index] = gene;
    }

    public getFitness(): number {
        return this.fitness;
    }

    // calc methods
    public calcFitness(target: string): void {
        let fitness = 0;
        for (let i = 0; i < this.genes.length; i++) {
            if (this.genes[i] === target[i]) {
                fitness++;
            }
        }
        this.fitness = fitness / this.genes.length;
    }

    public crossover(partner: DNA): DNA {
        const child = new DNA(this.genes.length);
        const middle = getRandInt(0, this.genes.length);
        for (let i = 0; i < this.genes.length; i++) {
            if (i > middle) {
                child.setGene(i, this.genes[i]);
            } else {
                child.setGene(i, partner.getGene(i));
            }
        }
        return child;
    }

    public mutate(mutationRate: number): void {
        for (let i = 0; i < this.genes.length; i++) {
            if (getRandInt(0, 1) < mutationRate) {
                this.genes[i] = getChar(32, 128);
            }
        }
    }

    public toString(): string {
        return this.genes.join("");
    }
}

export { DNA };
