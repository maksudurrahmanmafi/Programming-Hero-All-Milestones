const tags = document.getElementsByTagName('li')

for(const tag of tags){
    // console.log(tag.innerText)
}
// console.log(tag)

const elementId = document.getElementById('num-1')

elementId.style.color='red'
elementId.style.fontSize = '2rem'
elementId.style.listStyle ='none'

//QuerySelector and QuerySelectorAll

// querySelector works only first element

const query = document.querySelector('#paragraph span')
console.log(query);

// works on all elemnt

/* 
const qSelectorAll = document.querySelectorAll('#paragraph span')
console.log(qSelectorAll);
for (const q of qSelectorAll) {
    console.log(q)
} */
