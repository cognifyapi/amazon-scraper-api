# Amazon Scraper API by CognifyAPI - Implementation Guide

A guide for integrating the **Amazon Scraper API** an amazon api from [CognifyAPI](https://cognifyapi.com) to search products by ASIN and fetch real-time price, ASIN details, and Buy Box statistics from Amazon Marketplace with JSON results.
#### Free trial. No credit card required.

[![Start Now](https://img.shields.io/badge/Start%20Now-🚀-blue?style=for-the-badge&logo=google-cloud)](https://cognifyapi.com/amazon-data?utm_source=github&utm_medium=repo&utm_campaign=amazon_data_api&utm_content=cta)

---

## 🔗 Official Resources
- **API Documentation:** [Amazon Marketplace API Docs](https://cognifyapi.com/docs/amazon-data-docs)
- **More Info:** [Amazon Marketplace API](https://cognifyapi.com/amazon-data)
- **Official Website:** [CognifyAPI.com](https://cognifyapi.com/)
- **CognifyAPI Studio:** [Get an API key](https://studio.cognifyapi.com/)

## 🛠 Features
- Search products by keyword.
- Use the alternate product-search endpoint.
- Retrieve product details by ASIN.
- Specify the Amazon domain and response currency.

## 📊 Endpoints

| Endpoint | Description | Example parameters | Response example |
| --- | --- | --- | --- |
| `/amazon-product-search` | Search the product catalog. | `product=laptop&domain=com&currency=USD` | [JSON sample](./response/amazon-product-search.json) |
| `/amazon-product-search-two` | Search products with the alternate search endpoint. | `product=laptop&domain=com&currency=USD` | [JSON sample](./response/amazon-product-search-two.json) |
| `/amazon-product-details` | Retrieve a listing by ASIN. | `asin=B0HGFTXXXM&domain=com&currency=USD` | [JSON sample](./response/amazon-product-details.json) |

These are endpoint-specific examples from the saved response fixtures. The product-search fixtures include only two products even though their `result` counts are higher, so they are not complete live result sets.

## 🚀 Getting Started

Base URL: `https://api.cognifyapi.com`

Send your API key in the `x-cognifyapi-key` header. Install Axios with `npm install axios`, set `COGNIFY_API_KEY`, then run [`index.js`](./index.js).

```text
x-cognifyapi-key: YOUR_COGNIFY_API_KEY
```

### Response Preview

```json
{
  "status": "success",
  "query": {
    "product": "laptop",
    "domain": "com",
    "currency": "USD"
  },
  "result": 22,
  "productResults": [
    {
      "asin": "B0HNK4TKN3",
      "title": "15.6 Inch Laptop Computer, N4020, 4GB DDR4 RAM, 128GB eMMC,with Windows 11",
      "price": "$229.99",
      "rating": "4.6",
      "reviews": "2K",
      "imageUrl": "https://m.media-amazon.com/images/I/71ZZSOpY3iL._AC_UY218_.jpg",
      "productLink": "https://www.amazon.com/dp/B0HNK4TKN3"
    }
  ]
}
```
