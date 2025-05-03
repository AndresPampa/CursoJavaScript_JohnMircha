// Va a guardar todas las variables para consultar la API de wordpress
//https://www.developer.wordpress.org/rest-api/

const NAME = "malvestida",
      DOMAIN = `https://${NAME}.com`,
      SITE = `${DOMAIN}/wp-json`,
      API_WP = `${SITE}/wp/v2`,
      POSTS = `${API_WP}/posts?_embed`,
      POST = `${API_WP}/posts`,
      SEARCH = `${API_WP}/search?_embed&search=`,
      CATEGORIES = `${API_WP}/categories`;

//Si el nombre del parametro es igual al nombre de la variable, 
// no hace falta poner el nombre de la variable, solo el nombre del parametro. Puedo hacer esa simplificacion
export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    POSTS,
    POST,
    SEARCH,
    CATEGORIES
}


//https://www.malvestida.com/wp-json/wp/v2/posts?_embed