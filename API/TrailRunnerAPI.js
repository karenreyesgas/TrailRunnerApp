export function connectApp (username, password) {
    const url = 'http://localhost:8000/connexion?pseudo='+ username +'&mdp=' + password
    
    return fetch(url)
    .then((response) => console.log(response))
    
    .catch((error) => console.error(error))
    
  }