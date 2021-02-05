import Head from 'next/head'
import axios from "axios";
// import styles from '../styles/Home.module.css'

const Home = ({ standing}) => {
  console.log(standing);
  return (
    <ul>
      {/* {JSON.stringify(props.standing)} */}
      {/* {standing.map(team => (
        <li key={team.id}>{team.name}</li>
      ))} */}
    </ul>
  );
};

Home.getInitialProps = async () => {
  const key = process.env.FUTEBOL_API_KEY;
  const url = 'https://api.api-futebol.com.br/v1/campeonatos/14/fases/56';

  const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${key}`
      }
    }) 
  // const data = response.then((res) => {
     const standing = response.data;
     console.log(standing);
     return { standing }
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
}

// console.log(getStaticProps());

export default Home; 