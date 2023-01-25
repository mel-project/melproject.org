var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/index.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);
  for (const k in props)
    if (!keys.has(k) && k[0] !== "$")
      rest[k] = props[k];
  return rest;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
function set_current_component(component7) {
  current_component = component7;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function spread(args, attrs_to_add) {
  const attributes = Object.assign({}, ...args);
  if (attrs_to_add) {
    const classes_to_add = attrs_to_add.classes;
    const styles_to_add = attrs_to_add.styles;
    if (classes_to_add) {
      if (attributes.class == null) {
        attributes.class = classes_to_add;
      } else {
        attributes.class += " " + classes_to_add;
      }
    }
    if (styles_to_add) {
      if (attributes.style == null) {
        attributes.style = style_object_to_string(styles_to_add);
      } else {
        attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
      }
    }
  }
  let str = "";
  Object.keys(attributes).forEach((name) => {
    if (invalid_attribute_name_character.test(name))
      return;
    const value = attributes[name];
    if (value === true)
      str += " " + name;
    else if (boolean_attributes.has(name.toLowerCase())) {
      if (value)
        str += " " + name;
    } else if (value != null) {
      str += ` ${name}="${value}"`;
    }
  });
  return str;
}
function merge_ssr_styles(style_attribute, style_directive) {
  const style_object = {};
  for (const individual_style of style_attribute.split(";")) {
    const colon_index = individual_style.indexOf(":");
    const name = individual_style.slice(0, colon_index).trim();
    const value = individual_style.slice(colon_index + 1).trim();
    if (!name)
      continue;
    style_object[name] = value;
  }
  for (const name in style_directive) {
    const value = style_directive[name];
    if (value) {
      style_object[name] = value;
    } else {
      delete style_object[name];
    }
  }
  return style_object;
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function escape_attribute_value(value) {
  const should_escape = typeof value === "string" || value && typeof value === "object";
  return should_escape ? escape(value, true) : value;
}
function escape_object(obj) {
  const result = {};
  for (const key2 in obj) {
    result[key2] = escape_attribute_value(obj[key2]);
  }
  return result;
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component7, name) {
  if (!component7 || !component7.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
  }
  return component7;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css11) => css11.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
function style_object_to_string(style_object) {
  return Object.keys(style_object).filter((key2) => style_object[key2]).map((key2) => `${key2}: ${escape_attribute_value(style_object[key2])};`).join(" ");
}
var current_component, boolean_attributes, invalid_attribute_name_character, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    Promise.resolve();
    boolean_attributes = /* @__PURE__ */ new Set([
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "inert",
      "ismap",
      "itemscope",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected"
    ]);
    invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/chunks/index2.js
function error(status, message) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  return new HttpError(status, message);
}
function redirect(status, location) {
  if (isNaN(status) || status < 300 || status > 308) {
    throw new Error("Invalid status code");
  }
  return new Redirect(status, location);
}
function json(data2, init2) {
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(JSON.stringify(data2), {
    ...init2,
    headers
  });
}
var HttpError, Redirect, ActionFailure;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    HttpError = class {
      constructor(status, body) {
        this.status = status;
        if (typeof body === "string") {
          this.body = { message: body };
        } else if (body) {
          this.body = body;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class {
      constructor(status, location) {
        this.status = status;
        this.location = location;
      }
    };
    ActionFailure = class {
      constructor(status, data2) {
        this.status = status;
        this.data = data2;
      }
    };
  }
});

// .svelte-kit/output/server/chunks/index3.js
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };
    const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
      values[i] = value;
      pending &= ~(1 << i);
      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
    };
  });
}
var subscriber_queue;
var init_index3 = __esm({
  ".svelte-kit/output/server/chunks/index3.js"() {
    init_chunks();
    subscriber_queue = [];
  }
});

// .svelte-kit/output/server/chunks/hooks.js
var hooks_exports = {};
var init_hooks = __esm({
  ".svelte-kit/output/server/chunks/hooks.js"() {
  }
});

// .svelte-kit/output/server/chunks/stores.js
var getStores, page;
var init_stores = __esm({
  ".svelte-kit/output/server/chunks/stores.js"() {
    init_chunks();
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        updated: stores.updated
      };
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
  }
});

// .svelte-kit/output/server/chunks/_page.svelte_svelte_type_style_lang.js
var data, Language, _localize, lang, localize, home_page, replace_lang;
var init_page_svelte_svelte_type_style_lang = __esm({
  ".svelte-kit/output/server/chunks/_page.svelte_svelte_type_style_lang.js"() {
    init_index3();
    init_stores();
    data = {
      components: { en: "Components" },
      technology: { en: "Technology" },
      roadmap: { en: "Roadmap" },
      test: {
        en: "testing in en",
        zhs: "testing in zhs",
        zht: "testing in zht"
      },
      langname: {
        en: "English",
        zhs: "\u7B80\u4F53\u4E2D\u6587",
        zht: "\u7E41\u9AD4\u4E2D\u6587"
      },
      langcode: {
        en: "en-US",
        zhs: "zh-CN",
        zht: "zh-TW"
      },
      username: {
        en: "Username",
        zhs: "\u7528\u6237\u540D",
        zht: "\u7528\u6236\u540D"
      },
      password: {
        en: "Password",
        zhs: "\u5BC6\u7801",
        zht: "\u5BC6\u78BC"
      },
      home: {
        en: "Home",
        zhs: "\u4E3B\u9875",
        zht: "\u4E3B\u9801"
      },
      "user-portal": {
        en: "User portal",
        zhs: "\u8D26\u6237\u7BA1\u7406",
        zht: "\u8CEC\u6236\u7BA1\u7406"
      },
      policies: {
        en: "Policies",
        zhs: "\u6761\u6B3E",
        zht: "\u689D\u6B3E"
      },
      login: {
        en: "Log in",
        zhs: "\u767B\u5F55",
        zht: "\u767B\u9304"
      },
      email_required: {
        en: "Giftcard recipient email field is required",
        zhs: "\u8BF7\u586B\u5199\u6536\u793C\u54C1\u5361\u7684\u90AE\u4EF6",
        zht: "\u8ACB\u586B\u5BEB\u6536\u79AE\u54C1\u5361\u7684\u90F5\u4EF6"
      },
      sender_required: {
        en: "Giftcard sender field is required",
        zhs: "\u8BF7\u586B\u5199\u793C\u54C1\u5361\u8D60\u9001\u4EBA",
        zht: "\u8ACB\u586B\u5BEB\u79AE\u54C1\u5361\u8D08\u9001\u4EBA"
      },
      geph: {
        en: "Geph",
        zhs: "\u8FF7\u96FE\u901A",
        zht: "\u8FF7\u9727\u901A"
      },
      hero: {
        en: "Blast through censorship.",
        zhs: "\u51B2\u7834\u7F51\u7EDC\u5C01\u9501",
        zht: "\u885D\u7834\u7DB2\u7D61\u5C01\u9396"
      },
      sub_hero: {
        en: "Geph connects you with the censorship-free Internet, even when nothing else works.",
        zhs: "\u5176\u5B83\u8F6F\u4EF6\u90FD\u5931\u7075\u65F6\uFF0C\u7528\u8FF7\u96FE\u901A\u8FDE\u63A5\u81EA\u7531\u7684\u7F51\u7EDC\uFF01",
        zht: "\u5176\u5B83\u8EDF\u4EF6\u90FD\u5931\u9748\u6642\uFF0C\u7528\u8FF7\u9727\u901A\u9023\u63A5\u81EA\u7531\u7684\u7DB2\u7D61\uFF01"
      },
      footer: {
        en: "Client Portal",
        zhs: "\u7528\u6237\u4E2D\u5FC3",
        zht: "\u7528\u6237\u4E2D\u5FC3"
      },
      "robust-zk-privacy": {
        en: "Robust zero-knowledge privacy",
        zhs: "\u5F3A\u5927\u7684\u9690\u79C1\u4FDD\u62A4",
        zht: "\u5F37\u5927\u7684\u96B1\u79C1\u4FDD\u8B77"
      },
      "robust-zk-privacy-blurb": {
        en: "We don't log you \u2014 because we can't. We use zero-knowledge authentication so that we can never associate your browsing activity with your identity.",
        zhs: "\u6211\u4EEC\u4ECE\u4E0D\u8BB0\u5F55\u60A8\u7684\u6D4F\u89C8\u4FE1\u606F\uFF0C\u56E0\u4E3A\u6211\u4EEC\u65E0\u6CD5\u8BB0\u5F55\u3002\u6211\u4EEC\u7528\u96F6\u77E5\u8BC6\u8BA4\u8BC1\uFF0C\u4EE5\u786E\u4FDD\u6211\u4EEC\u6C38\u8FDC\u65E0\u6CD5\u5C06\u60A8\u7684\u6D4F\u89C8\u6D3B\u52A8\u4E0E\u60A8\u7684\u8EAB\u4EFD\u8054\u7CFB\u8D77\u6765\u3002",
        zht: "\u6211\u5011\u5F9E\u4E0D\u8A18\u9304\u60A8\u7684\u4FE1\u606F \u2014 \u56E0\u70BA\u6211\u5011\u4E5F\u7121\u6CD5\u9019\u9EBC\u505A\u3002\u6211\u5011\u4F7F\u7528\u96F6\u77E5\u8B58\u8A8D\u8B49\uFF0C\u4EE5\u78BA\u4FDD\u6211\u5011\u6C38\u9060\u7121\u6CD5\u5C07\u60A8\u7684\u700F\u89BD\u6D3B\u52D5\u8207\u60A8\u7684\u8EAB\u4EFD\u806F\u7E6B\u8D77\u4F86\u3002"
      },
      "resilient-anti-censorship": {
        en: "Resilient anti-censorship",
        zhs: "\u4E0D\u6015\u5C01\u9501",
        zht: "\u4E0D\u6015\u5C01\u9396"
      },
      "resilient-anti-censorship-blurb": {
        en: "Geph is on the cutting edge of censorship circumvention research. We have overcome numerous targeted attacks by China's Great Firewall, the world's most sophisticated national internet filter.",
        zhs: "\u8FF7\u96FE\u901A\u4E00\u76F4\u5904\u4E8E\u5BA1\u67E5\u89C4\u907F\u7814\u7A76\u7684\u6700\u524D\u6CBF\u3002\u6211\u4EEC\u4E0D\u6015\u5C01\u9501\u673A\u5236\u7684\u9488\u5BF9\u2014\u2014\u8FF7\u96FE\u901A\u5DF2\u7ECF\u6210\u529F\u62B5\u5FA1\u4E86\u591A\u6B21\u6765\u81EA\u4E2D\u56FD\u7684\u9632\u706B\u957F\u57CE\uFF08GFW\uFF09\u53D1\u8D77\u7684\u5C01\u9501\u3002",
        zht: "\u8FF7\u9727\u901A\u4E00\u76F4\u8655\u65BC\u5BE9\u67E5\u898F\u907F\u7814\u7A76\u7684\u6700\u524D\u6CBF\u3002\u6211\u5011\u4E0D\u6015\u5C01\u9396\u6A5F\u5236\u7684\u91DD\u5C0D\u2014\u2014\u8FF7\u9727\u901A\u5DF2\u7D93\u6210\u529F\u62B5\u79A6\u4E86\u591A\u6B21\u4F86\u81EA\u4E2D\u570B\u7684\u9632\u706B\u9577\u57CE\uFF08GFW\uFF09\u767C\u8D77\u7684\u5C01\u9396\u3002"
      },
      "accessible-to-all": {
        en: "Accessible to all",
        zhs: "\u7B80\u5355\u6613\u7528",
        zht: "\u7C21\u55AE\u6613\u7528"
      },
      "accessible-to-all-blurb": {
        en: "We believe that internet freedom and privacy is a basic right. So we offer entirely free medium-speed browsing for everyone. Greatly enhanced speed can be purchased for just \u20AC5/month.",
        zhs: "\u6211\u4EEC\u8BA4\u4E3A\u4E92\u8054\u7F51\u81EA\u7531\u548C\u9690\u79C1\u662F\u4E00\u9879\u57FA\u672C\u6743\u5229\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u4E3A\u6BCF\u4E2A\u4EBA\u63D0\u4F9B\u5B8C\u5168\u514D\u8D39\u7684\u4E2D\u901F\u6D4F\u89C8\u3002\u4EC55\u6B27\u5143/\u6708\u5373\u53EF\u8D2D\u4E70\u5927\u5927\u63D0\u9AD8\u7684\u901F\u5EA6\u3002",
        zht: "\u6211\u5011\u8A8D\u70BA\u4E92\u806F\u7DB2\u81EA\u7531\u548C\u96B1\u79C1\u662F\u4E00\u9805\u57FA\u672C\u6B0A\u5229\u3002\u56E0\u6B64\uFF0C\u6211\u5011\u70BA\u6BCF\u500B\u4EBA\u63D0\u4F9B\u5B8C\u5168\u514D\u8CBB\u7684\u4E2D\u901F\u700F\u89BD\u3002\u50C55\u6B50\u5143/\u6708\u5373\u53EF\u8CFC\u8CB7\u5927\u5927\u63D0\u9AD8\u7684\u901F\u5EA6\u3002"
      },
      "transparent-and-accountable": {
        en: "Transparent and accountable",
        zhs: "\u900F\u660E\u8D1F\u8D23",
        zht: "\u900F\u660E\u8CA0\u8CAC"
      },
      "transparent-and-accountable-blurb": {
        en: "Geph's entire software stack is open source and available on GitHub. Our managing organization is registered in Estonia, an EU jurisdiction with strong privacy laws.",
        zhs: "\u8FF7\u96FE\u901A\u7684\u6574\u4E2A\u8F6F\u4EF6\u67B6\u6784\u90FD\u662F\u5F00\u6E90\u7684\uFF0C\u53EF\u4EE5\u5728GitHub\u4E0A\u83B7\u5F97\u3002\u6211\u4EEC\u5728\u62E5\u6709\u5F3A\u5927\u9690\u79C1\u4FDD\u62A4\u7684\u6B27\u76DF\u56FD\u5BB6\u7231\u6C99\u5C3C\u4E9A\u6CE8\u518C\u3002",
        zht: "\u8FF7\u9727\u901A\u7684\u6574\u500B\u8EDF\u4EF6\u67B6\u69CB\u90FD\u662F\u958B\u6E90\u7684\uFF0C\u53EF\u4EE5\u5728GitHub\u4E0A\u7372\u5F97\u3002\u6211\u5011\u5728\u64C1\u6709\u5F37\u5927\u96B1\u79C1\u4FDD\u8B77\u7684\u6B50\u76DF\u570B\u5BB6\u611B\u6C99\u5C3C\u4E9E\u8A3B\u518A\u3002"
      },
      download: {
        en: "Download",
        zhs: "\u4E0B\u8F7D",
        zht: "\u4E0B\u8F09"
      },
      community: {
        en: "Community",
        zhs: "\u793E\u533A",
        zht: "\u793E\u5340"
      },
      forum: {
        en: "Discourse forum",
        zhs: "Discourse \u8BBA\u575B",
        zht: "Discourse \u8AD6\u58C7"
      },
      "incorrect-login": {
        en: "Incorrect username or password",
        zhs: "\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF",
        zht: "\u7528\u6236\u540D\u6216\u5BC6\u78BC\u932F\u8AA4"
      },
      loading: {
        en: "Loading...",
        zhs: "\u52A0\u8F7D\u4E2D...",
        zht: "\u52A0\u8F09\u4E2D..."
      },
      "account-overview": {
        en: "Account overview",
        zhs: "\u5E10\u6237\u6982\u89C8",
        zht: "\u5E33\u6236\u6982\u89BD"
      },
      "internal-server-error": {
        en: "Internal server error",
        zhs: "\u5185\u90E8\u670D\u52A1\u5668\u9519\u8BEF",
        zht: "\u5167\u90E8\u4F3A\u670D\u5668\u932F\u8AA4"
      },
      "unknown-error": {
        en: "Unknown error",
        zhs: "\u672A\u77E5\u9519\u8BEF",
        zht: "\u672A\u77E5\u932F\u8AA4"
      },
      "remaining-days": {
        en: "Remaining days:",
        zhs: "\u5269\u4F59\u5929\u6570\uFF1A",
        zht: "\u5269\u9918\u5929\u6578\uFF1A"
      },
      "buy-plus": {
        en: "Buy Plus",
        zhs: "\u8D2D\u4E70 Plus",
        zht: "\u8CFC\u8CB7 Plus"
      },
      "redeem-giftcard": {
        en: "Redeem giftcard",
        zhs: "\u5151\u6362\u793C\u54C1\u5361",
        zht: "\u514C\u63DB\u79AE\u54C1\u5361"
      },
      "bad-request": {
        en: "Bad request",
        zhs: "\u9519\u8BEF\u8BF7\u6C42",
        zht: "\u932F\u8AA4\u8ACB\u6C42"
      },
      "duplicate-payments": {
        en: "Duplicate payments",
        zhs: "\u91CD\u590D\u4ED8\u6B3E",
        zht: "\u91CD\u8907\u4ED8\u6B3E"
      },
      "who-is-the-plus-for": {
        en: "Who is the Plus for?",
        zhs: "\u7ED9\u8C01\u4E70 Plus\uFF1F",
        zht: "\u7D66\u8AB0\u8CB7 Plus\uFF1F"
      },
      myself: {
        en: "Myself",
        zhs: "\u6211\u81EA\u5DF1",
        zht: "\u6211\u81EA\u5DF1"
      },
      "someone-else": {
        en: "Someone else",
        zhs: "\u5176\u4ED6\u4EBA",
        zht: "\u5176\u4ED6\u4EBA"
      },
      sender: {
        en: "Sender",
        zhs: "\u53D1\u9001\u8005",
        zht: "\u767C\u9001\u8005"
      },
      "sender-invalid-blurb": {
        en: "Sender is required",
        zhs: "\u5FC5\u987B\u8981\u6709\u53D1\u9001\u8005",
        zht: "\u5FC5\u9808\u8981\u6709\u767C\u9001\u8005"
      },
      "recipient-email": {
        en: "Recipient email",
        zhs: "\u6536\u4EF6\u8005\u7684\u7535\u5B50\u90AE\u4EF6",
        zht: "\u6536\u4EF6\u8005\u7684\u96FB\u5B50\u90F5\u4EF6"
      },
      "recipient-invalid-blurb": {
        en: "You must specify someone to receive the gift card",
        zhs: "\u60A8\u5FC5\u987B\u6307\u5B9A\u67D0\u4EBA\u6765\u6536\u53D6\u793C\u54C1\u5361",
        zht: "\u60A8\u5FC5\u9808\u6307\u5B9A\u67D0\u4EBA\u4F86\u6536\u53D6\u79AE\u54C1\u5361"
      },
      "choose-a-plan-length": {
        en: "Choose a plan length",
        zhs: "\u8BA2\u9605\u65F6\u957F",
        zht: "\u8A02\u95B1\u6642\u9577"
      },
      "got-a-promo-code": {
        en: "Got a promo code?",
        zhs: "\u4F18\u60E0\u7801",
        zht: "\u512A\u60E0\u78BC"
      },
      "promo-code": {
        en: "Promo code",
        zhs: "\u4F18\u60E0\u7801",
        zht: "\u512A\u60E0\u78BC"
      },
      "choose-a-payment-method": {
        en: "Choose a payment method",
        zhs: "\u4ED8\u6B3E\u65B9\u5F0F",
        zht: "\u4ED8\u6B3E\u65B9\u5F0F"
      },
      "bank-card": {
        en: "Bank card",
        zhs: "\u94F6\u884C\u5361",
        zht: "\u9280\u884C\u5361"
      },
      alipay: {
        en: "Alipay",
        zhs: "\u652F\u4ED8\u5B9D",
        zht: "\u652F\u4ED8\u5BF6"
      },
      wxpay: {
        en: "WeChat Pay",
        zhs: "\u5FAE\u4FE1\u652F\u4ED8",
        zht: "\u5FAE\u4FE1\u652F\u4ED8"
      },
      total: {
        en: "Total:",
        zhs: "\u603B\u8BA1\uFF1A",
        zht: "\u7E3D\u8A08\uFF1A"
      },
      pay: {
        en: "Check out",
        zhs: "\u7ED3\u8D26",
        zht: "\u7D50\u8CEC"
      },
      "1-month": {
        en: "1 month (30 days)",
        zhs: "1 \u4E2A\u6708\uFF0830 \u5929\uFF09",
        zht: "1 \u500B\u6708\uFF0830 \u5929\uFF09"
      },
      "3-months": {
        en: "3 months (90 days)",
        zhs: "3 \u4E2A\u6708\uFF0890 \u5929\uFF09",
        zht: "3 \u500B\u6708\uFF0890 \u5929\uFF09"
      },
      "1-year": {
        en: "1 year (365 days)",
        zhs: "1 \u5E74\uFF08365 \u5929\uFF09",
        zht: "1 \u5E74\uFF08365 \u5929\uFF09"
      },
      custom: {
        en: "Custom (days)",
        zhs: "\u81EA\u5B9A\u4E49\uFF08\u5929\uFF09",
        zht: "\u81EA\u5B9A\u7FA9\uFF08\u5929\uFF09"
      },
      crypto: {
        en: "Cryptocurrency",
        zhs: "\u52A0\u5BC6\u8D27\u5E01",
        zht: "\u52A0\u5BC6\u8CA8\u5E63"
      },
      "crypto-payment": {
        en: "Cryptocurrency payment",
        zhs: "\u52A0\u5BC6\u8D27\u5E01\u652F\u4ED8",
        zht: "\u52A0\u5BC6\u8CA8\u5E63\u652F\u4ED8"
      },
      "choose-a-currency": {
        en: "Choose a currency",
        zhs: "\u8BF7\u9009\u62E9\u8D27\u5E01",
        zht: "\u8ACB\u9078\u64C7\u8CA8\u5E63"
      },
      btc: {
        en: "Bitcoin",
        zhs: "\u6BD4\u7279\u5E01",
        zht: "\u6BD4\u7279\u5E63"
      },
      eth: {
        en: "Ethereum",
        zhs: "\u4EE5\u592A\u574A",
        zht: "\u4EE5\u592A\u574A"
      },
      xmr: {
        en: "Monero",
        zhs: "\u95E8\u7F57\u5E01",
        zht: "\u9580\u7F85\u5E63"
      },
      usdttrc20: {
        en: "USDT",
        zhs: "USDT",
        zht: "USDT"
      },
      usdterc20: {
        en: "USDT",
        zhs: "USDT",
        zht: "USDT"
      },
      usdt: {
        en: "USDT",
        zhs: "USDT",
        zht: "USDT"
      },
      usdc: {
        en: "USDC",
        zhs: "USDC",
        zht: "USDC"
      },
      usdcsol: {
        en: "USDC",
        zhs: "USDC",
        zht: "USDC"
      },
      usdctrc20: {
        en: "USDC",
        zhs: "USDC",
        zht: "USDC"
      },
      doge: {
        en: "Dogecoin",
        zhs: "\u72D7\u72D7\u5E01",
        zht: "\u72D7\u72D7\u5E63"
      },
      "giftcard-id": {
        en: "Giftcard ID",
        zhs: "\u793C\u54C1\u5361\u53F7",
        zht: "\u79AE\u54C1\u5361\u865F"
      },
      redeem: {
        en: "Redeem",
        zhs: "\u5151\u6362",
        zht: "\u514C\u63DB"
      },
      "incorrect-giftcard": {
        en: "No such giftcard",
        zhs: "\u65E0\u6B64\u793C\u54C1\u5361",
        zht: "\u7121\u6B64\u79AE\u54C1\u5361"
      },
      "giftcard-days": {
        en: "Days in giftcard: ",
        zhs: "\u793C\u54C1\u5361\u6709\u6548\u5929\u6570\uFF1A",
        zht: "\u79AE\u54C1\u5361\u6709\u6548\u5929\u6578\uFF1A"
      },
      "giftcard-applied": {
        en: "Giftcard applied",
        zhs: "\u793C\u54C1\u5361\u5DF2\u5E94\u7528",
        zht: "\u79AE\u54C1\u5361\u5DF2\u61C9\u7528"
      },
      "please-send-funds": { en: "Send cryptocurrency to the following address" },
      amount: { en: "Amount" },
      "to-this-address": { en: "To this address" },
      waiting: { en: "Awaiting deposit" },
      confirming: { en: "Confirming" },
      exchanging: { en: "Exchanging" },
      finished: { en: "Finished" },
      failed: { en: "Failed" },
      refunded: { en: "Refunded" },
      verifying: { en: "Verifying" },
      "return-to-portal": { en: "Return to user portal" },
      page1_monetary_infrastructure: { en: "                    <h2>Monetary infrastructure <br />for a better future</h2> <p> The future we are building needs a new kind of money \u2014 MEL is the first cryptocurrency that\u2019s both stable and trustless. It\u2019s the first truly decentralized unit of account, changing everything from payments to incentive design. </p> " }
    };
    Language = ["en", "zht", "zhs"];
    _localize = ($lang) => (name, toLang) => {
      let lang2 = toLang || $lang;
      if (data[name]) {
        let value = data[name][lang2];
        if (value) {
          return value;
        }
      }
      return "!!MISSING!! " + name + " " + lang2;
    };
    lang = derived(page, ($page) => {
      return $page.params.lang;
    });
    localize = derived(
      lang,
      ($lang) => _localize($lang)
    );
    home_page = derived(page, ($page) => {
      return "/" + $page.params.lang;
    });
    replace_lang = derived(
      page,
      ($page) => {
        let lang2 = $page.params.lang;
        let path = $page.url.toString();
        return (toLang) => path.replace("/" + lang2, "/" + toLang);
      }
    );
  }
});

