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
            "optional": false,
            "field": "accessToken",
            "description": "<p>Access token provided by facebook app (Get one: https://developers.facebook.com/tools/explorer/)</p>"
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
    "type": "get",
    "url": "/api/hotels",
    "title": "Find hotels",
    "group": "Hotels",
    "version": "1.2.2",
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
          "content": "\n/api/hotels?longitude=105.84334749999994&latitude=21.0056183&minDistance=2&maxDistance=5&minPrice=50000&maxPrice=150000&comforts=wifi,condom,nong lanh",
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
            "type": "String[]",
            "optional": false,
            "field": "hotels.comforts",
            "description": "<p>Hotel comforts</p>"
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
            "type": "String[]",
            "optional": false,
            "field": "hotels.photos",
            "description": "<p>Hotel photo-album</p>"
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
            "type": "Number",
            "optional": false,
            "field": "hotels.phoneNumber",
            "description": "<p>Hotel phone-number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hotels.price",
            "description": "<p>Hotel price</p>"
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
            "field": "hotels.__v",
            "description": "<p>Never mind</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hotels.dist",
            "description": "<p>Distance from hotel to user location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"success\": 1,\n  \"message\": \"Fetch hotel infos successfully\",\n  \"hotels\": [\n    {\n      \"_id\": \"5ac744b815944922886ed02a\",\n      \"comforts\": [\n        \"wifi\",\n        \"nong lanh\",\n        \"dieu hoa\",\n        \"condom\"\n      ],\n      \"location\": {\n        \"coordinates\": [\n          105.815985,\n          21.022202\n        ],\n        \"type\": \"Point\"\n      },\n      \"photos\": [\n        \"https://images.foody.vn/res/g14/138986/prof/s576x330/foody-mobile-a2-jpg-261-635682356468932282.jpg\",\n        \"https://static3.mytour.vn/resources/pictures/hotels/19/large_vlj1419841660_khach-san-gia-han.JPG\"\n      ],\n      \"name\": \"Techkids hotel room\",\n      \"address\": \"22 Thành Công\",\n      \"phoneNumber\": 987654321,\n      \"price\": 100000,\n      \"isDisabled\": false,\n      \"__v\": 0,\n      \"dist\": 3390.1099003178488\n    }\n  ]\n}",
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
    "version": "1.2.2",
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
          "content": "\n/api/hotels/5ac745ea15944922886ed02c",
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
            "type": "String[]",
            "optional": false,
            "field": "hotel.comforts",
            "description": "<p>Hotel comforts</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "hotel.photos",
            "description": "<p>Hotel photo-album</p>"
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
            "type": "Number",
            "optional": false,
            "field": "hotel.phoneNumber",
            "description": "<p>Hotel phone-number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hotel.price",
            "description": "<p>Hotel price</p>"
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
            "type": "Number",
            "optional": false,
            "field": "hotel.__v",
            "description": "<p>Never mind</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"success\": 1,\n  \"message\": \"Fetch hotel detail successfully\",\n  \"hotel\": {\n    \"location\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n        105.81534,\n        21.020723\n      ]\n    },\n    \"comforts\": [\n      \"wifi\",\n      \"nong lanh\",\n      \"dieu hoa\",\n      \"condom\"\n    ],\n    \"photos\": [\n      \"https://images.foody.vn/res/g14/138986/prof/s576x330/foody-mobile-a2-jpg-261-635682356468932282.jpg\",\n      \"https://static3.mytour.vn/resources/pictures/hotels/19/large_vlj1419841660_khach-san-gia-han.JPG\"\n    ],\n    \"_id\": \"5ac745ea15944922886ed02c\",\n    \"name\": \"Lẩu Thành Công\",\n    \"address\": \"114 Thành Công\",\n    \"phoneNumber\": 987654321,\n    \"price\": 300000,\n    \"isDisabled\": false,\n    \"__v\": 0\n  }\n}",
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
    "type": "post",
    "url": "/api/hotels",
    "title": "Add new hotel",
    "group": "Hotels",
    "version": "1.2.2",
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
            "type": "Number",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Hotel phone-number</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Hotel price</p>"
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
          "content": "{\n     \"name\" : \"Bún ốc lọ\",\n     \"address\": \"113 B5 Thành Công\",\n     \"phoneNumber\": 987654321,\n     \"price\" : 300000,\n     \"comforts\": [\"wifi\", \"nong lanh\", \"dieu hoa\", \"condom\"],\n     \"location\": {\n       \"type\" : \"Point\",\n       \"coordinates\": [105.814703, 21.021383]\n     },\n     \"photos\" : [\n       \"https://images.foody.vn/res/g14/138986/prof/s576x330/foody-mobile-a2-jpg-261-635682356468932282.jpg\",\n       \"https://static3.mytour.vn/resources/pictures/hotels/19/large_vlj1419841660_khach-san-gia-han.JPG\"\n     ]\n   }",
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
            "description": "<p>Hotel comforts</p>"
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
            "type": "Number",
            "optional": false,
            "field": "savedHotel.phoneNumber",
            "description": "<p>Hotel phone-number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "savedHotel.price",
            "description": "<p>Hotel price</p>"
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
          "content": "HTTP 201 Created\n  {\n    \"success\": 1,\n    \"message\": \"Saved hotel successfully\",\n    \"savedHotel\": {\n      \"comforts\": [ \n        \"wifi\", \n        \"nong lanh\", \n        \"dieu hoa\", \n        \"condom\"\n      ],\n      \"location\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n          105.814703,\n          21.021383\n        ]\n      },\n      \"photos\": [\n        \"https://images.foody.vn/res/g14/138986/prof/s576x330/foody-mobile-a2-jpg-261-635682356468932282.jpg\",\n        \"https://static3.mytour.vn/resources/pictures/hotels/19/large_vlj1419841660_khach-san-gia-han.JPG\"\n      ],\n      \"_id\": \"5ac79851f9a0dd04d40fc841\",\n      \"name\": \"Bún ốc lọ\",\n      \"address\": \"113 B5 Thành Công\",\n      \"phoneNumber\": 987654321,\n      \"price\": 300000,\n      \"isDisabled\": false,\n      \"__v\": 0\n    }\n  }",
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
