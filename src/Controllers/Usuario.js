import { api } from "../../src/services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Data from "./Data";

const getPublicBaseURL = () => {
  const base = api?.defaults?.baseURL || "";
  if (!base) return "";
  try {
    const u = new URL(base);
    return u.origin;
  } catch (e) {
    return base.replace(/\/api\/?$/, "").replace(/\/$/, "");
  }
};

export async function buscarPerfil() {
  try {
    const userId = await AsyncStorage.getItem("@userId");
    if (!userId) throw new Error("Sessão expirada. Faça login novamente.");

    const { data } = await api.get(`/users/${userId}`);

    const foto = data?.caminho_foto_url || data?.caminho_foto || "";
    let imagem = "";
    if (foto) {
      const isHttp = /^https?:\/\//i.test(foto);
      const publicBase = getPublicBaseURL();
      imagem = isHttp ? foto : `${publicBase}/storage/${foto}`;
    }

    return {
      nome: data?.nome || "",
      dataNasc:
        Data?.formatarDataBR && data?.data_nasc
          ? Data.formatarDataBR(data.data_nasc)
          : "",
      peso: data?.peso || "",
      altura: data?.altura || "",
      tipoSangue: data?.tipo_sangue || "",
      cep: data?.cep || "",
      logradouro: data?.logradouro || "",
      numero: data?.numero || "",
      bairro: data?.bairro || "",
      cidade: data?.cidade || "",
      email: data?.email || "",
      imagem,
    };
  } catch (e) {
    throw new Error(
      e?.response?.data?.message ||
        e?.response?.data?.error ||
        "Não foi possível carregar seu perfil."
    );
  }
}
