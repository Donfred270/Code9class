//deklarasyon varyab kipral konstitye modpas lan
const makachmin = `QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopasdfghjklzxcvbnm"!@#$%^&*_-+={}[]()|\:;'<>,.?/0123456789`;
const majisMinis = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopasdfghjklzxcvbnm";
const majisMinischif = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789";
const majisminiskarak = `QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopasdfghjklzxcvbnm!@#$%^&*_-+={}[]()|\:;'<>,.?/"`;

//karakteristik modpas la
let longeModpas = 16, genLetMajiskil = true, genLetMiniskil = false, genKarakteSpesyal = true, genChif = true;

function modpas(longe, letMajiskil, letMiniskil, karakteespesyal, akchif){
    let modpass = "";
    if(longe<8){
        return "motpas ou a dwe gen minimòm 8 karaktè";
    }else if(longe >= 8 && letMajiskil === true && letMiniskil === true && karakteespesyal === true && akchif ===true){
        for(let i = 0; i < longeModpas; i++){
            let letindex = Math.floor(Math.random() * makachmin.length);
            modpass += makachmin[letindex];
        }
        return modpass;

    }else if(letMajiskil !== true || letMiniskil !== true){
            return "Fòk modpas ou a gen let majiskil ak miniskil";

    }else if(longe >= 8 && letMajiskil === true && letMiniskil === true && karakteespesyal !== true && akchif !==true){
        for(let i = 0; i < longeModpas; i++){
            let letindex = Math.floor(Math.random() * majisMinis.length);
            modpass += majisMinis[letindex];
        }
        return modpass;
    }else if(longe >= 8 && letMajiskil === true && letMiniskil === true && karakteespesyal !== true && akchif ===true){
        for(let i = 0; i < longeModpas; i++){
            let letindex = Math.floor(Math.random() * majisMinischif.length);
            modpass += majisMinischif[letindex];
        }
        return modpass;
    }else if(longe >= 8 && letMajiskil === true && letMiniskil === true && karakteespesyal === true && akchif !==true){
        for(let i = 0; i < longeModpas; i++){
            let letindex = Math.floor(Math.random() * majisminiskarak.length);
            modpass += majisminiskarak[letindex];
        }
        return modpass;
    }

}
console.log(modpas(8, true, true, false, true));
