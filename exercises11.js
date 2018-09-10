function balikKata(str) {
    var word = '';
    for (var i = str.length - 1; i >= 0; i--) {
        word += str[i];
    }
    return word;
}
console.log(balikKata('Hello world and coders'));
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
    
 
  
