import { useRouter } from 'next/router';
import Link from 'next/link';
import useSWR from 'swr';

import Layout from '../../../components/layout';

const fetcher = (url) => fetch(url).then((r) => r.json());

function Customer() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/customers/${id}`, fetcher);

  if (error) return <div>failed to load</div>;

  const onClick = async () => {
    try {
      const res = await fetch(`/api/customers/${id}/delete`, {
        method: 'DELETE',
      });
      if (res.status === 200) {
        router.push('/');
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <h1>Customer</h1>
      <hr/>
      {data ? (
        <div>
          <p className="name">
            {data.firstName} {data.lastName}
          </p>
          <p className="num">{data.telephone}</p>
          <p className="num">{data.creditCard.number}</p>

          <div className="buttons">
            <Link href="/customers/[id]/update" as={`/customers/${id}/update`}>
              <a className="editButton">Edit</a>
            </Link>
            
            <button onClick={onClick} className="deleteButton">
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </Layout>
  )
}

export default Customer;