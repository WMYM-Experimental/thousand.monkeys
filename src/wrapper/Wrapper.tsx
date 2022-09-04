import { Slider } from "../slider/Slider";
import { Input } from "../input/Input";

export const Wrapper = () => {
    return (
        <>
            <Input name="Input" id="input-text" />
            <Slider name="Mutation" type="range" id="input-mutation" />
            <Slider name="Population" type="range" id="input-population" />
        </>
    );
};
