document.addEventListener("DOMContentLoaded", () => {
    const countriesGrid = document.querySelector(".countries-grid");
    const searchInput = document.querySelector(".search");
    const regionFilter = document.querySelector(".filter");
    const filterMain = document.querySelector(".filter-main");
    const showFilter = document.querySelector(".filter-func");
    const sortFilter = document.querySelector('.sort-func');
    const sortmain = document.querySelector('.sort-main')
    const Africa = document.querySelector('.Africa');
    const Americas = document.querySelector('.Americas');
    const Asia = document.querySelector('.Asia');
    const Europe = document.querySelector('.Europe');
    const Oceania = document.querySelector('.Oceania');
    const populationasc = document.querySelector('.Populationasc');
    const populationdes = document.querySelector('.Populationdes');
    const languageasc = document.querySelector('.Languageasc');
    const languagedes = document.querySelector('.Languagedes');
    

    let allCountries = [];

    // Fetch and display countries
    const fetchCountries = async () => {
        try {
            const response = await fetch("https://restcountries.com/v3.1/all");
            allCountries = await response.json();
            displayCountries(allCountries);
        } catch (error) {
            console.error("Error fetching countries:", error);
            countriesGrid.innerHTML = `<div class="error-message">Failed to load countries. Please try again later.</div>`;
        }
    };

    // Display countries in the grid
    const displayCountries = (countries) => {
        countriesGrid.innerHTML = countries.map(country => `
            <div class="country-card" data-country='${JSON.stringify(country)}'>
                <img class="country-flag" src="${country.flags.png}" alt="${country.name.common} flag" loading="lazy">
                <div class="country-info">
                    <h2 class="country-name">${country.name.common}</h2>
                    <p class="country-detail"><strong>Population:</strong> ${country.population.toLocaleString()} Billion</p>
                    <p class="country-detail"><strong>Region:</strong> ${country.region}</p>
                    <p class="country-detail"><strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}</p>
                </div>
            </div>
        `).join("");

        document.querySelectorAll(".country-card").forEach(card => {
            card.addEventListener("click", () => {
                localStorage.setItem("selectedCountry", card.dataset.country);
                window.location.href = "country.html";
            });
        });
    };

    // Filter countries based on search and region
    const filterCountries = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedRegion = regionFilter.value;

        const filteredCountries = allCountries.filter(country =>
            country.name.common?.toLowerCase().includes(searchTerm) &&
            (!selectedRegion || country.region === selectedRegion)
        );

        displayCountries(filteredCountries);
    };

    // Event listeners
    searchInput.addEventListener("input", filterCountries);
    regionFilter.addEventListener("change", filterCountries);

    // Toggle filter display
    filterMain.addEventListener("click", () => {
        showFilter.classList.toggle('active');
    });
    
    //Toggle Sort disply
    sortmain.addEventListener('click',()=>{
        sortFilter.classList.toggle('active');
    })


   
//filter for Africa region

  Africa.addEventListener('click',()=>{

    const Africacountry = allCountries.filter(country =>
        country.region?.toLowerCase().includes("africa")
    );
    displayCountries(Africacountry);
  })


//filter for filter buttons
//filter for Asia region

Asia.addEventListener('click',()=>{

    const Asiacountry = allCountries.filter(country =>
        country.region?.toLowerCase().includes("asia")
    );
    displayCountries(Asiacountry);
  })


//filter for Europe region

Europe.addEventListener('click',()=>{

    const Europecountry = allCountries.filter(country =>
        country.region?.toLowerCase().includes("europe")
    );
    displayCountries(Europecountry);
  })


//filter for Americas region

Americas.addEventListener('click',()=>{

    const Americascountry = allCountries.filter(country =>
        country.region?.toLowerCase().includes("americas")
    );
    displayCountries(Americascountry);
  })

//filter for Oceania region

Oceania.addEventListener('click',()=>{

    const Oceaniacountry = allCountries.filter(country =>
        country.region?.toLowerCase().includes("oceania")
    );
    displayCountries(Oceaniacountry);
  })



  //filter for sort buttons
 // sorting based on population

 let isPopulationAscending = true; 

 populationasc.addEventListener("click", () => {
     let sortedCountries = [...allCountries].sort((a, b) => 
         a.population - b.population 
     );

     displayCountries(sortedCountries);
 });
 let isPopulationDescending = false;
  
 populationdes.addEventListener("click", () => {
    let sortedCountries = [...allCountries].sort((a, b) => 
        b.population - a.population
    );
    
    displayCountries(sortedCountries);
});

//sorting based on Language in asc

let isLanguageAscending = true; // for Tracking the sorting order

languageasc.addEventListener("click", () => {
    let sortedCountries = [...allCountries].sort((a, b) => {
        let firstLangA = a.languages ? Object.values(a.languages)[0] : "";
        let firstLangB = b.languages ? Object.values(b.languages)[0] : "";

        return firstLangA.localeCompare(firstLangB) 
            
    });

    isLanguageAscending = !isLanguageAscending; // Toggle order
    displayCountries(sortedCountries);
});

//sorting based on desc

let isLanguageDescending = false; //for  Tracking the sorting order

languagedes.addEventListener("click", () => {
    let sortedCountries = [...allCountries].sort((a, b) => {
        let firstLangA = a.languages ? Object.values(a.languages)[0] : "";
        let firstLangB = b.languages ? Object.values(b.languages)[0] : "";

        return firstLangB.localeCompare(firstLangA);
    });

    isLanguageDescending = !isLanguageDescending; // Toggle order
    displayCountries(sortedCountries);
});



    // Initial fetch
    fetchCountries();
});
