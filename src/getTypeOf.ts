const getTypeOf = (obj: string | number | boolean | null) => {
    return {}.toString
        .call(obj)
        .split(' ')[1]
        .slice(0, -1)
        .toLowerCase();
};

export default getTypeOf;
