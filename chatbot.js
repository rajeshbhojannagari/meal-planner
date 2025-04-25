const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");

const responses = {
    "hello": "Hi! I'm MealBot. Ask me about diets or how to use the planner.",
    "hi": "Hi! I'm MealBot. Ask me about diets or how to use the planner.",
    "help": "You can ask about vegetarian, keto, paleo, low-carb, and more diets.",
    "how to use": "Just select a dietary preference and click 'Generate Meal Plan'.",

    "vegetarian": "Vegetarian diets include plant-based foods and dairy, but no meat. Try omelettes, stir-fries, and quinoa bowls.",
    "vegan": "Vegan diets avoid all animal products. Think smoothie bowls, lentil soup, and chickpea salads.",
    "gluten-free": "Gluten-free meals exclude wheat and similar grains. Try quinoa bowls, stuffed peppers, and zucchini noodles.",
    "protein": "High-protein diets include foods like eggs, chicken, tuna, and Greek yogurt. Great for muscle building!",
    "carb": "Carb-focused diets give you energy. Include whole grains, rice bowls, and pasta with veggies.",
    "low-carb": "Low-carb diets limit sugars and starches. Try grilled meats with vegetables or cauliflower rice dishes.",
    "keto": "Keto is a high-fat, very low-carb diet. Go for avocado, cheese, eggs, and meat-based meals.",
    "paleo": "Paleo focuses on whole, unprocessed foods. Avoid grains and dairy, and try meat, veggies, and fruits.",
    "mediterranean": "Mediterranean diets include healthy fats, grains, lean meats, and veggies. Think Greek salad and grilled fish.",

    "default": "I'm not sure about that. Ask me about a dietary preference like keto or vegetarian!"
};

userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const userText = userInput.value.trim().toLowerCase();
        if (userText === "") return;
        appendMessage("You", userText);
        respond(userText);
        userInput.value = "";
    }
});

function appendMessage(sender, message) {
    const msg = document.createElement("div");
    msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function respond(input) {
    let replyKey = "default";
    Object.keys(responses).forEach(key => {
        if (input.includes(key)) {
            replyKey = key;
        }
    });
    appendMessage("MealBot", responses[replyKey]);
}
