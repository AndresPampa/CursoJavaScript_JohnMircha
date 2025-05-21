// Va a guardar todas las variables para consultar la API de wordpress
//https://www.developer.wordpress.org/rest-api/

const NAME = "malvestida",
      DOMAIN = `https://${NAME}.com`,
      SITE = `${DOMAIN}/wp-json`,
      API_WP = `${SITE}/wp/v2`,
      PER_PAGE = 10,
      POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`,//Indecarle cuantas paginas quiero que me devuelva
      POST = `${API_WP}/posts`,
      SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;
    //   CATEGORIES = `${API_WP}/categories`;

let page = 1;

//Si el nombre del parametro es igual al nombre de la variable, 
// no hace falta poner el nombre de la variable, solo el nombre del parametro. Puedo hacer esa simplificacion
export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    PER_PAGE,
    POSTS,
    POST,
    SEARCH,
    page,
    // CATEGORIES
}


//https://www.malvestida.com/wp-json/wp/v2/posts?_embed