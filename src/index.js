module.exports = function reverse (n) {
    str = String(n)
    razbivaem_massiv = str.split("");
  
    Perevorachivaem_massiv = razbivaem_massiv.reverse();
    Obedinaem_massiv = Perevorachivaem_massiv.join("");
   return parseInt(Obedinaem_massiv) 
}
console.log(module.exports(123));