"use strict"

// console.log("hello");

async function fetchFunction(request) {
    try {
        const response = await fetch(request);
        const resource = await response.json();
        return { response: response, resource: resource }
    }
    catch (e) {
        console.log("error");
    }
}

async function getDefenition(word) {
    const request = new Request("https://api.dictionaryapi.dev/api/v2/entries/en/" + word);
    const resource = await fetchFunction(request);
    return resource;

}

