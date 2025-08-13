export function formatINR(paise: number) {
  const rupees = Math.round(paise / 100);
  return `RS. ${rupees.toLocaleString("en-IN")}.00`;
}
