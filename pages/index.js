const Home = ({ soccerData }) => {
  return (
    <div className="container my-0 mx-auto flex text-gray-700">
      <div className="rounded-lg shadow-light p-2 my-6">
        <table className="table-auto">
          <tr className="text-right border-b border-gray-100">
            <th className="text-lg pb-2">Tabela</th>
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
          </tr>
          <tr className="uppercase font-semibold text-sm text-gray-300">
            <th className="px-5 py-3">Pos</th>
            <th className="px-5 py-3 text-left">Time</th>
            <th className="px-5 py-3">Pts</th>
            <th className="px-5 py-3">J</th>
            <th className="px-5 py-3">V</th>
            <th className="px-5 py-3">E</th>
            <th className="px-5 py-3">D</th>
            <th className="px-5 py-3 hidden sm:table-cell">SG</th>
            <th className="px-5 py-3 hidden sm:table-cell">Últ. Jogos</th>
          </tr>
          <tbody>
            {soccerData.map((team) => (
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
                <td className="px-5 py-3 text-right hidden sm:table-cell">
                  {team.saldoDeGols}
                </td>
                <div className="align-middle text-center hidden sm:table-cell">
                  {team.ultimosResultados.map((item, key) => {
                    if (item === "V")
                      return (
                        <button
                          key={key}
                          className="mx-1 text-right w-2.5 h-2.5 rounded-full items-center bg-green-600"
                        >
                          {" "}
                        </button>
                      );
                    else if (item === "E")
                      return (
                        <button
                          key={key}
                          className="mx-1 text-right w-2.5 h-2.5 rounded-full items-center bg-gray-200"
                        >
                          {" "}
                        </button>
                      );
                    else if (item === "D")
                      return (
                        <button
                          key={key}
                          className="mx-1 text-right w-2.5 h-2.5 rounded-full items-center bg-red-600"
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
export async function getServerSideProps() {
  try {
    const res = await fetch(`${server}/api/hello`);
    const soccerData = await res.json();
    return {
      props: {
        soccerData,
      },
    };
  } catch (e) {
    error = e.toString();
  }
}

export default Home;
