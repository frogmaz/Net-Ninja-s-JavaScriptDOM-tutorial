const listContainer = document.querySelector('#listContainer');

console.log('the parent node is:', listContainer.parentNode);
console.log('the parent element is:', listContainer.parentElement);
//every element is a node, but not every node is an element
console.log('the parent\'s parent element is:', listContainer.parentElement.parentElement);

console.log('Children nodes:', listContainer.childNodes);
// text here is a line break
// so in order to grab just the elements (not nodes) do it like this:
console.log('Children elements:', listContainer.children);
// but this way you get  HTML Collection instead of Node list (so you have to convert it to Array if you want to use Array functions)
