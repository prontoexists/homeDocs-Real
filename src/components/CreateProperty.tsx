import { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { createProperty } from '../graphql/mutations';

const client = generateClient();

export default function CreateProperty({ user }: { user: any }) {
  const [formData, setFormData] = useState({
    type: '',
    address: '',
    mortgage: '',
    rent: '',
    insurance: '',
    homeWarranty: '',
    applianceInfo: '',
    repairInfo: ''
  });

  if (!user) return <div>Loading...</div>;
  const userID = user?.userId ?? user?.username;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const result = await client.graphql({
        query: createProperty,
        variables: {
          input: {
            ...formData,
            userID
          }
        },
        authMode: 'userPool'
      });
      console.log('Create result:', result);
      alert('Property Saved!');
      window.location.reload();
    } catch (err: any) {
      if (err.errors) {
        console.error('GraphQL errors:', err.errors);
      } else {
        console.error('Error creating property:', JSON.stringify(err, null, 2));
      }
    }
  };

  const inputStyle = { width: '300px', padding: '8px', marginBottom: '10px' };

  return (
    <div>
      <h2>Add Property</h2>
      <input
        name="type"
        placeholder="Type"
        onChange={handleChange}
        style={inputStyle}
      />
      <textarea
        name="address"
        placeholder="Address"
        rows={2}
        onChange={handleChange}
        style={inputStyle}
      />
      <input
        name="mortgage"
        placeholder="Mortgage Info"
        onChange={handleChange}
        style={inputStyle}
      />
      <input
        name="rent"
        placeholder="Rent Info"
        onChange={handleChange}
        style={inputStyle}
      />
      <textarea
        name="insurance"
        placeholder="Insurance Info"
        rows={2}
        onChange={handleChange}
        style={inputStyle}
      />
      <textarea
        name="homeWarranty"
        placeholder="Home Warranty Info"
        rows={2}
        onChange={handleChange}
        style={inputStyle}
      />
      <textarea
        name="applianceInfo"
        placeholder="Appliance Info"
        rows={3}
        onChange={handleChange}
        style={inputStyle}
      />
      <textarea
        name="repairInfo"
        placeholder="Repair Info"
        rows={3}
        onChange={handleChange}
        style={inputStyle}
      />
      <br />
      <button onClick={handleSubmit}>Save Property</button>
    </div>
  );
}
