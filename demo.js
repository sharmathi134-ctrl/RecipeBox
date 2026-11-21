function showMessage(name) {
    alert(name + " section will be available soon!");
}

function searchRecipes() {
    const input = document.getElementById("searchInput");
    const searchValue = input.value.toLowerCase().trim();

    const cards = document.querySelectorAll(".card");

    if (searchValue === "") {
        alert("Please enter a recipe name!");
        return;
    }

    let found = false;

    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(searchValue)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    if (!found) {
        alert("No matching recipes found!");
    }
}

function logout() {
    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        alert("Logged out successfully!");
    }
}