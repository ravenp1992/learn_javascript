# Modules

### What is a module?

A module is just a file. One script is one module. As simple as that.

Modules can load each other and use special directives _export_ and _import_\
to interchange functionality call functions of one module from another one:

- **export** keyword labels variables and functions that should be accessible\
  from outside the current module.
- **import** allows the import of functionality from other modules.

For instance, if we have a file sayHi.js exporting a function:

```javascript
export function sayHi(user) {
  console.log(`Hello, ${user}!`);
}
```

...Then another file may import and use it:

```javascript
import { sayHi } from "./sayHi.js";

console.log(sayHi); // function
sayHi("Raven"); // Hello, Raven
```

The **import** directive loads the module by path ./sayHi.js relative to the\
current file, and assigns exported function sayHi to the corresponding variable.

Let's run the example in-browser.

As modules support special keywords and features, we must tell the browser that\
a script should be treated as a module, by using the attribute \<script type="module"\>.

See the example in browser folder:

The browser automatically fetches and evaluates the imported module (and its imports if needed),\
and then runs the script.

> Modules work only via HTTP(s), not locally
> If you try to open a web-page locally, via file:// protocol, you'll find that **import/export**
> directives don't work. Use a local web-server, such as static-server or use the
> "live server" capability of your editor.

### Core module features

What's different in modules, compared to "regular" scripts?

There are core features, valid both for browser and server-side JavaScript

#### Always "use strict"

Modules always work in strict mode. E.g. assigning to an undeclared variable\
will give an error.

```html
<script type="module">
  a = 5; // error
</script>
```

### Module-level scope

Each module has its own top-level scope. In other words, top-level variables and\
functions from a module are not seen in other scripts.

In the example below, two scripts are imported, and hello.js tries to use _user_ \
variable declared in _user.js_. It fails, because it's separate module.

```html
<!-- body -->
<script type="module" src="user.js"></script>
<script type="module" src="hello.js"></script>
```

```javascript
let user = "Raven";
```

```javascript
console.log(user);
```

Moduels should export what they want to be accessible from outside and import\
what they need.

- user.js should export the user variable.
- hello.js should import it from user.js module.

In other words, with modules we use import/export instead of relying on global\
variables.

This is the correct variant:

```html
<!-- body -->
<script type="module" src="user.js"></script>
<script type="module" src="hello.js"></script>
```

```javascript
export let user = "Raven";
```

```javascript
import { user } from "./user.js";
console.log(user);
```

In the browser, if we talk about HTML pages, independent top-level scope also\
exists for each \<script type="module"\>.

Here are two scripts on the same page, both type="module". They don't see each\
other's top-level variables:

```javascript
export let user = "Raven";
```

```javascript
import { user } from "./user.js";
console.log(user);
```

> Please note:
> In the browser, we can make a variable window-level global by explicitly assigning\
> it to a window property, e.g. window.user = "raven".
> Then all scripts will see it, both with type="module" and without it.
> That said, making such global variables is frowned upon. Please try to avoid them.

### A module code is evaluated only the first time when imported

If the same module is imported into multiple other modules, its code is executed\
only once, upon the first import. Then its exports are given to all further importers.

The one-time evaluate has important consequences, that we should be aware of.

Let's seea couple of examples.

First, if executing a module code brings side-effects, like showing a message,\
them importing it multiple times will triger if only once - the first time:

```javascript
// alert.js

alert("Module is evaluated!");

// Import the same module from different files

// 1.js
import `./alert.js` // Module is evaluated

// 2.js
import `./alert.js` // shows nothing
```

The second import shows nothing, because the module has already been evaluated.

There's a rule: top-level module code should be used for initialization, creation\
of module-specific internal data structrues. If we need to make something callable\
multiple times - we should export it as a function, like we idd with sayHi above.

Now, let's consider a deeper example.

Let's say, a module exports an object:

```javascript
export let admin = {
  name: "John",
};
```

If this module is imported from multiple files, the module is only evaluated the\
firs ttime, admin object is created, and then passed to all further importers.

All importers get exactly the one and only admin object:

```javascript
// 1.js
import { admin } from "./admin.js";
admin.name = "Pete";

// 2.js
import { admin } from "./admin.js";
console.log(admin.name); // Pete

// Both 1.js and 2.js reference the same admin object
// Changes made in 1.js are visible in 2.js
```

#### import.meta

The object import.meta contains the information about the current module.

Its content depends on the environment. In the browser, it contains the URL of\
the script, or a current webpage URL if inside HTML:

```html
<script type="module">
  console.log(import.meta.url); // script URL
</script>
```

#### In a module, "this" is undefined

That's kind of a minor feature, but for completeness we should mention it.

In a module, top-level this is undefined.

