export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function parsePrice(price: number | string): number {
  if (typeof price === "number") return price;
  const numeric = price.replace(/[^0-9]/g, "");
  return numeric ? parseInt(numeric, 10) : 0;
}

export function formatCurrency(amount: number): string {
  return `Rp ${amount.toLocaleString("id-ID")}`;
}
