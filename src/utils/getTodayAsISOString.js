export default function getTodayAsISOString() {
  return new Date(Date.now()).toISOString().split('T')[0];
}
