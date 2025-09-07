const timeClock = document.querySelector("#clock")
const greet = document.querySelector("#greeting")
const API_KEY = "9743a519b0124743bf293037250709";
const city = "Visakhapatnam"
const quotes = [
    "The best way to predict the future is to create it. – Peter Drucker",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Hustle in silence and let your success make the noise. – Unknown",
    "Dream big. Start small. Act now. – Robin Sharma",
    "Your limitation—it’s only your imagination. – Unknown",
    "Push yourself, because no one else is going to do it for you. – Unknown",
    "Great things never come from comfort zones. – Unknown",
    "Don’t stop when you’re tired. Stop when you’re done. – Unknown"
];

setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    if (hours > 11 && hours < 18) {

        greet.innerHTML = "Good Afternoon MASTER!!"
    }

    else if (hours > 21) {
        greet.innerHTML = "Good Night MASTER!!"
    }

    else {
        greet.innerHTML = "Good Morning MASTER!!"
    }
    const time = date.toLocaleTimeString();
    timeClock.innerHTML = time;
}, 1000);

const todo = document.querySelector("#add-todo")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
todo.addEventListener("click", () => {
    const task = todoInput.value.trim();
    if (!task) alert("Enter a task")
    if (task) {
        const todoTask = document.createElement("li");
        todoTask.textContent = task;
        todoList.appendChild(todoTask);
        todoInput.value = "";
    }
})

todoInput.addEventListener("keydown", () => {

    if (event.key === "Enter") {
        const task = todoInput.value.trim();
        if (!task) alert("Enter a task")
        if (task) {
            const todoTask = document.createElement("li");
            todoTask.textContent = task;
            todoList.appendChild(todoTask);
            todoInput.value = "";
        }

    }

})


setTimeout(async function weather() {

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
        const data = await response.json()
        const weatherType = data.current.condition.text;
        const image = data.current.condition.icon
        const weatherInfo = document.querySelector("#weather-info")
        weatherInfo.textContent = `${weatherType} in ${city}`
        const icon = document.querySelector("#weatherImage")
        icon.src = image
        const temperature = data.current.temp_c
        const temp = document.querySelector("#temperature")
        temp.textContent = temperature
        console.log(data)

    } catch (error) {
        console.log("Error...Unable to fetch data");

    }

}, 1000);

function quoteGenerator() {

    const randomQuote = Math.floor(Math.random() * quotes.length)
    document.querySelector("#quote").textContent = quotes[randomQuote]

}
setTimeout(quoteGenerator, 1000);

document.querySelector("#new-quote").addEventListener("click", quoteGenerator);


const themeToggle = document.querySelector("#theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});




