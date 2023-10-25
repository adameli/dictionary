
const wordInput = document.querySelector("#wordInput");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", async () => {
    const value = wordInput.value.trim();
    console.log(value.length);
    if (value === "" || value === null) {
        window.prompt("Not a valid input");
    } else {
        const object = await getDefenition(value);
        const meanings = object.resource[0].meanings;
        console.log(meanings);
        meanings.forEach(meaning => {
            displayResult(meaning);
        });
        // displayResult(value, object);
    }
})

function displayResult(meaning) {
    document.querySelector(".resultDisplay").innerHTML += `
    <div class="displayMeaning">
            <p class="subtitle">${meaning.partOfSpeech}</p>
            <ul>
            <h4>Meaning</h4>
                <li>${meaning.definitions[0].definition}</li>
            </ul>
            <h4>Synonyms</h4>
            <p>${meaning.synonyms}</p>
        </div>
    `
}