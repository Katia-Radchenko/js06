const itemsRef = document.querySelectorAll('ul#categories>li.item');
 console.log(`Number of categories : ${itemsRef.length} `);




itemsRef.forEach(item => {
     
    console.log(`Categories : ${item.querySelector('h2').textContent}`);
    console.log  ( `Elements : ${item.querySelectorAll('li').length}`);
 
});
