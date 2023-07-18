function onlyUniques(...arrays) {
    let arrayUniques = new Set(arrays);
    return arrayUniques;
};

console.log(onlyUniques(1, 1, 2, "holis"));