const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e.target);
  let { term, location } = e.target;
  let termValue = term.value;
  console.log(termValue);
  let locationValue = location.value;
  console.log(locationValue);
  getYelpRequest(termValue, locationValue);
});

const getYelpRequest = async (term, location) => {
  removeBusinesses();
  let localHostURL = `http://localhost:3000/yelpTerm/${term}/yelpLocation/${location}`;
  let response = await axios.get(localHostURL);
  console.log(response);
  console.log(response.data.businesses);
  if (!response) {
    alert("No information available.");
  } else {
    displayYelp(response.data.businesses);
  }
};

function displayYelp(businesses) {
  businesses.forEach((business) => {
    let bizDiv = document.createElement("div");
    bizDiv.classList = "bizDiv-container";
    bizDiv.style.backgroundImage = `url(${business.image_url})`;
    document.querySelector(".biz-data").append(bizDiv);
    console.log(business.image_url);
    const display = `
      <div class='display-box'>
      <h1 id="background-text" class='city'>${business.location.city}</h1>
      <h1 id="background-text" class='business-name'>${business.name}</h1>
	    </div>
      `;

    bizDiv.insertAdjacentHTML("beforeend", display);
    bizDiv.addEventListener("click", () => {
      function openForm() {
        document.getElementById("myForm").style.display = "block";
      }

      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }
      document.querySelector(".modal-text").innerHTML = `
           <h1 class="restaurant-name">${business.name}</h1>
           <h3>${business.categories[0].title}</h3>
           <h2>${business.price}</h2>
           <p>${business.location.display_address[0]}</p>
           <p>${business.location.display_address[1]}</p>
           <p>${business.location.display_address[2]}</p>
           <h6>Phone</>
           <p>${business.phone}</p>
           <div id="map"></div>
           <img class="logo-4modal" src="https://i.imgur.com/6mH212q.png"/>
           `;

      mapboxgl.accessToken =
        "pk.eyJ1IjoiYWxleHZhbGxjb3JiYSIsImEiOiJja3J4dGJ3NDcwdGtjMnBuMWp6Yjh5ZWpsIn0.tlnaGCoqSvhJbp93TvlPaQ";
      let map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [business.coordinates.longitude, business.coordinates.latitude],
        zoom: 13,
      });

      // Create a default Marker and add it to the map.
      let marker1 = new mapboxgl.Marker()
        .setLngLat([
          business.coordinates.longitude,
          business.coordinates.latitude,
        ])
        .addTo(map);

      document.querySelector(".modal").style.display = "block";
    });

    window.onclick = function (event) {
      if (event.target == document.querySelector(".modal")) {
        document.querySelector(".modal").style.display = "none";
      }
    };
    let span = document.querySelector(".close");
    let modal = document.querySelector(".modal");
    span.onclick = function () {
      modal.style.display = "none";
    };
  });

  // function createMap(lat, long) {
  //   mapboxgl.accessToken =
  //     "pk.eyJ1IjoiYWxleHZhbGxjb3JiYSIsImEiOiJja3J4dGJ3NDcwdGtjMnBuMWp6Yjh5ZWpsIn0.tlnaGCoqSvhJbp93TvlPaQ";
  //   let map = new mapboxgl.Map({
  //     container: "map",
  //     style: "mapbox://styles/mapbox/streets-v11",
  //     center: [long, lat],
  //     zoom: 8,
  //   });
  // }
}

function removeBusinesses() {
  const removeElement = document.querySelector(".biz-data");
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild);
  }
}

function openTheForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeTheForm() {
  document.getElementById("popupForm").style.display = "none";
}

document.querySelector(".form-popup").innerHTML = `
   <h4 class="Contact-Info">Contact Info</h1>
   <input class="input3" type="text" id="Name" placeholder="First Name & Last Name"/>
   <input class="input4" type="text" id="Name" placeholder="Email address"/>
   <button class="openBtn" type="submit">
    <img class="envelop" src="https://i.imgur.com/QAb14gU.png" alt="envelop" />
   </button>
`;

document.querySelector(".form-popup");
window.onclick = function (event) {
  if (event.target == document.querySelector(".form-popup")) {
    document.querySelector(".form-popup").style.display = "none";
  }
};
let span = document.querySelector(".close");
let modal = document.querySelector(".form-popup");
span.onclick = function () {
  modal.style.display = "none";
};