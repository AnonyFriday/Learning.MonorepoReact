import { type ReactNode } from "react";
import { create } from "zustand";
import { type ToastProps } from "@react-workshop/ui/toast";

export type ToastItem = Omit<ToastProps, "onClose"> & { id: string };

type ToastState = {
  toasts: ToastItem[];
  showToast: (toast: Omit<ToastItem, "id">) => void;
  dismissToast: (id: string) => void;
  success: (title: string, description?: ReactNode) => void;
  danger: (title: string, description?: ReactNode) => void;
  info: (title: string, description?: ReactNode) => void;
};

export const useToastStore = create<ToastState>((set, get) => ({
  toasts: [],

  dismissToast: (id: string) => {
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id)
    }));
  },

  showToast: (toast) => {
    const id = crypto.randomUUID();
    set((state) => ({ toasts: [...state.toasts, { ...toast, id }] }));

    setTimeout(() => {
      get().dismissToast(id);
    }, 4000);
  },

  success: (title, description) => {
    get().showToast({ variant: "success", title, description });
  },

  danger: (title, description) => {
    get().showToast({ variant: "danger", title, description });
  },

  info: (title, description) => {
    get().showToast({ variant: "info", title, description });
  }
}));
