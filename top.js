let string = "battle la se pou jodi a";
function retireEspace(a){
    teksSansEspace = a.split(' ').join('');
    return `Men teks la san espas : " ${teksSansEspace} "`;
}
console.log(retireEspace(string));
