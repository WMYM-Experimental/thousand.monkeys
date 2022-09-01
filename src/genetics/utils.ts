const getRandInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getChar = (min: number, max: number) => {
    return String.fromCharCode(getRandInt(min, max));
};

export { getRandInt, getChar };
