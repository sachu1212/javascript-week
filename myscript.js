
Array = [1, "2", 3, 4, "5", "6"]
let total = 0;
for (let v of Array){
total += parseInt(v)
total = total + parseInt(v);
}
console.log(total);