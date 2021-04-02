import Head from 'next/head';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Next Fauna CRUD</title>
    </Head>

    <main className="layout-wrapper">
      <div className="container">{children}</div>
    </main>
  </>
);

export default Layout;