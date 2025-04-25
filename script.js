const meals = {
    vegetarian: {
        breakfast: [
            "Vegetable Omelette",
            "Avocado Toast",
            "Smoothie Bowl",
            "Chia Pudding"
        ],
        lunch: [
            "Chickpea Salad",
            "Vegetable Stir Fry",
            "Caprese Sandwich",
            "Quinoa Bowl"
        ],
        dinner: [
            "Vegetable Curry",
            "Mushroom Risotto",
            "Stuffed Zucchini",
            "Vegetable Tacos"
        ]
    },
    vegan: {
        breakfast: [
            "Smoothie Bowl",
            "Overnight Oats",
            "Chia Pudding",
            "Fruit Salad"
        ],
        lunch: [
            "Quinoa Salad",
            "Vegan Tacos",
            "Chickpea Salad",
            "Lentil Soup"
        ],
        dinner: [
            "Vegan Stir Fry",
            "Chickpea Curry",
            "Zucchini Noodles with Pesto",
            "Vegan Pizza"
        ]
    },
    glutenFree: {
        breakfast: [
            "Greek Yogurt with Berries",
            "Oatmeal with Nuts",
            "Smoothie Bowl",
            "Fruit Salad"
        ],
        lunch: [
            "Grilled Chicken Salad",
            "Quinoa Bowl",
            "Zucchini Noodles",
            "Stuffed Sweet Potatoes"
        ],
        dinner: [
            "Baked Salmon with Asparagus",
            "Stuffed Peppers",
            "Zucchini Lasagna",
            "Grilled Chicken with Vegetables"
        ]
    },
    proteinDiet: {
        breakfast: [
            "Egg White Omelette",
            "Greek Yogurt with Nuts",
            "Protein Smoothie",
            "Cottage Cheese with Berries"
        ],
        lunch: [
            "Grilled Chicken Salad",
            "Tuna Salad",
            "Quinoa and Black Bean Bowl",
            "Turkey Wrap"
        ],
        dinner: [
            "Grilled Salmon with Broccoli",
            "Beef Stir Fry with Vegetables",
            "Chicken Breast with Quinoa",
            "Pork Chops with Asparagus"
        ]
    },
    carbDiet: {
        breakfast: [
            "Oatmeal with Fruits",
            "Whole Grain Toast with Avocado",
            "Pancakes with Maple Syrup",
            "Fruit Smoothie"
        ],
        lunch: [
            "Pasta Salad with Vegetables",
            "Rice Bowl with Chicken",
            "Quinoa Salad with Chickpeas",
            "Vegetable Stir Fry with Rice"
        ],
        dinner: [
            "Spaghetti with Marinara Sauce",
            "Rice and Beans",
            "Vegetable Fried Rice",
            "Pasta Primavera"
        ]
    },
    lowCarb: {
        breakfast: [
            "Scrambled Eggs with Spinach",
            "Greek Yogurt with Berries",
            "Chia Seed Pudding",
            "Cottage Cheese with Nuts"
        ],
        lunch: [
            "Grilled Chicken Salad with Avocado",
            "Zucchini Noodles with Pesto",
            "Cauliflower Rice Stir Fry",
            "Egg Salad Lettuce Wraps"
        ],
        dinner: [
            "Grilled Salmon with Asparagus",
            "Beef Stir Fry with Broccoli",
            "Chicken Thighs with Vegetables",
            "Pork Chops with Cauliflower Mash"
        ]
    },
    keto: {
        breakfast: [
            "Eggs and Avocado",
            "Keto Pancakes",
            "Chia Seed Pudding with Almond Milk",
            "Smoothie with Spinach and Protein Powder"
        ],
        lunch: [
            "Cauliflower Rice Stir Fry",
            "Zucchini Noodles with Meat Sauce",
            "Chicken Salad with Avocado",
            "Tuna Salad Lettuce Wraps"
        ],
        dinner: [
            "Grilled Steak with Broccoli",
            "Baked Salmon with Spinach",
            "Chicken Alfredo with Zoodles",
            "Pork Chops with Cauliflower Rice"
        ]
    },
    paleo: {
        breakfast: [
            "Scrambled Eggs with Spinach",
            "Smoothie with Almond Milk",
            "Fruit Salad",
            "Chia Seed Pudding"
        ],
        lunch: [
            "Grilled Chicken Salad",
            "Zucchini Noodles with Pesto",
            "Stuffed Bell Peppers",
            "Paleo Wraps with Lettuce"
        ],
        dinner: [
            "Grilled Salmon with Quinoa and Veggies",
            "Beef Stir Fry with Broccoli",
            "Chicken Thighs with Vegetables",
            "Zucchini Lasagna"
        ]
    },
    mediterranean: {
        breakfast: [
            "Greek Yogurt with Honey and Nuts",
            "Avocado Toast with Feta",
            "Mediterranean Omelette",
            "Chia Seed Pudding with Berries"
        ],
        lunch: [
            "Greek Salad with Grilled Chicken",
            "Falafel Wrap with Tzatziki",
            "Quinoa Tabbouleh Salad",
            "Mediterranean Grain Bowl"
        ],
        dinner: [
            "Grilled Salmon with Quinoa and Veggies",
            "Chicken Souvlaki with Tzatziki",
            "Pasta with Pesto and Cherry Tomatoes",
            "Stuffed Peppers with Rice and Herbs"
        ]
    },
    none: {
        breakfast: [
            "Please enter a dietary preference to generate a meal plan."
        ],
        lunch: [
            "Please enter a dietary preference to generate a meal plan."
        ],
        dinner: [
            "Please enter a dietary preference to generate a meal plan."
        ]
    }
};

document.getElementById('generate').addEventListener('click', function() {
    const diet = document.getElementById('diet').value;
    const mealPlanDiv = document.getElementById('meal-plan');
    mealPlanDiv.innerHTML = ''; 

    if (diet === "none") {
        mealPlanDiv.innerHTML = "<p>Please enter a dietary preference to generate a meal plan.</p>";
        return;
    }

    const selectedMeals = meals[diet];
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    daysOfWeek.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.innerHTML = `<h3>${day}</h3>`;

        const mealTypes = ['breakfast', 'lunch', 'dinner'];
        mealTypes.forEach(mealType => {
            const meal = document.createElement('div');
            meal.className = 'meal';
            const mealOptions = selectedMeals[mealType];
            const randomMeal = mealOptions[Math.floor(Math.random() * mealOptions.length)];
            meal.textContent = `${mealType.charAt(0).toUpperCase() + mealType.slice(1)}: ${randomMeal}`;
            dayDiv.appendChild(meal);
        });

        mealPlanDiv.appendChild(dayDiv);
    });
});