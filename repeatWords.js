const repeatedWords = (text) => {

    const splitArray = text.split('')



    const cleanedArray = splitArray.map(word => (word == '?') ? ' ' : word)

    const separatedByWord = cleanedArray.join('').split(' ').map(word => (word.toLowerCase())).filter(word => word != '')

    let wordsCount = separatedByWord.map(word => word = 0)

    const objectedArray = Object.assign({}, separatedByWord)



    for (let i = 0; i < separatedByWord.length; i++) {


        // if (separatedByWord[i] != objectedArray[i]) {

        //     break
        // }


        for (let j = i + 1; j < separatedByWord.length; j++) {





            if (separatedByWord[i] == separatedByWord[j]) {

                wordsCount[j] += 1
                wordsCount[i] += 1




            }


        }

    }






    const showWordsCount = {}



    wordsCount.forEach((item, index) => {


        showWordsCount[objectedArray[index]] = item

    })

    console.log(showWordsCount)






}


repeatedWords('Hi  how are things? How are you?Are  you a developer? I am also a developer')