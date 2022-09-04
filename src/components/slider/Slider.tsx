export const Slider = (props: any) => {
    return (
        <>
            <div className="slider">
                <label>{props.name}</label>
                <input type={props.type} name={props.name} id={props.id} />
            </div>
        </>
    );
};
