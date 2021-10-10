const hasOwn = (obj: any, key: string) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const assign = (obj: any, ...sources: any[]): any => {
  sources.forEach((source) => {
    for (const key in source) {
      if (key === "name") continue;
      if (hasOwn(source, key)) {
        obj[key] = source[key];
      }
    }
  });
  return obj;
};

const ESCAPE_MAP: any = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};

const escapeHTML = (html: string): string => {
  return html.replace(/[<>"&]/g, (c) => ESCAPE_MAP[c] || c);
};

let id_count = 0;

const getID = (prefix: string): string => {
  return prefix + id_count++;
};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const warn = (msg: string, vm: any): void => {
  if (!vm) {
    /* eslint-disable no-console */
    console.error(msg);
    /* eslint-enable no-console */
    return;
  }
  vm.constructor.super.util.warn(msg, vm);
};

export default {
  assign,
  warn,
  escapeHTML,
  getID
};
