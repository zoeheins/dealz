import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Alert, Button, Card, Form, Spinner } from 'react-bootstrap';

import { baseUrl } from 'utils/config';

interface AddProductFormProps {
  apiUrl: string;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ apiUrl }) => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSubmitting(true); // disable submit button

    const res = await fetch(`${apiUrl}/api/products`, {
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
      setError("I'm sorry, we were unable to add your product");
      setSubmitting(false);
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Get alerts on an Amazon dealz!</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          Steps:
          <ol>
            <li>Fill out the form below</li>
            <li>Go about your daily business</li>
            <li>
              Dealz will checks Amazon every to see if your item has reached
              your target price
            </li>
            <li>
              If your target price has been reached, you recieve a notification
              email regarding your deal!
            </li>
          </ol>
        </Card.Subtitle>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='name'>
            <Form.Label>
              Product Nickname:
              <Form.Control
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </Form.Label>
          </Form.Group>

          <Form.Group controlId='url'>
            <Form.Label>
              Amazon URL:
              <Form.Control
                type='text'
                value={url}
                onChange={e => setUrl(e.target.value)}
                required
              />
            </Form.Label>
          </Form.Group>

          <Form.Group controlId='targetPrice'>
            <Form.Label>
              Your Target Price:
              <Form.Control
                type='text'
                value={targetPrice}
                onChange={e => setTargetPrice(e.target.value)}
                required
              />
            </Form.Label>
          </Form.Group>

          <Button type='submit' value='Submit' disabled={submitting}>
            {submitting ? (
              <>
                <Spinner animation='border' size='sm' role='status' />
                <> Submitting</>
              </>
            ) : (
              `Submit`
            )}
          </Button>
        </Form>

        {error && <Alert variant='danger'>{error}</Alert>}
      </Card.Body>
    </Card>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      apiUrl: baseUrl,
    },
  };
}

export default AddProductForm;
