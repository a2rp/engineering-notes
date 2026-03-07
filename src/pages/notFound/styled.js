import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 32px 20px;
        background: transparent;

        .notFoundCard {
            width: min(100%, 720px);
            padding: 32px 24px;
            border: 1px solid var(--color-border);
            border-radius: 24px;
            background: linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-bg) 100%
            );
            box-shadow: 0 18px 40px var(--color-shadow);
            text-align: center;
        }

        .iconBadge {
            width: 72px;
            height: 72px;
            margin: 0 auto 18px;
            border: 1px solid var(--color-border-light);
            border-radius: 18px;
            display: grid;
            place-items: center;
            background: var(--color-surface-2);
            color: var(--color-text-primary);
            font-size: 28px;
        }

        .eyebrow {
            margin-bottom: 8px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--color-text-muted);
        }

        h1 {
            margin-bottom: 14px;
            font-size: clamp(34px, 6vw, 52px);
            line-height: 1.05;
            color: var(--color-text-primary);
        }

        .description {
            max-width: 560px;
            margin: 0 auto;
            font-size: 15px;
            line-height: 1.7;
            color: var(--color-text-secondary);
        }

        .metaRow {
            margin-top: 24px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
        }

        .metaItem {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 14px;
            border: 1px solid var(--color-border);
            border-radius: 999px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            font-size: 13px;
        }

        .metaItem svg {
            font-size: 14px;
            color: var(--color-text-primary);
            flex-shrink: 0;
        }

        .actionRow {
            margin-top: 28px;
            display: flex;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;
        }

        .primaryAction,
        .secondaryAction {
            min-width: 160px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 12px 18px;
            border-radius: 12px;
            border: 1px solid var(--color-border-light);
            text-decoration: none;
            font-size: 14px;
            font-weight: 700;
            transition:
                background 0.2s ease,
                color 0.2s ease,
                border-color 0.2s ease,
                transform 0.2s ease;
        }

        .primaryAction {
            background: var(--color-text-primary);
            color: var(--color-bg);
        }

        .secondaryAction {
            background: var(--color-surface);
            color: var(--color-text-primary);
            cursor: pointer;
        }

        .primaryAction:hover,
        .secondaryAction:hover {
            transform: translateY(-1px);
            text-decoration: none;
        }

        .primaryAction:hover {
            background: var(--color-primary-hover);
        }

        .secondaryAction:hover {
            background: var(--color-surface-2);
            border-color: var(--color-border-light);
        }

        @media (max-width: 640px) {
            padding: 20px 14px;

            .notFoundCard {
                padding: 24px 16px;
                border-radius: 20px;
            }

            .iconBadge {
                width: 64px;
                height: 64px;
                border-radius: 16px;
                font-size: 24px;
            }

            .description {
                font-size: 14px;
            }

            .primaryAction,
            .secondaryAction {
                width: 100%;
            }
        }
    `,
};
