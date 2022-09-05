import { Slider } from "../slider/Slider";
import { Input } from "../input/Input";
import "./Wrapper.css";

export const Wrapper = () => {
    return (
        <>
            <div className="wrapper glass">
                <Input name="Input" id="input-text" />
                <Slider name="Mutation" type="range" id="input-mutation" />
                <Slider name="Population" type="range" id="input-population" />
            </div>
        </>
    );
};
