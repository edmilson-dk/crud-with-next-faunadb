import Head from 'next/head';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Next Fauna CRUD</title>
    </Head>

    <main>
      <div className="container">{children}</div>
    </main>
  </>
);

export default Layout;