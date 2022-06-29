// 3**.  Написать функцию, которая принимает на вход слово. 
//       Задача функции посчитать и вывести в консоль, сколько в слове гласных,
//       и сколько согласных букв.

// e.g. function getWordStructure(word)
// В консоли: 

// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word) {
    const vowels = 'aeiouy'.split('');
    const consonants = 'bcdfqhjklmnpqrstwxz'.split('');

  let vowelsCount = 0;
  let consonantsCount = 0;

  for(const char of word.toLowerCase()) {
    if(vowels.includes(char)) vowelsCount++
    else if(consonants.includes(char)) consonantsCount++
  }
console.log(`В слове ${word} : ${vowelsCount} гласных и ${consonantsCount} согласных букв`)
  
}

getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')