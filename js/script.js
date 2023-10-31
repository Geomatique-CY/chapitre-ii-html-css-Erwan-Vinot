  var nbrandom = Math.floor(Math.random() * 100) + 1;
  var essais = 0;
  var img = document.getElementById("kot");
  var imgparty = document.getElementById("party");

  console.log("solution: " + nbrandom);

  function handleClick(event) {
    event.preventDefault();

    var number = document.getElementById("numberInput").value;
    var errorMessage = document.getElementById("erreurnbvide");
    var result = document.getElementById("resultat");

    if(number.trim().length == 0){
        result.innerHTML = "";
        errorMessage.innerHTML = "Entrez un nombre lol";
        img.src = "img/kot.gif";
        img.style.display = "inline";
        imgparty.style.display = "none";
    }

    else{
        errorMessage.innerHTML = "";
        img.style.display = "none";
        imgparty.style.display = "none";
        essais++;

        if(number == nbrandom){
            errorMessage.innerHTML = "";
            imgparty.src = "img/party.gif";
            imgparty.style.display = "inline";
            result.innerHTML = "Trouvé ! c'était : " + nbrandom + " (trouvé en " + essais + " essais)";
            console.log("%cTrouvé ! c'était : " + nbrandom + "%ctrouvé en " + essais + "%cessais.", 'background: #222; color: #bada55');
        }

        else if(number > nbrandom){
            errorMessage.innerHTML = "";
            imgparty.style.display = "none";
            result.innerHTML = "Plus petit que : " + number;
            console.log("%cPlus petit que : ", 'color: #bada55' + number);
        }

        else{
            errorMessage.innerHTML = "";
            imgparty.style.display = "none";
            result.innerHTML = "Plus grand que : " + number;
            console.log("%cPlus grand que : ", 'color: #bada55' + number);
        }
    }
  }