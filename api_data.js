define({ "api": [
  {
    "type": "get",
    "url": "/api-doc-demo",
    "title": "",
    "name": "Api_demo",
    "group": "Demo",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Demo description</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.success",
            "description": "<p>success state</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.message",
            "description": "<p>success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success message:",
          "content": "{\n  \"success\": 1,\n  \"message\": \"Apidoc testing successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-response:",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Demo"
  }
] });
