export const Slider = (type: string, name: string, idName: string) => {
    return (
        <>
            <label htmlFor={idName}>{type}</label>
            <input type={type} name={name} id={idName} />
        </>
    );
};
