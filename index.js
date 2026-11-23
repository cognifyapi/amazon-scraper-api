const axios = require("axios");

const API_KEY = process.env.COGNIFY_API_KEY;

if (!API_KEY) {
  throw new Error("Set the COGNIFY_API_KEY environment variable before running this example.");
}

const api = axios.create({
  baseURL: "https://api.cognifyapi.com",
  headers: {
    "x-cognifyapi-key": API_KEY,
  },
});

const requests = [
  {
    name: "Amazon Product Search",
    path: "/amazon-product-search",
    params: {
      product: "laptop",
      domain: "com",
      currency: "USD",
    },
  },
  {
    name: "Amazon Product Search Two",
    path: "/amazon-product-search-two",
    params: {
      product: "laptop",
      domain: "com",
      currency: "USD",
    },
  },
  {
    name: "Amazon Product Details",
    path: "/amazon-product-details",
    params: {
      asin: "B0HGFTXXXM",
      domain: "com",
      currency: "USD",
    },
  },
];

async function runExamples() {
  for (const request of requests) {
    try {
      const response = await api.get(request.path, {
        params: request.params,
      });
      console.log(`${request.name}:`, response.data);
    } catch (error) {
      console.error(
        `${request.name} failed:`,
        error.response?.data || error.message
      );
    }
  }
}

runExamples();
