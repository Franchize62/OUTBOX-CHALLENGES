function findLongestWord(sen) {
    var senSplit = sen.split(' ');
    var longestWord = 0;
    for(var i = 0; i < senSplit.length; i++){
      if(senSplit[i].length > longestWord){
      longestWord = senSplit[i].length;
       }
    }
    return longestWord;
  }
  findLongestWord("How was your day");