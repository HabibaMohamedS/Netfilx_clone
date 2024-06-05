var button=document.getElementsByClassName("Questions");
for (var i=0;i<button.length;i++){
    button[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var panel=this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight=null;
        }
        else{
            panel.style.maxHeight=panel.scrollHeight+"px";
            panel.style.padding="0 2rem"
        }
    })
}
const apiKey=0;//add key here 
const baseURL="https://api.themoviedb.org/3";
const imageURL="https://image.tmdb.org/t/p/original/";

const requests={
    fetchTrending:`${baseURL}/trending/all/week?${apiKey}&language=en-US`,
    fetchComedy:`${baseURL}/discover/movie?${apiKey}&with_genres=35`,
    fetchAction:`${baseURL}/discover/movie?${apiKey}&with_genres=28`,
    fetchHorror:`${baseURL}/discover/movie?${apiKey}&with_genres=27`,
    fetchTopRated:`${baseURL}/movie/top_rated?${apiKey}&language=en-US`
}
fetch(requests.fetchComedy)
    .then((res)=>res.json())
    .then((data)=>{
        data.results.forEach(movie => {
            const movieSlidder=document.getElementById("comedyMovies");
            const img=document.createElement("img");
            img.className="row_poster";
            img.src=`${imageURL+ movie.backdrop_path}`;
            img.alt=`${movie.original_title?movie.original_title:movie.name}`;
            movieSlidder.appendChild(img);
            
            
        });
    })
fetch(requests.fetchTrending)
    .then((response)=>response.json())
    .then((data)=>{
        var banner=data.results[Math.floor(Math.random()*data.results.length-1)]
        console.log(banner);
        console.log(banner.overview);
        document.getElementById("banner").innerHTML=banner.original_title?banner.original_title:banner.name;
        document.getElementById("desc").innerHTML=banner.overview.substr(0,50)+" ...";
        document.getElementById("img").style.backgroundImage=`url(${imageURL+banner.backdrop_path})`;
        //document.getElementById("img").style.objectFit=contain;
    })
    function handleMouseWheel(event) {
        this.scrollLeft -= event.deltaY * 30;
        event.preventDefault();
      }
      
      fetch(requests.fetchAction)
      .then((res)=>res.json())
      .then((data)=>{
          data.results.forEach(movie => {
              const movieSlidder=document.getElementById("ActionMovies");
              const img=document.createElement("img");
              img.className="row_poster";
              img.src=`${imageURL+ movie.backdrop_path}`;
              img.alt=`${movie.original_title?movie.original_title:movie.name}`;
              movieSlidder.appendChild(img);
              
              
          });
      })
      fetch(requests.fetchTrending)
    .then((res)=>res.json())
    .then((data)=>{
        data.results.forEach(movie => {
            const movieSlidder=document.getElementById("Trending");
            const img=document.createElement("img");
            img.className="row_poster";
            img.src=`${imageURL+ movie.backdrop_path}`;
            img.alt=`${movie.original_title?movie.original_title:movie.name}`;
            movieSlidder.appendChild(img);
            
            
        });
    })
    fetch(requests.fetchTopRated)
    .then((res)=>res.json())
    .then((data)=>{
        data.results.forEach(movie => {
            const movieSlidder=document.getElementById("topRated");
            const img=document.createElement("img");
            img.className="row_poster";
            img.src=`${imageURL+ movie.backdrop_path}`;
            img.alt=`${movie.original_title?movie.original_title:movie.name}`;
            movieSlidder.appendChild(img);
            
            
        });
    })
    fetch(requests.fetchHorror)
    .then((res)=>res.json())
    .then((data)=>{
        data.results.forEach(movie => {
            const movieSlidder=document.getElementById("horrorMovies");
            const img=document.createElement("img");
            img.className="row_poster";
            img.src=`${imageURL+ movie.backdrop_path}`;
            img.alt=`${movie.original_title?movie.original_title:movie.name}`;
            movieSlidder.appendChild(img);
            
            
        });
    })