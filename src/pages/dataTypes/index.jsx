import React from "react";
import { Styled } from "./styled";

const DataTypes = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <div className="header">
                <div className="titleBlock">
                    <div className="initial">D</div>

                    <div>
                        <h1>JavaScript Data Types</h1>

                        <p>
                            Understanding the main kinds of values in JavaScript
                            and how primitive values differ from objects.
                        </p>
                    </div>
                </div>
            </div>

            <div className="content">
                <section>
                    <h2>What are data types</h2>

                    <p>
                        A data type tells JavaScript what kind of value is being
                        stored and how that value can behave. Numbers, strings,
                        booleans, arrays, and objects all represent different
                        types of data.
                    </p>

                    <p>
                        If you do not understand data types properly, bugs start
                        breeding like gremlins in wet code.
                    </p>
                </section>

                <section>
                    <h2>Main categories</h2>

                    <p>
                        JavaScript data types are usually divided into two
                        groups.
                    </p>

                    <ul>
                        <li>Primitive data types</li>
                        <li>Reference data types</li>
                    </ul>
                </section>

                <section>
                    <h2>Primitive data types</h2>

                    <p>
                        Primitive values are simple, basic values. They are not
                        objects and are generally immutable, which means the
                        value itself does not change.
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
                </section>

                <section>
                    <h2>1. String</h2>

                    <p>A string is used for text.</p>

                    <div className="code">
                        {`const name = "Ashish";
const city = 'Bangalore';
const message = \`Hello\`;`}
                    </div>
                </section>

                <section>
                    <h2>2. Number</h2>

                    <p>
                        JavaScript uses one number type for integers and decimal
                        values.
                    </p>

                    <div className="code">
                        {`const age = 28;
const price = 199.99;`}
                    </div>
                </section>

                <section>
                    <h2>3. Boolean</h2>

                    <p>A boolean represents true or false.</p>

                    <div className="code">
                        {`const isLoggedIn = true;
const hasError = false;`}
                    </div>
                </section>

                <section>
                    <h2>4. Undefined</h2>

                    <p>
                        Undefined means a variable has been declared but no
                        value has been assigned yet.
                    </p>

                    <div className="code">
                        {`let score;
console.log(score);`}
                    </div>
                </section>

                <section>
                    <h2>5. Null</h2>

                    <p>
                        Null is used when you intentionally want to represent no
                        value.
                    </p>

                    <div className="code">{`const selectedUser = null;`}</div>
                </section>

                <section>
                    <h2>6. BigInt</h2>

                    <p>
                        BigInt is used for very large integers beyond the safe
                        range of normal numbers.
                    </p>

                    <div className="code">
                        {`const hugeNumber = 123456789012345678901234567890n;`}
                    </div>
                </section>

                <section>
                    <h2>7. Symbol</h2>

                    <p>
                        Symbol creates a unique value, often used for object
                        property keys in advanced cases.
                    </p>

                    <div className="code">{`const id = Symbol("id");`}</div>
                </section>

                <section>
                    <h2>Reference data types</h2>

                    <p>
                        Reference types are more complex values. Objects,
                        arrays, and functions fall into this group.
                    </p>

                    <div className="code">
                        {`const user = {
    name: "Ashish",
    age: 28
};

const skills = ["JavaScript", "React", "Node"];

function greet() {
    console.log("Hello");
}`}
                    </div>

                    <p>
                        These are stored and handled by reference, which means
                        variables can point to the same underlying value.
                    </p>
                </section>

                <section>
                    <h2>Primitive vs reference example</h2>

                    <div className="code">
                        {`let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);`}
                    </div>

                    <p>
                        Here <strong>a</strong> stays 10 because primitives are
                        copied by value.
                    </p>

                    <div className="code">
                        {`const user1 = { name: "Ashish" };
const user2 = user1;

user2.name = "Rahul";

console.log(user1.name);
console.log(user2.name);`}
                    </div>

                    <p>
                        Both variables now show the updated name because both
                        point to the same object.
                    </p>
                </section>

                <section>
                    <h2>Check data types using typeof</h2>

                    <div className="code">
                        {`console.log(typeof "hello");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);`}
                    </div>

                    <p>
                        One famous JavaScript weirdness is that
                        <strong> typeof null </strong>
                        returns
                        <strong> object </strong>. That is an old language bug
                        kept for compatibility. Tiny chaos gremlin, historically
                        preserved.
                    </p>
                </section>

                <section>
                    <h2>Modern rule to remember</h2>

                    <ul>
                        <li>Primitives are simple values</li>
                        <li>Objects and arrays are reference types</li>
                        <li>typeof is useful but not perfect</li>
                        <li>null is intentional absence of value</li>
                        <li>undefined usually means value not assigned yet</li>
                    </ul>
                </section>
            </div>
        </Styled.Wrapper>
    );
};

export default DataTypes;
