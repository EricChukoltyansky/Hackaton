const axios = require("axios").default;
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
// const { v4: uuidv4 } = require('uuid');

const CONNECT_PASSWORD = process.env.SUBSCRIPTION_KEY;

var subscriptionKey = `${CONNECT_PASSWORD}`;
var endpoint = "https://api.cognitive.microsofttranslator.com";

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
var location = "global";
console.log(subscriptionKey, CONNECT_PASSWORD);

axios({
  baseURL: endpoint,
  url: "/translate",
  method: "post",
  headers: {
    "Ocp-Apim-Subscription-Key": CONNECT_PASSWORD,
    "Ocp-Apim-Subscription-Region": location,
    "Content-type": "application/json",
  },
  params: {
    "api-version": "3.0",
    from: "en",
    to: ["de", "it"],
  },
  data: [
    {
      text: "Hello World!",
    },
  ],
  responseType: "json",
}).then(function (response) {
  console.log(JSON.stringify(response.data, null, 4));
});
