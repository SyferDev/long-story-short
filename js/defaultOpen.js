var items = document.getElementsByName("defaultOpen");

console.log(items);

for (let i = 0; i < items.length; i++) {
   items[i].click();
}
