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

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc("K"));
console.log(cc("A"));

