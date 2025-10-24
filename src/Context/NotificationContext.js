import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notificacoes, setNotificacoes] = useState([]);

  const adicionarNotificacao = (nova) => {
    const novaNotificacao = { ...nova, id: Date.now() + Math.random() };
    setNotificacoes((prev) => [...prev, novaNotificacao]);
  };

  const limparNotificacoes = () => {
    setNotificacoes([]);
  };

  const removerNotificacao = (id) => {
    setNotificacoes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NotificationContext.Provider
      value={{ notificacoes, adicionarNotificacao, limparNotificacoes, removerNotificacao }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotifications = () => useContext(NotificationContext);
