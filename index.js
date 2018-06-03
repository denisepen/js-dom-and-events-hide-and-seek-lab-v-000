function getFirstSelector(selector){
return  document.querySelector(selector)
}

function nestedTarget(){
  nested = document.getElementById("nested").querySelector("div.target")
return  nested
}

function increaseRankBy(n){
  let ranks = doument.getElementById("app").querySelectorAll("ul.ranked-list li")
   return ranks.map(rank => rank.innerHTML)
  // for (let i = 0; i < ranks.length; i++){
  // return  ranks[i].innerHTML = (ranks[i].innerHTML) + n
  // }

}

function deepestChild(){

}
