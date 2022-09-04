// import info css file
import './Info.css';

export const Info = () => {
    return (
        <>
            <div className="wrapper__info">
                <div className="info__header">
                    <h1 className="info_title">Thousand Monkeys Algo</h1>
                    <h2 id="best">The best Phrase</h2>
                </div>

                <div className="info__properties">
                    <p className="info__text">
                        total-genrations:
                        <span id="total-genrations">0</span>
                    </p>
                    <p className="info__text">
                        average-fitness:
                        <span id="average-fitness">0</span>
                    </p>
                    <p className="info__text">
                        population:
                        <span id="population">0</span>
                    </p>
                    <p className="info__text">
                        mutation-rate:
                        <span id="mutation-rate">0</span>
                    </p>
                </div>
            </div>
        </>
    );
};
