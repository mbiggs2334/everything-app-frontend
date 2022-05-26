const getWindDirectionDegrees = (incDirection) => {
    const directions = [['N', -90], ['E', 0], ['S', 90], ['W', 180]];
    const cornerDir = [['NE', -45], ["NW", 225], ['SE', 45 ], ['SW', 135]];
    for(let [dir, deg] of cornerDir){
        if(incDirection.indexOf(dir) !== -1){
            return [dir, deg];
        };
    };
    for(let [dir, deg] of directions){
        if(incDirection.indexOf(dir) !== -1){
            return [dir, deg];
        };
    };
};

export default getWindDirectionDegrees;