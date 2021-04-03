/**
 * Please refactor the code below. It's written in PHP 
 * but you can easily guess what it's trying to do. 
 * Answer can be in Javascript as long as it's doing the same thing 
 * and resulting the same output
*/

function findFirstStringInBracket(chars){
    if(chars.length > 0){
       var matches = chars.match(/(\(.*?)\)/);

       if(matches){
           return matches[0]
       }else{
          return 'empty';
       }
    }else{
       return 'empty';
    }
}


console.log(findFirstStringInBracket(''))