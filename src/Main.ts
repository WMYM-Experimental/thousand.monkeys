import { Population } from "./genetics/Population";

const main = () => {
    const target = "@WashingtonYandun";
    const mutationRate = 0.01;
    const populationSize = 100;
    const treshold = 0.95;

    const population = new Population(
        target,
        mutationRate,
        populationSize,
        treshold
    );

    while (!population.finished) {
        population.naturalSelection();
        population.generate();
        population.calcFitness();
        population.evaluate();
        console.log(population.best);
    }
};

export { main };