// .svelte-kit/output/server/chunks/BubbleBackground.svelte_svelte_type_style_lang.js
var css, Variant, variant_map, Banner, color, Colors;
var init_BubbleBackground_svelte_svelte_type_style_lang = __esm({
  ".svelte-kit/output/server/chunks/BubbleBackground.svelte_svelte_type_style_lang.js"() {
    init_chunks();
    css = {
      code: ':root{--white:#fafdfc;--teal:#9af3d3;--light-teal:#E5FAF6;--purple:#895abf;--green:#21d849;--light-blue:#69cfff;--blue_green:#7de8d3}.banner.fill.svelte-xyw18m{margin:0}.banner.svelte-xyw18m{position:relative;display:flex;flex-direction:row;margin:1rem;padding:2rem;border-radius:0.7rem;align-items:center;justify-content:center;justify-items:center;overflow:hidden}.banner.header.svelte-xyw18m{display:flex;align-items:baseline}.banner.wide.svelte-xyw18m{height:30rem}.background.svelte-xyw18m{position:absolute;border-radius:inherit;z-index:0}.background.plain.svelte-xyw18m{width:100%;height:100%;background-color:var(--light-teal)}.background.gradient1.svelte-xyw18m{width:100%;height:100%;background-image:radial-gradient(150% 150% at 150% 0%, #9af3d2 10%, white)}.background.white.svelte-xyw18m{display:none}.background.clear.svelte-xyw18m{background-color:transparent}.content.column.svelte-xyw18m{display:flex;flex-direction:column}.content.svelte-xyw18m{display:flex;justify-content:space-around;z-index:999;width:100%}.noise.svelte-xyw18m{position:absolute;width:100%;aspect-ratio:1/1;background-size:70rem 70rem;object-fit:cover;background-image:url("../../assets/images/noise.png");background-repeat:repeat;z-index:1;opacity:10%;mix-blend-mode:multiply;transition:1000ms all}.noise.hover.svelte-xyw18m{opacity:0%;filter:brightness(60%) contrast(5%) saturate(0%) invert(100%)}.white.svelte-xyw18m{background:white}',
      map: null
    };
    Variant = ["plain", "gradient1", "clear", "white"];
    variant_map = {
      plain: "plain",
      gradient1: "gradient1 wide",
      clear: "clear",
      white: "white"
    };
    Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { class: _class = "" } = $$props;
      let { id: _id = "" } = $$props;
      let id = _id;
      let { size = "normal" } = $$props;
      let { variant: _variant_name = "plain" } = $$props;
      let variant = variant_map[_variant_name];
      let { column = false } = $$props;
      let { noise = false } = $$props;
      let { fill = false } = $$props;
      let { header = false } = $$props;
      if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
        $$bindings.class(_class);
      if ($$props.id === void 0 && $$bindings.id && _id !== void 0)
        $$bindings.id(_id);
      if ($$props.size === void 0 && $$bindings.size && size !== void 0)
        $$bindings.size(size);
      if ($$props.variant === void 0 && $$bindings.variant && _variant_name !== void 0)
        $$bindings.variant(_variant_name);
      if ($$props.column === void 0 && $$bindings.column && column !== void 0)
        $$bindings.column(column);
      if ($$props.noise === void 0 && $$bindings.noise && noise !== void 0)
        $$bindings.noise(noise);
      if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
        $$bindings.fill(fill);
      if ($$props.header === void 0 && $$bindings.header && header !== void 0)
        $$bindings.header(header);
      $$result.css.add(css);
      return `<div${add_attribute("id", id, 0)} class="${[
        "banner " + escape(_class, true) + " " + escape(variant, true) + " content-container " + escape(size, true) + " svelte-xyw18m",
        (fill ? "fill" : "") + " " + (header ? "header" : "")
      ].join(" ").trim()}"><div class="${["filter svelte-xyw18m", noise ? "noise" : ""].join(" ").trim()}"></div>
        <div class="${"background " + escape(variant, true) + " svelte-xyw18m"}"></div>
        <div class="${["content " + escape(variant, true) + " svelte-xyw18m", column ? "column" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>
    </div>`;
    });
    color = "/* Variables and mixins declared here will be available in all other SCSS files */\n/* Override Bootstrap's variables here */\n:root {\n  --white: #fafdfc;\n  --teal: #9af3d3;\n  --light-teal: #E5FAF6;\n  --purple: #895abf;\n  --green: #21d849;\n  --light-blue: #69cfff;\n  --blue_green: #7de8d3;\n}";
    console.log(color);
    Colors = {
      teal: "#9AF3D3",
      purple: "#895ABF",
      green: "#21D849",
      light_blue: "#69CFFF",
      blue_green: "E87D92"
    };
  }
});

