const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e.target)
  let { term, location } = e.target;
  let termValue = term.value;
  let locationValue = location.value;
  const yelpRequest = getYelpRequest(termValue, locationValue);
});



const getYelpRequest = async (term, location) => {
  removeBusinesses()
  let localHostURL = `http://localhost:3000/yelpTerm/${term}/yelpLocation/${location}`;
  let response = await axios.get(localHostURL);
  console.log(response.data.businesses);
  displayYelp(response.data.businesses)
};


function displayYelp(businesses) {
  businesses.forEach((business) => {
    // console.log(business)
    // console.log(businesses)
  let bizDiv = document.createElement('div')
   bizDiv.style.backgroundImage = `url(${business.image_url})`
   document.querySelector('.biz-data').append(bizDiv)
  const display = `
    <h1>${business.name}</h1>
    <h3 class='address'>Location<?h3>
    <p>${business.location.display_address[0]}
       ${business.location.display_address[1]}
       ${business.location.display_address[2]}
    </p>
    <h3 class='phone'>Phone</>
    <p>${business.phone}</p>
  `
  bizDiv.insertAdjacentHTML('beforeend', display)
    
  })
}

function removeBusinesses() {
   const removeElement = document.querySelector('.biz-data')
   while (removeElement.lastChild) {
   removeElement.removeChild(removeElement.lastChild)
   }
 }
 











