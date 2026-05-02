"use client";
import React, { createContext, useContext, useState } from "react";

interface ModalState {
  isOpen: boolean;
  title: string;
  body: string;
}

interface ModalContextType {
  openModal: (title: string, body: string) => void;
  closeModal: () => void;
  modal: ModalState;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<ModalState>({ isOpen: false, title: "", body: "" });

  const openModal = (title: string, body: string) => {
    setModal({ isOpen: true, title, body });
  };

  const closeModal = () => {
    setModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, modal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
