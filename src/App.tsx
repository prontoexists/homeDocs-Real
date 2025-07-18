import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import CreateProperty from './components/CreateProperty';
import PropertyList from './components/PropertyList';
import Strog from './components/Strog';
import { useEffect } from 'react';
import { fetchAuthSession } from 'aws-amplify/auth';

Amplify.configure(awsExports);

export default function App() {
  useEffect(() => {
    fetchAuthSession()
      .then((session) => console.log('Auth session:', session))
      .catch((err) => console.error('Auth session error:', err));
  }, []);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App" style={{ padding: '0 20px' }}>
          {/* Top banner with color scheme */}
          <div
            style={{
              backgroundColor: '#e6f0fa', // light blue
              padding: '20px',
              borderBottom: '3px solid #fdd9a0', // light orange accent
              marginBottom: '20px',
              borderRadius: '0 0 8px 8px'
            }}
          >
            <h1 style={{ color: '#2c3e50', marginBottom: '5px' }}>HomeDocs</h1>
            <h2 style={{ color: '#2c3e50', marginTop: '0' }}>My Property Notes</h2>
            <p style={{ color: '#333' }}>Welcome, {user?.signInDetails?.loginId}</p>
            <button
              onClick={signOut}
              style={{
                backgroundColor: '#fdd9a0',
                border: 'none',
                padding: '8px 12px',
                cursor: 'pointer',
                marginTop: '10px',
                borderRadius: '4px'
              }}
            >
              Sign Out
            </button>
          </div>

          {/* Rest of the app */}
          <CreateProperty user={user} />
          <PropertyList user={user} />
          <Strog />
        </div>
      )}
    </Authenticator>
  );
}
