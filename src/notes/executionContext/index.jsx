import React from "react";
import { Styled } from "./styled";

export const noteMeta = {
    title: "Execution Context",
    path: "/execution-context",
    addedOn: "2026-03-08T12:40:00+05:30",
};

const ExecutionContext = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <div className="header">
                <div className="titleBlock">
                    <div className="initial">E</div>

                    <div>
                        <h1>JavaScript Execution Context</h1>

                        <p>
                            Understanding how JavaScript actually runs your code
                            internally. Every line of JavaScript runs inside an
                            execution context.
                        </p>
                    </div>
                </div>
            </div>

            <div className="content">
                <section>
                    <h2>What is an execution context</h2>

                    <p>
                        Execution context is the environment where JavaScript
                        code is evaluated and executed.
                    </p>

                    <p>
                        When JavaScript runs your program, it creates an
                        execution context that contains everything needed to run
                        that code, including variables, functions, and the scope
                        information.
                    </p>

                    <p>
                        In simple words, execution context is the workspace
                        where JavaScript runs your code.
                    </p>
                </section>

                <section>
                    <h2>Types of execution context</h2>

                    <p>
                        JavaScript mainly has two important types of execution
                        context.
                    </p>

                    <ul>
                        <li>Global execution context</li>
                        <li>Function execution context</li>
                    </ul>
                </section>

                <section>
                    <h2>Global execution context</h2>

                    <p>
                        When a JavaScript file starts running, the first thing
                        created is the global execution context.
                    </p>

                    <p>
                        This context represents the global environment of the
                        program.
                    </p>

                    <div className="code">
                        {`const site = "Engineering Notes";

function greet() {
    console.log("Hello");
}

console.log(site);`}
                    </div>

                    <p>
                        In this example the variables and functions exist inside
                        the global execution context.
                    </p>
                </section>

                <section>
                    <h2>Function execution context</h2>

                    <p>
                        Whenever a function is called, JavaScript creates a new
                        execution context for that function.
                    </p>

                    <p>
                        That context contains the function's variables,
                        parameters, and scope information.
                    </p>

                    <div className="code">
                        {`function greet(name) {
    const message = "Hello";

    console.log(message + " " + name);
}

greet("Ashish");`}
                    </div>

                    <p>
                        When <strong>greet()</strong> runs, a new execution
                        context is created specifically for that function.
                    </p>
                </section>

                <section>
                    <h2>Execution stack</h2>

                    <p>
                        JavaScript uses a stack structure to manage execution
                        contexts. This stack is called the call stack.
                    </p>

                    <div className="code">
                        {`function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("Inside third function");
}

first();`}
                    </div>

                    <p>The call stack will look like this during execution:</p>

                    <ul>
                        <li>Global context</li>
                        <li>first()</li>
                        <li>second()</li>
                        <li>third()</li>
                    </ul>

                    <p>
                        When a function finishes execution, it is removed from
                        the stack.
                    </p>
                </section>

                <section>
                    <h2>Creation phase</h2>

                    <p>
                        When an execution context is created, JavaScript first
                        enters the creation phase.
                    </p>

                    <p>
                        During this phase JavaScript prepares memory for
                        variables and functions.
                    </p>

                    <ul>
                        <li>Variables are allocated memory</li>
                        <li>Functions are stored in memory</li>
                        <li>The scope chain is established</li>
                    </ul>
                </section>

                <section>
                    <h2>Execution phase</h2>

                    <p>
                        After the creation phase, JavaScript moves to the
                        execution phase.
                    </p>

                    <p>
                        During this phase the code actually runs line by line
                        and variables receive their real values.
                    </p>

                    <div className="code">
                        {`var x = 10;

function show() {
    console.log(x);
}

show();`}
                    </div>
                </section>

                <section>
                    <h2>Example showing creation and execution</h2>

                    <div className="code">
                        {`console.log(a); // undefined

var a = 5;

function test() {
    console.log("Inside function");
}

test();`}
                    </div>

                    <p>
                        During the creation phase variable <strong>a</strong>
                        gets memory but its value is set to undefined.
                    </p>

                    <p>
                        Later in the execution phase the actual value 5 is
                        assigned.
                    </p>
                </section>

                <section>
                    <h2>Execution context components</h2>

                    <p>
                        Each execution context contains several internal
                        components.
                    </p>

                    <ul>
                        <li>Variable environment</li>
                        <li>Lexical environment</li>
                        <li>This binding</li>
                        <li>Scope chain reference</li>
                    </ul>
                </section>

                <section>
                    <h2>Why execution context matters</h2>

                    <p>
                        Understanding execution context explains many important
                        JavaScript behaviors.
                    </p>

                    <ul>
                        <li>How hoisting works</li>
                        <li>How closures work</li>
                        <li>How scope chain works</li>
                        <li>How function calls are managed</li>
                    </ul>
                </section>

                <section>
                    <h2>Common beginner mistakes</h2>

                    <ul>
                        <li>Thinking code runs exactly top to bottom</li>
                        <li>Not understanding creation phase</li>
                        <li>Confusing call stack behavior</li>
                        <li>Misunderstanding variable initialization</li>
                    </ul>
                </section>

                <section>
                    <h2>Simple mental model</h2>

                    <p>
                        Imagine execution context as a workspace table where
                        JavaScript places variables, functions, and references
                        before running the code.
                    </p>

                    <p>
                        Every time a function runs, JavaScript opens a new table
                        for it and pushes it on top of the stack.
                    </p>
                </section>

                <section>
                    <h2>Modern rule to remember</h2>

                    <ul>
                        <li>
                            JavaScript always runs code inside an execution
                            context
                        </li>
                        <li>The global context is created first</li>
                        <li>Each function call creates a new context</li>
                        <li>Contexts are managed using the call stack</li>
                        <li>Creation phase happens before execution phase</li>
                    </ul>
                </section>
            </div>
        </Styled.Wrapper>
    );
};

export default ExecutionContext;
