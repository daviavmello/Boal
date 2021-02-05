const cheerio = require('cheerio') 

export default async (req, res) => {
 try {
    res.statusCode = 200;
    console.log(res.statusCode);
    const response = await fetch("https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a");
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);
    const data = $('tr.expand-trigger').text()

    const dataArray = data.split("\n").map(a => a.trim()).filter(a => a);
    const splitArray = [];
    
      while (dataArray.length) {
        splitArray.push(dataArray.splice(0, 17))
      }

    const jsonArray = splitArray.map((splitArray) => {
      return {
        "Posição": splitArray[0],
        "Variação de posição em relação a última rodada": splitArray[1],
        "Time": splitArray[2],
        "Pontos": splitArray[3],
        "Jogos": splitArray[4],
        "Vitórias": splitArray[5],
        "Empates": splitArray[6],
        "Derrotas": splitArray[7],
        "Gols pró": splitArray[8],
        "Gols contra": splitArray[9],
        "Saldo de gols": splitArray[10],
        "Cartões amarelos": splitArray[11],
        "Cartões vermelhos": splitArray[12],
        "Aproveitamento": `${splitArray[13]}%`,
        "Últimos resultados": `${splitArray[14]}, ${splitArray[15]}, ${splitArray[16]}`
      }

      })
      console.log(jsonArray)
      return res.json(jsonArray)
  
 } 
 catch(e) {
   res.statusCode = 404;
   return res.json({
     Error: "Ei Boal! Informação não encontrada."
   })
 }
}