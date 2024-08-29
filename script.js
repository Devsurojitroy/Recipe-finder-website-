document.getElementById('find-recipes').addEventListener('click', function() {
    const ingredientInput = document.getElementById('ingredient-input').value;
    const ingredients = ingredientInput.split(',').map(ingredient => ingredient.trim().toLowerCase());

    const recipes = [
        {
            name: "Tomato Soup",
            ingredients: ["tomato", "onion", "garlic"],
            instructions: "Sauté onions and garlic, add tomatoes, and simmer. Blend until smooth."
        },
        {
            name: "Chicken Salad",
            ingredients: ["chicken", "lettuce", "tomato", "cucumber"],
            instructions: "Grill chicken, chop vegetables, and mix with dressing."
        },
        {
            name: "Pasta Carbonara",
            ingredients: ["pasta", "egg", "bacon", "cheese"],
            instructions: "Cook pasta, mix eggs and cheese, add bacon, and combine with pasta."
        },
        {
            name: "Vegetable Stir-fry",
            ingredients: ["broccoli", "carrot", "bell pepper", "soy sauce"],
            instructions: "Stir-fry vegetables with soy sauce and serve with rice."
        },
        {
            name: "Beef Tacos",
            ingredients: ["ground beef", "taco seasoning", "tortillas", "lettuce", "cheese"],
            instructions: "Cook beef with seasoning, assemble tacos with toppings."
        }
    ];

    const results = recipes.filter(recipe =>
        ingredients.every(ingredient => recipe.ingredients.includes(ingredient))
    );

    displayRecipes(results);
});

function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';

    if (recipes.length === 0) {
        recipesContainer.innerHTML = '<p>No recipes found. Try different ingredients.</p>';
        return;
    }

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.className = 'recipe';
        recipeElement.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;
        recipesContainer.appendChild(recipeElement);
    });
}