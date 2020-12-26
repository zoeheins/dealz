import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { baseUrl } from 'utils/config';

const AddProductForm = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch(`${baseUrl}/api/products`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        url,
      }),
    });
    if (res.status === 200) {
      router.push('/');
    } else {
      setError('We were unable to add your product');
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <p>Track an Amazon product</p>
        <label>
          Name:
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label>
          Url:
          <input
            type='text'
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
        </label>

        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default AddProductForm;
