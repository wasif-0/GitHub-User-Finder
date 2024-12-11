// script.js
function findUser() {
    const username = document.getElementById("username").value;
    const userDetails = document.getElementById("userDetails");
    const userName = document.getElementById("userName");
    const userBio = document.getElementById("userBio");
    const userAvatar = document.getElementById("userAvatar");
    const userRepoLink = document.getElementById("userRepoLink");
    const userRepos = document.getElementById("userRepos");
    const userFollowers = document.getElementById("userFollowers");
    const userFollowing = document.getElementById("userFollowing");

    if (!username) {
        alert("Please enter a username");
        return;
    }

    const apiUrl = `https://api.github.com/users/${username}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.message === "Not Found") {
                alert("User not found");
                userDetails.style.display = "none";
            } else {
                userAvatar.src = data.avatar_url;
                userName.innerText = data.name || "No name available";
                userBio.innerText = data.bio || "No bio available";
                userRepoLink.href = data.html_url;
                userRepoLink.innerText = "View Repositories";

                // Display user stats (repos, followers, following)
                userRepos.innerText = data.public_repos || "0";
                userFollowers.innerText = data.followers || "0";
                userFollowing.innerText = data.following || "0";
                
                userDetails.style.display = "block";
            }
        })
        .catch(error => {
            alert("Error fetching user data");
            console.error(error);
        });
}
