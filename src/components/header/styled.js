import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        /* height: 64px; */
        /* border-bottom: 1px solid var(--color-border); */
        /* background: color-mix(
            in srgb,
            var(--color-bg) 94%,
            var(--color-surface)
        ); */
        position: sticky;
        top: 0;
        z-index: 50;
        /* backdrop-filter: blur(6px); */
        width: 100%;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                radial-gradient(
                    700px 200px at 15% 0%,
                    color-mix(in srgb, var(--color-primary) 8%, transparent),
                    transparent 70%
                ),
                radial-gradient(
                    600px 200px at 90% 0%,
                    color-mix(in srgb, var(--color-accent) 8%, transparent),
                    transparent 70%
                );
            opacity: 0.7;
        }
    `,

    Main: styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        position: relative;
        z-index: 1;

        .leftSide {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .toggleButtonLogoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .toggleButton {
            cursor: pointer;
        }

        .logoNameWrapper {
            display: flex;
            gap: 5px;

            .logoWrapper {
                height: 48px;
                width: 48px;
                border-radius: 12px;
                position: relative;
                overflow: hidden;
                /* padding: 15px; */
                background: #000;
                border: 1px solid var(--color-border);

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: contain;
                    display: block;
                    transition: opacity 180ms ease;
                    border-radius: inherit;
                }

                .logoSkeleton {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        90deg,
                        var(--color-surface-2),
                        var(--color-border),
                        var(--color-surface-2)
                    );
                    opacity: 0.6;
                }
            }

            .nameWrapper {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;

                .title {
                    font-weight: 800;
                    color: var(--color-text-primary);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .subTitle {
                    color: var(--color-text-muted);
                    font-size: 12px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                @media (width < 640px) {
                    .subTitle {
                        display: none;
                    }
                }

                @media (width < 420px) {
                    display: none;
                }
            }
        }

        .pillRow {
            display: flex;
            align-items: center;
            gap: 8px;

            @media (width < 860px) {
                display: none;
            }
        }

        .stat {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 700;

            .sIcon {
                color: var(--color-primary);
                display: inline-flex;
            }

            .sIcon svg {
                width: 14px;
                height: 14px;
            }
        }

        .rightSide {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 9px 12px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-text-primary);

            .icon {
                font-size: 18px;
                color: var(--color-primary);
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }

            .label {
                font-size: 13px;
                font-weight: 700;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `,
};
