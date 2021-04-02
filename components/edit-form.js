import { useEffect, useState } from 'react';
import Router from 'next/router';
import Layout from './layout';

const EditForm = ({ defaultValues, id }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [ oldValues, setOldValues ] = useState({});

  useEffect(() => {
    setOldValues({
      ...defaultValues,
      creditCardNumber: defaultValues.creditCard.number,
    });
  }, []);

  const handlerUpdateCostumerClick = async () => {
    try {
      const res = await fetch(`/api/customers/${id}/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...oldValues}),
      });

      if (res.status === 200) {
        Router.push('/');
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  }

  return (
    <Layout>
      <h1 className="sub-title">Update Customer</h1>

      <form className="form">
        <div className="input-wrapper">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="e.g. John"
            value={oldValues.firstName}
            onChange={(e) => setOldValues({ ...oldValues, firstName: e.target.value })}
          />
        </div>

        <div className="input-wrapper">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="e.g. Doe"
            value={oldValues.lastName}
            onChange={(e) => setOldValues({ ...oldValues, lastName: e.target.value })}
          />
        </div>

        <div className="input-wrapper">
          <label>Telephone</label>
          <input
            type="text"
            name="telephone"
            placeholder="e.g. 123-456-7890"
            value={oldValues.telephone}
            onChange={(e) => setOldValues({ ...oldValues, telephone: e.target.value })}
          />
        </div>

        <div className="input-wrapper">
          <label>Credit Card Number</label>
          <input
            type="text"
            name="creditCardNumber"
            placeholder="e.g. 1234567890123456"
            value={oldValues.creditCardNumber}
            onChange={(e) => setOldValues({ ...oldValues, creditCardNumber: e.target.value })}
          />
        </div>

        <div className="submit">
          <button type="button" onClick={handlerUpdateCostumerClick} className="createNew">
            Update
          </button>
        </div>
      </form>

      {errorMessage && (
        <p role="alert" className="errorMessage">
          {errorMessage}
        </p>
      )}
    </Layout>
  );
};

export default EditForm;