function kaprekarNumbers(p, q) {
    // Write your code here


    let array = [];


    //find all numbers between the range of p and q and add them to an array 
    for (let range = p; range <= q; range++) {
        array.push(range)
    }


    //get square numbers of that array 
    let squared = array.map(num => num * num);


    //create a second array to store the square roots of the square numbers that are equal to the two parts of the split square number (int1 + int2). The split and conversion from string and back to int is done in the for loop below, looping through the 'squared' array


    let array2 = [];


    for (let i = 0; i < squared.length; i++) {


        let str = squared[i].toString();
        let max = str.length;
        let str1 = str.slice(0, max / 2);
        let str2 = str.slice(max / 2, max);
        let int1 = parseInt(str1);
        let int2 = parseInt(str2);


        if (Math.sqrt(squared[i]) == (int1 + int2) || Math.sqrt(squared[i]) == squared[0]) {
            array2.push(Math.sqrt(squared[i]))
        }




    }


    if (array2.length == 0) {
        console.log('INVALID RANGE')
    }


    else {
        console.log(array2.join(' '))
    }


}
