import Link from 'next/link';

const DataRow = ({
  id,
  firstName,
  lastName,
  telephone,
  creditCard,
  loading,
}) => (
  <div className="table-row">
    <div>
      <p className="table-name">
        <Link href="/customers/[id]" as={`/customers/${id}`}>
          <a>
            {firstName} {lastName}
          </a>
        </Link>
      </p>
      <p className={`num ${loading ? 'loading' : ''}`}>{telephone}</p>
      <p className={`creditCard num ${loading ? 'loading' : ''}`}>{creditCard}</p>
    </div>
  </div>
);

export default DataRow;