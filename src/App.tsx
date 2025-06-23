import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import CreateProperty from './components/CreateProperty';
import PropertyList from './components/PropertyList';

Amplify.configure(awsExports);

export default function App() {
  const [refreshFlag, setRefreshFlag] = useState(false);

  const triggerRefresh = () => {
    setRefreshFlag(prev => !prev);
  };

  return (
    <Authenticator>
      {({ user, signOut }) => (
        <main style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
<h1>Welcome, {user?.signInDetails?.loginId ?? "Unknown user"}</h1>

          <button onClick={signOut}>Sign Out</button>

          <CreateProperty onSuccess={triggerRefresh} />
          <PropertyList refresh={refreshFlag} />
        </main>
      )}
    </Authenticator>
  );
}
