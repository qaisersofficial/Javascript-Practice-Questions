 const itemList = document.getElementById("itemList");
 const addItemBtn = document.getElementById("addItemBtn");

 let itemCounter = 1;

 addItemBtn.addEventListener("click", function () { 
    itemCounter++;
    const newItem = document.createElement('li');
    newItem.textContent = 'Item ' + itemCounter;
    itemList.appendChild(newItem);
  })