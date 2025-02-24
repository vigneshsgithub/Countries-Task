// document.addEventListener('DOMContentLoaded', () => {
//   // Called the main container using class name
//   const onecard = document.querySelector(".onecard");

//   // Created a card_container div, gave class name, and appended it with the main container
//   const card_container = document.createElement('div');
//   card_container.classList.add('card-container');
//   onecard.appendChild(card_container);

//   // Fetching data
//   const fetchdata = async () => {
//       try {
//           const response = await fetch("https://restcountries.com/v3.1/all");

//           if (!response.ok) {
//               throw new Error("Could not fetch data");
//           }

//           const data = await response.json();
//           console.log(data); // ✅ Now inside the fetch function

//           filterCountries(data);
//       } catch (error) {
//           console.error("Error fetching data:", error);
//       }
//   };

//   // Function to display the data

//   // Call the fetchdata function
//   fetchdata();
// });
// const indexlength=0;
// const filterCountries = () => {


//   data.filter(country =>{
//     for(let i=0;i<data.length;i++){
//       if(country.length==indexlength){


//         const countryCard = document.createElement("div");
//           countryCard.classList.add("dog-card");

//           countryCard.innerHTML = `
//               <img class="dog-img" 
//                    src="${country.flags.png}" 
//                    alt=" Flag"
//                    loading="lazy">
//               <p class="dog-status">
//                  ${country.name.official}
//               </p>
//           `;

//           card_container.appendChild(countryCard);
//       }else{
//         country.length++;
//         indexlength.length++;
//       }
//     }
//   })


//   // const searchTerm = searchInput.value.toLowerCase();
//   // const selectedRegion = regionFilter.value;

//   // const filteredCountries = data.filter(country => {
//   //     const matchesSearch = country.name.common.toLowerCase().includes(searchTerm);
//   //     const matchesRegion = !selectedRegion || country.region === selectedRegion;
//   //     return matchesSearch && matchesRegion;
// //   });

//  };



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
           <div>
            <p class=paratag><strong>Languages:</strong> ${Object.values(countryData.languages).join(", ")}</p>
            <p class=paratag><strong>Currency:</strong> ${Object.values(countryData.currencies)[0].name} (${Object.values(countryData.currencies)[0].symbol})</p>
            </div>
          </div>
        </div>
       
        
        
  `;
});
