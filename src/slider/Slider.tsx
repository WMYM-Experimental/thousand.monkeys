export const Slider = (props: any) => {
    return (
        <>
            <label>{props.name}</label>
            <input type={props.type} name={props.name} id={props.id} />
        </>
    );
};
