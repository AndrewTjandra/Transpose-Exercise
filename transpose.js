//change each word into an array
//find which array is largest -- because each word can be a different length
//iterate through and if undefined is found, add a space in it's place
//use console.log to write each line

function transposeTwoStrings(stringArray){
  var resultStr = '';
  var firstWordArray = stringArray[0].split('');
  var secondWordArray = stringArray[1].split('');
  var maxLength = firstWordArray.length > secondWordArray.length ? firstWordArray.length : secondWordArray.length;

  for(var i = 0; i < maxLength; i++){
    var firstChar = firstWordArray[i];
    var secondChar = secondWordArray[i];

    if(firstChar === undefined){
      firstChar = ' ';
    }

    if(secondChar === undefined){
      secondChar = ' ';
    }

    resultStr += firstChar + ' ' + secondChar;

    if(i + 1 !== maxLength){
      resultStr += '\n';
    }
  }
  return resultStr;
}

function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed [' + testName + ']');
  } else {
    console.log('failed [' + testName + '] expected: ' + expected + ', but actual: ' + actual);
  }
}

function testTransposeTwoStringsFunction(){
  var actual = transposeTwoStrings(['Hello','Worlds']);
  var expected = 'H W\ne o\nl r\nl l\no d\n  s';
  assertEqual(actual, expected, 'two strings is transposed vertically');
}

testTransposeTwoStringsFunction();
