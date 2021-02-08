// searching for a food

const search = () => {
    const getMealName = document.getElementById('input-meal').value;
    document.getElementById('input-meal').value = '';
    document.getElementById('error-message').innerHTML = '';
    document.getElementById('food-ingredients').innerHTML = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getMealName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => displayError('Invalid Food Name!! Please write a proper food name and try again!'));
}

// if the food name is not found

const displayError = error => {
    const errorTag = document.getElementById('error-message');
    errorTag.innerText = error;
    document.getElementById('food-ingredients').innerHTML = '';
}

// Searching for the food name 

const displayData = data => {
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerText = '';
    const meal = data.meals;
    meal.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'row row-cols-2 row-cols-md-3 g-4';
        foodDiv.innerHTML = `       
                    <div class="card h-100 m-4 w-25">                      
                        <button onclick="displayDetails('${food.strMeal}')"><img src="${food.strMealThumb}" class="card-img-top" alt="..."></buttons>
                        <div class="card-body">
                            <h5 class="card-title">${food.strMeal}</h5>
                        </div>
                    </div>                                        
        `;
        foodContainer.appendChild(foodDiv);
    });
}

// fetching specific food name when clicked

const displayDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => renderFood(data))
}

// Showing the food name and ingredients at the top of the webpage

const renderFood = data => {
    const specificMeal = data.meals[0];
    const foodSpecific = document.getElementById('food-ingredients');
    foodSpecific.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${specificMeal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="card-title"><b>${specificMeal.strMeal}</b></h4>
      <h5><strong> Ingredients </strong></h5>
      <ul>
      <li>${specificMeal.strMeasure1} ${specificMeal.strIngredient1}</li>
      <li>${specificMeal.strMeasure2} ${specificMeal.strIngredient2}</li>
      <li>${specificMeal.strMeasure3} ${specificMeal.strIngredient3}</li>
      <li>${specificMeal.strMeasure4} ${specificMeal.strIngredient4}</li>
      <li>${specificMeal.strMeasure5} ${specificMeal.strIngredient5}</li>
      <li>${specificMeal.strMeasure6} ${specificMeal.strIngredient6}</li>
      <li>${specificMeal.strMeasure7} ${specificMeal.strIngredient7}</li>
      <li>${specificMeal.strMeasure8} ${specificMeal.strIngredient8}</li>
      <li>${specificMeal.strMeasure9} ${specificMeal.strIngredient9}</li>
      <li>${specificMeal.strMeasure10} ${specificMeal.strIngredient10}</li>
  </ul>   
    </div>
  </div>
    `
}