window.onload = function(){
    "use strict";

    function testFunction(expected, function2test) {

        if (expected === function2test()) {
            return "TEST SUCCESS";
        } else {
            return "TEST FAILED EXPECTED VALUE IS " + expected + " FOUND " + function2test();
        }
    }
    function testFunctionforArray(expected,function2test) {
        if(arayEquality(expected,function2test())){
            return "TEST SUCCESS";
        }else {
            return "TEST FAILED EXPECTED VALUE IS " + expected + " FOUND " + function2test();
        }
    }

    function arayEquality(array1, array2){
        if(array1.length !== array2) return false;
        else{
            array1.forEach(a1 => array2.forEach(a2 => {
                if(a1 !== a2) return false;
            }));
            return false;
        }
    }
    // this function uses reduce and lambda expiration to sum all values in the array
    function sum(values) {
        return values.reduce((total,value) => total + value,0);
    }
    // reverse the string using reduce and split the string into array and reverse it using reduce method
    function reverse(str){
        return [...str].reduce((rev, char)=> char + rev, '');
    }

    // filter the array if the value have a length of more that the provided one
    function filterLongerWords(words,length){
        return words.filter(value => value.length > length);
    }


    console.log("Expected out put of sum([1,2,3,4,5]) is 15 " + testFunction(15,
        function () {
            return sum([1, 2, 3, 4, 5]);
        }));

    console.log("Expected out put of reverse('reverse this') is siht esrever " + testFunction("siht esrever",
        function () {
            return reverse("reverse this");
        }));

    console.log("Expected out put of filterLongerWords(['this','is','a','test','words'],3) is ['this','test','words'] " + testFunctionforArray(['this', 'test', 'words'],
        function () {
            return filterLongerWords(['this', 'is', 'a', 'test', 'words'], 3);
        }));
};