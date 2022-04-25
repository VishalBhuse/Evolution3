// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

var amoutarr = [0];
    let arr2= JSON.parse(localStorage.getItem("amount")) || amoutarr;
document.querySelector("#wallet").innerHTML = arr2 ;


 async function showmovies(){
         try{

          const q = document.querySelector("#search").value;
          console.log('q:', q)

          const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8fb3c2c0&t&s=${q}`)
          // console.log('res:', res)
          const data = await res.json();
          console.log('data:', data.Search)

          appenddata(data.Search)


         }
         catch(err){
           console.log('err:', err)

         }
  }


  function appenddata(data){

    data.forEach(function (el){
      let div = document.createElement("div");
      let imgs  = document.createElement("img");
      imgs.src = el.Poster;
      let p = document.createElement('p');
      p.innerText= el.Title;

      let but = document.createElement("button");
      but.innerText="Book Now";
      but.setAttribute('class','book_now');
      but.addEventListener('click',function(){
        addtomovie(el);
      })


      div.setAttribute('class','movie_tab');

      div.append(imgs,p,but);

      document.getElementById("movies").append(div);


    })

  }


let id;
 async function debounce()
  {
    if(id){
      clearTimeout(id);
    }
    id  = setTimeout(() => {
      showmovies()
    }, 2000);

  }



  
  const moviearray = JSON.parse(localStorage.getItem("movie")) || [];


  function addtomovie(el)
  {
    console.log(el);
    moviearray.push(el);
    localStorage.setItem('movie',JSON.stringify(moviearray));
    window.location.href="checkout.html";
  }
