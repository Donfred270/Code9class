
alert("Byenvini nan Jwèt Lawoulè a! 😊 Nan jwèt sa, ou dwe chwazi yon nimewo ant 1 ak 10 pou'w genyen🏅.\nSi ou dakò jwe, klike sou OK✅.\nSi ou pa dakò, ou ka fèmen paj la.❌\nBòn chans!🎉\n NB: ou gen 5 chans");
//deklarasyon varyab chans lan kap pemet nou konte kantite chans jwè a rete
let chans = 5;
//let nonbOdinate = Math.floor(Math.random() * 10) + 1; //m te anvi deklare varyab sa deyo boucle la on fason pul pa chanje a chaj iterasyon, le konsa omwen jwè ap gen chans genyen, epi m panse li te ka 10 olye de 500

while (chans > 0) {
    let nonbOdinate = Math.floor(Math.random() * 500) + 1; // deklarasyon varyab nonbOdinate kap stoke nonb odinate a ap genere avek fonksyon math.floor la
    let nonbChwazi = parseInt(prompt("Chwazi nimewo ke ou panse òdinatè a chwazi a😂")); 
/*deklarasyon varyab nonbChwazi kap stoke nonb itilizate a antre a e m itilize parInt pou konvetil an varyab de type number
paske menm le vale ki antre a se on chif, depil pase nan prompt lan lap konvetil en string*/
    if (nonbOdinate < nonbChwazi) { //kondisyon if pou le jwè a antre on nom ki twò gran
         alert(`Woyy ou k*k*😂😂😂, ou rantre on nonb ki twò gran.\nmen ou rete ${chans - 1} chans⭐, ou ka re eseye wi.\nklike sou ok🙂`);
      // console.log(`Woyy ou k*k*😂😂😂, ou rantre on nonb ki twò gran.\nmen ou rete ${chans - 1} chans⭐, ou ka re eseye wi.\nklike sou ok🙂`);
    } 
    else if (nonbOdinate > nonbChwazi ){//kondisyon if pou le jwè a antre on nom ki twò piti
        alert(`Ou twò chich😂😂😂, ou rantre on nonb ki twò piti.\nmen ou rete ${chans - 1} chans⭐, ou ka re eseye wi.\nklike sou ok🙂`);
      //  console.log(`Ou twò chich😂😂😂, ou rantre on nonb ki twò piti.\nmen ou rete ${chans - 1} chans⭐, ou ka re eseye wi.\nklike sou ok🙂`);
    }
    else if(isNaN(nonbChwazi)) {
        alert(`non, ou sipoze rantre on nonb. sa pa anpeche ou rete ${chans - 1} chans⭐, ou ka re eseye wi.\nklike sou ok🙂`)
    }else{
         alert("byen jweee🎉🎉, ou genyen wi😂.\nFelisitasyon🙌");//sa se mesaj m voye bay jwè a pou lel genyen jwèt la
       // console.log("byen jweee🎉🎉, ou genyen wi😂.\nFelisitasyon🙌");//sa se mesaj m voye bay jwè a pou lel genyen jwèt la
        break;
    }
    

    chans--;

    if ( chans === 0 && nonbOdinate !== nonbChwazi) { //sa se mesaj m voye bay jwè a pou fel konnen ke li pedi nan jwet la
        alert(`Woyy ou pedi❌, chans ou fini😔.\nMen ti bgy ou pat ka jwenn lan wi "${nonbOdinate}"\nMen ou ka rafrechi paj la wi siw vle rekomanse😊`);
       // console.log(`Woyy ou pedi❌, chans ou fini😔.\nMen ti bgy ou pat ka jwenn lan wi "${nonbOdinate}"\nMen ou ka rafrechi paj la wi siw vle rekomanse😊`);

    }
}