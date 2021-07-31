# Project Overview

## Project Name

Cool & Wonderful Guide 2 The World.

## Project Description

World wide digital traveling guide. Users can use it to plann trips or once in the location, can search all types of featuers like shops, museums,  transportation, events. Comes with a full description of the business or the palce and a google map location.

## API and Data Sample

This API had a CORSE issue. My Instructor helped me built on the back a local API. 
This is the API that has the CORSE issue.
https://api.yelp.com/v3/businesses/search?location=barcelona&term=tapas

This is the one my instructor built for me in the back end.
http://localhost:3000/yelpTerm/${term}/yelpLocation/${location}
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

https://i.imgur.com/hJi99DW.png

### MVP/PostMVP

 

#### MVP 

-Make data request.

-Append data.

-Write basic HTML,CSS.

-Create form for drop down menu (show page).

-create links for the four options (page 1) of the data response after getting first 
 response from search list and append data.
 
-Remove data from previous search (show page).

-Style with CSS. Show page,pag1,pag2.
 
#### PostMVP  

-Make a new request (dif API?)to get more data and img of each individual object.

-Append new data and img.

-Style with CSS landing page.

-Create link and pop up window for Google Maps location of the place.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 30 | Prompt / Wireframes / Priority Matrix / Timeframes |Complete
|August 2| Project Approval / Pseudo code / Create basicHTML (maybe some basic CSS after axios request) / Start writing code (axios request, append data)| Incomplete
|August 3| Create links for page1 / Append the data / Remove previous search / Maybe start CSS style using flex box and Media Query| Incomplete
|August 4| Advance CSS styling / This should be the end of MVP |Incomplete
|August 5|Work on pmvp in this order: Second axios request /  Append data and image / Style in CSS (landing page) / Google Maps window and link for location.| Incomplete
|August 6| Presentations | Incomplete

## Priority Matrix

https://i.imgur.com/tQfGDDB.png

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Look for API and make it work | H | 4hrs| 2hrs | 2hrs |
| First data request and append data | H | 3hrs| hrs | hrs |
| Write basic HTML, CSS | H | 3hrs | hrs | hrs |
| Create form for drop down menu | H | 3hrs | hrs | hrs |
| Create links or maybe new request for page2 | H | 4hrs | hrs | hrs |
| Remove data from previous response | H | 2hrs | hrs | hrs |
| create links in between pages | H | 3hrs | hrs | hrs |
| Style with advance CSS all the pages | H | 15hrs | hrs | hrs |
| Make new request for new data and img for landing page | H | 3hrs | hrs | hrs |
| Appen data and image for landing page | H | 4hrs | hrs | hrs |
| Create new pop up window with link to Google Maps for business or place location | H | 4hrs | hrs | hrs |
| Total | H | 48hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
