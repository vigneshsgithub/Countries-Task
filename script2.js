document.addEventListener("DOMContentLoaded", () => {
  const countryDetailsContainer = document.querySelector(".country-details");

  const countryData = JSON.parse(localStorage.getItem("selectedCountry"));

  if (!countryData) {
    countryDetailsContainer.innerHTML = "<p>No country details available.</p>";
    return;
  }

  countryDetailsContainer.innerHTML = `
        <div class="country-infoo">
          <div class ="country-img">
            <img src="${countryData.flags.png}" alt="${countryData.name.common} flag">
          </div>
          <div class ="country-detail">
          <div class ="h-one">
           <h1 class="thisone">${countryData.name.common}</h1>
            <p class=paratag><strong>Official Name:</strong> ${countryData.name.official}</p>
            <p class=paratag><strong>Population:</strong> ${countryData.population.toLocaleString()}</p>
            <p class=paratag><strong>Region:</strong> ${countryData.region}</p>
            <p class=paratag> <strong>Subregion:</strong> ${countryData.subregion}</p>
            <p class=paratag><strong>Capital:</strong> ${countryData.capital ? countryData.capital[0] : "N/A"}</p>
           </div>
           <div class=below->
            <p class=paratag><strong>Languages:</strong> ${Object.values(countryData.languages).join(", ")}</p>
            <p class=paratag><strong>Currency:</strong> ${Object.values(countryData.currencies)[0].name} (${Object.values(countryData.currencies)[0].symbol})</p>
            </div>
          </div>
        </div>
       
        
        
  `;
});
