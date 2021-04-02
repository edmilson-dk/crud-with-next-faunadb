import Link from 'next/link';

const DataRow = ({
  id,
  firstName,
  lastName,
  telephone,
  creditCard,
  loading,
  className,
}) => (
  <div className={className}>
    <p className={loading ? 'loading' : ''}>
      <Link href="/customers/[id]" as={`/customers/${id}`}>
        <a>
          {firstName} {lastName}
        </a>
      </Link>
    </p>
    <p className={`num ${loading ? 'loading' : ''}`}>{telephone}</p>
    <p className={`creditCard num ${loading ? 'loading' : ''}`}>{creditCard}</p>
  </div>
);

export default DataRow;