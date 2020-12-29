// ! Reverse string on native JS. Nice fix.
function reverse(string) {
  let newStr = '',
    i;
  for (i = string.length - 1; i >= 0; i--) {
    newStr += string.charAt(i);
  }
  return newStr;
}

alert(reverse('Ivan'));