// .svelte-kit/output/server/chunks/GradientBubble.js
var css2, random_placement, GradientBubble;
var init_GradientBubble = __esm({
  ".svelte-kit/output/server/chunks/GradientBubble.js"() {
    init_chunks();
    init_BubbleBackground_svelte_svelte_type_style_lang();
    css2 = {
      code: ":root{--white:#fafdfc;--teal:#9af3d3;--light-teal:#E5FAF6;--purple:#895abf;--green:#21d849;--light-blue:#69cfff;--blue_green:#7de8d3}.gradient-bubble.svelte-1tx0jrz{--primary-color:colors.$teal;position:absolute;z-index:-999;width:1rem;height:1rem;background:radial-gradient(circle at center, var(--primary-color) 30%, rgba(255, 255, 255, 0) 70%);opacity:10%}",
      map: null
    };
    random_placement = () => {
      console.log("called random");
      return [Math.random() * 100, Math.random() * 100];
    };
    GradientBubble = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { class: _class = "" } = $$props;
      let { color: color2 = Colors.teal } = $$props;
      let { opacity = 40 } = $$props;
      let { scale = 10 } = $$props;
      let { offset = [0, 0] } = $$props;
      let { z_index = -4 } = $$props;
      if (offset == "random") {
        let r = random_placement();
        offset = [r[0] + "%", r[1] + "%"];
      }
      if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
        $$bindings.class(_class);
      if ($$props.color === void 0 && $$bindings.color && color2 !== void 0)
        $$bindings.color(color2);
      if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
        $$bindings.opacity(opacity);
      if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
        $$bindings.scale(scale);
      if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
        $$bindings.offset(offset);
      if ($$props.z_index === void 0 && $$bindings.z_index && z_index !== void 0)
        $$bindings.z_index(z_index);
      $$result.css.add(css2);
      return `
    <div class="${escape(null_to_empty("gradient-bubble " + _class), true) + " svelte-1tx0jrz"}" style="${"left: calc(" + escape(offset[0], true) + "; top: calc(" + escape(offset[1], true) + "; transform: scale(" + escape(scale, true) + "); --primary-color: " + escape(color2, true) + "; opacity: " + escape(opacity, true) + "%; z-index: " + escape(z_index, true) + ";"}"></div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var Logo, css$1, Navbar, communityIcons, css3, Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_chunks();
    init_page_svelte_svelte_type_style_lang();
    init_BubbleBackground_svelte_svelte_type_style_lang();
    init_GradientBubble();
    init_stores();
    Logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAA+CAYAAACC5jGMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgHSURBVHgB7Z3xdds2EMa/9vX/qhP0MkHdCYpO0HQCIxPEmUDMBE4mEDNB3AnITJB0AjETWJ0g5ZlEDIE4EiRlSrLu9x6eTRAgIPDj4XggJeDpoTrd1mlbp291uq/Tps1XlLNhVac1GgF/E5IKWzkLLB4t8lDicmsoygli6lRAtsa2TjlkYVsoygnA7gULNiZUFrgJyhNkYX+EuiHKkejzk9nivhyoT5BdE/WvlUUxiIuRxZ2hEXsqVjiWuiHKk3OFfj+ZMA1CcyFI/vWQtVeUUbDF5Xhyqp88FYLsX6sbohyE14j7yZxn8TSwRZb86zVU2MoETJ0+4zB+8lQs1L9WZkKQ/eQCy1tHQn/8mqAoEfrCcGypDY4LoYlTq3+tDNLnJ9/gtLDo96+VC4dFEBPHOyzjJ08lQ1zYGygXC8eV5/rJLHqLJqzHYsqwnHtCiPvXpzarKAvh+6TsXpgRdV1sWnpEdItlhe1b63soF4kvxmxEPUL6I6JrLIMJ2iUoF4cvADuiXqqYXVpi6Zqggr5ofsQ02OJSkJfX6e86/V6nV3Wqgv0bnPYNpvJMmGKhQ+scuwGjxHKHhKAW+qL5CePhqAh52yWa8F5IhcZSF16eEcqeI+xC+TPOXZ12UEJ4jHx3s0KjGcZgX0uzx3CKoCnY/qenbImmg+7E/4Zh3AUTuid8nDucDrwQZbztEiroGO5tJkeJR0HbOl17+ypv3ySmCDomtD52GPadCY1A7EDZF+j65ocm8/7nvj+XGeUimCLoEMI8+Ao9pRVJP8RYQQX9lJRo7nUcs2e4KYL+Emz/iumwVX6ugiE8Xuwl0iE81uOxnnqSqU07dM/ZlHJSPWB6P/M2pbBqEw21OTbKwQf1F2Pu0W9d/UjH1ssnxOPVvHKZRZLFMIRpUQ5CejzdUQhtxR7y4u11T/t9K65byC80+OU2bZ5BN7rkjuHzMtJerJwPDfTTCnX8coW3Lw/2mUh909aRngC1YYWxgga6JzPrKesPri/oDboDQpgH4biCXg/UvY20zTfB9wntxsYnFPTQ57hp69kJ/bye2M+wT4W3L0e/oG8T2nPHXMUGxSINg64FIqHsFl1BU6RThPnQxGMS0gauT9Amsb4J2o1Z8y3kt3T82TAUdDHQtptNtwn99Nu5Eo4l9bMIPuMUQa8T+tg57tSVwhL7fuEK8hN6u8j/V0GZ93j66EUf3K8/2yTlx/b7sKtRoom9u/QhUs6PyfJJWwVt/YImmuOSfwyCbHSoTW972neuDfMG/f203v8fvf8roZ+lV8Zg3kNphO6sn6PpqzsP3Odd0ObD2E6x0ExsqtxC9qM4rSJ5hMNBmG/1w88jUaBrIWO8C8rdtfmrxPrhPUsh9DW0cI4MabNhLvQntM4Wcj9j9QnjLfRNkH8rtGnCY4+JcnCHfcvKd5lvsH8iqN1eozlxn5B290tCfoXjWu4xvBfyczTW2/Fz+zecpQhpLyaQkM/jXEby+TysvW0uU0XKcf51JD/sJ5f5A8MQpvNXsP1BKFdif53jaoyg3RfMOHhqy9r/wxNBaK6yG8yjQjOdnQO7kflhZMhg2fZDKiGfgm2D5dkN7HNjuTrEwkqO5kqRfGglDbbwKXHgKfHeOVTBNhup/zDMnH6Oqesbht0hBM1UaCypRTMlGShDhOKtEF9k8G/kmH+xLFWw/RXxZ2p4Bvddq0+Yztdg2yIeGuY2fUFXhxK0I28T4fEho/BOni0R+2AmqPc1crwKx4XQuFP+yclxGCrsT5cshjt0PzMbCOtt88Ng77AcbkXO9XPd5lVBOfZ7rbedYsUleBz8i+N1296d1xfWV+jqPtzHpNzBAt273dRB9et8bvNuRrQ7BsL8KEfsm6L85CgS2yLId/k3iMdTP7ZpG9lvvfopERnqad/HQI66ZEI/Nz39pIT2c8hRmgL95+Fb5PM/XHSpwooteQ9hEQ9ZvYQ8eHMgzBd02LcwOYrEtgj9gsqRftJCI7KUoPncD13ofsoS288hC3pMm9u2nVELK2zqvwQNrnvKx/Y7QZfYd/wtuuGhY8F95FfJKiyDRfyVNR8eKw6Rzo0aTYXb51frOLJV9ZQr0Sx6ZFiuzbxt86HMD9i3Oq/Q7yMadK/wrG3Uh9BMRb5IK+yH4NjavA72v8U8H5Wwb6leYJ4ww5sOphT2lcIxnL/nCA2DjwmOW7Vl+8oPHTe1/bBcBXnszIh+9rUfjqHz14fa3OHxZYC98mMFjXb/dZBXeZ0hxKMc4bG5Y9/9Hg9pYCp0L5wQwmEFrZwhqT60Y6w/FfpUPnzFpTzBleoT08jyyjNkrKAZFnWOYQGmfNEji3oLFbRyIKYI2mEQ/3pb94XohHQshi3/auAYBBX0RcMLK37QnDCOEo83Q+TlVxhP3qYVZOHu0I+BcvEU2LesFueJgfx2jHJBGHSn9nP6NVe25ht0P4OFcrFkiPusLBTCaeIWbmJRkhzKxWNxPr82ZSD/iu1QVEW5INjqZZDXyy2Oi0H/r9gORUGUC4VwWr/m6p4JjvWHBW6gKAkYyIseLDDC0yP9OtcpukLKmWCxvH9tIPvJGdS9UGZC6L6S7wv7CoeBIPvJ5xROVM4EwtP41y4Mp36ychQsDvdrruf0K7bKM4cFN9W/NpDdiwzqJytHgiC7IZ/RdUN4W/oR+gLqJysnAkF+BHSDxmKzOyKF4QwU5QSxSH9o34XhFOXkydAvZg4Dqp+snBWExr92rghbbnY/DBTlwPwPD9wctJ3kPoEAAAAASUVORK5CYII=";
    css$1 = {
      code: ".navbar-brand.svelte-7l35gh{font-weight:500}.active.svelte-7l35gh{font-weight:500}nav.navbar.svelte-7l35gh{background-color:white !important}",
      map: null
    };
    Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let display_language;
      let pathname;
      let $page, $$unsubscribe_page;
      let $home_page, $$unsubscribe_home_page;
      let $localize, $$unsubscribe_localize;
      let $replace_lang, $$unsubscribe_replace_lang;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_home_page = subscribe(home_page, (value) => $home_page = value);
      $$unsubscribe_localize = subscribe(localize, (value) => $localize = value);
      $$unsubscribe_replace_lang = subscribe(replace_lang, (value) => $replace_lang = value);
      let lang_offset = 0;
      let change_language = () => {
        lang_offset = (lang_offset + 1) % Language.length;
        setTimeout(change_language, 2500);
      };
      change_language();
      const nav_items = [
        { name: "home", href: $home_page },
        {
          name: "components",
          href: `${$home_page}/components`
        },
        {
          name: "technology",
          href: `${$home_page}/technology`
        },
        {
          name: "roadmap",
          href: `${$home_page}/roadmap`
        }
      ];
      $$result.css.add(css$1);
      display_language = Language[lang_offset];
      pathname = $page.url.pathname;
      $$unsubscribe_page();
      $$unsubscribe_home_page();
      $$unsubscribe_localize();
      $$unsubscribe_replace_lang();
      return `<nav class="${"navbar navbar-expand-lg bg-light svelte-7l35gh"}"><div class="${"container"}"><a${add_attribute("href", $home_page, 0)} class="${"navbar-brand svelte-7l35gh"}"><img${add_attribute("src", Logo, 0)} height="${"40rem"}" alt="${"Mel Logo"}" class="${"me-1"}">
			</a>
		<button class="${"navbar-toggler"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#navbarSupportedContent"}" aria-controls="${"navbarSupportedContent"}" aria-expanded="${"false"}" aria-label="${"Toggle navigation"}"><span class="${"navbar-toggler-icon"}"></span></button>
		<div class="${"collapse navbar-collapse justify-content-end"}" id="${"navbarSupportedContent"}"><ul class="${"navbar-nav mb-2 mb-lg-0"}">${each(nav_items, (item) => {
        return `<li class="${"nav-item"}"><a class="${["nav-link svelte-7l35gh", pathname == item.href ? "active" : ""].join(" ").trim()}"${add_attribute("href", item.href, 0)}>${escape($localize(item.name))}</a>
					</li>`;
      })}

				<li class="${"nav-item dropdown"}"><div class="${"nav-link dropdown-toggle"}" role="${"button"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"false"}">${escape($localize("langname", display_language))}</div>
					<ul class="${"dropdown-menu"}">${each(Language, (l) => {
        return `<li><a data-sveltekit-reload class="${"dropdown-item"}"${add_attribute("href", $replace_lang(l), 0)}>${escape($localize("langname", l))}</a>
							</li>`;
      })}</ul></li></ul></div></div>
</nav>`;
    });
    communityIcons = [
      {
        name: "Discord"
      },
      {
        name: "Twitter"
      },
      {
        name: "GitHub"
      },
      {
        name: "Forum"
      },
      {
        name: "Medium"
      },
      {
        name: "Telegram"
      }
    ];
    css3 = {
      code: '@charset "UTF-8";:root{--white:#fafdfc;--teal:#9af3d3;--light-teal:#E5FAF6;--purple:#895abf;--green:#21d849;--light-blue:#69cfff;--blue_green:#7de8d3}@font-face{font-family:"Clash Grotesk";src:url("../assets/fonts/ClashGrotesk/ClashGrotesk-Variable.woff2") format("woff2");font-weight:200 700;font-display:swap;font-style:normal}@font-face{font-family:"Clash Display";src:url("../assets/fonts/ClashDisplay/ClashDisplay-Variable.woff2") format("woff2");font-weight:200 700;font-display:swap;font-style:normal}@font-face{font-family:"Supreme";src:url("../assets/fonts/Supreme/Supreme-Variable.woff2") format("woff2");font-weight:100 800;font-display:swap;font-style:normal}*{scrollbar-width:none;font-size:1rem;font-family:"Clash Display", sans-serif;--bs-body-font-family:"Rubik"}html{overflow:hidden visible}body{overflow:hidden}:lang(zh-CN){font-family:var(--bs-body-font-family), "Noto Sans SC", "Noto Color Emoji", sans-serif}:lang(zh-TW){font-family:var(--bs-body-font-family), "Chiron Hei HK WS", "Noto Color Emoji", sans-serif}h1{letter-spacing:-0.04rem;font-size:3rem;font-weight:600}.layout-container.svelte-h9vx1x.svelte-h9vx1x{max-width:100vw;display:flex;flex-direction:row;justify-content:space-around}.layout.svelte-h9vx1x.svelte-h9vx1x{position:relative;max-width:min(100%, 90rem)}.company-info.svelte-h9vx1x.svelte-h9vx1x{display:flex;flex-direction:row;justify-content:space-around}.footer.svelte-h9vx1x.svelte-h9vx1x{width:100%;font-weight:400;letter-spacing:-0.48px;display:flex;flex-wrap:wrap;gap:5rem 0}.footer.svelte-h9vx1x .title.svelte-h9vx1x{font-weight:500;font-size:1.2rem;margin-bottom:1.2rem}.footer.svelte-h9vx1x .col.svelte-h9vx1x{display:flex;gap:0.2rem;flex-direction:column;min-width:9rem}.footer.svelte-h9vx1x a.svelte-h9vx1x{text-decoration:none;color:black;width:max-content;padding:0.5rem;padding-left:0}pa .footer.svelte-h9vx1x a.svelte-h9vx1x:hover{color:#21d849}',
      map: null
    };
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $home_page, $$unsubscribe_home_page;
      $$unsubscribe_home_page = subscribe(home_page, (value) => $home_page = value);
      $$result.css.add(css3);
      $$unsubscribe_home_page();
      return `<div class="${"layout-container svelte-h9vx1x"}"><div class="${"layout svelte-h9vx1x"}">
    
    
    ${validate_component(GradientBubble, "GradientBubble").$$render($$result, { offset: ["100%", "100%"], scale: 70 }, {}, {})}
    ${validate_component(GradientBubble, "GradientBubble").$$render(
        $$result,
        {
          offset: ["0%", "calc(100% - 20rem)"],
          scale: 30,
          color: Colors.light_blue,
          opacity: 20
        },
        {},
        {}
      )}

    ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

    ${slots.default ? slots.default({}) : ``}

    ${validate_component(Banner, "Banner").$$render($$result, { variant: "clear" }, {}, {
        default: () => {
          return `<div class="${"footer svelte-h9vx1x"}"><div class="${"col company-info svelte-h9vx1x"}"><div class="${"content"}"><div class="${"logo"}">logo</div>
            <div class="${"addr"}">8 The Green, Ste A Dover, <br> DE 19901</div></div></div>
        <div class="${"col socials svelte-h9vx1x"}"><div class="${"title svelte-h9vx1x"}">Socials</div>
          ${each(communityIcons, (icon) => {
            return `<a href="${""}" class="${"svelte-h9vx1x"}">${escape(icon.name)}</a>`;
          })}</div>
        <div class="${"col sitemap svelte-h9vx1x"}"><div class="${"title svelte-h9vx1x"}">Sitemap</div>
          <a${add_attribute("href", $home_page, 0)} class="${"svelte-h9vx1x"}">Home</a>
          <a href="${escape($home_page, true) + "/components"}" class="${"svelte-h9vx1x"}">Components</a>
          <a href="${escape($home_page, true) + "/technology"}" class="${"svelte-h9vx1x"}">Technology</a></div>
        <div class="${"col melodeon svelte-h9vx1x"}"><div class="${"title svelte-h9vx1x"}">Melodeon</div>
          <a href="${""}" class="${"svelte-h9vx1x"}">Get started</a>
          <a href="${""}" class="${"svelte-h9vx1x"}">Guide</a>
          <a href="${""}" class="${"svelte-h9vx1x"}">Readme</a></div></div>`;
        }
      })}</div>
</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  file: () => file,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component, file, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/components/pages/_layout.svelte-75f8c455.js";
    imports = ["_app/immutable/components/pages/_layout.svelte-75f8c455.js", "_app/immutable/chunks/index-14cd48c3.js", "_app/immutable/chunks/_page.svelte_svelte_type_style_lang-0293ffd9.js", "_app/immutable/chunks/singletons-db95dcfd.js", "_app/immutable/chunks/stores-e709ff06.js", "_app/immutable/chunks/BubbleBackground.svelte_svelte_type_style_lang-a7e69a4d.js", "_app/immutable/chunks/GradientBubble-bd8ab125.js"];
    stylesheets = ["_app/immutable/assets/_layout-263feccf.css", "_app/immutable/assets/_page-7fd2db0e.css", "_app/immutable/assets/BubbleBackground-6370da64.css"];
    fonts = ["_app/immutable/assets/ClashGrotesk-Variable-3c56fcff.woff2", "_app/immutable/assets/ClashDisplay-Variable-e0ec5644.woff2", "_app/immutable/assets/Supreme-Variable-cc6fdb52.woff2"];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2
});
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_chunks();
    init_stores();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1>
