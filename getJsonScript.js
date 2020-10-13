document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("getMessage").onclick = function () {
    const req = new XMLHttpRequest();
    req.open("GET", "https://www.freecodecamp.org/json/cats.json", true);
    req.send();
    req.onload = function () {
      let json = JSON.parse(req.responseText);
      json = json.filter(function (val) {
        return val.id !== 1;
      });
      let html = "";
      json.forEach(function (val) {
        html += "<div class = 'cat'>";
        // Add your code below this line
        html += "<img src='" + val.imageLink + "' alt='" + val.altText + "'>";

        // Add your code above this line
        html += "</div><br>";
      });
      document.getElementsByClassName("message")[0].innerHTML = html;
    };
  };
});
