const Home = ({ soccerData }) => {
  // console.log(soccerData);

  return (
    <div className="container mx-auto justify-center flex text-gray-700">
      <div className="rounded-lg shadow-light p-2 my-6">
        <table className="table-auto">
          {/* <tr className="text-right border-b border-gray-100">
          <th className="text-lg pb-2">Tabela</th>
          <th />
          <th />
          <th />
          <th />
          <th />
          <th />
          <th />
          <th />
        </tr> */}
          {/* <tr className="uppercase font-semibold text-sm text-gray-300">
          <th className="px-5 py-3">Pos</th>
          <th className="px-5 py-3 text-left">Time</th>
          <th className="px-5 py-3">Pts</th>
          <th className="px-5 py-3">J</th>
          <th className="px-5 py-3">V</th>
          <th className="px-5 py-3">E</th>
          <th className="px-5 py-3">D</th>
          <th className="px-5 py-3">SG</th>
          <th className="px-5 py-3">Últ. Jogos</th>
        </tr> */}
          <tbody>
            {soccerData.map((team, key) => (
              <tr>
                <td className="px-5 py-3 text-right">{team.posicao}</td>
                <td className="px-5 py-3 text-left">{team.time}</td>
                <td className="px-5 py-3 text-right font-semibold">
                  {team.pontos}
                </td>
                <td className="px-5 py-3 text-right">{team.jogos}</td>
                <td className="px-5 py-3 text-right">{team.vitorias}</td>
                <td className="px-5 py-3 text-right">{team.empates}</td>
                <td className="px-5 py-3 text-right">{team.derrotas}</td>
                <td className="px-5 py-3 text-right">{team.saldoDeGols}</td>
                <div className="mt-1.5 text-center">
                  {team.ultimosResultados.map((item, key) => {
                    if (item === "V")
                      return (
                        <button
                          key={key}
                          className="my-3 mx-1 text-right w-2.5 h-2.5 rounded-full items-center bg-green-600"
                        >
                          {" "}
                        </button>
                      );
                    else if (item === "E")
                      return (
                        <button
                          key={key}
                          className="my-3 mx-1 text-right w-2.5 h-2.5 rounded-full items-center bg-gray-200"
                        >
                          {" "}
                        </button>
                      );
                    else if (item === "D")
                      return (
                        <button
                          key={key}
                          className="my-3 mx-1 text-right w-2.5 h-2.5 rounded-full items-center bg-red-600"
                        >
                          {" "}
                        </button>
                      );
                  })}
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

import { server } from "../config";
export async function getStaticProps() {
  let error = "";
  let soccerData = [];
  try {
    const res = await fetch(`${server}/api/hello`, {
      method: "GET",
      headers: {
        // update with user-agent
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    });
    soccerData = await res.json();
  } catch (e) {
    error = e.toString();
  }
  return {
    props: {
      soccerData,
      error,
    },
  };
}

export default Home;
