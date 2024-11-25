function calculateRectangleArea(){
    // width
const recWidth=document.getElementById('rectangle-width')
const width=parseFloat(recWidth.value)

// length
const recLength=document.getElementById('rectangle-length')
const length=parseFloat(recLength.value)

// area calculate
const area= width * length ;
// show calculate

const areaCalculate=document.getElementById('rec-area');
areaCalculate.innerText=area;

}