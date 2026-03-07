import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        padding: 24px;
        border: 1px solid var(--color-border);
        border-radius: 24px;
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-bg) 100%
        );

        .headerRow {
            margin-bottom: 18px;
        }

        .headerRow h2 {
            font-size: 26px;
            line-height: 1.2;
            color: var(--color-text-primary);
            margin-bottom: 6px;
        }

        .headerRow p {
            font-size: 14px;
            color: var(--color-text-secondary);
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            text-decoration: none;
            transition:
                background 0.2s ease,
                border-color 0.2s ease,
                transform 0.2s ease;
        }

        .item:hover {
            background: var(--color-surface-2);
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            text-decoration: none;
        }

        .initial {
            width: 36px;
            height: 36px;
            flex-shrink: 0;
            border-radius: 10px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            font-size: 15px;
            font-weight: 900;
        }

        .content {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .title {
            color: var(--color-text-primary);
            font-size: 15px;
            font-weight: 700;
            line-height: 1.35;
        }

        .meta {
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.4;
        }
    `,
};
