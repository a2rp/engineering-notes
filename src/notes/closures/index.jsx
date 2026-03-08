import React from "react";
import { Styled } from "./styled";

export const noteMeta = {
    title: "JavaScript Closures",
    path: "/closures",
    addedOn: "2026-03-08T12:12:00+05:30",
};

const Closures = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <div className="header">
                <div className="titleBlock">
                    <div className="initial">C</div>

                    <div>
                        <h1>JavaScript Closures</h1>

                        <p>
                            Understanding how functions remember variables from
                            their outer scope even after that outer function has
                            finished execution.
                        </p>
                    </div>
                </div>
            </div>

            <div className="content">
                <section>
                    <h2>What is a closure</h2>

                    <p>
                        A closure is created when a function keeps access to
                        variables from its outer scope even after the outer
                        function has finished running.
                    </p>

                    <p>
                        In simple words, a closure allows a function to remember
                        data from the place where it was created.
                    </p>

                    <p>
                        This is one of the most important ideas in JavaScript
                        because many advanced patterns depend on it, even when
                        developers do not realize they are using closures.
                    </p>
                </section>

                <section>
                    <h2>Why closures happen</h2>

                    <p>
                        JavaScript uses lexical scoping. That means a function
                        can access variables from the scope in which it was
                        defined, not where it is called.
                    </p>

                    <p>
                        When that function is returned or used later, it still
                        remembers those outer variables. That remembered
                        relationship is the closure.
                    </p>
                </section>

                <section>
                    <h2>Simple closure example</h2>

                    <div className="code">
                        {`function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count); // prints updated count
    }

    return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3`}
                    </div>

                    <p>
                        Here the <strong>inner</strong> function remembers the
                        variable <strong>count</strong> even after
                        <strong> outer</strong> has finished executing.
                    </p>

                    <p>
                        That memory is the closure. The variable does not get
                        lost because the returned function still needs it.
                    </p>
                </section>

                <section>
                    <h2>Step by step understanding</h2>

                    <ol>
                        <li>
                            The <strong>outer</strong> function runs
                        </li>
                        <li>
                            It creates the variable <strong>count</strong>
                        </li>
                        <li>
                            It creates the <strong>inner</strong> function
                        </li>
                        <li>
                            It returns the <strong>inner</strong> function
                        </li>
                        <li>
                            The returned function is stored in
                            <strong> counter</strong>
                        </li>
                        <li>
                            Whenever <strong>counter()</strong> runs, it still
                            has access to <strong>count</strong>
                        </li>
                    </ol>

                    <p>
                        So even though <strong>outer()</strong> has completed,
                        the data it created is still available to the inner
                        function.
                    </p>
                </section>

                <section>
                    <h2>Another example with a greeting</h2>

                    <div className="code">
                        {`function createGreeter(name) {
    return function() {
        console.log("Hello " + name); // uses remembered name
    };
}

const greetAshish = createGreeter("Ashish");
const greetRahul = createGreeter("Rahul");

greetAshish(); // Hello Ashish
greetRahul(); // Hello Rahul`}
                    </div>

                    <p>
                        Each returned function remembers its own value of
                        <strong> name</strong>. That is why one greets Ashish
                        and the other greets Rahul.
                    </p>
                </section>

                <section>
                    <h2>Function factory pattern</h2>

                    <p>
                        Closures are often used to create functions with custom
                        behavior. This is called a function factory.
                    </p>

                    <div className="code">
                        {`function multiplyBy(x) {
    return function(y) {
        return x * y;
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15`}
                    </div>

                    <p>
                        The <strong>double</strong> function remembers that
                        <strong> x </strong>
                        was 2.
                    </p>

                    <p>
                        The <strong>triple</strong> function remembers that
                        <strong> x </strong>
                        was 3.
                    </p>
                </section>

                <section>
                    <h2>Closures and private data</h2>

                    <p>
                        Closures can be used to create private variables that
                        cannot be directly changed from outside.
                    </p>

                    <div className="code">
                        {`function createBankAccount() {
    let balance = 0;

    return {
        deposit(amount) {
            balance += amount;
            console.log(balance); // current balance after deposit
        },
        withdraw(amount) {
            balance -= amount;
            console.log(balance); // current balance after withdraw
        },
        getBalance() {
            console.log(balance); // current balance
        }
    };
}

const account = createBankAccount();

account.deposit(500); // 500
account.withdraw(200); // 300
account.getBalance(); // 300`}
                    </div>

                    <p>
                        Here <strong>balance</strong> is not directly accessible
                        outside the function, but the returned methods can still
                        use it because they form closures around it.
                    </p>
                </section>

                <section>
                    <h2>Closures in event handlers</h2>

                    <p>
                        Closures are very common in browser code and React code.
                        Event handlers often remember values from outer scopes.
                    </p>

                    <div className="code">
                        {`function attachMessage(buttonId, message) {
    const button = document.getElementById(buttonId);

    button.addEventListener("click", function() {
        console.log(message); // remembers message
    });
}`}
                    </div>

                    <p>
                        The click handler remembers the value of
                        <strong> message </strong>
                        even though it runs later.
                    </p>
                </section>

                <section>
                    <h2>Closures with loops - classic confusion</h2>

                    <p>
                        Closures can cause unexpected behavior in loops if
                        <strong> var </strong>
                        is used, because <strong>var</strong> is function
                        scoped.
                    </p>

                    <div className="code">
                        {`for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i); // prints 4, 4, 4
    }, 100);
}`}
                    </div>

                    <p>
                        Why does it print 4 three times? Because all callbacks
                        close over the same <strong>i</strong> variable, and by
                        the time they run, the loop has already finished.
                    </p>
                </section>

                <section>
                    <h2>Fix using let</h2>

                    <p>
                        The easiest fix is to use <strong>let</strong> because
                        it creates a new block scoped variable for each loop
                        iteration.
                    </p>

                    <div className="code">
                        {`for (let i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i); // prints 1, 2, 3
    }, 100);
}`}
                    </div>

                    <p>
                        Now each callback closes over a different value of
                        <strong> i</strong>.
                    </p>
                </section>

                <section>
                    <h2>Fix using another function</h2>

                    <p>
                        Before <strong>let</strong> became common, developers
                        used another function to create a new scope.
                    </p>

                    <div className="code">
                        {`for (var i = 1; i <= 3; i++) {
    (function(currentValue) {
        setTimeout(function() {
            console.log(currentValue); // prints 1, 2, 3
        }, 100);
    })(i);
}`}
                    </div>

                    <p>
                        Here the immediately invoked function gets its own
                        parameter, and each callback remembers that parameter.
                    </p>
                </section>

                <section>
                    <h2>Closure does not copy values magically</h2>

                    <p>
                        A closure remembers access to variables, not always a
                        frozen snapshot of values. If the remembered variable
                        changes later, the closure sees the updated value.
                    </p>

                    <div className="code">
                        {`let message = "Hello";

function showMessage() {
    console.log(message); // prints current message
}

message = "Hi";

showMessage(); // Hi`}
                    </div>

                    <p>
                        The function did not store the old string permanently.
                        It keeps access to the variable, and the variable now
                        holds a new value.
                    </p>
                </section>

                <section>
                    <h2>Where closures are used in real projects</h2>

                    <ul>
                        <li>Event handlers</li>
                        <li>Timers and async callbacks</li>
                        <li>Function factories</li>
                        <li>Memoization patterns</li>
                        <li>Modules with private state</li>
                        <li>React hooks and component logic</li>
                    </ul>

                    <p>
                        Even if you do not explicitly think about closures, you
                        are already using them in real JavaScript projects.
                    </p>
                </section>

                <section>
                    <h2>Common beginner mistakes</h2>

                    <ul>
                        <li>
                            Thinking closures are a special keyword, when they
                            are actually normal language behavior
                        </li>
                        <li>
                            Confusing closure with copying values permanently
                        </li>
                        <li>
                            Forgetting that <strong>var</strong> in loops can
                            create shared closure problems
                        </li>
                        <li>
                            Not realizing returned inner functions can still
                            access outer variables
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>Simple mental model</h2>

                    <p>
                        Think of a closure like a backpack carried by a
                        function.
                    </p>

                    <p>
                        When the function is created, it packs references to the
                        variables it needs from outer scopes. Later, even if it
                        runs somewhere else, it still has that backpack with it.
                    </p>

                    <p>Not a magical backpack, just a very loyal one.</p>
                </section>

                <section>
                    <h2>Modern rule to remember</h2>

                    <ul>
                        <li>Closures come from lexical scoping</li>
                        <li>Inner functions can remember outer variables</li>
                        <li>Closures are useful, not weird</li>
                        <li>Use let in loops to avoid common closure bugs</li>
                        <li>Closures are everywhere in real JavaScript</li>
                    </ul>
                </section>
            </div>
        </Styled.Wrapper>
    );
};

export default Closures;
