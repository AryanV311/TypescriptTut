"use strict";
const getUsername = document.querySelector('#user');
const formSubmit = document.querySelector('#form');
const main_container = document.querySelector('.main_container');
async function myCustomFetchUser(url, options) {
    const response = await fetch(url);
    if (!response.ok) {
        `Network response was not ok: ${response.status}`;
    }
    const data = await response.json();
    console.log(data);
    return data;
}
const showResultUI = (singleUser) => {
    const { id, login, avatar_url, url } = singleUser;
    main_container.insertAdjacentHTML("beforeend", `<div class="card">
            <img src="${avatar_url}" alt="${login}" />
            <h3>${login}</h3>
            <hr />
            <div class="card-footer">
                <img src="${avatar_url} alt="${login}" />
                <a href="${url}"> Github </a>
            </div>  
         </div>
        
        `);
};
function fetchUserData(url) {
    myCustomFetchUser(url, {}).then((userInfo) => {
        for (const singleUser of userInfo) {
            showResultUI(singleUser);
        }
    });
}
fetchUserData("https://api.github.com/users");
formSubmit.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchTerm = getUsername.value.toLowerCase().trim();
    if (!searchTerm) {
        main_container.innerHTML = `<p class="empty-msg">Please enter a username to search.</p>`;
        return;
    }
    try {
        const url = "https://api.github.com/users";
        const allUserInfo = await myCustomFetchUser(url, {});
        const matchingUser = allUserInfo.filter((user) => user.login.toLowerCase().includes(searchTerm));
        main_container.innerHTML = "";
        if (matchingUser.length === 0) {
            main_container.insertAdjacentHTML("beforeend", `<p class="empty-msg">No matching user found.</p>`);
        }
        else {
            matchingUser.forEach((singleUser) => {
                showResultUI(singleUser);
            });
        }
    }
    catch (error) {
        console.error("Error fetching user data:", error);
        main_container.innerHTML = `<p class="error-msg">Failed to fetch data. Please try again later.</p>`;
    }
});
