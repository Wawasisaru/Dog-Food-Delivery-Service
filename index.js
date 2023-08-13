

// Add your JavaScript code here
const zipCodeInput = document.getElementById("zip-code-input");
const checkZipCodeButton = document.getElementById("check-zip-code");
const allergensSection = document.getElementById("allergens-section");

checkZipCodeButton.addEventListener("click", () => {
  const enteredZipCode = zipCodeInput.value;
  const deliverableZipCodes = ["10001", "10002", "10003"]; // Example deliverable zip codes

  if (deliverableZipCodes.includes(enteredZipCode)) {
    allergensSection.style.display = "block";
  } else {
    // Reset inputs and hide allergens section
    zipCodeInput.value = "";
    allergensSection.style.display = "none";
  }
});
// Add your JavaScript code here
const continueAllergensButton = document.getElementById("continue-allergens");
const mealsSection = document.getElementById("meals-section");
const mealsList = document.getElementById("meals-list");
const proceedToCartButton = document.getElementById("proceed-to-cart");

// Sample meal data (replace with your data)
const mealsData = [
  { name: "Turkey and egg bowl", description: "Sautéed organic Turkey, scrambled egg on a bed of rice and root vegetables", allergens: ["Eggs"], price: 200, imageSrc: "https://res.cloudinary.com/dogmqg8to/image/upload/c_scale,w_188/v1675474759/Hakika%20Ecommerce/food_lnnkiz.jpg" },
  { name: "Berry and egg oatmeal", description: "Organic oats, scrambled egg with blackberries on top", allergens: ["Eggs"] },
  { name: "Tofu with organic quinoa and root vegetables", allergens: ["Soy"] },
  { name: "Salmon with organic rice", allergens: [] },
  { name: "Chicken with organic carrots", allergens: [] }
];

// Function to display meals without selected allergens
function displayNonAllergenMeals(selectedAllergens) {
  mealsList.innerHTML = ""; // Clear existing list

  const nonAllergenMeals = mealsData.filter(meal => !meal.allergens.some(allergen => selectedAllergens.includes(allergen)));

  nonAllergenMeals.forEach(meal => {
    const mealItem = document.createElement("li");
    mealItem.textContent = `${meal.name} - ${meal.description}`;
    mealsList.appendChild(mealItem);
  });

  mealsSection.style.display = "block";
}


// Function to display meals without selected allergens
function displayNonAllergenMeals(selectedAllergens) {
  mealsList.innerHTML = ""; // Clear existing list

  const nonAllergenMeals = mealsData.filter(meal => !meal.allergens.some(allergen => selectedAllergens.includes(allergen)));

  nonAllergenMeals.forEach(meal => {
    const mealItem = document.createElement("li");
    mealItem.textContent = `${meal.name} - ${meal.description}`;
    mealsList.appendChild(mealItem);
  });

  mealsSection.style.display = "block";
}




const allergenCheckboxes = document.querySelectorAll('.allergen-checkbox');
const mealsContainer = document.getElementById('meals-container');
const noAllergensCheckbox = document.getElementById('no-allergens-checkbox');



continueAllergensButton.addEventListener('click', () => {
  const selectedAllergens = Array.from(allergenCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  const includeNoAllergens = noAllergensCheckbox.checked;

  const filteredMeals = mealsData.filter(meal => {
    if (includeNoAllergens && meal.allergens.length === 0) {
      return true;
    }
    return !selectedAllergens.some(allergen => meal.allergens.includes(allergen));
  });

  displayFilteredMeals(filteredMeals);
});

function displayFilteredMeals(filteredMeals) {
  // Clear existing meals
  mealsContainer.innerHTML = '';

  if (filteredMeals.length === 0) {
    const noResultsElement = document.createElement('div');
    noResultsElement.textContent = 'No products match the selected criteria.';
    mealsContainer.appendChild(noResultsElement);
  } else {
    // Display filtered meals
    filteredMeals.forEach(meal => {
      const mealContainer = document.createElement('div');
      mealContainer.classList.add('meal');

      const mealImage = document.createElement('img');
      mealImage.src = meal.imageSrc; // Replace with the actual image source
      mealImage.alt = meal.name;
      mealContainer.appendChild(mealImage);

      const mealInfo = document.createElement('div');
      mealInfo.classList.add('meal-info');

      const mealName = document.createElement('h3');
      mealName.textContent = meal.name;
      mealInfo.appendChild(mealName);

      const mealDescription = document.createElement('p');
      mealDescription.textContent = meal.description;
      mealInfo.appendChild(mealDescription);

      const mealPrice = document.createElement('p')
      mealPrice.textContent = meal.price;
      mealInfo.appendChild(mealPrice)

      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');

      const addButton = document.createElement('button');
      addButton.textContent = 'Add to Cart';
      buttonContainer.appendChild(addButton);
      mealContainer.appendChild(buttonContainer);

      mealContainer.appendChild(mealInfo);

      mealsContainer.appendChild(mealContainer);
    });
  }
}

