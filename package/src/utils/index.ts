const ESCAPE_MAP: { [key: string]: string } = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;",
  "&": "&amp;"
};

const escapeHTML = (html: string): string => {
  return html.replace(/[<>"&]/g, (c) => ESCAPE_MAP[c] || c);
};

let id_count = 0;

const getID = (prefix: string): string => {
  return prefix + id_count++;
};

export default {
  escapeHTML,
  getID
};
