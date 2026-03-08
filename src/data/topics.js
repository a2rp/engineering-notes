import {
    FiCode,
    FiHash,
    FiLayers,
    FiBox,
    FiCpu,
    FiClock,
    FiRefreshCw,
    FiZap,
    FiDatabase,
    FiLink,
    FiAlertCircle,
    FiActivity,
    FiCommand,
    FiSettings,
    FiGlobe,
} from "react-icons/fi";

export const topics = [
    { title: "Variables: var let const", path: "/js-variables", icon: FiHash },
    { title: "Data Types", path: "/js-data-types", icon: FiLayers },
    { title: "Type Coercion", path: "/js-type-coercion", icon: FiRefreshCw },
    {
        title: "Truthy and Falsy Values",
        path: "/js-truthy-falsy",
        icon: FiActivity,
    },
    { title: "Equality: == vs ===", path: "/js-equality", icon: FiCommand },
    { title: "Scope Basics", path: "/js-scope", icon: FiBox },
    { title: "Hoisting", path: "/js-hoisting", icon: FiZap },

    {
        title: "Function Declarations",
        path: "/js-function-declarations",
        icon: FiCode,
    },
    {
        title: "Function Expressions",
        path: "/js-function-expressions",
        icon: FiCode,
    },
    { title: "Arrow Functions", path: "/js-arrow-functions", icon: FiCode },
    {
        title: "Default Parameters",
        path: "/js-default-parameters",
        icon: FiSettings,
    },
    { title: "Rest Parameters", path: "/js-rest-parameters", icon: FiSettings },
    { title: "Spread Operator", path: "/js-spread-operator", icon: FiSettings },
    {
        title: "Callback Functions",
        path: "/js-callback-functions",
        icon: FiRefreshCw,
    },

    { title: "Objects Basics", path: "/js-objects", icon: FiBox },
    {
        title: "Object Property Access",
        path: "/js-object-property-access",
        icon: FiBox,
    },
    {
        title: "Object Destructuring",
        path: "/js-object-destructuring",
        icon: FiBox,
    },
    { title: "Array Basics", path: "/js-arrays", icon: FiLayers },
    {
        title: "Array Methods: map filter reduce",
        path: "/js-array-methods",
        icon: FiLayers,
    },
    {
        title: "Array Destructuring",
        path: "/js-array-destructuring",
        icon: FiLayers,
    },
    { title: "Shallow vs Deep Copy", path: "/js-copy", icon: FiDatabase },

    { title: "Execution Context", path: "/js-execution-context", icon: FiCpu },
    { title: "Call Stack", path: "/js-call-stack", icon: FiCpu },
    { title: "Scope Chain", path: "/js-scope-chain", icon: FiCpu },
    { title: "Closures", path: "/js-closures", icon: FiLink },
    {
        title: "Lexical Environment",
        path: "/js-lexical-environment",
        icon: FiCpu,
    },

    { title: "setTimeout and setInterval", path: "/js-timers", icon: FiClock },
    { title: "Event Loop", path: "/js-event-loop", icon: FiClock },
    { title: "Callback Queue", path: "/js-callback-queue", icon: FiClock },
    {
        title: "Microtasks vs Macrotasks",
        path: "/js-task-queue",
        icon: FiClock,
    },
    { title: "Promises", path: "/js-promises", icon: FiRefreshCw },
    { title: "Async Await", path: "/js-async-await", icon: FiZap },

    { title: "DOM Tree", path: "/js-dom-tree", icon: FiLayers },
    { title: "DOM Selection", path: "/js-dom-selection", icon: FiLayers },
    { title: "Event Listeners", path: "/js-event-listeners", icon: FiActivity },
    {
        title: "Event Propagation",
        path: "/js-event-propagation",
        icon: FiActivity,
    },
    {
        title: "Event Delegation",
        path: "/js-event-delegation",
        icon: FiActivity,
    },
    { title: "DOM Manipulation", path: "/js-dom-manipulation", icon: FiLayers },

    { title: "ES Modules", path: "/js-modules", icon: FiBox },
    { title: "Import and Export", path: "/js-import-export", icon: FiBox },
    { title: "Default vs Named Export", path: "/js-export-types", icon: FiBox },
    { title: "Dynamic Imports", path: "/js-dynamic-import", icon: FiBox },

    {
        title: "Error Handling",
        path: "/js-error-handling",
        icon: FiAlertCircle,
    },
    { title: "Try Catch", path: "/js-try-catch", icon: FiAlertCircle },
    { title: "Throw", path: "/js-throw", icon: FiAlertCircle },
    { title: "Custom Errors", path: "/js-custom-errors", icon: FiAlertCircle },

    { title: "Prototypes", path: "/js-prototypes", icon: FiCpu },
    { title: "Prototype Chain", path: "/js-prototype-chain", icon: FiCpu },
    { title: "this Keyword", path: "/js-this-keyword", icon: FiCpu },
    { title: "bind call apply", path: "/js-bind-call-apply", icon: FiCpu },
    { title: "Classes", path: "/js-classes", icon: FiCpu },
    { title: "Inheritance", path: "/js-inheritance", icon: FiCpu },

    { title: "Debouncing", path: "/js-debouncing", icon: FiZap },
    { title: "Throttling", path: "/js-throttling", icon: FiZap },
    { title: "Memory Leaks", path: "/js-memory-leaks", icon: FiActivity },
    {
        title: "Garbage Collection",
        path: "/js-garbage-collection",
        icon: FiActivity,
    },

    {
        title: "Optional Chaining",
        path: "/js-optional-chaining",
        icon: FiSettings,
    },
    {
        title: "Nullish Coalescing",
        path: "/js-nullish-coalescing",
        icon: FiSettings,
    },
    { title: "Immutability", path: "/js-immutability", icon: FiSettings },
    {
        title: "Functional Patterns",
        path: "/js-functional-patterns",
        icon: FiSettings,
    },

    { title: "Fetch API", path: "/js-fetch-api", icon: FiGlobe },
    { title: "Local Storage", path: "/js-local-storage", icon: FiDatabase },
    { title: "Session Storage", path: "/js-session-storage", icon: FiDatabase },
    { title: "URL API", path: "/js-url-api", icon: FiGlobe },
    {
        title: "Intersection Observer",
        path: "/js-intersection-observer",
        icon: FiActivity,
    },
];
