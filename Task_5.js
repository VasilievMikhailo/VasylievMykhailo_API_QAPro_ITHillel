function pow(x, y) {
    let resault = 1; 

    for (let i = 0; i < y; i++) {
        resault = resault * x;
        // resault *= x;
    }

    return resault;
}

console.log("Resault =", pow(3, 4));
console.log("Resault =",pow(2, 4));
console.log("Resault =", pow(9, 2));