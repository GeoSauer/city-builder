const nameInput = document.getElementById('name-input');
const biomeSelect = document.getElementById('biome-select');
const castleSelect = document.getElementById('castle-select');
const addAttraction = document.getElementById('add-attraction');
const attractionInput = document.getElementById('attraction-input');
const kingdomArticle = document.getElementById('kingdom-article');
const kingdomDisplay = document.getElementById('kingdom-display');
const biomeImage = document.getElementById('biome-image');
const castleImage = document.getElementById('castle-image');
const addButton = document.getAnimations('add-button');

const kingdom = {
    name: 'Neogeo',
    biome: 'forest',
    castle: 'turkish',
    attractions: [],
};

/* Events */
nameInput.addEventListener('input', () => {
    kingdom.name = nameInput.value;
    displayKingdom();
});

biomeSelect.addEventListener('change', () => {
    kingdom.biome = biomeSelect.value;
    displayKingdom();
});

castleSelect.addEventListener('change', () => {
    kingdom.castle = castleSelect.value;
    displayKingdom();
});
/* Display Functions */
function displayBuilder() {
    nameInput.value = kingdom.name;
    biomeSelect.value = kingdom.biome;
    castleSelect.value = kingdom.castle;
}

function displayKingdom() {
    kingdomArticle.classList.value = '';
    kingdomArticle.classList.add(kingdom.biome, kingdom.castle);
    kingdomDisplay.textContent = kingdom.name;
    biomeImage.src = 'assets/biomes/' + kingdom.biome + '.jpeg';
    biomeImage.alt = kingdom.biome;
    castleImage.src = 'assets/castles/' + kingdom.castle + '.jpeg';
    castleImage.alt = kingdom.castle;
}

// (don't forget to call any display functions you want to run on page load!)
displayBuilder();
displayKingdom();
