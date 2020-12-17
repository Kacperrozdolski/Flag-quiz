let random = Math.floor(Math.random() * 4)
randomNumberGenerator = () => {

  
  let firstImg = document.getElementById("0")
  let secondImg = document.getElementById("1")
  let thirdImg = document.getElementById("2")
  let fourthImg = document.getElementById("3")
  let content = document.getElementById("displayInput")

  numbersList = [];

  let randomNumber = Math.floor(Math.random() * 53)
  numbersList.push(randomNumber);

  while (numbersList.length < 4 ){

    while (numbersList.includes(randomNumber)){
      randomNumber = Math.floor(Math.random() * 53)
    }
    numbersList.push(randomNumber);
  }
  let url = 'https://restcountries.eu/rest/v2/region/europe';



  fetch(url)
  .then(res => res.json())
  .then((out) => {
    
  content.innerText = out[numbersList[random]].name
  firstImg.attributes.src.nodeValue = out[numbersList[0]].flag
  secondImg.attributes.src.nodeValue = out[numbersList[1]].flag
  thirdImg.attributes.src.nodeValue = out[numbersList[2]].flag
  fourthImg.attributes.src.nodeValue = out[numbersList[3]].flag

})
}





document.querySelectorAll("img").forEach(item => {
  item.addEventListener('click', event => {
    let a = random.toString()
    if (item.attributes.id.value == a) {
      random =  Math.floor(Math.random() * 4)
      randomNumberGenerator()
    }
  })
})

randomNumberGenerator()