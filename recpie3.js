// fetch(`https:www.themealdb.com/api/json/v1/1/categories.php`)
// .then(open => open.json())
// .then(data)



document.getElementById("button").addEventListener('click',()=>{
    let inputValue = document.getElementById('inputName').value
    // console.log(inputValue)
    fetch(`https:www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(response => response.json())
    .then(data => {
        // console.log(data.meals)
        const items = document.getElementById("items")
        items.innerHTML = ""
        if(data.meals == null){
            // console.log("NO meals")
            document.getElementById("msg").style.display= "block"
        }else{
            document.getElementById("msg").style.display= "none"
            data.meals.forEach(meal =>{
                // console.log(meal)
                itemDiv = document.createElement("div")
                itemDiv.className = "m-2 singleItem"
                itemDiv.setAttribute('onclick', `details(${meal.idMeal})`)
                const itemInfo = `
                <div class="card" style="width: 10rem;">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body text-center">
                <h5 class="card-text">${meal.strMeal}</h5>
                
            </div>
        </div>
        `
        // <h5 class="card-title"></h5>
        // <a href="#" class="btn btn-primary"></a>
                    itemDiv.innerHTML = itemInfo
                    items.appendChild(itemDiv)
            })
        }
    })
});

function details(id){
    console.log(id)
    fetch(`https:www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(detail => {
    let meal = detail.meals[0]
    console.log(meal)
    let details  = document.getElementById("details")
    // detailsDiv.innerHTML = ""
    let detailsDiv = document.createElement("div")
    let detailsInfo = `
      <div class="card" style="width: 10rem;">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body ">
                <h3 class="card-text">${meal.strMeal}</h3>
                <h6>Ingredients</h6>
                <ul>
                    <li>${meal.strArea}</li>
                    <li>${meal.strCatagory}</li>
                    <li>${meal.strIngredient1}</li>
                    <li>${meal.strIngredient2}</li>
                    <li>${meal.strIngredient3}</li>
                    <li>${meal.strIngredient4}</li>
                    <li>${meal.strIngredient5}</li> 
                </ul>
            </div>
        </div>
    `
    detailsDiv.innerHTML = detailsInfo
    // detailsInfo.appendChild(detailsDiv)
    })
    

}