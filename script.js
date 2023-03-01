async function fetchData() {
  const piggys = [
    {
      image: "./assets/mateo.png",
      text: "Help Manu buy a tripod",
    },
    {
      image: "./assets/mateo.png",
      text: "Help Manu buy a tripod",
    },
    {
      image: "./assets/mateo.png",
      text: "Help Manu buy a tripod",
    },
    {
      image: "./assets/mateo.png",
      text: "Help Manu buy a tripod",
    },
  ];

  createPiggysList(piggys);

  document.getElementById("loginButton").addEventListener("click", function () {
    chrome.runtime.sendMessage(
      { message: "get_auth_token" },
      function (response) {
        console.log(response);
      }
    );
  });
}

function hideLoginButton() {}

function createPiggysList(piggys) {
  const cardsContainer = document.getElementById("cardsContainer");
  piggys.forEach((piggy) => {
    var cardInnerStr = "";

    var li = document.createElement("div");
    li.classList.add("card");
    li.classList.add("card-body");

    var imageDiv = document.createElement("div");
    imageDiv.classList.add("image");
    imageDiv.background = `url(${piggy.image})`;
    cardInnerStr += imageDiv.outerHTML;

    var textDiv = document.createElement("div");
    textDiv.classList.add("text");
    textDiv.innerHTML = piggy.text;
    cardInnerStr += textDiv.outerHTML;

    li.innerHTML = cardInnerStr;

    cardsContainer.innerHTML += li.outerHTML;
  });
}

fetchData();
