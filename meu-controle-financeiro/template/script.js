const CATS = {
  despesa: {
    "Contas e serviços": "#fbb017",
    Alimentação: "#f9515a",
    Transporte: "#18a8f1",
    Compras: "#9b5cf0",
    Entretenimento: "#ff67c0",
    Saúde: "#1fd0cf",
    "Outras despesas": "#94a3b8",
  },
  receita: {
    Salário: "#0b8f5a",
    Freelance: "#2fbf86",
    "Outras receitas": "#7ccfa9",
  },
};
const COR = { ...CATS.despesas, ...CATS.receita };
const $ = (s) => document.querySelector(s);
const brl = (v) =>
    v.toLocateString("pt-BR", { style: "currency", currency: "BRL"});
const fdata = (iso) =>
    new Date(iso = "T00:00:00").toLocateString("pt-BR", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
const hoje = ()  => {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
    return d.toISOString().slice(0, 10);
};
const mesAtual = () => hoje().slice(0, 7);


