Compare it to non-module scripts, where this is a global object:

```html
<script>
  console.log(this); // window
</script>
<script type="module">
  console.log(this); // undefined
</script>
```

## Export and Import

Export and import directives have several syntax variants.

### Export before declarations

We can label any declaration ex exported by placing export before it, be it a\
variable, function or a class.

For instance, here all exports are valid:

```javascript
// export an array
export let months = ["Jan", "Feb", "Mar", "Apr", "May"];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}
```

### Export apart from declartions

Also, we can put export separately.

Here we first declare, and then export:

```javascript
function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

function sayBye(user) {
  console.log(`Bye, ${user}!`);
}

export { sayHi, sayBye };
```

...Or, technically we could put above functions as well.

### Import \*

Usually, we put a list of what to import in curly braces import {...}, like this:

```javascript
import { sayHi, sayBye } from "./say.js";

sayHi("John");
sayBye("John");
```

But if there's a lot to importt, we can import everything as an object using\
import \* as \<obj\>, for instance:

```javascript
import * as say from "./say.js";

say.sayHi("John");
say.sayBye("John");
```

Att first sight, "import everything" seems such a cool thing, short to write, why\
should we ever explicitly list what we need to import?

Well, there are few reasons.

1. Explicitly listing what to import gives shorter names: sayHi() instead of say.sayHi().
2. Explicit list of imports gives better overview of the code structure: what is used\
   and where. It makes code support tand refactoring easier.

> Don't be afraid to import too much
>
> > Modern build tools, such as webpack and others, bunlde modules together and optimize
> > them to speedup loading. They also removed unused imports.

> > For instance, if you import \* as library from a huge code library, and then use only
> > frew methods, then unused ones will not be included into the optimized bundle.

### Import "as"

We can also use **_as_** to import under different names.

For instance, let's import **sayHi** into the local variable **hi** for brevity, and import\
**sayBye** as **bye**:

```javascript
import { sayHi as hi, sayBye as bye } from "./say.js";

hi("John");
bye("John");
```

### Export "as"

The similar syntax exists for export.

Let's export functions as **hi** and **bye** :

```javascript
// say.js
export { sayHi as hi, sayBye as bye };
```

Now **hi** and **bye** are official names for outsiders, to be used in imports:

```javascript
// main.js
import * as say from "./say.js";

say.hi("John");
say.bye("John");
```

### Export default

In practice, there are mainly two kinds of modules.

1. Modules that contain a library, pack of functions, like **say.js** above.
2. Modules that declare a single entity, e.g. a module **user.js** export only **class User** .

Mostly, the second approach is preferred, so that every "thing" resides in tis own module.

Naturally, that required a lot of files, as everything wants its own module, but that's\
not a problem at all. Actually, code navigation becomes easier if files are well-named\
and structured into folders.

Modules provide a special **export default** ("the default export") syntax to make the\
"one thing per module" way look better.

Put **export default** before the entity to export:

```javascript
export default class User {
  constructor(name) {
    this.name = name;
  }
}
```

There may be only one **export default** per file.\
...And then import it without curly braces:

```javascript
// main.js
import User from "./user.js"; // not {User}, just User

new User("John");
```

Imports without curly braces look nicer. A common mistakes when starting to use\
modules is to forget curly braces at all. So, remember, **import** needs curly\
braces for named exports and doesn't need them for the default one.

| Named export           | Default export                  |
| ---------------------- | ------------------------------- |
| export class User{...} | export default class User {...} |
| import {User} from ... | import User from ...            |

Technically, we may have both default and named exports in a single module, but\
in practice people usually don't mix them. A module has either named exports or\
the default one.

As there may be at most one default export per file, the exported entity may have\
no name.

For instance, these are all perfectly valid default exports:

```javascript
export default class {
    constructor() {...}
}
```

```javascript
export default function (user) {
  console.log(`Hello, ${user}!`);
}
```

```javascript
export default ["Jan", "Feb", "Mar", "Apr"];
```

Not giving a name is fine, because there is only one **export default** per file,\
so **import** without curly braces knows what to impot.

Wihtout **default**, such an export would give an error:

```javascript
export class { // Error! (non-default export need a name)
    constructor() {}
}
```

### The "default" name

In some situations the **defualt** keyword is used to reference the default export.

For example, to export a function separately from its definition:

```javascript
function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

// same as if we added "export default" before the function
export { sayHi as default };
```

Or, another situation, let's say a module **user.js** exports one main "default"\
thing, and a few named ones (rarely the base, but it happens):

```javascript
export default class User {
  constructor(name) {
    this.name = name;
  }
}

export function sayHi(user) {
  console.log(`Hello, ${user}!`);
}
```

Here's how to import the default export along with a name one:

