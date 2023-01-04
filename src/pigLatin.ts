export function pigIt(str: string) : string {
  /**
   * If string is not empty 
   * Split into words (ingnoring punctuation)
   * For each word, put the first character at the end
   * Append "ay" to the end of the word 
   * concatenate the words with a " "
   * return the concatenated word
   * */  
    const suffix = "ay";
    const splitToken = ' ';
    let words:string[] = [];
    const notWordRegex = /\W+/;
    if (str.length > 0){
        words = str.split(splitToken);
        console.log(words);
        return words.map(word => notWordRegex.test(word) ? word : word.slice(1)+word.charAt(0)+suffix).join(" ");
    }
    return "";

}


export const pigIt2 = (a : string) : string =>  {
  /**
    * If string is not empty 
    * Split into words (ingnoring punctuation)
    * For each word, put the first character at the end
    * Append "ay" to the end of the word 
    * concatenate the words with a " "
    * return the concatenated word
    * */  
     const suffix = "ay";
     const splitToken = ' ';
     const punctuationRegex = /[:!'",\.? -]+$/
     let words:string[] = [];
     console.log("ip:" +a);
     if (a.length > 0){
         words = a.split(splitToken);
         let result= words.map(word => punctuationRegex.test(word) || word === '' ? word : (word.slice(1)||"") + word.charAt(0) +suffix ).join(" ");
         console.log("op:" +result);
         return result;
     }
     
     return "";
 
 }