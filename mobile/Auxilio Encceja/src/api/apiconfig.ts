import { Platform } from "react-native";
import Constants from "expo-constants";
import * as Device from "expo-device";

function getExpoHost(): string | null {
  const hostUri = Constants.expoConfig?.hostUri;

  if (!hostUri) {
    return null;
  }

  const host = hostUri.split(":")[0]?.trim();

  if (!host || host === "localhost" || host === "127.0.0.1") {
    return null;
  }

  return host;
}

const configuredHost = process.env.EXPO_PUBLIC_API_HOST?.trim();
const expoHost = getExpoHost();

const DEFAULT_API_HOST =
  configuredHost ||
  (Platform.OS === "android" && !Device.isDevice
    ? "http://10.0.2.2:3600"
    : expoHost
      ? `http://${expoHost}:3600`
      : "http://localhost:3600");

export const API_HOST = DEFAULT_API_HOST.replace(/\/$/, "");
export const API_BASE = `${API_HOST}/api`;

if (__DEV__) {
  console.log("[Auxílio Encceja] API_HOST:", API_HOST);
  console.log("[Auxílio Encceja] API_BASE:", API_BASE);
}
