import { ab as Fragment, ac as __astro_tag_component__, a5 as createVNode } from './astro_BkCAkxv4.mjs';
import { $ as $$Image } from './pages/generic_DBSQglNL.mjs';

const MDXLayout = async function ({children}) {
  const Layout = (await import('./SingleBlogPost_BiFYxRlC.mjs')).default;
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "$layouts/SingleBlogPost.astro",
  "title": "By-God-gotta-be-true programming rules",
  "description": "Using an appsettings.json file with a C# console app",
  "tags": ["cs"],
  "date_published": "2022-06-22T00:00:00.000Z",
  "date_added": "2022-06-22T00:00:00.000Z",
  "date_updated": "2022-06-22T00:00:00.000Z",
  "pinned": false
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    li: "li",
    ul: "ul",
    ...props.components
  };
  return createVNode("div", {
    class: "spaced-bullet-list",
    children: createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Keep it simple and keep it concise."
      }), "\n", createVNode(_components.li, {
        children: "Keep programming comments to a bare minimum. Most comments simply identify code that should have been refactored into methods with meaningful names."
      }), "\n", createVNode(_components.li, {
        children: "Treat all comments (even your own) as if they’d been written by a serial liar."
      }), "\n", createVNode(_components.li, {
        children: "It’s OK to have a function that is only called once. Functions don’t just add reuse, they add clarity."
      }), "\n", createVNode(_components.li, {
        children: "At least 75% of the time (and probably more like 90%) when you write a comment you should be writing a function."
      }), "\n", createVNode(_components.li, {
        children: "Select names (variables, classes, methods, etc) with as much care as you would a heart transplant doctor."
      }), "\n", createVNode(_components.li, {
        children: "Keep your programming languages current and use their new features (JavaScript ES6 array methods, for example)"
      }), "\n", createVNode(_components.li, {
        children: "If it’s not in source control, you’re just dabbling."
      }), "\n", createVNode(_components.li, {
        children: "For every new feature/bug fix, first make a branch. Do not touch working code."
      }), "\n", createVNode(_components.li, {
        children: "Don’t comment out code—remove it. If you argue that you can’t do that because you’ll lose that code, you aren’t using source control!"
      }), "\n", createVNode(_components.li, {
        children: "Don’t tolerate dead code. If isn’t being used, remove it. See #10."
      }), "\n", createVNode(_components.li, {
        children: "Inconsistency is consistently a sign of a poor program."
      }), "\n", createVNode(_components.li, {
        children: "Know what every line of code, and every element in that line, is doing (in other words, don’t blindly cut and paste!)"
      }), "\n", createVNode(_components.li, {
        children: "Test your app under less-than-favorable conditions. Browser dev tools have network and CPU throttling tools built-in. Use ‘em!"
      }), "\n", createVNode(_components.li, {
        children: "If it works and you don’t know why, when it breaks you won’t know why."
      }), "\n", createVNode(_components.li, {
        children: "Rarely should a method have more lines in it than you have fingers and toes."
      }), "\n", createVNode(_components.li, {
        children: "Global variables are a universal programming evil. Don’t spread programming evilness."
      }), "\n", createVNode(_components.li, {
        children: "The cost of decomposition should never be higher than the cost of repetition."
      }), "\n", createVNode(_components.li, {
        children: "You can never be 100% sure it works with tests and test data. But you can be 100% sure it won’t work 100% of the time without tests and test data."
      }), "\n", createVNode(_components.li, {
        children: "When a customer tells you that they don’t have a staging/test environment, remind ‘em that they do. What they don’t have is a production environment."
      }), "\n", createVNode(_components.li, {
        children: "Use indention to give your programs a clear and obvious structure."
      }), "\n", createVNode(_components.li, {
        children: "Don’t write dense code. Let white space, both horizontal and vertical, help tell the story of your code."
      }), "\n", createVNode(_components.li, {
        children: "A method is doing too much if it needs more than five arguments (and even three is pushing your luck!)."
      }), "\n", createVNode(_components.li, {
        children: "Strive for immutable structures and pure functions. (Which is the 21st century of saying keep coupling low and cohesion high)."
      }), "\n", createVNode(_components.li, {
        children: "If a method name includes the word “and” that method is doing too much (or named very poorly)."
      }), "\n", createVNode(_components.li, {
        children: "Don’t ever sacrifice clarity for brevity."
      }), "\n", createVNode(_components.li, {
        children: "Correctness, clarity, and simplicity are, in that order, the three most important things."
      }), "\n", createVNode(_components.li, {
        children: "Avoid hard-coded numeric digits and strings in your code! Use constants to give “magic” numbers/strings meaning."
      }), "\n", createVNode(_components.li, {
        children: "Don’t concatenate long strings—use string interpolation or join array elements (anything but long concatenation!)."
      }), "\n", createVNode(_components.li, {
        children: "Leave old code alone unless it produces incorrect results. When it does, fix that issue as best as you can and then get out. Rewriting bad code just to fix a bug has a greater chance of failing than just putting on your hip waders and fixing the bug."
      }), "\n", createVNode(_components.li, {
        children: "If you need post-it notes or cheat-sheets to build and deploy, you’re doing it wrong! Make your builds and deployments command-line driven. Better yet, make your deployments event-driven with a CI product."
      }), "\n", createVNode(_components.li, {
        children: "It’s not enough for your program to produce correct output, it should also produce a readable, rational log. You can’t troubleshoot if you don’t know what happened. Build logging into your application."
      }), "\n", createVNode(_components.li, {
        children: "Build metrics into your log output. When you users say, “It’s running slower” you need a reliable way to know if it is really running slower or if your users are just being users. Record performance benchmarks when you deploy the app so you can refer to them later."
      }), "\n", createVNode(_components.li, {
        children: ["It’s usually good enough to know there is ", createVNode(_components.em, {
          children: "a"
        }), " way rather than knowing ", createVNode(_components.em, {
          children: "the"
        }), " way. ", createVNode(_components.em, {
          children: "“Programming isn’t about what you know; it’s about what you can figure out.”"
        }), " — Chris Pine"]
      }), "\n", createVNode(_components.li, {
        children: ["Beware external service dependencies. Cloud services break but your service shouldn’t break. Design your critical systems with built-in failovers to keep ", createVNode(_components.em, {
          children: "your"
        }), " service up."]
      }), "\n", createVNode(_components.li, {
        children: "Don’t assume someone else’s programming rules will work for you. Read and listen to what a lot of programmers and take the best from each that works for you."
      }), "\n", createVNode(_components.li, {
        children: "Carefully consider the general challenge before you focus on the specific challenge. Solve the general parts of the challenge with components to reuse on the next challenge."
      }), "\n", createVNode(_components.li, {
        children: "A correctly (for now) running program doesn’t prove the absence of bugs."
      }), "\n", createVNode(_components.li, {
        children: "It is astounding how quickly new code acquires “legacy” status. Document all workflows, assumptions, and goofy stuff (you know the stuff I mean!) so you don’t have to start from ground zero every stinkin’ time you need to make a change or a fix."
      }), "\n", createVNode(_components.li, {
        children: ["Before you refactor ", createVNode(_components.em, {
          children: "any"
        }), " code, put tests into place to ensure you understand the existing code and to test what you replace it with."]
      }), "\n", createVNode(_components.li, {
        children: ["Question everything. I’m guilty of gratuitously spouting the ", createVNode(_components.a, {
          href: "https://en.wikipedia.org/wiki/SOLID",
          children: "SOLID"
        }), " principles a time or two. But then, along comes David Bryant Copeland with his book ", createVNode(_components.a, {
          href: "https://solid-is-not-solid.com/",
          children: "Solid Is Not Solid"
        }), " and completely clears the SOLID deck. OMG. You need to a) read about the SOLID principles and b) read Dave’s book. Agree or disagree, the book is a great lesson in how you should question everything anyone tells you."]
      }), "\n", createVNode(_components.li, {
        children: ["Code that you quickly slap together and intend to go back later and clean up, ", createVNode(_components.em, {
          children: "never"
        }), " gets cleaned up. Treat your code like you do the restroom in someone else’s house. Leave it nicer than you found it."]
      }), "\n", createVNode(_components.li, {
        children: "Beware committees of teams making big decisions. Decisions based on technical merit usually de-evolve into decisions based on politics—which is never a good thing. Grady Booch says it this way: “When trying to form a common architecture among three or more groups, the path to a solution is more often the negotiation of political power.”"
      }), "\n", createVNode(_components.li, {
        children: "Always strive for less code."
      }), "\n", createVNode(_components.li, {
        children: "The command line is the supercharger for modern software development. Embrace it!"
      }), "\n", createVNode(_components.li, {
        children: ["Don’t try to make a single language do everything. Pick languages based on what they do best and try to stay in their lanes. I recently built a C# UI with WPF that puts a good Windows UI over a command-line driven Python app. (And with the upcoming ", createVNode(_components.a, {
          href: "https://docs.microsoft.com/en-us/dotnet/maui/what-is-maui",
          children: ".NET Maui"
        }), ", a similar front-end will be cross platform!)"]
      }), "\n"]
    })
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}
const url = "src/content/posts/programming-rules.mdx";
const file = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/programming-rules.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/programming-rules.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
