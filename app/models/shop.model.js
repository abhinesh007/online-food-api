const mongoose = require('mongoose');

let shop_data = {
  "id": "8383",
  "bgColor": null,
  "logo": null,
  "textColor": null,
  "name": "Dummy Shop (Hinjewadi Phase 1)",
  "uuid": "50bae61d-451d-47e6-b8a8-988c4f616fa2",
  "slug": "dummy-shop",
  "latLong": "19,20",
  "city": "Pune",
  "area": "Hinjewadi",
  "areaPostalCode": "0",
  "areaSlug": "hinjewadi",
  "restaurantSlug": {
    "restaurant": "dummy-shop",
    "city": "pune"
  },
  "type": "F",
  "locality": "Blueridge",
  "avgRating": 4.2,
  "totalRatings": 500,
  "avgRatingString": "4.2",
  "totalRatingsString": "500+ ratings",
  "cloudinaryImageId": "gezrnwvyfr3tl4gbtgnr",
  "coverImageId": null,
  "brandImageId": null,
  "fssaiLicenseNo": null,
  "costForTwo": 40000,
  "costForTwoMsg": "₹400 for two",
  "cuisines": [
    "North Indian",
    "Chinese"
  ],
  "minimumOrder": 0,
  "opened": 1,
  "parentId": 631,
  "isNew": false,
  "isVeg": false,
  "favorite": false,
  "multiOutlet": false,
  "restaurantServiceLine": [
    "REGULAR"
  ],
  "sla": {
    "slaString": "27 MINS",
    "restaurantId": "8383",
    "deliveryTime": 27,
    "minDeliveryTime": 25,
    "maxDeliveryTime": 35,
    "lastMileTravel": 2.202,
    "thirtyMinOrFree": false,
    "serviceability": "SERVICEABLE",
    "stressFactor": null,
    "nonServiceableReason": null,
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "batchable": false
  },
  "availability": {
    "nextCloseMessage": null,
    "nextOpenTimeMessage": null,
    "nextOpenMessage": null,
    "nextCloseTime": "2019-04-17 01:00:00",
    "nextOpenTime": null,
    "closedReason": null,
    "closeMessage": null,
    "opened": true
  },
  "labels": [
    {
      "title": "Timings",
      "message": "null"
    },
    {
      "title": "Address",
      "message": "Phase-1, Hinjewadi, Pune 411057"
    },
    {
      "title": "Cuisines",
      "message": "North Indian,Chinese"
    }
  ],
  "feeDetails": {
    "restaurant_id": 8383,
    "fees": [
      {
        "name": "fix",
        "fee": 0,
        "message": ""
      },
      {
        "name": "distance",
        "fee": 0,
        "message": ""
      },
      {
        "name": "time",
        "fee": 0,
        "message": ""
      },
      {
        "name": "special",
        "fee": 0,
        "message": ""
      }
    ],
    "total_fee": 0,
    "message": null,
    "title": "Delivery Charge",
    "amount": "0",
    "icon": null,
    "superUserStrikeOff": null
  },
  "thirdPartyAddress": false,
  "thirdPartyVendor": null,
  "menu": {
    "items": {
      "3603412": {
        "id": 3603412,
        "name": "American Cheese Corn Balls Spy",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603413": {
        "id": 3603413,
        "name": "Veg 65",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603414": {
        "id": 3603414,
        "name": "Veg Crispy",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603415": {
        "id": 3603415,
        "name": "Veg Manchurian",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603416": {
        "id": 3603416,
        "name": "Gobi Manchurian",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603417": {
        "id": 3603417,
        "name": "Crazy Gobi",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603418": {
        "id": 3603418,
        "name": "Gobi Tikka",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603419": {
        "id": 3603419,
        "name": "Corn Tikki",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603420": {
        "id": 3603420,
        "name": "Hara Bhara Kebab",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603421": {
        "id": 3603421,
        "name": "Paneer Tikka",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 13000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034639",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152583",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034639",
                  "order": 999
                },
                {
                  "name": "Full",
                  "price": 9000,
                  "default": 0,
                  "id": "10152584",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034639",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603422": {
        "id": 3603422,
        "name": "Paneer Banjara",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 14000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034641",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152587",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034641",
                  "order": 999
                },
                {
                  "name": "Full",
                  "price": 9000,
                  "default": 0,
                  "id": "10152588",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034641",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603423": {
        "id": 3603423,
        "name": "Paneer Lehsuni Special",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 14000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034642",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152589",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034642",
                  "order": 999
                },
                {
                  "name": "Full",
                  "price": 9000,
                  "default": 0,
                  "id": "10152590",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034642",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603424": {
        "id": 3603424,
        "name": "Paneer Acharya",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 14000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034643",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152591",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034643",
                  "order": 999
                },
                {
                  "name": "Full",
                  "price": 9000,
                  "default": 0,
                  "id": "10152592",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034643",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603425": {
        "id": 3603425,
        "name": "Paneer Angary",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 14000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034645",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152595",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034645",
                  "order": 999
                },
                {
                  "name": "Full",
                  "price": 9000,
                  "default": 0,
                  "id": "10152596",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034645",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603426": {
        "id": 3603426,
        "name": "Paneer Malai Tikka",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 14000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034646",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152597",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034646",
                  "order": 999
                },
                {
                  "name": "Full",
                  "price": 9000,
                  "default": 0,
                  "id": "10152598",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034646",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603427": {
        "id": 3603427,
        "name": "Paneer 65",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 23000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603428": {
        "id": 3603428,
        "name": "Corn Seek Kebab",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 24000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603429": {
        "id": 3603429,
        "name": "Mushroom Chilli",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 22000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603430": {
        "id": 3603430,
        "name": "Gobi Chilli",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 22000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603431": {
        "id": 3603431,
        "name": "Chilli Paneer Special",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034648",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152601",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034648",
                  "order": 999
                },
                {
                  "name": "Full",
                  "price": 10000,
                  "default": 0,
                  "id": "10152602",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034648",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603432": {
        "id": 3603432,
        "name": "Veg Platter",
        "category": "Starters",
        "description": "Aloo tikka (5 pcs), mushroom tikka (5 pcs), gobi tikka (5 pcs), paneer malai tikka (5 pcs), paneer banjara (5 pcs) or paneer angara (5 pcs).",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 60000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603433": {
        "id": 3603433,
        "name": "Tandoori Chicken Special",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 22000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142548",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 15000,
                  "default": 0,
                  "id": "395156",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142548",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395155",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142548",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "MUST TRY",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603434": {
        "id": 3603434,
        "name": "Tangdi Kebab",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 26000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142549",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 14000,
                  "default": 0,
                  "id": "395158",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142549",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395157",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142549",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603435": {
        "id": 3603435,
        "name": "Chicken Manchurian",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 24000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603436": {
        "id": 3603436,
        "name": "Chicken 65",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 24000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603437": {
        "id": 3603437,
        "name": "Chicken Crispy",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 24000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603438": {
        "id": 3603438,
        "name": "Chicken Tikka",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034657",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 9000,
                  "default": 0,
                  "id": "10152620",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034657",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152621",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034657",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603439": {
        "id": 3603439,
        "name": "Chicken Malia Kebab",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034658",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 9000,
                  "default": 0,
                  "id": "10152622",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034658",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152623",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034658",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603440": {
        "id": 3603440,
        "name": "Chicken Reshmi Kebab",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034630",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 9000,
                  "default": 0,
                  "id": "10152565",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034630",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152566",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034630",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603441": {
        "id": 3603441,
        "name": "Chicken Banjara Kebab",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034631",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 9000,
                  "default": 0,
                  "id": "10152567",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034631",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152568",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034631",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603442": {
        "id": 3603442,
        "name": "Chicken Lesufi Kebab",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034632",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 9000,
                  "default": 0,
                  "id": "10152569",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034632",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152570",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034632",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603443": {
        "id": 3603443,
        "name": "Chicken Acharya Kebab",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034633",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 9000,
                  "default": 0,
                  "id": "10152571",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034633",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152572",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034633",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603444": {
        "id": 3603444,
        "name": "Chicken Angary Kebab",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034634",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 9000,
                  "default": 0,
                  "id": "10152573",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034634",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152574",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034634",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603445": {
        "id": 3603445,
        "name": "Chicken Methi Kebab",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034635",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 9000,
                  "default": 0,
                  "id": "10152575",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034635",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152576",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034635",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603446": {
        "id": 3603446,
        "name": "Chicken Pahadi Kebab Special",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 26000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603447": {
        "id": 3603447,
        "name": "Chicken Sholay Kebab",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 26000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603448": {
        "id": 3603448,
        "name": "Special Chicken Nawabi Kebab",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 26000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603449": {
        "id": 3603449,
        "name": "Special Chicken Seek Kebab",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 26000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603450": {
        "id": 3603450,
        "name": "Kalmi Kebab (4 Leg Pcs)",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 34000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603451": {
        "id": 3603451,
        "name": "Chicken Lollipop",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 17000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142550",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 9000,
                  "default": 0,
                  "id": "395160",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142550",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395159",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142550",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603452": {
        "id": 3603452,
        "name": "Mutton Seek Kebab",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 30000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603453": {
        "id": 3603453,
        "name": "Mutton Shammi Kebab Spy",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 30000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603454": {
        "id": 3603454,
        "name": "Fish Tikka",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034637",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152579",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034637",
                  "order": 999
                },
                {
                  "name": "Full",
                  "price": 17000,
                  "default": 0,
                  "id": "10152580",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034637",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603456": {
        "id": 3603456,
        "name": "Fish Lehsuni",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034638",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152581",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034638",
                  "order": 999
                },
                {
                  "name": "Full",
                  "price": 17000,
                  "default": 0,
                  "id": "10152582",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034638",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603457": {
        "id": 3603457,
        "name": "Fish Acharya",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034640",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152585",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034640",
                  "order": 999
                },
                {
                  "name": "Full",
                  "price": 17000,
                  "default": 0,
                  "id": "10152586",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034640",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603458": {
        "id": 3603458,
        "name": "Fish Chilli",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 37000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603459": {
        "id": 3603459,
        "name": "Non Veg Platter",
        "category": "Starters",
        "description": "Chicken tikka (5 pcs), chicken banjara (5 pcs), chicken lehsuni (5 pcs), chicken anjaara (5 pcs), chicken malai tikka (5 pcs).",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 85000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603460": {
        "id": 3603460,
        "name": "Dal Fry",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 14000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603461": {
        "id": 3603461,
        "name": "Dal Tadka",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "BESTSELLER",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603462": {
        "id": 3603462,
        "name": "Special Dal Makhani",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "klsbflcforrow6jbtcv5",
        "recommended": 1,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 16000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "MUST TRY",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603463": {
        "id": 3603463,
        "name": "Rajma",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "ay7lkvv42utsxgoof4ur",
        "recommended": 1,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "MUST TRY",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603464": {
        "id": 3603464,
        "name": "Chole",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "snqnouqfsrre6bomqr6e",
        "recommended": 1,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603465": {
        "id": 3603465,
        "name": "Aloo Jeera",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603466": {
        "id": 3603466,
        "name": "Aloo Gobi",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603467": {
        "id": 3603467,
        "name": "Mattar Gobi",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603468": {
        "id": 3603468,
        "name": "Mattar Aloo",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603469": {
        "id": 3603469,
        "name": "Bhindi Masala",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603470": {
        "id": 3603470,
        "name": "Bhindi Fry",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603471": {
        "id": 3603471,
        "name": "Dum Aloo",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "gt88imibode1tujik8cp",
        "recommended": 1,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603472": {
        "id": 3603472,
        "name": "Green Peas Masala",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603473": {
        "id": 3603473,
        "name": "Veg Kofta",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 19000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603474": {
        "id": 3603474,
        "name": "Malai Kofta",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 19000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "MUST TRY",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603475": {
        "id": 3603475,
        "name": "Mushroom Masala",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 19000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603476": {
        "id": 3603476,
        "name": "Special Mushroom Do Pyaza",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 19000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "MUST TRY",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603477": {
        "id": 3603477,
        "name": "Mushroom Mattar",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 19000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603478": {
        "id": 3603478,
        "name": "Mushroom Takatak",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 19000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603479": {
        "id": 3603479,
        "name": "Shahi Paneer",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603480": {
        "id": 3603480,
        "name": "Butter Paneer",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603481": {
        "id": 3603481,
        "name": "Palak Paneer",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603482": {
        "id": 3603482,
        "name": "Palak Corn",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603483": {
        "id": 3603483,
        "name": "Mattar Paneer",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603484": {
        "id": 3603484,
        "name": "Kadai Paneer",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "ol9xpysnhy42p4yanuxq",
        "recommended": 1,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "BESTSELLER",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603485": {
        "id": 3603485,
        "name": "Paneer Pasanda",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603486": {
        "id": 3603486,
        "name": "Special Paneer Do Pyaza",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603487": {
        "id": 3603487,
        "name": "Paneer Bhurji",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 22000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603488": {
        "id": 3603488,
        "name": "Paneer Mushroom Masala",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 24000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603489": {
        "id": 3603489,
        "name": "Mixed Veg Handi (Special)",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 23000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603490": {
        "id": 3603490,
        "name": "Special Paneer Tikka Masala",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 27000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603491": {
        "id": 3603491,
        "name": "Paneer Patiala",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 28000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603492": {
        "id": 3603492,
        "name": "Veg Kolhapuri",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603493": {
        "id": 3603493,
        "name": "Veg Kadai",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603494": {
        "id": 3603494,
        "name": "Veg Bhuna",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603495": {
        "id": 3603495,
        "name": "Veg Maratha",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603496": {
        "id": 3603496,
        "name": "Methi Mattar Malia",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "uphfpo8yiilyq67jkubd",
        "recommended": 1,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 22000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603497": {
        "id": 3603497,
        "name": "Kadhi Pakora (Special)",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603498": {
        "id": 3603498,
        "name": "Special Butter Chicken",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "hqqpcp1wsvgiky7eubhl",
        "recommended": 1,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 22000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142551",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 27000,
                  "default": 0,
                  "id": "395163",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142551",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 9000,
                  "default": 0,
                  "id": "395162",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142551",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "395161",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142551",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "BESTSELLER",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603499": {
        "id": 3603499,
        "name": "Chicken Masala",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142552",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 25000,
                  "default": 0,
                  "id": "395166",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142552",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 9000,
                  "default": 0,
                  "id": "395165",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142552",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "395164",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142552",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603500": {
        "id": 3603500,
        "name": "Handi Chicken",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142553",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 25000,
                  "default": 0,
                  "id": "395169",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142553",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 9000,
                  "default": 0,
                  "id": "395168",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142553",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "395167",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142553",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603501": {
        "id": 3603501,
        "name": "Kadai Chicken",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142554",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 25000,
                  "default": 0,
                  "id": "395172",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142554",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 9000,
                  "default": 0,
                  "id": "395171",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142554",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "395170",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142554",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603502": {
        "id": 3603502,
        "name": "Mughlai Chicken",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 22000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142555",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 27000,
                  "default": 0,
                  "id": "395174",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142555",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 9000,
                  "default": 0,
                  "id": "395173",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142555",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "395175",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142555",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603503": {
        "id": 3603503,
        "name": "Special Chicken Tikka Masala",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "ffcqc9rxhlahsezct0zx",
        "recommended": 1,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 31000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142556",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 18000,
                  "default": 0,
                  "id": "395177",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142556",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395176",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142556",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603504": {
        "id": 3603504,
        "name": "Chicken Adraki",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142557",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 25000,
                  "default": 0,
                  "id": "395180",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142557",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 9000,
                  "default": 0,
                  "id": "395179",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142557",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "395178",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142557",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603505": {
        "id": 3603505,
        "name": "Chicken Lahori",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142558",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 25000,
                  "default": 0,
                  "id": "395183",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142558",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 9000,
                  "default": 0,
                  "id": "395182",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142558",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "395181",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142558",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603506": {
        "id": 3603506,
        "name": "Chicken Do Pyaza",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142559",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 25000,
                  "default": 0,
                  "id": "395186",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142559",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 9000,
                  "default": 0,
                  "id": "395185",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142559",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "395184",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142559",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603507": {
        "id": 3603507,
        "name": "Cream Chicken",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 31000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142560",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 18000,
                  "default": 0,
                  "id": "395188",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142560",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395187",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142560",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603508": {
        "id": 3603508,
        "name": "Chicken Kolhapuri",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 23000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142561",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 26000,
                  "default": 0,
                  "id": "395190",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142561",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 9000,
                  "default": 0,
                  "id": "395189",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142561",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "10152617",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142561",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603509": {
        "id": 3603509,
        "name": "Special Murgh Musallam",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 39000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603510": {
        "id": 3603510,
        "name": "Schezwan Chicken",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 22000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142562",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 25000,
                  "default": 0,
                  "id": "395193",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142562",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 7000,
                  "default": 0,
                  "id": "395192",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142562",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "395191",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142562",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603511": {
        "id": 3603511,
        "name": "Chilli Chicken (10 Pcs)",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034656",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 14000,
                  "default": 0,
                  "id": "10152618",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034656",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152619",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034656",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603512": {
        "id": 3603512,
        "name": "Mutton Masala",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 25000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142563",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 28000,
                  "default": 0,
                  "id": "395196",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142563",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 9000,
                  "default": 0,
                  "id": "395195",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142563",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "395194",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142563",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603513": {
        "id": 3603513,
        "name": "Mutton Rogan Josh (Special)",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 25000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142564",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 28000,
                  "default": 0,
                  "id": "395199",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142564",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 9000,
                  "default": 0,
                  "id": "395198",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142564",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "395197",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142564",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603514": {
        "id": 3603514,
        "name": "Mutton Do Pyaza",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 25000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142565",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 28000,
                  "default": 0,
                  "id": "395202",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142565",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 9000,
                  "default": 0,
                  "id": "395201",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142565",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "395200",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142565",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603515": {
        "id": 3603515,
        "name": "Mutton Handi",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 25000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142566",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 28000,
                  "default": 0,
                  "id": "395205",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142566",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 9000,
                  "default": 0,
                  "id": "395204",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142566",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "395203",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142566",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603516": {
        "id": 3603516,
        "name": "Mutton Keema",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 25000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142567",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 28000,
                  "default": 0,
                  "id": "395208",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142567",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 9000,
                  "default": 0,
                  "id": "395207",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142567",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "395206",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142567",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603517": {
        "id": 3603517,
        "name": "Mutton Saagwala",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 25000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142568",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 28000,
                  "default": 0,
                  "id": "395211",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142568",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 9000,
                  "default": 0,
                  "id": "395210",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142568",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "395209",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142568",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603518": {
        "id": 3603518,
        "name": "Mutton Seek Kebab Masala Special",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 45000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603519": {
        "id": 3603519,
        "name": "Fish Curry",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 39000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603520": {
        "id": 3603520,
        "name": "Garlic Fish Curry",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 39000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603522": {
        "id": 3603522,
        "name": "Fish Tikka Masala Special",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 39000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603523": {
        "id": 3603523,
        "name": "Veg Biryani",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "ubp0omo4cwkjc4sxotz0",
        "recommended": 1,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 13000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142569",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 5000,
                  "default": 0,
                  "id": "395213",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "142569",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395212",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "142569",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "BESTSELLER",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603524": {
        "id": 3603524,
        "name": "Egg Biryani",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "hnlf16fh96rwqgzld2yh",
        "recommended": 1,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 13000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142570",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 5000,
                  "default": 0,
                  "id": "395215",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142570",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395214",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142570",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "BESTSELLER",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603525": {
        "id": 3603525,
        "name": "Paneer Biryani",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 16000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142571",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 6000,
                  "default": 0,
                  "id": "395217",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "142571",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395216",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "142571",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603526": {
        "id": 3603526,
        "name": "Mushroom Biryani",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 16000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142572",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 6000,
                  "default": 0,
                  "id": "395219",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "142572",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395218",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "142572",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603527": {
        "id": 3603527,
        "name": "Chicken Biryani (Bone)",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 16000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142573",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 7000,
                  "default": 0,
                  "id": "395221",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142573",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395220",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142573",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603528": {
        "id": 3603528,
        "name": "Boneless Chicken Biryani",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142574",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 8000,
                  "default": 0,
                  "id": "395223",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142574",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395222",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142574",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603529": {
        "id": 3603529,
        "name": "Mutton Biryani",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142575",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 10000,
                  "default": 0,
                  "id": "395225",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142575",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395224",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142575",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603530": {
        "id": 3603530,
        "name": "Fish Biryani",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034654",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 13000,
                  "default": 0,
                  "id": "10152613",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034654",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152614",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034654",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603531": {
        "id": 3603531,
        "name": "Veg Dum Biryani (1 Kg)",
        "category": "Main Course",
        "description": "Serves 7 to 8.",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 95000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603532": {
        "id": 3603532,
        "name": "Chicken Dum Biryani (1 Kg)",
        "category": "Main Course",
        "description": "Serves 7 to 8.",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 115000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603533": {
        "id": 3603533,
        "name": "Mutton Dum Biryani (1 Kg)",
        "category": "Main Course",
        "description": "Serves 7 to 8.",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 125000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603534": {
        "id": 3603534,
        "name": "Steamed Rice",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 8000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142576",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 3000,
                  "default": 0,
                  "id": "395227",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "142576",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395226",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "142576",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603535": {
        "id": 3603535,
        "name": "Jeera Rice",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 9000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142577",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 4000,
                  "default": 0,
                  "id": "395229",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "142577",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395228",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "142577",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "BESTSELLER",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603536": {
        "id": 3603536,
        "name": "Veg Pulao",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 17000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603537": {
        "id": 3603537,
        "name": "Dal Khichdi",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "BESTSELLER",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603538": {
        "id": 3603538,
        "name": "Curd Rice",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603539": {
        "id": 3603539,
        "name": "Green Peas Pulao",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 17000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603540": {
        "id": 3603540,
        "name": "Palak Khichdi",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603543": {
        "id": 3603543,
        "name": "Tandoori Roti",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 2200,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603544": {
        "id": 3603544,
        "name": "Missi Roti",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 3500,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603545": {
        "id": 3603545,
        "name": "Rumali Roti",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 5000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603546": {
        "id": 3603546,
        "name": "Butter Tandoori Roti",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "vimetsdjos8b38l0pupm",
        "recommended": 1,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 2400,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603547": {
        "id": 3603547,
        "name": "Tawa Paratha Plain",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 3000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603548": {
        "id": 3603548,
        "name": "Tawa Paratha Butter",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 3200,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603549": {
        "id": 3603549,
        "name": "Laccha Paratha",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "mhp5mnswaysiaqyl1vey",
        "recommended": 1,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 4500,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603550": {
        "id": 3603550,
        "name": "Pudina Paratha",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 4500,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603551": {
        "id": 3603551,
        "name": "Garlic Naan",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 7000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603552": {
        "id": 3603552,
        "name": "Garlic Cheese Naan Special",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 10000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603553": {
        "id": 3603553,
        "name": "Plain Naan",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 4000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603554": {
        "id": 3603554,
        "name": "Butter Naan",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 5000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "BESTSELLER",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603555": {
        "id": 3603555,
        "name": "Cheese Stuffed Naan",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 9000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603556": {
        "id": 3603556,
        "name": "Aloo Stuffed Paratha",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 9000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603557": {
        "id": 3603557,
        "name": "Gobi Stuffed Paratha",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 9000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603558": {
        "id": 3603558,
        "name": "Paneer Stuffed Paratha",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 12000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603559": {
        "id": 3603559,
        "name": "Mixed Veg Paratha",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 11000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603560": {
        "id": 3603560,
        "name": "Veg Fried Rice",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 12000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142578",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 6000,
                  "default": 0,
                  "id": "395231",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "142578",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395230",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "142578",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603561": {
        "id": 3603561,
        "name": "Veg Schezwan Rice",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 13000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142579",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 6000,
                  "default": 0,
                  "id": "395233",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "142579",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395232",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "142579",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603562": {
        "id": 3603562,
        "name": "Veg Triple Schezwan Rice",
        "category": "Main Course",
        "description": "Served with manchurian.",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 24000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603563": {
        "id": 3603563,
        "name": "Egg Fried Rice",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 12000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142580",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 6000,
                  "default": 0,
                  "id": "395235",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142580",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395234",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142580",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603564": {
        "id": 3603564,
        "name": "Egg Schezwan Rice",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 13000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142581",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 6000,
                  "default": 0,
                  "id": "395237",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142581",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395236",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142581",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603565": {
        "id": 3603565,
        "name": "Chicken Fried Rice",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 14000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142582",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 8000,
                  "default": 0,
                  "id": "395239",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142582",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395238",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142582",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603566": {
        "id": 3603566,
        "name": "Chicken Schezwan Rice",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142583",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 8000,
                  "default": 0,
                  "id": "395241",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142583",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395240",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142583",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603567": {
        "id": 3603567,
        "name": "Chicken Triple Schezwan Rice",
        "category": "Main Course",
        "description": "Served with manchurian.",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 27000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603568": {
        "id": 3603568,
        "name": "Veg Hakka Noodles",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 17000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603569": {
        "id": 3603569,
        "name": "Veg Schezwan Noodles",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603570": {
        "id": 3603570,
        "name": "Egg Hakka Noodles",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 17000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603571": {
        "id": 3603571,
        "name": "Egg Schezwan Noodles",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603572": {
        "id": 3603572,
        "name": "Chicken Hakka Noodles",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 19000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603573": {
        "id": 3603573,
        "name": "Chicken Schezwan Noodles",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603574": {
        "id": 3603574,
        "name": "Lassi",
        "category": "Dummy Shop Special",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 6000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603575": {
        "id": 3603575,
        "name": "Butter Milk",
        "category": "Dummy Shop Special",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 6000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603576": {
        "id": 3603576,
        "name": "Chole Bhatoore",
        "category": "Dummy Shop Special",
        "description": "",
        "cloudinaryImageId": "fqfavy6dcdd0u7kksfad",
        "recommended": 1,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "BESTSELLER",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603577": {
        "id": 3603577,
        "name": "Sarson Ka Saag & Makki Ki Roti",
        "category": "Dummy Shop Special",
        "description": "",
        "cloudinaryImageId": "ddf5abhu4qenokirw6yk",
        "recommended": 1,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 24000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603578": {
        "id": 3603578,
        "name": "Veg Deluxe Thali",
        "category": "Thalis",
        "description": "Dal makhani, jeera rice, raita, dry veg, paneer kei sabzi, 3 chapatti, 1 gulab jamun.",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 22000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603579": {
        "id": 3603579,
        "name": "Chicken Thali",
        "category": "Thalis",
        "description": "Butter chicken, dal makhani, jeera rice, raita , 3 butter chapatti, gulab jamun.",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 26000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603580": {
        "id": 3603580,
        "name": "Dal Fry & Chawal (Pre Mixed)",
        "category": "Combos",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603581": {
        "id": 3603581,
        "name": "Dal Makhani & Chawal (Pre Mixed)",
        "category": "Combos",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "MUST TRY",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603582": {
        "id": 3603582,
        "name": "Kadhi & Chawal Special (Pre Mixed)",
        "category": "Combos",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603583": {
        "id": 3603583,
        "name": "Rajma & Chawal (Pre Mixed)",
        "category": "Combos",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603584": {
        "id": 3603584,
        "name": "Chole & Chawal (Pre Mixed)",
        "category": "Combos",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603585": {
        "id": 3603585,
        "name": "Chicken Chawal (Pre Mixed)",
        "category": "Combos",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 23000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603586": {
        "id": 3603586,
        "name": "Mutton Chawal (Pre Mixed)",
        "category": "Combos",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 27000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603587": {
        "id": 3603587,
        "name": "Fish Chawal (Pre Mixed)",
        "category": "Combos",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 29000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603588": {
        "id": 3603588,
        "name": "Green Salad",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 9000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603589": {
        "id": 3603589,
        "name": "Kachumber Salad In Mayo Sauce",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 10000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603590": {
        "id": 3603590,
        "name": "Roasted Papad",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 3000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603591": {
        "id": 3603591,
        "name": "Fry Papad",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 3000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603592": {
        "id": 3603592,
        "name": "Masala Papad",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 5000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603593": {
        "id": 3603593,
        "name": "Veg Raita",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 9000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603594": {
        "id": 3603594,
        "name": "Boondi Raita",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 9000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603595": {
        "id": 3603595,
        "name": "Pineapple Raita",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 11000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603596": {
        "id": 3603596,
        "name": "Gulab Jamun (2 Pcs)",
        "category": "Desserts",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 6000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "MUST TRY",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603597": {
        "id": 3603597,
        "name": "Special Thandi Kheer",
        "category": "Desserts",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 8000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603598": {
        "id": 3603598,
        "name": "Egg Bhurji",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603599": {
        "id": 3603599,
        "name": "Egg Masala",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 16000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603600": {
        "id": 3603600,
        "name": "Egg Do Pyaza",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 16000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603601": {
        "id": 3603601,
        "name": "Afghani Tandoori Chicken (Special)",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 24000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142586",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 18000,
                  "default": 0,
                  "id": "395251",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142586",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "395250",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142586",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603602": {
        "id": 3603602,
        "name": "Veg Sweet Corn Soup",
        "category": "Soups",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 13000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603603": {
        "id": 3603603,
        "name": "Veg Manchow Soup",
        "category": "Soups",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 13000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603604": {
        "id": 3603604,
        "name": "Veg Clear Soup",
        "category": "Soups",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 13000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603605": {
        "id": 3603605,
        "name": "Veg Hot & Sour Soup",
        "category": "Soups",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 13000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603606": {
        "id": 3603606,
        "name": "Tomato Soup",
        "category": "Soups",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603607": {
        "id": 3603607,
        "name": "Chicken Sweet Corn Soup",
        "category": "Soups",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603608": {
        "id": 3603608,
        "name": "Chicken Manchow Soup",
        "category": "Soups",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603609": {
        "id": 3603609,
        "name": "Chicken Clear Soup",
        "category": "Soups",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603610": {
        "id": 3603610,
        "name": "Chicken Hot & Sour Soup",
        "category": "Soups",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603611": {
        "id": 3603611,
        "name": "Paneer Lababdar",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "cslktczddswqqe0cbbyb",
        "recommended": 1,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 28000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603612": {
        "id": 3603612,
        "name": "Dal Palak",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603613": {
        "id": 3603613,
        "name": "Makki Ki Roti",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 4000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603614": {
        "id": 3603614,
        "name": "Bhatoore",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 4000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603615": {
        "id": 3603615,
        "name": "Chicken Keema Naan",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 14000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603616": {
        "id": 3603616,
        "name": "Mutton Keema Naan",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 16000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603617": {
        "id": 3603617,
        "name": "Veg Spring Roll",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "MUST TRY",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603618": {
        "id": 3603618,
        "name": "Chicken Spring Roll",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 24000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603619": {
        "id": 3603619,
        "name": "Tandoori Mushroom (8 Pcs)",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603620": {
        "id": 3603620,
        "name": "Tandoori Aloo",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603621": {
        "id": 3603621,
        "name": "Paneer Manchurian",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 23000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603622": {
        "id": 3603622,
        "name": "Veg Seek Kebab",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 24000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603623": {
        "id": 3603623,
        "name": "Baby Corn Chilli",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 22000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603624": {
        "id": 3603624,
        "name": "Chilli Honey Potato",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603625": {
        "id": 3603625,
        "name": "French Fries",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603626": {
        "id": 3603626,
        "name": "Chicken Nimbu Kebab",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034644",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 9000,
                  "default": 0,
                  "id": "10152593",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034644",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152594",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034644",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603627": {
        "id": 3603627,
        "name": "Chicken Nargisi Kebab",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 24000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603628": {
        "id": 3603628,
        "name": "Mutton Sukha (8 Pcs)",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 35000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603629": {
        "id": 3603629,
        "name": "Egg Chilli",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603630": {
        "id": 3603630,
        "name": "Aloo Methi",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603631": {
        "id": 3603631,
        "name": "Aloo Capsicum",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603632": {
        "id": 3603632,
        "name": "Palak Aloo",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603633": {
        "id": 3603633,
        "name": "Baby Corn Mushroom Masala",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 24000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603634": {
        "id": 3603634,
        "name": "Baby Corn Masala",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603635": {
        "id": 3603635,
        "name": "Sarson Ka Saag",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603636": {
        "id": 3603636,
        "name": "Chicken Keema",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 23000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142587",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 27000,
                  "default": 0,
                  "id": "395254",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142587",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 9000,
                  "default": 0,
                  "id": "395253",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142587",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "395252",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142587",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603637": {
        "id": 3603637,
        "name": "Garlic Chicken",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "142588",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 26000,
                  "default": 0,
                  "id": "395257",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142588",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 8000,
                  "default": 0,
                  "id": "395256",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142588",
                  "order": 998
                },
                {
                  "name": "Quarter",
                  "price": 0,
                  "default": 1,
                  "id": "395255",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "142588",
                  "order": 997
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603638": {
        "id": 3603638,
        "name": "Special Chicken Tikka Biryani",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034655",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full (6 Pcs)",
                  "price": 14000,
                  "default": 0,
                  "id": "10152615",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034655",
                  "order": 999
                },
                {
                  "name": "Half (3 Pcs)",
                  "price": 0,
                  "default": 1,
                  "id": "10152616",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034655",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603639": {
        "id": 3603639,
        "name": "Green Peas Paratha",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 9000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603640": {
        "id": 3603640,
        "name": "Plain Kulcha",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 5000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603641": {
        "id": 3603641,
        "name": "Butter Kulcha",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 6000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603642": {
        "id": 3603642,
        "name": "Stuff Kulcha",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 9000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603643": {
        "id": 3603643,
        "name": "Palak Paneer Paratha",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 12000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603644": {
        "id": 3603644,
        "name": "Veg Burnt Garlic Rice",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 13000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034651",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152607",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034651",
                  "order": 999
                },
                {
                  "name": "Full",
                  "price": 7000,
                  "default": 0,
                  "id": "10152608",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034651",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603645": {
        "id": 3603645,
        "name": "Egg Burnt Garlic Rice",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 13000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034652",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152609",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034652",
                  "order": 999
                },
                {
                  "name": "Full",
                  "price": 7000,
                  "default": 0,
                  "id": "10152610",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034652",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603646": {
        "id": 3603646,
        "name": "Chicken Burnt Garlic Rice",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 16000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034653",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152611",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034653",
                  "order": 999
                },
                {
                  "name": "Full",
                  "price": 8000,
                  "default": 0,
                  "id": "10152612",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034653",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603647": {
        "id": 3603647,
        "name": "Veg Burnt Garlic Noodles",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603648": {
        "id": 3603648,
        "name": "Egg Burnt Garlic Noodles",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 21000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603649": {
        "id": 3603649,
        "name": "Chicken Burnt Garlic Noodles",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 23000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603650": {
        "id": 3603650,
        "name": "Veg Plain Thali",
        "category": "Thalis",
        "description": "Dry Veg, Dal fry, plain rice, roti (2 Pcs), raita.",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 16000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "MUST TRY",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603651": {
        "id": 3603651,
        "name": "Dal Tadka & Chawal (Pre Mixed)",
        "category": "Combos",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603652": {
        "id": 3603652,
        "name": "Veg Noodles & Manchurian",
        "category": "Combos",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "MUST TRY",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603653": {
        "id": 3603653,
        "name": "Chicken Noodles & Manchurian",
        "category": "Combos",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 22000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0,
        "ribbon": {
          "text": "BESTSELLER",
          "textColor": "#ffffff",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#b02331"
        }
      },
      "3603654": {
        "id": 3603654,
        "name": "Gajar Ka Halwa (Seasonal)",
        "category": "Desserts",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 0,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 8000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "outOfStockMessage": "Out of Stock",
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603655": {
        "id": 3603655,
        "name": "Rasgulla",
        "category": "Desserts",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 6000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603656": {
        "id": 3603656,
        "name": "Boiled Egg (2 Pcs)",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 4000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603657": {
        "id": 3603657,
        "name": "Omelette",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 9000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603658": {
        "id": 3603658,
        "name": "Egg Curry",
        "category": "Main Course",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 16000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603659": {
        "id": 3603659,
        "name": "Veg Lemon Coriander Soup",
        "category": "Soups",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603660": {
        "id": 3603660,
        "name": "Cream Of Mushroom Soup",
        "category": "Soups",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603661": {
        "id": 3603661,
        "name": "Mutton Soup",
        "category": "Soups",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 16000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603662": {
        "id": 3603662,
        "name": "Lime Soda",
        "category": "Beverages",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 5000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603663": {
        "id": 3603663,
        "name": "Lime Water",
        "category": "Beverages",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 5000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603664": {
        "id": 3603664,
        "name": "Cold Coffee",
        "category": "Beverages",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 6000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "3603668": {
        "id": 3603668,
        "name": "Mineral Water (1 ltr)",
        "category": "Beverages",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 2000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "4557605": {
        "id": 4557605,
        "name": "Paneer Platter",
        "category": "Starters",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 65000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "4557606": {
        "id": 4557606,
        "name": "Mutton Thali",
        "category": "Thalis",
        "description": "",
        "cloudinaryImageId": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 28000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "33220817": {
        "id": 33220817,
        "name": "Brownie with Ice Cream",
        "category": "Desserts",
        "description": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 13000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "33220818": {
        "id": 33220818,
        "name": "Chicken Chilli (10 Pcs)",
        "category": "Starters",
        "description": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 18000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034636",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Full",
                  "price": 14000,
                  "default": 0,
                  "id": "10152577",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034636",
                  "order": 999
                },
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152578",
                  "inStock": 1,
                  "isVeg": 0,
                  "variant_group_id": "3034636",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "33220819": {
        "id": 33220819,
        "name": "Fish Finger",
        "category": "Starters",
        "description": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 32000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "33220820": {
        "id": 33220820,
        "name": "Prawns Chilli",
        "category": "Starters",
        "description": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 37000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "33220821": {
        "id": 33220821,
        "name": "Butter Garlic Prawns",
        "category": "Starters",
        "description": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 35000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "33220822": {
        "id": 33220822,
        "name": "Masala Soya Chaap",
        "category": "BBQ Soya Chaaps",
        "description": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034647",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152599",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034647",
                  "order": 999
                },
                {
                  "name": "Full",
                  "price": 15000,
                  "default": 0,
                  "id": "10152600",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034647",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "33220823": {
        "id": 33220823,
        "name": "Pudina Soya Chaap",
        "category": "BBQ Soya Chaaps",
        "description": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034649",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152603",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034649",
                  "order": 999
                },
                {
                  "name": "Full",
                  "price": 15000,
                  "default": 0,
                  "id": "10152604",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034649",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "33220824": {
        "id": 33220824,
        "name": "Malai Chaap",
        "category": "BBQ Soya Chaaps",
        "description": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 1,
        "enabled": 1,
        "displayOrder": 0,
        "price": 15000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": [
            {
              "group_id": "3034650",
              "name": "Quantity",
              "variations": [
                {
                  "name": "Half",
                  "price": 0,
                  "default": 1,
                  "id": "10152605",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034650",
                  "order": 999
                },
                {
                  "name": "Full",
                  "price": 15000,
                  "default": 0,
                  "id": "10152606",
                  "inStock": 1,
                  "isVeg": 1,
                  "variant_group_id": "3034650",
                  "order": 998
                }
              ]
            }
          ]
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "33220825": {
        "id": 33220825,
        "name": "Egg Thali",
        "category": "Thalis",
        "description": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 20000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "33220826": {
        "id": 33220826,
        "name": "Prawns Curry (8 Pcs)",
        "category": "Main Course",
        "description": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 39000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      },
      "33220827": {
        "id": 33220827,
        "name": "Special Butter Chicken Biryani",
        "category": "Main Course",
        "description": "",
        "recommended": 0,
        "inStock": 1,
        "isVeg": 0,
        "enabled": 1,
        "displayOrder": 0,
        "price": 32000,
        "variants_new": {
          "exclude_list": [],
          "variant_groups": []
        },
        "cropChoices": 2,
        "itemScore": 0,
        "itemDiscount": 0,
        "isPopular": 0,
        "restId": "8383",
        "showMC": 0
      }
    },
    "widgets": [
      {
        "name": "Recommended",
        "subTitle": "",
        "type": "recommended",
        "imageId": null,
        "entities": [
          {
            "id": 3603463,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": true,
            "showRibbon": false
          },
          {
            "id": 3603464,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": true,
            "showRibbon": false
          },
          {
            "id": 3603471,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": true,
            "showRibbon": false
          },
          {
            "id": 3603484,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": true,
            "showRibbon": false
          },
          {
            "id": 3603496,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": true,
            "showRibbon": false
          },
          {
            "id": 3603611,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": true,
            "showRibbon": false
          },
          {
            "id": 3603498,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": true,
            "showRibbon": false
          },
          {
            "id": 3603503,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": true,
            "showRibbon": false
          },
          {
            "id": 3603462,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": true,
            "showRibbon": false
          },
          {
            "id": 3603523,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": true,
            "showRibbon": false
          },
          {
            "id": 3603524,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": true,
            "showRibbon": false
          },
          {
            "id": 3603546,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": true,
            "showRibbon": false
          },
          {
            "id": 3603549,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": true,
            "showRibbon": false
          },
          {
            "id": 3603576,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": true,
            "showRibbon": false
          },
          {
            "id": 3603577,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": true,
            "showRibbon": false
          }
        ],
        "widgets": null,
        "perRow": 2,
        "collapsible": false
      },
      {
        "name": "Soups",
        "subTitle": "",
        "type": "category",
        "imageId": null,
        "entities": null,
        "widgets": [
          {
            "name": "Veg",
            "subTitle": null,
            "type": "subcategory",
            "imageId": null,
            "entities": [
              {
                "id": 3603602,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603603,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603604,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603605,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603606,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603659,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603660,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              }
            ],
            "widgets": null,
            "perRow": null,
            "collapsible": true
          },
          {
            "name": "Non-Veg",
            "subTitle": null,
            "type": "subcategory",
            "imageId": null,
            "entities": [
              {
                "id": 3603607,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603608,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603609,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603610,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603661,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              }
            ],
            "widgets": null,
            "perRow": null,
            "collapsible": true
          }
        ],
        "perRow": 2,
        "collapsible": false
      },
      {
        "name": "Starters",
        "subTitle": "",
        "type": "category",
        "imageId": null,
        "entities": null,
        "widgets": [
          {
            "name": "Veg",
            "subTitle": null,
            "type": "subcategory",
            "imageId": null,
            "entities": [
              {
                "id": 3603412,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603413,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603414,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603415,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603416,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603417,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603418,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603419,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603420,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603421,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603422,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603423,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603424,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603425,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603426,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603427,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603428,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603429,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603430,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603431,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603617,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603619,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603620,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603621,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603622,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603623,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603624,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603625,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              }
            ],
            "widgets": null,
            "perRow": null,
            "collapsible": true
          },
          {
            "name": "Egg",
            "subTitle": null,
            "type": "subcategory",
            "imageId": null,
            "entities": [
              {
                "id": 3603629,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603656,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603657,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              }
            ],
            "widgets": null,
            "perRow": null,
            "collapsible": true
          },
          {
            "name": "Non-Veg",
            "subTitle": null,
            "type": "subcategory",
            "imageId": null,
            "entities": [
              {
                "id": 3603433,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603434,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603435,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603436,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603437,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603438,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603439,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603440,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603441,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603442,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603443,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603444,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603445,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603446,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603447,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603448,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603449,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603450,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603451,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 33220818,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603452,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603453,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603454,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 33220819,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603456,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603457,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603458,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603601,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603618,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603626,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603627,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603628,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 33220820,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 33220821,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              }
            ],
            "widgets": null,
            "perRow": null,
            "collapsible": true
          },
          {
            "name": "Platter",
            "subTitle": null,
            "type": "subcategory",
            "imageId": null,
            "entities": [
              {
                "id": 3603432,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603459,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 4557605,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              }
            ],
            "widgets": null,
            "perRow": null,
            "collapsible": true
          }
        ],
        "perRow": 2,
        "collapsible": false
      },
      {
        "name": "BBQ Soya Chaaps",
        "subTitle": "",
        "type": "category",
        "imageId": null,
        "entities": [
          {
            "id": 33220822,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          },
          {
            "id": 33220823,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          },
          {
            "id": 33220824,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          }
        ],
        "widgets": null,
        "perRow": 2,
        "collapsible": false
      },
      {
        "name": "Main Course",
        "subTitle": "",
        "type": "category",
        "imageId": null,
        "entities": null,
        "widgets": [
          {
            "name": "Veg Main Course",
            "subTitle": null,
            "type": "subcategory",
            "imageId": null,
            "entities": [
              {
                "id": 3603463,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603464,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603465,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603466,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603467,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603468,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603469,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603470,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603471,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603472,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603473,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603474,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603475,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603476,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603477,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603478,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603479,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603480,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603481,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603482,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603483,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603484,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603485,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603486,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603487,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603488,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603489,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603490,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603491,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603492,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603493,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603494,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603495,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603496,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603497,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603611,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603630,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603631,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603632,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603633,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603634,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603635,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              }
            ],
            "widgets": null,
            "perRow": null,
            "collapsible": true
          },
          {
            "name": "Egg Main Course",
            "subTitle": null,
            "type": "subcategory",
            "imageId": null,
            "entities": [
              {
                "id": 3603598,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603599,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603600,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603658,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              }
            ],
            "widgets": null,
            "perRow": null,
            "collapsible": true
          },
          {
            "name": "Non-Veg Main Course",
            "subTitle": null,
            "type": "subcategory",
            "imageId": null,
            "entities": [
              {
                "id": 3603498,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603499,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603500,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603501,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603502,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603503,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603504,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603505,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603506,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603507,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603508,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603509,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603510,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603511,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603512,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603513,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603514,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603515,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603516,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603517,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603518,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603519,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603520,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 33220826,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603522,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603636,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603637,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              }
            ],
            "widgets": null,
            "perRow": null,
            "collapsible": true
          },
          {
            "name": "Dal",
            "subTitle": null,
            "type": "subcategory",
            "imageId": null,
            "entities": [
              {
                "id": 3603460,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603461,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603462,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603537,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603612,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              }
            ],
            "widgets": null,
            "perRow": null,
            "collapsible": true
          },
          {
            "name": "Biryanis",
            "subTitle": null,
            "type": "subcategory",
            "imageId": null,
            "entities": [
              {
                "id": 3603523,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603524,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603525,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603526,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603527,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603528,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603529,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603530,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603531,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603532,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603533,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 33220827,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603638,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              }
            ],
            "widgets": null,
            "perRow": null,
            "collapsible": true
          },
          {
            "name": "Rice & Indian Breads",
            "subTitle": null,
            "type": "subcategory",
            "imageId": null,
            "entities": [
              {
                "id": 3603534,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603535,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603536,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603538,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603539,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603540,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603543,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603544,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603545,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603546,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603547,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603548,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603549,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603550,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603551,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603552,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603553,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603554,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603555,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603556,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603557,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603558,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603559,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603613,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603614,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603615,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603616,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603639,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603640,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603641,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603642,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603643,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              }
            ],
            "widgets": null,
            "perRow": null,
            "collapsible": true
          },
          {
            "name": "Accompaniments",
            "subTitle": null,
            "type": "subcategory",
            "imageId": null,
            "entities": [
              {
                "id": 3603588,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603589,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603590,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603591,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603592,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603593,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603594,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603595,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              }
            ],
            "widgets": null,
            "perRow": null,
            "collapsible": true
          },
          {
            "name": "Fried Rice & Noodles",
            "subTitle": null,
            "type": "subcategory",
            "imageId": null,
            "entities": [
              {
                "id": 3603560,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603561,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603562,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603563,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603564,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603565,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603566,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603567,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603568,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603569,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603570,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603571,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603572,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603573,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603644,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603645,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603646,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603647,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603648,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603649,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              }
            ],
            "widgets": null,
            "perRow": null,
            "collapsible": true
          }
        ],
        "perRow": 2,
        "collapsible": false
      },
      {
        "name": "Dummy Shop Special",
        "subTitle": "",
        "type": "category",
        "imageId": null,
        "entities": [
          {
            "id": 3603574,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          },
          {
            "id": 3603575,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          },
          {
            "id": 3603576,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          },
          {
            "id": 3603577,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          }
        ],
        "widgets": null,
        "perRow": 2,
        "collapsible": false
      },
      {
        "name": "Thalis",
        "subTitle": "",
        "type": "category",
        "imageId": null,
        "entities": [
          {
            "id": 3603578,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          },
          {
            "id": 3603650,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          },
          {
            "id": 33220825,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          },
          {
            "id": 3603579,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          },
          {
            "id": 4557606,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          }
        ],
        "widgets": null,
        "perRow": 2,
        "collapsible": false
      },
      {
        "name": "Combos",
        "subTitle": "",
        "type": "category",
        "imageId": null,
        "entities": null,
        "widgets": [
          {
            "name": "Veg",
            "subTitle": null,
            "type": "subcategory",
            "imageId": null,
            "entities": [
              {
                "id": 3603580,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603581,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603582,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603583,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603584,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603651,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603652,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              }
            ],
            "widgets": null,
            "perRow": null,
            "collapsible": true
          },
          {
            "name": "Non-Veg",
            "subTitle": null,
            "type": "subcategory",
            "imageId": null,
            "entities": [
              {
                "id": 3603585,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603586,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603587,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              },
              {
                "id": 3603653,
                "name": null,
                "text": null,
                "subText": null,
                "type": "item",
                "imageId": null,
                "showImg": false,
                "showRibbon": false
              }
            ],
            "widgets": null,
            "perRow": null,
            "collapsible": true
          }
        ],
        "perRow": 2,
        "collapsible": false
      },
      {
        "name": "Desserts",
        "subTitle": "",
        "type": "category",
        "imageId": null,
        "entities": [
          {
            "id": 3603596,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          },
          {
            "id": 3603597,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          },
          {
            "id": 3603655,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          },
          {
            "id": 33220817,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          },
          {
            "id": 3603654,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          }
        ],
        "widgets": null,
        "perRow": 2,
        "collapsible": false
      },
      {
        "name": "Beverages",
        "subTitle": "",
        "type": "category",
        "imageId": null,
        "entities": [
          {
            "id": 3603662,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          },
          {
            "id": 3603663,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          },
          {
            "id": 3603664,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          },
          {
            "id": 3603668,
            "name": null,
            "text": null,
            "subText": null,
            "type": "item",
            "imageId": null,
            "showImg": false,
            "showRibbon": false
          }
        ],
        "widgets": null,
        "perRow": 2,
        "collapsible": false
      },
      {
        "name": "Want to repeat?",
        "subTitle": "",
        "type": "reorder",
        "imageId": null,
        "entities": [],
        "widgets": null,
        "perRow": 2,
        "collapsible": false
      }
    ],
    "menuCarousels": null,
    "collectionsV2": null,
    "layoutType": "normal"
  },
  "tags": null,
  "selectedPreOrderSlot": null,
  "similarRestaurantAvailable": null,
  "takeawayInfo": null,
  "experiments": [
    {
      "experimentId": "menu_via_timeline",
      "variantId": "true"
    },
    {
      "experimentId": "MENU_MERCH_AB",
      "variantId": "true"
    }
  ],
  "restaurantAttributes": [],
  "tradeCampaignHeaders": [
    {
      "header": "45% off",
      "description": "45% off on orders above ₹99 on select categories | Use coupon EATIT",
      "shortDescription": "45% off | Use coupon EATIT",
      "minCartAmount": 99,
      "discountType": "Percentage"
    }
  ],
  "aggregatedDiscountInfo": {
    "header": "45% off",
    "shortDescriptionList": [
      {
        "meta": "45% off | Use coupon EATIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
      }
    ],
    "descriptionList": [
      {
        "meta": "45% off on orders above ₹99 on select categories | Use coupon EATIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
      }
    ]
  },
  "restaurantLicenses": [
    {
      "type": "FSSAI",
      "imageId": "fssai_final_edss9i",
      "text": [
        "License No. 11515036000920"
      ]
    }
  ],
  "select": false,
  "cafe": false,
  "preorderable": true,
  "slotInvalid": false
};

let FoodItemSchema = new mongoose.Schema({
  category: String,
  subCategory: String,
  cloudinaryImageId: String,
  description: String,
  displayOrder: String,
  enabled: Boolean,
  id: {
    type: 'String',
    required: true,
    trim: true,
    unique: true
  },
  isPopular: Boolean,
  inStock: Boolean,
  itemDiscount: Number,
  isVeg: Boolean,
  name: {
    type: 'String',
    required: true,
    trim: true,
    unique: true
  },
  price: Number,
  recommended: Boolean,
  quantity: Number,
  restId: {
    type: 'String',
    required: true,
    trim: true,
    unique: true
  },
});

const CATEGORY_LIST = [
  {
    category: 'Recommended',
    collapsed: true,
    subCat: null
  },
  {
    category: 'Main-Course',
    collapsed: false,
    subCat: [
      'Veg',
      'Egg',
      'Non-Veg',
      'Dal',
      'Biyani',
      'Rice-Breads',
      'Fried-Rice-Noodles'
    ]
  },
  {
    category: 'Soups',
    collapsed: true,
    subCat: [
      'Veg',
      'Non-Veg'
    ]
  },
  {
    category: 'Starters',
    collapsed: true,
    subCat: [
      'Veg',
      'Egg',
      'Non-Veg',
      'Platter'
    ]
  },
  {
    category: 'Shop-special',
    collapsed: true,
    subCat: null
  },
  {
    category: 'Thalis',
    collapsed: true,
    subCat: [
      'Veg',
      'Non-Veg'
    ]
  },
  {
    category: 'Combos',
    collapsed: true,
    subCat: [
      'Veg',
      'Non-Veg'
    ]
  },
  {
    category: 'Desserts',
    collapsed: true,
    subCat: null
  },
  {
    category: 'Beverages',
    collapsed: true,
    subCat: null
  }
];
// let FoodItemsListSchema = new mongoose.Schema({
//   items: [FoodItemSchema],
// });


module.exports = {
  shop_data: shop_data,
  CATEGORY_LIST: CATEGORY_LIST,
  FoodItemSchema: mongoose.model('FoodItem', FoodItemSchema)
} 