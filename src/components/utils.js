function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function assign(obj, ...sources) {
  sources.forEach(source => {
    for (let key in source) {
      if (key === "name") continue;
      if (hasOwn(source, key)) {
        obj[key] = source[key];
      }
    }
  });
  return obj;
}

const ESCAPE_MAP = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};

function escapeHTML(html) {
  return html.replace(/[<>"&]/g, c => ESCAPE_MAP[c] || c);
}

let id_count = 0;

function getId(prefix = "") {
  return prefix + id_count++;
}

function warn(msg, vm) {
  if (!vm) {
    /* eslint-disable no-console */
    console.error(msg);
    /* eslint-enable no-console */
    return;
  }
  vm.constructor.super.util.warn(msg, vm);
}

module.exports = {
  assign,
  warn,
  escapeHTML,
  getId
};
