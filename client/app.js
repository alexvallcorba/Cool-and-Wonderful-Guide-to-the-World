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
  displayYelp(response.data.businesses);
};

function displayYelp(businesses) {
  console.log(businesses)
  businesses.forEach((biz) => {
    console.log(biz)
  })
}