<p>${escape($page.error?.message)}</p>`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  file: () => file2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component2, file2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    file2 = "_app/immutable/components/error.svelte-14bf91df.js";
    imports2 = ["_app/immutable/components/error.svelte-14bf91df.js", "_app/immutable/chunks/index-14cd48c3.js", "_app/immutable/chunks/stores-e709ff06.js", "_app/immutable/chunks/singletons-db95dcfd.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.ts.js
var page_ts_exports = {};
__export(page_ts_exports, {
  load: () => load
});
function load() {
  const getLang = () => {
    try {
      return "en";
    } catch (e) {
      return "en";
    }
  };
  throw redirect(308, `/${getLang()}`);
}
var init_page_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_page.ts.js"() {
    init_index2();
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3,
  universal: () => page_ts_exports
});
var index3, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_page_ts();
    index3 = 2;
    imports3 = ["_app/immutable/modules/pages/_page.ts-8a94a26a.js", "_app/immutable/chunks/_page-9a773472.js", "_app/immutable/chunks/control-f5b05b5f.js"];
    stylesheets3 = [];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/chunks/Button.js
var arrowImage, css4, Size, Variant2, Button;
var init_Button = __esm({
  ".svelte-kit/output/server/chunks/Button.js"() {
    init_chunks();
    init_BubbleBackground_svelte_svelte_type_style_lang();
    arrowImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABhSURBVHgB7ZJBDYAwEATngQAs4AAJSKgDcIIELNQRFnACd6H9Nmmz/XWSfd1lcpcs1DMjJFhey44Iv+4e0r7SKQ0u2uvwWFZLzEIXbWj6tSDg5H85ImDI6glKmePVOkoLHxDLHL3OnSzxAAAAAElFTkSuQmCC";
    css4 = {
      code: ':root{--white:#fafdfc;--teal:#9af3d3;--light-teal:#E5FAF6;--purple:#895abf;--green:#21d849;--light-blue:#69cfff;--blue_green:#7de8d3}button.svelte-rifexe.svelte-rifexe{height:fit-content;white-space:nowrap;height:fit-content;max-width:fit-content;padding:0.75rem 2rem;border-radius:0.7rem;border:0px solid white;font-family:"Clash Display";font-weight:400;letter-spacing:-0.5px;color:black}.bold.svelte-rifexe.svelte-rifexe{font-weight:600}#arrow.svelte-rifexe.svelte-rifexe{height:0.7rem;padding-left:1rem;justify-content:center}button.circle.svelte-rifexe.svelte-rifexe{--r:0.5rem;aspect-ratio:1/1;border-radius:100%;line-height:0.7rem;background-color:transparent;border:1px solid black;box-shadow:none;padding:calc(var(--r)) var(--r)}button.circle.svelte-rifexe>.svelte-rifexe{padding:0 !important}button.circle.svelte-rifexe.svelte-rifexe:hover,button.circle.hover.svelte-rifexe.svelte-rifexe{background-color:inherit}button.circle.svelte-rifexe.svelte-rifexe:active{background-color:inherit}button.large.svelte-rifexe.svelte-rifexe{padding:1rem 2rem}button.default.svelte-rifexe.svelte-rifexe{white-space:nowrap;background-color:#9af3d2;color:black;transition:0.5s background-size ease-in-out, 0.1s background-color ease-in-out}button.default.svelte-rifexe.svelte-rifexe:hover,button.default.hover.svelte-rifexe.svelte-rifexe{background-color:#77efc2}button.default.svelte-rifexe.svelte-rifexe:active{background-color:#53ebb2}.blue_green.svelte-rifexe.svelte-rifexe{height:fit-content;white-space:nowrap;background-color:#7de8d3;border:0px solid white;color:black;transition:0.5s background-size ease-in-out, 0.1s background-color ease-in-out;max-width:fit-content;padding:1rem 2rem;border-radius:0.7rem}.blue_green.svelte-rifexe.svelte-rifexe:hover,.blue_green.hover.svelte-rifexe.svelte-rifexe{background-color:#5fe3c9}.blue_green.svelte-rifexe.svelte-rifexe:active{background-color:#40ddbe}.gradient1.svelte-rifexe.svelte-rifexe{color:black;background:linear-gradient(to bottom left, #b8f7e0 0%, rgba(255, 255, 255, 0) 95%), #ffffff;border:1px solid rgb(217, 217, 217);box-shadow:0px 2px 1px 1px transparent;background-size:100%}.gradient1.svelte-rifexe.svelte-rifexe:hover,.gradient1.hover.svelte-rifexe.svelte-rifexe{background-color:#92f2ce;background-size:100%}.gradient1.svelte-rifexe.svelte-rifexe:active{background-color:#6bedbd}.white.svelte-rifexe.svelte-rifexe{background-color:rgb(250, 250, 250);box-shadow:0px 2px 1px 1px rgba(40, 40, 40, 0.092);transition:100ms all ease-in-out, 100ms background-color ease-in-out, 10ms box-shadow ease-out}.white.svelte-rifexe.svelte-rifexe:hover,.white.hover.svelte-rifexe.svelte-rifexe{background-color:#eeeeee;box-shadow:0px 3px 1px 1px rgba(30, 30, 30, 0.092)}.white.svelte-rifexe.svelte-rifexe:active{background-color:#e4e4e4}',
      map: null
    };
    Size = ["normal", "large"];
    Variant2 = ["default", "gradient1", "white"];
    Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$restProps = compute_rest_props($$props, ["class", "size", "variant", "arrow", "circle", "border_only", "bold", "hover"]);
      let { class: _class = "" } = $$props;
      let { size = "normal" } = $$props;
      let { variant = "white" } = $$props;
      let { arrow = false } = $$props;
      let { circle = false } = $$props;
      let { border_only = false } = $$props;
      let { bold = false } = $$props;
      let { hover = false } = $$props;
      if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
        $$bindings.class(_class);
      if ($$props.size === void 0 && $$bindings.size && size !== void 0)
        $$bindings.size(size);
      if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
        $$bindings.variant(variant);
      if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0)
        $$bindings.arrow(arrow);
      if ($$props.circle === void 0 && $$bindings.circle && circle !== void 0)
        $$bindings.circle(circle);
      if ($$props.border_only === void 0 && $$bindings.border_only && border_only !== void 0)
        $$bindings.border_only(border_only);
      if ($$props.bold === void 0 && $$bindings.bold && bold !== void 0)
        $$bindings.bold(bold);
      if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
        $$bindings.hover(hover);
      $$result.css.add(css4);
      return `<button${spread(
        [
          {
            class: escape(variant, true) + " " + escape(_class, true)
          },
          escape_object($$restProps)
        ],
        {
          classes: (arrow ? "arrow" : "") + " " + (circle ? "circle" : "") + " " + (border_only ? "border_only" : "") + " " + (bold ? "bold" : "") + " " + (size == "large" ? "large" : "") + " svelte-rifexe"
        }
      )}>${slots.default ? slots.default({ hover }) : ``}
  ${arrow ? `<img id="${"arrow"}"${add_attribute("src", arrowImage, 0)} alt="${""}" class="${"svelte-rifexe"}">` : ``}
</button>`;
    });
  }
});

// .svelte-kit/output/server/chunks/Card.js
var css5, Variant3, variant_map2, Card;
var init_Card = __esm({
  ".svelte-kit/output/server/chunks/Card.js"() {
    init_chunks();
    init_BubbleBackground_svelte_svelte_type_style_lang();
    css5 = {
      code: ':root{--white:#fafdfc;--teal:#9af3d3;--light-teal:#E5FAF6;--purple:#895abf;--green:#21d849;--light-blue:#69cfff;--blue_green:#7de8d3}.content.svelte-1vdlbrq{z-index:2}.filter.svelte-1vdlbrq:not(.noise){display:none;position:absolute}.noise.svelte-1vdlbrq{position:absolute;width:100%;height:100%;background-image:url("../../assets/images/noise.png");background-size:cover;background-repeat:repeat;z-index:0;opacity:50%;filter:brightness(100%) contrast(80%) saturate(0%) invert(100%);mix-blend-mode:multiply;transition:1000ms all}.noise.hover.svelte-1vdlbrq{opacity:0%;filter:brightness(60%) contrast(5%) saturate(0%) invert(100%)}.card.svelte-1vdlbrq{overflow:hidden;border-radius:20px;padding:3rem 2rem;max-height:100%;height:100%;max-width:100%;display:grid;box-sizing:border-box;grid-template-rows:auto}.card.opaque.svelte-1vdlbrq{background-color:white !important}.card.v-square.svelte-1vdlbrq,.card.square.svelte-1vdlbrq{aspect-ratio:1/1;width:clamp(15rem, 50vw, 50vw)}.card.fill.svelte-1vdlbrq{padding:0;border-radius:0;width:100%;height:100%;margin:0 !important}.card.default.svelte-1vdlbrq,.card.gradient1.svelte-1vdlbrq{border:none;background:radial-gradient(400% 400% at 110% 100%, #d4faec 8%, #f6f2fa 25%, white 37%)}.card.gradient2.svelte-1vdlbrq{border:none;background:radial-gradient(400% 400% at 0% 0%, #e0fbf1 8%, #f6f2fa 25%, white 37%)}.card.gradient3.svelte-1vdlbrq{border:none;background:radial-gradient(400% 400% at 100% 100%, #d4f1ff 0%, #dffbf1 10%, #f4f0f9 25%, white 37%, #9af3d2 37%)}.card.hover.svelte-1vdlbrq{transform:translate(0px, -5px);transition:1s background-size, 1s translate}.card.hover.gradient4.svelte-1vdlbrq{background-size:100% 100%}.card.gradient4.svelte-1vdlbrq{border:none;background:radial-gradient(70% 70% at bottom left, #b8e8ff, rgba(255, 255, 255, 0) 100%), radial-gradient(75% 75% at top right, #c8f8e6, rgba(255, 255, 255, 0) 100%)}.card.grey-gradient.svelte-1vdlbrq{border:none;background:radial-gradient(85% 85% at bottom left, #d6d6d6, rgba(255, 255, 255, 0) 100%), radial-gradient(55% 55% at top right, #e1e1e1, rgba(255, 255, 255, 0) 100%)}.card.white.svelte-1vdlbrq{border:none;background-color:white;background-image:none}.card.clear.svelte-1vdlbrq{background-color:transparent;border:none}.card.svelte-1vdlbrq img{justify-content:center;max-width:auto;max-height:15rem}.card.transformations.svelte-1vdlbrq{transition:400ms all, 1s background-size;background-size:100% 100%}.card.transformations.hover.svelte-1vdlbrq{background-size:300% 300%}.card.transformations.hover.gradient4.svelte-1vdlbrq{background-size:100% 100%}.interactive.hover.svelte-1vdlbrq{cursor:pointer}',
      map: null
    };
    Variant3 = [
      "white",
      "gradient1",
      "gradient2",
      "gradient3",
      "gradient4",
      "grey-gradient",
      "default",
      "square",
      "clear"
    ];
    variant_map2 = {
      white: "white",
      gradient1: "transformations gradient1",
      gradient2: "gradient2 transformations",
      gradient3: "gradient3 transformations",
      gradient4: "gradient4 transformations",
      "grey-gradient": "grey-gradient transformations",
      default: "default transformations",
      square: "v-square transformations",
      clear: "clear transformations"
    };
    Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let noise;
      let { class: _class = "" } = $$props;
      let { id: _id = "" } = $$props;
      let id = _id;
      let { variant: _variant = "default" } = $$props;
      let variant = variant_map2[_variant];
      let { noise: _noise = false } = $$props;
      let { interactive = false } = $$props;
      let { fill = false } = $$props;
      let { square = false } = $$props;
      let { hover = false } = $$props;
      let { clear = false } = $$props;
      if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
        $$bindings.class(_class);
      if ($$props.id === void 0 && $$bindings.id && _id !== void 0)
        $$bindings.id(_id);
      if ($$props.variant === void 0 && $$bindings.variant && _variant !== void 0)
        $$bindings.variant(_variant);
      if ($$props.noise === void 0 && $$bindings.noise && _noise !== void 0)
        $$bindings.noise(_noise);
      if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
        $$bindings.interactive(interactive);
      if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
        $$bindings.fill(fill);
      if ($$props.square === void 0 && $$bindings.square && square !== void 0)
        $$bindings.square(square);
      if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
        $$bindings.hover(hover);
      if ($$props.clear === void 0 && $$bindings.clear && clear !== void 0)
        $$bindings.clear(clear);
      $$result.css.add(css5);
      noise = _noise ? "noise filter" : "";
      return `<div${add_attribute("id", id, 0)} class="${[
        escape(_class, true) + " card " + escape(variant, true) + " svelte-1vdlbrq",
        (fill ? "fill" : "") + " " + (interactive ? "interactive" : "") + " " + (hover ? "hover" : "") + " " + (square ? "square" : "") + " " + (!clear ? "opaque" : "")
      ].join(" ").trim()}"><div class="${["filter svelte-1vdlbrq", (hover ? "hover" : "") + " " + (noise ? "noise" : "")].join(" ").trim()}"></div>
        <div class="${"content svelte-1vdlbrq"}">${slots.default ? slots.default({ hover, noise }) : ``}</div>
    </div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/_lang_/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var HeroImage, SpaceshipImage, ComposableBlocksImage, VaultImage, css6, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_lang_/_page.svelte.js"() {
    init_chunks();
    init_page_svelte_svelte_type_style_lang();
    init_Button();
    init_BubbleBackground_svelte_svelte_type_style_lang();
    init_Card();
    init_GradientBubble();
    HeroImage = "/_app/immutable/assets/short-banner-da1a6981.png";
    SpaceshipImage = "/_app/immutable/assets/spaceship-and-planet-fece520e.png";
    ComposableBlocksImage = "/_app/immutable/assets/composable-blocks-98200a9c.png";
    VaultImage = "/_app/immutable/assets/vault-ca52ed2e.png";
    css6 = {
      code: "span.button.hover.svelte-1d86rfb.svelte-1d86rfb{filter:invert(40%)}.home.svelte-1d86rfb.svelte-1d86rfb{display:grid;grid-template-rows:auto 15vh auto 15vh;grid-template-columns:100%}.top.svelte-1d86rfb.svelte-1d86rfb{display:flex;flex-direction:column}.top.svelte-1d86rfb img.svelte-1d86rfb{max-width:100%;border-radius:1rem;margin:1rem}.subhero.svelte-1d86rfb.svelte-1d86rfb{height:50vh}.subhero.svelte-1d86rfb .grid.svelte-1d86rfb{height:100%;display:grid;grid-template-columns:1fr 2fr;justify-content:center;align-content:center;margin:5rem 0;flex-wrap:wrap;gap:2rem}.subhero.svelte-1d86rfb .grid .message h1.svelte-1d86rfb{margin:auto 0}.subhero.svelte-1d86rfb .grid .message .cta.svelte-1d86rfb{justify-content:center;justify-self:center;margin:auto 0}.subhero.svelte-1d86rfb .grid .bubbles.svelte-1d86rfb{position:relative;width:100%;height:100%}.header-arrow.svelte-1d86rfb.svelte-1d86rfb{display:flex;flex-direction:row-reverse;justify-content:space-between}.content-frame.svelte-1d86rfb.svelte-1d86rfb{gap:1rem;display:flex;flex-direction:column;justify-content:space-around;padding:0 1rem;max-width:100%}.content.svelte-1d86rfb.svelte-1d86rfb{display:grid;gap:clamp(2rem, 3%, 3rem);margin:auto;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;width:clamp(25rem, 100%, 75rem)}.content.svelte-1d86rfb>.svelte-1d86rfb{max-width:100%}@media screen and (max-width: 50rem){.content-frame.svelte-1d86rfb.svelte-1d86rfb{justify-content:center;padding:1rem}.content.svelte-1d86rfb.svelte-1d86rfb{display:flex;flex-direction:column;gap:1rem}.card h2{padding-bottom:1rem !important}}",
      map: null
    };
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $localize, $$unsubscribe_localize;
      let $lang, $$unsubscribe_lang;
      $$unsubscribe_localize = subscribe(localize, (value) => $localize = value);
      $$unsubscribe_lang = subscribe(lang, (value) => $lang = value);
      let percentify = ([x, y]) => {
        return [x + "rem", y + "rem"];
      };
      let calc_scale = (t2) => {
        let scales2 = [10, 20, 30];
        for (let i = 0; i < scales2.length; i++) {
          scales2[i] = 30;
        }
        return scales2;
      };
      let calc_offsets = (t2) => {
        let _offsets = [[50, 0], [50, 0], [50, 0]];
        let r = 10;
        for (let i = 0; i < _offsets.length; i++) {
          let offset = _offsets[i];
          let deg = Math.PI / offset.length * i + t2 / Math.PI;
          offset[0] += Math.cos(deg) * r;
          offset[1] += Math.sin(deg) * r;
        }
        return _offsets.map(percentify);
      };
      let t = 0;
      let timing_function = (start_time, end_time, iterations = 0) => {
        let timeout_interval = 25;
        t = start_time + iterations;
        console.log(end_time, t);
        if (end_time < t) {
          return;
        }
        setTimeout(() => timing_function(start_time, end_time, iterations + timeout_interval), timeout_interval);
      };
      timing_function(0, 1e6);
      let offsets;
      let scales;
      $$result.css.add(css6);
      {
        {
          console.log("resetting scales");
          scales = calc_scale();
        }
      }
      {
        {
          offsets = calc_offsets(t / 50);
          console.log(offsets);
        }
      }
      $$unsubscribe_localize();
      $$unsubscribe_lang();
      return `<div class="${"home svelte-1d86rfb"}"><div class="${"subhero svelte-1d86rfb"}"><div class="${"grid svelte-1d86rfb"}"><div class="${"message"}"><h1 class="${"svelte-1d86rfb"}">dApps beyond blockchains.</h1>
        <div class="${"cta svelte-1d86rfb"}">${validate_component(Button, "Button").$$render($$result, { size: "large" }, {}, {
        default: () => {
          return `A call to action`;
        }
      })}</div></div>

      <div class="${"bubbles svelte-1d86rfb"}">${validate_component(GradientBubble, "GradientBubble").$$render(
        $$result,
        {
          scale: scales[2],
          opacity: 100,
          offset: offsets[0]
        },
        {},
        {}
      )}
        ${validate_component(GradientBubble, "GradientBubble").$$render(
        $$result,
        {
          scale: scales[1],
          opacity: 100,
          color: Colors.light_blue,
          offset: offsets[1]
        },
        {},
        {}
      )}
        ${validate_component(GradientBubble, "GradientBubble").$$render(
        $$result,
        {
          color: Colors.purple,
          opacity: 100,
          scale: scales[0],
          offset: offsets[2]
        },
        {},
        {}
      )}</div></div></div>

  <div class="${"SPACER"}"></div>

  <div class="${"top svelte-1d86rfb"}"><img class="${"hero svelte-1d86rfb"}"${add_attribute("src", HeroImage, 0)} alt="${"hero"}"></div>

  <div class="${"SPACER"}"></div>

  <div class="${"content-frame svelte-1d86rfb"}"><div class="${"content svelte-1d86rfb"}">${validate_component(Card, "Card").$$render($$result, { variant: "gradient1", interactive: true }, {}, {
        default: ({ hover }) => {
          return `<div class="${"svelte-1d86rfb"}"><div class="${"header-arrow svelte-1d86rfb"}"><span class="${["button svelte-1d86rfb", hover ? "hover" : ""].join(" ").trim()}">${validate_component(Button, "Button").$$render($$result, { arrow: true, circle: true }, {}, {})}</span>
            <h2>Empowering dapps <br>beyond blockchains</h2></div>
          <p>We\u2019re bringing blockchain superpowers out of the \u201Cweb3\u201D ecosystem.
            Whether you are writing an on-chain contract or fully off-chain
            protocol, you\u2019ll have the tools to ensure your app has robust
            decentralization, censorship resistance, and user-centric
            incentives.
          </p></div>
        <img${add_attribute("src", SpaceshipImage, 0)} class="${"svelte-1d86rfb"}">`;
        }
      })}
      ${validate_component(Card, "Card").$$render($$result, { variant: "gradient2", interactive: true }, {}, {
        default: () => {
          return `<div class="${"svelte-1d86rfb"}"><div class="${"header-arrow svelte-1d86rfb"}"><div></div>
            
            <h2>Neutral, composable,<br> and built for everyone</h2></div>
          <p>Decentralized trust should be a no-brainer. Themelio is clean-slate,
            governance-free, and radically embeddable L1 that makes accessing
            Web3 superpowers off-chain a breeze.
          </p></div>
        ${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Build your own off-chain dApp`;
            }
          })}
        <img${add_attribute("src", ComposableBlocksImage, 0)} class="${"svelte-1d86rfb"}">`;
        }
      })}
      ${validate_component(Card, "Card").$$render($$result, { variant: "gradient3", interactive: true }, {}, {
        default: () => {
          return `<div class="${"svelte-1d86rfb"}"><div class="${"header-arrow svelte-1d86rfb"}">${validate_component(Button, "Button").$$render($$result, { circle: true, arrow: true }, {}, {})}
            <h2>Cross-chain compatibility <br> built in</h2></div>
          <p>Themelio\u2019s new paradigm and the existing DeFi ecosystem don\u2019t have
            to be at odds. Every Themelio asset can be accessed on
            EVM-compatible chains through trustless two-way relay contracts.
          </p></div>
        
        <img class="${"svelte-1d86rfb"}">`;
        }
      })}
      ${validate_component(Card, "Card").$$render($$result, { variant: "gradient1", interactive: true }, {}, {
        default: () => {
          return `<div class="${"svelte-1d86rfb"}"><!-- HTML_TAG_START -->${$localize("page1_monetary_infrastructure", $lang)}<!-- HTML_TAG_END --></div>
        
        <img${add_attribute("src", VaultImage, 0)} class="${"svelte-1d86rfb"}">`;
        }
      })}</div>
    ${validate_component(Banner, "Banner").$$render($$result, { fill: true }, {}, {
        default: () => {
          return `<div class="${"join"}"><h1>Join our community</h1>
        <p class="${"main-lead"}">Be part of a growing community of global developers, innovators, and
          users helping us realize Themelio&#39;s vision.
        </p></div>`;
        }
      })}</div>
