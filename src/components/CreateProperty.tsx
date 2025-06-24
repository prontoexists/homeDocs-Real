import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';

const client = generateClient();

interface CreatePropertyProps {
  onSuccess: () => void;
}

export default function CreateProperty({ onSuccess }: CreatePropertyProps) {
  const [type, setType] = useState('');
  const [address, setAddress] = useState('');
  const [mortgage, setMortgage] = useState('');
  const [rent, setRent] = useState('');
  const [insurance, setInsurance] = useState('');
  const [homeWarranty, setHomeWarranty] = useState('');
  const [applianceInfo, setApplianceInfo] = useState('');
  const [repairInfo, setRepairInfo] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const currentUser = await getCurrentUser();
      const userSub = currentUser?.userId;

      await client.graphql({
        query: /* GraphQL */ `
          mutation CreateProperty($input: CreatePropertyInput!) {
            createProperty(input: $input) {
              id
              type
              address
              userID
            }
          }
        `,
        variables: {
          input: {
            type,
            address,
            mortgage,
            rent,
            insurance,
            homeWarranty,
            applianceInfo,
            repairInfo,
            userID: userSub,
          },
        },
        authMode: 'userPool',
      });

      console.log('Property created successfully');
      onSuccess();
      clearForm();
    } catch (err) {
      console.error('Submission error:', err);
    }
  };

  const clearForm = () => {
    setType('');
    setAddress('');
    setMortgage('');
    setRent('');
    setInsurance('');
    setHomeWarranty('');
    setApplianceInfo('');
    setRepairInfo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Property</h2>

      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Mortgage"
        value={mortgage}
        onChange={(e) => setMortgage(e.target.value)}
      />

      <input
        type="text"
        placeholder="Rent"
        value={rent}
        onChange={(e) => setRent(e.target.value)}
      />

      <input
        type="text"
        placeholder="Insurance"
        value={insurance}
        onChange={(e) => setInsurance(e.target.value)}
      />

      <input
        type="text"
        placeholder="Home Warranty"
        value={homeWarranty}
        onChange={(e) => setHomeWarranty(e.target.value)}
      />

      <input
        type="text"
        placeholder="Appliance Info"
        value={applianceInfo}
        onChange={(e) => setApplianceInfo(e.target.value)}
      />

      <input
        type="text"
        placeholder="Repair Info"
        value={repairInfo}
        onChange={(e) => setRepairInfo(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
