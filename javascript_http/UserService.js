
// /users.php
const base_url = "http://localhost/corso_php_mysql_2223/form_in_php/rest_api"

// export const ciccio = "aaa"; 

export function getUser() {
    return fetch(base_url+"/users.php").then(response => response.json() ) // PROMESSA JSON
    //console.log("3")
}