import React from "react";
import { Styled } from "./styled";

export const noteMeta = {
    title: "Variables: var let const",
    path: "/js-variables",
    addedOn: "2026-03-07T22:10:00+05:30",
};

const JavascriptVarLetConst = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <div className="header">
                <div className="titleBlock">
                    <div className="initial">J</div>

                    <div>
                        <h1>JavaScript var let const</h1>

                        <p>
                            Understanding how variables are declared in
                            JavaScript and how their scope and behavior differ.
                        </p>
                    </div>
                </div>
            </div>

            <div className="content">
                <section>
                    <h2>Why variable declarations matter</h2>

                    <p>
                        Variables store values that programs use during
                        execution. JavaScript originally had only the
                        <strong> var </strong>
                        keyword. Later ES6 introduced
                        <strong> let </strong>
                        and
                        <strong> const </strong>
                        to improve scoping rules and prevent common bugs.
                    </p>

                    <p>
                        These three keywords define how variables behave inside
                        functions, blocks, and global scope.
                    </p>
                </section>

                <section>
                    <h2>var</h2>

                    <p>
                        The <strong>var</strong> keyword was the original way to
                        declare variables in JavaScript.
                    </p>

                    <ul>
                        <li>Function scoped</li>
                        <li>Can be redeclared</li>
                        <li>Hoisted to the top of scope</li>
                    </ul>

                    <div className="code">
                        {`function example() {
    var x = 10;

    if (true) {
        var x = 20;
        console.log(x);
    }

    console.log(x);
}`}
                    </div>

                    <p>
                        Because <strong>var</strong> is function scoped, both
                        variables refer to the same variable.
                    </p>
                </section>

                <section>
                    <h2>let</h2>

                    <p>
                        The <strong>let</strong> keyword introduces block scope.
                        The variable only exists inside the block where it is
                        declared.
                    </p>

                    <ul>
                        <li>Block scoped</li>
                        <li>Cannot be redeclared in same scope</li>
                        <li>Safer for loops and conditions</li>
                    </ul>

                    <div className="code">
                        {`function example() {
    let x = 10;

    if (true) {
        let x = 20;
        console.log(x);
    }

    console.log(x);
}`}
                    </div>

                    <p>
                        Here the two variables are different because they belong
                        to separate blocks.
                    </p>
                </section>

                <section>
                    <h2>const</h2>

                    <p>
                        The <strong>const</strong> keyword declares variables
                        whose value should not be reassigned.
                    </p>

                    <ul>
                        <li>Block scoped</li>
                        <li>Must be initialized</li>
                        <li>Cannot be reassigned</li>
                    </ul>

                    <div className="code">
                        {`const PI = 3.14159;

PI = 5;`}
                    </div>

                    <p>This will throw an error because const cannot change.</p>

                    <p>
                        However objects and arrays declared with const can still
                        modify their internal properties.
                    </p>

                    <div className="code">
                        {`const user = { name: "Ashish" };

user.name = "Rahul";

console.log(user.name);`}
                    </div>
                </section>

                <section>
                    <h2>Key differences</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Keyword</th>
                                <th>Scope</th>
                                <th>Redeclaration</th>
                                <th>Reassignment</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>var</td>
                                <td>Function</td>
                                <td>Allowed</td>
                                <td>Allowed</td>
                            </tr>

                            <tr>
                                <td>let</td>
                                <td>Block</td>
                                <td>Not allowed</td>
                                <td>Allowed</td>
                            </tr>

                            <tr>
                                <td>const</td>
                                <td>Block</td>
                                <td>Not allowed</td>
                                <td>Not allowed</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section>
                    <h2>Modern JavaScript rule</h2>

                    <ul>
                        <li>Use const by default</li>
                        <li>Use let when reassignment is needed</li>
                        <li>Avoid var in modern code</li>
                    </ul>

                    <p>
                        This pattern reduces accidental bugs and improves code
                        readability.
                    </p>
                </section>
            </div>
        </Styled.Wrapper>
    );
};

export default JavascriptVarLetConst;
