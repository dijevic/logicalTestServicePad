const serieFibonacci = (number) => {

    const serie = [0, 1]

    for (let i = 2; i <= number; i++) {
        const newFibNumber = serie[i - 1] + serie[i - 2]

        serie.push(newFibNumber)

    }

    console.log(serie[number])

}

serieFibonacci(4)







