import React from "react";
import { Styled } from "./styled";

export const noteMeta = {
    title: "Hoisting",
    path: "/hoisting",
    addedOn: "2026-03-08T11:09:00+05:30",
};

const Hoisting = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <div className="header">
                <div className="titleBlock">
                    <div className="initial">H</div>

                    <div>
                        <h1>JavaScript Hoisting</h1>

                        <p>
                            Understanding how JavaScript moves declarations
                            before execution, why some variables can be accessed
                            early, and why others throw errors.
                        </p>
                    </div>
                </div>
            </div>

            <div className="content">
                <section>
                    <h2>What is hoisting</h2>

                    <p>
                        Hoisting is JavaScript behavior where declarations are
                        processed before the code actually starts running line
                        by line.
                    </p>

                    <p>
                        This does not mean the code is physically moved inside
                        your file. It means JavaScript prepares certain
                        declarations in memory during the creation phase before
                        execution starts.
                    </p>

                    <p>
                        Because of this, some things can be used before they
                        appear in the code, and some things cannot. That is
                        where the fun, confusion, and occasional chaos begin.
                    </p>
                </section>

                <section>
                    <h2>Execution happens in two broad phases</h2>

                    <ol>
                        <li>Creation phase</li>
                        <li>Execution phase</li>
                    </ol>

                    <p>
                        In the creation phase, JavaScript scans the scope and
                        sets up memory for variables and functions.
                    </p>

                    <p>
                        In the execution phase, it runs the code line by line.
                    </p>
                </section>

                <section>
                    <h2>Hoisting with var</h2>

                    <p>
                        Variables declared with <strong>var</strong> are
                        hoisted, but they are initialized with
                        <strong> undefined </strong>
                        during the creation phase.
                    </p>

                    <div className="code">
                        {`console.log(city); // undefined

var city = "Bangalore";

console.log(city); // Bangalore`}
                    </div>

                    <p>
                        Why did the first log not crash? Because JavaScript
                        already created the variable in memory before execution
                        started. But at that moment, its value was still
                        <strong> undefined</strong>.
                    </p>
                </section>

                <section>
                    <h2>How JavaScript roughly sees that var example</h2>

                    <div className="code">
                        {`var city;

console.log(city); // undefined

city = "Bangalore";

console.log(city); // Bangalore`}
                    </div>

                    <p>
                        This is not the real internal engine code, but it is a
                        useful mental model for understanding hoisting.
                    </p>
                </section>

                <section>
                    <h2>Hoisting with let</h2>

                    <p>
                        Variables declared with <strong>let</strong> are also
                        hoisted, but they are not usable before their
                        declaration line is reached.
                    </p>

                    <div className="code">
                        {`console.log(score); // ReferenceError

let score = 95;`}
                    </div>

                    <p>
                        This throws an error because <strong>let</strong> stays
                        in a special state before initialization. That state is
                        called the <strong>Temporal Dead Zone</strong>.
                    </p>
                </section>

                <section>
                    <h2>Hoisting with const</h2>

                    <p>
                        <strong>const</strong> behaves like <strong>let</strong>{" "}
                        in terms of hoisting. It is hoisted, but it cannot be
                        accessed before initialization.
                    </p>

                    <div className="code">
                        {`console.log(PI); // ReferenceError

const PI = 3.14;`}
                    </div>

                    <p>
                        It also has one more rule:
                        <strong> const </strong>
                        must be assigned a value at the time of declaration.
                    </p>

                    <div className="code">
                        {`const taxRate = 18;

console.log(taxRate); // 18`}
                    </div>
                </section>

                <section>
                    <h2>Temporal Dead Zone</h2>

                    <p>
                        The Temporal Dead Zone, often called TDZ, is the time
                        between entering a scope and actually reaching the line
                        where a <strong>let</strong> or <strong>const</strong>
                        variable is declared.
                    </p>

                    <div className="code">
                        {`{
    // TDZ starts here for userName

    // console.log(userName); // ReferenceError

    let userName = "Ashish";

    console.log(userName); // Ashish
}`}
                    </div>

                    <p>
                        The variable exists in the scope, but JavaScript does
                        not allow access to it yet.
                    </p>
                </section>

                <section>
                    <h2>Function declarations are fully hoisted</h2>

                    <p>
                        Function declarations are hoisted with their full
                        function body, so they can be called before they appear
                        in the code.
                    </p>

                    <div className="code">
                        {`greet(); // Hello from greet

function greet() {
    console.log("Hello from greet");
}`}
                    </div>

                    <p>
                        This works because the function declaration is available
                        in memory during the creation phase.
                    </p>
                </section>

                <section>
                    <h2>Function expressions are different</h2>

                    <p>
                        A function expression assigned to a variable behaves
                        according to the variable keyword being used.
                    </p>

                    <div className="code">
                        {`console.log(sayHello); // undefined

var sayHello = function () {
    console.log("Hello");
};

sayHello(); // Hello`}
                    </div>

                    <p>
                        Here the variable <strong>sayHello</strong> is hoisted
                        as
                        <strong> undefined </strong>
                        because it uses <strong>var</strong>. The function
                        itself is not ready until the assignment line runs.
                    </p>
                </section>

                <section>
                    <h2>Function expression with let</h2>

                    <div className="code">
                        {`// console.log(sum); // ReferenceError

let sum = function () {
    console.log("Running sum");
};

sum(); // Running sum`}
                    </div>

                    <p>
                        Since <strong>let</strong> is involved, accessing it
                        before declaration causes a ReferenceError.
                    </p>
                </section>

                <section>
                    <h2>Arrow functions also follow variable rules</h2>

                    <div className="code">
                        {`// console.log(getUser); // ReferenceError

const getUser = () => {
    console.log("User loaded");
};

getUser(); // User loaded`}
                    </div>

                    <p>
                        Arrow functions are not magically hoisted as complete
                        callable functions. They behave like the variable they
                        are assigned to.
                    </p>
                </section>

                <section>
                    <h2>Comparison table</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Hoisted</th>
                                <th>Accessible before declaration</th>
                                <th>Initial state</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>var</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>undefined</td>
                            </tr>
                            <tr>
                                <td>let</td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>Temporal Dead Zone</td>
                            </tr>
                            <tr>
                                <td>const</td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>Temporal Dead Zone</td>
                            </tr>
                            <tr>
                                <td>function declaration</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>full function available</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section>
                    <h2>Why hoisting confuses beginners</h2>

                    <p>
                        The confusion happens because developers read code top
                        to bottom, but JavaScript first prepares declarations in
                        memory before executing the lines.
                    </p>

                    <p>
                        So the code you write and the way JavaScript internally
                        prepares it are related, but not identical.
                    </p>
                </section>

                <section>
                    <h2>Real world advice</h2>

                    <ul>
                        <li>Declare variables before using them</li>
                        <li>Prefer const by default</li>
                        <li>Use let when reassignment is needed</li>
                        <li>Avoid var in modern code</li>
                        <li>Do not depend on hoisting for readability</li>
                    </ul>

                    <p>
                        Even when hoisting makes something technically work,
                        that does not mean it is good style. Code should help
                        humans, not just the JavaScript engine.
                    </p>
                </section>

                <section>
                    <h2>Simple mental model</h2>

                    <p>
                        Think of JavaScript as doing a quick setup round first.
                    </p>

                    <ul>
                        <li>var gets a memory slot with undefined</li>
                        <li>
                            let and const get reserved, but blocked until
                            declaration
                        </li>
                        <li>function declarations get fully prepared</li>
                    </ul>

                    <p>
                        Once this mental model clicks, hoisting stops looking
                        like random wizardry and starts looking like a
                        predictable system.
                    </p>
                </section>
            </div>
        </Styled.Wrapper>
    );
};

export default Hoisting;
