import{c as s,j as e}from"./index-BlkVdB8M.js";const i={Wrapper:s.div`
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
    `},r=()=>e.jsxs(i.Wrapper,{className:"topicWrapper",children:[e.jsx("div",{className:"header",children:e.jsxs("div",{className:"titleBlock",children:[e.jsx("div",{className:"initial",children:"D"}),e.jsxs("div",{children:[e.jsx("h1",{children:"JavaScript Data Types"}),e.jsx("p",{children:"Understanding the main kinds of values in JavaScript and how primitive values differ from objects."})]})]})}),e.jsxs("div",{className:"content",children:[e.jsxs("section",{children:[e.jsx("h2",{children:"What are data types"}),e.jsx("p",{children:"A data type tells JavaScript what kind of value is being stored and how that value can behave. Numbers, strings, booleans, arrays, and objects all represent different types of data."}),e.jsx("p",{children:"If you do not understand data types properly, bugs start breeding like gremlins in wet code."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Main categories"}),e.jsx("p",{children:"JavaScript data types are usually divided into two groups."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Primitive data types"}),e.jsx("li",{children:"Reference data types"})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Primitive data types"}),e.jsx("p",{children:"Primitive values are simple, basic values. They are not objects and are generally immutable, which means the value itself does not change."}),e.jsxs("ul",{children:[e.jsx("li",{children:"String"}),e.jsx("li",{children:"Number"}),e.jsx("li",{children:"Boolean"}),e.jsx("li",{children:"Undefined"}),e.jsx("li",{children:"Null"}),e.jsx("li",{children:"BigInt"}),e.jsx("li",{children:"Symbol"})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"1. String"}),e.jsx("p",{children:"A string is used for text."}),e.jsx("div",{className:"code",children:`const name = "Ashish";
const city = 'Bangalore';
const message = \`Hello\`;`})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"2. Number"}),e.jsx("p",{children:"JavaScript uses one number type for integers and decimal values."}),e.jsx("div",{className:"code",children:`const age = 28;
const price = 199.99;`})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"3. Boolean"}),e.jsx("p",{children:"A boolean represents true or false."}),e.jsx("div",{className:"code",children:`const isLoggedIn = true;
const hasError = false;`})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"4. Undefined"}),e.jsx("p",{children:"Undefined means a variable has been declared but no value has been assigned yet."}),e.jsx("div",{className:"code",children:`let score;
console.log(score);`})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"5. Null"}),e.jsx("p",{children:"Null is used when you intentionally want to represent no value."}),e.jsx("div",{className:"code",children:"const selectedUser = null;"})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"6. BigInt"}),e.jsx("p",{children:"BigInt is used for very large integers beyond the safe range of normal numbers."}),e.jsx("div",{className:"code",children:"const hugeNumber = 123456789012345678901234567890n;"})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"7. Symbol"}),e.jsx("p",{children:"Symbol creates a unique value, often used for object property keys in advanced cases."}),e.jsx("div",{className:"code",children:'const id = Symbol("id");'})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Reference data types"}),e.jsx("p",{children:"Reference types are more complex values. Objects, arrays, and functions fall into this group."}),e.jsx("div",{className:"code",children:`const user = {
    name: "Ashish",
    age: 28
};

const skills = ["JavaScript", "React", "Node"];

function greet() {
    console.log("Hello");
}`}),e.jsx("p",{children:"These are stored and handled by reference, which means variables can point to the same underlying value."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Primitive vs reference example"}),e.jsx("div",{className:"code",children:`let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);`}),e.jsxs("p",{children:["Here ",e.jsx("strong",{children:"a"})," stays 10 because primitives are copied by value."]}),e.jsx("div",{className:"code",children:`const user1 = { name: "Ashish" };
const user2 = user1;

user2.name = "Rahul";

console.log(user1.name);
console.log(user2.name);`}),e.jsx("p",{children:"Both variables now show the updated name because both point to the same object."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Check data types using typeof"}),e.jsx("div",{className:"code",children:`console.log(typeof "hello");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);`}),e.jsxs("p",{children:["One famous JavaScript weirdness is that",e.jsx("strong",{children:" typeof null "}),"returns",e.jsx("strong",{children:" object "}),". That is an old language bug kept for compatibility. Tiny chaos gremlin, historically preserved."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Modern rule to remember"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Primitives are simple values"}),e.jsx("li",{children:"Objects and arrays are reference types"}),e.jsx("li",{children:"typeof is useful but not perfect"}),e.jsx("li",{children:"null is intentional absence of value"}),e.jsx("li",{children:"undefined usually means value not assigned yet"})]})]})]})]});export{r as default};
