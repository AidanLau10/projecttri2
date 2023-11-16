const skins = ["Skin 1", "Skin 2", "Skin 3", "Skin 4", "Skin 5", "Skin 6", "Skin 7", "Skin 8"];
let bracketIndex = 0;
let favoriteSkin;
function showBracket() {
    const bracketDiv = document.getElementById("bracket");
    bracketDiv.innerHTML = "";
    const skinSelect = document.createElement("select");
    skins.forEach((skin, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.text = skin;
        skinSelect.appendChild(option);
    });
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.addEventListener("click", () => {
        bracketIndex++;
        if (bracketIndex < skins.length) {
            showBracket();
        } else {
            showFavorite();
        }
    });
    bracketDiv.appendChild(skinSelect);
    bracketDiv.appendChild(nextButton);
}
function showFavorite() {
    const skinSelect = document.getElementById("bracket").querySelector("select");
    favoriteSkin = skins[skinSelect.value];
    alert(`Your favorite Brawl Stars skin is: ${favoriteSkin}`);
}
// Initialize the bracket when the page loads
showBracket();