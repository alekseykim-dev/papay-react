

// 📌  Kiritilgan ikkita sanani oraliq kunini chiqarib beradigan function tuzing
// - 2 ta argument kiritilsin
// - kiritilgan argumentlar oy/kun/yil (11/01/2021) ko’rinirishida kitirlsin
// misol: findDays(11/01/2023, 11/05/2023)  => 4



function findDays(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; //in ms
  const diff = new Date(date2) - new Date(date1); 
  const days = Math.floor(diff / oneDay); 
  return days;
}

console.log(findDays('11/01/2023', '11/05/2023')); 