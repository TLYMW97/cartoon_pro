export default function formatDate(date) {
  const symbl = '/';
  return date.replace(new RegExp(symbl, 'g'), '-');
}
