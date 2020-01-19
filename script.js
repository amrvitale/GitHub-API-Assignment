"use strict";

//user must search for github user handle
//search must trigger call to Github api
// repos associated with handle searched for must display on page - repo name and repo url
//must be able to make multiple searches and see only results for current search (.empty)

$(document).ready(function(){
    console.log("Ready to search for GitHub User Repo");
});

//make request to GitHub API
function getHandle(userEntry) {
    fetch (`https://api.github.com/users/${userEntry}/repos`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("GitHub handle not found."));
}


function displayResults (responseJson){
    console.log(responseJson);
    $('.results').empty();
    for (let index = 0; i < responseJson.length; i++) {
    $('.results').append(`<h2>${responseJson[i].name}</h2>`);
    $('results').append(`<a href=${responseJson[i].html_url}"></a>`)
    }
    $('.results').removeClass('hidden');

}

function watchForm(){
    $('form').submit(event => {
        event.preventDefault();
        let userEntry = $('#handleSearch').val(); 
        getHandle(userEntry);
        console.log(userEntry);
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });