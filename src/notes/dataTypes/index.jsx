import React from "react";
import { Styled } from "./styled";

export const noteMeta = {
    title: "Data Types",
    path: "/data-types",
    addedOn: "2026-03-08T10:30:00+05:30",
};

const DataTypes = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <div className="header">
                <div className="titleBlock">
                    <div className="initial">D</div>

                    <div>
                        <h1>JavaScript Data Types</h1>

                        <p>
                            Understanding the main kinds of values in
                            JavaScript, how primitive values differ from
                            reference values, and why this matters in real code.
                        </p>
                    </div>
                </div>
            </div>

            <div className="content">
                <section>
                    <h2>What are data types</h2>

                    <p>
                        A data type tells JavaScript what kind of value is being
                        stored and how that value behaves. For example, text,
                        numbers, true or false values, arrays, and objects are
                        all different kinds of data.
                    </p>

                    <p>
                        JavaScript needs to know what kind of value it is
                        working with so it can decide what operations make
                        sense. For example, adding numbers is different from
                        joining strings.
                    </p>

                    <p>
                        If data types are not understood properly, bugs start
                        showing up in places that look harmless at first.
                    </p>
                </section>

                <section>
                    <h2>Main categories</h2>

                    <p>
                        JavaScript data types are usually divided into two broad
                        groups:
                    </p>

                    <ul>
                        <li>Primitive data types</li>
                        <li>Reference data types</li>
                    </ul>

                    <p>
                        This is one of the most important distinctions in
                        JavaScript because primitives and references behave
                        differently when copied, passed around, and modified.
                    </p>
                </section>

                <section>
                    <h2>Primitive data types</h2>

                    <p>
                        Primitive values are simple built-in values. They are
                        not objects. In most normal situations, you can think of
                        them as independent values.
                    </p>

                    <ul>
                        <li>String</li>
                        <li>Number</li>
                        <li>Boolean</li>
                        <li>Undefined</li>
                        <li>Null</li>
                        <li>BigInt</li>
                        <li>Symbol</li>
                    </ul>

                    <p>
                        Primitive values are copied by value. That means when
                        you assign one primitive variable to another, JavaScript
                        copies the actual value, not some shared container.
                    </p>
                </section>

                <section>
                    <h2>1. String</h2>

                    <p>
                        A string is used to store text. It can be written using
                        double quotes, single quotes, or backticks.
                    </p>

                    <div className="code">
                        {`const name = "Ashish";
const city = 'Bangalore';
const message = \`Hello\`;

console.log(name); // Ashish
console.log(city); // Bangalore
console.log(message); // Hello`}
                    </div>

                    <p>
                        Backticks are especially useful because they also
                        support template literals, which help combine text and
                        variables more cleanly.
                    </p>

                    <div className="code">
                        {`const user = "Ashish";
const greeting = \`Hello, \${user}\`;

console.log(greeting); // Hello, Ashish`}
                    </div>
                </section>

                <section>
                    <h2>2. Number</h2>

                    <p>
                        JavaScript uses a single number type for both whole
                        numbers and decimal numbers.
                    </p>

                    <div className="code">
                        {`const age = 28;
const price = 199.99;
const total = age + 2;

console.log(age); // 28
console.log(price); // 199.99
console.log(total); // 30`}
                    </div>

                    <p>
                        Unlike some other languages, JavaScript does not
                        separate integers and floating point numbers into normal
                        everyday types. Both are treated as numbers.
                    </p>
                </section>

                <section>
                    <h2>3. Boolean</h2>

                    <p>
                        A boolean represents only one of two values:
                        <strong> true </strong>
                        or
                        <strong> false </strong>.
                    </p>

                    <div className="code">
                        {`const isLoggedIn = true;
const hasError = false;

console.log(isLoggedIn); // true
console.log(hasError); // false`}
                    </div>

                    <p>
                        Booleans are often used in conditions, checks, feature
                        flags, authentication status, and validation logic.
                    </p>
                </section>

                <section>
                    <h2>4. Undefined</h2>

                    <p>
                        Undefined means a variable has been declared, but no
                        value has been assigned yet.
                    </p>

                    <div className="code">
                        {`let score;

console.log(score); // undefined`}
                    </div>

                    <p>
                        This usually means "a value is expected later, but right
                        now nothing has been assigned."
                    </p>
                </section>

                <section>
                    <h2>5. Null</h2>

                    <p>
                        Null is used when you intentionally want to represent
                        "no value". This is different from undefined.
                    </p>

                    <div className="code">
                        {`const selectedUser = null;

console.log(selectedUser); // null`}
                    </div>

                    <p>A simple way to think about it:</p>

                    <ul>
                        <li>undefined - JavaScript did not get a value yet</li>
                        <li>
                            null - you deliberately set the value to nothing
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>6. BigInt</h2>

                    <p>
                        BigInt is used for very large integers that go beyond
                        the safe range of regular JavaScript numbers.
                    </p>

                    <div className="code">
                        {`const hugeNumber = 123456789012345678901234567890n;

console.log(hugeNumber); // 123456789012345678901234567890n`}
                    </div>

                    <p>
                        The <strong>n</strong> at the end tells JavaScript that
                        this is a BigInt value.
                    </p>
                </section>

                <section>
                    <h2>7. Symbol</h2>

                    <p>
                        Symbol creates a unique value. It is mostly used in more
                        advanced JavaScript patterns, especially when unique
                        keys are needed.
                    </p>

                    <div className="code">
                        {`const id = Symbol("id");
const anotherId = Symbol("id");

console.log(id); // Symbol(id)
console.log(anotherId); // Symbol(id)
console.log(id === anotherId); // false`}
                    </div>

                    <p>
                        Even though both symbols were created with the same
                        text, they are still different values. That uniqueness
                        is the whole point of Symbol.
                    </p>
                </section>

                <section>
                    <h2>Reference data types</h2>

                    <p>
                        Reference types are more complex values. Objects,
                        arrays, and functions belong to this category.
                    </p>

                    <div className="code">
                        {`const user = {
    name: "Ashish",
    age: 28
};

const skills = ["JavaScript", "React", "Node"];

function greet() {
    console.log("Hello");
}

console.log(user); // { name: "Ashish", age: 28 }
console.log(skills); // ["JavaScript", "React", "Node"]
greet(); // Hello`}
                    </div>

                    <p>
                        These are called reference types because variables do
                        not simply hold the raw structure in the same way
                        primitives hold raw values. Instead, they refer to an
                        underlying object or structure in memory.
                    </p>
                </section>

                <section>
                    <h2>Primitive copy example</h2>

                    <p>
                        Primitive values are copied by value. That means the new
                        variable gets its own separate copy.
                    </p>

                    <div className="code">
                        {`let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20`}
                    </div>

                    <p>
                        Changing <strong>b</strong> does not affect
                        <strong> a </strong>
                        because the value was copied, not shared.
                    </p>
                </section>

                <section>
                    <h2>Reference copy example</h2>

                    <p>
                        Reference values behave differently. When one object is
                        assigned to another variable, both variables point to
                        the same object.
                    </p>

                    <div className="code">
                        {`const user1 = { name: "Ashish" };
const user2 = user1;

user2.name = "Rahul";

console.log(user1.name); // Rahul
console.log(user2.name); // Rahul`}
                    </div>

                    <p>
                        Both variables now show the updated value because both
                        point to the same object in memory.
                    </p>
                </section>

                <section>
                    <h2>Arrays are also reference types</h2>

                    <p>
                        Arrays may look simple, but they are actually objects in
                        JavaScript, so they also behave like reference types.
                    </p>

                    <div className="code">
                        {`const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]`}
                    </div>

                    <p>
                        Pushing into <strong>arr2</strong> also changes
                        <strong> arr1 </strong>
                        because both variables point to the same array.
                    </p>
                </section>

                <section>
                    <h2>Check data types using typeof</h2>

                    <p>
                        The <strong>typeof</strong> operator helps identify the
                        type of many values.
                    </p>

                    <div className="code">
                        {`console.log(typeof "hello"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function test() {}); // function`}
                    </div>

                    <p>
                        This is useful, but not perfect. One famous JavaScript
                        oddity is:
                    </p>

                    <div className="code">
                        {`console.log(typeof null); // object`}
                    </div>

                    <p>
                        That is an old language bug kept for backward
                        compatibility. Strange, yes. Fixable now, not really.
                        Legacy code is a stubborn fossil.
                    </p>
                </section>

                <section>
                    <h2>Better array checking</h2>

                    <p>
                        Since <strong>typeof []</strong> returns
                        <strong> object </strong>, you should use
                        <strong> Array.isArray()</strong>
                        when checking arrays.
                    </p>

                    <div className="code">
                        {`const items = ["a", "b", "c"];
const user = { name: "Ashish" };

console.log(Array.isArray(items)); // true
console.log(Array.isArray(user)); // false`}
                    </div>
                </section>

                <section>
                    <h2>Why this matters in real projects</h2>

                    <p>Understanding data types helps in:</p>

                    <ul>
                        <li>writing correct conditions</li>
                        <li>avoiding accidental mutation</li>
                        <li>debugging API data issues</li>
                        <li>working with forms and user input</li>
                        <li>understanding how values are copied and changed</li>
                    </ul>

                    <p>
                        Many JavaScript bugs happen because developers assume a
                        value is one type while it is actually another.
                    </p>
                </section>

                <section>
                    <h2>Modern rule to remember</h2>

                    <ul>
                        <li>Primitives are simple values</li>
                        <li>Objects and arrays are reference types</li>
                        <li>typeof is useful but not always enough</li>
                        <li>null means intentional absence of value</li>
                        <li>undefined usually means value not assigned yet</li>
                    </ul>
                </section>
            </div>
        </Styled.Wrapper>
    );
};

export default DataTypes;
