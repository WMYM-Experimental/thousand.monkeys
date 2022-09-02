import { Slider } from "./Silder";

export const Wrapper = () => {
    return (
        <>
            <div className="wrapper__inputs">
                <div className="wrapper__inputs--input-text">
                    <label htmlFor="Input">Input</label>
                    <input type="text" name="text" id="text" />
                    <input type="button" value="Try" />
                </div>
                <Slider type="range" name="mutation" idName="population" />
                <Slider type="range" name="population" idName="population" />
            </div>
        </>
    );
};
