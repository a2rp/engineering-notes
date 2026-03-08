import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
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
    `,
};
