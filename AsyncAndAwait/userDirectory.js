const usersContainer = document.getElementById("users");
const loader = document.getElementById("loader");
const search = document.getElementById("search");
const message = document.getElementById("message");

let users = [];

async function getUsers() {

    loader.style.display = "block";
    message.textContent = "";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        users = await response.json();

        renderUsers(users);

    } catch (error) {

        message.textContent = "Something went wrong.";

        console.log(error);

    } finally {

        loader.style.display = "none";

    }

}

function renderUsers(userList) {

    if(userList.length === 0){

        usersContainer.innerHTML = "";
        message.textContent = "No User Found";
        return;

    }

    message.textContent = "";

    const cards = userList.map(user => `
        <div class="card">
            <h2>${user.username}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
        </div>
    `).join("");

    usersContainer.innerHTML = cards;

}

search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(value)
    );

    renderUsers(filteredUsers);

});

getUsers();