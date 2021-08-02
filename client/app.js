const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e.target)
  let { term, location } = e.target;
  let termValue = term.value;
  let locationValue = location.value;
  getYelpRequest(termValue, locationValue);
});


//Get data with call to the API

const getYelpRequest = async (term, location) => {
  let localHostURL = `http://localhost:3000/yelpTerm/${term}/yelpLocation/${location}`;
  let response = await axios.get(localHostURL);
  console.log(response.data);
};

// getYelpRequest()

function displayYelp(businesses) {
  console.log(businesses)
  const display = `
  <div class="biz-info">
    <h1>${businesses.name}</h1>
    <img src="${businesses.image_url}" alt="eyes"/>
    <h3 class='address'>Location<?h3>
    <p>${businesses.location.display_address}</p>
    <h3 class='phone'>Phone</>
    <p>${businesses.location.display_address}</p>

  </div>
  `
  document.querySelector('.biz-info').insertAdjacentHTML('beforeend', display)
}

function removeCountry() {
    const removeElement = document.querySelector('.biz-data')
    while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild)
  }
}








