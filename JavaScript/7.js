let count = 0

function cc(card) {
    if (card <= 6) {
        count = count + 1;
    } else if (card <= 9) {
        count = count -1;
    } else {
        count = count - 1;
    }

    if (count <= 0) {
        return count + " Hold";
     } else {
        return count + " Bet";
        
    }
}; 

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

