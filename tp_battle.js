let chenDeKarakte = prompt("Antre on chèn de karaktè\nEx: Manman'm al nan mache.");

//Exo 1 - karaktè yoo an miniskil
let miniskil = chenDeKarakte.toLocaleLowerCase();
alert(`Men men chèn de karaktè sa an miniskil\n"${miniskil}"`);

// Exo 2 - chèn karaktè a anko san espas epi moyo nan on tablo
let tabloMoYo = chenDeKarakte.split(" ");
 alert(`lis mo yo san espas\n["${tabloMoYo}"]`);

// Exo 3 - tout premye lèt chak mo an majiskil.
let PremyeLetMajiskil = chenDeKarakte.split(' ').map(mot => mot.charAt(0).toUpperCase() + mot.slice(1)).join(' ');
alert(`Men fraz la ak tout premye let mo yo an majiskil:\n${PremyeLetMajiskil}`);

// Exo 4 - tout premye lèt chak mo an majiskil.
let chènAkInisyal = chenDeKarakte.split(' ').map(mot => mot.charAt(0).toUpperCase()).join('');

alert(`Men mo ki fome ak inisyal chank mo ${chènAkInisyal}`);

// Exo 5 - ranplase  tout karaktè "a" ki nan yon chenn pa "@"
    let karaktèRanplase = chenDeKarakte.replace(/a/g, "@");
alert(`Men menm chèn de karaktè sa a avek @ yo.\n${karaktèRanplase}`);

// Exo 6 - pou mete chèn de karaktè a devan deye
let chènDeKaraktèDevanDeye = chenDeKarakte.split('').reverse().join('');

alert(chènDeKaraktèDevanDeye);

//exo 7 - kote premye a ye nan on chèn de karaktè
let premyeA = chenDeKarakte.indexOf('a');

alert(`Premye A a plase nan index ${premyeA}`);

//Exo 8 - cheche tout a ki nan yo chen de karakte epi fe adisyon ak yo
let chacheAyo = 'A';
let totalplasAyo = 0;

for (let i = 0; i < chenDeKarakte.length; i++) {
  if (chenDeKarakte.charAt(i).toLowerCase() === chacheAyo.toLowerCase()) {
    totalplasAyo += i;
  }
}

alert(`Men total plas A yo ${totalplasAyo}`);