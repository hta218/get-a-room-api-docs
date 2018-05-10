define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/facebook",
    "title": "Login with Facebook",
    "group": "Authentication",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"https://developers.facebook.com/tools/explorer/\""
            ],
            "optional": false,
            "field": "accessToken",
            "description": "<p>Access token provided by facebook app</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request body",
          "content": "{\n       \"accessToken\" : \"EAAKyZChws4ZCMBAM93wRNZBBGZCKD3drDU6DK4GH9VepZCkFqi7D0PQf0yx3tAVOwLcT2vmeMDdLnmDDGFloTfwMcCoZCdJC60hoEQTYFAcbJn2AUFECiC75AeiSaEz01fRgrt5yi89ZAbSQu6L9ZAZBNZB8W0XsWAOvYy6tpsZB2o4aSQlc8uLoAvT\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "success",
            "description": "<p>Success-state</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Api-message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Token signed by user-infor + fb-token + access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 200 OK\n{\n       \"success\": 1,\n       \"message\": \"Logged in successfully\",\n       \"accessToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWM1ZjU5NWMxN2YxMTE1ZmM0MmI3MGQiLCJmaXJzdE5hbWUiOiJUdeG6pW4gQW5oIiwibGFzdE5hbWUiOiJIdeG7s25oIiwicm9sZSI6IkNVU1RPTUVSIiwiaWF0IjoxNTIzMDA1NDA4LCJleHAiOjE1MjM2MTAyMDh9.UCvbrD710Rr-yBEnr4P21nXVC1vvvsnqsIZuN8Kun5U\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "AccessToken not provided",
          "content": "HTTP 400 Bad Request \"You must provide accessToken\"",
          "type": "json"
        },
        {
          "title": "Access token invalid",
          "content": "HTTP 400 Bad Request \"Authentication problem\"",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/auth/fb.js",
    "groupTitle": "Authentication",
    "name": "PostApiAuthFacebook"
  },
  {
    "type": "post",
    "url": "/api/auth/google",
    "title": "Login with Google",
    "group": "Authentication",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"https://developers.facebook.com/tools/explorer/\""
            ],
            "optional": false,
            "field": "accessToken",
            "description": "<p>Access token provided by google app</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request body",
          "content": "{\n       \"accessToken\" : \"EAAKyZChws4ZCMBAM93wRNZBBGZCKD3drDU6DK4GH9VepZCkFqi7D0PQf0yx3tAVOwLcT2vmeMDdLnmDDGFloTfwMcCoZCdJC60hoEQTYFAcbJn2AUFECiC75AeiSaEz01fRgrt5yi89ZAbSQu6L9ZAZBNZB8W0XsWAOvYy6tpsZB2o4aSQlc8uLoAvT\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "success",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Request message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Token signed by user-infor + gg-token + access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 200 OK\n{\n       \"success\": 1,\n       \"message\": \"Logged in successfully\",\n       \"accessToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWM1ZjU5NWMxN2YxMTE1ZmM0MmI3MGQiLCJmaXJzdE5hbWUiOiJUdeG6pW4gQW5oIiwibGFzdE5hbWUiOiJIdeG7s25oIiwicm9sZSI6IkNVU1RPTUVSIiwiaWF0IjoxNTIzMDA1NDA4LCJleHAiOjE1MjM2MTAyMDh9.UCvbrD710Rr-yBEnr4P21nXVC1vvvsnqsIZuN8Kun5U\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "AccessToken not provided",
          "content": "HTTP 400 Bad Request \"You must provide accessToken\"",
          "type": "json"
        },
        {
          "title": "Access token invalid",
          "content": "HTTP 400 Bad Request \"Authentication problem\"",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/auth/gg.js",
    "groupTitle": "Authentication",
    "name": "PostApiAuthGoogle"
  },
  {
    "type": "get",
    "url": "/api/hotels",
    "title": "Find hotels",
    "group": "Hotels",
    "version": "1.4.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Request header content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token of user after logged in</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>User's longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>User's latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"km\""
            ],
            "optional": true,
            "field": "minDistance",
            "description": "<p>Min distance from user location to a hotel</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"km\""
            ],
            "optional": true,
            "field": "maxDistance",
            "description": "<p>Max distance from user location to a hotel</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "minPrice",
            "description": "<p>Min price of a hotel that user looking for</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "maxPrice",
            "description": "<p>Max price of a hotel that user looking for</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "priceType",
            "description": "<p>Type of hotel price that user want to find <br> <code>0</code> Find by <b>overnight</b> price  <br> <code>1</code> Find by <b>hourly</b> price  <br> <b>Default value: </b> <code>0</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sortType",
            "description": "<p>Sort type: <br> <code>0</code> Sort by <b>distance</b>  <br> <code>1</code> Sort by <b>price</b>   <br> <code>2</code> Sort by <b>average review point</b> <br> <b>Default value: </b> <code>0</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comforts",
            "description": "<p>Hotel's comfort that user need, <b>SEPERATED</b> by a <code>,</code> (Better in unicode n lower case)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request query example:",
          "content": "\n/api/hotels?longitude=105.84334749999994&latitude=21.0056183&minDistance=2&maxDistance=3&minPrice=90000&maxPrice=150000&priceType=0&comforts=wifi,condom,nong lanh&sortType=1",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "success",
            "description": "<p>Response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "hotels",
            "description": "<p>All hotels that meet the user's requirements</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotels._id",
            "description": "<p>Hotel's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotels.name",
            "description": "<p>Hotel name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotels.address",
            "description": "<p>Hotel address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotels.phoneNumber",
            "description": "<p>Hotel phone-number</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "hotels.prices",
            "description": "<p>Hotel prices</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hotels.prices.hour",
            "description": "<p>Hotel price by hour</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hotels.prices.overnight",
            "description": "<p>Hotel price by overnight</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "hotels.comforts",
            "description": "<p>Hotel comforts</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "hotels.location",
            "description": "<p>Hotel location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotels.location.type",
            "description": "<p>Hotel location type</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "hotels.location.coordinates",
            "description": "<p>Hotel location coordinates</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hotels.isDisabled",
            "description": "<p>Whether that hotel is still working in app</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hotels.dist",
            "description": "<p>Distance from hotel to user location in <code>&quot;m&quot;</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hotels.avgReview",
            "description": "<p>Avarage Review point of hotel</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"success\": 1,\n  \"message\": \"Fetch hotel infos successfully\",\n  \"hotels\": [\n    {\n      \"_id\": \"5add9cfa683a25154041c65f\",\n      \"name\": \"Chien Hostel\",\n      \"address\": \"12&14 Ấu Triệu, Hàng Trống, Quận Hoàn Kiếm, Hà Nội\",\n      \"phoneNumber\": \"024 3932 9329\",\n      \"prices\": {\n        \"hour\": 100000,\n        \"overnight\": 102000\n      },\n      \"comforts\": [\n        \"Wifi\",\n        \"Nhà hàng\",\n        \"Giặt ủi\"\n      ],\n      \"location\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n          105.849023,\n          21.029078\n        ]\n      },\n      \"isDisabled\": false,\n      \"dist\": 2677.2713959975576,\n      \"avgReview\": 3.8\n    }\n  ]\n}",
          "type": "type"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Invalid or outdated access token",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Get error",
          "content": "HTTP 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/hotel/index.js",
    "groupTitle": "Hotels",
    "name": "GetApiHotels"
  },
  {
    "type": "get",
    "url": "/api/hotels/:id",
    "title": "Get a hotel details",
    "group": "Hotels",
    "version": "1.4.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Request header content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token of user after logged in</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Hotel's id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request query example:",
          "content": "\n/api/hotels/5add9cfa683a25154041c65f",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "success",
            "description": "<p>Response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "hotel",
            "description": "<p>Hotel information</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "hotel.reviews",
            "description": "<p><code>10 latest</code> hotel reviews</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotel.reviews._id",
            "description": "<p>Hotel's review id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "hotel.reviews.date",
            "description": "<p>Hotel's review id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hotel.reviews.point",
            "description": "<p>Hotel's review point</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotel.reviews.comment",
            "description": "<p>Hotel's review comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "hotel.reviews.user",
            "description": "<p>Hotel's review user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotel.reviews.user._id",
            "description": "<p>Hotel's review user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotel.reviews.user.name",
            "description": "<p>Hotel's review user name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotel._id",
            "description": "<p>Hotel's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotel.name",
            "description": "<p>Hotel name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotel.address",
            "description": "<p>Hotel address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotel.phoneNumber",
            "description": "<p>Hotel phone-number</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "hotel.prices",
            "description": "<p>Hotel prices</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hotel.prices.hour",
            "description": "<p>Hotel price by hour</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hotel.prices.overnight",
            "description": "<p>Hotel price by overnight</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "hotel.comforts",
            "description": "<p>Hotel comforts</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "hotel.location",
            "description": "<p>Hotel location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotel.location.type",
            "description": "<p>Hotel location type</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "hotel.location.coordinates",
            "description": "<p>Hotel location coordinates</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hotel.avgReview",
            "description": "<p>Avarage Review point of hotel</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hotel.isDisabled",
            "description": "<p>Whether that hotel is still working in app</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "hotel.photos",
            "description": "<p>All hotel photos link</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "hotel.userReview",
            "description": "<p>Review of the current user to this hotel</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotel.userReview._id",
            "description": "<p>Review's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotel.userReview.user",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotel.userReview.hotel",
            "description": "<p>Hotel's id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "hotel.userReview.date",
            "description": "<p>Review's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hotel.userReview.point",
            "description": "<p>Review's point'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotel.userReview.comment",
            "description": "<p>Review's comment'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"success\": 1,\n  \"message\": \"Fetch hotel detail successfully\",\n  \"hotel\": {\n    \"reviews\": [\n      {\n        \"_id\": \"5aded60c0e16180160f76a4d\",\n        \"date\": \"2018-04-24T07:00:28.679Z\",\n        \"point\": 5,\n        \"comment\": \"Nhân viên phục vụ hết sức chu đáo\",\n        \"user\": {\n          \"_id\": \"5ad2d96013780f9b556f0a6e\",\n          \"name\": \"Vũ Kiên\"\n        }\n      }\n    ]\n    \"_id\": \"5add9cfa683a25154041c65f\",\n    \"name\": \"Chien Hostel\",\n    \"address\": \"12&14 Ấu Triệu, Hàng Trống, Quận Hoàn Kiếm, Hà Nội\",\n    \"phoneNumber\": \"024 3932 9329\",\n    \"prices\": {\n      \"hour\": 100000,\n      \"overnight\": 393000\n    },\n    \"comforts\": [\n      \"Wifi\",\n      \"Nhà hàng\",\n      \"Giặt ủi\"\n    ],\n    \"location\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        105.849023,\n        21.029078\n      ]\n    },\n    \"isDisabled\": false,\n    \"photos\": [\n      \"localhost:5000/api/hotels/5add9cfa683a25154041c65f/photos/0\",\n      \"localhost:5000/api/hotels/5add9cfa683a25154041c65f/photos/1\",\n      \"localhost:5000/api/hotels/5add9cfa683a25154041c65f/photos/2\",\n      \"localhost:5000/api/hotels/5add9cfa683a25154041c65f/photos/3\",\n      \"localhost:5000/api/hotels/5add9cfa683a25154041c65f/photos/4\"\n    ],\n    \"userReview\": {\n      \"_id\": \"5addd66f90e89f23d042bf2f\",\n      \"user\": \"5ac5f595c17f1115fc42b70d\",\n      \"hotel\": \"5add9cbe683a25154041c63e\",\n      \"date\": \"2018-04-23T12:49:51.248Z\",\n      \"point\": 9,\n      \"comment\": \"Nhân viên phục vụ hết sức chu đáo\",\n      \"__v\": 0\n    }\n  }\n}",
          "type": "type"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Invalid or outdated access token",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Get error",
          "content": "HTTP 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/hotel/index.js",
    "groupTitle": "Hotels",
    "name": "GetApiHotelsId"
  },
  {
    "type": "get",
    "url": "/api/hotels/:id/photos/:photoNo",
    "title": "Get hotel photo",
    "group": "Hotels",
    "version": "1.4.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Hotel's id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photoNo",
            "description": "<p>Hotel photo index in it's album</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request query example:",
          "content": "/api/hotels/5add9cfa683a25154041c65f/photos/4",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "Photo",
            "description": "<p>Hotel photo</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Invalid or outdated access token",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Photo not found",
          "content": "HTTP 404 Photo no is greater than total hotel's photo",
          "type": "json"
        },
        {
          "title": "Get error",
          "content": "HTTP 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/hotel/index.js",
    "groupTitle": "Hotels",
    "name": "GetApiHotelsIdPhotosPhotono"
  },
  {
    "type": "post",
    "url": "/api/hotels",
    "title": "Add new hotel",
    "group": "Hotels",
    "version": "1.4.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Request header content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token of user after logged in</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Hotel name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Hotel address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Hotel phone-number</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "prices",
            "description": "<p>Hotel price</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "prices.hour",
            "description": "<p>Hotel price by hourly</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "prices.overnight",
            "description": "<p>Hotel price by overnight</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "comforts",
            "description": "<p>Hotel comforts. Must be a unicode text and in lower case. Ex: wifi, condom, nong lanh, dieu hoa...</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Hotel location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location.type",
            "description": "<p>type=&quot;Point&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "location.coordinates",
            "description": "<p><b>IMPORTANT: </b> longitude first then lattitude</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "photos",
            "description": "<p>Hotel photos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request body",
          "content": "{\n     \"name\" : \"Bún ốc lọ\",\n     \"address\": \"113 B5 Thành Công\",\n     \"phoneNumber\": 987654321,\n     \"prices\" : {\n       \"hour\" : 50000,\n       \"overnight\": 350000\n     },\n     \"comforts\": [\"wifi\", \"nong lanh\", \"dieu hoa\", \"condom\"],\n     \"location\": {\n       \"type\" : \"Point\",\n       \"coordinates\": [105.814703, 21.021383]\n     },\n     \"photos\" : [\n       \"https://images.foody.vn/res/g14/138986/prof/s576x330/foody-mobile-a2-jpg-261-635682356468932282.jpg\",\n       \"https://static3.mytour.vn/resources/pictures/hotels/19/large_vlj1419841660_khach-san-gia-han.JPG\"\n     ]\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "success",
            "description": "<p>Create status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "savedHotel",
            "description": "<p>Saved hotel</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "savedHotel.comforts",
            "description": "<p>Hotel comforts in VNese</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "savedHotel.formattedComforts",
            "description": "<p>Hotel comforts in unicode (for searching)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "savedHotel.location",
            "description": "<p>Hotel location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "savedHotel.location.type",
            "description": "<p>Hotel location type</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "savedHotel.coordinates",
            "description": "<p>Hotel location coordinates</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "savedHotel.photos",
            "description": "<p>Hotel photo-album</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "savedHotel._id",
            "description": "<p>Hotel id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "savedHotel.name",
            "description": "<p>Hotel name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "savedHotel.address",
            "description": "<p>Hotel address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "savedHotel.phoneNumber",
            "description": "<p>Hotel phone-number</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "savedHotel.price",
            "description": "<p>Hotel prices</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "savedHotel.price.hour",
            "description": "<p>Hotel price by hourly</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "savedHotel.price.overnight",
            "description": "<p>Hotel price by overnight</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "savedHotel.isDisabled",
            "defaultValue": "false",
            "description": "<p>Whether that hotel is still working in app</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "savedHotel.__v",
            "description": "<p>Never mind</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Saved successfully:",
          "content": "HTTP 201 Created\n  {\n    \"success\": 1,\n    \"message\": \"Saved hotel successfully\",\n    \"savedHotel\": {\n      \"prices\": {\n        \"hour\": 50000,\n        \"overnight\": 350000\n      },\n      \"comforts\": [\n        \"wifi\",\n        \"Nóng lạnh\",\n        \"Điều hòa\",\n        \"Condom\"\n      ],\n      \"formattedComforts\": [\n        \"wifi\",\n        \"nong lanh\",\n        \"dieu hoa\",\n        \"condom\"\n      ],\n      \"location\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n          105.814703,\n          21.021383\n        ]\n      },\n      \"photos\": [\n        \"https://images.foody.vn/res/g14/138986/prof/s576x330/foody-mobile-a2-jpg-261-635682356468932282.jpg\",\n        \"https://static3.mytour.vn/resources/pictures/hotels/19/large_vlj1419841660_khach-san-gia-han.JPG\"\n      ],\n      \"_id\": \"5addb30721760b1e9cf23043\",\n      \"name\": \"Bún ốc lọ\",\n      \"address\": \"113 B5 Thành Công\",\n      \"phoneNumber\": \"0987654321\",\n      \"isDisabled\": false,\n      \"__v\": 0\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Invalid or outdated access token",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Save error",
          "content": "HTTP 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/hotel/index.js",
    "groupTitle": "Hotels",
    "name": "PostApiHotels"
  },
  {
    "type": "delete",
    "url": "/api/reviews/:id",
    "title": "Delete review",
    "group": "Reviews",
    "version": "1.4.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Review's id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request query example:",
          "content": "/api/reviews/5addedf25301382c5061da01",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "success",
            "description": "<p>Response status</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "deletedReview",
            "description": "<p>Deleted review</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"success\": 0,\n      \"message\": \"Delete review fail\",\n      \"deletedReview\": {}\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Invalid or outdated access token",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Get error",
          "content": "HTTP 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/review.js",
    "groupTitle": "Reviews",
    "name": "DeleteApiReviewsId"
  },
  {
    "type": "get",
    "url": "/api/reviews/:id",
    "title": "Get review's detail",
    "group": "Reviews",
    "version": "1.4.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Request header content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token of user after logged in</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Review's id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request query example:",
          "content": "/api/reviews/5aded60c0e16180160f76a4d",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "success",
            "description": "<p>Response status</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Response dummy data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Review's id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.user",
            "description": "<p>Review's user-id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.hotel",
            "description": "<p>Review's hotel-id</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "data.date",
            "description": "<p>Review's date</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.point",
            "description": "<p>Review's point</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.comment",
            "description": "<p>Review's comment</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.__v",
            "description": "<p>Never mind</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"success\": 1,\n        \"message\": \"Loaded\",\n        \"data\": {\n            \"_id\": \"5aded60c0e16180160f76a4d\",\n            \"user\": \"5ad2d96013780f9b556f0a6e\",\n            \"hotel\": \"5add9cfa683a25154041c65f\",\n            \"date\": \"2018-04-24T07:00:28.679Z\",\n            \"point\": 5,\n            \"comment\": \"Nhân viên phục vụ hết sức chu đáo\",\n            \"__v\": 0\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Invalid or outdated access token",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Get error",
          "content": "HTTP 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/review.js",
    "groupTitle": "Reviews",
    "name": "GetApiReviewsId"
  },
  {
    "type": "patch",
    "url": "/api/reviews/:id",
    "title": "Update review",
    "group": "Reviews",
    "version": "1.4.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "point",
            "description": "<p>Review's point</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>Review's comment</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Review updated date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request body:",
          "content": " {   \n        \"date\": \"2018-04-23T14:30:22.388Z\",\n        \"point\": 3,\n\t    \"comment\": \"Nhân viên phục vụ kém\"\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "success",
            "description": "<p>Response status</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Response dummy data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Review's id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.user",
            "description": "<p>Review's user-id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.hotel",
            "description": "<p>Review's hotel-id</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "data.date",
            "description": "<p>Review's date</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.point",
            "description": "<p>Review's point</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.comment",
            "description": "<p>Review's comment</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.__v",
            "description": "<p>Never mind</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": 1,\n    \"message\": \"Updated hotel review\",\n    \"updatedReview\": {\n        \"_id\": \"5af2d0934fd9d23204c5ae0e\",\n        \"date\": \"2018-05-09T10:56:39.139Z\",\n        \"point\": 2,\n        \"comment\": \"Nhân viên phục vụ kém\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Review not found",
          "content": "HTTP 400",
          "type": "json"
        },
        {
          "title": "Invalid or outdated access token",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Get error",
          "content": "HTTP 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/review.js",
    "groupTitle": "Reviews",
    "name": "PatchApiReviewsId"
  },
  {
    "type": "post",
    "url": "/api/reviews",
    "title": "Create new review",
    "group": "Reviews",
    "version": "1.4.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hotel",
            "description": "<p>Hotel's id</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Review date</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "point",
            "description": "<p>Review's point</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Review's comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request body:",
          "content": "{\n       \"hotel\": \"5add9c9f683a25154041c628\",\n       \"date\": \"2018-04-24T07:18:14.353Z\",\n       \"point\": 5,\n       \"comment\": \"Thiếu ba con sói\"\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "success",
            "description": "<p>Response status</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Response dummy data</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Review's id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.user",
            "description": "<p>Review's user-id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.hotel",
            "description": "<p>Review's hotel-id</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "data.date",
            "description": "<p>Review's date</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.point",
            "description": "<p>Review's point</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.comment",
            "description": "<p>Review's comment</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.__v",
            "description": "<p>Never mind</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": 1,\n    \"message\": \"Review created\",\n    \"data\": {\n        \"_id\": \"5af2d0934fd9d23204c5ae0e\",\n        \"date\": \"2018-04-24T07:18:14.353Z\",\n        \"point\": 5,\n        \"comment\": \"Thiếu ba con sói\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Invalid or outdated access token",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Get error",
          "content": "HTTP 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/review.js",
    "groupTitle": "Reviews",
    "name": "PostApiReviews"
  },
  {
    "type": "get",
    "url": "/api/dummy",
    "title": "Dummy test",
    "group": "TESTING",
    "version": "1.1.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "success",
            "description": "<p>Response status</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Response dummy data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"success\": 1,\n        \"message\": \"Loaded\",\n        \"data\": [\n            {\n                \"_id\": \"5abcd8c66cfe620b2c158e67\",\n                \"title\": \"Hello\",\n                \"content\": \"World\",\n                \"__v\": 0\n            },\n            {\n                \"_id\": \"5ac5da2a1b9efa2e98e18f01\",\n                \"__v\": 0\n            },\n            {\n                \"_id\": \"5ac5fe00fdf30d1e78992550\",\n                \"__v\": 0\n            },\n            {\n                \"_id\": \"5ac5fe04fdf30d1e78992551\",\n                \"__v\": 0\n            },\n            {\n                \"_id\": \"5ac5fe16fdf30d1e78992552\",\n                \"__v\": 0\n            }\n        ]\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/dummy/index.js",
    "groupTitle": "TESTING",
    "name": "GetApiDummy"
  }
] });
