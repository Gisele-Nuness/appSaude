import { api } from "../../src/services/api";


export async function buscarAlergias({ q = "" } = {}) {
  try {
    const params = {};
    if (q) params.q = q;

    const { data } = await api.get("/alergias", { params });

    const itens = Array.isArray(data) ? data : (data?.data ?? []);

    return itens.map((a) => ({
      id: a?.id,
      nome: a?.nome || "",
      tipo: a?.tipo || "",
      severidade: a?.severidade || "",
  
    }));
  } catch (e) {
    throw new Error(
      e?.response?.data?.message ||
        e?.response?.data?.error ||
        "Não foi possível carregar suas alergias."
    );
  }
}


export async function cadastrarAlergia({ nome, tipo, severidade }) {
  try {
    if (!nome || !tipo || !severidade) {
      throw new Error("Preencha nome, tipo e severidade.");
    }

    const { data } = await api.post("/alergias", {
      nome: String(nome).trim(),
      tipo: String(tipo).trim(),
      severidade: String(severidade).trim(),
    });

    return {
      id: data?.id,
      nome: data?.nome || "",
      tipo: data?.tipo || "",
      severidade: data?.severidade || "",
    };
  } catch (e) {
    throw new Error(
      e?.response?.data?.message ||
        e?.response?.data?.error ||
        "Não foi possível cadastrar a alergia."
    );
  }
}
