import { Toast } from "@react-workshop/ui/toast";
import { useToastStore } from "@/stores/use-toast-store";

export function Toaster() {
  const toasts = useToastStore((state) => state.toasts);
  const dismissToast = useToastStore((state) => state.dismissToast);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4">
      {toasts.map((t) => (
        <div key={t.id} className="pointer-events-auto">
          <Toast {...t} onClose={() => dismissToast(t.id)} />
        </div>
      ))}
    </div>
  );
}
