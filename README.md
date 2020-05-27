Food Truck Locator Service

This is a webservice that holds the local Food Truck location and information in SF area. This information can be updated by the program provided in the Cron repository and the file provided by the city.

DEMO

A GET request to namazgurbanov.com:3001/ui/merchants with user's latitude, longitude will return all the food trucks in the 5 mile radius. One can optionally send the distance parameter to change the radius of search.

sample request:

GET http://namazgurbanov.com:3001/ui/merchants {
    latitude: 37.80774328,
    longitude: -122.4241499,
    distance: 1
}

Sample response:

{
    "message": "5 merchants were found near you",
    "data": [
        {
            "id": 343,
            "applicant": "D & T Catering",
            "facilityType": "Truck",
            "cnn": 5770000,
            "locationDesc": "FRANCISCO ST: POLK ST to VAN NESS AVE (1100 - 1199)",
            "address": "1150 FRANCISCO ST",
            "status": "APPROVED",
            "foodItems": "Cold Truck: Pre-packaged sandwiches: Chicken Bake: Canned Soup: Chili Dog: Corn Dog: Cup of Noodles: Egg Muffins: Hamburgers: Cheeseburgers: Hot Dog: Hot sandwiches: quesadillas: Beverages: Flan: Fruits: Yogurt: Candy: Cookies: Chips: Donuts: Snacks",
            "latitude": 37.8037902440403,
            "longitude": -122.424145174983
        },
        {
            "id": 271,
            "applicant": "Philz Coffee Truck",
            "facilityType": "Truck",
            "cnn": 8701000,
            "locationDesc": "MARINA BLVD: LAGUNA ST to BEACH ST \\ BUCHANAN ST \\ LOWER FORT MASON ST (1 - 99)",
            "address": "15 MARINA BLVD",
            "status": "APPROVED",
            "foodItems": "Hot coffee: iced coffee: hot chocolate: tea: pastries",
            "latitude": 37.8045778690901,
            "longitude": -122.433010774343
        },
        {
            "id": 518,
            "applicant": "Anas Goodies Catering",
            "facilityType": "Truck",
            "cnn": 5762000,
            "locationDesc": "FRANCISCO ST: MASON ST to TAYLOR ST (500 - 599)",
            "address": "500 FRANCISCO ST",
            "status": "APPROVED",
            "foodItems": "Cold Truck: Sandwiches: Noodles:  Pre-packaged Snacks: Candy: Desserts Various Beverages",
            "latitude": 37.8050495090589,
            "longitude": -122.41433443694
        },
        {
            "id": 192,
            "applicant": "Datam SF LLC dba Anzu To You",
            "facilityType": "Truck",
            "cnn": 12463000,
            "locationDesc": "TAYLOR ST: BAY ST to NORTH POINT ST (2500 - 2599)",
            "address": "2535 TAYLOR ST",
            "status": "REQUESTED",
            "foodItems": "Asian Fusion - Japanese Sandwiches/Sliders/Misubi",
            "latitude": 37.805885350101,
            "longitude": -122.415945246637
        },
        {
            "id": 53,
            "applicant": "Bay Area Dots, LLC",
            "facilityType": "Push Cart",
            "cnn": 2846000,
            "locationDesc": "BEACH ST: HYDE ST to LARKIN ST (700 - 799)",
            "address": "900 BEACH ST",
            "status": "REQUESTED",
            "foodItems": "Hot dogs: condiments: soft pretzels: soft drinks: coffee:cold beverages: pastries: bakery goods: cookies: icecream: candy: soups: churros: chestnuts: nuts: fresh fruit: fruit juices: desserts: potato chips and popcorn.",
            "latitude": 37.8077432884455,
            "longitude": -122.42414994487
        }
    ]
}

