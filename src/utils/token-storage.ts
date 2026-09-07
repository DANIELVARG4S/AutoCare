import * as Keychain from "react-native-keychain";

const TOKEN_SERVICE = "autocare-auth-token";
const TOKEN_USERNAME = "auth-token";

export async function getAuthToken(): Promise<string | null> {
  const credentials = await Keychain.getGenericPassword({
    service: TOKEN_SERVICE,
  });

  return credentials ? credentials.password : null;
}

export async function saveAuthToken(token: string): Promise<void> {
  await Keychain.setGenericPassword(TOKEN_USERNAME, token, {
    service: TOKEN_SERVICE,
  });
}

export async function removeAuthToken(): Promise<void> {
  await Keychain.resetGenericPassword({ service: TOKEN_SERVICE });
}
