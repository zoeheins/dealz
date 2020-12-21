import React, { useState } from 'react';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
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
        <input type='text' value={url} onChange={e => setUrl(e.target.value)} />
      </label>

      <input type='submit' value='Submit' />
    </form>
  );
};

export default AddProductForm;
