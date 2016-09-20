
function getFirstSelector(selector) {
  return document.querySelector(selector);

}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var listing = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0, l = listing.length; i < l; i++) {
  listing[i].innerHTML = parseInt(listing[i].innerHTML) + n;
 }
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div");
}
