const search = () => {
    const getMealName = document.getElementById('input-meal').value;
    getMealName.innerText = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getMealName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data))
}

const displayData = data => {
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerText = '';
    const meal = data.meals;
    meal.forEach(food => {
        //'row row-cols-1 row-cols-md-3 g-4'
        const foodDiv = document.createElement('div');
        foodDiv.className = 'row row-cols-1 row-cols-md-3 g-4';
        foodDiv.innerHTML = `
        <div>
                    <div class="card h-100 float-left">
                        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${food.strMeal}</h5>
                        </div>
                    </div>
                </div>               
        `
        foodContainer.appendChild(foodDiv);

    });

}