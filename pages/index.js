import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home({ data }) {
  const [newData, setNewData] = useState({});

  useEffect(() => {
    setNewData(data);
  }, [data]);

  console.log(newData);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.temp}>
          {parseInt(newData.main.temp - 273.15)}
          <sup>
            <sup>o</sup>C
          </sup>
        </div>
        <div className={styles.info}>
          <p>Main: {newData.weather[0].main}</p>
          <p>Humidity: {newData.main.humidity}%</p>
          <p>Wind: {newData.wind.speed} km/h</p>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const API_KEY = process.env.DB_MY_API_KEY;
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=${API_KEY}`
  );

  const data = res.data;

  return {
    props: {
      data,
    },
  };
}
