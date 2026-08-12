export function formatARS(value: number): string {
  return value.toLocaleString("es-AR");
}

export function formatPrice(value: number): string {
  return `$${formatARS(value)}`;
}
