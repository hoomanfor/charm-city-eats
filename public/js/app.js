const search = $("#search");
const matchList = $("#match-list");

// Search Restaurants and filter it
const searchRestaurants = async (searchText) => {
  const response = await fetch("/api/restaurants");
  const restaurants = await response.json();

  // Get matches to current text input
  let matches = restaurants.filter(restaurant => {
    const regex = new RegExp(`^${searchText}`, "gi")
    return restaurant.name.match(regex);
  });

  // Do not return search results if text input is blank
  if (searchText.length === 0) {
    matches = [];
    matchList.html("");
  }

  // console.log(matches);
  outputHtml(matches);
};

// Show results in HTML
const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches.map(match => `
      <div class="card border-primary mb-1">
      <div class="card-header">${match.address} Baltimore, MD ${match.zip_code}</div>
      <div class="card-body">
        <h4 class="card-title">${match.name}</h4>
        <p class="card-text">${match.neighborhood}</p>
        </div>
      </div>
    `)
    .join("");

    // console.log(html)
    matchList.html(html);
  }
}

$(document).on("input", () => searchRestaurants(search.val()));