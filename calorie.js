const query = 'fries';
const apiKey = "rdfykw7OZqIEDic8gHfegTEpv1XnSHIFHm5JQpZw"; // Replace with your actual API key
const url = "https://api.api-ninjas.com/v1/nutrition?query=" + query;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function searchFood(food)
{
    const response = await fetch(url);
    var data = await response.text();
    console.log(data);
    document.querySelector(".div-12").innerHTML = data.calories;
    /*document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+ " km/h"*/

       
        
}
    searchBtn.addEventListener("click", ()=>
    {
        searchFood(searchBox.value);
    })