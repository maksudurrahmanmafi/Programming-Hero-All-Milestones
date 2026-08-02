const button = document.getElementById('load-data');
const loader = document.getElementById('loader');
const userList = document.getElementById('users');

button.addEventListener('click', async () => {
    loader.style.display = 'block';
    userList.innerHTML = '';
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    loader.style.display = 'none';
    users.map(user => {
        const li = document.createElement('li');
        li.textContent = user.username;
        userList.appendChild(li);
    });
});