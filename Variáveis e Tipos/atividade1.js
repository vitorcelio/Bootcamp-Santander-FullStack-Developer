function palindromo(palavra) {
    let normal = palavra.replaceAll(' ', '');
    let vice = normal.split('').reverse();
    let palavraReversa = '';
     
    for (let i = 0; i < vice.length; i++) {
        palavraReversa += vice[i];
    }

    if(normal === palavraReversa){
        console.log(`${normal} e ${palavraReversa} são iguais`);
        return true;
    } else {
        console.log(`${normal} e ${palavraReversa} não são iguais`);
        return false;
    }
}

console.log(palindromo('amor roma'));
