const names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!",
    ];

    
    function golfScore(par, strokes) {
        let resultado = 0;

        if (strokes==1) {
            resultado = 0;
        } else if (strokes<= par - 2) {
            resultado = 1;
        } else if (strokes== par - 1) {
            resultado = 2;
        } else if (strokes== par) {
            resultado = 3;
        } else if (strokes== par + 1) {
            resultado = 4;
        } else if (strokes== par + 2) {
            resultado = 5;
        } else if (strokes == par + 3) {
            resultado = 6;
        }

        return names[resultado];

        }; 

          