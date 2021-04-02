import Head from 'next/head';
import useSWR from 'swr';

import styles from '../styles/Home.module.css';

import Layout from '../components/layout';
import DataRow from '../components/data-row';

const fetcher = (url) => fetch(url).then((r) => r.json());

function Home() {
  const { data, error } = useSWR('/api/customers', fetcher);

  if (error) return <div>Failed to load</div>

  return (

    <Layout>
      <h1>Next Fauna CRUD</h1>

      <div className="table">
      <h2>Customer Data</h2>

      <div className={`${styles.tableContainer} ${styles.tableHeaderOutline}`}>
        <h4>Name</h4>
        <h4>Telephone</h4>
        <h4 className="creditCard">Credit card</h4>
      </div>
      {
        data ? (
        data.map((d) => (
          <DataRow
            className={styles.tableContainer}
            key={d.ref['@ref'].id}
            id={d.ref['@ref'].id}
            firstName={d.data.firstName}
            lastName={d.data.lastName}
            telephone={d.data.telephone}
            creditCard={d.data.creditCard.number}
          />
        ))
        ) : (
          <>
            <DataRow loading />
            <DataRow loading />
            <DataRow loading />
          </>
        )}
      </div>
    </Layout>
  )
}

export default Home;