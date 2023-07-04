
function run(){
var movie_name = document.getElementById("input").value
const url = 'https://streaming-availability.p.rapidapi.com/v2/search/title?title='+movie_name+'&country=us&show_type=movie&output_language=en';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd98a809651msha857f5479c53644p1e168djsn833e37ebc1df',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};

fetch(url,options)
.then(response => response.json())
.then(response => console.log(response))
}
