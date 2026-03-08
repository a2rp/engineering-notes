import React from "react";
import { Styled } from "./styled";

export const noteMeta = {
    title: "Scope Chain",
    path: "/scope-chain",
    addedOn: "2026-03-08T12:25:00+05:30",
};

const ScopeChain = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <div className="header">
                <div className="titleBlock">
                    <div className="initial">S</div>

                    <div>
                        <h1>JavaScript Scope Chain</h1>

                        <p>
                            Understanding how JavaScript looks for variables
                            across nested scopes and why inner code can access
                            outer values but outer code cannot access inner
                            values.
                        </p>
                    </div>
                </div>
            </div>

            <div className="content">
                <section>
                    <h2>What is scope</h2>

                    <p>
                        Scope means the area of code where a variable is
                        available and can be accessed.
                    </p>

                    <p>
                        JavaScript does not make all variables available
                        everywhere. Each variable belongs to some scope, and
                        code can only access it if that scope relationship
                        allows it.
                    </p>
                </section>

                <section>
                    <h2>What is scope chain</h2>

                    <p>
                        The scope chain is the process JavaScript uses to find a
                        variable when it is referenced.
                    </p>

                    <p>
                        If the variable is not found in the current scope,
                        JavaScript looks in the outer scope, then the next outer
                        scope, and so on until it reaches the global scope.
                    </p>

                    <p>That connected lookup path is called the scope chain.</p>
                </section>

                <section>
                    <h2>Simple example</h2>

                    <div className="code">
                        {`const siteName = "Engineering Notes";

function outer() {
    const topic = "JavaScript";

    function inner() {
        const concept = "Scope Chain";

        console.log(siteName); // Engineering Notes
        console.log(topic); // JavaScript
        console.log(concept); // Scope Chain
    }

    inner();
}

outer();`}
                    </div>

                    <p>
                        Inside <strong>inner</strong>, JavaScript looks for each
                        variable in order:
                    </p>

                    <ul>
                        <li>First in the inner function scope</li>
                        <li>Then in the outer function scope</li>
                        <li>Then in the global scope</li>
                    </ul>
                </section>

                <section>
                    <h2>How lookup works step by step</h2>

                    <p>
                        When JavaScript sees a variable name, it does not search
                        randomly. It follows a fixed order.
                    </p>

                    <ol>
                        <li>Check the current scope</li>
                        <li>If not found, check the parent scope</li>
                        <li>If still not found, go higher again</li>
                        <li>Continue until global scope</li>
                        <li>If still not found, throw an error</li>
                    </ol>
                </section>

                <section>
                    <h2>Inner scope can access outer scope</h2>

                    <div className="code">
                        {`const appName = "AstraRoute";

function showSection() {
    const section = "Notes";

    function printDetails() {
        console.log(appName); // AstraRoute
        console.log(section); // Notes
    }

    printDetails();
}

showSection();`}
                    </div>

                    <p>
                        The inner function can access variables from outer
                        scopes. That is normal JavaScript behavior.
                    </p>
                </section>

                <section>
                    <h2>Outer scope cannot access inner scope</h2>

                    <div className="code">
                        {`function outer() {
    const outerValue = "Outer";

    function inner() {
        const innerValue = "Inner";
        console.log(innerValue); // Inner
    }

    inner();

    console.log(outerValue); // Outer
    // console.log(innerValue); // ReferenceError
}

outer();`}
                    </div>

                    <p>
                        Outer code cannot reach inside the inner function and
                        grab its private variables. Scope direction works inward
                        to outward, not the other way around.
                    </p>
                </section>

                <section>
                    <h2>Global scope at the top</h2>

                    <p>
                        The global scope is the outermost scope. Variables
                        declared there can usually be accessed by inner scopes.
                    </p>

                    <div className="code">
                        {`const language = "JavaScript";

function first() {
    function second() {
        console.log(language); // JavaScript
    }

    second();
}

first();`}
                    </div>

                    <p>
                        Since <strong>language</strong> is global, the nested
                        function chain can still reach it through the scope
                        chain.
                    </p>
                </section>

                <section>
                    <h2>Shadowing</h2>

                    <p>
                        If a variable with the same name exists in a nearer
                        scope, JavaScript uses that closer one first. This is
                        called shadowing.
                    </p>

                    <div className="code">
                        {`const value = "Global";

function demo() {
    const value = "Local";

    console.log(value); // Local
}

demo();
console.log(value); // Global`}
                    </div>

                    <p>
                        The local variable shadows the global one inside that
                        function.
                    </p>
                </section>

                <section>
                    <h2>Nested shadowing example</h2>

                    <div className="code">
                        {`const level = "Global";

function outer() {
    const level = "Outer";

    function inner() {
        const level = "Inner";

        console.log(level); // Inner
    }

    inner();
}

outer();`}
                    </div>

                    <p>
                        JavaScript always uses the nearest matching variable in
                        the scope chain.
                    </p>
                </section>

                <section>
                    <h2>What happens when variable is not found</h2>

                    <div className="code">
                        {`function test() {
    console.log(userName); // ReferenceError
}

test();`}
                    </div>

                    <p>
                        JavaScript checks the current scope, then outer scopes,
                        then global scope. If it still does not find the
                        variable, it throws a ReferenceError.
                    </p>
                </section>

                <section>
                    <h2>Scope chain and lexical scope</h2>

                    <p>
                        Scope chain depends on lexical scope. Lexical means the
                        place where the function is written in the code.
                    </p>

                    <p>
                        JavaScript decides the outer scope of a function based
                        on where the function was defined, not where it was
                        called.
                    </p>

                    <div className="code">
                        {`const name = "Global";

function outer() {
    const name = "Outer";

    function inner() {
        console.log(name); // Outer
    }

    return inner;
}

const fn = outer();
fn();`}
                    </div>

                    <p>
                        Even though <strong>fn()</strong> is called later, it
                        still remembers the scope where it was created.
                    </p>
                </section>

                <section>
                    <h2>Scope chain and closures</h2>

                    <p>
                        Closures work because of the scope chain. When an inner
                        function survives after the outer function has finished,
                        it still uses the remembered outer scope.
                    </p>

                    <div className="code">
                        {`function createCounter() {
    let count = 0;

    return function() {
        count++;
        console.log(count); // updated count
    };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3`}
                    </div>

                    <p>
                        The returned function keeps access to
                        <strong> count </strong>
                        through the scope chain.
                    </p>
                </section>

                <section>
                    <h2>Block scope also matters</h2>

                    <p>
                        Variables declared with <strong>let</strong> and
                        <strong> const </strong>
                        are block scoped, which means they only exist inside the
                        block where they are declared.
                    </p>

                    <div className="code">
                        {`if (true) {
    const message = "Inside block";
    console.log(message); // Inside block
}

// console.log(message); // ReferenceError`}
                    </div>

                    <p>
                        The scope chain cannot access a variable that is outside
                        its allowed block boundaries.
                    </p>
                </section>

                <section>
                    <h2>Why this matters in real projects</h2>

                    <ul>
                        <li>
                            It explains why some variables are accessible and
                            others are not
                        </li>
                        <li>It helps debug ReferenceError issues</li>
                        <li>It helps understand closures clearly</li>
                        <li>It helps avoid accidental shadowing bugs</li>
                        <li>It improves function design and readability</li>
                    </ul>
                </section>

                <section>
                    <h2>Common beginner mistakes</h2>

                    <ul>
                        <li>Thinking all variables are globally available</li>
                        <li>Confusing scope chain with call order</li>
                        <li>Not noticing variable shadowing</li>
                        <li>Expecting outer code to access inner variables</li>
                        <li>Mixing lexical scope with runtime position</li>
                    </ul>
                </section>

                <section>
                    <h2>Simple mental model</h2>

                    <p>
                        Think of scope chain like climbing floors in a building.
                    </p>

                    <ul>
                        <li>First check the current room</li>
                        <li>If not found, go to the parent floor</li>
                        <li>Then go higher again</li>
                        <li>Keep going until the top level</li>
                    </ul>

                    <p>
                        But you cannot search downward into child rooms that are
                        not part of your current access path.
                    </p>
                </section>

                <section>
                    <h2>Modern rule to remember</h2>

                    <ul>
                        <li>
                            JavaScript looks for variables from inner scope to
                            outer scope
                        </li>
                        <li>Nearest matching variable wins</li>
                        <li>Inner code can access outer variables</li>
                        <li>Outer code cannot access inner variables</li>
                        <li>Closures depend on scope chain</li>
                    </ul>
                </section>
            </div>
        </Styled.Wrapper>
    );
};

export default ScopeChain;
