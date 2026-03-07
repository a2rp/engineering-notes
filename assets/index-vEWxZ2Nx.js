import{c as s,j as e}from"./index-6uQLnXvX.js";const o={Wrapper:s.div`
        max-width: 900px;
        margin: 40px auto;
        padding: 28px;
        border: 1px solid var(--color-border);
        border-radius: 20px;
        background: var(--color-surface);

        .header {
            margin-bottom: 24px;
        }

        .titleBlock {
            display: flex;
            gap: 14px;
            align-items: center;
        }

        .initial {
            width: 46px;
            height: 46px;
            border-radius: 10px;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 20px;
        }

        h1 {
            font-size: 24px;
            margin-bottom: 4px;
            color: var(--color-text-primary);
        }

        h2 {
            font-size: 18px;
            color: var(--color-text-primary);
        }

        p {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.75;
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 28px;
        }

        section {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        ul,
        ol {
            padding-left: 18px;
        }

        ul {
            list-style: disc;
        }

        ol {
            list-style: decimal;
        }

        li {
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
        }

        th,
        td {
            border: 1px solid var(--color-border);
            padding: 10px;
            text-align: left;
            color: var(--color-text-secondary);
        }

        th {
            background: var(--color-surface-2);
            color: var(--color-text-primary);
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 10px;
            padding: 14px;
            font-family: Consolas, Monaco, "Courier New", monospace;
            font-size: 13px;
            white-space: pre;
            overflow-x: auto;
            color: var(--color-text-primary);
            line-height: 1.65;
        }

        strong {
            color: var(--color-text-primary);
        }

        @media (max-width: 768px) {
            margin: 20px 14px;
            padding: 20px;

            .titleBlock {
                align-items: flex-start;
            }

            h1 {
                font-size: 22px;
            }

            h2 {
                font-size: 17px;
            }
        }
    `},r=()=>e.jsxs(o.Wrapper,{className:"topicWrapper",children:[e.jsx("div",{className:"header",children:e.jsxs("div",{className:"titleBlock",children:[e.jsx("div",{className:"initial",children:"E"}),e.jsxs("div",{children:[e.jsx("h1",{children:"JavaScript Event Loop"}),e.jsx("p",{children:"Understanding how JavaScript handles synchronous code, asynchronous tasks, promises, timers, and the order in which work gets executed."})]})]})}),e.jsxs("div",{className:"content",children:[e.jsxs("section",{children:[e.jsx("h2",{children:"What is the event loop"}),e.jsx("p",{children:"JavaScript runs code on a single main thread. That means it can do one main thing at a time. But real applications still need to handle timers, user clicks, network requests, and promises. The event loop is the mechanism that helps JavaScript coordinate all this work without freezing the page."}),e.jsx("p",{children:"In simple words, the event loop keeps checking whether the call stack is empty, and if it is empty, it pushes pending work into the stack to be executed."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Main parts involved"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Call stack"}),e.jsx("li",{children:"Browser or Web APIs"}),e.jsx("li",{children:"Callback queue"}),e.jsx("li",{children:"Microtask queue"}),e.jsx("li",{children:"Event loop"})]}),e.jsx("p",{children:"These parts work together to decide what runs now and what runs later."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"1. Call stack"}),e.jsx("p",{children:"The call stack is where JavaScript keeps track of which function is currently running."}),e.jsx("div",{className:"code",children:`function one() {
    two();
}

function two() {
    console.log("Inside two");
}

one();`}),e.jsxs("p",{children:["Here ",e.jsx("strong",{children:"one"})," goes into the stack, then",e.jsx("strong",{children:" two"}),", then ",e.jsx("strong",{children:"two"})," ","finishes, then ",e.jsx("strong",{children:"one"})," finishes."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"2. Web APIs or browser APIs"}),e.jsxs("p",{children:["Functions like ",e.jsx("strong",{children:"setTimeout"}),",",e.jsx("strong",{children:" fetch"}),", and DOM events are not handled directly by the JavaScript engine. They are provided by the browser environment."]}),e.jsx("div",{className:"code",children:`console.log("Start");

setTimeout(() => {
    console.log("Timer done");
}, 1000);

console.log("End");`}),e.jsx("p",{children:"The timer is handled outside the main stack. JavaScript does not sit and wait for one second. It moves on and continues executing the next line."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"3. Callback queue"}),e.jsx("p",{children:"When asynchronous work like a timer completes, its callback is placed into the callback queue. It does not run immediately. It waits until the call stack becomes empty."}),e.jsx("div",{className:"code",children:`console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");`}),e.jsx("p",{children:"The output will be:"}),e.jsx("div",{className:"code",children:`A
C
B`}),e.jsx("p",{children:"Even though the delay is 0, the callback still runs later because it first goes to the queue."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"4. Microtask queue"}),e.jsx("p",{children:"Promise callbacks do not go to the normal callback queue. They go to the microtask queue."}),e.jsx("p",{children:"Microtasks have higher priority than normal callbacks. That means after the current synchronous code finishes, JavaScript runs all pending microtasks before taking items from the callback queue."}),e.jsx("div",{className:"code",children:`console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");`}),e.jsx("p",{children:"The output will be:"}),e.jsx("div",{className:"code",children:`Start
End
Promise
Timeout`}),e.jsx("p",{children:"The promise callback runs before the timeout callback because microtasks are processed first."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"How the event loop works step by step"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Run synchronous code from top to bottom"}),e.jsx("li",{children:"Push function calls into the call stack"}),e.jsx("li",{children:"Send async tasks like timers to browser APIs"}),e.jsx("li",{children:"When async work finishes, move callbacks to a queue"}),e.jsx("li",{children:"When stack is empty, event loop checks queues"}),e.jsx("li",{children:"Run all microtasks first"}),e.jsx("li",{children:"Then run callback queue tasks"})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Important example"}),e.jsx("div",{className:"code",children:`console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");`}),e.jsx("p",{children:"Output:"}),e.jsx("div",{className:"code",children:`1
4
3
2`}),e.jsx("p",{children:"Reason:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"1 runs immediately"}),e.jsx("li",{children:"setTimeout is sent outside the stack"}),e.jsx("li",{children:"Promise callback goes to microtask queue"}),e.jsx("li",{children:"4 runs immediately"}),e.jsx("li",{children:"Microtask runs first, so 3 comes next"}),e.jsx("li",{children:"Timeout callback runs after that, so 2 comes last"})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Why this matters in real projects"}),e.jsx("p",{children:"If you do not understand the event loop, async code can look random. But it is not random at all. It follows rules."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Why promise callbacks run before timers"}),e.jsx("li",{children:"Why heavy synchronous code blocks the UI"}),e.jsx("li",{children:"Why some logs appear in unexpected order"}),e.jsx("li",{children:"Why async bugs happen in real applications"})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Common confusion"}),e.jsxs("p",{children:["Many beginners think ",e.jsx("strong",{children:"setTimeout(fn, 0)"}),"means run immediately. That is not true. It means the callback becomes eligible to run after the current work finishes and after queue rules are checked."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Modern rule to remember"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Synchronous code runs first"}),e.jsx("li",{children:"Microtasks run before normal callbacks"}),e.jsx("li",{children:"Timers do not interrupt running code"}),e.jsx("li",{children:"The stack must be empty before queued work runs"})]}),e.jsx("p",{children:"Once this mental model becomes clear, asynchronous JavaScript stops looking like black magic and starts looking like a system."})]})]})]});export{r as default};
