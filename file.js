let weight = document.querySelector('[data-weight]').value
let height = document.querySelector('[data-height]').value
let btn = document.querySelector('[data-btn]')

btn.addEventListener('click', function(){
    let weight = document.querySelector ('[data-weight]').value;
    let height = document.querySelector('[data-height]').value;
     BMI(weight,height);
    })
        function BMI(weight,height) {
            let results= weight/(height*height)
            console.log(results);
            document.querySelector('[data-results]').value = results.toFixed(2)
        }