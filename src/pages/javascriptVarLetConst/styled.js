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
    `,
};
