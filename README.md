<h1>Explain the difference between any, unknown, and never types in TypeScript.</h1>
<h3>Type any</h3>
TypeScript is a type-safe language, meaning it checks and enforces the types of variables at compile time. But the any type is a special escape hatch that essentially tells TypeScript: "Don’t check this; I know what I’m doing."

When you assign the any type to a variable, TypeScript gives up on type-checking for that variable. You can assign anything — a string, number, object, array, function — and TypeScript won’t complain. You also get full flexibility to call any method on that variable, access any property, and pass it anywhere, even if the operation makes no sense at runtime.

<h3> Type unknown</h3>
The unknown type is similar to any in that it can hold any type of value. However, it's much safer than any.

When you declare a variable as unknown, TypeScript allows you to assign any value to it — just like any. But unlike any, you can’t use it directly. You have to narrow the type first by checking what kind of value it holds — using typeof, instanceof, or other type guards.

<h3> Type never</h3>
The never type is a unique and somewhat advanced concept in TypeScript. It represents a value that never happens — literally.

A function that throws an error and never returns anything has a return type of never. So does a function that contains an infinite loop and never exits. TypeScript uses never to indicate "this code path doesn’t produce a value and never completes normally."
<h3>Final Thoughts</h3>
=>any gives you full flexibility — but at the cost of type safety.
=>unknown gives you flexibility with safety — it demands that you validate types before use.
=>never is used to indicate impossible cases or functions that never return.


<h1>What are some differences between interfaces and types in TypeScript?</h1>
In TypeScript, both interface and type are used to define the shape of objects — such as which properties an object should have, and what types those properties are. On the surface, they seem similar, and in many cases they can be used interchangeably.
<h3>Declaration vs Assignment</h3>
An interface is meant to describe the structure or the contract of an object. It’s almost like saying, "Here’s a blueprint — anything that claims to follow this interface must follow these rules." This aligns with object-oriented design principles. You declare interfaces as reusable contracts that objects, classes, and even other interfaces can implement or extend.

A type, on the other hand, is more of a type alias. It's like assigning a name to a complex type or combination of types. It's not just about object shapes — it can be used for unions, intersections, primitives, tuples, and more. So type is more flexible and expressive than interface.
<h3>Composition</h3>
Interfaces use the extends keyword. You can extend one interface from another, or even from multiple interfaces. This feels very much like inheritance in object-oriented programming.

Types can also be extended, but they use intersection types with the & operator instead. So instead of extends, you do something like type A = B & C. This allows you to combine multiple types into one.
<h3> Final Thoughts</h3>
Use interface when you're:

=>Designing structured, object-oriented shapes
=>Expecting others to extend or implement your design
=>Working with class-based code

Use type when you're:

=>Creating union or intersection types
=>Aliasing primitives, tuples, or other complex types
=>Writing functional, flexible logic with advanced generics
