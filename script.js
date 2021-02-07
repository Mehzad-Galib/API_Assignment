const search = () => {
    const getMealName = document.getElementById('input-meal').value;
    document.getElementById('input-meal').innerText = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getMealName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => displayError('Invalid Food Name!! Please Reload and try again!'));
}

const displayError = error => {
    const errorTag = document.getElementById('error-message');
    errorTag.innerText = error;
}

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

const displayDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => renderFood(data))
}

const renderFood = data => {
    const specificMeal = data.meals[0];
    const foodSpecific = document.getElementById('food-ingredients');
    foodSpecific.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${specificMeal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="card-title text-center"><b>${specificMeal.strMeal}</b></h4>
      <h5 class="text-center"><strong> Ingredients </strong></h5>
      <ul>
      <li>${specificMeal.strIngredient1}</li>
      <li>${specificMeal.strIngredient2}</li>
      <li>${specificMeal.strIngredient3}</li>
      <li>${specificMeal.strIngredient4}</li>
      <li>${specificMeal.strIngredient5}</li>
      <li>${specificMeal.strIngredient6}</li>
      <li>${specificMeal.strIngredient7}</li>
      <li>${specificMeal.strIngredient8}</li>
      <li>${specificMeal.strIngredient9}</li>
      <li>${specificMeal.strIngredient10}</li>
  </ul>   
    </div>
  </div>
    `
}