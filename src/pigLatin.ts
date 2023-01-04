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
    if (str.length > 0){
        words = str.split(splitToken);
        console.log(words);
        return words.map(word => ).join(" ");
    }
    return "";

}