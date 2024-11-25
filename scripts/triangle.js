function calculateTriangleArea(){
    // base
const triangleBaseInput=document.getElementById('triangle-base')
const base=parseFloat(triangleBaseInput.value)
// console.log(base);
// height
const triangleHeightInput=document.getElementById('triangle-hight')
const height=parseFloat(triangleHeightInput.value);
// console.log(height);

// calculate area
const area=0.5 * base * height;
// console.log(area);
// display area
const inputArea=document.getElementById('triangle-area')
inputArea.innerText=area;
}