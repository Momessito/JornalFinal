setInterval(function horas() {
  var horas = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();

  function zero(x) {
    if (x < 10) {
      x = "0" + x;
    }
    return x;
  }

  minuto = zero(minutes);
  segundo = zero(seconds);

  document.getElementById("horas").innerHTML =
    "Horario De Brasilia <br> " + horas + " : " + minuto + " : " + segundo;
}, 1000);

var isFalse = NaN;

function clicar() {
  if (isFalse == NaN) {
    isFalse = false;
    console.log(isFalse);
  } else if (isFalse == false) {
    document.getElementById("clickX").style.display = "Block";
    document.getElementById("Menu").style.display = "none";
    isFalse = true;
    console.log(isFalse);
  } else {
    document.getElementById("clickX").style.display = "none";
    document.getElementById("Menu").style.display = "block";
    isFalse = false;
    console.log(isFalse);
  }
}

$(function () {
  var availableTags = [
    "Cientistas usam cogumelos para fazer chips biodegradáveis",
    "polêmicas por trás do Koo",
    "O brasileiro que pretende criar...",
    "Usuários idosos no Instagram",
    "Hackers russos causaram maioria...",
    "Nova radioterapia é promissora",
    "Os cientistas que alcançaram a temperatura",
    "O que nos deixa tão viciados no TikTok, segundo a Ciência",
    "Twitter anuncia botão 'editar'",
    "Elon Musk conclui compra do Twitter por US$ 44 bi",
    "WhatsApp diz que nenhum governo...",
    "Twitter teve um aumento de 1,6 milhão",
    "Fiat Pulse Abarth vende metade da produção para 2022",
    "Notion lança recurso de inteligência artificial que escreve",
    "Existem encontros memoráveis nos aplicativos de namoro?",
    "Black Friday: Roku Express transforma qualquer TV em Smart TV por menos de 200",
    "Perseverance explora leito rochoso em Marte onde busca por sinais de vida",
    "Artemis 1: decolagem do megafoguete lunar danifica plataforma de lançamento da NASA",
    "Vai criar um site? Design e alinhamento visual são importantíssimos",
  ];
  $("#search").autocomplete({
    source: availableTags,
  });
});

var input = document.getElementById("search");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    var input = document.getElementById("search").value;
    switch (input) {
      case "Cientistas usam cogumelos para fazer chips biodegradáveis":
        window.location.assign("./notícias/12/Page.html");
        break;
      case "O brasileiro que pretende criar...":
        window.location.assign("./notícias/08/Page.html");
        break;
      case "polêmicas por trás do Koo":
        window.location.assign("./notícias/09/Page.html");
        break;
      case "Usuários idosos no Instagram":
        window.location.assign("./notícias/10/Page.html");
        break;
      case "Hackers russos causaram maioria...":
        window.location.assign("./notícias/11/Page.html");
        break;
      case "Nova radioterapia é promissora":
        window.location.assign("./notícias/01/Page.html");
        break;
      case "Os cientistas que alcançaram a temperatura":
        window.location.assign("./notícias/02/Page.html");
        break;
      case "O que nos deixa tão viciados no TikTok, segundo a Ciência":
        window.location.assign("./notícias/03/Page.html");
        break;
      case "Twitter anuncia botão 'editar'":
        window.location.assign("./notícias/05/Page.html");
        break;
      case "Elon Musk conclui compra do Twitter por US$ 44 bi":
        window.location.assign("./notícias/06/Page.html");
        break;
      case "WhatsApp diz que nenhum governo...":
        window.location.assign("./notícias/07/Page.html");
        break;
      case "Twitter teve um aumento de 1,6 milhão":
        window.location.assign("./notícias/14/Page.html");
        break;
      case "Fiat Pulse Abarth vende metade da produção para 2022":
        window.location.assign("./notícias/15/Page.html");
        break;
      case "Notion lança recurso de inteligência artificial que escreve":
        window.location.assign("./notícias/16/Page.html");
        break;
      case "Existem encontros memoráveis nos aplicativos de namoro?":
        window.location.assign("./notícias/17/Page.html");
        break;
      case "Black Friday: Roku Express transforma qualquer TV em Smart TV por menos de 200":
        window.location.assign("./notícias/18/Page.html");
        break;
      case "Perseverance explora leito rochoso em Marte onde busca por sinais de vida":
        window.location.assign("./notícias/19/Page.html");
        break;
      case "Artemis 1: decolagem do megafoguete lunar danifica plataforma de lançamento da NASA":
        window.location.assign("./notícias/20/Page.html");
        break;
      case "Vai criar um site? Design e alinhamento visual são importantíssimos":
        window.location.assign("./notícias/21/Page.html");
        break;
      case "Carleandro idiota":
        alert('Bixo é gay')
        break;
      default:
        window.location.assign("./Google/index.html");
        break;


    }


  }
});


