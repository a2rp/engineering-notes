import{c as o,j as e,L as i,F as t,a,b as n,d as s,e as c,f as l,g as d,h as p}from"./index-zSgTrJtK.js";const h={Wrapper:o.section`
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
    `},x=[{id:1,icon:e.jsx(a,{}),title:"Study notes in one place",description:"This project is used to collect technical notes from different areas of engineering and keep them in one structured place for daily learning and revision."},{id:2,icon:e.jsx(n,{}),title:"Search and revisit quickly",description:"Instead of scrolling through random documents or forgotten files, topics can be searched and revisited quickly whenever a concept needs revision."},{id:3,icon:e.jsx(s,{}),title:"One topic, one route",description:"Each topic is treated like its own page so concepts remain isolated, easier to read, and cleaner to maintain as the notes collection grows."}],g=[{id:1,icon:e.jsx(c,{}),title:"What this project is",content:"Engineering Notes is a React based notes website built to keep technical learning material organized in a clean and searchable format. It acts like a personal engineering notebook where each topic can live on its own page and be updated over time."},{id:2,icon:e.jsx(l,{}),title:"Why it exists",content:"When learning technical topics, useful ideas often get scattered across videos, articles, browser tabs, screenshots, and temporary files. This project solves that mess by turning repeated learning into a structured note system that stays easy to browse and maintain."},{id:3,icon:e.jsx(d,{}),title:"How it is structured",content:"The application is built with React, Vite, React Router, styled-components, and react-icons. Topics are shown through route based pages, while the sidebar works as a quick navigation layer. This makes the project feel closer to a lightweight documentation site than a plain static page."},{id:4,icon:e.jsx(p,{}),title:"What kind of topics can live here",content:"This notes system can include frontend concepts, backend engineering, databases, networking, operating systems, DevOps, cloud basics, architecture ideas, security notes, and anything else that becomes useful during learning or interview preparation."}],u=()=>e.jsxs(h.Wrapper,{className:"topicWrapper",children:[e.jsxs("section",{className:"heroSection",children:[e.jsx("div",{className:"heroBadge",children:"Engineering Notes"}),e.jsx("h1",{children:"A focused place to write, organize, and revisit technical notes."}),e.jsx("p",{className:"heroText",children:"This project is a personal React based notes website created to store technical concepts in a clean route based format. It is meant for learning, revision, and building a growing engineering knowledge base over time."}),e.jsxs("div",{className:"heroActions",children:[e.jsxs(i,{to:"/event-loop",className:"primaryButton",children:[e.jsx("span",{children:"Start Reading Notes"}),e.jsx(t,{})]}),e.jsxs("div",{className:"miniInfo",children:[e.jsx("span",{children:"Route based"}),e.jsx("span",{children:"Searchable"}),e.jsx("span",{children:"Expandable"})]})]})]}),e.jsx("section",{className:"highlightsSection",children:x.map(r=>e.jsxs("article",{className:"highlightCard",children:[e.jsx("div",{className:"cardIcon",children:r.icon}),e.jsx("h2",{children:r.title}),e.jsx("p",{children:r.description})]},r.id))}),e.jsxs("section",{className:"detailsSection",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("p",{className:"sectionEyebrow",children:"About the project"}),e.jsx("h2",{children:"Built like a personal engineering notebook"}),e.jsx("p",{className:"sectionText",children:"The goal is not to make a flashy content platform. The goal is to build something practical, readable, and easy to extend whenever a new concept appears during study."})]}),e.jsx("div",{className:"detailsGrid",children:g.map(r=>e.jsxs("article",{className:"detailCard",children:[e.jsx("div",{className:"detailIcon",children:r.icon}),e.jsxs("div",{className:"detailContent",children:[e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.content})]})]},r.id))})]}),e.jsx("section",{className:"philosophySection",children:e.jsxs("div",{className:"philosophyCard",children:[e.jsx("h2",{children:"Notes philosophy"}),e.jsx("p",{children:"These notes are primarily written for personal learning. Some pages may feel like working notes rather than polished articles, and that is intentional. The purpose is to capture understanding quickly, refine it over time, and create a long term reference library that remains useful."}),e.jsx("p",{children:"In plain human terms: less chaos, more clarity, fewer lost concepts floating around like confused electrons."})]})})]});export{u as default};
