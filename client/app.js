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
           <img class="logo-4modal" src="https://i.imgur.com/6mH212q.png"/>
           `;

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

    function openForm() {
      document.getElementById(".form-popup").style.display = "block";
    }

    function closeForm() {
      document.getElementById(".form-popup").style.display = "none";
    }
    document.getElementById(".form-popup").innerHTML = `
  <h2>Popup Form</h2>
  <p>Click on the "Open Form" button to open the popup form.</p>
  <div class="openBtn">
    <button class="openButton" onclick="openForm()"><strong>Open Form</strong></button>
  </div>
  <div class="loginPopup">
    <div class="formPopup" id="popupForm">
      <form action="/action_page.php" class="formContainer">
        <h2>Please Log in</h2>
        <label for="email">
          <strong>E-mail</strong>
        </label>
        <input type="text" id="email" placeholder="Your Email" name="email" required>
        <label for="psw">
          <strong>Password</strong>
        </label>
        <input type="password" id="psw" placeholder="Your Password" name="psw" required>
        <button type="submit" class="btn">Log in</button>
        <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
      </form>
        `;

    function createMap(lat, long) {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiYWxleHZhbGxjb3JiYSIsImEiOiJja3J4dGJ3NDcwdGtjMnBuMWp6Yjh5ZWpsIn0.tlnaGCoqSvhJbp93TvlPaQ";
      let map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [long, lat],
        zoom: 8,
      });
    }
  
}

function removeBusinesses() {
  const removeElement = document.querySelector(".biz-data");
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild);
  }
}
