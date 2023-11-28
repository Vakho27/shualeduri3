// davaleba 1
// const users = [
//     { name: "მარიამი", age: 25 },
//     { name: "გიორგი", age: 30 },
//     { name: "ნინო", age: 22 }
//   ];
  
//   const totalAge = users.reduce((acc, user) => acc + user.age, 0);
  
//   console.log(totalAge); 


// davaleba 2

// document.getElementById('myForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     console.log('სახელი:', document.getElementById('name').value);
//     console.log('ასაკი:', document.getElementById('age').value);
//     console.log('სქესი:', document.getElementById('gender').value);
//     console.log('გამომრიცხველ ფოსტაზე გამოწერის გეგმა:', document.getElementById('subscribe').checked);
//   });


// davaleba 3

function findLongestWord(array) {
    if (array.length === 0) {
      return "";
    }
  
    let maxLength = 0;
    let maxLengthIndex = -1;
  
    for (let i = 0; i < array.length; i++) {
      const currentWord = array[i];
      if (currentWord.length > maxLength) {
        maxLength = currentWord.length;
        maxLengthIndex = i;
      }
    }
  
    return maxLengthIndex !== -1 ? array[maxLengthIndex] : "";
  }
  
  const wordsArray = ["apple", "banana", "kiwi", "strawberry", "grapefruit"];
  const longestWord = findLongestWord(wordsArray);
  console.log("ყველაზე გრძელი სიტყვა:", longestWord);
  
  