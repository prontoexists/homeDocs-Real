import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listProperties } from '../graphql/queries';
import { deleteProperty } from '../graphql/mutations';

const client = generateClient();

export default function PropertyList({ user }: { user: any }) {
  const [properties, setProperties] = useState<any[]>([]);
  const userID = user?.userId ?? user?.username;

  useEffect(() => {
    const fetchData = async () => {
      if (!userID) return;

      try {
        const result = await client.graphql({
          query: listProperties,
          variables: { filter: { userID: { eq: userID } } },
          authMode: 'userPool'
        }) as { data: { listProperties: { items: any[] } } };

        setProperties(result.data.listProperties.items);
      } catch (err) {
        console.error('Error fetching properties:', err);
      }
    };

    fetchData();
  }, [userID]);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this property?')) return;

    try {
      await client.graphql({
        query: deleteProperty,
        variables: { input: { id } },
        authMode: 'userPool'
      });
      alert('Property deleted.');
      window.location.reload();
    } catch (err) {
      console.error('Error deleting property:', err);
    }
  };

  const exportProperty = (prop: any) => {
    const textContent = `
Property ID: ${prop.id}
Type: ${prop.type}
Address: ${prop.address}
Mortgage: ${prop.mortgage}
Rent: ${prop.rent}
Insurance: ${prop.insurance}
Home Warranty: ${prop.homeWarranty}
Appliance Info: ${prop.applianceInfo}
Repair Info: ${prop.repairInfo}
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `property-${prop.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!userID) return <div>Loading properties...</div>;

  return (
    <div>
      <h2>My Properties</h2>
      {properties.map((prop) => (
        <div
          key={prop.id}
          style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}
        >
          <h3>{prop.type} - {prop.address}</h3>
          <p>Mortgage: {prop.mortgage}</p>
          <p>Rent: {prop.rent}</p>
          <p>Insurance: {prop.insurance}</p>
          <p>Home Warranty: {prop.homeWarranty}</p>
          <p>Appliance Info: {prop.applianceInfo}</p>
          <p>Repair Info: {prop.repairInfo}</p>
          <button onClick={() => handleDelete(prop.id)} style={{ marginRight: '10px' }}>
            Delete
          </button>
          <button onClick={() => exportProperty(prop)}>
            Export
          </button>
        </div>
      ))}
    </div>
  );
}
