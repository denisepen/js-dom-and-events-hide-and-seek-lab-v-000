function getFirstSelector(selector){
return  document.querySelector(selector)
}

function nestedTarget(){
  nested = document.getElementById("nested").querySelector("div.target")
return  nested
}

function increaseRankBy(n){
  let ranks = document.getElementById("app").querySelectorAll("ul.ranked-list li")
  //  return ranks.map(rank => rank.innerHTML + n )
  for (let i = 0; i < ranks.length; i++){
    parseInt(ranks[i].innerHTML) += n
  }

}

function deepestChild(){

}
