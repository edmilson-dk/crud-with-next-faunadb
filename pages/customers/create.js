import { useState, useRef } from 'react';
import Router from 'next/router';

import Layout from '../../components/layout';

const Create = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const telephoneRef = useRef(null);
  const creditCardNumberRef = useRef(null);

  const handlerCreateCostumerClick = async () => {
    const formData = { 
      firstName: firstNameRef.current.value, 
      lastName: lastNameRef.current.value, 
      telephone: telephoneRef.current.value,
      creditCardNumber: creditCardNumberRef.current.value,
    };

    try {
      const res = await fetch('/api/customers/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
  };

  return (
    <Layout>
      <h2 className="sub-title">Create Customer</h2>

      <form className="form">
        <div className="input-wrapper">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="e.g. John"
            ref={firstNameRef}
          />
        </div>

        <div className="input-wrapper">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="e.g. Doe"
            ref={lastNameRef}
          />
        </div>

        <div className="input-wrapper">
          <label>Telephone</label>
          <input
            type="text"
            name="telephone"
            placeholder="e.g. 123-456-7890"
            ref={telephoneRef}
          />
        </div>

        <div className="input-wrapper">
          <label>Credit Card Number</label>
          <input
            type="text"
            name="creditCardNumber"
            placeholder="e.g. 1234567890123456"
            ref={creditCardNumberRef}
          />
        </div>

        <div className="submit">
          <button type="button" onClick={handlerCreateCostumerClick} className="createNew">
            Create
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

export default Create;