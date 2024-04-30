import { a5 as bold, a6 as red, a7 as yellow, a8 as dim, a9 as blue } from './chunks/astro_Bindw8GW.mjs';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":true,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/index.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"links/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/links","isIndex":true,"type":"page","pattern":"^\\/links\\/?$","segments":[[{"content":"links","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/links/index.astro","pathname":"/links","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"tag/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tag","isIndex":true,"type":"page","pattern":"^\\/tag\\/?$","segments":[[{"content":"tag","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tag/index.astro","pathname":"/tag","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"tagssg/roger/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tagssg/roger","isIndex":false,"type":"page","pattern":"^\\/tagssg\\/roger\\/?$","segments":[[{"content":"tagssg","dynamic":false,"spread":false}],[{"content":"roger","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tagssg/roger.astro","pathname":"/tagssg/roger","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.7.0_typescript@5.4.5/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ByXv3Sle.js"}],"styles":[{"type":"external","src":"/_astro/index.YdRB7bfO.css"}],"routeData":{"route":"/tag/[...tag]","isIndex":false,"type":"page","pattern":"^\\/tag(?:\\/(.*?))?\\/?$","segments":[[{"content":"tag","dynamic":false,"spread":false}],[{"content":"...tag","dynamic":true,"spread":true}]],"params":["...tag"],"component":"src/pages/tag/[...tag].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":false,"componentMetadata":[["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/posts/[page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/posts/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/tag/[...tag].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/tag/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/tagssg/[tag].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/about/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/links/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/layouts/SingleBlogPost.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-data-object.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-data-object.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-notes.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-notes.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/better-anchor-title.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/better-anchor-title.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/copy-code.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/copy-code.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/css-relative-colors.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/css-relative-colors.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/demo.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/demo.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-custom-filter.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-custom-filter.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-omit-last-comma.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-omit-last-comma.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-white-space.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-white-space.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/live-server.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/live-server.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/powershell-snippets.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/powershell-snippets.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/programming-rules.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/programming-rules.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-server-file-access-error.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-server-file-access-error.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-snippets.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-snippets.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/ssr-versus-ssg.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/ssr-versus-ssg.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tag/[...tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tag/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tagssg/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/tagssg/roger.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tagssg/roger@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-manifest":"manifest_BP9_e0De.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.7.0_typescript@5.4.5/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DBepI5MH.mjs","\u0000@astro-page:src/pages/about/index@_@astro":"chunks/index_CjzaKlid.mjs","\u0000@astro-page:src/pages/links/index@_@astro":"chunks/index_C2Xh1abc.mjs","\u0000@astro-page:src/pages/posts/[page]@_@astro":"chunks/_page__DczWTU4e.mjs","\u0000@astro-page:src/pages/posts/[slug]@_@astro":"chunks/_slug__CceDSrtd.mjs","\u0000@astro-page:src/pages/roger/[id]@_@astro":"chunks/_id__B-QiHlGQ.mjs","\u0000@astro-page:src/pages/tag/index@_@astro":"chunks/index_DrZANRYF.mjs","\u0000@astro-page:src/pages/tag/[...tag]@_@astro":"chunks/_.._uW2YvNQA.mjs","\u0000@astro-page:src/pages/tagssg/roger@_@astro":"chunks/roger_DU4zbM4I.mjs","\u0000@astro-page:src/pages/tagssg/[tag]@_@astro":"chunks/_tag__BAJjPN7T.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_B1njAGwa.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-data-object.mdx?astroContentCollectionEntry=true":"chunks/astro-data-object_DuF8E5WS.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-notes.mdx?astroContentCollectionEntry=true":"chunks/astro-notes_CYhtLhVX.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/better-anchor-title.mdx?astroContentCollectionEntry=true":"chunks/better-anchor-title_Ch5OGnFF.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/copy-code.mdx?astroContentCollectionEntry=true":"chunks/copy-code_Cd-wFpzL.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/css-relative-colors.mdx?astroContentCollectionEntry=true":"chunks/css-relative-colors_CB7kEagn.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/demo.mdx?astroContentCollectionEntry=true":"chunks/demo_Dqq-rLLs.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-custom-filter.mdx?astroContentCollectionEntry=true":"chunks/jinja-custom-filter_D0m_5I_O.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-omit-last-comma.mdx?astroContentCollectionEntry=true":"chunks/jinja-omit-last-comma_DvHhXoBp.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-white-space.mdx?astroContentCollectionEntry=true":"chunks/jinja-white-space_CBb4x5iH.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/live-server.mdx?astroContentCollectionEntry=true":"chunks/live-server_DMo5-Aoc.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/powershell-snippets.mdx?astroContentCollectionEntry=true":"chunks/powershell-snippets_DunrXX7r.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/programming-rules.mdx?astroContentCollectionEntry=true":"chunks/programming-rules_BmQ4eWpl.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-server-file-access-error.mdx?astroContentCollectionEntry=true":"chunks/sql-server-file-access-error_BVUVfCjI.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-snippets.mdx?astroContentCollectionEntry=true":"chunks/sql-snippets_C99xhpIr.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/ssr-versus-ssg.mdx?astroContentCollectionEntry=true":"chunks/ssr-versus-ssg_DlOsSzLm.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-data-object.mdx?astroPropagatedAssets":"chunks/astro-data-object_C--1x0N9.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-notes.mdx?astroPropagatedAssets":"chunks/astro-notes_BCfuVWxm.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/better-anchor-title.mdx?astroPropagatedAssets":"chunks/better-anchor-title_CY42QY20.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/copy-code.mdx?astroPropagatedAssets":"chunks/copy-code_B4S_q92D.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/css-relative-colors.mdx?astroPropagatedAssets":"chunks/css-relative-colors_DoxSSVSr.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/demo.mdx?astroPropagatedAssets":"chunks/demo_CeeB_B6h.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-custom-filter.mdx?astroPropagatedAssets":"chunks/jinja-custom-filter_CX7Z2vyR.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-omit-last-comma.mdx?astroPropagatedAssets":"chunks/jinja-omit-last-comma_BNn95I47.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-white-space.mdx?astroPropagatedAssets":"chunks/jinja-white-space_Df04IpTv.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/live-server.mdx?astroPropagatedAssets":"chunks/live-server_CKs3W0bL.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/powershell-snippets.mdx?astroPropagatedAssets":"chunks/powershell-snippets_C9V3fBvE.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/programming-rules.mdx?astroPropagatedAssets":"chunks/programming-rules_CjTWAE1k.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-server-file-access-error.mdx?astroPropagatedAssets":"chunks/sql-server-file-access-error_K-Hi25pt.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-snippets.mdx?astroPropagatedAssets":"chunks/sql-snippets_DJtdzFi0.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/ssr-versus-ssg.mdx?astroPropagatedAssets":"chunks/ssr-versus-ssg_Dy6cXXXg.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-data-object.mdx":"chunks/astro-data-object_BuJtUWRX.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-notes.mdx":"chunks/astro-notes_BPxxYnLQ.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/better-anchor-title.mdx":"chunks/better-anchor-title_DLfEIyYB.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/copy-code.mdx":"chunks/copy-code_86zanwxo.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/css-relative-colors.mdx":"chunks/css-relative-colors_BDhjFHvk.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/demo.mdx":"chunks/demo_DRDYxAN1.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-custom-filter.mdx":"chunks/jinja-custom-filter_D09abu0a.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-omit-last-comma.mdx":"chunks/jinja-omit-last-comma_Dn0F06Zv.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-white-space.mdx":"chunks/jinja-white-space_wdnB9aBO.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/live-server.mdx":"chunks/live-server_Wtbb25xB.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/powershell-snippets.mdx":"chunks/powershell-snippets_DdbqiuBF.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/programming-rules.mdx":"chunks/programming-rules_Cyw5imMf.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-server-file-access-error.mdx":"chunks/sql-server-file-access-error_Cn893BJ2.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-snippets.mdx":"chunks/sql-snippets_CSucunBB.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/ssr-versus-ssg.mdx":"chunks/ssr-versus-ssg_CtB3KADQ.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/layouts/SingleBlogPost.astro":"chunks/SingleBlogPost_DoJJ_L40.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BHzYhFfK.js","/astro/hoisted.js?q=1":"_astro/hoisted.ByXv3Sle.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.YdRB7bfO.css","/favicon.svg","/js/main.js","/js/message.js","/pagefind/pagefind-entry.json","/pagefind/pagefind-highlight.js","/pagefind/pagefind-modular-ui.css","/pagefind/pagefind-modular-ui.js","/pagefind/pagefind-ui.css","/pagefind/pagefind-ui.js","/pagefind/pagefind.en_157f327e33.pf_meta","/pagefind/pagefind.en_1c69828953.pf_meta","/pagefind/pagefind.en_1d95a35b51.pf_meta","/pagefind/pagefind.en_325dc3f0e0.pf_meta","/pagefind/pagefind.en_4ef12b6b9c.pf_meta","/pagefind/pagefind.en_5a111db775.pf_meta","/pagefind/pagefind.en_5d4327c48f.pf_meta","/pagefind/pagefind.en_5d9c8bdf84.pf_meta","/pagefind/pagefind.en_5dc7894a85.pf_meta","/pagefind/pagefind.en_5efa18a3de.pf_meta","/pagefind/pagefind.en_6449dcc7a0.pf_meta","/pagefind/pagefind.en_663e6361a3.pf_meta","/pagefind/pagefind.en_679db15852.pf_meta","/pagefind/pagefind.en_7475e11d5a.pf_meta","/pagefind/pagefind.en_795d6a7722.pf_meta","/pagefind/pagefind.en_7a6c961c7d.pf_meta","/pagefind/pagefind.en_83427a5696.pf_meta","/pagefind/pagefind.en_8aceb54e0c.pf_meta","/pagefind/pagefind.en_8ee87ad92b.pf_meta","/pagefind/pagefind.en_98f74f81d1.pf_meta","/pagefind/pagefind.en_ada4fb649f.pf_meta","/pagefind/pagefind.en_ca5924b18b.pf_meta","/pagefind/pagefind.en_dc93631baf.pf_meta","/pagefind/pagefind.en_edff796e0d.pf_meta","/pagefind/pagefind.en_f93d248a67.pf_meta","/pagefind/pagefind.en_fdae0a69d1.pf_meta","/pagefind/pagefind.en_ff2b13c1d7.pf_meta","/pagefind/pagefind.js","/pagefind/wasm.en.pagefind","/pagefind/wasm.unknown.pagefind","/_astro/hoisted.BHzYhFfK.js","/_astro/hoisted.ByXv3Sle.js","/pagefind/index/en_3e8df15.pf_index","/pagefind/index/en_56ef5e4.pf_index","/pagefind/index/en_62406df.pf_index","/pagefind/index/en_7a2a7a5.pf_index","/pagefind/index/en_a7365d6.pf_index","/pagefind/index/en_a94c6cc.pf_index","/pagefind/index/en_b968c9d.pf_index","/pagefind/index/en_c23079d.pf_index","/pagefind/index/en_da71c66.pf_index","/pagefind/index/en_db8d14a.pf_index","/pagefind/index/en_e27660a.pf_index","/pagefind/index/en_ece5dbe.pf_index","/pagefind/index/en_fcddda3.pf_index","/pagefind/fragment/en_11379c1.pf_fragment","/pagefind/fragment/en_113b58f.pf_fragment","/pagefind/fragment/en_11b2b43.pf_fragment","/pagefind/fragment/en_11c3c64.pf_fragment","/pagefind/fragment/en_13c01bc.pf_fragment","/pagefind/fragment/en_151498d.pf_fragment","/pagefind/fragment/en_153f555.pf_fragment","/pagefind/fragment/en_16514a1.pf_fragment","/pagefind/fragment/en_16e5321.pf_fragment","/pagefind/fragment/en_1a75ab6.pf_fragment","/pagefind/fragment/en_1c9062f.pf_fragment","/pagefind/fragment/en_1cfc6e7.pf_fragment","/pagefind/fragment/en_1eedd5b.pf_fragment","/pagefind/fragment/en_1f28aba.pf_fragment","/pagefind/fragment/en_2429201.pf_fragment","/pagefind/fragment/en_24e2199.pf_fragment","/pagefind/fragment/en_25423f7.pf_fragment","/pagefind/fragment/en_27a52df.pf_fragment","/pagefind/fragment/en_2945d9c.pf_fragment","/pagefind/fragment/en_2955e1b.pf_fragment","/pagefind/fragment/en_2a48afe.pf_fragment","/pagefind/fragment/en_2a8d706.pf_fragment","/pagefind/fragment/en_2adef18.pf_fragment","/pagefind/fragment/en_2b195b2.pf_fragment","/pagefind/fragment/en_2bddd16.pf_fragment","/pagefind/fragment/en_2e9df7b.pf_fragment","/pagefind/fragment/en_2ea354e.pf_fragment","/pagefind/fragment/en_2f9df2b.pf_fragment","/pagefind/fragment/en_30926ce.pf_fragment","/pagefind/fragment/en_33dc2e8.pf_fragment","/pagefind/fragment/en_34f81f1.pf_fragment","/pagefind/fragment/en_35566aa.pf_fragment","/pagefind/fragment/en_362ff98.pf_fragment","/pagefind/fragment/en_39addb7.pf_fragment","/pagefind/fragment/en_3a13c23.pf_fragment","/pagefind/fragment/en_3b209ce.pf_fragment","/pagefind/fragment/en_3bcc2fa.pf_fragment","/pagefind/fragment/en_3cd1ab9.pf_fragment","/pagefind/fragment/en_3dcf399.pf_fragment","/pagefind/fragment/en_3e15c87.pf_fragment","/pagefind/fragment/en_3e7e1f3.pf_fragment","/pagefind/fragment/en_3ef8268.pf_fragment","/pagefind/fragment/en_3f5c572.pf_fragment","/pagefind/fragment/en_3fa71f4.pf_fragment","/pagefind/fragment/en_405c742.pf_fragment","/pagefind/fragment/en_41bc9ca.pf_fragment","/pagefind/fragment/en_41fae50.pf_fragment","/pagefind/fragment/en_4243d9e.pf_fragment","/pagefind/fragment/en_425442c.pf_fragment","/pagefind/fragment/en_428c1e1.pf_fragment","/pagefind/fragment/en_434fe11.pf_fragment","/pagefind/fragment/en_43b4ed6.pf_fragment","/pagefind/fragment/en_45659f6.pf_fragment","/pagefind/fragment/en_47b595a.pf_fragment","/pagefind/fragment/en_49daa23.pf_fragment","/pagefind/fragment/en_4a8d6cb.pf_fragment","/pagefind/fragment/en_4bd1acb.pf_fragment","/pagefind/fragment/en_4c3db0b.pf_fragment","/pagefind/fragment/en_4caaa8b.pf_fragment","/pagefind/fragment/en_4d1bc92.pf_fragment","/pagefind/fragment/en_4dcf54a.pf_fragment","/pagefind/fragment/en_4df219b.pf_fragment","/pagefind/fragment/en_4e32d47.pf_fragment","/pagefind/fragment/en_4f3bf6c.pf_fragment","/pagefind/fragment/en_4f99e2e.pf_fragment","/pagefind/fragment/en_501127f.pf_fragment","/pagefind/fragment/en_50b2bb2.pf_fragment","/pagefind/fragment/en_50c8d79.pf_fragment","/pagefind/fragment/en_517bcde.pf_fragment","/pagefind/fragment/en_524c65f.pf_fragment","/pagefind/fragment/en_529b416.pf_fragment","/pagefind/fragment/en_531ce46.pf_fragment","/pagefind/fragment/en_535017d.pf_fragment","/pagefind/fragment/en_5365d6a.pf_fragment","/pagefind/fragment/en_53d2256.pf_fragment","/pagefind/fragment/en_53ebf44.pf_fragment","/pagefind/fragment/en_5454ee8.pf_fragment","/pagefind/fragment/en_557453d.pf_fragment","/pagefind/fragment/en_55be7d3.pf_fragment","/pagefind/fragment/en_57abc41.pf_fragment","/pagefind/fragment/en_57ce8b1.pf_fragment","/pagefind/fragment/en_593d9dc.pf_fragment","/pagefind/fragment/en_5943174.pf_fragment","/pagefind/fragment/en_59a391a.pf_fragment","/pagefind/fragment/en_5bb36c1.pf_fragment","/pagefind/fragment/en_5c03483.pf_fragment","/pagefind/fragment/en_5d6a59f.pf_fragment","/pagefind/fragment/en_5f2c63c.pf_fragment","/pagefind/fragment/en_5f4cb33.pf_fragment","/pagefind/fragment/en_5f85591.pf_fragment","/pagefind/fragment/en_60aa407.pf_fragment","/pagefind/fragment/en_60f2b87.pf_fragment","/pagefind/fragment/en_61d580a.pf_fragment","/pagefind/fragment/en_624bc7a.pf_fragment","/pagefind/fragment/en_62aa6d9.pf_fragment","/pagefind/fragment/en_6329cf6.pf_fragment","/pagefind/fragment/en_63c2a77.pf_fragment","/pagefind/fragment/en_63e1ac4.pf_fragment","/pagefind/fragment/en_6413401.pf_fragment","/pagefind/fragment/en_6717938.pf_fragment","/pagefind/fragment/en_6756c45.pf_fragment","/pagefind/fragment/en_6b8ed7a.pf_fragment","/pagefind/fragment/en_6cf2835.pf_fragment","/pagefind/fragment/en_6e648e3.pf_fragment","/pagefind/fragment/en_6eb2ae6.pf_fragment","/pagefind/fragment/en_6f3ef3e.pf_fragment","/pagefind/fragment/en_70c636c.pf_fragment","/pagefind/fragment/en_714e3b9.pf_fragment","/pagefind/fragment/en_7238465.pf_fragment","/pagefind/fragment/en_7378e9f.pf_fragment","/pagefind/fragment/en_759e625.pf_fragment","/pagefind/fragment/en_75d66fc.pf_fragment","/pagefind/fragment/en_76f83f1.pf_fragment","/pagefind/fragment/en_777af2a.pf_fragment","/pagefind/fragment/en_78cd447.pf_fragment","/pagefind/fragment/en_7a8a645.pf_fragment","/pagefind/fragment/en_7b7cf49.pf_fragment","/pagefind/fragment/en_7bdf872.pf_fragment","/pagefind/fragment/en_7e4b91a.pf_fragment","/pagefind/fragment/en_7e67458.pf_fragment","/pagefind/fragment/en_81f47a6.pf_fragment","/pagefind/fragment/en_827b396.pf_fragment","/pagefind/fragment/en_837bb67.pf_fragment","/pagefind/fragment/en_83a6de7.pf_fragment","/pagefind/fragment/en_83f3995.pf_fragment","/pagefind/fragment/en_83f4fe2.pf_fragment","/pagefind/fragment/en_858ad92.pf_fragment","/pagefind/fragment/en_87116ad.pf_fragment","/pagefind/fragment/en_876ca72.pf_fragment","/pagefind/fragment/en_87938c7.pf_fragment","/pagefind/fragment/en_8827f61.pf_fragment","/pagefind/fragment/en_89e47b4.pf_fragment","/pagefind/fragment/en_8be4265.pf_fragment","/pagefind/fragment/en_8c5a898.pf_fragment","/pagefind/fragment/en_8ca74a5.pf_fragment","/pagefind/fragment/en_8dd8468.pf_fragment","/pagefind/fragment/en_8e21ae3.pf_fragment","/pagefind/fragment/en_8efd53b.pf_fragment","/pagefind/fragment/en_8fa8f02.pf_fragment","/pagefind/fragment/en_903af99.pf_fragment","/pagefind/fragment/en_91cca6b.pf_fragment","/pagefind/fragment/en_923931b.pf_fragment","/pagefind/fragment/en_92fdd38.pf_fragment","/pagefind/fragment/en_9431def.pf_fragment","/pagefind/fragment/en_94a7e33.pf_fragment","/pagefind/fragment/en_957a883.pf_fragment","/pagefind/fragment/en_959f9dd.pf_fragment","/pagefind/fragment/en_95c1f8e.pf_fragment","/pagefind/fragment/en_965b9a3.pf_fragment","/pagefind/fragment/en_96f8836.pf_fragment","/pagefind/fragment/en_9727a31.pf_fragment","/pagefind/fragment/en_97a44d9.pf_fragment","/pagefind/fragment/en_97b4872.pf_fragment","/pagefind/fragment/en_97bd54b.pf_fragment","/pagefind/fragment/en_9899649.pf_fragment","/pagefind/fragment/en_98ae989.pf_fragment","/pagefind/fragment/en_9b28579.pf_fragment","/pagefind/fragment/en_9ceea4a.pf_fragment","/pagefind/fragment/en_9cef63b.pf_fragment","/pagefind/fragment/en_9d362ff.pf_fragment","/pagefind/fragment/en_9d4af46.pf_fragment","/pagefind/fragment/en_9d7f1bf.pf_fragment","/pagefind/fragment/en_9d886b1.pf_fragment","/pagefind/fragment/en_9e43f19.pf_fragment","/pagefind/fragment/en_9eb05f8.pf_fragment","/pagefind/fragment/en_9f1d2ac.pf_fragment","/pagefind/fragment/en_9f9eed9.pf_fragment","/pagefind/fragment/en_9fa9528.pf_fragment","/pagefind/fragment/en_a07f771.pf_fragment","/pagefind/fragment/en_a68fc2f.pf_fragment","/pagefind/fragment/en_a767ab3.pf_fragment","/pagefind/fragment/en_a92e961.pf_fragment","/pagefind/fragment/en_a95ec7d.pf_fragment","/pagefind/fragment/en_a99ee71.pf_fragment","/pagefind/fragment/en_aabceae.pf_fragment","/pagefind/fragment/en_ab40205.pf_fragment","/pagefind/fragment/en_abef5df.pf_fragment","/pagefind/fragment/en_ac8e459.pf_fragment","/pagefind/fragment/en_ad3b7af.pf_fragment","/pagefind/fragment/en_af238dc.pf_fragment","/pagefind/fragment/en_afc0a81.pf_fragment","/pagefind/fragment/en_afc2cab.pf_fragment","/pagefind/fragment/en_b0f749f.pf_fragment","/pagefind/fragment/en_b0fc888.pf_fragment","/pagefind/fragment/en_b24a11c.pf_fragment","/pagefind/fragment/en_b27166d.pf_fragment","/pagefind/fragment/en_b2efb17.pf_fragment","/pagefind/fragment/en_b310d8f.pf_fragment","/pagefind/fragment/en_b57bb5a.pf_fragment","/pagefind/fragment/en_b62bad3.pf_fragment","/pagefind/fragment/en_b6f74e2.pf_fragment","/pagefind/fragment/en_b79d261.pf_fragment","/pagefind/fragment/en_b7e293c.pf_fragment","/pagefind/fragment/en_b81eaf5.pf_fragment","/pagefind/fragment/en_b86dca7.pf_fragment","/pagefind/fragment/en_b8835c1.pf_fragment","/pagefind/fragment/en_b93443d.pf_fragment","/pagefind/fragment/en_b958941.pf_fragment","/pagefind/fragment/en_ba61b79.pf_fragment","/pagefind/fragment/en_bbbdbe1.pf_fragment","/pagefind/fragment/en_bc211bf.pf_fragment","/pagefind/fragment/en_bdab258.pf_fragment","/pagefind/fragment/en_bee792c.pf_fragment","/pagefind/fragment/en_bf52501.pf_fragment","/pagefind/fragment/en_c019b34.pf_fragment","/pagefind/fragment/en_c0c64ea.pf_fragment","/pagefind/fragment/en_c18b2cb.pf_fragment","/pagefind/fragment/en_c280dd2.pf_fragment","/pagefind/fragment/en_c2b27e1.pf_fragment","/pagefind/fragment/en_c3a242f.pf_fragment","/pagefind/fragment/en_c3e2aa1.pf_fragment","/pagefind/fragment/en_c511961.pf_fragment","/pagefind/fragment/en_c828a3c.pf_fragment","/pagefind/fragment/en_cbb6c12.pf_fragment","/pagefind/fragment/en_cc96a62.pf_fragment","/pagefind/fragment/en_ccd3080.pf_fragment","/pagefind/fragment/en_cce640a.pf_fragment","/pagefind/fragment/en_ccedf32.pf_fragment","/pagefind/fragment/en_cd31eb4.pf_fragment","/pagefind/fragment/en_cd88e46.pf_fragment","/pagefind/fragment/en_ce6ad5a.pf_fragment","/pagefind/fragment/en_cf5a35c.pf_fragment","/pagefind/fragment/en_d047d83.pf_fragment","/pagefind/fragment/en_d0cdba2.pf_fragment","/pagefind/fragment/en_d139a17.pf_fragment","/pagefind/fragment/en_d2a45cf.pf_fragment","/pagefind/fragment/en_d2d2426.pf_fragment","/pagefind/fragment/en_d344edf.pf_fragment","/pagefind/fragment/en_d5773f3.pf_fragment","/pagefind/fragment/en_d588a45.pf_fragment","/pagefind/fragment/en_d698cd2.pf_fragment","/pagefind/fragment/en_d6b7c05.pf_fragment","/pagefind/fragment/en_d6e8b42.pf_fragment","/pagefind/fragment/en_d6f9ada.pf_fragment","/pagefind/fragment/en_d741534.pf_fragment","/pagefind/fragment/en_d77343c.pf_fragment","/pagefind/fragment/en_d7c8fd2.pf_fragment","/pagefind/fragment/en_d96921b.pf_fragment","/pagefind/fragment/en_da7def5.pf_fragment","/pagefind/fragment/en_dac4667.pf_fragment","/pagefind/fragment/en_dc3b258.pf_fragment","/pagefind/fragment/en_dd85b83.pf_fragment","/pagefind/fragment/en_de14468.pf_fragment","/pagefind/fragment/en_de1fd7b.pf_fragment","/pagefind/fragment/en_de2b806.pf_fragment","/pagefind/fragment/en_df48ceb.pf_fragment","/pagefind/fragment/en_df4c6b0.pf_fragment","/pagefind/fragment/en_df73e73.pf_fragment","/pagefind/fragment/en_df9c6fb.pf_fragment","/pagefind/fragment/en_dfcf2ff.pf_fragment","/pagefind/fragment/en_dfec8f4.pf_fragment","/pagefind/fragment/en_e075457.pf_fragment","/pagefind/fragment/en_e17b183.pf_fragment","/pagefind/fragment/en_e1c32ea.pf_fragment","/pagefind/fragment/en_e3bf67a.pf_fragment","/pagefind/fragment/en_e4d6177.pf_fragment","/pagefind/fragment/en_e5214ab.pf_fragment","/pagefind/fragment/en_e5858df.pf_fragment","/pagefind/fragment/en_e67a8f6.pf_fragment","/pagefind/fragment/en_e71919a.pf_fragment","/pagefind/fragment/en_e872a4a.pf_fragment","/pagefind/fragment/en_e94c8ad.pf_fragment","/pagefind/fragment/en_e9c395d.pf_fragment","/pagefind/fragment/en_e9cdf9d.pf_fragment","/pagefind/fragment/en_ea571c9.pf_fragment","/pagefind/fragment/en_ec137cc.pf_fragment","/pagefind/fragment/en_edf7df1.pf_fragment","/pagefind/fragment/en_ee6a315.pf_fragment","/pagefind/fragment/en_eeaeaa9.pf_fragment","/pagefind/fragment/en_f2628b2.pf_fragment","/pagefind/fragment/en_f2a372c.pf_fragment","/pagefind/fragment/en_f2a7161.pf_fragment","/pagefind/fragment/en_f5f1112.pf_fragment","/pagefind/fragment/en_f61a124.pf_fragment","/pagefind/fragment/en_f94ff9d.pf_fragment","/pagefind/fragment/en_fa3adb3.pf_fragment","/pagefind/fragment/en_fb48b16.pf_fragment","/pagefind/fragment/en_fbc2227.pf_fragment","/pagefind/fragment/en_fda7e97.pf_fragment","/pagefind/fragment/en_fe5aab9.pf_fragment","/pagefind/fragment/en_fe6e71b.pf_fragment","/pagefind/fragment/en_ff99a29.pf_fragment","/about/index.html","/links/index.html","/tag/index.html","/tagssg/roger/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
