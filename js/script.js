  var nbrandom = Math.floor(Math.random() * 100) + 1;
  var essais = 1;
  var img = document.getElementById("kot");
  var imgparty = document.getElementById("party");

  console.log("solution: " + nbrandom);

  function handleClick(event) {
    event.preventDefault();

    var number = document.getElementById("numberInput").value;
    var errorMessage = document.getElementById("erreurnbvide");
    var result = document.getElementById("resultat");

    if(number.trim().length == 0 || number > 100 || number < 1){
        result.innerHTML = "";
        errorMessage.innerHTML = "Entrez un nombre entier entre 0 et 100 lol";
        img.src = "img/kot.gif";
        img.style.display = "inline";
        imgparty.style.display = "none";
    }

    else{
        errorMessage.innerHTML = "";
        img.style.display = "none";
        imgparty.style.display = "none";

        if(number == nbrandom){
            errorMessage.innerHTML = "";
            imgparty.src = "img/party.gif";
            imgparty.style.display = "inline";
            result.innerHTML = "Trouvé ! c'était : " + nbrandom + " (trouvé en " + essais + " essais)";
            console.log("%cTrouvé ! c'était : " + nbrandom + "%ctrouvé en " + essais + "%cessais. Entrez un nombre pour une nouvelle partie.");
            essais = 1;
            nbrandom = Math.floor(Math.random() * 100) + 1;
        }

        else if(number > nbrandom){
            errorMessage.innerHTML = "";
            imgparty.style.display = "none";
            result.innerHTML = "Plus petit que : " + number;
            console.log("%cPlus petit que : ", 'color: #bada55' + number);
            essais++;
        }

        else{
            errorMessage.innerHTML = "";
            imgparty.style.display = "none";
            result.innerHTML = "Plus grand que : " + number;
            console.log("%cPlus grand que : ", 'color: #bada55' + number);
            essais++;
        }
    }
  }