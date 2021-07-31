# Project Overview

## Project Name

Cool & Wonderful Guide 2 The World.

## Project Description

World wide digital traveling guide. Users can use it to plann trips or once in the location, can search all types of featuers like shops, museums,  transportation, events. Comes with a full description of the business or the palce and a google map location.

## API and Data Sample

This API had a CORSE issue. My Instructor helped me built on the back a local API. 
This is the API : https://api.yelp.com/v3/businesses/search?location=barcelona&term=tapas
This is the one he built for me: https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}
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

- 

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|July 30| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|August 2| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 3| Pseudocode / actual code | Incomplete
|August 4| Initial Clickable Model  | Incomplete
|August 5| MVP | Incomplete
|August 6| Presentations | Incomplete

## Priority Matrix

https://i.imgur.com/tQfGDDB.png

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
