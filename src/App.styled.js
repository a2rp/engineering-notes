import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background: var(--color-bg);
        color: var(--color-text-primary);
    `,

    StandaloneWrapper: styled.div`
        min-height: 100vh;
        background: var(--color-bg);
        color: var(--color-text-primary);
    `,

    Header: styled.header`
        height: 60px;
        overflow: hidden;
        background: var(--color-bg);
        border-bottom: 1px solid var(--color-border);
    `,

    Main: styled.main`
        height: 100%;
        overflow: hidden;
        position: relative;
        display: flex;
        background: transparent;

        .menuSlider {
            border-right: 1px solid var(--color-border);
            flex: 0 0 320px;
            width: 320px;
            position: relative;
            overflow: hidden;
            transition: 0.2s ease;
            transition-property: width, flex;
            background: linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-bg) 100%
            );

            @media (width<700px) {
                position: absolute;
                width: 320px;
                height: 100%;
                z-index: 20;
                box-shadow: 8px 0 30px var(--color-shadow);
            }

            .searchWrapper {
                height: 60px;
                width: 320px;
                padding: 6px;
                border-bottom: 1px solid var(--color-border);

                .searchInputHolder {
                    position: relative;
                    display: flex;
                    align-items: center;
                    height: 100%;
                }

                .searchIcon {
                    position: absolute;
                    left: 12px;
                    font-size: 16px;
                    color: var(--color-text-muted);
                    pointer-events: none;
                    opacity: 0.95;
                }

                .clearSearchButton {
                    position: absolute;
                    right: 8px;
                    width: 28px;
                    height: 28px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 999px;
                    background: var(--color-surface);
                    color: var(--color-text-secondary);
                    border: 1px solid var(--color-border);
                    cursor: pointer;
                    transition:
                        background 0.2s ease,
                        color 0.2s ease,
                        border-color 0.2s ease,
                        transform 0.2s ease;
                }

                .clearSearchButton:hover {
                    background: var(--color-surface-2);
                    color: var(--color-text-primary);
                    border-color: var(--color-border-light);
                }

                .clearSearchButton:active {
                    transform: scale(0.96);
                }

                input {
                    width: 100%;
                    height: 100%;
                    padding: 10px 40px 10px 38px;
                    background: var(--color-surface-2);
                    border: 1px solid var(--color-border);
                    border-radius: 8px;
                    color: var(--color-text-primary);
                    outline: none;
                }

                input::placeholder {
                    color: var(--color-text-muted);
                    opacity: 1;
                }

                input:hover {
                    border-color: var(--color-border-light);
                }

                input:focus {
                    border-color: var(--color-primary);
                    background: var(--color-surface);
                }
            }

            .menuSliderInner {
                height: calc(100% - 60px);
                overflow-y: auto;
                width: 320px;
                display: flex;
                flex-direction: column;
                background: transparent;
            }

            .menuLink {
                display: flex;
                align-items: flex-start;
                gap: 12px;
                padding: 14px 16px;
                text-decoration: none;
                color: var(--color-text-secondary);
                border-bottom: 1px solid var(--color-border);
                background: transparent;
                transition:
                    background 0.2s ease,
                    color 0.2s ease,
                    border-color 0.2s ease;
            }

            .menuLinkInitial {
                width: 36px;
                height: 36px;
                border-radius: 10px;
                flex-shrink: 0;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: var(--color-surface-2);
                border: 1px solid var(--color-border);
                color: var(--color-text-primary);
                font-size: 15px;
                font-weight: 900;
                line-height: 1;
            }

            .menuLinkContent {
                min-width: 0;
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .menuLinkText {
                color: inherit;
                line-height: 1.35;
                font-size: 14px;
                font-weight: 700;
            }

            .menuLinkMeta {
                color: var(--color-text-muted);
                font-size: 12px;
                line-height: 1.4;
            }

            .menuLink:hover {
                background: var(--color-surface-2);
                color: var(--color-text-primary);
            }

            .menuLink:hover .menuLinkInitial {
                background: var(--color-surface);
                border-color: var(--color-border-light);
            }

            .menuLink.active {
                background: var(--color-surface);
                color: var(--color-text-primary);
                border-bottom-color: var(--color-border-light);
            }

            .menuLink.active .menuLinkInitial {
                background: var(--color-text-primary);
                color: var(--color-bg);
                border-color: var(--color-text-primary);
            }

            &.hideMenuSlider {
                flex: 0 0 0;
                width: 0;
                border-right: 0;
            }

            &.displayMenuSlider {
                flex: 0 0 320px;
                width: 320px;
            }
        }

        .contentWrapper {
            width: 100%;
            overflow: hidden;
            background: transparent;

            .contentInnerWrapper {
                position: relative;
                height: 100%;
                overflow-y: scroll;
                background: transparent;

                .routesWrapper {
                    min-height: 100vh;
                }

                .footerWrapper {
                    flex-shrink: 0;
                    border-top: 1px solid var(--color-border);
                }
            }
        }

        .topicWrapper {
            scroll-margin-top: 84px;
        }

        .topicWrapper + .topicWrapper {
            margin-top: 6px;
        }

        .topicWrapper.a2rpFocusPulse {
            animation: a2rpFocusPulse 900ms ease;
        }

        @keyframes a2rpFocusPulse {
            0% {
                box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.14);
                border-radius: 18px;
            }
            50% {
                box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.08);
                border-radius: 18px;
            }
            100% {
                box-shadow: 0 0 0 0px rgba(255, 255, 255, 0);
                border-radius: 18px;
            }
        }

        html[data-theme="light"] & {
            .menuSlider {
                @media (width<700px) {
                    box-shadow: 8px 0 30px var(--color-shadow);
                }
            }

            .topicWrapper.a2rpFocusPulse {
                animation: a2rpFocusPulseLight 900ms ease;
            }

            @keyframes a2rpFocusPulseLight {
                0% {
                    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.12);
                    border-radius: 18px;
                }
                50% {
                    box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.07);
                    border-radius: 18px;
                }
                100% {
                    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0);
                    border-radius: 18px;
                }
            }
        }
    `,
};
