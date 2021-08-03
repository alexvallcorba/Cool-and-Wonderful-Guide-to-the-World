const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e.target);
  let { term, location } = e.target;
  let termValue = term.value;
  let locationValue = location.value;
  const yelpRequest = getYelpRequest(termValue, locationValue);
});

const getYelpRequest = async (term, location) => {
  removeBusinesses();
  let localHostURL = `http://localhost:3000/yelpTerm/${term}/yelpLocation/${location}`;
  let response = await axios.get(localHostURL);
  console.log(response.data.businesses);
  displayYelp(response.data.businesses);
};

function displayYelp(businesses) {
 
  businesses.forEach((business) => {
    // console.log(business)
    // console.log(businesses)
    let bizDiv = document.createElement("div");
    bizDiv.classList = 'bizDiv-container'
    bizDiv.style.backgroundImage = `url(${business.image_url})`;
    document.querySelector(".biz-data").append(bizDiv);
    console.log(business.image_url)
    const display = `
    <div class='display-box' style='height:600px; width:500px;'>
    <h1 class='city'>${business.location.city}</h1>
    <h1 class='business-name'>${business.name}</h1>
    </div>
   `;
    // if (displayYelp === null) {
    //   alert("No information available.")
    // }
    bizDiv.insertAdjacentHTML("beforeend", display);
    bizDiv.addEventListener("click", () => {
      document.querySelector(
        ".modalText"
      ).innerHTML = `
        <h1>${business.name}</h1>
        <h3>${business.categories[0].title}</h3>


        <h2>${business.price}</h2>

        <p>${business.location.display_address[0]}</p>
        <p>${business.location.display_address[1]}</p>
        <p>${business.location.display_address[2]}</p>
        <h6>Phone</>
        <p>${business.phone}</p>
        <p>
        ${business.coordinates.latitude}
        ${business.coordinates.longitude}
        </p>
        `
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
}

function removeBusinesses() {
  const removeElement = document.querySelector(".biz-data");
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild);
  }
}
