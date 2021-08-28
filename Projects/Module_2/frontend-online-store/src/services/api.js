const CATEGORIES = 'https://api.mercadolibre.com/sites/MLB/categories';
const PRODUCTID = 'https://api.mercadolibre.com/sites/MLB/search?category=';

// REQUISITO 1 FEITO POR TODOS VIA PAIR PROGRAMING;

export async function getCategories() {
  const response = await (await fetch(CATEGORIES)).json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (query === '') {
    const responseId = await (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)).json();
    return responseId;
  } if (categoryId === '') {
    const responseCategory = await (await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)).json();
    return responseCategory;
  } const response = await (await fetch(`${PRODUCTID}${categoryId}&q=${query}`)).json();
  return response;
}
