const getUsername = document.querySelector('#user') as HTMLInputElement;
const formSubmit = document.querySelector('#form') as HTMLFormElement;
const main_container = document.querySelector('.main_container') as HTMLElement;

interface UserData {
    id:number,
    login:string,
    avatar_url:string,
    location:string,
    url:string
}

async function myCustomFetchUser<T>(url:string,options?:RequestInit):Promise<T>{
    const response = await fetch(url)

    if(!response.ok){
        `Network response was not ok: ${response.status}`
    }

    const data = await response.json()
    console.log(data);
    return data
}   

const showResultUI = (singleUser:UserData) => {
    const {id,login, avatar_url, url} = singleUser
    
    main_container.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
            <img src="${avatar_url}" alt="${login}" />
            <h3>${login}</h3>
            <hr />
            <div class="card-footer">
                <img src="${avatar_url} alt="${login}" />
                <a href="${url}"> Github </a>
            </div>  
         </div>
        
        `
    )
}

function fetchUserData(url:string){
    myCustomFetchUser<UserData[]>(url, {}).then((userInfo) => {
        for(const singleUser of userInfo){
            showResultUI(singleUser)
        }
    })
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
        const allUserInfo = await myCustomFetchUser<UserData[]>(url, {});

        const matchingUser = allUserInfo.filter((user) => 
            user.login.toLowerCase().includes(searchTerm)
        );

        main_container.innerHTML = "";

        if (matchingUser.length === 0) {
            main_container.insertAdjacentHTML(
                "beforeend",
                `<p class="empty-msg">No matching user found.</p>`
            );
        } else {
            matchingUser.forEach((singleUser) => {
                showResultUI(singleUser);
            });
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        main_container.innerHTML = `<p class="error-msg">Failed to fetch data. Please try again later.</p>`;
    }
});