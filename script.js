const api_key = "api_key=a1d02482b210f7578e9cf616c7502027";
const BASE_URL = "https://api.themoviedb.org/3/movie/" + api_key;
const search ="https://api.themoviedb.org/3/search/movie?api_key=a1d02482b210f7578e9cf616c7502027&query=";
const opoUrl ="https://api.themoviedb.org/3/movie/popular?api_key=a1d02482b210f7578e9cf616c7502027";
const detail="https://api.themoviedb.org/3/movie/( movie id 1075794)?api_key=a1d02482b210f7578e9cf616c7502027"
let input = document.querySelector("input");
let movieList = document.querySelector("#movielist");
let movieImg = document.querySelectorAll("#movielist img");
let movieDtl=document.querySelector("#movieDtl");
getMovies();
async function getMovies() {
  let response = await fetch(opoUrl);
  let data = await response.json();
  // console.log(data.results);
  img(data.results);

  
}
function img (img) {
  img.forEach((mdata) => {
    let path = mdata.poster_path;
    let imgUrl = `https://image.tmdb.org/t/p/w500${path}/images?${api_key}`;
    let titleName = mdata.original_title;
    let rate=mdata.vote_average;
    let moviePos = document.createElement("div");
    moviePos.innerHTML=`<div class="movies"><img class="movie" src="${imgUrl}" alt="poster"><div class="info"><h2>${titleName}</h2><span><i class="fa-solid fa-star"></i>${rate}</span></div><div id="overview"><h4>Overview</h4><p></p></div></div>`
    movieList.appendChild(moviePos);
    moviePos.style.cursor="pointer"
  });
  };

    input.addEventListener(("input"),()=>{
    let inputvalue=input.value;
    // console.log(inputvalue);
    let element=search+inputvalue;
    console.log(element); 
    async function searchMov(movie){
      let response= await fetch(element);
      let data=await response.json();
      if(inputvalue){
        img(data.results)
      }
    }
    searchMov(); 
  })
   
  

