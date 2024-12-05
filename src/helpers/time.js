import { format } from 'date-fns';

export function formatDate(date) {
  return safeFormat(date, 'dd MMM');
}

export function formatDateTime(date) {
  return safeFormat(date, 'dd MMMM yyyy');
}

function safeFormat(date, formatString) {
  try {
    const d = new Date(date);
    return format(d, formatString);
  } catch (e) {
    return '';
  }
}
