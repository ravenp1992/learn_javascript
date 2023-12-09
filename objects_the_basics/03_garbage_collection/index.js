// Garbage collection

// Memory management in JavaScript is performed automatically and invisibly to us.
// We create primitives, objects, functions... All that takes memory.

// What happens when something is not needed any more? How does the JavaScript
// engine discover it and clean it up?

// REACHABILITY
// The main concept of memory management in JavaScript is reachability.

// Simply put, "reachable" values are those that are accessible or usable somehow.
// They are guaranteed to be stored in memory.

// 1. There's a base set of inherently reachable values, that cannot be delete for
// obvious reasons.

// For instance:
// - The currently executing function, its local variables and parameters
// - Other functions on the current chain of nested calls, their local variables
// and parameters
// - Global variables
// - (there are some other, internal ones as well)
// These values are called roots

// 2. Any other value is considered reachable if it's reachable from a root by
// a reference or by a chain of references.

// For instance, if there's an object in global variable, and that object has
// property referencing another object, that object is considered reachable. And
// those that it references are also reachable.

// There's a background process in the JavaScript engine that is called garabe
// collector. It monitors all objects and removes those that have become unreachable.

// A simple example

// user has a reference to the object
let user = {
  name: "John",
};

// The global variable "user" references the object {name: "John"}
//. The "name" property of user stores a primitive, so it's painted inside the object.

// If the value of user is overwritten, the reference is lost:
user = null;
// Now user becomes unreachable. There's no way to access it, no references to it.
// Garabe collector will junk the data and free the memory.

// TWO REFERENCES
// Now let's imagine we copied the reference from user to admin:

let person = { name: "John" };
let admin = person;

// Now if we do the same
person = null;
// Then the object is still reachable via admin global variable, so it must stay
// in memory. If we overwrite admin too, then it can be removed.

// INTERLINKED OBJECTS
// Now a more complex example. The family:

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry({ name: "John" }, { name: "Ann" });
// Function marry "marries" two objects by giving them references to each other
// and returns a new object that contains them both.

// As of now, all objects are reachable.
// Now let's remove two references

delete family.father;
delete family.mother.husband;

// It's not enough to delete only one of these two references, because all objects
// would still be reachable
// But if we delete both, then we can see that John has no incoming reference anymore:

// Outgoing references do not matter. Only incoming ones can make an object reachable,
// so John is now unreachable and will be removed from the memory with all its data
// also became unaaccessible.

// UNREACHABLE ISLAND
// It is possible that the whole island of interlinked objects becomes unreachable
// and is removed from the memory.
// The source object is the same as above. Then:
family = null;

// This demonstrates how important the concept of reachability is.
// it's obvious that John and Ann are still linked, both have incomeing refernce.
// But that's not enough.

// The former "family" object has been unlinked from the root, there's no reference
// to it anymore, so the whole island becomes unreachable and will be removed.

// INTERAL ALGORITHMS
// The basic garbage collection algorithm is called "mark-and-sweep"
// The following "garbage collection" steps are regularly perfomed:
// - The garbage collector takes roots and "marks" (remember) them.
// - Then it visit and "marks" all references from them.
// - Then it visits marked objects and marks their references. All visited objects
// are remembered, so as not to visit the same object twice in the future.
// - And so on until every reachable (from the root) references are visited.
// - All objects exept marked ones are removed.

// JavaScript engines apply many optimizations to make it run faster and not
// introduce any delays into the code execution.

// Some of the optimizations:

// Generational collection - objects are split into two set: "new ones" and "old ones".
// In typical code, many object have a short life span: they appear, do their job
// and die fast, so itt make sense to track new objects and clear the memory from
// them if that's the case. Those that survive for long enough, become "old" and
// are examined less often.

// Incremental collection - If there are many objects, and we try to walk and mark
// the whole object set at once, it may take some time and introduce visible delays
// in the execution. So the engine splits the whole set of existing objects into
// multiple parts. And then clear these parts one after another. There are many
// small garbage collections instead of a total one. That requires some extra
// bookkeeping between them to track changes, but we get many tiny delays instead
// of a big one.

// Idle-time collection - The gargabe collector tries to run only while the CPU
// is idle, to reduce the possible effect on the execution.
