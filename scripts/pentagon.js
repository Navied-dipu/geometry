function calculatePentagonArea(){
const perimeter=getInputValueById('pentagon-p')
const apothem=getInputValueById('pentagon-b');
const area= 0.5 * perimeter * apothem;
setInnerTextById('pentagon-area', area)
}
function getInputValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const value=parseFloat(inputField.value);
    return value;
}
function setInnerTextById(elementId, area ){
    const element=document.getElementById(elementId);
    element.innerText=area;

}