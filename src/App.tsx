import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import CreateProperty from './components/CreateProperty';
import PropertyList from './components/PropertyList';
import Strog from './components/Strog';

Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <h1>My Property Notes</h1>
          <p>Welcome, {user?.signInDetails?.loginId}</p>
          <button onClick={signOut}>Sign Out</button>
          <CreateProperty user={user} />
          <PropertyList user={user} />
          <Strog />
        </div>
      )}
    </Authenticator>
  );
}
