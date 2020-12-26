import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { baseUrl } from 'utils/config';

const AddProductForm = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch(`${baseUrl}/api/products`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        targetPrice,
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
      <button>
        <Link href='/'>Home</Link>
      </button>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <p>Track an Amazon product</p>
        <label>
          Name:
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Url:
          <input
            type='text'
            value={url}
            onChange={e => setUrl(e.target.value)}
            required
          />
        </label>

        <label>
          Target Price:
          <input
            type='text'  // change to number?
            value={targetPrice}
            onChange={e => setTargetPrice(e.target.value)}
            required
          />
        </label>

        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default AddProductForm;
