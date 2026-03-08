import React from "react";
import { Styled } from "./styled";

export const noteMeta = {
    title: "Event Loop",
    path: "/event-loop",
    addedOn: "2026-03-07T20:10:00+05:30",
};

const EventLoop = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <div className="header">
                <div className="titleBlock">
                    <div className="initial">E</div>

                    <div>
                        <h1>JavaScript Event Loop</h1>

                        <p>
                            Understanding how JavaScript handles synchronous
                            code, asynchronous tasks, promises, timers, and the
                            order in which work gets executed.
                        </p>
                    </div>
                </div>
            </div>

            <div className="content">
                <section>
                    <h2>What is the event loop</h2>

                    <p>
                        JavaScript runs code on a single main thread. That means
                        it can do one main thing at a time. But real
                        applications still need to handle timers, user clicks,
                        network requests, and promises. The event loop is the
                        mechanism that helps JavaScript coordinate all this work
                        without freezing the page.
                    </p>

                    <p>
                        In simple words, the event loop keeps checking whether
                        the call stack is empty, and if it is empty, it pushes
                        pending work into the stack to be executed.
                    </p>
                </section>

                <section>
                    <h2>Main parts involved</h2>

                    <ul>
                        <li>Call stack</li>
                        <li>Browser or Web APIs</li>
                        <li>Callback queue</li>
                        <li>Microtask queue</li>
                        <li>Event loop</li>
                    </ul>

                    <p>
                        These parts work together to decide what runs now and
                        what runs later.
                    </p>
                </section>

                <section>
                    <h2>1. Call stack</h2>

                    <p>
                        The call stack is where JavaScript keeps track of which
                        function is currently running.
                    </p>

                    <div className="code">
                        {`function one() {
    two();
}

function two() {
    console.log("Inside two");
}

one();`}
                    </div>

                    <p>
                        Here <strong>one</strong> goes into the stack, then
                        <strong> two</strong>, then <strong>two</strong>{" "}
                        finishes, then <strong>one</strong> finishes.
                    </p>
                </section>

                <section>
                    <h2>2. Web APIs or browser APIs</h2>

                    <p>
                        Functions like <strong>setTimeout</strong>,
                        <strong> fetch</strong>, and DOM events are not handled
                        directly by the JavaScript engine. They are provided by
                        the browser environment.
                    </p>

                    <div className="code">
                        {`console.log("Start");

setTimeout(() => {
    console.log("Timer done");
}, 1000);

console.log("End");`}
                    </div>

                    <p>
                        The timer is handled outside the main stack. JavaScript
                        does not sit and wait for one second. It moves on and
                        continues executing the next line.
                    </p>
                </section>

                <section>
                    <h2>3. Callback queue</h2>

                    <p>
                        When asynchronous work like a timer completes, its
                        callback is placed into the callback queue. It does not
                        run immediately. It waits until the call stack becomes
                        empty.
                    </p>

                    <div className="code">
                        {`console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");`}
                    </div>

                    <p>The output will be:</p>

                    <div className="code">
                        {`A
C
B`}
                    </div>

                    <p>
                        Even though the delay is 0, the callback still runs
                        later because it first goes to the queue.
                    </p>
                </section>

                <section>
                    <h2>4. Microtask queue</h2>

                    <p>
                        Promise callbacks do not go to the normal callback
                        queue. They go to the microtask queue.
                    </p>

                    <p>
                        Microtasks have higher priority than normal callbacks.
                        That means after the current synchronous code finishes,
                        JavaScript runs all pending microtasks before taking
                        items from the callback queue.
                    </p>

                    <div className="code">
                        {`console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");`}
                    </div>

                    <p>The output will be:</p>

                    <div className="code">
                        {`Start
End
Promise
Timeout`}
                    </div>

                    <p>
                        The promise callback runs before the timeout callback
                        because microtasks are processed first.
                    </p>
                </section>

                <section>
                    <h2>How the event loop works step by step</h2>

                    <ol>
                        <li>Run synchronous code from top to bottom</li>
                        <li>Push function calls into the call stack</li>
                        <li>Send async tasks like timers to browser APIs</li>
                        <li>
                            When async work finishes, move callbacks to a queue
                        </li>
                        <li>When stack is empty, event loop checks queues</li>
                        <li>Run all microtasks first</li>
                        <li>Then run callback queue tasks</li>
                    </ol>
                </section>

                <section>
                    <h2>Important example</h2>

                    <div className="code">
                        {`console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");`}
                    </div>

                    <p>Output:</p>

                    <div className="code">
                        {`1
4
3
2`}
                    </div>

                    <p>Reason:</p>

                    <ul>
                        <li>1 runs immediately</li>
                        <li>setTimeout is sent outside the stack</li>
                        <li>Promise callback goes to microtask queue</li>
                        <li>4 runs immediately</li>
                        <li>Microtask runs first, so 3 comes next</li>
                        <li>
                            Timeout callback runs after that, so 2 comes last
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>Why this matters in real projects</h2>

                    <p>
                        If you do not understand the event loop, async code can
                        look random. But it is not random at all. It follows
                        rules.
                    </p>

                    <ul>
                        <li>Why promise callbacks run before timers</li>
                        <li>Why heavy synchronous code blocks the UI</li>
                        <li>Why some logs appear in unexpected order</li>
                        <li>Why async bugs happen in real applications</li>
                    </ul>
                </section>

                <section>
                    <h2>Common confusion</h2>

                    <p>
                        Many beginners think <strong>setTimeout(fn, 0)</strong>
                        means run immediately. That is not true. It means the
                        callback becomes eligible to run after the current work
                        finishes and after queue rules are checked.
                    </p>
                </section>

                <section>
                    <h2>Modern rule to remember</h2>

                    <ul>
                        <li>Synchronous code runs first</li>
                        <li>Microtasks run before normal callbacks</li>
                        <li>Timers do not interrupt running code</li>
                        <li>The stack must be empty before queued work runs</li>
                    </ul>

                    <p>
                        Once this mental model becomes clear, asynchronous
                        JavaScript stops looking like black magic and starts
                        looking like a system.
                    </p>
                </section>
            </div>
        </Styled.Wrapper>
    );
};

export default EventLoop;
