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
  };

  $(".alert").hide()
  outputHtml(matches);
};

// Show results in HTML
const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches.map(match => `
      <div class="card border-primary mb-2">
        <div class="card-header">
          ${match.address} Baltimore, MD ${match.zip_code}
        </div>
        <div class="card-body">
          <h4 class="card-title">${match.name}</h4>
          <p class="card-text">${match.neighborhood}</p>
          <button type="button" id="update" data-id=${match.id} data-toggle="modal" data-target="#update-restaurant-name" class="btn btn-primary w-100 mb-2">Update restaurant name</button>
          <button type="button" id="delete" data-id=${match.id} class="btn btn-warning w-100">Report restaurant as closed</button>
        </div>
      </div>
    `)
    .join("");

    matchList.html(html);
  };
};

// Event listener for restaurant search
$("#search").on("input", () => searchRestaurants(search.val()));

// Add a new restaurant to the database
$("#create-submit").on("click", function(event) {
  event.preventDefault();
  const restaurantForm = $("#restaurant-form")[0];
  if (restaurantForm.checkValidity() === false) {
    event.stopPropagation();
    $("#restaurant-form").addClass("was-validated");
  } else {
    const name = $("#restaurantName").val().trim();
    const address = $("#streetAddress").val().trim();
    const neighborhood = $("#neighborhood").val().trim();
    const zip_code = $("#zipCode").val().trim();
    const restaurant = {
      name,
      address,
      neighborhood,
      zip_code
    };
    $.ajax({
      url: "/api/restaurants",
      data: restaurant,
      dataType: "json",
      method: "POST"
    }).then(function(response) {
      $(".alert").show()
      $('#add-restaurant-form').modal('toggle')
      $("#restaurant-form").removeClass("was-validated");
    })
  };
});

// Update a restaurant name
$("#update-submit").on("click", function(event) {
  event.preventDefault();
  const id = $("#update").data("id");
  const updateForm = $("#update-restaurant-form")[0];
  if (updateForm.checkValidity() == false) {
    event.stopPropagation();
    $("#update-restaurant-form").addClass("was-validated");
  } else {
    const newName = $("#updateName").val().trim();
    $.ajax({
      url: "/api/restaurants",
      data: { 
        "id": id,
        "name": newName
      },
      dataType: "json",
      method: "PUT"
    }).then(function(response) {
      $(".alert").show()
      $('#update-restaurant-name').modal('toggle')
      $("#update-restaurant-form").removeClass("was-validated");
      matchList.html("");
    });
  };
});

// Delete a restaurant name
$(document).on("click", "#delete", function(event) {
  const id = $(this).data("id");
  $.ajax({
    url: `/api/restaurants/${id}`,
    dataType: "json",
    method: "DELETE"
  }).then(function(response) {
    $(".alert").show()
    matchList.html("");
  });
})