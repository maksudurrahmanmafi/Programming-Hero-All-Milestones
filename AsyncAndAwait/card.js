const button = document.getElementById("load-data");
const loader = document.getElementById("loader");
const dataContainer = document.getElementById("data-container");

button.addEventListener("click", async () => {

    loader.style.display = "block";
    dataContainer.innerHTML = "";

    // Simulate slow server
    await new Promise(resolve => {
        setTimeout(resolve, 2000);
    });

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const users = await response.json();

        loader.style.display = "none";

        const cards = users.map(user => `
            <div class="card">
                <h2>${user.username}</h2>
                <p>${user.email}</p>
            </div>
        `);

        dataContainer.innerHTML = cards.join("");

    } catch (error) {

        loader.style.display = "none";

        dataContainer.innerHTML = `
            <h2>Something went wrong!</h2>
        `;

        console.log(error);

    }

});