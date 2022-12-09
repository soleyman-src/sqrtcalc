function calcSqrt()
{
  //Take the input of user
  let sqrt = document.getElementById("inputUser");
  //Check if the box is void
  if (sqrt.value == null || sqrt.value == "") { document.getElementById("spaceResult").innerHTML = ""; }
  else
  {
    //Calculate the sqrt
    let resultOfSqrt = Math.sqrt(sqrt.value);
    
    //Check if the result is decimal
    if (resultOfSqrt % 1 != 0)
    {
      //Put the result on page
      document.getElementById("spaceResult").innerHTML = resultOfSqrt.toFixed(3);
    }
    else 
    {
      //Put the result on the page without fixed number
      document.getElementById("spaceResult").innerHTML = resultOfSqrt;
    }
  }
}