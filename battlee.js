function calculDistans(longe, lajè, kantiteMoun) {

    let totalLajè = lajè * kantiteMoun;

  
    let totalDistans = (longe + totalLajè) * kantiteMoun;

    return totalDistans;
}


let longeKay = 10;
let lajèKay = 20;
let kantiteMoun = 2;

let distansAntMoun = calculDistans(longeKay, lajèKay, kantiteMoun);
console.log("Total distance lan se: " + distansAntMoun + " santimèt");
