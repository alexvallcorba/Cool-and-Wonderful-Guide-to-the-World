# Project Overview

## Project Name

Cool & Wonderful Guide 2 The World.

https://cool-and-wonderful-guide-to-the-world.netlify.app/

## Project Description

web application for a travel guide that allows users to search anyshops, airports, hotels, restaurants, tourist locations with their address, map location and price rating all over the world. Utilized: Javascript, CSS, HTML, Yelp API.

## API and Data Sample

https://api.yelp.com/v3/businesses/search?location=barcelona&term=tapas


```
{
            "id": "zrxsTCz5lt8q73Hx0GHLDw",
            "alias": "cerveseria-catalana-barcelona",
            "name": "Cerveseria Catalana",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/bHihfh0Dl7HQ-fj3G1ZqsQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/cerveseria-catalana-barcelona?adjust_creative=Ho5FFn72QbG2jZcHjWpgLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ho5FFn72QbG2jZcHjWpgLA",
            "review_count": 1252,
            "categories": [
                {
                    "alias": "spanish",
                    "title": "Spanish"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 41.392393,
                "longitude": 2.160993
            },
            "transactions": [],
            "price": "€€",
            "location": {
                "address1": "Carrer de Mallorca, 236",
                "address2": "",
                "address3": null,
                "city": "Barcelona",
                "zip_code": "08008",
                "country": "ES",
                "state": "B",
                "display_address": [
                    "Carrer de Mallorca, 236",
                    "08008 Barcelona",
                    "Spain"
                ]
            },
            "phone": "+34932160368",
            "display_phone": "+34 932 16 03 68",
            "distance": 267.7763219307933
        }
```

## Wireframes

![wireframe](https://i.imgur.com/7SthxGj.png)

### MVP/PostMVP

 

#### MVP 

- Make data request.

- GET data and Append the data.

- Write basic HTML,CSS.

- Create form for input user (show page).
 
- Remove data from previous search (show page).

- Style with CSS. Show-page, pag1, page-landing.
 
#### PostMVP  

- Make a new request to get more data and img of each individual object.

- Append new data and img.

- Style with advance CSS and Design logo, background img and button.

- create a subscription form and pop up window for  user's name and email.

- Create link and pop up window for Google Maps location of the place.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 30 | Prompt / Wireframes / Priority Matrix / Timeframes |Complete
|August 2| Project Approval / Pseudo code / Create basicHTML (maybe some basic CSS after axios request) / Start writing code (axios request, append data)| Complete
|August 3| Append the data / Remove previous search / Maybe start CSS style using flex box and Media Query| Complete
|August 4| Advance CSS styling / This should be the end of MVP |Complete
|August 5| Work on pmvp in this order: Second axios request /  Append data and image / Style in CSS (landing page)  / Google Maps window and link for location.| Complete
|August 6| Presentations | incomplete

## Priority Matrix

![Priority Matrix](https://i.imgur.com/tQfGDDB.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Look for API and make it work | H | 4hrs| 2hrs | 2hrs |
| First data request and append data | H | 3hrs| 3hrs | 3hrs |
| Write basic HTML, CSS | H | 3hrs | 2hrs | 2hrs |
| Create input user's form | H | 3hrs | 3hrs | 3hrs |
| Remove data from previous response | H | 2hrs | 3hrs | 3hrs |
| Append business data info in container | H | 4hrs | 4hrs | 4hrs |
| Style with advance CSS all the pages | H | 10hrs | 12hrs | 16hrs |
| Find second API for Maps window | H | 3hrs | 2hrs | 2hrs |
| Create Maps | H | 4hrs | 5hrs | 5hrs |
| Create Modal pop up window for businees info | H | 4hrs | 4hrs | 4hrs |
| Total | H | 40hrs| 40hrs | 40hrs |

## Code Snippet

 

```
<!-- Code for creating a modal pop up window. -->

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
```

## Change Log
YELP API had a CORSE issue. My Instructor helped me built on the back a local API. 
This is the one my instructor built for me in the back end.
http://localhost:3000/yelpTerm/${term}/yelpLocation/${location}