</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component3,
  file: () => file3,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4
});
var index4, component3, file3, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    index4 = 3;
    component3 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file3 = "_app/immutable/components/pages/_lang_/_page.svelte-7162dc96.js";
    imports4 = ["_app/immutable/components/pages/_lang_/_page.svelte-7162dc96.js", "_app/immutable/chunks/index-14cd48c3.js", "_app/immutable/chunks/_page.svelte_svelte_type_style_lang-0293ffd9.js", "_app/immutable/chunks/singletons-db95dcfd.js", "_app/immutable/chunks/stores-e709ff06.js", "_app/immutable/chunks/Button-d6474324.js", "_app/immutable/chunks/BubbleBackground.svelte_svelte_type_style_lang-a7e69a4d.js", "_app/immutable/chunks/Card-884a1dfe.js", "_app/immutable/chunks/GradientBubble-bd8ab125.js"];
    stylesheets4 = ["_app/immutable/assets/_page-7fd2db0e.css", "_app/immutable/assets/BubbleBackground-6370da64.css"];
    fonts4 = [];
  }
});

// .svelte-kit/output/server/chunks/ButtonGroup.js
var css7, ButtonGroup;
var init_ButtonGroup = __esm({
  ".svelte-kit/output/server/chunks/ButtonGroup.js"() {
    init_chunks();
    init_BubbleBackground_svelte_svelte_type_style_lang();
    css7 = {
      code: ".button-group.svelte-dzgtn4.svelte-dzgtn4{max-width:max-content;width:auto}.button-group.svelte-dzgtn4 .container.svelte-dzgtn4{border:0.9px rgb(189, 189, 189);border-style:dotted;display:flex;box-shadow:0px 2px 1px 1px rgba(40, 40, 40, 0.092);width:fit-content;max-width:max-content;margin:0;padding:0;border-radius:1rem}.button-group.svelte-dzgtn4 .container.separated.svelte-dzgtn4>*{border-left:1px solid var(--border-color)}.button-group.svelte-dzgtn4 .container.svelte-dzgtn4>*{flex-grow:1;flex-shrink:1;border-radius:0;margin:0;box-shadow:none;border:none;padding-left:1rem;padding-right:1rem;font-weight:600}.button-group.svelte-dzgtn4 .container.svelte-dzgtn4 :first-child{border:none;border-radius:1rem 0rem 0rem 1rem}.button-group.svelte-dzgtn4 .container.svelte-dzgtn4 :last-child{border-right:none;border-top:none;border-bottom:none;border-radius:0 1rem 1rem 0}",
      map: null
    };
    ButtonGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { class: _class = "" } = $$props;
      let { color: color2 = "" } = $$props;
      let { border = false } = $$props;
      if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
        $$bindings.class(_class);
      if ($$props.color === void 0 && $$bindings.color && color2 !== void 0)
        $$bindings.color(color2);
      if ($$props.border === void 0 && $$bindings.border && border !== void 0)
        $$bindings.border(border);
      $$result.css.add(css7);
      return `<div class="${"button-group " + escape(_class, true) + " svelte-dzgtn4"}"><div class="${["container svelte-dzgtn4", border ? "separated" : ""].join(" ").trim()}" style="${"--border-color: " + escape(color2 || "grey", true)}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/_lang_/components/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
function* range(end) {
  let i = 0;
  while (i < end) {
    yield i;
    i++;
  }
}
function pick_random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}
var Range, css$12, BubbleBackground, css8, Page2;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/_lang_/components/_page.svelte.js"() {
    init_chunks();
    init_Button();
    init_GradientBubble();
    init_BubbleBackground_svelte_svelte_type_style_lang();
    init_Card();
    init_ButtonGroup();
    Range = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { from = 0 } = $$props;
      let { to = 1 } = $$props;
      if ($$props.from === void 0 && $$bindings.from && from !== void 0)
        $$bindings.from(from);
      if ($$props.to === void 0 && $$bindings.to && to !== void 0)
        $$bindings.to(to);
      return `${each([...range(to - from)], (_) => {
        return `${slots.default ? slots.default({}) : ``}`;
      })}`;
    });
    css$12 = {
      code: ".bubble-background.svelte-1jyvyud{height:100%;width:100%}",
      map: null
    };
    BubbleBackground = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let scale = 50;
      let opacity = 40;
      let bubbles = 400;
      let available_colors = Object.values(Colors);
      $$result.css.add(css$12);
      return `<div class="${"bubble-background svelte-1jyvyud"}"><div>${validate_component(Button, "Button").$$render($$result, {}, {}, {
        default: () => {
          return `Reload Bubbles`;
        }
      })}
            <div class="${"bubble-options"}"><label for="${"scale"}">scale</label><input name="${"scale"}" type="${""}"${add_attribute("value", scale, 0)}>
                <button>${escape("start")}</button>
                <label for="${"opacity"}">opacity</label><input name="${"opacity"}" type="${"text"}"${add_attribute("value", opacity, 0)}>
                <label for="${"bubbes"}">Num Bubbles</label><input name="${"bubbles"}" type="${"text"}"${add_attribute("value", bubbles, 0)}></div></div>

        ${validate_component(Range, "Range").$$render($$result, { to: bubbles }, {}, {
        default: () => {
          return `${validate_component(GradientBubble, "GradientBubble").$$render(
            $$result,
            {
              scale,
              color: pick_random_item(available_colors),
              offset: "random",
              opacity
            },
            {},
            {}
          )}`;
        }
      })}
</div>`;
    });
    css8 = {
      code: ":root{--white:#fafdfc;--teal:#9af3d3;--light-teal:#E5FAF6;--purple:#895abf;--green:#21d849;--light-blue:#69cfff;--blue_green:#7de8d3}.container.svelte-19anlbw.svelte-19anlbw{max-width:100vw}.card-grid.svelte-19anlbw.svelte-19anlbw{background-color:white;display:grid;gap:2rem;grid-template-columns:repeat(3, 30rem);grid-auto-columns:30rem;grid-auto-rows:30rem;overflow:scroll}.banner-intro.svelte-19anlbw.svelte-19anlbw{margin:0.5rem;display:flex;flex-direction:column;align-content:center;width:auto;text-align:center;gap:1rem}.banner-intro.svelte-19anlbw h1.svelte-19anlbw{font-size:3rem;font-weight:500}.banner-intro.svelte-19anlbw .bottom-section.svelte-19anlbw{display:flex;flex-direction:row}.banner-intro.svelte-19anlbw .bottom-section h2.svelte-19anlbw{padding-right:4rem;border-right:1px solid black;align-self:center;flex-basis:1}.banner-intro.svelte-19anlbw .bottom-section p.svelte-19anlbw{padding-left:4rem;flex-basis:1;max-width:60rem;text-align:left}.banner-grid.svelte-19anlbw.svelte-19anlbw{margin-top:2rem;display:grid;grid-template-columns:1fr;grid-auto-rows:max-content;margin-top:2rem;gap:0.5rem}.banner-grid.svelte-19anlbw .svelte-19anlbw{align-self:center;margin:0}.banner-grid.svelte-19anlbw>.banner#banner2 .content{display:flex;flex-direction:row;gap:1rem}.banner-grid.svelte-19anlbw>.banner#banner2 .content p{flex-grow:2}.banner-grid.svelte-19anlbw>.banner#banner2 .content button{flex:0 0 55rem}.button-grid.svelte-19anlbw.svelte-19anlbw{display:flex;flex-direction:column;gap:1rem;width:100%;height:100%;margin:1rem}.button-grid.svelte-19anlbw .row.svelte-19anlbw{height:100%;display:flex;flex-direction:row;gap:1rem;text-align:center}.bubbles.svelte-19anlbw.svelte-19anlbw{height:100vh;position:relative}",
      map: null
    };
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let card_variant_descriptions = {
        gradient1: "A very light radial gradient: teal, purple, white",
        gradient2: "A stronger gradient: teal, purple, white",
        gradient3: "same rotations as 1, strength as 2, with an additional color: light-blue",
        default: "gradient1",
        white: "By default white is not interactive and will not perform any animations when hovered",
        gradient4: "Used on page 2, it's 2 raidal gradients starting from light-blue (bottom left) and teal and transitioning into translucent",
        "grey-gradient": "",
        square: "WARNING: incomplete variant.",
        clear: ""
      };
      let CardOptions = {
        hovered_card: false,
        noise: true,
        interactive: true,
        square: true
      };
      $$result.css.add(css8);
      let $$settled;
      let $$rendered;
      do {
        $$settled = true;
        $$rendered = `<div class="${"container svelte-19anlbw"}"><h1>Component Library</h1>
        <h2>Card Grid</h2>

        <p class="${"center info"}">${validate_component(Card, "Card").$$render($$result, { variant: "white" }, {}, {
          default: () => {
            return `Except for white, When hover cards shift up by 1rem, increase
                the gradient size, and remove the noise. The transition takes 1s
                These cards are placed within a grid, filling 100% of a cell&#39;s
                available width and height. They also have 1rem of padding all
                around by default.
            `;
          }
        })}</p>
        ${validate_component(Card, "Card").$$render($$result, { variant: "white" }, {}, {
          default: () => {
            return `<label for="${"hover"}">Hovering Cards</label>
            <input type="${"checkbox"}" data-toggle="${"toggle"}"${add_attribute("checked", CardOptions.hovered_card, 1)}>
            <label for="${"noisy"}">Image Noise</label>
            <input name="${"noisy"}" type="${"checkbox"}"${add_attribute("checked", CardOptions.noise, 1)}>
            <label for="${"interactive"}">Interactive</label>
            <input name="${"interactive"}" type="${"checkbox"}"${add_attribute("checked", CardOptions.interactive, 1)}>
            `;
          }
        })}

        <div class="${"card-grid svelte-19anlbw"}">${each(Variant3, (variant) => {
          return `${validate_component(Card, "Card").$$render(
            $$result,
            {
              variant,
              hover: CardOptions.hovered_card,
              noise: CardOptions.noise,
              interactive: CardOptions.interactive,
              square: CardOptions.square
            },
            {
              hover: ($$value) => {
                CardOptions.hovered_card = $$value;
                $$settled = false;
              },
              noise: ($$value) => {
                CardOptions.noise = $$value;
                $$settled = false;
              },
              interactive: ($$value) => {
                CardOptions.interactive = $$value;
                $$settled = false;
              },
              square: ($$value) => {
                CardOptions.square = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<div><h2>variant: &quot;${escape(variant)}&quot;
                        </h2>
                        <p>${escape(card_variant_descriptions[variant])}
                        </p></div>
                `;
              }
            }
          )}`;
        })}</div>

        ${validate_component(Banner, "Banner").$$render($$result, { variant: "gradient1" }, {}, {
          default: () => {
            return `<div class="${"banner-intro svelte-19anlbw"}"><h1 class="${"svelte-19anlbw"}">The past and future of Themelio</h1>
                <p class="${"svelte-19anlbw"}">Banners fill their space and come in a thin and wide height
                </p>
                <div class="${"bottom-section svelte-19anlbw"}"><h2 class="${"svelte-19anlbw"}">Grid</h2>
                    <p class="${"svelte-19anlbw"}">The grid below is defined by the max height of the
                        banner. Only the &quot;gradient1&quot; banner has a custom height
                    </p></div></div>`;
          }
        })}
        <div class="${"banner-grid svelte-19anlbw"}">${each(Variant, (variant, index8) => {
          return `${validate_component(Banner, "Banner").$$render($$result, { id: "banner" + index8, variant }, {}, {
            default: () => {
              return `<h2 class="${"svelte-19anlbw"}">&quot;${escape(variant)}&quot;</h2>
                    <p class="${"svelte-19anlbw"}">this is lorem ipsum text auto generated by
                        loremipsum.wordpress.com to remove this watermark
                        subscribe for a small monthly fee
                    </p>
                    ${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `prove it`;
                }
              })}
                `;
            }
          })}`;
        })}</div>
        <h2>Bubbles</h2>
        <div class="${"bubbles svelte-19anlbw"}">${validate_component(BubbleBackground, "BubbleBackground").$$render($$result, {}, {}, {})}</div>
        ${validate_component(Banner, "Banner").$$render($$result, { variant: "clear" }, {}, {
          default: () => {
            return `<h1>Buttons</h1>`;
          }
        })}
        <div class="${"button-grid svelte-19anlbw"}">${each(Variant2, (variant) => {
          return `<div class="${"row svelte-19anlbw"}">${each(Size, (size) => {
            return `${validate_component(Button, "Button").$$render($$result, { variant, size }, {}, {
              default: () => {
                return `variant: &quot;${escape(variant)}&quot;
                        `;
              }
            })}`;
          })}
                </div>`;
        })}</div>
        ${validate_component(Banner, "Banner").$$render($$result, { variant: "clear" }, {}, {
          default: () => {
            return `<h1>Button Group</h1>`;
          }
        })}
        <div class="${"button-grid svelte-19anlbw"}">${each(Size, (size) => {
          return `${each(Variant2, (variant) => {
            return `<div class="${"row svelte-19anlbw"}">${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Button, "Button").$$render($$result, { variant, size }, {}, {
                  default: () => {
                    return `variant: &quot;${escape(variant)}&quot;
                            `;
                  }
                })}
                            ${validate_component(Button, "Button").$$render($$result, { variant, size }, {}, {
                  default: () => {
                    return `Second to last`;
                  }
                })}
                            ${validate_component(Button, "Button").$$render($$result, { variant, size, arrow: true }, {}, {
                  default: () => {
                    return `Laast`;
                  }
                })}
                        `;
              }
            })}
                    </div>`;
          })}`;
        })}</div>
    </div>`;
      } while (!$$settled);
      return $$rendered;
    });
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component4,
  file: () => file4,
  fonts: () => fonts5,
  imports: () => imports5,
  index: () => index5,
  stylesheets: () => stylesheets5
});
var index5, component4, file4, imports5, stylesheets5, fonts5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    index5 = 4;
    component4 = async () => (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    file4 = "_app/immutable/components/pages/_lang_/components/_page.svelte-69a9628b.js";
    imports5 = ["_app/immutable/components/pages/_lang_/components/_page.svelte-69a9628b.js", "_app/immutable/chunks/index-14cd48c3.js", "_app/immutable/chunks/Button-d6474324.js", "_app/immutable/chunks/BubbleBackground.svelte_svelte_type_style_lang-a7e69a4d.js", "_app/immutable/chunks/GradientBubble-bd8ab125.js", "_app/immutable/chunks/Card-884a1dfe.js", "_app/immutable/chunks/ButtonGroup-fdf211cd.js"];
    stylesheets5 = ["_app/immutable/assets/_page-4ef9a785.css", "_app/immutable/assets/BubbleBackground-6370da64.css"];
    fonts5 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_lang_/roadmap/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => Page3
});
var css9, Page3;
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/_lang_/roadmap/_page.svelte.js"() {
    init_chunks();
    init_BubbleBackground_svelte_svelte_type_style_lang();
    init_Button();
    init_ButtonGroup();
    css9 = {
      code: '.timeline.svelte-19ejr2.svelte-19ejr2{margin-bottom:4rem}.full-container.svelte-19ejr2.svelte-19ejr2{width:100%;display:flex;justify-content:center}.banner-intro.svelte-19ejr2 button{font-family:"Clash Display"}.banner-intro.svelte-19ejr2.svelte-19ejr2{margin:0.5rem;display:flex;flex-direction:column;align-content:center;width:auto;text-align:center;gap:1rem}.banner-intro.svelte-19ejr2 h1.svelte-19ejr2{font-size:3rem;font-weight:500}.banner-intro.svelte-19ejr2 .timeline-description.svelte-19ejr2{display:flex;flex-direction:row}.banner-intro.svelte-19ejr2 .timeline-description h2.svelte-19ejr2{font-size:2.6rem;padding-right:4rem;border-right:1px solid rgb(211, 211, 211);align-self:center;font-weight:600}.banner-intro.svelte-19ejr2 .timeline-description p.svelte-19ejr2{padding-left:4rem;flex-basis:1;max-width:60rem;text-align:left}.bottom-section.svelte-19ejr2.svelte-19ejr2{gap:2rem;display:grid;grid-auto-flow:row;grid-template-columns:1fr;justify-items:center}',
      map: null
    };
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let selected_epoch;
      let lorem = `Bender, being God isn't easy. If you do too much, people get
            dependent on you, and if you do nothing, they lose hope. You have to
            use a light touch. Like a safecracker, or a pickpocket. Morbo can't
            understand his teleprompter because he forgot how you say that
            letter that's shaped like a man wearing a hat`;
      let timeline = [
        { title: "CIRCA 2014", content: lorem },
        { title: "CIRCA 2015", content: lorem },
        { title: "2016", content: lorem },
        { title: "2017", content: lorem },
        { title: "2019", content: lorem },
        { title: "Q1 2019", content: lorem },
        { title: "Q2 2019", content: lorem },
        { title: "Q3 2020", content: lorem },
        { title: "Q2 2021", content: lorem },
        { title: "Q3-Q4 2022", content: lorem },
        { title: "2023-2024", content: lorem }
      ];
      let selected_epoch_index = 0;
      $$result.css.add(css9);
      selected_epoch = timeline[selected_epoch_index];
      return `<div class="${"timeline svelte-19ejr2"}"><div class="${"top-banner"}">${validate_component(Banner, "Banner").$$render(
        $$result,
        {
          size: "",
          variant: "white",
          header: true,
          column: true
        },
        {},
        {
          default: () => {
            return `<h1>Phases of development</h1>
            <p class="${"bold"}">Themelio has 4 phases of development</p>
            <p>Bender, being God isn&#39;t easy. If you do too much, people get
                dependent on you, and if you do nothing, they lose hope. You have to
                use a light touch. Like a safecracker, or a pickpocket. Morbo can&#39;t
                understand his teleprompter because he forgot how you say that
                letter that&#39;s shaped like a man wearing a hat.
            </p>`;
          }
        }
      )}</div>


    ${validate_component(Banner, "Banner").$$render($$result, { variant: "gradient1", noise: true }, {}, {
        default: () => {
          return `<div class="${"banner-intro svelte-19ejr2"}"><h1 class="${"svelte-19ejr2"}">The past and future of Themelio</h1>
            <p class="${"svelte-19ejr2"}">Banners fill their space and come in a thin and wide height</p>
            
            <div class="${"bottom-section svelte-19ejr2"}">${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
            default: () => {
              return `${each(timeline, (epoch, i) => {
                return `${validate_component(Button, "Button").$$render($$result, { size: "large", class: "epoch-button" }, {}, {
                  default: () => {
                    return `${escape(epoch.title)}`;
                  }
                })}`;
              })}`;
            }
          })}
                <div class="${"full-container svelte-19ejr2"}"><div class="${"timeline-description svelte-19ejr2"}"><h2 class="${"svelte-19ejr2"}">${escape(selected_epoch.title)}</h2>
                        <p class="${"svelte-19ejr2"}">${escape(selected_epoch.content)}</p></div></div></div></div>`;
        }
      })}
</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  component: () => component5,
  file: () => file5,
  fonts: () => fonts6,
  imports: () => imports6,
  index: () => index6,
  stylesheets: () => stylesheets6
});
var index6, component5, file5, imports6, stylesheets6, fonts6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    index6 = 5;
    component5 = async () => (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default;
    file5 = "_app/immutable/components/pages/_lang_/roadmap/_page.svelte-13a44728.js";
    imports6 = ["_app/immutable/components/pages/_lang_/roadmap/_page.svelte-13a44728.js", "_app/immutable/chunks/index-14cd48c3.js", "_app/immutable/chunks/BubbleBackground.svelte_svelte_type_style_lang-a7e69a4d.js", "_app/immutable/chunks/Button-d6474324.js", "_app/immutable/chunks/ButtonGroup-fdf211cd.js"];
    stylesheets6 = ["_app/immutable/assets/_page-80b0995c.css", "_app/immutable/assets/BubbleBackground-6370da64.css"];
    fonts6 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_lang_/technology/_page.svelte.js
var page_svelte_exports4 = {};
__export(page_svelte_exports4, {
  default: () => Page4
});
var RockyMoon, LayeredPlanet, ForkImage, CoinImage, KeyImage, HexImage, css10, Page4;
var init_page_svelte4 = __esm({
  ".svelte-kit/output/server/entries/pages/_lang_/technology/_page.svelte.js"() {
    init_chunks();
    init_BubbleBackground_svelte_svelte_type_style_lang();
    init_Button();
    init_Card();
    init_GradientBubble();
    RockyMoon = "/_app/immutable/assets/moon-0ae16c2c.png";
    LayeredPlanet = "/_app/immutable/assets/richplanet-fcecc079.png";
    ForkImage = "/_app/immutable/assets/fork-7dc6f256.png";
    CoinImage = "/_app/immutable/assets/coin-63597eb6.png";
    KeyImage = "/_app/immutable/assets/key-f11c377c.png";
    HexImage = "/_app/immutable/assets/hex-c6a23d9e.png";
    css10 = {
      code: ".top-banner.svelte-rknpid.svelte-rknpid{margin-bottom:5rem}.top-banner.svelte-rknpid p.svelte-rknpid{margin-left:-5rem;width:100%;text-align:center}.moon.svelte-rknpid.svelte-rknpid{height:12rem}.planet.svelte-rknpid.svelte-rknpid{height:12rem}.top-cards.svelte-rknpid.svelte-rknpid{display:grid;grid-auto-flow:column;gap:1rem;margin:1rem}#banner1.svelte-rknpid.svelte-rknpid{display:flex;justify-content:space-between;width:100%;gap:2rem}#banner1.svelte-rknpid .svelte-rknpid{margin:auto 0}#banner1.svelte-rknpid h2.svelte-rknpid{flex-shrink:0;flex-grow:0}#banner1.svelte-rknpid p.svelte-rknpid{flex-shrink:1}.middle-cards.svelte-rknpid.svelte-rknpid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.middle-cards.svelte-rknpid h3.svelte-rknpid{height:max-content}.middle-cards.svelte-rknpid .card{display:grid;grid-auto-rows:max-content;grid-template-rows:max-content max-content auto;overflow:scroll}.middle-cards.svelte-rknpid .info-card-image.svelte-rknpid{height:4rem;margin-bottom:1.5rem}.bottom-cards.svelte-rknpid.svelte-rknpid{margin-top:10rem;display:flex;justify-content:space-between;gap:1rem;margin:1rem;margin-bottom:10rem}.bottom-cards.svelte-rknpid .card{width:100%}.bottom-cards.svelte-rknpid .bottom-card-1.svelte-rknpid{position:relative}",
      map: null
    };
    Page4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let info_cards = [
        {
          image: KeyImage,
          title: "Robust endogenous trust",
          message: "lorem.com"
        },
        {
          image: ForkImage,
          title: "Covenant-powered smart coins",
          message: "lorem.com"
        },
        {
          image: HexImage,
          title: "Collusion-resistant consensus game",
          message: "lorem.com"
        },
        {
          image: CoinImage,
          title: "World\u2019s first non-fiat stablecoin",
          message: "lorem.com"
        }
      ];
      let bottom_cards = {
        dev: {
          title: "Developers",
          message: "lorem.com"
        },
        team: { title: "Team", message: "lorem.com" }
      };
      $$result.css.add(css10);
      return `<div class="${"tech-page"}"><div class="${"top-banner svelte-rknpid"}">${validate_component(Banner, "Banner").$$render($$result, { variant: "white", column: true }, {}, {
        default: () => {
          return `<h1>Technology</h1>
            <p class="${"svelte-rknpid"}">Explore Themelio&#39;s new blockchain paradign -- rich layered
                applications evolving on a permanent foundation of endogenous
                trust
            </p>`;
        }
      })}</div>
    <div class="${"top-cards svelte-rknpid"}">${validate_component(Card, "Card").$$render($$result, { variant: "grey-gradient", noise: true }, {}, {
        default: () => {
          return `<img class="${"moon svelte-rknpid"}"${add_attribute("src", RockyMoon, 0)} alt="${""}">
            <h2>Traditional platforms &amp; application blockchains</h2>
            <ul><li>Blockchains are tightly coupled to applications</li>
                <li>Application evolution eventually requires the blockchain to
                    adapt
                </li>
                <li>Contentious, destabilizing blockchain protocol changes that
                    undermine endogenous trust
                </li></ul>`;
        }
      })}
        ${validate_component(Card, "Card").$$render($$result, { variant: "gradient4", noise: true }, {}, {
        default: () => {
          return `<img class="${"planet svelte-rknpid"}"${add_attribute("src", LayeredPlanet, 0)} alt="${""}">

            <h2>Mel&#39;s decoupled architecture</h2>
            <ul><li>Separated from applications by flexible mid-level protocols
                </li>
                <li>Applications and protocols can evolve without changing
                    layer-1 blockchain
                </li>
                <li>Powerful enough to build layer-2 protocols that inherit the
                    blockchain&#39;s security
                </li>
                <li>Governance-free, immutable blockchain that needs no change
                </li></ul>`;
        }
      })}</div>
    ${validate_component(Banner, "Banner").$$render($$result, {}, {}, {
        default: () => {
          return `<div id="${"banner1"}" class="${"svelte-rknpid"}"><h2 class="${"svelte-rknpid"}">Knowledge base</h2>
            <p class="${"svelte-rknpid"}">All the resources you need to learn more about Themelio.</p>
            ${validate_component(Button, "Button").$$render($$result, { arrow: true }, {}, {
            default: () => {
              return `Read Now`;
            }
          })}</div>`;
        }
      })}
    <div class="${"middle-cards svelte-rknpid"}">${each(info_cards, (card, i) => {
        return `${validate_component(Card, "Card").$$render($$result, { variant: "white", square: true }, {}, {
          default: () => {
            return `<img class="${"info-card-image svelte-rknpid"}" id="${"info-card-image-" + escape(i, true)}"${add_attribute("src", card.image, 0)} alt="${""}">

                <h3 class="${"svelte-rknpid"}">${escape(card.title)}</h3>
                <p>${escape(card.message)}</p>
            `;
          }
        })}`;
      })}</div>
    <div class="${"bottom-cards svelte-rknpid"}">${validate_component(Card, "Card").$$render($$result, { variant: "white", noise: true }, {}, {
        default: () => {
          return `<div class="${"bottom-card-1 svelte-rknpid"}">${validate_component(GradientBubble, "GradientBubble").$$render(
            $$result,
            {
              scale: 30,
              color: Colors.teal,
              opacity: 30,
              offset: ["0%", "100%"]
            },
            {},
            {}
          )}
                <h3>${escape(bottom_cards.dev.title)}</h3>
                <p>${escape(bottom_cards.dev.message)}</p>
                ${validate_component(Button, "Button").$$render($$result, { variant: "gradient1", arrow: true }, {}, {
            default: () => {
              return `Documentation`;
            }
          })}</div>`;
        }
      })}
        ${validate_component(Card, "Card").$$render($$result, { variant: "white", noise: true }, {}, {
        default: () => {
          return `${validate_component(GradientBubble, "GradientBubble").$$render(
            $$result,
            {
              scale: 50,
              color: Colors.light_blue,
              opacity: 15,
              offset: ["100%", "-50%"]
            },
            {},
            {}
          )}
            <h3>${escape(bottom_cards.team.title)}</h3>
            <p>${escape(bottom_cards.team.message)}</p>
            ${validate_component(Button, "Button").$$render($$result, { variant: "gradient1", arrow: true }, {}, {
            default: () => {
              return `Team`;
            }
          })}`;
        }
      })}</div>
