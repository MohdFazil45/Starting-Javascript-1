const form = document.querySelector('form')
//this usecase will give you empty case
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit',(e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight =  parseInt(document.querySelector('#weight').value)
    const result =  document.querySelector('#results')

    if (height == "" || height <0 || isNaN(height)) {
        result.innerHTML = "Please valid height"
    }
    else if (weight == "" || weight <0 || isNaN(weight)) {
        result.innerHTML = "Please valid weight"
    }
    else {
       const bmi =  ( weight / (( height*height ) / 10000)).toFixed(2)
       //show the results
       result.innerHTML = `<span>${bmi }</span>` 
    }
    
})
form.addEventListener('submit',(e) =>{
    e.preventDefault()
    const bmi =  ( weight / (( height*height ) / 10000)).toFixed(2)
    const result =  document.querySelector('#results')

    if (bmi < 18.6) {
        result.innerHTML += " Underweight"
    }
    else if ( 18.6< bmi < 24.9) {
        result.innerHTML += " Normalweight"
    }
    else {
        result.innerHTML += " Overweight"
    }
})