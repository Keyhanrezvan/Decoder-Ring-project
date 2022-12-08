// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
  if (!alphabet || alphabet.length !== 26) return false
  for (let j=0; j<alphabet.length;j++){
    if (alphabet.split(alphabet[j]).length > 2) return false
  }
  let lookup="abcdefghijklmnopqrstuvwxyz"
  let result=""
  if (encode){
  for (let i=0; i< input.length;i++){
    let lookIndex=lookup.indexOf(input.charAt(i))
    result+= alphabet.charAt(lookIndex)
    if (input[i]===" "){
      result+=input[i]
    }
  }
  } else if (encode===false){
    for (let i=0; i < input.length; i++){
      let alphaIndex=alphabet.indexOf(input.charAt(i))
      result+= lookup.charAt(alphaIndex)
    if (input[i]===" "){
      result+= input[i]
    }
    }
  }
  return result
}
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