</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports7 = {};
__export(__exports7, {
  component: () => component6,
  file: () => file6,
  fonts: () => fonts7,
  imports: () => imports7,
  index: () => index7,
  stylesheets: () => stylesheets7
});
var index7, component6, file6, imports7, stylesheets7, fonts7;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    index7 = 6;
    component6 = async () => (await Promise.resolve().then(() => (init_page_svelte4(), page_svelte_exports4))).default;
    file6 = "_app/immutable/components/pages/_lang_/technology/_page.svelte-f64e8daa.js";
    imports7 = ["_app/immutable/components/pages/_lang_/technology/_page.svelte-f64e8daa.js", "_app/immutable/chunks/index-14cd48c3.js", "_app/immutable/chunks/BubbleBackground.svelte_svelte_type_style_lang-a7e69a4d.js", "_app/immutable/chunks/Button-d6474324.js", "_app/immutable/chunks/Card-884a1dfe.js", "_app/immutable/chunks/GradientBubble-bd8ab125.js"];
    stylesheets7 = ["_app/immutable/assets/_page-c841d445.css", "_app/immutable/assets/BubbleBackground-6370da64.css"];
    fonts7 = [];
  }
});

// .svelte-kit/output/server/index.js
init_chunks();
init_index2();
init_index3();
function afterUpdate() {
}
var DEV = false;
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  {
    stores.page.set(page2);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0 }, {}, {
    default: () => {
      return `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1, form }, {}, {})}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, form }, {}, {})}`}

${``}`;
});
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type);
}
function is_form_content_type(request) {
  return is_content_type(request, "application/x-www-form-urlencoded", "multipart/form-data");
}
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\u0000",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names$1 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names$1;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function stringify_string(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
var chars$1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function uneval(value) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive$1(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== object_proto_names) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive$1(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map(
          (v, i) => i in thing ? stringify2(v) : ""
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (is_primitive(thing)) {
        values.push(stringify_primitive$1(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars$1[num % chars$1.length] + name;
    num = ~~(num / chars$1.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive$1(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;
function stringify(value) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing))
      return indexes.get(thing);
    if (thing === void 0)
      return UNDEFINED;
    if (Number.isNaN(thing))
      return NAN;
    if (thing === Infinity)
      return POSITIVE_INFINITY;
    if (thing === -Infinity)
      return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0)
      return NEGATIVE_ZERO;
    const index22 = p++;
    indexes.set(thing, index22);
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          str = `["Date","${thing.toISOString()}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0)
              str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index22] = str;
    return index22;
  }
  const index8 = flatten(value);
  if (index8 < 0)
    return `${index8}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing instanceof String)
    return stringify_string(thing.toString());
  if (thing === void 0)
    return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0)
    return NEGATIVE_ZERO.toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return error2;
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
var tracked_url_properties = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    let value = tracked[property];
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return value;
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
var DATA_SUFFIX = "/__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  return pathname.slice(0, -DATA_SUFFIX.length);
}
var GENERIC_ERROR = {
  id: "__error"
};
function method_not_allowed(mod, method) {
  return new Response(`${method} method not allowed`, {
    status: 405,
    headers: {
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = [];
  for (const method in ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
    if (method in mod)
      allowed.push(method);
  }
  if (mod.GET || mod.HEAD)
    allowed.push("HEAD");
  return allowed;
}
function get_option(nodes, option) {
  return nodes.reduce((value, node) => {
    return node?.universal?.[option] ?? node?.server?.[option] ?? value;
  }, void 0);
}
function static_error_page(options, status, message) {
  return new Response(options.error_template({ status, message }), {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = await handle_error_and_jsonify(event, options, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (has_data_suffix(new URL(event.request.url).pathname) || type === "application/json") {
    return new Response(JSON.stringify(body), {
      status,
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
  return static_error_page(options, status, body.message);
}
function handle_error_and_jsonify(event, options, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return options.handle_error(error2, event);
  }
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (data${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function serialize_data_node(node) {
  if (!node)
    return "null";
  if (node.type === "error" || node.type === "skip") {
    return JSON.stringify(node);
  }
  const stringified = stringify(node.data);
  const uses = [];
  if (node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses.parent)
    uses.push(`"parent":1`);
  if (node.uses.route)
    uses.push(`"route":1`);
  if (node.uses.url)
    uses.push(`"url":1`);
  return `{"type":"data","data":${stringified},"uses":{${uses.join(",")}}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
}
async function render_endpoint(event, mod, state) {
  const method = event.request.method;
  let handler2 = mod[method];
  if (!handler2 && method === "HEAD") {
    handler2 = mod.GET;
  }
  if (!handler2) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.initiator) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    const response = await handler2(
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (error2) {
    if (error2 instanceof Redirect) {
      return new Response(void 0, {
        status: error2.status,
        headers: { location: error2.location }
      });
    }
    throw error2;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (method === "PUT" || method === "PATCH" || method === "DELETE") {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter((val) => val != null);
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options, server2) {
  const actions = server2?.actions;
  if (!actions) {
    if (server2) {
      maybe_throw_migration_error(server2);
    }
    const no_actions_error = error(405, "POST method not allowed. No actions exist for this page");
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data2 = await call_action(event, actions);
    if (data2 instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data2.status,
        data: stringify_action_response(data2.data, event.route.id)
      });
    } else {
      return action_json({
        type: "success",
        status: data2 ? 200 : 204,
        data: stringify_action_response(data2, event.route.id)
      });
    }
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return action_json({
        type: "redirect",
        status: error2.status,
        location: error2.location
      });
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options, check_incorrect_fail_use(error2))
      },
      {
        status: error2 instanceof HttpError ? error2.status : 500
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error(`Cannot "throw fail()". Use "return fail()"`) : error2;
}
function action_json(data2, init2) {
  return json(data2, init2);
}
function is_action_request(event, leaf_node) {
  return leaf_node.server && event.request.method !== "GET" && event.request.method !== "HEAD";
}
async function handle_action_request(event, server2) {
  const actions = server2.actions;
  if (!actions) {
    maybe_throw_migration_error(server2);
    event.setHeaders({
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data2 = await call_action(event, actions);
    if (data2 instanceof ActionFailure) {
      return { type: "failure", status: data2.status, data: data2.data };
    } else {
      return {
        type: "success",
        status: 200,
        data: data2
      };
    }
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return {
        type: "redirect",
        status: error2.status,
        location: error2.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(error2)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      `When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions`
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new Error(
      `Actions expect form-encoded data (received ${event.request.headers.get("content-type")}`
    );
  }
  return action(event);
}
function maybe_throw_migration_error(server2) {
  for (const method of ["POST", "PUT", "PATCH", "DELETE"]) {
    if (server2[method]) {
      throw new Error(
        `${method} method no longer allowed in +page.server, use actions instead. See the PR for more info: https://github.com/sveltejs/kit/pull/6469`
      );
    }
  }
}
function uneval_action_response(data2, route_id) {
  return try_deserialize(data2, uneval, route_id);
}
function stringify_action_response(data2, route_id) {
  return try_deserialize(data2, stringify, route_id);
}
function try_deserialize(data2, fn, route_id) {
  try {
    return fn(data2);
  } catch (e) {
    const error2 = e;
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "")
        message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
async function unwrap_promises(object) {
  for (const key2 in object) {
    if (typeof object[key2]?.then === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
async function load_server_data({ event, options, state, node, parent }) {
  if (!node?.server)
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[key2];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    route: {
      get id() {
        uses.route = true;
        return event.route.id;
      }
    },
    url
  });
  const data2 = result ? await unwrap_promises(result) : null;
  if (options.dev) {
    validate_load_response(data2, event.route.id);
  }
  return {
    type: "data",
    data: data2,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: async (input, init2) => {
      const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
      const response = await event.fetch(input, init2);
      const url = new URL(input instanceof Request ? input.url : input, event.url);
      const same_origin = url.origin === event.url.origin;
      let dependency;
      if (same_origin) {
        if (state.prerendering) {
          dependency = { response, body: null };
          state.prerendering.dependencies.set(url.pathname, dependency);
        }
      } else {
        const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
        if (mode !== "no-cors") {
          const acao = response.headers.get("access-control-allow-origin");
          if (!acao || acao !== event.url.origin && acao !== "*") {
            throw new Error(
              `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
            );
          }
        }
      }
      const proxy = new Proxy(response, {
        get(response2, key2, _receiver) {
          async function text() {
            const body = await response2.text();
            if (!body || typeof body === "string") {
              const status_number = Number(response2.status);
              if (isNaN(status_number)) {
                throw new Error(
                  `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
                );
              }
              fetched.push({
                url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
                method: event.request.method,
                request_body: input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body,
                response_body: body,
                response: response2
              });
            }
            if (dependency) {
              dependency.body = body;
            }
            return body;
          }
          if (key2 === "arrayBuffer") {
            return async () => {
              const buffer = await response2.arrayBuffer();
              if (dependency) {
                dependency.body = new Uint8Array(buffer);
              }
              return buffer;
            };
          }
          if (key2 === "text") {
            return text;
          }
          if (key2 === "json") {
            return async () => {
              return JSON.parse(await text());
            };
          }
          return Reflect.get(response2, key2, response2);
        }
      });
      if (csr) {
        const get = response.headers.get;
        response.headers.get = (key2) => {
          const lower = key2.toLowerCase();
          const value = get.call(response.headers, lower);
          if (value && !lower.startsWith("x-sveltekit-")) {
            const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
            if (!included) {
              throw new Error(
                `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.route})`
              );
            }
          }
          return value;
        };
      }
      return proxy;
    },
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  });
  const data2 = result ? await unwrap_promises(result) : null;
  validate_load_response(data2, event.route.id);
  return data2;
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
function validate_load_response(data2, routeId) {
  if (data2 != null && Object.getPrototypeOf(data2) !== Object.prototype) {
    throw new Error(
      `a load function related to route '${routeId}' returned ${typeof data2 !== "object" ? `a ${typeof data2}` : data2 instanceof Response ? "a Response object" : Array.isArray(data2) ? "an array" : "a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`
    );
  }
}
function hash(value) {
  let hash2 = 5381;
  if (typeof value === "string") {
    let i = value.length;
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else if (ArrayBuffer.isView(value)) {
    const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
    let i = buffer.length;
    while (i)
      hash2 = hash2 * 33 ^ buffer[--i];
  } else {
    throw new TypeError("value must be a string or TypedArray");
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    if (key2 === "age")
      age = value;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_body) {
    attrs.push(`data-hash=${escape_html_attr(hash(fetched.request_body))}`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder = new TextEncoder();
function sha256(data2) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode$1(data2);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode$1(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  constructor(use_hashes, directives, nonce, dev) {
    __privateAdd(this, _use_hashes, void 0);
    __privateAdd(this, _script_needs_csp, void 0);
    __privateAdd(this, _style_needs_csp, void 0);
    __privateAdd(this, _directives, void 0);
    __privateAdd(this, _script_src, void 0);
    __privateAdd(this, _style_src, void 0);
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, dev ? { ...directives } : directives);
    const d = __privateGet(this, _directives);
    if (dev) {
      const effective_style_src2 = d["style-src"] || d["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = directives[key2];
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  constructor(use_hashes, directives, nonce, dev) {
    super(use_hashes, directives, nonce, dev);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  constructor({ mode, directives, reportOnly }, { prerender, dev }) {
    __publicField(this, "nonce", generate_nonce());
    __publicField(this, "csp_provider");
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce, dev);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce, dev);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
var updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch,
  fetched,
  options,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state.prerendering) {
    if (options.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { entry } = options.manifest._;
  const stylesheets8 = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const fonts8 = new Set(options.manifest._.entry.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      components: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data2 = {};
    for (let i = 0; i < branch.length; i += 1) {
      data2 = { ...data2, ...branch[i].data };
      props[`data_${i}`] = data2;
    }
    props.page = {
      error: error2,
      params: event.params,
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value
    };
    rendered = options.root.render(props);
    for (const { node } of branch) {
      if (node.imports) {
        node.imports.forEach((url) => modulepreloads.add(url));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url) => stylesheets8.add(url));
      }
      if (node.fonts) {
        node.fonts.forEach((url) => fonts8.add(url));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body = rendered.html;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerendering
  });
  const target = hash(body);
  let assets2;
  if (options.paths.assets) {
    assets2 = options.paths.assets;
  } else if (state.prerendering?.fallback) {
    assets2 = options.paths.base;
  } else {
    const segments = event.url.pathname.slice(options.paths.base.length).split("/").slice(2);
    assets2 = segments.length > 0 ? segments.map(() => "..").join("/") : ".";
  }
  const prefixed = (path) => path.startsWith("/") ? path : `${assets2}/${path}`;
  const serialized = { data: "", form: "null" };
  try {
    serialized.data = `[${branch.map(({ server_data }) => {
      if (server_data?.type === "data") {
        const data2 = uneval(server_data.data);
        const uses = [];
        if (server_data.uses.dependencies.size > 0) {
          uses.push(`dependencies:${s(Array.from(server_data.uses.dependencies))}`);
        }
        if (server_data.uses.params.size > 0) {
          uses.push(`params:${s(Array.from(server_data.uses.params))}`);
        }
        if (server_data.uses.parent)
          uses.push(`parent:1`);
        if (server_data.uses.route)
          uses.push(`route:1`);
        if (server_data.uses.url)
          uses.push(`url:1`);
        return `{type:"data",data:${data2},uses:{${uses.join(",")}}${server_data.slash ? `,slash:${s(server_data.slash)}` : ""}}`;
      }
      return s(server_data);
    }).join(",")}]`;
  } catch (e) {
    const error3 = e;
    throw new Error(clarify_devalue_error(event, error3));
  }
  if (form_value) {
    serialized.form = uneval_action_response(form_value, event.route.id);
  }
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (options.dev)
      attributes.push(" data-sveltekit");
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets8) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "css", path })) {
      const attributes = [];
      if (csp.style_needs_nonce) {
        attributes.push(`nonce="${csp.nonce}"`);
      }
      if (inline_styles.has(dep)) {
        attributes.push("disabled", 'media="(max-width: 0)"');
      } else {
        const preload_atts = ['rel="preload"', 'as="style"'].concat(attributes);
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
      attributes.unshift('rel="stylesheet"');
      head += `
		<link href="${path}" ${attributes.join(" ")}>`;
    }
  }
  for (const dep of fonts8) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  if (page_config.csr) {
    const opts = [
      `env: ${s(options.public_env)}`,
      `paths: ${s(options.paths)}`,
      `target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode`,
      `version: ${s(options.version)}`
    ];
    if (page_config.ssr) {
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        `data: ${serialized.data}`,
        `form: ${serialized.form}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (error2) {
        hydrate.push(`error: ${uneval(error2)}`);
      }
      if (options.embedded) {
        hydrate.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      opts.push(`hydrate: {
					${hydrate.join(",\n					")}
				}`);
    }
    const init_app = `
			import { start } from ${s(prefixed(entry.file))};

			start({
				${opts.join(",\n				")}
			});
		`;
    for (const dep of modulepreloads) {
      const path = prefixed(dep);
      if (resolve_opts.preload({ type: "js", path })) {
        link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
        if (state.prerendering) {
          head += `
		<link rel="modulepreload" href="${path}">`;
        }
      }
    }
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
  }
  if (page_config.ssr && page_config.csr) {
    body += `
	${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n	")}`;
  }
  if (options.service_worker) {
    const opts = options.dev ? `, { type: 'module' }` : "";
    const init_service_worker = `
			if ('serviceWorker' in navigator) {
				addEventListener('load', function () {
					navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
				});
			}
		`;
    csp.add_script(init_service_worker);
    head += `
		<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  head += rendered.head;
  const html = await resolve_opts.transformPageChunk({
    html: options.app_template({ head, body, assets: assets2, nonce: csp.nonce }),
    done: true
  }) || "";
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  return new Response(html, {
    status,
    headers
  });
}
async function respond_with_error({ event, options, state, status, error: error2, resolve_opts }) {
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await options.manifest._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state.initiator = GENERIC_ERROR;
      const server_data_promise = load_server_data({
        event,
        options,
        state,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data2 = await load_data({
        event,
        fetched,
        node: default_layout,
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data: data2
        },
        {
          node: await options.manifest._.nodes[1](),
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: await handle_error_and_jsonify(event, options, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (error3) {
    if (error3 instanceof Redirect) {
      return redirect_response(error3.status, error3.location);
    }
    return static_error_page(
      options,
      error3 instanceof HttpError ? error3.status : 500,
      (await handle_error_and_jsonify(event, options, error3)).message
    );
  }
}
async function render_page(event, route, page2, options, state, resolve_opts) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  state.initiator = route;
  if (is_action_json_request(event)) {
    const node = await options.manifest._.nodes[page2.leaf]();
    return handle_action_json_request(event, options, node?.server);
  }
  try {
    const nodes = await Promise.all([
      ...page2.layouts.map((n) => n == void 0 ? n : options.manifest._.nodes[n]()),
      options.manifest._.nodes[page2.leaf]()
    ]);
    const leaf_node = nodes.at(-1);
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event, leaf_node)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(303, action_result.location);
      }
      if (action_result?.type === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node?.server);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender");
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod && mod.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      if (should_prerender !== false && get_option(nodes, "ssr") === false && !leaf_node.server?.actions) {
        return await render_response({
          branch: [],
          fetched: [],
          page_config: {
            ssr: false,
            csr: get_option(nodes, "csr") ?? true
          },
          status,
          error: null,
          event,
          options,
          state,
          resolve_opts
        });
      }
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options,
        state,
        resolve_opts
      });
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            options,
            state,
            node,
            parent: async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data2, await parent.data);
              }
              return data2;
            }
          });
        } catch (e) {
          load_error = e;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data2, await load_promises[j]);
              }
              return data2;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr
          });
        } catch (e) {
          load_error = e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data2 = await load_promises[i];
          branch.push({ node, server_data, data: data2 });
        } catch (e) {
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: new Response(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = await handle_error_and_jsonify(event, options, err);
          while (i--) {
            if (page2.errors[i]) {
              const index8 = page2.errors[i];
              const node2 = await options.manifest._.nodes[index8]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      const body = `{"type":"data","nodes":[${branch.map((node) => serialize_data_node(node?.server_data)).join(",")}]}`;
      state.prerendering.dependencies.set(data_pathname, {
        response: new Response(body),
        body
      });
    }
    return await render_response({
      event,
      options,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched
    });
  } catch (error2) {
    return await respond_with_error({
      event,
      options,
      state,
      status: 500,
      error: error2,
      resolve_opts
    });
  }
}
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  let buffered = "";
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i];
    if (param.chained && param.rest && buffered) {
      value = value ? buffered + "/" + value : buffered;
    }
    buffered = "";
    if (value === void 0) {
      if (param.rest)
        result[param.name] = "";
    } else {
      if (param.matcher && !matchers[param.matcher](value)) {
        if (param.optional && param.chained) {
          let j = values.indexOf(void 0, i);
          if (j === -1) {
            const next = params[i + 1];
            if (next?.rest && next.chained) {
              buffered = value;
            } else {
              return;
            }
          }
          while (j >= i) {
            values[j] = values[j - 1];
            j -= 1;
          }
          continue;
        }
        return;
      }
      result[param.name] = value;
    }
  }
  if (buffered)
    return;
  return result;
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
async function render_data(event, route, options, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return {
              type: "skip"
            };
          }
          const node = n == void 0 ? n : await options.manifest._.nodes[n]();
          return load_server_data({
            event: new_event,
            options,
            state,
            node,
            parent: async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await functions[j]();
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            }
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return {
          type: "skip"
        };
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return {
            type: "error",
            error: await handle_error_and_jsonify(event, options, error2),
            status: error2 instanceof HttpError ? error2.status : void 0
          };
        })
      )
    );
    try {
      const stubs = nodes.slice(0, length).map(serialize_data_node);
      const json2 = `{"type":"data","nodes":[${stubs.join(",")}]}`;
      return json_response(json2);
    } catch (e) {
      const error2 = e;
      return json_response(JSON.stringify(clarify_devalue_error(event, error2)), 500);
    }
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(JSON.stringify(await handle_error_and_jsonify(event, options, error2)));
    }
  }
}
function json_response(json2, status = 200) {
  return new Response(json2, {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect2) {
  return json_response(
    JSON.stringify({
      type: "redirect",
      location: redirect2.location
    })
  );
}
var parse_1 = parse$1;
var serialize_1 = serialize;
var __toString = Object.prototype.toString;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$1(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode;
  var index8 = 0;
  while (index8 < str.length) {
    var eqIdx = str.indexOf("=", index8);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(";", index8);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index8 = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    var key2 = str.slice(index8, eqIdx).trim();
    if (void 0 === obj[key2]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key2] = tryDecode(val, dec);
    }
    index8 = endIdx + 1;
  }
  return obj;
}
function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    var expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function decode(str) {
  return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}
function isDate(val) {
  return __toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e) {
    return str;
  }
}
var cookie_paths = {};
function get_cookies(request, url, dev, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = parse_1(header, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const default_path = normalized_url.split("/").slice(0, -1).join("/") || "/";
  if (dev) {
    const initial_decoded_cookies = parse_1(header, { decode: decodeURIComponent });
    for (const name of Object.keys(cookie_paths)) {
      cookie_paths[name] = new Set(
        [...cookie_paths[name]].filter(
          (path) => !path_matches(normalized_url, path) || name in initial_decoded_cookies
        )
      );
    }
    for (const name in initial_decoded_cookies) {
      cookie_paths[name] = cookie_paths[name] ?? /* @__PURE__ */ new Set();
      if (![...cookie_paths[name]].some((path) => path_matches(normalized_url, path))) {
        cookie_paths[name].add(default_path);
      }
    }
  }
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    get(name, opts) {
      const c = new_cookies[name];
      if (c && domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
        return c.value;
      }
      const decoder = opts?.decode || decodeURIComponent;
      const req_cookies = parse_1(header, { decode: decoder });
      const cookie = req_cookies[name];
      if (!dev || cookie) {
        return cookie;
      }
      const paths = /* @__PURE__ */ new Set([...cookie_paths[name] ?? []]);
      if (c) {
        paths.add(c.options.path ?? default_path);
      }
      if (paths.size > 0) {
        console.warn(
          `Cookie with name '${name}' was not found at path '${url.pathname}', but a cookie with that name exists at these paths: '${[...paths].join("', '")}'. Did you mean to set its 'path' to '/' instead?`
        );
      }
    },
    set(name, value, opts = {}) {
      let path = opts.path ?? default_path;
      new_cookies[name] = {
        name,
        value,
        options: {
          ...defaults,
          ...opts,
          path
        }
      };
      if (dev) {
        cookie_paths[name] = cookie_paths[name] ?? /* @__PURE__ */ new Set();
        if (!value) {
          if (!cookie_paths[name].has(path) && cookie_paths[name].size > 0) {
            const paths = `'${Array.from(cookie_paths[name]).join("', '")}'`;
            console.warn(
              `Trying to delete cookie '${name}' at path '${path}', but a cookie with that name only exists at these paths: ${paths}.`
            );
          }
          cookie_paths[name].delete(path);
        } else {
          cookie_paths[name].add(path);
        }
      }
    },
    delete(name, opts = {}) {
      cookies.set(name, "", {
        ...opts,
        maxAge: 0
      });
    },
    serialize(name, value, opts) {
      return serialize_1(name, value, {
        ...defaults,
        ...opts
      });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain))
        continue;
      if (!path_matches(destination.pathname, cookie.options.path))
        continue;
      const encoder2 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder2(cookie.value);
    }
    if (header2) {
      const parsed = parse_1(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  return { cookies, new_cookies, get_cookie_header };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options } = new_cookie;
    headers.append("set-cookie", serialize_1(name, value, options));
  }
}
var setCookieExports = {};
var setCookie = {
  get exports() {
    return setCookieExports;
  },
  set exports(v) {
    setCookieExports = v;
  }
};
var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false
};
function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}
function parseString(setCookieValue, options) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);
  var nameValuePairStr = parts.shift();
  var parsed = parseNameValuePair(nameValuePairStr);
  var name = parsed.name;
  var value = parsed.value;
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  try {
    value = options.decodeValues ? decodeURIComponent(value) : value;
  } catch (e) {
    console.error(
      "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
      e
    );
  }
  var cookie = {
    name,
    value
  };
  parts.forEach(function(part) {
    var sides = part.split("=");
    var key2 = sides.shift().trimLeft().toLowerCase();
    var value2 = sides.join("=");
    if (key2 === "expires") {
      cookie.expires = new Date(value2);
    } else if (key2 === "max-age") {
      cookie.maxAge = parseInt(value2, 10);
    } else if (key2 === "secure") {
      cookie.secure = true;
    } else if (key2 === "httponly") {
      cookie.httpOnly = true;
    } else if (key2 === "samesite") {
      cookie.sameSite = value2;
    } else {
      cookie[key2] = value2;
    }
  });
  return cookie;
}
function parseNameValuePair(nameValuePairStr) {
  var name = "";
  var value = "";
  var nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("=");
  } else {
    value = nameValuePairStr;
  }
  return { name, value };
}
function parse(input, options) {
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!input) {
    if (!options.map) {
      return [];
    } else {
      return {};
    }
  }
  if (input.headers && input.headers["set-cookie"]) {
    input = input.headers["set-cookie"];
  } else if (input.headers) {
    var sch = input.headers[Object.keys(input.headers).find(function(key2) {
      return key2.toLowerCase() === "set-cookie";
    })];
    if (!sch && input.headers.cookie && !options.silent) {
      console.warn(
        "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
      );
    }
    input = sch;
  }
  if (!Array.isArray(input)) {
    input = [input];
  }
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!options.map) {
    return input.filter(isNonEmptyString).map(function(str) {
      return parseString(str, options);
    });
  } else {
    var cookies = {};
    return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
      var cookie = parseString(str, options);
      cookies2[cookie.name] = cookie;
      return cookies2;
    }, cookies);
  }
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}
setCookie.exports = parse;
setCookieExports.parse = parse;
var parseString_1 = setCookieExports.parseString = parseString;
var splitCookiesString_1 = setCookieExports.splitCookiesString = splitCookiesString;
function create_fetch({ event, options, state, get_cookie_header }) {
  return async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    const request_body = init2?.body;
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return await options.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie)
              request.headers.set("cookie", cookie);
          }
          let response2 = await fetch(request);
          if (mode === "no-cors") {
            response2 = new Response("", {
              status: response2.status,
              statusText: response2.statusText,
              headers: response2.headers
            });
          }
          return response2;
        }
        let response;
        const prefix2 = options.paths.assets || options.paths.base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix2) ? decoded.slice(prefix2.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options.manifest.assets.has(filename);
        const is_asset_html = options.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file7 = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(options.read(file7), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (request_body && typeof request_body !== "string" && !ArrayBuffer.isView(request_body)) {
          throw new Error("Request body must be a string or TypedArray");
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            event.request.headers.get("accept-language")
          );
        }
        response = await respond(request, options, state);
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of splitCookiesString_1(set_cookie)) {
            const { name, value, ...options2 } = parseString_1(str);
            event.cookies.set(
              name,
              value,
              options2
            );
          }
        }
        return response;
      }
    });
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
function validator(expected) {
  const set = new Set(expected);
  function validate(module, route_id) {
    if (!module)
      return;
    for (const key2 in module) {
      if (key2[0] !== "_" && !set.has(key2)) {
        const valid = expected.join(", ");
        throw new Error(
          `Invalid export '${key2}'${route_id ? ` in ${route_id}` : ""} (valid exports are ${valid}, or anything with a '_' prefix)`
        );
      }
    }
  }
  return validate;
}
var validate_common_exports = validator([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash"
]);
var validate_page_server_exports = validator([
  "load",
  "prerender",
  "csr",
  "ssr",
  "actions",
  "trailingSlash"
]);
var validate_server_exports = validator([
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
  "prerender",
  "trailingSlash"
]);
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
async function respond(request, options, state) {
  let url = new URL(request.url);
  if (options.csrf.check_origin) {
    const forbidden = request.method === "POST" && request.headers.get("origin") !== url.origin && is_form_content_type(request);
    if (forbidden) {
      const csrf_error = error(403, `Cross-site ${request.method} form submissions are forbidden`);
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return new Response(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let decoded;
  try {
    decoded = decode_pathname(url.pathname);
  } catch {
    return new Response("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (options.paths.base && !state.prerendering?.fallback) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response("Not found", { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || "/";
  }
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) || "/";
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("_").map(Boolean);
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!state.prerendering?.fallback) {
    const matchers = await options.manifest._.matchers();
    for (const candidate of options.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers = {};
  const event = {
    cookies: null,
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-netlify"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            `Use \`event.cookies.set(name, value, options)\` instead of \`event.setHeaders\` to set cookies`
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route && !is_data_request) {
      if (route.page) {
        const nodes = await Promise.all([
          ...route.page.layouts.map((n) => n == void 0 ? n : options.manifest._.nodes[n]()),
          options.manifest._.nodes[route.page.leaf]()
        ]);
        if (DEV)
          ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (DEV)
          ;
      }
      const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
      if (normalized !== url.pathname && !state.prerendering?.fallback) {
        return new Response(void 0, {
          status: 301,
          headers: {
            "x-sveltekit-normalize": "1",
            location: (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
          }
        });
      }
    }
    const { cookies, new_cookies, get_cookie_header } = get_cookies(
      request,
      url,
      options.dev,
      trailing_slash ?? "never"
    );
    event.cookies = cookies;
    event.fetch = create_fetch({ event, options, state, get_cookie_header });
    if (state.prerendering && !state.prerendering.fallback)
      disable_search(url);
    const response = await options.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        for (const key2 in headers) {
          const value = headers[key2];
          response2.headers.set(key2, value);
        }
        add_cookies_to_headers(response2.headers, Object.values(new_cookies));
        if (state.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = response.headers.get("etag");
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(response.status, location));
      }
    }
    return response;
  } catch (error2) {
    if (error2 instanceof Redirect) {
      if (is_data_request) {
        return redirect_json_response(error2);
      } else {
        return redirect_response(error2.status, error2.location);
      }
    }
    return await handle_fatal_error(event, options, error2);
  }
  async function resolve(event2, opts) {
    try {
      if (opts) {
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (state.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options,
            state,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          response = await render_page(event2, route, route.page, options, state, resolve_opts);
        } else {
          throw new Error("This should never happen");
        }
        return response;
      }
      if (state.initiator === GENERIC_ERROR) {
        return new Response("Internal Server Error", {
          status: 500
        });
      }
      if (!state.initiator) {
        return await respond_with_error({
          event: event2,
          options,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return new Response("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (error2) {
      return await handle_fatal_error(event2, options, error2);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var app_template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset="utf-8" />\n\n  <link rel="icon" href="' + assets2 + '/favicon.png" />\n  <meta name="viewport" content="width=device-width" />\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"\n    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />\n  <link rel="preconnect" href="https://rsms.me/" />\n  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />\n\n  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap"\n    rel="stylesheet" />\n  <link href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap" rel="stylesheet" />\n  <link href="https://cdn.jsdelivr.net/npm/chiron-hei-hk-webfont@2.5.5/css/vf.css" rel="stylesheet" />\n\n  <link\n    href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"\n    rel="stylesheet" />\n\n  <!-- <link href="https://fonts.cdnfonts.com/css/clash-display" rel="stylesheet" /> -->\n  ' + head + '\n  <style >\n   \n  </style>\n</head>\n\n<body data-sveltekit-preload-data="hover">\n  <div style="display: contents">' + body + '</div>\n  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"\n    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"\n    crossorigin="anonymous"><\/script>\n</body>\n<style>\n\n\n\n</style>\n</html>';
var error_template = ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n";
var read = null;
set_paths({ "base": "", "assets": "" });
var Server = class {
  constructor(manifest2) {
    this.options = {
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      csrf: {
        check_origin: true
      },
      dev: false,
      embedded: false,
      handle_error: (error2, event) => {
        return this.options.hooks.handleError({ error: error2, event }) ?? {
          message: event.route.id != null ? "Internal Error" : "Not Found"
        };
      },
      hooks: null,
      manifest: manifest2,
      paths: { base, assets },
      public_env: {},
      read,
      root: Root,
      service_worker: false,
      app_template,
      app_template_contains_nonce: false,
      error_template,
      version: "1674603854691"
    };
  }
  async init({ env }) {
    const entries = Object.entries(env);
    Object.fromEntries(entries.filter(([k]) => !k.startsWith("PUBLIC_")));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith("PUBLIC_")));
    this.options.public_env = pub;
    if (!this.options.hooks) {
      const module = await Promise.resolve().then(() => (init_hooks(), hooks_exports));
      this.options.hooks = {
        handle: module.handle || (({ event, resolve }) => resolve(event)),
        handleError: module.handleError || (({ error: error2 }) => console.error(error2.stack)),
        handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
      };
    }
  }
  async respond(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    return respond(request, this.options, options);
  }
};

// .svelte-kit/netlify-tmp/manifest.js
var manifest = {
  appDir: "_app",
  appPath: "_app",
  assets: /* @__PURE__ */ new Set([]),
  mimeTypes: {},
  _: {
    entry: { "file": "_app/immutable/start-c9c577fb.js", "imports": ["_app/immutable/start-c9c577fb.js", "_app/immutable/chunks/index-14cd48c3.js", "_app/immutable/chunks/singletons-db95dcfd.js", "_app/immutable/chunks/control-f5b05b5f.js"], "stylesheets": [], "fonts": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4)),
      () => Promise.resolve().then(() => (init__5(), __exports5)),
      () => Promise.resolve().then(() => (init__6(), __exports6)),
      () => Promise.resolve().then(() => (init__7(), __exports7))
    ],
    routes: [
      {
        id: "/",
        pattern: /^\/$/,
        params: [],
        page: { layouts: [0], errors: [1], leaf: 2 },
        endpoint: null
      },
      {
        id: "/[lang]",
        pattern: /^\/([^/]+?)\/?$/,
        params: [{ "name": "lang", "optional": false, "rest": false, "chained": false }],
        page: { layouts: [0], errors: [1], leaf: 3 },
        endpoint: null
      },
      {
        id: "/[lang]/components",
        pattern: /^\/([^/]+?)\/components\/?$/,
        params: [{ "name": "lang", "optional": false, "rest": false, "chained": false }],
        page: { layouts: [0], errors: [1], leaf: 4 },
        endpoint: null
      },
      {
        id: "/[lang]/roadmap",
        pattern: /^\/([^/]+?)\/roadmap\/?$/,
        params: [{ "name": "lang", "optional": false, "rest": false, "chained": false }],
        page: { layouts: [0], errors: [1], leaf: 5 },
        endpoint: null
      },
      {
        id: "/[lang]/technology",
        pattern: /^\/([^/]+?)\/technology\/?$/,
        params: [{ "name": "lang", "optional": false, "rest": false, "chained": false }],
        page: { layouts: [0], errors: [1], leaf: 6 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
var prerendered = /* @__PURE__ */ new Set([]);

// .svelte-kit/netlify-tmp/entry.js
var server = new Server(manifest);
var prefix = `/${manifest.appPath}/`;
var initialized = server.init({
  env: Deno.env.toObject()
});
async function handler(request, context) {
  if (is_static_file(request)) {
    return;
  }
  await initialized;
  return server.respond(request, {
    platform: { context },
    getClientAddress() {
      return context.ip;
    }
  });
}
function is_static_file(request) {
  const url = new URL(request.url);
  if (url.pathname.startsWith(prefix)) {
    return true;
  }
  const pathname = url.pathname.replace(/\/$/, "");
  let file7 = pathname.substring(1);
  try {
    file7 = decodeURIComponent(file7);
  } catch (err) {
  }
  return manifest.assets.has(file7) || manifest.assets.has(file7 + "/index.html") || prerendered.has(pathname || "/");
}
export {
  handler as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=render.js.map
