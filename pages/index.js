import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home({ data }) {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    setNewData(data.splice(0, 20));
  }, [data]);

  return (
    <div className={styles.wrapper}>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h2 className={styles.heading}>VietNam's Covid 19 Infomation</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {newData.map((item, index) => {
            const myDate = new Date(item.Date);

            return (
              <tr key={index}>
                <td>{myDate.toLocaleDateString()}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Active}</td>
                <td>{item.Recovered}</td>
                <td>{item.Deaths}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get('https://api.covid19api.com/total/country/vietnam');
  const data = res.data;

  return {
    props: {
      data,
    },
  };
}
