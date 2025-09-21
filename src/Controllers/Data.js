const formatarDataBR = (data) => {
  if (!data) return "";
  const onlyDate = data.includes("T") ? data.split("T")[0] : data;
  if (/^\d{4}-\d{2}-\d{2}$/.test(onlyDate)) {
    const [yyyy, mm, dd] = onlyDate.split("-");
    return `${dd}/${mm}/${yyyy}`;
  }
  return data;
};

const normalizarDataBR = (data) => {
  if (!data) return "";
  if (data.includes("T")) return data.split("T")[0];
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(data)) {
    const [dd, mm, yyyy] = data.split("/");
    return `${yyyy}-${mm}-${dd}`;
  }
  return data;
};

const maskDateBR = (value) => {
  const v = (value || "").replace(/\D/g, "").slice(0, 8);
  const dia = v.slice(0, 2);
  const mes = v.slice(2, 4);
  const ano = v.slice(4, 8);
  return [dia, mes, ano].filter(Boolean).join("/");
};

const isValidDateBR = (s) => {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(s)) return false;
  const [dd, mm, yyyy] = s.split("/").map(Number);
  const d = new Date(yyyy, mm - 1, dd);
  if (d.getFullYear() !== yyyy || d.getMonth() !== mm - 1 || d.getDate() !== dd)
    return false;
  const hoje = new Date();
  if (d > hoje) return false;
  const limite = new Date(
    hoje.getFullYear() - 120,
    hoje.getMonth(),
    hoje.getDate()
  );
  if (d < limite) return false;
  return true;
};

export default { maskDateBR, isValidDateBR, formatarDataBR, normalizarDataBR };
