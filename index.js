function getFirstSelector(selector){
return  document.querySelector(selector)
}

function nestedTarget(){
  nested = document.getElementById("nested").querySelector("div.target")
return  nested
}

function increaseRankBy(n){
  ranks = querySelectorAll(ul.ranked-list li).innerHTML;
  return ranks.map(rank => rank + n)
}

function deepestChild(){

}
