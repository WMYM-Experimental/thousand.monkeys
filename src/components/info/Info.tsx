import "./Info.css";

export const Info = () => {
    return (
        <>
            <div className="wrapper__info glass">
                <div className="info__header glass">
                    <h1 className="info_title">Thousand Monkeys Algo</h1>
                    <h2 id="best">The best Phrase</h2>
                </div>

                <div className="info__properties glass">
                    <p className="info__text">
                        Total-genrations:
                        <span id="total-genrations"> 0 </span>
                    </p>
                    <p className="info__text">
                        Average-fitness:
                        <span id="average-fitness"> 0 </span>
                    </p>
                    <p className="info__text">
                        Population:
                        <span id="population"> 0 </span>
                    </p>
                    <p className="info__text">
                        Mutation-rate:
                        <span id="mutation-rate"> 0 </span>
                    </p>
                </div>
            </div>
        </>
    );
};
