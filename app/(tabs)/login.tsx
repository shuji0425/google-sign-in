import React from 'react';
import { Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { getAuth, signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
import { firebaseApp } from '@/config/firebaseConfig';

const auth = getAuth(firebaseApp);

const AuthScreen = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: "826883173011-6v0fcdnt6scj2r1sq6tbfms2tsee0d0d.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { accessToken } = response.authentication!;
      const credential = GoogleAuthProvider.credential(accessToken);
      signInWithCredential(auth, credential)
        .then(user => console.log('Logged in with user:', user))
        .catch(error => console.error('Login error:', error));
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login with Google"
      onPress={() => promptAsync()}
    />
  );
};

export default AuthScreen;
