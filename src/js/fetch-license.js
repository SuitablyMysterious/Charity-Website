var LICENSE = new XMLHttpRequest();
LICENSE.open("GET", "https://cdn.jsdelivr.net/gh/SuitablyMysterious/RSPCP-Website@main/LICENSE", true);
LICENSE.onreadystatechange = function() {
  if (LICENSE.readyState === 4 && LICENSE.status == 200) {
     allText = LICENSE.responseText;
  }
};
document.getElementById('license-text').innerHTML = allText;