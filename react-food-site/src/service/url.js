const SERVER_URL = "https://api.spoonacular.com";

const apiKey = "6cf2a91131ab45f88a0571af268be127";
const recipesUrl = "/recipes/random";

const recipesCompleSearchUrl = "/recipes/complexSearch";
const recipesInformationUrl = (id) => `/recipes/${id}/information`;

const generateUrl = (url, params = []) => {
  const urlServerWithAuth = `${SERVER_URL}${url}?apiKey=${apiKey}`;

  if (params && params.length > 0) {
    let paramsUrl = new URLSearchParams();
    params.forEach((p) => {
      paramsUrl.append(p.key, p.value);
    });
    return urlServerWithAuth + `&${paramsUrl.toString()}`;
  }

  return urlServerWithAuth;
};

export {
  SERVER_URL,
  recipesUrl,
  generateUrl,
  recipesCompleSearchUrl,
  recipesInformationUrl,
};
