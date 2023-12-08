// Object references and copying

// One of the fundamental differences of objects versus primitives is that
// objects are stored and copied "by reference", whereas primitive values:
// strings, numbers, booleans, etc - are always copied "as a whole value".

// A variable assigned to an object stores not the object itself, but its
// "address in memory" - in other words "a reference" to it.

let user = { name: "John" };
let admin = user; // copy the reference

// Now we have two variables, each storing a reference to the same object:
// We an use either variable to access the object and modify its contnets:
admin.name = "Pete";
console.log(user.name); // 'Pete', changes are seen from the "user" reference

// Comparison by refence
// Two objects are equal only if they are the same object
// For instance, here a and b reference the same objet, thus they are equal:
let a = {};
let b = b; // copy the reference
console.log(a == b); // true, both variable references the same object
console.log(a === b); // true

// And here two independed object are not equal, even though they look alike
let c = {};
let d = {};
console.log(a == b); // false

// Const object can be modified
// An important side effect of storing objects as references is that an object
// declared as const can be modified.
// For instance:
const u = {
  name: "John",
};
s.name = "Pete"; // *
console.log(u.name);

// It might seem that the line (*) would cause an error, but it does not. The
// value of u is constant, it must always reference the same object, but properties
// of that object are free to change

// In other words, the const u gives an error only if we try to set user=... as a whole

// That said, if we really need to make constant object propeties, it's also
// possible, but using totatlly different methods. Using Property flags and desciptors.

// Cloning and merging, Object.assign
// So, copying an object variable creates one or more reference to the same object.
// But what if we need to duplicate an object?

// We can create a new object and replicate the structure of the existing one, by
// iterating over its properties and copying them on the primitive level.

// Like this:
let user1 = {
  name: "John",
  age: 30,
};

let clone = {}; // the new empty object

// let's copy all user properties into into
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // change the data in it
console.log(user1.name); // still John in the original object

// We can also use the method Object.assign
// The syntax is:
// Object.assign(dest, ...sources)

// - The first argument dest is a target object.
// - Further argument is a list of sources objects.

// It copies the properties of all source objects into the target dest, and then
// returns it as the result.
// For example, we have user object, let's add a copule of permission to it:

let user3 = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permission1 and permission2 into user
Object.assign(user3, permissions1, permissions2);

// now user3 = {name: "John", canView: true, canEdit: true}
console.log(user3);

// If the copied property name already exists, it gets overwritten:
let user4 = { name: "John" };
Object.assign(user4, { name: "Pete" });
console.log(user4.name); // now user = {name: "Pete"}

// We can also use Object.assign to perform a simple object cloning:
let user5 = {
  name: "John",
  age: 30,
};

let clone = Object.assign({}, user5);
console.log(clone);
// Here it copies all propertties of user into the empty object and returns it.
// There are also methods of cloning object, e.g. using the spread syntax clone = {...user}

// Nested cloning
// Until now we assumed that all properties of user are primitive. But properties
// can be references to other objects.

// Like this:
let person = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

console.log(person.sizes.height); // 182

// Now it's not enough to copy clone.zies = user.sizes, because user.sizes is an
// object, and will be copied by reerence, so clone and person will share the
// same sizes:

let clone = Object.assign({}, person);
console.log(person.sizes === clone.sizes); // true, same object

// user and clone share sizes
user.sizes.width = 60; // change a property from one place
console.log(clone.sizes.wdith); // 60, get the result from the other one

// To fix that and make user and clone truly separate objects, we should use
// a cloning loop that examines each value of person[key] and, if it's an object,
// then replicate its structure as well. That is called a "deep cloning" or
// "structured cloning". There's structuredCloe method that implement deep cloning.

// structuredClone
// The call structuredClone(object) clones the object with all nested properties
let c1 = structuredClone(person);

console.log(person.sizes === clone.sizes); // false, different objects

// person and c1 are totally unrelated now
person.sizes.width = 60; // change a propety from one place
console.log(c1.sizes.width); // 50, not related

// The structuredClone method can clone most data types, such as objects, arrays,
// primitive values.

// It also support circular referenes, when an object property references the
// object itself (directly or via a chain or references).

// For instance:
let u1 = {};
u1.me = u1;

let c2 = structuredClone(u1);
console.log(u1.me === c2);

// As you can see, clone.me references clone, not the user! So the circular
// references was clone correctly as well.

// Although, there are cases when structuredClone fails.

// For instance, when an object has a function property:

// error
structuredClone({
  f: function () {},
});

// Function properties aren't supported.

// To handle such complex cases we may need to use a combination of cloning methods,
// write custom code or, to not reinvent the wheel, take an existing implementation,
// for instance _.cloneDeep(obj) from the JavaScript library lodash.
