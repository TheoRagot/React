const baseUrl = "https://api.themoviedb.org/3";
const TOKEN = "fe80f644f94403a5b249642d03e85f61";

const apiMethods = {
    getMovies: () => {
        return new Promise((resolve, reject) => {
            fetch(`${baseUrl}/discover/movie?api_key=${TOKEN}`)
            .then(response => response.json())
            .then(json => {
                return resolve(json.results);
            })
            .catch(error => {
                return resolve([]);
            });  
        })
    }
}

export default apiMethods;