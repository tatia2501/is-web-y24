const getUsers = async () => {
    return await fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json());
}

const container = document.getElementById('user_info');
const template_users = document.getElementById("template");
const template_error = document.getElementById("error");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const loadUsers = async () => {
    container.innerHTML = '<img src="../Pictures/Gif/LoadCat.gif" width=250 height=200 alt="mask">';

    await sleep(3000);

    const userNum = Math.floor(Math.random() * 10);
    try {
        const data = (await getUsers()).slice(userNum, userNum + 1);
        container.innerHTML = '';
        for (const item of data) {
            const user = template_users.content.cloneNode(true);
            let p = user.querySelectorAll("p");
            p[0].textContent = "Имя: " + item.name
            p[1].textContent = "Логин: " + item.username
            p[2].textContent = "Почта: " + item.email;
            p[3].textContent = "Улица: " + item.address.street;
            p[4].textContent = "Телефон: " + item.phone;
            container.appendChild(user);
        }
    } catch (e) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        container.innerHTML = `<img src="../Pictures/Gif/ErrorCat.gif" width=200 height=300 alt="mask">`;
        const error = template_error.content.cloneNode(true);
        container.appendChild(error);
    }
}

loadUsers();