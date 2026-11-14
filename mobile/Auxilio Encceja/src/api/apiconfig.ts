import { Platform } from "react-native";
import * as Device from "expo-device";

// O endereço pode ser sobrescrito pelo EXPO_PUBLIC_API_HOST.
// Emulador Android no mesmo PC: 10.0.2.2 aponta para o computador host.
// Celular físico: informe o IPv4 do PC no arquivo .env.
const DEFAULT_API_HOST =
  Platform.OS === "android" && !Device.isDevice
    ? "http://10.0.2.2:3600"
    : "http://localhost:3600";

const configuredHost = process.env.EXPO_PUBLIC_API_HOST?.trim();
export const API_HOST = configuredHost || DEFAULT_API_HOST;

export const API_BASE = `${API_HOST.replace(/\/$/, "")}/api`;