```javascript
import { default as User, sayHi } from "./user.js";

new User("John");
```

And, finally, if importing everything \* as an object, then the **default** property\
is exactly the default export:

```javascript
import * as user from "./users.js";

let User = user.default; // the default export
new User("John");
```

### A word againt default exports

Named exports are explicit. They exactly name what they import, so we have that\
information from them; that's a good thing.

Named exports force us to use exactly the right name to import:

```javascript
import { User } from "./user.js";
// import {MyUser} won't work, the name must be {User}
```

...While for a default export, we always choose the name when importing:

```javascript
import User from "./user.js";
import MyUser from "./user.js";
// could be import Anything... and it'll still work
```

So team members may use different names to import the same thing, and that's not good.

Usually, to avoid that and keep the code consistentt, there's a rule that import variables\
should correspond to file names, e.g:

```javascript
import User from "./user.js";
import LoginForm from "./loginForm.js";
import func from "path/to/func.js";
```

Still, some teams consider it a serious drawback of default exports. So they prefer\
to always use named exports. Even if only a single thing is exported, it's still\
exported under a name, without **default**.

That also makes re-export a little bit easier.

### Re-export

"Re-export" syntax **export ... from ...** allows to import things and immediately\
export them (possibly under another name), like this:

```javascript
export { sayHi } from "./say.js"; // re-export sayHi

export { default as User } from "./user.js"; // re-export default
```

The syntax **export ... from ...** is just a shorter notation for such import-export:

```javascript
// auth/index.js
// re-export login/logout
export { login, logout } from "./helper.js";

// re-export the default export as User
export { default as User } from "./user.js";
```

The notable difference of **export ... from** compared to **import/export** is that\
re-exported modules aren't available in the current file. So inside the above example\
**auth/index.js** we can't use re-exported **login/logout** functions.

### Re-exporting the dfault export

The default export needs separate handling when re-exporting.

Let's say we have **user.js** with **export default class User** and would like\
to re-export it:

```javascript
export default class User {
  //...
}
```

We can come across two problems with it:

1. **export User from './user.js'** won't work. That would lead to a syntax error.

   - To re-export the default export, we have to write **wxport {default as User}**, as in the example above.

2. **export \* from './user.js'** re-export only named exports, but ignores the default one.

   - If we'd like to re-export both name and default exports, then two statements are needed:

   ```javascript
   export * from "./user.js"; // to re-export named exports
   export { default } from "./user.js"; // to re-export the defualt epxort
   ```

Such oddities of re-exporting a default export are one of the reasons why some\
developers don't like default exports and prefer named ones.

## Dynamic imports

Export and import statements that we covered in previous chapters are called "static".\
The syntax is very simple and strict.

First, we can't dynamically generate any parameters of **import**.

The module path must be a primitive string, can't be a function call. This won't work:

```javascript
import ... from getModuleName(); // Error, only from "string" is allowed
```

Second, we can't import conditionally or at run-time:

```javascript
if (...) {
    import ...; // ERror, not allowed!
}

{
    import ...; // Error, we can't put import in any block
}
```

That's because **import/export** aim to provide a backbone for the code structure.\
That's a good thing, as code structure can be analyzed, modules can be gathered and\
bundled into one file by special tools, unused exports can be remove ("tree-shaken").\
That's possible only because the structure of imports/exports is simple and fixed.

But how can we import a module dynamically, on-demand?

### The import() expression

The **import(module)** expression loads the module and returns a promise that resolved\
into a module object that contains all its exports. It can be called from any place\
in the code.

We can use it dynamically in any place of the code, for instance:

```javascript
let modulePath = prompt("Which module to load?")

import(modulePath)
    .then(obj => <module object>)
    .catch(err => <loading error, e.g. if no such module>)
```

Or, we could use **let module = await import(modulePath)** if inside an async function.

For instance, if we have the following module **say.js**

```javascript
// say.js
export function hi() {
  console.log(`Hello`);
}
export function bye() {
  console.log(`Bye`);
}
```

...Then dynamic import can be like this:

```javascript
let { hi, bye } = await import("./say.js");

hi();
bye();
```

Or, if say.js jas the default export:

```javascript
// say.js
export default function () {
  console.log("Module loaded (export dfault)!");
}
```

...The, in order to access it, we can use **default** property of the module object:

```javascript
let ob = await import("./say.js");
let say = obj.default;

// or, in one line: let {default: say} = await import('./say.js')

say();
```

> Please note:

> Dynamic import work in regular scripts, they don't require **script type="module"**

> Although **import()** looks like a function call, it's a special syntax that just\
> happens to use parentheses (similar to **super()**).

> So we can't copy **import** to a variable or use call/apply with it. it's not a function.
