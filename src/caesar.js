// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    result=""
    
    if (shift===undefined || shift===0 || shift > 25 || shift < -25) {return false 
    } else if (encode=== false) {shift= 0 -shift}
    
    let lookup= "abcdefghijklmnopqrstuvwxyz"
  
    for (let i=0; i<input.length; i++){
    let lowInput= input[i].toLowerCase()
    
    if (lookup.includes(lowInput)) {
     let shifted= lookup.indexOf(lowInput) + shift
      
     if(shifted > 25){
        shifted=shifted - 26
      } else if ( shifted < 0) { 
        shifted = shifted + 26
      }
     
      result+= lookup.charAt(shifted)
      } else {result+=lowInput}
}
return result
  

}
 
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
