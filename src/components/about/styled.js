import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        padding: 32px 20px 56px;

        .heroSection,
        .highlightsSection,
        .detailsSection,
        .philosophySection {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
        }

        .heroSection {
            padding: 40px 24px;
            border: 1px solid var(--color-border);
            border-radius: 28px;
            background: linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-bg) 100%
            );
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .heroBadge {
            width: fit-content;
            padding: 8px 14px;
            border: 1px solid var(--color-border-light);
            border-radius: 999px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: 18px;
        }

        .heroSection h1 {
            max-width: 860px;
            font-size: clamp(34px, 5vw, 64px);
            line-height: 1.06;
            margin-bottom: 18px;
            color: var(--color-text-primary);
        }

        .heroText {
            max-width: 820px;
            font-size: 16px;
            line-height: 1.8;
            color: var(--color-text-secondary);
        }

        .heroActions {
            margin-top: 26px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 16px;
        }

        .primaryButton {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            min-height: 48px;
            padding: 12px 18px;
            border-radius: 14px;
            background: var(--color-text-primary);
            color: var(--color-bg);
            text-decoration: none;
            font-size: 14px;
            font-weight: 800;
            border: 1px solid var(--color-text-primary);
            transition:
                transform 0.2s ease,
                opacity 0.2s ease;
        }

        .primaryButton:hover {
            text-decoration: none;
            transform: translateY(-1px);
            opacity: 0.92;
        }

        .miniInfo {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .miniInfo span {
            padding: 8px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            font-size: 13px;
        }

        .highlightsSection {
            margin-top: 28px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
        }

        .highlightCard {
            padding: 22px 18px;
            border-radius: 22px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease,
                background 0.2s ease;
        }

        .highlightCard:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: var(--color-surface-2);
        }

        .cardIcon {
            width: 46px;
            height: 46px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            margin-bottom: 14px;
            border: 1px solid var(--color-border-light);
            background: var(--color-bg);
            color: var(--color-text-primary);
        }

        .highlightCard h2 {
            font-size: 20px;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .highlightCard p {
            font-size: 14px;
            line-height: 1.75;
            color: var(--color-text-secondary);
        }

        .detailsSection {
            margin-top: 42px;
        }

        .sectionHeader {
            max-width: 860px;
            margin-bottom: 22px;
        }

        .sectionEyebrow {
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--color-text-muted);
            margin-bottom: 10px;
        }

        .sectionHeader h2 {
            font-size: clamp(28px, 4vw, 42px);
            line-height: 1.12;
            margin-bottom: 12px;
            color: var(--color-text-primary);
        }

        .sectionText {
            font-size: 15px;
            line-height: 1.8;
            color: var(--color-text-secondary);
        }

        .detailsGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
        }

        .detailCard {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            padding: 20px;
            border-radius: 22px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-surface-2) 100%
            );
        }

        .detailIcon {
            width: 48px;
            height: 48px;
            flex-shrink: 0;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border-light);
            background: var(--color-bg);
            color: var(--color-text-primary);
            font-size: 20px;
        }

        .detailContent h3 {
            font-size: 18px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .detailContent p {
            font-size: 14px;
            line-height: 1.75;
            color: var(--color-text-secondary);
        }

        .philosophySection {
            margin-top: 28px;
        }

        .philosophyCard {
            padding: 24px;
            border-radius: 24px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .philosophyCard h2 {
            font-size: 24px;
            margin-bottom: 12px;
            color: var(--color-text-primary);
        }

        .philosophyCard p {
            font-size: 15px;
            line-height: 1.8;
            color: var(--color-text-secondary);
        }

        .philosophyCard p + p {
            margin-top: 12px;
        }

        @media (max-width: 900px) {
            .highlightsSection,
            .detailsGrid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 640px) {
            padding: 20px 14px 44px;

            .heroSection {
                padding: 24px 16px;
                border-radius: 22px;
            }

            .heroText,
            .sectionText,
            .philosophyCard p,
            .detailContent p,
            .highlightCard p {
                font-size: 14px;
            }

            .highlightCard,
            .detailCard,
            .philosophyCard {
                border-radius: 18px;
            }

            .heroActions {
                align-items: stretch;
            }

            .primaryButton {
                width: 100%;
            }
        }
    `,
};
