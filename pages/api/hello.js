const cheerio = require("cheerio");

export default async function soccerApi(req, res) {
  try {
    res.statusCode = 200;
    console.log(res.statusCode);
    const response = await fetch(
      "https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a", {
        method: "GET",
        headers: {
          // update with user-agent
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
          Accept: "application/json; charset=UTF-8",
        },
      }
    );
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);
    const data = $("tr.expand-trigger").text();

    const dataArray = data
      .split("\n")
      .map((a) => a.trim())
      .filter((a) => a);
    const splitArray = [];

    while (dataArray.length) {
      splitArray.push(dataArray.splice(0, 17));
    }

    const jsonArray = splitArray.map((splitArray) => {
      return {
        posicao: splitArray[0],
        variacaoDePosicao: splitArray[1],
        time: splitArray[2],
        pontos: splitArray[3],
        jogos: splitArray[4],
        vitorias: splitArray[5],
        empates: splitArray[6],
        derrotas: splitArray[7],
        golsPro: splitArray[8],
        golsContra: splitArray[9],
        saldoDeGols: splitArray[10],
        cartoesAmarelos: splitArray[11],
        cartoesVermelhos: splitArray[12],
        aproveitamento: `${splitArray[13]}%`,
        ultimosResultados: [splitArray[14], splitArray[15], splitArray[16]],
      };
    });
    // console.log(jsonArray);
    return res.json(jsonArray);
  } catch (e) {
    console.error("Error:", err);
        console.error("Response body:", body);
        // throw err;
        return ReE(response, err.message, 500)
  }
};