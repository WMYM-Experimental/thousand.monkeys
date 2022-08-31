class DNA {
    constructor(size) {
        this.genes = [];
        this.fitness = 0;
        for (let i = 0; i < size; i++) {
            this.genes[i] = String.fromCharCode(floor(random(32, 128)));
        }
    }

    calcFitness(target) {
        let fit = 0;
        for (let i = 0; i < this.genes.length; i++) {
            if (this.genes[i] === target[i]) {
                fit++;
            }
        }
        this.fitness = fit / target.length;
    }
}

export default DNA;
