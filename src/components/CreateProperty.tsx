import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';

const client = generateClient();

interface CreatePropertyProps {
  onSuccess: () => void;
}

const propertyTypes = [
  'Primary Home',
  'Vacation Home',
  'Rental Property',
  'Commercial',
  'Land'
];

// Minimal safe mutation that avoids returning relational or protected fields
const createPropertyCustom = /* GraphQL */ `
  mutation CreateProperty($input: CreatePropertyInput!) {
    createProperty(input: $input) {
      id
      type
      address
    }
  }
`;

export default function CreateProperty({ onSuccess }: CreatePropertyProps) {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const currentUser = await getCurrentUser();
      const userSub = currentUser?.userId;

      const response = await client.graphql({
        query: createPropertyCustom,
        variables: {
          input: {
            ...formData,
            userID: userSub
          }
        }
      });

      console.log("GraphQL response:", JSON.stringify(response, null, 2));

      onSuccess();

      setFormData({
        type: '',
        address: '',
        mortgage: '',
        rent: '',
        insurance: '',
        homeWarranty: '',
        applianceInfo: '',
        repairInfo: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      alert("Error submitting property. See console for details.");
    }
  };

  return (
    <details>
      <summary>Add New Property</summary>
      <form onSubmit={handleSubmit}>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="">Select Property Type</option>
          {propertyTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {Object.entries(formData).map(([key, value]) => {
          if (key === 'type') return null;
          return (
            <input
              key={key}
              name={key}
              value={value}
              placeholder={key}
              onChange={handleChange}
              required={key === 'address'}
            />
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </details>
  );
}
