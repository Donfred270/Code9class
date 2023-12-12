// Deklarasyon alfabe a pou le let yo ap deplase
let alfabe = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Fonksyon kap pemet let yo deplase
function chanjePlas(sekansLan) {
  const tabloSekans = sekansLan.split(' ');

  let moA = '';
  for (let i = 0; i < tabloSekans.length; i++) {
    const grennSekans = tabloSekans[i];
    const direction = grennSekans[0];
    //konbyen let lap sote
    const letSote = parseInt(grennSekans.slice(1, -1), 10);
    const startingChar = grennSekans[grennSekans.length - 1];
    
    
//nan ki bò lp deplase
    let bòA;
    // fè adwat
    if (direction === '>') {
      bòA = (alfabe.indexOf(startingChar) + letSote) % alfabe.length;
    } else if (direction === '<') {//fè a gauche
      bòA = (alfabe.indexOf(startingChar) - letSote + alfabe.length) % alfabe.length;
    }

    moA += alfabe[bòA];
  }

  return moA;
}

// ann teste fonksyon an
const sekansAnMo = "<1T >7H >3C <5Y >13J <2C <5W >4A";
const mo= chanjePlas(sekansAnMo);
console.log(`Men mo a : ${mo}`);
