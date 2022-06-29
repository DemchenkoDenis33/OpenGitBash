// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

function isPalindrom(word) {
  word = word.toLowerCase()
for(let i=0, j=word.length-1; i<word.length, j>=0; i++, j--) {
  if(word[i] !== word[j]) {
    return false
  }
}
return true
}
 console.log(isPalindrom('Abba') , isPalindrom('abba'))





