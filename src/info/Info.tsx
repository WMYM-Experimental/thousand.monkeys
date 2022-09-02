export const Info = () => {
    return (
        <>
            <h2>The best Phrase</h2>
            <h1 className="wrapper__show--title">Thousand Monkeys Algo</h1>
            <div className="wrapper__show--propierties">
                <p className="total-genrations">
                    total-genrations:
                    <span id="total-genrations">0</span>
                </p>
                <p className="average-fitness">
                    average-fitness:
                    <span id="average-fitness">0</span>
                </p>
                <p className="population">
                    population:
                    <span id="population">0</span>
                </p>
                <p className="mutation-rate">
                    mutation-rate:
                    <span id="mutation-rate">0</span>
                </p>
            </div>
        </>
    );
};
