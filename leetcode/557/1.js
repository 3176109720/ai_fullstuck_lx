
var reverseWords = function(s) {
return s.split(/\s+/).map((item)=>(item.split('').reverse().join(''))).join(' ');
};