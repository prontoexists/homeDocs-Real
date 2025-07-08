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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div>
      <h2>Add Property</h2>
      <input name="type" placeholder="Type" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <input name="mortgage" placeholder="Mortgage Info" onChange={handleChange} />
      <input name="rent" placeholder="Rent Info" onChange={handleChange} />
      <input name="insurance" placeholder="Insurance Info" onChange={handleChange} />
      <input name="homeWarranty" placeholder="Home Warranty Info" onChange={handleChange} />
      <input name="applianceInfo" placeholder="Appliance Info" onChange={handleChange} />
      <input name="repairInfo" placeholder="Repair Info" onChange={handleChange} />
      <button onClick={handleSubmit}>Save Property</button>
    </div>
  );
}
