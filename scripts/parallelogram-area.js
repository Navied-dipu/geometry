function calculateParallelogramArea(){
    const calculateBase=document.getElementById('parallelogram-base')
    const base=parseFloat(calculateBase.value)

    const calculateHeight=document.getElementById('parallelogram-height');
    const height=parseFloat(calculateHeight.value)

    const area=base * height

    const areaCalculate=document.getElementById('parallelogram-area')
    areaCalculate.innerText=area;
}