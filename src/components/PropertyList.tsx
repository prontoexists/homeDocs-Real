import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listProperties } from '../graphql/queries';
import { deleteProperty } from '../graphql/mutations';
import { Property } from '../API';
import { getCurrentUser } from 'aws-amplify/auth';

const client = generateClient();

interface PropertyListProps {
  refresh: boolean;
}

export default function PropertyList({ refresh }: PropertyListProps) {
  const [properties, setProperties] = useState<Property[]>([]);

  const fetchProperties = async () => {
    try {
      const currentUser = await getCurrentUser();
      const userSub = currentUser?.userId;

      const response = await client.graphql({
        query: listProperties,
        variables: {
          filter: {
            userID: { eq: userSub }
          }
        }
      }) as { data: { listProperties: { items: Property[] } } };

      const items = response.data.listProperties.items ?? [];
      setProperties(items.filter((p: any): p is Property => p !== null));
    } catch (err) {
      console.error('Error fetching properties:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this property?')) return;

    try {
      await client.graphql({
        query: deleteProperty,
        variables: { input: { id } },
      });
      await fetchProperties();
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [refresh]);

  return (
    <div>
      <h2>Your Properties</h2>
      {properties.length === 0 ? (
        <p>No properties yet.</p>
      ) : (
        <ul>
          {properties.map((p) => (
            <li key={p.id}>
              <strong>{p.type}</strong> — {p.address}
              <br />
              <small>
                Mortgage: {p.mortgage} | Rent: {p.rent} | Insurance: {p.insurance}
                <br />
                Warranty: {p.homeWarranty} | Appliances: {p.applianceInfo} | Repairs: {p.repairInfo}
              </small>
              <br />
              <button onClick={() => handleDelete(p.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
