const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const fetchProducts = async () => {
  const endpoint = process.env.SHOPIFY_ENDPOINT;
  const headers = {
    "X-Shopify-Storefront-Access-Token": accessToken,
    "Content-Type": "application/json",
  };
  const body = {
    query: `
        {
          products(first: 10) {
            edges {
              node {
                title
              }
            }
          }
        }
        `,
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });

  const jsonResponse = await response.json();
  return jsonResponse.data.products.edges;
};

export default fetchProducts();
