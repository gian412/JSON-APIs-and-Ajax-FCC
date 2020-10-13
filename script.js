document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("getMessage").onclick = function () {
    let req = new XMLHttpRequest();
    req.open("GET", "www.freecodecamp.org/json/cats.json", true);
    req.send();
    req.onload = function () {
      const json = JSON.parse(req.responseText);
      let html = "";
      // Add your code below this line
      json.forEach(function (val) {
        const keys = Object.keys(val);
        html += "<div class='cat'>";
        keys.forEach(function (key) {
          html += "<strong>" + key + "</strong>: " + val[key] + "<br/>";
        });
        html += "</div><br/>";
      });
    };

    // Same as
    /*fetch("/json/cats.json")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("message").innerHTML = JSON.stringify(data);
      });*/
  };
});
