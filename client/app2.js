const form = document.querySelector("form");
const bizList = document.querySelector('.biz-data')
let userInput = document.querySelector('#term-location');

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let { term, location } = e.target;
  let termValue = term.value;
  let locationValue = location.value;
  getYelpRequest(termValue, locationValue);
});



const getYelpRequest = async (term, location) => {
  console.log(term, location)
  let localHostURL = `http://localhost:3000/yelpTerm/${term}/yelpLocation/${location}`;
  let response = await axios.get(localHostURL);
  // console.log(response.businesses);

  displayYelp(response.businesses);
};

function displayYelp(businesses) {
  console.log(businesses)
  businesses.forEach((biz) => {
    const bizDiv = document.createElement('div')
    bizDiv.classList.add('biz-info')
    bizList.append(bizDiv)
    let bizName = biz.name
    let bizNameTag = document.createElement('h1')
    bizNameTag.textContent = `${bizName}`
    bizDiv.append(bizNameTag)
    // console.log(bizNameTag)

  });
}

// const search = document.querySelector("#button-eyes")
//   search.addEventListener('click', () => {
//     const inputValue = document.querySelector("#term-location")
//     const userInput = inputValue.value
//     removeBusinesses()
//     displayYelp(userInput)
//   })

  function removeBusinesses() {
    while (bizList.lastChild) {
      bizList.removeChild(bizList.lastChild)
    }
  }
