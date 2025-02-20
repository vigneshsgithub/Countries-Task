document.addEventListener("DOMContentLoaded", () => {
    const countriesGrid = document.querySelector(".countries-grid");
    const searchInput = document.querySelector(".search");
    const regionFilter = document.querySelector(".filter");
    
    let allCountries = [];
    
    // Fetch and display countries
    const fetchCountries = async () => {
        try {
            const response = await fetch("https://restcountries.com/v3.1/all");
            allCountries = await response.json();
            displayCountries(allCountries);
        } catch (error) {
            console.error("Error fetching countries:", error);
            countriesGrid.innerHTML = `
                <div class="error-message">
                    Failed to load countries. Please try again later.
                </div>
            `;
        }
    };

    // Display countries in the grid
    const displayCountries = (countries) => {
        countriesGrid.innerHTML = countries.map(country => `
            <div class="country-card">
                <img class="country-flag" 
                     src="${country.flags.png}" 
                     alt="${country.name.common} flag"
                     loading="lazy">
                <div class="country-info">
                    <h2 class="country-name">${country.name.common}</h2>
                    <p class="country-detail">
                        <strong>Population:</strong> ${country.population.toLocaleString()}
                    </p>
                    <p class="country-detail">
                        <strong>Region:</strong> ${country.region}
                    </p>
                    <p class="country-detail">
                        <strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}
                    </p>
                </div>
            </div>
        `).join('');
    };

    // Filter countries based on search and region
    const filterCountries = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedRegion = regionFilter.value;

        const filteredCountries = allCountries.filter(country => {
            const matchesSearch = country.name.common.toLowerCase().includes(searchTerm);
            const matchesRegion = !selectedRegion || country.region === selectedRegion;
            return matchesSearch && matchesRegion;
        });

        displayCountries(filteredCountries);
    };

    // Event listeners
    searchInput.addEventListener("input", filterCountries);
    regionFilter.addEventListener("change", filterCountries);

    // Initial fetch
    fetchCountries();
});