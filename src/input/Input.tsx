export const Input = (props: any) => {
    return (
        <>
            <label>{props.name}</label>
            <input type="text" name="text" id={props.id} />
            <input type="button" value="Try" />
        </>
    );
};
