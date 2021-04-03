let words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

function anagrams(words){
    let objAnagrams = {};
    let arrAnagrams = []

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        // sort a word by alphabetical, i.e kita -> aikt
        let sorted = sortString(word);

        // check whether the value is exist or not by the key of object
        // if exist then push to the same group
        // else create a new key
        if (objAnagrams[sorted] != null) {
            objAnagrams[sorted].push(word);
        } else {
            objAnagrams[sorted] = [ word ];
        }
    }

    // to return as expected outputs
    for(let i in objAnagrams){
        arrAnagrams.push(objAnagrams[i])
    }

    return arrAnagrams
}

function sortString(str){
    let arr = str.split('');
    let tmp;

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    
    return arr.join('');
}

console.log(anagrams(words));