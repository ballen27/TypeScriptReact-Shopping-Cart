const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(number: number) {
  return number.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
