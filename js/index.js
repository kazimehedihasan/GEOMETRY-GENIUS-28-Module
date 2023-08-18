function kazi (){
// get triangle base value
const baseField = document.getElementById('triangle-base');
const baseValuText = baseField.value;
const base = parseFloat(baseValuText);
// console.log(base);

// get triangle height value

const heightField = document.getElementById('triangle-height');
const heightValueText = heightField.value;
const height = parseFloat(heightValueText);
// console.log(height);

const area = 0.5 * base * height;
// show tringle area
const areaSpan = document.getElementById('triangle-area');
areaSpan.innerText = area;
}


// rectangle 
function mehedi(){
   const rectangle = document.getElementById('rectangle-base');
   const rectangleText = rectangle.value;
   const rectangleBase = parseFloat(rectangleText);
//    console.log(rectangleBase);

   const I = document.getElementById('rectangle-height');
   const iValue = I.value;
   const iText = parseFloat(iValue);
//    console.log(iText);

//    calculate area
const area = rectangleBase * iText;
const mehediHasan = document.getElementById('rectangle-area');
mehediHasan.innerText  = area;

}

// parallelogramAria
function parallelogramAria(){
 const base = getInputValue('parallelogram-base');
//  console.log(base);

 const height = getInputValue('parallelogram-height');
//  console.log(height);

 const area = base * height;
 const kuka = document.getElementById('parallelogram-area');
 kuka.innerText = area;
}

// reusable get input value field in number
function getInputValue(kuk){
    const input = document.getElementById(kuk);
    const inpute = input.value;
    const valuee = parseFloat(inpute);
    return valuee;
}