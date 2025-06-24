import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import CreateProperty from './components/CreateProperty';
import PropertyList from './components/PropertyList';
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser, AuthUser } from 'aws-amplify/auth';

Amplify.configure(awsExports);

const client = generateClient();

interface AuthenticatedAppProps {
  user: AuthUser;
  signOut: () => void;
}

function AuthenticatedApp({ user, signOut }: AuthenticatedAppProps) {
  const [refreshFlag, setRefreshFlag] = useState(false);

  useEffect(() => {
    const ensureUserExists = async () => {
      try {
        const currentUser = await getCurrentUser();
        const userSub = currentUser?.userId;

        await client.graphql({
          query: /* GraphQL */ `
            mutation CreateUser($input: CreateUserInput!) {
              createUser(input: $input) {
                id
                email
              }
            }
          `,
          variables: {
            input: {
              id: userSub,
              email: user?.signInDetails?.loginId,
            },
          },
          authMode: 'userPool',
        });
      } catch (err) {
        console.log('User already exists or creation failed:', err);
      }
    };

    ensureUserExists();
  }, [user]);

  const triggerRefresh = () => {
    setRefreshFlag((prev) => !prev);
  };

  return (
    <main style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome, {user?.signInDetails?.loginId ?? 'Unknown user'}</h1>

      <button onClick={signOut}>Sign Out</button>

      <CreateProperty onSuccess={triggerRefresh} />
      <PropertyList refresh={refreshFlag} />
    </main>
  );
}

export default function App() {
  return (
    <Authenticator>
      {({ user, signOut }) =>
        user && signOut ? (
          <AuthenticatedApp user={user} signOut={signOut} />
        ) : (
          <div /> // Return empty div to satisfy strict return type
        )
      }
    </Authenticator>
  );
}
