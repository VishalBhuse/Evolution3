// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var amoutarr = [0];
    let arr2= JSON.parse(localStorage.getItem("amount")) || amoutarr;
     let shows = document.querySelector("#wallet").innerHTML = arr2 ;
    //  console.log('shows:', shows)


function reads(id)
{
  return document.getElementById(id).value;
}

document.querySelector("#confirm").addEventListener("click", cheks);

function cheks(){

  let username = reads('user_name');
  console.log('username:', username)
  
  let seatno = reads('number_of_seats');
  console.log('seatno:', seatno);

  // let sum = arr2-Number(seatno)
  // console.log('sum:', sum)
  if(arr2[0]/100>=seatno){
    alert('Booking successful!');
    arr2[0]-=seatno*100; 
  }
  else{
    alert('Insufficient Balance!');    
  }
  let shows = document.querySelector("#wallet").innerHTML = arr2 ;
  
  console.log(arr2)
}



const moviearray = JSON.parse(localStorage.getItem("movie")) || [];

moviearray.forEach(function(el)
{
  let div =document.createElement("div");
  let p = document.createElement('p');
  p.innerText = el.Title;
  let imgs  = document.createElement("img");
      imgs.src = el.Poster;

      div.append(p,imgs)

      document.querySelector("#movie").append(div)

})