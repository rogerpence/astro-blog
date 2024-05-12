import { a6 as bold, a7 as red, a8 as yellow, a9 as dim, aa as blue } from './chunks/astro_BkCAkxv4.mjs';

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

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":true,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/index.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/tag-objects","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/tag-objects","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/tag-objects\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"tag-objects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/tag-objects.js","pathname":"/api/tag-objects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/tags.json","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/tags.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/tags\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"tags.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/tags.json.js","pathname":"/api/tags.json","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"links/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/links","isIndex":true,"type":"page","pattern":"^\\/links\\/?$","segments":[[{"content":"links","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/links/index.astro","pathname":"/links","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"tag/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tag","isIndex":true,"type":"page","pattern":"^\\/tag\\/?$","segments":[[{"content":"tag","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tag/index.astro","pathname":"/tag","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"tagssg/roger/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tagssg/roger","isIndex":false,"type":"page","pattern":"^\\/tagssg\\/roger\\/?$","segments":[[{"content":"tagssg","dynamic":false,"spread":false}],[{"content":"roger","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tagssg/roger.astro","pathname":"/tagssg/roger","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.8.2_@types+node@20.12.3_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ByXv3Sle.js"}],"styles":[{"type":"external","src":"/_astro/index.DgrbRY6m.css"}],"routeData":{"route":"/tag/[...tag]","isIndex":false,"type":"page","pattern":"^\\/tag(?:\\/(.*?))?\\/?$","segments":[[{"content":"tag","dynamic":false,"spread":false}],[{"content":"...tag","dynamic":true,"spread":true}]],"params":["...tag"],"component":"src/pages/tag/[...tag].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":false,"componentMetadata":[["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/posts/[page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/posts/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/tag/[...tag].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/tag/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/tagssg/[tag].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/about/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/links/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/layouts/SingleBlogPost.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-data-object.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-data-object.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-notes.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-notes.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/better-anchor-title.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/better-anchor-title.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/copy-code.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/copy-code.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/css-relative-colors.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/css-relative-colors.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/demo.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/demo.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/javascript-snippets.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/javascript-snippets.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-custom-filter.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-custom-filter.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-omit-last-comma.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-omit-last-comma.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-white-space.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-white-space.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/live-server.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/live-server.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/pagefind-wrangling.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/pagefind-wrangling.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/powershell-snippets.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/powershell-snippets.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/programming-rules.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/programming-rules.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-server-file-access-error.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-server-file-access-error.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-snippets.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-snippets.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/ssr-versus-ssg.mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/ssr-versus-ssg.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tag/[...tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tag/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tagssg/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/tagssg/roger.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tagssg/roger@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-manifest":"manifest_C8Qza7C3.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.8.2_@types+node@20.12.3_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_D282ZqMA.mjs","\u0000@astro-page:src/pages/about/index@_@astro":"chunks/index_BOugvLnE.mjs","\u0000@astro-page:src/pages/api/tag-objects@_@js":"chunks/tag-objects_B96WA1hv.mjs","\u0000@astro-page:src/pages/api/tags.json@_@js":"chunks/tags_Drsoe6-G.mjs","\u0000@astro-page:src/pages/links/index@_@astro":"chunks/index_BLW-ptv1.mjs","\u0000@astro-page:src/pages/posts/[page]@_@astro":"chunks/_page__CQlqwJY-.mjs","\u0000@astro-page:src/pages/posts/[slug]@_@astro":"chunks/_slug__BpARdSGr.mjs","\u0000@astro-page:src/pages/tag/index@_@astro":"chunks/index_DT90g6sV.mjs","\u0000@astro-page:src/pages/tag/[...tag]@_@astro":"chunks/_.._DyJbk8XD.mjs","\u0000@astro-page:src/pages/tagssg/roger@_@astro":"chunks/roger_DAbqsISD.mjs","\u0000@astro-page:src/pages/tagssg/[tag]@_@astro":"chunks/_tag__BUum17nJ.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BwtPaWiH.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-data-object.mdx?astroContentCollectionEntry=true":"chunks/astro-data-object_DuF8E5WS.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-notes.mdx?astroContentCollectionEntry=true":"chunks/astro-notes_CYhtLhVX.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/better-anchor-title.mdx?astroContentCollectionEntry=true":"chunks/better-anchor-title_B6-cGyy3.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/copy-code.mdx?astroContentCollectionEntry=true":"chunks/copy-code_Cd-wFpzL.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/css-relative-colors.mdx?astroContentCollectionEntry=true":"chunks/css-relative-colors_CB7kEagn.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/demo.mdx?astroContentCollectionEntry=true":"chunks/demo_Dqq-rLLs.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/javascript-snippets.mdx?astroContentCollectionEntry=true":"chunks/javascript-snippets_BHRH32Jx.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-custom-filter.mdx?astroContentCollectionEntry=true":"chunks/jinja-custom-filter_D0m_5I_O.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-omit-last-comma.mdx?astroContentCollectionEntry=true":"chunks/jinja-omit-last-comma_DvHhXoBp.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-white-space.mdx?astroContentCollectionEntry=true":"chunks/jinja-white-space_CBb4x5iH.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/live-server.mdx?astroContentCollectionEntry=true":"chunks/live-server_DMo5-Aoc.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/pagefind-wrangling.mdx?astroContentCollectionEntry=true":"chunks/pagefind-wrangling_DdPCWd3b.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/powershell-snippets.mdx?astroContentCollectionEntry=true":"chunks/powershell-snippets_D7QeE0mb.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/programming-rules.mdx?astroContentCollectionEntry=true":"chunks/programming-rules_BmQ4eWpl.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-server-file-access-error.mdx?astroContentCollectionEntry=true":"chunks/sql-server-file-access-error_BVUVfCjI.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-snippets.mdx?astroContentCollectionEntry=true":"chunks/sql-snippets_DQq8gWa7.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/ssr-versus-ssg.mdx?astroContentCollectionEntry=true":"chunks/ssr-versus-ssg_DlOsSzLm.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-data-object.mdx?astroPropagatedAssets":"chunks/astro-data-object_Dk4hqp3I.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-notes.mdx?astroPropagatedAssets":"chunks/astro-notes_-O5q_olu.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/better-anchor-title.mdx?astroPropagatedAssets":"chunks/better-anchor-title_-jRLkjql.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/copy-code.mdx?astroPropagatedAssets":"chunks/copy-code_BN6yu5OG.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/css-relative-colors.mdx?astroPropagatedAssets":"chunks/css-relative-colors_BGA8nal3.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/demo.mdx?astroPropagatedAssets":"chunks/demo_m4kg_Rlz.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/javascript-snippets.mdx?astroPropagatedAssets":"chunks/javascript-snippets_Cpmo0N3Y.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-custom-filter.mdx?astroPropagatedAssets":"chunks/jinja-custom-filter_Dvrwz1OQ.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-omit-last-comma.mdx?astroPropagatedAssets":"chunks/jinja-omit-last-comma_DFRvoI0R.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-white-space.mdx?astroPropagatedAssets":"chunks/jinja-white-space_Drnm3ZVI.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/live-server.mdx?astroPropagatedAssets":"chunks/live-server_DRDrtnVB.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/pagefind-wrangling.mdx?astroPropagatedAssets":"chunks/pagefind-wrangling_DJ6gGakr.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/powershell-snippets.mdx?astroPropagatedAssets":"chunks/powershell-snippets_DA-8m2qH.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/programming-rules.mdx?astroPropagatedAssets":"chunks/programming-rules_B-3Sjg33.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-server-file-access-error.mdx?astroPropagatedAssets":"chunks/sql-server-file-access-error_yoxv6Q79.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-snippets.mdx?astroPropagatedAssets":"chunks/sql-snippets_Cmb1FZj0.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/ssr-versus-ssg.mdx?astroPropagatedAssets":"chunks/ssr-versus-ssg_DIQzB3ad.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-data-object.mdx":"chunks/astro-data-object_CT67d894.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-notes.mdx":"chunks/astro-notes_Ckf1WqUa.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/better-anchor-title.mdx":"chunks/better-anchor-title_CHoAe4NO.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/copy-code.mdx":"chunks/copy-code_BOrNukk3.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/css-relative-colors.mdx":"chunks/css-relative-colors_BqvM_iNM.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/demo.mdx":"chunks/demo_CodavKJm.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/javascript-snippets.mdx":"chunks/javascript-snippets_D9z7RxB4.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-custom-filter.mdx":"chunks/jinja-custom-filter_l2m4EObo.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-omit-last-comma.mdx":"chunks/jinja-omit-last-comma_ChRNc6eY.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-white-space.mdx":"chunks/jinja-white-space_D0jK8TuA.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/live-server.mdx":"chunks/live-server_B2JpIp8t.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/pagefind-wrangling.mdx":"chunks/pagefind-wrangling_0188itAs.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/powershell-snippets.mdx":"chunks/powershell-snippets_DsTGY67z.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/programming-rules.mdx":"chunks/programming-rules_B6SnWBvx.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-server-file-access-error.mdx":"chunks/sql-server-file-access-error_BAjSjGPL.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-snippets.mdx":"chunks/sql-snippets_Dsb0hC1G.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/ssr-versus-ssg.mdx":"chunks/ssr-versus-ssg_DZNYpcl7.mjs","C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/layouts/SingleBlogPost.astro":"chunks/SingleBlogPost_BiFYxRlC.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BHzYhFfK.js","/astro/hoisted.js?q=1":"_astro/hoisted.ByXv3Sle.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.DgrbRY6m.css","/_astro/hoisted.BHzYhFfK.js","/_astro/hoisted.ByXv3Sle.js","/pagefind/pagefind-entry.json","/pagefind/pagefind-highlight.js","/pagefind/pagefind-modular-ui.css","/pagefind/pagefind-modular-ui.js","/pagefind/pagefind-ui.css","/pagefind/pagefind-ui.js","/pagefind/pagefind.en_4a2635a707.pf_meta","/pagefind/pagefind.js","/pagefind/wasm.en.pagefind","/pagefind/wasm.unknown.pagefind","/pagefind/fragment/en_1643dd1.pf_fragment","/pagefind/fragment/en_24a3998.pf_fragment","/pagefind/fragment/en_3c2659a.pf_fragment","/pagefind/fragment/en_4cf9cab.pf_fragment","/pagefind/fragment/en_5070b48.pf_fragment","/pagefind/fragment/en_509323a.pf_fragment","/pagefind/fragment/en_53aff5f.pf_fragment","/pagefind/fragment/en_88f4f1a.pf_fragment","/pagefind/fragment/en_95e4785.pf_fragment","/pagefind/fragment/en_96e7405.pf_fragment","/pagefind/fragment/en_a1f8c4d.pf_fragment","/pagefind/fragment/en_ad2ad0b.pf_fragment","/pagefind/fragment/en_afe89ed.pf_fragment","/pagefind/fragment/en_b824fbe.pf_fragment","/pagefind/fragment/en_bf1ca32.pf_fragment","/pagefind/fragment/en_f2d9ddc.pf_fragment","/pagefind/fragment/en_feed30a.pf_fragment","/pagefind/index/en_8769597.pf_index","/about/index.html","/api/tag-objects","/api/tags.json","/links/index.html","/tag/index.html","/tagssg/roger/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
