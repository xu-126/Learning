const cat1 = { name: '小美妞', age: 2, color: 'orange' };
const cat2 = { name: '大黑蛋', age: 2, color: 'black' };
const cat3 = { name: '小老虎', age: 2, color: 'orange' };

console.log('%c Cats -----', 'color: green;')
console.table({ cat1, cat2, cat3 });