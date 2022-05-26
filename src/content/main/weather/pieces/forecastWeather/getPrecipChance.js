const getPrecipChance = (x, y) => {
    return Math.round((x+y) / 2);
};

export default getPrecipChance;