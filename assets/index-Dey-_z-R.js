import{c as r,j as e}from"./index-6uQLnXvX.js";const s={Wrapper:r.div`
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
        }

        p {
            font-size: 14px;
            color: var(--color-text-secondary);
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

        h2 {
            font-size: 18px;
        }

        ul,
        ol {
            padding-left: 18px;
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
        }

        th {
            background: var(--color-surface-2);
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 10px;
            padding: 14px;
            font-family: monospace;
            font-size: 13px;
            white-space: pre;
            overflow-x: auto;
        }
    `},l=()=>e.jsxs(s.Wrapper,{className:"topicWrapper",children:[e.jsx("div",{className:"header",children:e.jsxs("div",{className:"titleBlock",children:[e.jsx("div",{className:"initial",children:"J"}),e.jsxs("div",{children:[e.jsx("h1",{children:"JavaScript var let const"}),e.jsx("p",{children:"Understanding how variables are declared in JavaScript and how their scope and behavior differ."})]})]})}),e.jsxs("div",{className:"content",children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Why variable declarations matter"}),e.jsxs("p",{children:["Variables store values that programs use during execution. JavaScript originally had only the",e.jsx("strong",{children:" var "}),"keyword. Later ES6 introduced",e.jsx("strong",{children:" let "}),"and",e.jsx("strong",{children:" const "}),"to improve scoping rules and prevent common bugs."]}),e.jsx("p",{children:"These three keywords define how variables behave inside functions, blocks, and global scope."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"var"}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"var"})," keyword was the original way to declare variables in JavaScript."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Function scoped"}),e.jsx("li",{children:"Can be redeclared"}),e.jsx("li",{children:"Hoisted to the top of scope"})]}),e.jsx("div",{className:"code",children:`function example() {
    var x = 10;

    if (true) {
        var x = 20;
        console.log(x);
    }

    console.log(x);
}`}),e.jsxs("p",{children:["Because ",e.jsx("strong",{children:"var"})," is function scoped, both variables refer to the same variable."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"let"}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"let"})," keyword introduces block scope. The variable only exists inside the block where it is declared."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Block scoped"}),e.jsx("li",{children:"Cannot be redeclared in same scope"}),e.jsx("li",{children:"Safer for loops and conditions"})]}),e.jsx("div",{className:"code",children:`function example() {
    let x = 10;

    if (true) {
        let x = 20;
        console.log(x);
    }

    console.log(x);
}`}),e.jsx("p",{children:"Here the two variables are different because they belong to separate blocks."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"const"}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"const"})," keyword declares variables whose value should not be reassigned."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Block scoped"}),e.jsx("li",{children:"Must be initialized"}),e.jsx("li",{children:"Cannot be reassigned"})]}),e.jsx("div",{className:"code",children:`const PI = 3.14159;

PI = 5;`}),e.jsx("p",{children:"This will throw an error because const cannot change."}),e.jsx("p",{children:"However objects and arrays declared with const can still modify their internal properties."}),e.jsx("div",{className:"code",children:`const user = { name: "Ashish" };

user.name = "Rahul";

console.log(user.name);`})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Key differences"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Keyword"}),e.jsx("th",{children:"Scope"}),e.jsx("th",{children:"Redeclaration"}),e.jsx("th",{children:"Reassignment"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"var"}),e.jsx("td",{children:"Function"}),e.jsx("td",{children:"Allowed"}),e.jsx("td",{children:"Allowed"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"let"}),e.jsx("td",{children:"Block"}),e.jsx("td",{children:"Not allowed"}),e.jsx("td",{children:"Allowed"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"const"}),e.jsx("td",{children:"Block"}),e.jsx("td",{children:"Not allowed"}),e.jsx("td",{children:"Not allowed"})]})]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Modern JavaScript rule"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use const by default"}),e.jsx("li",{children:"Use let when reassignment is needed"}),e.jsx("li",{children:"Avoid var in modern code"})]}),e.jsx("p",{children:"This pattern reduces accidental bugs and improves code readability."})]})]})]});export{l as default};
