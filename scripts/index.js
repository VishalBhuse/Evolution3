// Store the wallet amount to your local storage with key "amount"

document.querySelector("#add_to_wallet").addEventListener("click", addtowallet);
  
  
let sum =0;
function addtowallet  (){
  var amoutarr = [0];
  let arr2= JSON.parse(localStorage.getItem("amount")) || amoutarr;
  let amoutn = document.querySelector("#amount").value;

   if(arr2!==undefined)
   {
     arr2[0]=arr2[0]+Number(amoutn)

   } 

  document.querySelector("#wallet").innerHTML = arr2 ;

  localStorage.setItem("amount",JSON.stringify(arr2));

  console.log(arr2)
}


document.querySelector("#book_movies").addEventListener('click',moviesgot);

function moviesgot()
{
  window.location.href = 'movies.html';
}