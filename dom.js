// document.getElementById('fruits').style.backgroundColor="red"
// document.getElementsByClassName('car-class').style.fontSize='40px'
const sections = document.querySelectorAll('section');
// console.log(sections);

for (const section of sections) {
    section.style.border = '2px solid red'
    section.style.padding = '5px'
    section.style.margin = '10px'
}