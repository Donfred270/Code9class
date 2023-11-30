console.log("Byenvini jodia😊\nVini nou marye koule ansanm🎨");
//premye koule a
// chenn karaktè ekzadesimal yo
let k = "0123456789ABCDEF";
let l = "0123456789abcdef";
let koule1 = '';

// Yon varyab ki pou di wi/non tout karaktè yo ekzadesimal.
let karakteKoule_1_OK = true;

do {
    koule1 = prompt("Rantre premye koulè a.\nMen fok li gen 6 nan karaktè sa yo '0123456789ABCDEF'");// Mande koulè 1 an
   
// verifikasyon si li gen karaktè ekzadesimal sèlman
   for(let i = 0; i < koule1.length; i++) {
     // Si gen yon karaktè ki pa enkli nan chenn k
     if ( ! k.includes(koule1[i]) && ! l.includes(koule1[i]) ) {
       karakteKoule_1_OK = false;
       break;
     }
   }
} while (koule1.length !== 6 || karakteKoule_1_OK === false);

console.log(`Men koule ou chwazi a ${koule1}\nKlike sou ok pouw chwazi dezyem koule a atis la😊`);
//dezyem koulè a
let koule2 = '';

// Yon varyab ki pou di wi/non tout karaktè yo ekzadesimal.
let karakteKoule_2_OK = true;

do {
    koule2 = prompt("Rantre dezyem koulè a\nMen fok li gen 6 nan karaktè sa yo '0123456789ABCDEF'");
   // Mande koulè 1 an

   // verifikasyon si li gen karaktè ekzadesimal sèlman
   for(let i = 0; i < koule2.length; i++) {
     // Si gen yon karaktè ki pa enkli nan chenn k
     if ( ! k.includes(koule2[i]) && ! l.includes(koule2[i])) {
       karakteKoule_2_OK = false;
       break;
     }
   }
} while (koule2.length !== 6 || karakteKoule_2_OK === false);

console.log(`Men koule ou chwazi a ${koule2}\nKlike sou ok pouw ka we rezilta maryaj la.(epa bòlèt nn😂)`);
//alert(`Men koule ou chwazi a ${koule2}\nKlike sou ok pouw ka we rezilta maryaj la.(epa bòlèt nn😂)`);
// Rezilta maryaj la
let maryaj = ""

// 6 tou bouk pou chwa 6 karaktè aleyatwa
for (let i = 0; i<6; i++) {
  // Chwazi 0 oubyen 2 aleyatwa
  let chwa = Math.floor(Math.random() * 2);

  // si se 0, nap pran karaktè nan koule 1
  if(chwa === 0) {
    // Nou pran karaktè a, nan koule1 pito
    maryaj += koule1[i];
  } else {
    // Nou pran karaktè a, nan koule_2 pito
    maryaj += koule2[i];
  }
}

console.log(maryaj);
//alert(maryaj);