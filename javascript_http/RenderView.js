
// "lista_utenti"
// json  | json.data | ciccio
// UsersList(json)
// UsersList(json.data)
// UsersList(ciccio) 
function UsersList(array_users,element_selector){
     
    const lista = document.getElementById(element_selector)
    const elenco = array_users.map((user)=>{
     
        return "<li>("+user.user_id+")"+user.first_name+" "+user.last_name+"</li>"
    })
    .join("\n")

    lista.innerHTML = elenco
    
}

export { UsersList }