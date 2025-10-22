import { api } from "../../src/services/api";

export async function buscarGlicemias() {
  try {
    const response = await api.get("/glicemias");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar glicemias:", error);
    throw error;
  }
}

export async function cadastrarGlicemia(dados) {
  try {
    const response = await api.post("/glicemias", {
      valor: dados.valor,
      observacao: dados.observacao,
      data_glicemia: dados.data_glicemia || null,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar glicemia:", error);
    throw error;
  }
}

export async function deletarGlicemia(id) {
  try {
    await api.delete(`/glicemias/${id}`);
  } catch (error) {
    console.error("Erro ao deletar glicemia:", error);
    throw error;
  }
}