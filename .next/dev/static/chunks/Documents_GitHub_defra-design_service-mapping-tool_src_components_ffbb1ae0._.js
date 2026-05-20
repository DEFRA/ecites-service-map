(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/@base-ui/react/esm/button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
            destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
            icon: "size-8",
            "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
            "icon-lg": "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/@base-ui/react/esm/dialog/index.parts.js [app-client] (ecmascript) <export * as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
"use client";
;
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Root, {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_c = Sheet;
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Trigger, {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
_c1 = SheetTrigger;
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
_c2 = SheetClose;
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Portal, {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
_c3 = SheetPortal;
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Backdrop, {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c4 = SheetOverlay;
function SheetContent({ className, children, side = "right", showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Popup, {
                "data-slot": "sheet-content",
                "data-side": side,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed z-50 flex flex-col gap-4 bg-background bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                        "data-slot": "sheet-close",
                        render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            className: "absolute top-3 right-3",
                            size: "icon-sm"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, void 0),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c5 = SheetContent;
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-0.5 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = SheetHeader;
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = SheetFooter;
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title, {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base font-medium text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_c8 = SheetTitle;
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Description, {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_c9 = SheetDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Sheet");
__turbopack_context__.k.register(_c1, "SheetTrigger");
__turbopack_context__.k.register(_c2, "SheetClose");
__turbopack_context__.k.register(_c3, "SheetPortal");
__turbopack_context__.k.register(_c4, "SheetOverlay");
__turbopack_context__.k.register(_c5, "SheetContent");
__turbopack_context__.k.register(_c6, "SheetHeader");
__turbopack_context__.k.register(_c7, "SheetFooter");
__turbopack_context__.k.register(_c8, "SheetTitle");
__turbopack_context__.k.register(_c9, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LibrarySheet",
    ()=>LibrarySheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$library$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/store/library-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/store/blueprint-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$blueprint$2d$title$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/blueprint-title.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$blueprint$2d$levels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/blueprint-levels.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }) + ' · ' + d.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit'
    });
}
function LibrarySheet({ open, onClose }) {
    _s();
    const entries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$library$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"])({
        "LibrarySheet.useLibraryStore[entries]": (s)=>s.entries
    }["LibrarySheet.useLibraryStore[entries]"]);
    const hydrateLibrary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$library$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"])({
        "LibrarySheet.useLibraryStore[hydrateLibrary]": (s)=>s.hydrate
    }["LibrarySheet.useLibraryStore[hydrateLibrary]"]);
    const saveToLibrary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$library$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"])({
        "LibrarySheet.useLibraryStore[saveToLibrary]": (s)=>s.save
    }["LibrarySheet.useLibraryStore[saveToLibrary]"]);
    const removeFromLibrary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$library$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"])({
        "LibrarySheet.useLibraryStore[removeFromLibrary]": (s)=>s.remove
    }["LibrarySheet.useLibraryStore[removeFromLibrary]"]);
    const blueprint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "LibrarySheet.useBlueprintStore[blueprint]": (s)=>s.blueprint
    }["LibrarySheet.useBlueprintStore[blueprint]"]);
    const liveDoc = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"].getState().getLiveDocumentSnapshot();
    const persistableDocument = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"].getState().getPersistableDocument();
    const loadBlueprint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "LibrarySheet.useBlueprintStore[loadBlueprint]": (s)=>s.loadBlueprint
    }["LibrarySheet.useBlueprintStore[loadBlueprint]"]);
    const [savedId, setSavedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [confirmDeleteId, setConfirmDeleteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LibrarySheet.useEffect": ()=>{
            hydrateLibrary();
        }
    }["LibrarySheet.useEffect"], [
        hydrateLibrary
    ]);
    const handleSave = ()=>{
        const entry = saveToLibrary(persistableDocument);
        setSavedId(entry.id);
        setTimeout(()=>setSavedId(null), 2000);
    };
    const handleOpen = (entry)=>{
        loadBlueprint(entry.state);
        onClose();
    };
    const handleDelete = (id)=>{
        if (confirmDeleteId === id) {
            removeFromLibrary(id);
            setConfirmDeleteId(null);
        } else {
            setConfirmDeleteId(id);
            setTimeout(()=>setConfirmDeleteId(null), 3000);
        }
    };
    const isCurrentlySaved = entries.some((e)=>e.id === persistableDocument.blueprint.id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
        open: open,
        onOpenChange: (v)=>{
            if (!v) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
            side: "right",
            className: "w-[400px] sm:max-w-[400px] flex flex-col p-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                    className: "border-b border-neutral-100 px-5 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                    className: "h-4 w-4 text-neutral-500"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                    className: "text-base font-semibold text-neutral-900",
                                    children: "Service Design Library"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetDescription"], {
                            className: "text-[12px] text-neutral-500",
                            children: "Browse and manage your saved service blueprints and user journeys."
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto px-5 py-3",
                    children: entries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-3 py-12 text-center text-neutral-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "h-8 w-8 opacity-30"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px]",
                                children: [
                                    "No saved blueprints yet.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                        lineNumber: 93,
                                        columnNumber: 66
                                    }, this),
                                    "Save the current one to get started."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                        lineNumber: 91,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex flex-col gap-2",
                        children: entries.map((entry)=>{
                            const sessionRootId = liveDoc.rootBlueprintId ?? liveDoc.blueprint.id;
                            const isSameDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$blueprint$2d$levels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCanonicalRootBlueprintId"])(entry.state) === sessionRootId;
                            const isActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$blueprint$2d$levels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isActiveLibraryEntry"])(liveDoc, entry.state, entry.id);
                            const listTitle = isActive ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$blueprint$2d$title$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blueprintTitleLabel"])(blueprint.serviceName) : entry.serviceName;
                            const levelState = isSameDocument ? liveDoc : entry.state;
                            const levelTargetId = entry.id;
                            const entryLevel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$blueprint$2d$levels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLibraryEntryJourneyLevel"])(levelState, levelTargetId);
                            const levelPill = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$blueprint$2d$levels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIBRARY_LEVEL_PILL"][entryLevel];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: `group relative rounded-xl border bg-white p-4 transition-colors ${isActive ? 'border-blue-200 bg-blue-50/50' : 'border-neutral-200 hover:border-neutral-300'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "truncate text-[13px] font-semibold text-neutral-900",
                                                        children: listTitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-0.5 text-[11px] text-neutral-400",
                                                        children: [
                                                            "Saved ",
                                                            formatDate(entry.savedAt)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex flex-wrap items-center gap-1.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-flex max-w-full rounded-md px-2.5 py-0.5 text-[10px] font-semibold leading-snug ${levelPill.className}`,
                                                            children: levelPill.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                                lineNumber: 127,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex shrink-0 items-center gap-1",
                                                children: [
                                                    !isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleOpen(entry),
                                                        title: "Open blueprint",
                                                        className: "inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[12px] font-medium text-blue-600 transition-colors hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 29
                                                            }, this),
                                                            "Open"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 27
                                                    }, this),
                                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-medium text-blue-600",
                                                        children: "Active"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDelete(entry.id),
                                                        title: confirmDeleteId === entry.id ? 'Click again to confirm' : 'Delete from library',
                                                        className: `inline-flex h-7 w-7 items-center justify-center rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ${confirmDeleteId === entry.id ? 'bg-red-50 text-red-600' : 'text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                                lineNumber: 143,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                        lineNumber: 126,
                                        columnNumber: 21
                                    }, this),
                                    confirmDeleteId === entry.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[11px] text-red-500",
                                        children: "Click delete again to confirm removal."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                        lineNumber: 173,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, entry.id, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                                lineNumber: 118,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(LibrarySheet, "98aiQT+aZ6+HaffGSh3gT9mXAB4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$library$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$library$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$library$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$library$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"]
    ];
});
_c = LibrarySheet;
var _c;
__turbopack_context__.k.register(_c, "LibrarySheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoardToolbar",
    ()=>BoardToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-client] (ecmascript) <export default as Undo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo2$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/redo-2.js [app-client] (ecmascript) <export default as Redo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$share$2d$payload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/share-payload.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/store/blueprint-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$LibrarySheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LibrarySheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/lane-definitions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$library$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/store/library-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$export$2d$markdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/export-markdown.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$blueprint$2d$title$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/blueprint-title.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const SHOW_EXAMPLE_TREE_MENU_ITEM = false;
/** Blank Goal → Outcome → Opportunity tree (“New opportunity tree” in UI). Hidden from menu; store action remains available. */ const SHOW_NEW_OPPORTUNITY_TREE_MENU_ITEM = false;
function countContextualUserOpportunities(opportunities, cards) {
    const currentCardIds = new Set(cards.map((card)=>card.id));
    return opportunities.filter((opportunity)=>{
        if (opportunity.origin === 'user' || opportunity.origin === 'generated') return true;
        return opportunity.sourceCardIds.some((id)=>currentCardIds.has(id));
    }).length;
}
function isEditableTarget(target) {
    if (!(target instanceof HTMLElement)) return false;
    const tagName = target.tagName.toLowerCase();
    return tagName === 'input' || tagName === 'textarea' || tagName === 'select' || target.isContentEditable;
}
/** Compare serialized snapshots for library “dirty” checks; never throws (e.g. BigInt or circular refs). */ function librarySnapshotsDiffer(a, b) {
    try {
        return JSON.stringify(a) !== JSON.stringify(b);
    } catch  {
        return true;
    }
}
function BoardToolbar({ onImport } = {}) {
    _s();
    const blueprint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[blueprint]": (s)=>s.blueprint
    }["BoardToolbar.useBlueprintStore[blueprint]"]);
    const rootDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[rootDocument]": (s)=>s.rootDocument
    }["BoardToolbar.useBlueprintStore[rootDocument]"]);
    const stages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[stages]": (s)=>s.stages
    }["BoardToolbar.useBlueprintStore[stages]"]);
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[steps]": (s)=>s.steps
    }["BoardToolbar.useBlueprintStore[steps]"]);
    const lanes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[lanes]": (s)=>s.lanes
    }["BoardToolbar.useBlueprintStore[lanes]"]);
    const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[cards]": (s)=>s.cards
    }["BoardToolbar.useBlueprintStore[cards]"]);
    const childBlueprints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[childBlueprints]": (s)=>s.childBlueprints
    }["BoardToolbar.useBlueprintStore[childBlueprints]"]);
    const activeBlueprintId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[activeBlueprintId]": (s)=>s.activeBlueprintId
    }["BoardToolbar.useBlueprintStore[activeBlueprintId]"]);
    const rootBlueprintId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[rootBlueprintId]": (s)=>s.rootBlueprintId
    }["BoardToolbar.useBlueprintStore[rootBlueprintId]"]);
    const storyboardImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[storyboardImages]": (s)=>s.storyboardImages
    }["BoardToolbar.useBlueprintStore[storyboardImages]"]);
    const storyboardVisible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[storyboardVisible]": (s)=>s.storyboardVisible
    }["BoardToolbar.useBlueprintStore[storyboardVisible]"]);
    const storyboardCollapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[storyboardCollapsed]": (s)=>s.storyboardCollapsed
    }["BoardToolbar.useBlueprintStore[storyboardCollapsed]"]);
    const cardLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[cardLinks]": (s)=>s.cardLinks
    }["BoardToolbar.useBlueprintStore[cardLinks]"]);
    const evidence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[evidence]": (s)=>s.evidence
    }["BoardToolbar.useBlueprintStore[evidence]"]);
    const traceabilityCounters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[traceabilityCounters]": (s)=>s.traceabilityCounters
    }["BoardToolbar.useBlueprintStore[traceabilityCounters]"]);
    const setServiceName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[setServiceName]": (s)=>s.setServiceName
    }["BoardToolbar.useBlueprintStore[setServiceName]"]);
    const addStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[addStage]": (s)=>s.addStage
    }["BoardToolbar.useBlueprintStore[addStage]"]);
    const toggleLane = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[toggleLane]": (s)=>s.toggleLane
    }["BoardToolbar.useBlueprintStore[toggleLane]"]);
    const toggleStoryboardVisible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[toggleStoryboardVisible]": (s)=>s.toggleStoryboardVisible
    }["BoardToolbar.useBlueprintStore[toggleStoryboardVisible]"]);
    const newBlueprint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[newBlueprint]": (s)=>s.newBlueprint
    }["BoardToolbar.useBlueprintStore[newBlueprint]"]);
    const undo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[undo]": (s)=>s.undo
    }["BoardToolbar.useBlueprintStore[undo]"]);
    const redo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[redo]": (s)=>s.redo
    }["BoardToolbar.useBlueprintStore[redo]"]);
    const canUndo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[canUndo]": (s)=>s.canUndo
    }["BoardToolbar.useBlueprintStore[canUndo]"]);
    const canRedo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[canRedo]": (s)=>s.canRedo
    }["BoardToolbar.useBlueprintStore[canRedo]"]);
    const opportunities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[opportunities]": (s)=>s.opportunities
    }["BoardToolbar.useBlueprintStore[opportunities]"]);
    const solutions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[solutions]": (s)=>s.solutions
    }["BoardToolbar.useBlueprintStore[solutions]"]);
    const assumptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[assumptions]": (s)=>s.assumptions
    }["BoardToolbar.useBlueprintStore[assumptions]"]);
    const strategicGoals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[strategicGoals]": (s)=>s.strategicGoals
    }["BoardToolbar.useBlueprintStore[strategicGoals]"]);
    const outcomes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[outcomes]": (s)=>s.outcomes
    }["BoardToolbar.useBlueprintStore[outcomes]"]);
    const stepLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[stepLinks]": (s)=>s.stepLinks
    }["BoardToolbar.useBlueprintStore[stepLinks]"]);
    const requirements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[requirements]": (s)=>s.requirements
    }["BoardToolbar.useBlueprintStore[requirements]"]);
    const apiContracts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[apiContracts]": (s)=>s.apiContracts
    }["BoardToolbar.useBlueprintStore[apiContracts]"]);
    const uiScaffolds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[uiScaffolds]": (s)=>s.uiScaffolds
    }["BoardToolbar.useBlueprintStore[uiScaffolds]"]);
    const readOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BoardToolbar.useBlueprintStore[readOnly]": (s)=>s.readOnly
    }["BoardToolbar.useBlueprintStore[readOnly]"]);
    const entries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$library$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"])({
        "BoardToolbar.useLibraryStore[entries]": (s)=>s.entries
    }["BoardToolbar.useLibraryStore[entries]"]);
    const hydrateLibrary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$library$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"])({
        "BoardToolbar.useLibraryStore[hydrateLibrary]": (s)=>s.hydrate
    }["BoardToolbar.useLibraryStore[hydrateLibrary]"]);
    const saveToLibrary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$library$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"])({
        "BoardToolbar.useLibraryStore[saveToLibrary]": (s)=>s.save
    }["BoardToolbar.useLibraryStore[saveToLibrary]"]);
    const isChildView = Boolean(rootDocument && activeBlueprintId !== rootBlueprintId);
    const levelLabel = 'Lifecycle';
    const isL2Mode = false;
    const isL3Mode = false;
    // Show only the lanes relevant to the current view level.
    const dropdownLanes = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : lanes.filter((lane)=>!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L1_HIDDEN_LANE_KEYS"].has(lane.key));
    const [editingName, setEditingName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "BoardToolbar.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$blueprint$2d$title$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blueprintTitleLabel"])(blueprint.serviceName)
    }["BoardToolbar.useState"]);
    const [showLanes, setShowLanes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLibrary, setShowLibrary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shareStatus, setShareStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [shareError, setShareError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [shareNotice, setShareNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [saveStatus, setSaveStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const nameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lanesTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const menuTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const persistableDocument = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"].getState().getPersistableDocument();
    const savedEntry = entries.find((e)=>e.id === persistableDocument.blueprint.id);
    const hasUnsavedLibraryChanges = !savedEntry || librarySnapshotsDiffer(savedEntry.state, persistableDocument);
    const contextualOpportunityCount = countContextualUserOpportunities(opportunities, cards);
    const saveName = ()=>{
        const trimmed = name.trim();
        if (trimmed) {
            setServiceName(trimmed);
        } else {
            setName((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$blueprint$2d$title$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blueprintTitleLabel"])(blueprint.serviceName));
        }
        setEditingName(false);
    };
    const handleExportMarkdown = ()=>{
        const state = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"].getState();
        const md = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$export$2d$markdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportMarkdown"])(state);
        const blob = new Blob([
            md
        ], {
            type: 'text/markdown'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${state.blueprint.serviceName.replace(/\s+/g, '_').toLowerCase()}_blueprint.md`;
        a.click();
        URL.revokeObjectURL(url);
    };
    const handleQuickSaveToLibrary = ()=>{
        saveToLibrary(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"].getState().getPersistableDocument());
        setSaveStatus('saved');
    };
    const copyShareUrl = async (url)=>{
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(url);
            return;
        }
        const textarea = document.createElement('textarea');
        textarea.value = url;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    };
    const handleShare = async ()=>{
        setShareStatus('loading');
        setShareError('');
        setShareNotice('');
        try {
            if (readOnly) {
                await copyShareUrl(window.location.href);
                setShareStatus('copied');
                return;
            }
            const store = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"].getState();
            const existingShareId = store.blueprint.publishedShareId;
            const { id, storyboardImagesStripped, shareTextTrimmed } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$share$2d$payload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publishOrRefreshShare"])(store.getPersistableDocument(), existingShareId);
            if (!existingShareId || id !== existingShareId) {
                store.setPublishedShareId(id);
            }
            const shareUrl = `${window.location.origin}/view/${encodeURIComponent(id)}`;
            await copyShareUrl(shareUrl);
            if (storyboardImagesStripped || shareTextTrimmed) {
                const parts = [];
                if (storyboardImagesStripped) parts.push('storyboard images were not included');
                if (shareTextTrimmed) parts.push('some text was shortened');
                setShareNotice(`${parts.join('; ')} (share size limit).`);
            }
            setShareStatus('copied');
        } catch (err) {
            setShareError(err instanceof Error ? err.message : 'Could not create a share link.');
            setShareStatus('error');
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BoardToolbar.useEffect": ()=>{
            hydrateLibrary();
        }
    }["BoardToolbar.useEffect"], [
        hydrateLibrary
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BoardToolbar.useEffect": ()=>{
            if (saveStatus !== 'saved') return;
            const timeout = window.setTimeout({
                "BoardToolbar.useEffect.timeout": ()=>setSaveStatus('idle')
            }["BoardToolbar.useEffect.timeout"], 2000);
            return ({
                "BoardToolbar.useEffect": ()=>window.clearTimeout(timeout)
            })["BoardToolbar.useEffect"];
        }
    }["BoardToolbar.useEffect"], [
        saveStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BoardToolbar.useEffect": ()=>{
            if (shareStatus !== 'copied' && shareStatus !== 'error') return;
            const timeout = window.setTimeout({
                "BoardToolbar.useEffect.timeout": ()=>{
                    setShareStatus('idle');
                    setShareError('');
                    setShareNotice('');
                }
            }["BoardToolbar.useEffect.timeout"], 3500);
            return ({
                "BoardToolbar.useEffect": ()=>window.clearTimeout(timeout)
            })["BoardToolbar.useEffect"];
        }
    }["BoardToolbar.useEffect"], [
        shareStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BoardToolbar.useEffect": ()=>{
            const handleKeyDown = {
                "BoardToolbar.useEffect.handleKeyDown": (event)=>{
                    const isMac = navigator.platform.toUpperCase().includes('MAC');
                    const hasModifier = isMac ? event.metaKey : event.ctrlKey;
                    if (!hasModifier || event.altKey) return;
                    if (isEditableTarget(event.target)) return;
                    if (event.key.toLowerCase() === 'z' && event.shiftKey) {
                        if (!canRedo) return;
                        event.preventDefault();
                        redo();
                        return;
                    }
                    if (event.key.toLowerCase() === 'z') {
                        if (!canUndo) return;
                        event.preventDefault();
                        undo();
                    }
                }
            }["BoardToolbar.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "BoardToolbar.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["BoardToolbar.useEffect"];
        }
    }["BoardToolbar.useEffect"], [
        canRedo,
        canUndo,
        redo,
        undo
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-40 flex items-center gap-3 border-b border-neutral-200 bg-white px-5 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 flex-1 items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 flex-1 flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-fit rounded-full bg-[#E6F3EB] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#008938]",
                                    children: levelLabel
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "m-0 min-w-0 w-full text-xl font-bold leading-tight",
                                    children: readOnly ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block w-full max-w-full break-words px-1 py-0.5 text-xl font-bold text-neutral-900",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$blueprint$2d$title$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blueprintTitleLabel"])(blueprint.serviceName)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, this) : editingName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: nameRef,
                                        value: name,
                                        onChange: (e)=>setName(e.target.value),
                                        onKeyDown: (e)=>{
                                            if (e.key === 'Enter') saveName();
                                            if (e.key === 'Escape') {
                                                setName((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$blueprint$2d$title$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blueprintTitleLabel"])(blueprint.serviceName));
                                                setEditingName(false);
                                            }
                                        },
                                        onBlur: saveName,
                                        autoFocus: true,
                                        "aria-label": "Blueprint name",
                                        className: "w-full min-w-0 rounded border border-neutral-300 px-2 py-1 text-xl font-bold text-neutral-900 outline-none focus:border-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                        lineNumber: 282,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setName((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$blueprint$2d$title$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blueprintTitleLabel"])(blueprint.serviceName));
                                            setEditingName(true);
                                        },
                                        "aria-label": `Blueprint name: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$blueprint$2d$title$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blueprintTitleLabel"])(blueprint.serviceName)}. Click to edit.`,
                                        className: "block w-full max-w-full text-left break-words rounded px-1 py-0.5 text-xl font-bold text-neutral-900 transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$blueprint$2d$title$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blueprintTitleLabel"])(blueprint.serviceName)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                        lineNumber: 299,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center gap-1.5",
                        children: [
                            !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mr-1 flex h-[34px] items-center rounded-lg border border-neutral-200 bg-white p-0 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: undo,
                                        disabled: !canUndo,
                                        title: "Undo (Cmd/Ctrl+Z)",
                                        "aria-label": "Undo",
                                        className: "inline-flex h-[34px] w-[34px] items-center justify-center rounded-l-lg text-neutral-600 transition-colors hover:bg-neutral-50 disabled:text-neutral-300 disabled:hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__["Undo2"], {
                                            "aria-hidden": "true",
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                        lineNumber: 318,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: redo,
                                        disabled: !canRedo,
                                        title: "Redo (Shift+Cmd/Ctrl+Z)",
                                        "aria-label": "Redo",
                                        className: "inline-flex h-[34px] w-[34px] items-center justify-center rounded-r-lg text-neutral-600 transition-colors hover:bg-neutral-50 disabled:text-neutral-300 disabled:hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo2$3e$__["Redo2"], {
                                            "aria-hidden": "true",
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                lineNumber: 317,
                                columnNumber: 13
                            }, this),
                            !readOnly && (hasUnsavedLibraryChanges || saveStatus === 'saved') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleQuickSaveToLibrary,
                                className: "inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-[13px] font-medium text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                children: [
                                    saveStatus === 'saved' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        "aria-hidden": "true",
                                        className: "h-3.5 w-3.5 text-emerald-600"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                        lineNumber: 345,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        "aria-hidden": "true",
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                        lineNumber: 347,
                                        columnNumber: 17
                                    }, this),
                                    saveStatus === 'saved' ? 'Saved' : 'Save'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this),
                            !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>addStage(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'New stage'),
                                className: "inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-[13px] font-medium text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        "aria-hidden": "true",
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Stage'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        ref: lanesTriggerRef,
                                        onClick: ()=>setShowLanes(!showLanes),
                                        "aria-expanded": showLanes,
                                        "aria-haspopup": "menu",
                                        "aria-label": "Toggle lanes visibility",
                                        className: "inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-[13px] font-medium text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                "aria-hidden": "true",
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                lineNumber: 371,
                                                columnNumber: 15
                                            }, this),
                                            " Lanes",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                "aria-hidden": "true",
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                lineNumber: 372,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this),
                                    showLanes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fixed inset-0 z-30",
                                                onClick: ()=>setShowLanes(false)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                lineNumber: 376,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                role: "menu",
                                                "aria-label": "Lanes visibility",
                                                className: "absolute right-0 top-full z-40 mt-1 w-56 rounded-xl border border-neutral-200 bg-white p-2 shadow-lg",
                                                onKeyDown: (e)=>{
                                                    if (e.key === 'Escape') {
                                                        setShowLanes(false);
                                                        lanesTriggerRef.current?.focus();
                                                    }
                                                    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                                                        e.preventDefault();
                                                        const items = Array.from(e.currentTarget.querySelectorAll('[role="menuitem"]'));
                                                        const idx = items.indexOf(document.activeElement);
                                                        const next = e.key === 'ArrowDown' ? (idx + 1) % items.length : (idx - 1 + items.length) % items.length;
                                                        items[next]?.focus();
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        role: "menuitem",
                                                        onClick: toggleStoryboardVisible,
                                                        className: "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                                        children: [
                                                            storyboardVisible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                "aria-hidden": "true",
                                                                className: "h-3.5 w-3.5 text-neutral-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                lineNumber: 401,
                                                                columnNumber: 23
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                                "aria-hidden": "true",
                                                                className: "h-3.5 w-3.5 text-neutral-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                                                "aria-hidden": "true",
                                                                className: "h-3.5 w-3.5 text-neutral-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                lineNumber: 405,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('font-medium', !storyboardVisible && 'text-neutral-500'),
                                                                children: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Storyboard'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                lineNumber: 406,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "my-1 h-px bg-neutral-100"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 19
                                                    }, this),
                                                    dropdownLanes.map((lane)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            role: "menuitem",
                                                            onClick: ()=>toggleLane(lane.key),
                                                            className: "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                                            children: [
                                                                lane.visible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                    "aria-hidden": "true",
                                                                    className: "h-3.5 w-3.5 text-neutral-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                    lineNumber: 419,
                                                                    columnNumber: 25
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                                    "aria-hidden": "true",
                                                                    className: "h-3.5 w-3.5 text-neutral-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                    lineNumber: 421,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('font-medium', !lane.visible && 'text-neutral-500'),
                                                                    children: isL3Mode && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L3_LANE_TITLE_OVERRIDES"][lane.key] || isL2Mode && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L2_LANE_TITLE_OVERRIDES"][lane.key] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLaneTitle"])(lane.key)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                    lineNumber: 423,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, lane.key, true, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                lineNumber: 377,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                lineNumber: 362,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        ref: menuTriggerRef,
                                        onClick: ()=>setShowMenu(!showMenu),
                                        "aria-expanded": showMenu,
                                        "aria-haspopup": "menu",
                                        "aria-label": "More actions",
                                        className: "inline-flex h-[34px] items-center gap-1 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-[13px] font-medium text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            "aria-hidden": "true",
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                            lineNumber: 442,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this),
                                    showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fixed inset-0 z-30",
                                                onClick: ()=>setShowMenu(false)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                lineNumber: 446,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                role: "menu",
                                                "aria-label": "More actions",
                                                className: "absolute right-0 top-full z-40 mt-1 w-48 rounded-xl border border-neutral-200 bg-white p-1.5 shadow-lg",
                                                onKeyDown: (e)=>{
                                                    if (e.key === 'Escape') {
                                                        setShowMenu(false);
                                                        menuTriggerRef.current?.focus();
                                                    }
                                                    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                                                        e.preventDefault();
                                                        const items = Array.from(e.currentTarget.querySelectorAll('[role="menuitem"]'));
                                                        const idx = items.indexOf(document.activeElement);
                                                        const next = e.key === 'ArrowDown' ? (idx + 1) % items.length : (idx - 1 + items.length) % items.length;
                                                        items[next]?.focus();
                                                    }
                                                },
                                                children: [
                                                    !readOnly && onImport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                role: "menuitem",
                                                                onClick: ()=>{
                                                                    onImport();
                                                                    setShowMenu(false);
                                                                },
                                                                className: "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] font-medium text-violet-700 transition-colors hover:bg-violet-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                        "aria-hidden": "true",
                                                                        className: "h-3.5 w-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                        lineNumber: 475,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Import"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                lineNumber: 467,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "my-1 h-px bg-neutral-100"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                lineNumber: 477,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        role: "menuitem",
                                                        onClick: ()=>{
                                                            setShowLibrary(true);
                                                            setShowMenu(false);
                                                        },
                                                        className: "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                "aria-hidden": "true",
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                lineNumber: 489,
                                                                columnNumber: 23
                                                            }, this),
                                                            " Library"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 21
                                                    }, this),
                                                    !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "my-1 h-px bg-neutral-100"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                lineNumber: 494,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                role: "menuitem",
                                                                onClick: ()=>{
                                                                    newBlueprint();
                                                                    setShowMenu(false);
                                                                },
                                                                className: "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        "aria-hidden": "true",
                                                                        className: "h-3.5 w-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                        lineNumber: 503,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " New blueprint"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                lineNumber: 495,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        role: "menuitem",
                                                        onClick: ()=>{
                                                            handleExportMarkdown();
                                                            setShowMenu(false);
                                                        },
                                                        className: "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                "aria-hidden": "true",
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                lineNumber: 515,
                                                                columnNumber: 21
                                                            }, this),
                                                            " Export Markdown"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        role: "menuitem",
                                                        onClick: ()=>{
                                                            void handleShare();
                                                        },
                                                        disabled: shareStatus === 'loading',
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400', shareStatus === 'copied' ? 'bg-emerald-50 text-emerald-700' : shareStatus === 'error' ? 'bg-red-50 text-red-700' : 'text-neutral-700 hover:bg-neutral-50', shareStatus === 'loading' && 'cursor-wait text-neutral-500'),
                                                        title: shareStatus === 'error' ? shareError : shareStatus === 'copied' && shareNotice ? shareNotice : undefined,
                                                        children: [
                                                            shareStatus === 'copied' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                "aria-hidden": "true",
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                lineNumber: 541,
                                                                columnNumber: 23
                                                            }, this) : shareStatus === 'error' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                "aria-hidden": "true",
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                lineNumber: 543,
                                                                columnNumber: 23
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                                "aria-hidden": "true",
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                                lineNumber: 545,
                                                                columnNumber: 23
                                                            }, this),
                                                            shareStatus === 'loading' ? 'Creating link...' : shareStatus === 'copied' ? 'Link copied' : shareStatus === 'error' ? 'Share failed' : 'Copy share link'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                        lineNumber: 517,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                                lineNumber: 447,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                                lineNumber: 433,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$LibrarySheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LibrarySheet"], {
                open: showLibrary,
                onClose: ()=>setShowLibrary(false)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx",
                lineNumber: 562,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(BoardToolbar, "FtW2W7na6bazRdhXhb2JaBZml78=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$library$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$library$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$library$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"]
    ];
});
_c = BoardToolbar;
var _c;
__turbopack_context__.k.register(_c, "BoardToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LaneLabel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LANE_COLOR_TOKENS",
    ()=>LANE_COLOR_TOKENS,
    "LaneLabel",
    ()=>LaneLabel,
    "getCardColorTokens",
    ()=>getCardColorTokens,
    "getLaneColor",
    ()=>getLaneColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/user-cog.js [app-client] (ecmascript) <export default as UserCog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js [app-client] (ecmascript) <export default as MousePointerClick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2d$backup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatabaseBackup$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/database-backup.js [app-client] (ecmascript) <export default as DatabaseBackup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2d$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatabaseZap$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/database-zap.js [app-client] (ecmascript) <export default as DatabaseZap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$milestone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Milestone$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/milestone.js [app-client] (ecmascript) <export default as Milestone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cog$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/cog.js [app-client] (ecmascript) <export default as Cog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/life-buoy.js [app-client] (ecmascript) <export default as LifeBuoy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-client] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/lane-definitions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const ICON_MAP = {
    actor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    user_journey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$milestone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Milestone$3e$__["Milestone"],
    user_action_event: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"],
    user_need: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
    pain_point: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
    frontstage_touchpoint: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"],
    activity: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"],
    backstage_process: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
    behaviour_change: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
    success_measure: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
    motivation: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
    ability: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cog$3e$__["Cog"],
    prompts: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
    system: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
    policy_intent: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"],
    business_rule: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
    data_input: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2d$backup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatabaseBackup$3e$__["DatabaseBackup"],
    data_output: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2d$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatabaseZap$3e$__["DatabaseZap"],
    backstage_actor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__["UserCog"],
    shared_services: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"],
    product_teams: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    opportunities: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
    ideas: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
    // L1 Macro lanes
    policy_reform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
    policy_outcome: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"],
    user_outcome: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
    operational_outcome: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cog$3e$__["Cog"],
    insights: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
    impact_of_pain_points: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
    performance_indicators: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
    opportunities_lane: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
    third_parties_involved: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    support_system: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__["LifeBuoy"]
};
const LANE_COLOR_TOKENS = {
    user_journey: {
        bg: 'bg-[#E6F3EB]',
        text: 'text-[#008938]',
        border: 'border-[#B6DEC6]'
    },
    actor: {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        border: 'border-blue-200'
    },
    user_action_event: {
        bg: 'bg-violet-50',
        text: 'text-violet-700',
        border: 'border-violet-200'
    },
    user_need: {
        bg: 'bg-amber-50',
        text: 'text-amber-700',
        border: 'border-amber-200'
    },
    pain_point: {
        bg: 'bg-rose-50',
        text: 'text-rose-700',
        border: 'border-rose-200'
    },
    frontstage_touchpoint: {
        bg: 'bg-emerald-50',
        text: 'text-emerald-700',
        border: 'border-emerald-200'
    },
    backstage_process: {
        bg: 'bg-slate-50',
        text: 'text-slate-700',
        border: 'border-slate-200'
    },
    description: {
        bg: 'bg-stone-50',
        text: 'text-stone-700',
        border: 'border-stone-200'
    },
    behaviour_change: {
        bg: 'bg-fuchsia-50',
        text: 'text-fuchsia-700',
        border: 'border-fuchsia-200'
    },
    success_measure: {
        bg: 'bg-lime-50',
        text: 'text-lime-700',
        border: 'border-lime-200'
    },
    motivation: {
        bg: 'bg-orange-50',
        text: 'text-orange-700',
        border: 'border-orange-200'
    },
    ability: {
        bg: 'bg-sky-50',
        text: 'text-sky-700',
        border: 'border-sky-200'
    },
    prompts: {
        bg: 'bg-yellow-50',
        text: 'text-yellow-700',
        border: 'border-yellow-200'
    },
    system: {
        bg: 'bg-cyan-50',
        text: 'text-cyan-700',
        border: 'border-cyan-200'
    },
    policy_intent: {
        bg: 'bg-indigo-50',
        text: 'text-indigo-700',
        border: 'border-indigo-200'
    },
    business_rule: {
        bg: 'bg-[#F6EFE3]',
        text: 'text-[#8A6A2F]',
        border: 'border-[#E7D8B5]'
    },
    data_input: {
        bg: 'bg-teal-50',
        text: 'text-teal-700',
        border: 'border-teal-200'
    },
    data_output: {
        bg: 'bg-purple-50',
        text: 'text-purple-700',
        border: 'border-purple-200'
    },
    backstage_actor: {
        bg: 'bg-zinc-50',
        text: 'text-zinc-700',
        border: 'border-zinc-200'
    },
    shared_services: {
        bg: 'bg-pink-50',
        text: 'text-pink-700',
        border: 'border-pink-200'
    },
    product_teams: {
        bg: 'bg-[#E6F3EB]',
        text: 'text-[#008938]',
        border: 'border-[#B6DEC6]'
    },
    opportunities: {
        bg: 'bg-emerald-50',
        text: 'text-emerald-700',
        border: 'border-emerald-200'
    },
    ideas: {
        bg: 'bg-yellow-50',
        text: 'text-yellow-700',
        border: 'border-yellow-200'
    },
    // L1 Macro lanes
    policy_reform: {
        bg: 'bg-indigo-50',
        text: 'text-indigo-700',
        border: 'border-indigo-200'
    },
    policy_outcome: {
        bg: 'bg-violet-50',
        text: 'text-violet-700',
        border: 'border-violet-200'
    },
    user_outcome: {
        bg: 'bg-amber-50',
        text: 'text-amber-700',
        border: 'border-amber-200'
    },
    operational_outcome: {
        bg: 'bg-slate-50',
        text: 'text-slate-700',
        border: 'border-slate-200'
    },
    insights: {
        bg: 'bg-sky-50',
        text: 'text-sky-700',
        border: 'border-sky-200'
    },
    impact_of_pain_points: {
        bg: 'bg-orange-50',
        text: 'text-orange-700',
        border: 'border-orange-200'
    },
    performance_indicators: {
        bg: 'bg-teal-50',
        text: 'text-teal-700',
        border: 'border-teal-200'
    },
    opportunities_lane: {
        bg: 'bg-emerald-50',
        text: 'text-emerald-700',
        border: 'border-emerald-200'
    },
    third_parties_involved: {
        bg: 'bg-cyan-50',
        text: 'text-cyan-700',
        border: 'border-cyan-200'
    },
    support_system: {
        bg: 'bg-purple-50',
        text: 'text-purple-700',
        border: 'border-purple-200'
    }
};
const DEFAULT_TOKEN = {
    bg: 'bg-neutral-50',
    text: 'text-neutral-600',
    border: 'border-neutral-200'
};
const SECONDARY_ACTOR_TOKEN = {
    bg: 'bg-neutral-100',
    text: 'text-neutral-700',
    border: 'border-neutral-300'
};
function LaneLabel({ lane, collapsed = false, onToggleCollapsed, className, titleOverride }) {
    const Icon = ICON_MAP[lane.key];
    const token = LANE_COLOR_TOKENS[lane.key] || DEFAULT_TOKEN;
    const ChevronIcon = collapsed ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"];
    const laneTitle = titleOverride ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLaneTitle"])(lane.key);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex w-full items-center gap-2 overflow-hidden rounded-xl border transition-colors', collapsed ? 'px-3 py-1.5' : 'px-3 py-2', token.bg, token.text, token.border, className),
        children: [
            Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                "aria-hidden": "true",
                className: "h-3.5 w-3.5 shrink-0 opacity-70"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LaneLabel.tsx",
                lineNumber: 144,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "min-w-0 flex-1 text-[13px] font-semibold leading-tight tracking-tight",
                children: laneTitle
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LaneLabel.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            onToggleCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onToggleCollapsed,
                "aria-label": collapsed ? `Expand ${laneTitle}` : `Collapse ${laneTitle}`,
                "aria-expanded": !collapsed,
                className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-transparent text-current/80 transition-colors hover:bg-white/60 hover:text-current focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronIcon, {
                    "aria-hidden": "true",
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LaneLabel.tsx",
                    lineNumber: 156,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LaneLabel.tsx",
                lineNumber: 149,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LaneLabel.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_c = LaneLabel;
function getLaneColor(key) {
    const t = LANE_COLOR_TOKENS[key] || DEFAULT_TOKEN;
    return `${t.bg} ${t.text} ${t.border}`;
}
function getCardColorTokens(laneKey, tags = []) {
    if (laneKey === 'actor' && tags.includes('secondary')) {
        return SECONDARY_ACTOR_TOKEN;
    }
    return LANE_COLOR_TOKENS[laneKey] || DEFAULT_TOKEN;
}
var _c;
__turbopack_context__.k.register(_c, "LaneLabel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardTagEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardTagEditor",
    ()=>CardTagEditor,
    "getReusableTagSuggestions",
    ()=>getReusableTagSuggestions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function normalizeTag(tag) {
    return tag.trim().replace(/\s+/g, ' ');
}
function getReusableTagSuggestions(cards) {
    return Array.from(new Set(cards.filter((card)=>card.sourceFile === '' && card.sourceSheet === '' && card.sourceRow === null && card.sourceRef === '').flatMap((card)=>card.tags))).sort((a, b)=>a.localeCompare(b));
}
function CardTagEditor({ value, suggestions, onChange, placeholder = 'Add a tag', className }) {
    _s();
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const filteredSuggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CardTagEditor.useMemo[filteredSuggestions]": ()=>{
            const query = draft.trim().toLowerCase();
            return suggestions.filter({
                "CardTagEditor.useMemo[filteredSuggestions]": (tag)=>!value.includes(tag)
            }["CardTagEditor.useMemo[filteredSuggestions]"]).filter({
                "CardTagEditor.useMemo[filteredSuggestions]": (tag)=>query ? tag.toLowerCase().includes(query) : true
            }["CardTagEditor.useMemo[filteredSuggestions]"]).slice(0, 6);
        }
    }["CardTagEditor.useMemo[filteredSuggestions]"], [
        draft,
        suggestions,
        value
    ]);
    const addTag = (rawTag)=>{
        const nextTag = normalizeTag(rawTag);
        if (!nextTag || value.includes(nextTag)) {
            setDraft('');
            return;
        }
        onChange([
            ...value,
            nextTag
        ]);
        setDraft('');
    };
    const removeTag = (tagToRemove)=>{
        onChange(value.filter((tag)=>tag !== tagToRemove));
    };
    const handleKeyDown = (event)=>{
        if (event.key === 'Enter' || event.key === ',') {
            event.preventDefault();
            addTag(draft);
        }
        if (event.key === 'Backspace' && draft.length === 0 && value.length > 0) {
            event.preventDefault();
            removeTag(value[value.length - 1]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('space-y-2', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-1.5 rounded-xl border border-neutral-200 bg-white/80 px-2.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]",
                children: [
                    value.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-600",
                            children: [
                                tag,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>removeTag(tag),
                                    className: "rounded-full text-neutral-400 transition-colors hover:text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                    "aria-label": `Remove tag ${tag}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardTagEditor.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardTagEditor.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, tag, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardTagEditor.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-[120px] flex-1 items-center gap-1 text-neutral-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "h-3.5 w-3.5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardTagEditor.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: draft,
                                onChange: (event)=>setDraft(event.target.value),
                                onKeyDown: handleKeyDown,
                                className: "min-w-0 flex-1 border-0 bg-transparent p-0 text-[12px] text-neutral-700 outline-none placeholder:text-neutral-400",
                                placeholder: placeholder,
                                "aria-label": "Add tag"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardTagEditor.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardTagEditor.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardTagEditor.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            filteredSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-1.5",
                children: filteredSuggestions.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>addTag(tag),
                        className: "rounded-full border border-neutral-200 bg-white px-2 py-1 text-[11px] font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                        children: tag
                    }, tag, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardTagEditor.tsx",
                        lineNumber: 122,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardTagEditor.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardTagEditor.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(CardTagEditor, "vKHF1d0TJnOWd4jT7WHCeddylh0=");
_c = CardTagEditor;
var _c;
__turbopack_context__.k.register(_c, "CardTagEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlueprintCard",
    ()=>BlueprintCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-client] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/store/blueprint-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$LaneLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LaneLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$CardTagEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardTagEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/traceability/display.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function BlueprintCard({ card, isDragOverlay }) {
    _s();
    const updateCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BlueprintCard.useBlueprintStore[updateCard]": (s)=>s.updateCard
    }["BlueprintCard.useBlueprintStore[updateCard]"]);
    const deleteCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BlueprintCard.useBlueprintStore[deleteCard]": (s)=>s.deleteCard
    }["BlueprintCard.useBlueprintStore[deleteCard]"]);
    const reorderCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BlueprintCard.useBlueprintStore[reorderCard]": (s)=>s.reorderCard
    }["BlueprintCard.useBlueprintStore[reorderCard]"]);
    const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BlueprintCard.useBlueprintStore[cards]": (s)=>s.cards
    }["BlueprintCard.useBlueprintStore[cards]"]);
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BlueprintCard.useBlueprintStore[steps]": (s)=>s.steps
    }["BlueprintCard.useBlueprintStore[steps]"]);
    const moveCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BlueprintCard.useBlueprintStore[moveCard]": (s)=>s.moveCard
    }["BlueprintCard.useBlueprintStore[moveCard]"]);
    const selectCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BlueprintCard.useBlueprintStore[selectCard]": (s)=>s.selectCard
    }["BlueprintCard.useBlueprintStore[selectCard]"]);
    const selectedCardId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BlueprintCard.useBlueprintStore[selectedCardId]": (s)=>s.selectedCardId
    }["BlueprintCard.useBlueprintStore[selectedCardId]"]);
    const readOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "BlueprintCard.useBlueprintStore[readOnly]": (s)=>s.readOnly
    }["BlueprintCard.useBlueprintStore[readOnly]"]);
    const isSelected = selectedCardId === card.id;
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(card.title);
    const [tags, setTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(card.tags);
    const [showActions, setShowActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSortable"])({
        id: card.id,
        data: {
            type: 'card',
            card
        },
        disabled: editing || readOnly
    });
    const style = {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.4 : 1
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlueprintCard.useEffect": ()=>{
            if (editing && titleRef.current) {
                titleRef.current.focus();
                titleRef.current.select();
            }
        }
    }["BlueprintCard.useEffect"], [
        editing
    ]);
    const save = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BlueprintCard.useCallback[save]": ()=>{
            const trimmed = title.trim();
            if (trimmed) {
                updateCard(card.id, {
                    title: trimmed,
                    tags
                });
            }
            setEditing(false);
        }
    }["BlueprintCard.useCallback[save]"], [
        title,
        card.id,
        tags,
        updateCard,
        setEditing
    ]);
    const cancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BlueprintCard.useCallback[cancel]": ()=>{
            setTitle(card.title);
            setTags(card.tags);
            setEditing(false);
        }
    }["BlueprintCard.useCallback[cancel]"], [
        card.title,
        card.tags,
        setEditing
    ]);
    const availableTags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BlueprintCard.useMemo[availableTags]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$CardTagEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReusableTagSuggestions"])(cards)
    }["BlueprintCard.useMemo[availableTags]"], [
        cards
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BlueprintCard.useCallback[handleKeyDown]": (e)=>{
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                save();
            }
            if (e.key === 'Escape') {
                cancel();
            }
        }
    }["BlueprintCard.useCallback[handleKeyDown]"], [
        save,
        cancel
    ]);
    // Cell siblings for keyboard reorder
    const cellCards = cards.filter((c)=>c.stepId === card.stepId && c.laneKey === card.laneKey).sort((a, b)=>a.order - b.order);
    const cellIdx = cellCards.findIndex((c)=>c.id === card.id);
    const canMoveUp = cellIdx > 0;
    const canMoveDown = cellIdx < cellCards.length - 1;
    // Adjacent steps for keyboard move left/right
    const stageSteps = steps.filter((s)=>s.stageId === card.stageId).sort((a, b)=>a.order - b.order);
    const stepIdx = stageSteps.findIndex((s)=>s.id === card.stepId);
    const canMoveLeft = stepIdx > 0;
    const canMoveRight = stepIdx < stageSteps.length - 1;
    if (editing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-board-card": true,
            ref: setNodeRef,
            style: style,
            className: "rounded-lg border border-blue-200 bg-white p-2.5 shadow-sm ring-1 ring-blue-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    ref: titleRef,
                    value: title,
                    onChange: (e)=>setTitle(e.target.value),
                    onKeyDown: handleKeyDown,
                    "aria-label": "Card title",
                    className: "min-h-[4.5rem] w-full resize-y rounded border-0 bg-transparent p-0 text-sm font-medium leading-snug text-neutral-800 outline-none placeholder:text-neutral-400",
                    placeholder: "Card title",
                    rows: 4
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$CardTagEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTagEditor"], {
                    value: tags,
                    suggestions: availableTags,
                    onChange: setTags,
                    placeholder: "Add or reuse tags",
                    className: "mt-2"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 flex items-center gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: save,
                            className: "inline-flex items-center gap-1 rounded-md bg-neutral-900 px-2 py-1 text-[11px] font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                            "aria-label": "Save card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    "aria-hidden": "true",
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                " Save"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: cancel,
                            className: "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium text-neutral-500 transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                            "aria-label": "Cancel editing",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>deleteCard(card.id),
                            className: "ml-auto inline-flex items-center rounded-md p-1 text-neutral-400 transition-colors hover:bg-red-50 hover:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400",
                            "aria-label": "Delete card",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                "aria-hidden": "true",
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, this);
    }
    const laneToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$LaneLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardColorTokens"])(card.laneKey, card.tags);
    const displayTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripRollupsForCardDisplay"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripTraceabilityForDisplay"])(card.title));
    const displayBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripRollupsForCardDisplay"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripTraceabilityForDisplay"])(card.body));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-board-card": true,
        ref: isDragOverlay ? undefined : setNodeRef,
        style: isDragOverlay ? undefined : style,
        onClick: (e)=>{
            if (isDragOverlay) return;
            e.stopPropagation();
            selectCard(isSelected ? null : card.id);
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group relative rounded-lg border p-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]', laneToken.bg, laneToken.border, isSelected && 'ring-2 ring-blue-400 ring-offset-1', isDragOverlay && 'rotate-1 shadow-lg'),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-1.5",
            children: [
                !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "mt-0.5 shrink-0 cursor-grab touch-none rounded p-0.5 text-neutral-300 opacity-0 transition-opacity hover:text-neutral-500 focus:opacity-100 group-hover:opacity-100 active:cursor-grabbing",
                    "aria-label": "Drag to reorder",
                    ...attributes,
                    ...listeners,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                        "aria-hidden": "true",
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                        lineNumber: 193,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                    lineNumber: 187,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium leading-snug text-neutral-800",
                            children: displayTitle
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        displayBody && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-[13px] leading-snug text-neutral-500",
                            children: displayBody
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, this),
                        card.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1.5 flex flex-wrap gap-1",
                            children: card.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block rounded-full bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-500",
                                    children: tag
                                }, tag, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                                    lineNumber: 204,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this),
                !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex shrink-0 flex-col items-center gap-0.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setEditing(true),
                            className: "rounded p-0.5 text-neutral-300 opacity-0 transition-opacity hover:text-neutral-600 focus:opacity-100 group-hover:opacity-100",
                            "aria-label": "Edit card",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                "aria-hidden": "true",
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowActions(!showActions),
                                    className: "rounded p-0.5 text-neutral-300 opacity-0 transition-opacity hover:text-neutral-600 focus:opacity-100 group-hover:opacity-100",
                                    "aria-label": "Card actions",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                        "aria-hidden": "true",
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                showActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fixed inset-0 z-30",
                                            onClick: ()=>setShowActions(false)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                                            lineNumber: 235,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-0 top-full z-40 mt-1 w-36 rounded-lg border border-neutral-200 bg-white p-1 shadow-lg",
                                            children: [
                                                canMoveUp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        reorderCard(card.id, cellIdx - 1);
                                                        setShowActions(false);
                                                    },
                                                    className: "flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-[12px] text-neutral-600 hover:bg-neutral-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                            "aria-hidden": "true",
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Move up"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 21
                                                }, this),
                                                canMoveDown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        reorderCard(card.id, cellIdx + 1);
                                                        setShowActions(false);
                                                    },
                                                    className: "flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-[12px] text-neutral-600 hover:bg-neutral-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            "aria-hidden": "true",
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Move down"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 21
                                                }, this),
                                                canMoveLeft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        const targetStep = stageSteps[stepIdx - 1];
                                                        moveCard(card.id, targetStep.id, card.laneKey, 0);
                                                        setShowActions(false);
                                                    },
                                                    className: "flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-[12px] text-neutral-600 hover:bg-neutral-50",
                                                    children: "← Move left"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 21
                                                }, this),
                                                canMoveRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        const targetStep = stageSteps[stepIdx + 1];
                                                        moveCard(card.id, targetStep.id, card.laneKey, 0);
                                                        setShowActions(false);
                                                    },
                                                    className: "flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-[12px] text-neutral-600 hover:bg-neutral-50",
                                                    children: "→ Move right"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "my-1 border-t border-neutral-100"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        deleteCard(card.id);
                                                        setShowActions(false);
                                                    },
                                                    className: "flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-[12px] text-red-600 hover:bg-red-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            "aria-hidden": "true",
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Delete"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
            lineNumber: 185,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
_s(BlueprintCard, "czesqjf91I4LlLDeoQeXng78ALY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSortable"]
    ];
});
_c = BlueprintCard;
var _c;
__turbopack_context__.k.register(_c, "BlueprintCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CellArea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CellArea",
    ()=>CellArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/store/blueprint-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$BlueprintCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$CardTagEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardTagEditor.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function CellArea({ stepId, laneKey, cards }) {
    _s();
    const addCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "CellArea.useBlueprintStore[addCard]": (s)=>s.addCard
    }["CellArea.useBlueprintStore[addCard]"]);
    const allCards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "CellArea.useBlueprintStore[allCards]": (s)=>s.cards
    }["CellArea.useBlueprintStore[allCards]"]);
    const readOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "CellArea.useBlueprintStore[readOnly]": (s)=>s.readOnly
    }["CellArea.useBlueprintStore[readOnly]"]);
    const [adding, setAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newTitle, setNewTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newTags, setNewTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const availableTags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CellArea.useMemo[availableTags]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$CardTagEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReusableTagSuggestions"])(allCards)
    }["CellArea.useMemo[availableTags]"], [
        allCards
    ]);
    const droppableId = `${stepId}::${laneKey}`;
    const { setNodeRef, isOver } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDroppable"])({
        id: droppableId,
        data: {
            type: 'cell',
            stepId,
            laneKey
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CellArea.useEffect": ()=>{
            if (adding && inputRef.current) {
                inputRef.current.focus();
            }
        }
    }["CellArea.useEffect"], [
        adding
    ]);
    const handleSave = ()=>{
        const trimmed = newTitle.trim();
        if (trimmed) {
            addCard(stepId, laneKey, trimmed, '', newTags);
        }
        setNewTitle('');
        setNewTags([]);
        setAdding(false);
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSave();
        }
        if (e.key === 'Escape') {
            setNewTitle('');
            setNewTags([]);
            setAdding(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group min-h-[52px] rounded-lg p-1.5 transition-colors', isOver && 'bg-blue-50/60 ring-1 ring-blue-200/50'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortableContext"], {
                items: cards.map((c)=>c.id),
                strategy: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verticalListSortingStrategy"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1.5",
                    children: cards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$BlueprintCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlueprintCard"], {
                            card: card
                        }, card.id, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CellArea.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CellArea.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CellArea.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            adding && !readOnly ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-1.5 rounded-lg border border-blue-200 bg-white p-2 shadow-sm', cards.length === 0 && 'mt-0'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ref: inputRef,
                        value: newTitle,
                        onChange: (e)=>setNewTitle(e.target.value),
                        onKeyDown: handleKeyDown,
                        onBlur: handleSave,
                        "aria-label": "New card title",
                        className: "w-full resize-none rounded border-0 bg-transparent p-0 text-[13px] font-medium leading-snug text-neutral-800 outline-none placeholder:text-neutral-400",
                        placeholder: "Card title…",
                        rows: 2
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CellArea.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$CardTagEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTagEditor"], {
                        value: newTags,
                        suggestions: availableTags,
                        onChange: setNewTags,
                        placeholder: "Add or reuse tags",
                        className: "mt-2"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CellArea.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1.5 flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onMouseDown: (e)=>e.preventDefault(),
                                onClick: handleSave,
                                className: "rounded-md bg-neutral-900 px-2 py-1 text-[11px] font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                children: "Add"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CellArea.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onMouseDown: (e)=>e.preventDefault(),
                                onClick: ()=>{
                                    setNewTitle('');
                                    setNewTags([]);
                                    setAdding(false);
                                },
                                className: "rounded-md px-2 py-1 text-[11px] font-medium text-neutral-500 transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CellArea.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CellArea.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CellArea.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this) : !readOnly ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setAdding(true),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex w-full items-center gap-1 rounded-lg border border-dashed border-transparent px-2 py-1.5 text-[12px] text-neutral-400 opacity-0 transition-[opacity,color,border-color] group-hover:opacity-100 hover:border-neutral-300 hover:text-neutral-500 focus:opacity-100 focus:outline-none focus-visible:border-blue-300 focus-visible:text-blue-500 focus-visible:opacity-100', isOver && 'opacity-100', cards.length === 0 && 'mt-0', cards.length > 0 && 'mt-1'),
                "aria-label": `Add card to ${laneKey}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        "aria-hidden": "true",
                        className: "h-3 w-3"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CellArea.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Add card"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CellArea.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CellArea.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CellArea.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(CellArea, "sOob9ZMVcbP9wh90cbshBt1cbLg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDroppable"]
    ];
});
_c = CellArea;
var _c;
__turbopack_context__.k.register(_c, "CellArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StageHeader",
    ()=>StageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/store/blueprint-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/traceability/display.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function StageHeader({ stage, stepCount, stepWidth, isChildLevel = false }) {
    _s();
    const entityLabel = isChildLevel ? 'step' : 'stage';
    const entityLabelCap = isChildLevel ? 'Step' : 'Stage';
    const updateStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "StageHeader.useBlueprintStore[updateStage]": (s)=>s.updateStage
    }["StageHeader.useBlueprintStore[updateStage]"]);
    const deleteStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "StageHeader.useBlueprintStore[deleteStage]": (s)=>s.deleteStage
    }["StageHeader.useBlueprintStore[deleteStage]"]);
    const insertStageAfter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "StageHeader.useBlueprintStore[insertStageAfter]": (s)=>s.insertStageAfter
    }["StageHeader.useBlueprintStore[insertStageAfter]"]);
    const reorderStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "StageHeader.useBlueprintStore[reorderStage]": (s)=>s.reorderStage
    }["StageHeader.useBlueprintStore[reorderStage]"]);
    const stages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "StageHeader.useBlueprintStore[stages]": (s)=>s.stages
    }["StageHeader.useBlueprintStore[stages]"]);
    const readOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "StageHeader.useBlueprintStore[readOnly]": (s)=>s.readOnly
    }["StageHeader.useBlueprintStore[readOnly]"]);
    const [editingTitle, setEditingTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(stage.title);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sorted = [
        ...stages
    ].sort((a, b)=>a.order - b.order);
    const stageIdx = sorted.findIndex((s)=>s.id === stage.id);
    const canMoveLeft = stageIdx > 0;
    const canMoveRight = stageIdx < sorted.length - 1;
    const displayTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripTraceabilityForDisplay"])(stage.title);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StageHeader.useEffect": ()=>{
            if (editingTitle && titleRef.current) {
                titleRef.current.focus();
                titleRef.current.select();
            }
        }
    }["StageHeader.useEffect"], [
        editingTitle
    ]);
    const saveTitle = ()=>{
        const trimmed = title.trim();
        if (trimmed) {
            updateStage(stage.id, {
                title: trimmed
            });
        } else {
            setTitle(stage.title);
        }
        setEditingTitle(false);
    };
    const toolbarClass = 'pointer-events-none absolute inset-x-0 top-full z-30 flex flex-wrap items-center gap-0.5 border-x border-b border-neutral-200 bg-white px-2 py-1.5 shadow-sm opacity-0 transition-opacity duration-150 group-hover/stageheader:pointer-events-auto group-hover/stageheader:opacity-100 group-focus-within/stageheader:pointer-events-auto group-focus-within/stageheader:opacity-100';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group/stageheader relative min-h-[56px] min-w-0 shrink-0 self-stretch border-b border-r border-neutral-200 bg-white px-4 py-1.5",
        style: {
            width: stepCount * stepWidth
        },
        children: [
            editingTitle && !readOnly ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: titleRef,
                value: title,
                onChange: (e)=>setTitle(e.target.value),
                onKeyDown: (e)=>{
                    if (e.key === 'Enter') saveTitle();
                    if (e.key === 'Escape') {
                        setTitle(stage.title);
                        setEditingTitle(false);
                    }
                },
                onBlur: saveTitle,
                "aria-label": `${entityLabelCap} title`,
                className: "mt-0.5 w-full max-w-full rounded border border-neutral-300 bg-white px-2.5 py-1 text-[17px] font-semibold text-neutral-900 outline-none focus:border-blue-400"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageHeader.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "break-words text-[17px] font-bold leading-snug tracking-tight text-neutral-900",
                children: displayTitle || stage.title
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageHeader.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this),
            !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: toolbarClass,
                role: "toolbar",
                "aria-label": `Actions for ${entityLabel} ${stage.title}`,
                children: [
                    canMoveLeft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>reorderStage(stage.id, stageIdx - 1),
                        className: "rounded p-0.5 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                        "aria-label": `Move ${entityLabel} left`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            "aria-hidden": "true",
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageHeader.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageHeader.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this),
                    canMoveRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>reorderStage(stage.id, stageIdx + 1),
                        className: "rounded p-0.5 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                        "aria-label": `Move ${entityLabel} right`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            "aria-hidden": "true",
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageHeader.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageHeader.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            setTitle(stage.title);
                            setEditingTitle(true);
                        },
                        className: "rounded p-0.5 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                        "aria-label": `Edit ${entityLabel} title`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                            "aria-hidden": "true",
                            className: "h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageHeader.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageHeader.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: (e)=>{
                            insertStageAfter(stage.id, `New ${entityLabel}`);
                            e.currentTarget.blur();
                        },
                        className: "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[12px] font-medium text-neutral-600 transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                        "aria-label": `Insert ${entityLabel} after this one`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                "aria-hidden": "true",
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageHeader.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            " ",
                            entityLabelCap
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageHeader.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            const confirmMsg = isChildLevel ? `Delete step "${stage.title}" and all its cards?` : `Delete stage "${stage.title}" and all its steps and cards?`;
                            if (confirm(confirmMsg)) {
                                deleteStage(stage.id);
                            }
                        },
                        className: "rounded p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400",
                        "aria-label": `Delete ${entityLabel}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            "aria-hidden": "true",
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageHeader.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageHeader.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageHeader.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageHeader.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(StageHeader, "JfKQfa89vP0SrBmFj1Kl7cG/ubY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"]
    ];
});
_c = StageHeader;
var _c;
__turbopack_context__.k.register(_c, "StageHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageDescription.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StageDescription",
    ()=>StageDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/store/blueprint-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function StageDescription({ stage, width }) {
    _s();
    const updateStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "StageDescription.useBlueprintStore[updateStage]": (s)=>s.updateStage
    }["StageDescription.useBlueprintStore[updateStage]"]);
    const readOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "StageDescription.useBlueprintStore[readOnly]": (s)=>s.readOnly
    }["StageDescription.useBlueprintStore[readOnly]"]);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(stage.description ?? '');
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StageDescription.useEffect": ()=>{
            if (editing && inputRef.current) {
                inputRef.current.focus();
                if (stage.description) inputRef.current.select();
            }
        }
    }["StageDescription.useEffect"], [
        editing,
        stage.description
    ]);
    const save = ()=>{
        updateStage(stage.id, {
            description: description.trim()
        });
        setEditing(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group flex min-h-[60px] shrink-0 items-start gap-1 border-b border-r border-neutral-200 bg-white px-3 py-2",
        style: {
            width
        },
        children: editing && !readOnly ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            ref: inputRef,
            value: description,
            onChange: (e)=>setDescription(e.target.value),
            onKeyDown: (e)=>{
                if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) save();
                if (e.key === 'Escape') {
                    setDescription(stage.description ?? '');
                    setEditing(false);
                }
            },
            onBlur: save,
            rows: 3,
            "aria-label": "Stage description",
            className: "w-full rounded border border-neutral-300 bg-white px-2 py-1 text-[12px] leading-snug text-neutral-700 outline-none focus:border-blue-400",
            placeholder: "Stage description…"
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageDescription.tsx",
            lineNumber: 38,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "min-w-0 flex-1 whitespace-pre-wrap text-[12px] leading-snug text-neutral-600",
                    children: stage.description || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-neutral-300",
                        children: "No description"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageDescription.tsx",
                        lineNumber: 59,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageDescription.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this),
                !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setDescription(stage.description ?? '');
                        setEditing(true);
                    },
                    className: "shrink-0 rounded p-0.5 text-neutral-300 opacity-0 transition-opacity hover:text-neutral-500 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                    "aria-label": "Edit stage description",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                        "aria-hidden": "true",
                        className: "h-3 w-3"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageDescription.tsx",
                        lineNumber: 71,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageDescription.tsx",
                    lineNumber: 63,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageDescription.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(StageDescription, "CZ1IlZN0ZIhi1IvHYwbpsEcqfdw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"]
    ];
});
_c = StageDescription;
var _c;
__turbopack_context__.k.register(_c, "StageDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepHeader",
    ()=>StepHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/store/blueprint-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function StepHeader({ step, stepWidth, canMoveLeft, canMoveRight }) {
    _s();
    const updateStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "StepHeader.useBlueprintStore[updateStep]": (s)=>s.updateStep
    }["StepHeader.useBlueprintStore[updateStep]"]);
    const deleteStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "StepHeader.useBlueprintStore[deleteStep]": (s)=>s.deleteStep
    }["StepHeader.useBlueprintStore[deleteStep]"]);
    const reorderStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "StepHeader.useBlueprintStore[reorderStep]": (s)=>s.reorderStep
    }["StepHeader.useBlueprintStore[reorderStep]"]);
    const readOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "StepHeader.useBlueprintStore[readOnly]": (s)=>s.readOnly
    }["StepHeader.useBlueprintStore[readOnly]"]);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(step.title);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StepHeader.useEffect": ()=>{
            if (editing && inputRef.current) {
                inputRef.current.focus();
                inputRef.current.select();
            }
        }
    }["StepHeader.useEffect"], [
        editing
    ]);
    const save = ()=>{
        const trimmed = title.trim();
        if (trimmed) {
            updateStep(step.id, {
                title: trimmed
            });
        } else {
            setTitle(step.title);
        }
        setEditing(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group flex min-h-[48px] shrink-0 items-center bg-white px-3 py-1",
        style: {
            width: stepWidth
        },
        children: editing && !readOnly ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            ref: inputRef,
            value: title,
            onChange: (e)=>setTitle(e.target.value),
            onKeyDown: (e)=>{
                if (e.key === 'Enter') save();
                if (e.key === 'Escape') {
                    setTitle(step.title);
                    setEditing(false);
                }
            },
            onBlur: save,
            "aria-label": "Step title",
            className: "w-full rounded border border-neutral-300 bg-white px-2.5 py-1 text-center text-[15px] font-semibold text-neutral-800 outline-none focus:border-blue-400"
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx",
            lineNumber: 48,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full min-w-0 items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0 flex-1",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-w-0 flex-1 justify-center overflow-hidden px-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "w-full min-w-0 truncate text-center text-[15px] font-semibold leading-snug text-neutral-800",
                        children: step.title
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-w-0 flex-1 justify-end",
                    children: !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-1 flex shrink-0 items-center gap-0.5 opacity-0 transition-opacity group-hover:opacity-100",
                        children: [
                            canMoveLeft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>reorderStep(step.id, step.order - 1),
                                className: "rounded p-0.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                "aria-label": "Move step left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    "aria-hidden": "true",
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx",
                                    lineNumber: 80,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this),
                            canMoveRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>reorderStep(step.id, step.order + 1),
                                className: "rounded p-0.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                "aria-label": "Move step right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    "aria-hidden": "true",
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setEditing(true),
                                className: "rounded p-0.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                "aria-label": "Edit step title",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                    "aria-hidden": "true",
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (confirm(`Delete step "${step.title}" and all its cards?`)) {
                                        deleteStep(step.id);
                                    }
                                },
                                className: "rounded p-0.5 text-neutral-400 hover:bg-red-50 hover:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400",
                                "aria-label": "Delete step",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    "aria-hidden": "true",
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx",
            lineNumber: 64,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(StepHeader, "SAsJcyn3ysZ5S+AVF/ShJQtqDEk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"]
    ];
});
_c = StepHeader;
var _c;
__turbopack_context__.k.register(_c, "StepHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/@base-ui/react/esm/dialog/index.parts.js [app-client] (ecmascript) <export * as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
"use client";
;
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Root, {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Trigger, {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Portal, {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Backdrop, {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Popup, {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-background p-4 text-sm ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                        "data-slot": "dialog-close",
                        render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            className: "absolute top-2 right-2",
                            size: "icon-sm"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, void 0),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, showCloseButton = false, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end", className),
        ...props,
        children: [
            children,
            showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
                    lineNumber: 112,
                    columnNumber: 40
                }, void 0),
                children: "Close"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title, {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base leading-none font-medium", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Description, {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageCropModal",
    ()=>ImageCropModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$react$2d$image$2d$crop$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/react-image-crop/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const SLIDE_ASPECT = 3 / 2;
const OUTPUT_W = 480;
const OUTPUT_H = 320;
const PAGE_MAX_W = 1200;
const PAGE_MAX_H = 12000;
function createCenteredSlideCrop(imgWidth, imgHeight) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$react$2d$image$2d$crop$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["centerCrop"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$react$2d$image$2d$crop$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeAspectCrop"])({
        unit: '%',
        width: 90
    }, SLIDE_ASPECT, imgWidth, imgHeight), imgWidth, imgHeight);
}
function fullImageCrop(_imgWidth, _imgHeight) {
    return {
        unit: '%',
        x: 0,
        y: 0,
        width: 100,
        height: 100
    };
}
function cropAndResizeSlide(image, pixelCrop) {
    const canvas = document.createElement('canvas');
    canvas.width = OUTPUT_W;
    canvas.height = OUTPUT_H;
    const ctx = canvas.getContext('2d');
    if (!ctx) return Promise.reject(new Error('Canvas not supported'));
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(image, pixelCrop.x * scaleX, pixelCrop.y * scaleY, pixelCrop.width * scaleX, pixelCrop.height * scaleY, 0, 0, OUTPUT_W, OUTPUT_H);
    return Promise.resolve(canvas.toDataURL('image/jpeg', 0.85));
}
function cropAndResizePage(image, pixelCrop) {
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const sw = pixelCrop.width * scaleX;
    const sh = pixelCrop.height * scaleY;
    const sx = pixelCrop.x * scaleX;
    const sy = pixelCrop.y * scaleY;
    let outW = Math.round(sw);
    let outH = Math.round(sh);
    if (outW > PAGE_MAX_W) {
        const f = PAGE_MAX_W / outW;
        outW = PAGE_MAX_W;
        outH = Math.round(outH * f);
    }
    if (outH > PAGE_MAX_H) {
        const f = PAGE_MAX_H / outH;
        outH = PAGE_MAX_H;
        outW = Math.round(outW * f);
    }
    if (outW < 1) outW = 1;
    if (outH < 1) outH = 1;
    const canvas = document.createElement('canvas');
    canvas.width = outW;
    canvas.height = outH;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas not supported');
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(image, sx, sy, sw, sh, 0, 0, outW, outH);
    return canvas.toDataURL('image/jpeg', 0.88);
}
function ImageCropModal({ open, onOpenChange, onConfirm, existingImage, defaultFormat = 'slide', lockFormat, onGenerateWithAI, generateWithAIDisabled = false }) {
    _s();
    const [imageSrc, setImageSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [crop, setCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [completedCrop, setCompletedCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const effectiveDefault = lockFormat === 'page' ? 'page' : defaultFormat;
    const [format, setFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(effectiveDefault);
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageCropModal.useEffect": ()=>{
            if (open) {
                setFormat(lockFormat === 'page' ? 'page' : defaultFormat);
            }
        }
    }["ImageCropModal.useEffect"], [
        open,
        defaultFormat,
        lockFormat
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageCropModal.useEffect": ()=>{
            if (!open) return;
            if (existingImage) {
                setImageSrc(existingImage);
                setCrop(undefined);
                setCompletedCrop(undefined);
            }
        }
    }["ImageCropModal.useEffect"], [
        open,
        existingImage
    ]);
    const applyFormatToImg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageCropModal.useCallback[applyFormatToImg]": (el, f)=>{
            const { width, height } = el;
            if (f === 'slide') {
                setCrop(createCenteredSlideCrop(width, height));
            } else {
                setCrop(fullImageCrop(width, height));
            }
        }
    }["ImageCropModal.useCallback[applyFormatToImg]"], []);
    const handleFileChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageCropModal.useCallback[handleFileChange]": (e)=>{
            const file = e.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = ({
                "ImageCropModal.useCallback[handleFileChange]": ()=>{
                    setImageSrc(reader.result);
                    setCrop(undefined);
                    setCompletedCrop(undefined);
                }
            })["ImageCropModal.useCallback[handleFileChange]"];
            reader.readAsDataURL(file);
            e.target.value = '';
        }
    }["ImageCropModal.useCallback[handleFileChange]"], []);
    const handleImageLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageCropModal.useCallback[handleImageLoad]": (e)=>{
            applyFormatToImg(e.currentTarget, format);
        }
    }["ImageCropModal.useCallback[handleImageLoad]"], [
        format,
        applyFormatToImg
    ]);
    const onFormatChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageCropModal.useCallback[onFormatChange]": (next)=>{
            setFormat(next);
            const el = imgRef.current;
            if (el) applyFormatToImg(el, next);
        }
    }["ImageCropModal.useCallback[onFormatChange]"], [
        applyFormatToImg
    ]);
    const handleConfirm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageCropModal.useCallback[handleConfirm]": async ()=>{
            const img = imgRef.current;
            if (!img || !completedCrop) return;
            const dataUrl = format === 'slide' ? await cropAndResizeSlide(img, completedCrop) : cropAndResizePage(img, completedCrop);
            onConfirm(dataUrl);
            setImageSrc(null);
            setCrop(undefined);
            setCompletedCrop(undefined);
            onOpenChange(false);
        }
    }["ImageCropModal.useCallback[handleConfirm]"], [
        completedCrop,
        format,
        onConfirm,
        onOpenChange
    ]);
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageCropModal.useCallback[handleClose]": ()=>{
            setImageSrc(null);
            setCrop(undefined);
            setCompletedCrop(undefined);
            onOpenChange(false);
        }
    }["ImageCropModal.useCallback[handleClose]"], [
        onOpenChange
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: (next)=>{
            if (!next) handleClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-h-[min(90vh,860px)] overflow-y-auto sm:max-w-lg",
            showCloseButton: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        children: imageSrc ? 'Crop image' : 'Add storyboard image'
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this),
                !imageSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-4 py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-neutral-500",
                            children: [
                                "Upload a photo, screenshot, or take one with your camera",
                                onGenerateWithAI ? ', or generate with AI.' : '.'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                            lineNumber: 231,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "default",
                                    onClick: ()=>fileInputRef.current?.click(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            className: "mr-1.5 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this),
                                        "Upload"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "default",
                                    onClick: ()=>cameraInputRef.current?.click(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                            className: "mr-1.5 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                                            lineNumber: 249,
                                            columnNumber: 17
                                        }, this),
                                        "Camera"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this),
                        onGenerateWithAI && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-full max-w-sm items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px min-w-0 flex-1 bg-neutral-200"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                                            lineNumber: 256,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "shrink-0 text-[11px] font-medium uppercase tracking-wide text-neutral-400",
                                            children: "or"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                                            lineNumber: 257,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px min-w-0 flex-1 bg-neutral-200"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                                            lineNumber: 260,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                                    lineNumber: 255,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    size: "default",
                                    disabled: generateWithAIDisabled,
                                    onClick: ()=>{
                                        onGenerateWithAI();
                                        handleClose();
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "mr-1.5 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                                            lineNumber: 272,
                                            columnNumber: 19
                                        }, this),
                                        "Generate with AI"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                                    lineNumber: 262,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: fileInputRef,
                            type: "file",
                            accept: "image/*",
                            className: "hidden",
                            onChange: handleFileChange
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                            lineNumber: 277,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: cameraInputRef,
                            type: "file",
                            accept: "image/*",
                            capture: "environment",
                            className: "hidden",
                            onChange: handleFileChange
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                            lineNumber: 284,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                    lineNumber: 230,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-stretch gap-3",
                    children: [
                        lockFormat === 'page' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-neutral-600",
                            children: "Page or screen capture — any aspect. Drag the crop. Export up to 1200px wide."
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                            lineNumber: 296,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onFormatChange('slide'),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors', format === 'slide' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-800'),
                                            children: "3:2 slide"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                                            lineNumber: 302,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onFormatChange('page'),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors', format === 'page' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-800'),
                                            children: "Page / long screen"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                                            lineNumber: 314,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                                    lineNumber: 301,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-neutral-500",
                                    children: format === 'slide' ? 'Fixed 3:2—good for storyboard frames. Drag corners to reframe.' : 'Any aspect ratio—use for full-page or tall screen captures. Export keeps detail up to 1200px wide.'
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                                    lineNumber: 327,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[min(60vh,520px)] w-full overflow-auto rounded-lg border border-neutral-200 bg-neutral-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$react$2d$image$2d$crop$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                crop: crop,
                                onChange: (c)=>setCrop(c),
                                onComplete: (c)=>setCompletedCrop(c),
                                aspect: format === 'slide' ? SLIDE_ASPECT : undefined,
                                keepSelection: true,
                                ruleOfThirds: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    ref: imgRef,
                                    src: imageSrc,
                                    alt: "Source",
                                    onLoad: handleImageLoad,
                                    className: "w-full object-contain",
                                    style: {
                                        maxHeight: 'min(55vh, 480px)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                                    lineNumber: 344,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                                lineNumber: 335,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                            lineNumber: 334,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                    lineNumber: 294,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    children: [
                        imageSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "default",
                            onClick: ()=>{
                                setImageSrc(null);
                                setCrop(undefined);
                                setCompletedCrop(undefined);
                            },
                            children: "Change image"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                            lineNumber: 359,
                            columnNumber: 13
                        }, this),
                        imageSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "default",
                            onClick: ()=>void handleConfirm(),
                            disabled: !completedCrop,
                            children: "Save"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                            lineNumber: 372,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
            lineNumber: 222,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
_s(ImageCropModal, "1lhWL76+TA+skpf5137PxPgUUlk=");
_c = ImageCropModal;
var _c;
__turbopack_context__.k.register(_c, "ImageCropModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoryboardCell",
    ()=>StoryboardCell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/image-plus.js [app-client] (ecmascript) <export default as ImagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$ImageCropModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function StoryboardCell({ stepId, microPageOnly = false, allowMultipleImages = true, images, isGenerating, isAnyGenerating, onAddImage, onUpdateImage, onRemoveImage, onGenerate }) {
    _s();
    const sorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StoryboardCell.useMemo[sorted]": ()=>[
                ...images
            ].sort({
                "StoryboardCell.useMemo[sorted]": (a, b)=>a.createdAt.localeCompare(b.createdAt)
            }["StoryboardCell.useMemo[sorted]"])
    }["StoryboardCell.useMemo[sorted]"], [
        images
    ]);
    const canAddMore = allowMultipleImages || sorted.length === 0;
    const [addModalOpen, setAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [edit, setEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleAddConfirm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoryboardCell.useCallback[handleAddConfirm]": (dataUrl)=>{
            onAddImage(stepId, dataUrl);
        }
    }["StoryboardCell.useCallback[handleAddConfirm]"], [
        stepId,
        onAddImage
    ]);
    const handleEditConfirm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoryboardCell.useCallback[handleEditConfirm]": (dataUrl)=>{
            if (edit) onUpdateImage(edit.id, dataUrl);
        }
    }["StoryboardCell.useCallback[handleEditConfirm]"], [
        edit,
        onUpdateImage
    ]);
    const openAdd = ()=>{
        setEdit(null);
        setAddModalOpen(true);
    };
    const openEdit = (id)=>{
        setAddModalOpen(false);
        setEdit({
            id,
            defaultFormat: microPageOnly ? 'page' : 'slide'
        });
    };
    if (sorted.length === 0) {
        if (isGenerating) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center bg-transparent p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-24 w-full animate-pulse flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-blue-200 bg-blue-50/60 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "h-5 w-5 animate-spin text-blue-400"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-medium text-blue-400",
                            children: "Generating…"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2 bg-transparent p-2",
                    children: microPageOnly ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: openAdd,
                        className: "w-full rounded border-0 bg-transparent py-0.5 text-left text-[11px] font-medium text-neutral-400/90 transition-colors hover:text-neutral-800 hover:underline",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-baseline gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__["ImagePlus"], {
                                    className: "h-3.5 w-3.5 opacity-50",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this),
                                "Add image / screen"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                            lineNumber: 92,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: openAdd,
                        className: "flex min-h-24 w-full flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-neutral-200 bg-white/60 p-2 text-center transition-colors hover:border-neutral-300 hover:bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__["ImagePlus"], {
                                className: "h-5 w-5 text-neutral-400"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-medium text-neutral-600",
                                children: "Add image / screen"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$ImageCropModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageCropModal"], {
                    open: addModalOpen,
                    onOpenChange: setAddModalOpen,
                    onConfirm: handleAddConfirm,
                    defaultFormat: "page",
                    lockFormat: "page",
                    onGenerateWithAI: onGenerate && !microPageOnly && canAddMore ? ()=>onGenerate(stepId) : undefined,
                    generateWithAIDisabled: isAnyGenerating
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    const isMicroStrip = microPageOnly && sorted.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 bg-transparent p-2",
                children: [
                    isGenerating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-14 w-full flex-shrink-0 flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-blue-200 bg-blue-50/60 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-4 w-4 animate-spin text-blue-400"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-medium text-blue-500",
                                children: "Generating new image…"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isMicroStrip ? 'flex w-full min-w-0 flex-wrap content-start items-stretch justify-center gap-2' : 'flex flex-col gap-2'),
                        children: [
                            sorted.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group/thumb relative min-w-0 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]', isMicroStrip ? 'w-32 shrink-0 sm:w-36' : 'w-full'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full cursor-zoom-in overflow-y-auto overflow-x-hidden bg-neutral-100', isMicroStrip ? 'max-h-[min(50vh,420px)]' : 'max-h-[min(75vh,900px)]'),
                                            onClick: ()=>setPreview(img),
                                            role: "button",
                                            tabIndex: 0,
                                            "aria-label": "Open full-size image preview",
                                            onKeyDown: (e)=>{
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    setPreview(img);
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: img.dataUrl,
                                                alt: "",
                                                className: "block w-full max-w-full object-top",
                                                style: {
                                                    height: 'auto'
                                                },
                                                draggable: false
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                            lineNumber: 147,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('pointer-events-none absolute left-0 right-0 top-0 flex justify-center gap-1.5 p-1.5', 'bg-gradient-to-b from-black/25 to-transparent opacity-0 transition-opacity', 'group-hover/thumb:opacity-100'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-auto flex gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>openEdit(img.id),
                                                        className: "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-neutral-700 shadow-sm transition-colors hover:bg-white",
                                                        "aria-label": "Replace image",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 17
                                                    }, this),
                                                    onGenerate && !microPageOnly && allowMultipleImages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            onGenerate(stepId);
                                                        },
                                                        disabled: isAnyGenerating,
                                                        className: "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-blue-600 shadow-sm transition-colors hover:bg-white disabled:opacity-50",
                                                        "aria-label": "Add AI image to this step",
                                                        title: "Generate another with AI",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>onRemoveImage(img.id),
                                                        className: "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-rose-600 shadow-sm transition-colors hover:bg-white",
                                                        "aria-label": "Remove image",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                                lineNumber: 181,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                            lineNumber: 174,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, img.id, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                    lineNumber: 140,
                                    columnNumber: 11
                                }, this)),
                            canAddMore && (microPageOnly ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: openAdd,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('border-0 bg-transparent p-0 text-[10px] font-medium text-neutral-400/80 shadow-none transition-colors', 'hover:text-neutral-800 hover:underline', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/30 focus-visible:ring-offset-1', isMicroStrip ? 'mx-auto min-h-0 w-auto shrink-0 basis-full text-center' : 'mt-0.5 w-full text-left'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "h-3 w-3 opacity-40",
                                            strokeWidth: 2
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this),
                                        "Add image / screen"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: openAdd,
                                className: "mt-0.5 inline-flex w-full items-center justify-center gap-1 rounded-lg border border-dashed border-neutral-200 bg-white py-1.5 text-[10px] font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    "Add image / screen"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$ImageCropModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageCropModal"], {
                open: addModalOpen,
                onOpenChange: setAddModalOpen,
                onConfirm: handleAddConfirm,
                defaultFormat: "page",
                lockFormat: "page",
                onGenerateWithAI: onGenerate && !microPageOnly && canAddMore ? ()=>onGenerate(stepId) : undefined,
                generateWithAIDisabled: isAnyGenerating
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$ImageCropModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageCropModal"], {
                open: !!edit,
                onOpenChange: (o)=>{
                    if (!o) setEdit(null);
                },
                onConfirm: handleEditConfirm,
                defaultFormat: edit?.defaultFormat,
                existingImage: edit ? sorted.find((i)=>i.id === edit.id)?.dataUrl : undefined,
                lockFormat: microPageOnly ? 'page' : undefined
            }, edit?.id ?? 'e', false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!preview,
                onOpenChange: (open)=>{
                    if (!open) setPreview(null);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-h-[calc(100vh-2rem)] max-w-[calc(100vw-2rem)] overflow-hidden p-0 sm:max-w-[min(1200px,calc(100vw-2rem))]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "sr-only",
                            children: "Image preview"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[calc(100vh-2rem)] overflow-auto bg-neutral-950 p-3",
                            children: preview && // eslint-disable-next-line @next/next/no-img-element
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: preview.dataUrl,
                                alt: "",
                                className: "mx-auto block h-auto max-w-full rounded bg-white",
                                draggable: false
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                                lineNumber: 274,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(StoryboardCell, "jqLkq2nrJ6AxWc9ukWldTyf3YIE=");
_c = StoryboardCell;
var _c;
__turbopack_context__.k.register(_c, "StoryboardCell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardDetailPanel",
    ()=>CardDetailPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/store/blueprint-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/lane-definitions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$LaneLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LaneLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$hooks$2f$useFocusTrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/hooks/useFocusTrap.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/traceability/display.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const RELATION_LABELS = {
    causes: 'Causes',
    informs: 'Informs',
    addresses: 'Addresses',
    depends_on: 'Depends on',
    implements: 'Implements',
    generates: 'Generates',
    requires: 'Requires',
    relates_to: 'Relates to',
    next_step: 'Next step'
};
/** Relations the user can manually create — next_step is system-only (import mapping). */ const USER_VISIBLE_RELATIONS = [
    'causes',
    'informs',
    'addresses',
    'depends_on',
    'implements',
    'generates',
    'requires',
    'relates_to'
];
const EVIDENCE_TYPE_LABELS = {
    research: 'Research',
    data: 'Data',
    policy: 'Policy',
    assumption: 'Assumption',
    note: 'Note'
};
const STRENGTH_LABELS = {
    strong: 'Strong',
    moderate: 'Moderate',
    weak: 'Weak'
};
const STRENGTH_COLORS = {
    strong: 'bg-emerald-100 text-emerald-700',
    moderate: 'bg-amber-100 text-amber-700',
    weak: 'bg-neutral-100 text-neutral-500'
};
const STATUS_COLORS = {
    open: 'bg-blue-100 text-blue-700',
    in_progress: 'bg-amber-100 text-amber-700',
    resolved: 'bg-emerald-100 text-emerald-700',
    wont_fix: 'bg-neutral-100 text-neutral-500'
};
const STATUS_LABELS = {
    open: 'Open',
    in_progress: 'In progress',
    resolved: 'Resolved',
    wont_fix: "Won't fix"
};
// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function CardBreadcrumb({ card }) {
    _s();
    const stages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "CardBreadcrumb.useBlueprintStore[stages]": (s)=>s.stages
    }["CardBreadcrumb.useBlueprintStore[stages]"]);
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "CardBreadcrumb.useBlueprintStore[steps]": (s)=>s.steps
    }["CardBreadcrumb.useBlueprintStore[steps]"]);
    const stage = stages.find((s)=>s.id === card.stageId);
    const step = steps.find((s)=>s.id === card.stepId);
    const laneTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLaneTitle"])(card.laneKey);
    const laneToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$LaneLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardColorTokens"])(card.laneKey, card.tags);
    // Only show step if it's different from stage (i.e., in L2-Micro mode)
    const showStep = step && stage && step.title !== stage.title;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center gap-1 text-[11px] text-neutral-500",
        children: [
            stage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: stage.title
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 107,
                columnNumber: 17
            }, this),
            stage && showStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                "aria-hidden": "true",
                className: "h-3 w-3 shrink-0"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 108,
                columnNumber: 29
            }, this),
            showStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: step.title
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 109,
                columnNumber: 20
            }, this),
            laneTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        "aria-hidden": "true",
                        className: "h-3 w-3 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-full px-1.5 py-0.5 font-medium', laneToken?.bg ?? 'bg-neutral-100', laneToken?.text ?? 'text-neutral-600'),
                        children: laneTitle
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(CardBreadcrumb, "K4iZHvD8r7w0+Ke7lHVQI1vwiY8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"]
    ];
});
_c = CardBreadcrumb;
function LinkedCardRow({ link, currentCardId }) {
    _s1();
    const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "LinkedCardRow.useBlueprintStore[cards]": (s)=>s.cards
    }["LinkedCardRow.useBlueprintStore[cards]"]);
    const selectCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "LinkedCardRow.useBlueprintStore[selectCard]": (s)=>s.selectCard
    }["LinkedCardRow.useBlueprintStore[selectCard]"]);
    const deleteCardLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "LinkedCardRow.useBlueprintStore[deleteCardLink]": (s)=>s.deleteCardLink
    }["LinkedCardRow.useBlueprintStore[deleteCardLink]"]);
    const isSource = link.sourceCardId === currentCardId;
    const otherId = isSource ? link.targetCardId : link.sourceCardId;
    const other = cards.find((c)=>c.id === otherId);
    if (!other) return null;
    const laneToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$LaneLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardColorTokens"])(other.laneKey, other.tags);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[12px] font-medium text-neutral-400",
                        children: RELATION_LABELS[link.relation]
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>selectCard(other.id),
                        className: "text-left text-[13px] font-medium text-neutral-800 hover:text-blue-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                        "aria-label": `Open card: ${other.title}`,
                        children: other.title
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-0.5 inline-block rounded-full px-1.5 py-0.5 text-[10px] font-medium', laneToken?.bg ?? 'bg-neutral-100', laneToken?.text ?? 'text-neutral-500'),
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLaneTitle"])(other.laneKey)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>deleteCardLink(link.id),
                className: "shrink-0 rounded p-1 text-neutral-300 hover:bg-red-50 hover:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400",
                "aria-label": "Remove link",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                    "aria-hidden": "true",
                    className: "h-3.5 w-3.5"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_s1(LinkedCardRow, "uz7LP0dNX4yZMdKXAzVfBc+r3xk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"]
    ];
});
_c1 = LinkedCardRow;
/** Inbound link row — read-only, shows who links TO this card */ function InboundCardRow({ link, currentCardId }) {
    _s2();
    const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "InboundCardRow.useBlueprintStore[cards]": (s)=>s.cards
    }["InboundCardRow.useBlueprintStore[cards]"]);
    const selectCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "InboundCardRow.useBlueprintStore[selectCard]": (s)=>s.selectCard
    }["InboundCardRow.useBlueprintStore[selectCard]"]);
    const sourceId = link.sourceCardId;
    const source = cards.find((c)=>c.id === sourceId);
    if (!source || sourceId === currentCardId) return null;
    const laneToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$LaneLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardColorTokens"])(source.laneKey, source.tags);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0 flex-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[12px] font-medium text-neutral-400",
                    children: [
                        "← ",
                        RELATION_LABELS[link.relation]
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>selectCard(source.id),
                    className: "text-left text-[13px] font-medium text-neutral-800 hover:text-blue-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                    "aria-label": `Open card: ${source.title}`,
                    children: source.title
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-0.5 inline-block rounded-full px-1.5 py-0.5 text-[10px] font-medium', laneToken?.bg ?? 'bg-neutral-100', laneToken?.text ?? 'text-neutral-500'),
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLaneTitle"])(source.laneKey)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
            lineNumber: 187,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
_s2(InboundCardRow, "6k9zejY2HiVGNCw4bXpYAwykAWE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"]
    ];
});
_c2 = InboundCardRow;
/** Row showing an Opportunity that references this card via sourceCardIds */ function LinkedOpportunityRow({ opportunity, onOpenPanel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                "aria-hidden": "true",
                className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onOpenPanel,
                        className: "text-left text-[13px] font-medium text-neutral-800 hover:text-blue-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                        "aria-label": `View opportunity: ${opportunity.title}`,
                        children: opportunity.title
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('ml-1.5 inline-block rounded-full px-1.5 py-0.5 text-[10px] font-semibold', STATUS_COLORS[opportunity.status]),
                        children: STATUS_LABELS[opportunity.status]
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
}
_c3 = LinkedOpportunityRow;
function EvidenceRow({ ev }) {
    _s3();
    const deleteEvidence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "EvidenceRow.useBlueprintStore[deleteEvidence]": (s)=>s.deleteEvidence
    }["EvidenceRow.useBlueprintStore[deleteEvidence]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2.5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-1.5",
                            children: [
                                ev.traceabilityCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-neutral-600",
                                    children: ev.traceabilityCode
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-full px-1.5 py-0.5 text-[10px] font-semibold', STRENGTH_COLORS[ev.strength]),
                                    children: STRENGTH_LABELS[ev.strength]
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full bg-neutral-100 px-1.5 py-0.5 text-[10px] text-neutral-500",
                                    children: EVIDENCE_TYPE_LABELS[ev.evidenceType]
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this),
                        ev.quote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1.5 text-[12px] italic leading-snug text-neutral-600",
                            children: [
                                "“",
                                ev.quote,
                                "”"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                            lineNumber: 270,
                            columnNumber: 13
                        }, this),
                        ev.source && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 flex items-center gap-1 text-[11px] text-neutral-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    "aria-hidden": "true",
                                    className: "h-3 w-3 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this),
                                ev.source
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                            lineNumber: 275,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>deleteEvidence(ev.id),
                    className: "shrink-0 rounded p-1 text-neutral-300 hover:bg-red-50 hover:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400",
                    "aria-label": "Delete evidence",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                        "aria-hidden": "true",
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 286,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
            lineNumber: 249,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
_s3(EvidenceRow, "KfPTVtTerTjdl1lmz3DUU2yxxzA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"]
    ];
});
_c4 = EvidenceRow;
function AddLinkForm({ card, onDone }) {
    _s4();
    const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "AddLinkForm.useBlueprintStore[cards]": (s)=>s.cards
    }["AddLinkForm.useBlueprintStore[cards]"]);
    const addCardLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "AddLinkForm.useBlueprintStore[addCardLink]": (s)=>s.addCardLink
    }["AddLinkForm.useBlueprintStore[addCardLink]"]);
    const cardLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "AddLinkForm.useBlueprintStore[cardLinks]": (s)=>s.cardLinks
    }["AddLinkForm.useBlueprintStore[cardLinks]"]);
    const [targetId, setTargetId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [relation, setRelation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('relates_to');
    const alreadyLinkedIds = new Set(cardLinks.filter((l)=>l.sourceCardId === card.id || l.targetCardId === card.id).flatMap((l)=>[
            l.sourceCardId,
            l.targetCardId
        ]));
    const candidates = cards.filter((c)=>c.id !== card.id && !alreadyLinkedIds.has(c.id));
    const handleAdd = ()=>{
        if (!targetId) return;
        addCardLink(card.id, targetId, relation);
        onDone();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 rounded-lg border border-blue-100 bg-blue-50/50 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: targetId,
                onChange: (e)=>setTargetId(e.target.value),
                className: "w-full rounded-md border border-neutral-200 bg-white px-2 py-1.5 text-[12px] text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Select a card…"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this),
                    candidates.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: c.id,
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLaneTitle"])(c.laneKey),
                                ": ",
                                c.title
                            ]
                        }, c.id, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: relation,
                onChange: (e)=>setRelation(e.target.value),
                className: "w-full rounded-md border border-neutral-200 bg-white px-2 py-1.5 text-[12px] text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                children: USER_VISIBLE_RELATIONS.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: r,
                        children: RELATION_LABELS[r]
                    }, r, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 335,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 329,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAdd,
                        disabled: !targetId,
                        className: "rounded-md bg-neutral-900 px-3 py-1.5 text-[12px] font-semibold text-white disabled:opacity-40 hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                        children: "Add link"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onDone,
                        className: "rounded-md px-3 py-1.5 text-[12px] text-neutral-500 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
        lineNumber: 316,
        columnNumber: 5
    }, this);
}
_s4(AddLinkForm, "Wjp/DFTs8xRcyEqjtAKwQ8S7OyA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"]
    ];
});
_c5 = AddLinkForm;
function AddEvidenceForm({ card, onDone }) {
    _s5();
    const addEvidence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "AddEvidenceForm.useBlueprintStore[addEvidence]": (s)=>s.addEvidence
    }["AddEvidenceForm.useBlueprintStore[addEvidence]"]);
    const [quote, setQuote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [evidenceType, setEvidenceType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('note');
    const [strength, setStrength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('moderate');
    const handleAdd = ()=>{
        addEvidence(card.id, quote.trim(), source.trim(), evidenceType, strength);
        onDone();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 rounded-lg border border-blue-100 bg-blue-50/50 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: quote,
                onChange: (e)=>setQuote(e.target.value),
                placeholder: "Quote or summary (optional)",
                rows: 2,
                className: "w-full resize-none rounded-md border border-neutral-200 bg-white px-2 py-1.5 text-[12px] text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: source,
                onChange: (e)=>setSource(e.target.value),
                placeholder: "Source (optional)",
                className: "w-full rounded-md border border-neutral-200 bg-white px-2 py-1.5 text-[12px] text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: evidenceType,
                        onChange: (e)=>setEvidenceType(e.target.value),
                        className: "flex-1 rounded-md border border-neutral-200 bg-white px-2 py-1.5 text-[12px] text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                        children: Object.keys(EVIDENCE_TYPE_LABELS).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: t,
                                children: EVIDENCE_TYPE_LABELS[t]
                            }, t, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                lineNumber: 393,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: strength,
                        onChange: (e)=>setStrength(e.target.value),
                        className: "flex-1 rounded-md border border-neutral-200 bg-white px-2 py-1.5 text-[12px] text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                        children: Object.keys(STRENGTH_LABELS).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: s,
                                children: STRENGTH_LABELS[s]
                            }, s, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                lineNumber: 404,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 398,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAdd,
                        className: "rounded-md bg-neutral-900 px-3 py-1.5 text-[12px] font-semibold text-white hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                        children: "Add evidence"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 411,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onDone,
                        className: "rounded-md px-3 py-1.5 text-[12px] text-neutral-500 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 417,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 410,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
        lineNumber: 372,
        columnNumber: 5
    }, this);
}
_s5(AddEvidenceForm, "Yx2Y4I3KuPOSSizMq4paZKem0ko=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"]
    ];
});
_c6 = AddEvidenceForm;
// ---------------------------------------------------------------------------
// Downstream artifact display
// ---------------------------------------------------------------------------
const ARTIFACT_STATUS_COLORS = {
    draft: 'bg-neutral-100 text-neutral-500',
    reviewed: 'bg-amber-100 text-amber-700',
    approved: 'bg-emerald-100 text-emerald-700',
    deprecated: 'bg-red-100 text-red-400'
};
const ARTIFACT_STATUS_LABELS = {
    draft: 'Draft',
    reviewed: 'Reviewed',
    approved: 'Approved',
    deprecated: 'Deprecated'
};
const ARTIFACT_PREFIX_COLORS = {
    REQ: 'bg-violet-100 text-violet-700',
    API: 'bg-sky-100 text-sky-700',
    UI: 'bg-teal-100 text-teal-700'
};
function DownstreamArtifactRow({ artifact }) {
    const prefix = artifact.traceabilityCode.split('-')[0];
    const prefixColor = ARTIFACT_PREFIX_COLORS[prefix] ?? 'bg-neutral-100 text-neutral-600';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-0.5 shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold', prefixColor),
                children: artifact.traceabilityCode
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 462,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "truncate text-[13px] font-medium text-neutral-800",
                        children: artifact.title
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 468,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-0.5 inline-block rounded-full px-1.5 py-0.5 text-[10px] font-semibold', ARTIFACT_STATUS_COLORS[artifact.status]),
                        children: ARTIFACT_STATUS_LABELS[artifact.status]
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 469,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 467,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
        lineNumber: 461,
        columnNumber: 5
    }, this);
}
_c7 = DownstreamArtifactRow;
function CardDetailPanel() {
    _s6();
    const selectedCardId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "CardDetailPanel.useBlueprintStore[selectedCardId]": (s)=>s.selectedCardId
    }["CardDetailPanel.useBlueprintStore[selectedCardId]"]);
    const selectCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "CardDetailPanel.useBlueprintStore[selectCard]": (s)=>s.selectCard
    }["CardDetailPanel.useBlueprintStore[selectCard]"]);
    const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "CardDetailPanel.useBlueprintStore[cards]": (s)=>s.cards
    }["CardDetailPanel.useBlueprintStore[cards]"]);
    const cardLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "CardDetailPanel.useBlueprintStore[cardLinks]": (s)=>s.cardLinks
    }["CardDetailPanel.useBlueprintStore[cardLinks]"]);
    const evidence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "CardDetailPanel.useBlueprintStore[evidence]": (s)=>s.evidence
    }["CardDetailPanel.useBlueprintStore[evidence]"]);
    const opportunities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "CardDetailPanel.useBlueprintStore[opportunities]": (s)=>s.opportunities
    }["CardDetailPanel.useBlueprintStore[opportunities]"]);
    const updateCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "CardDetailPanel.useBlueprintStore[updateCard]": (s)=>s.updateCard
    }["CardDetailPanel.useBlueprintStore[updateCard]"]);
    const readOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "CardDetailPanel.useBlueprintStore[readOnly]": (s)=>s.readOnly
    }["CardDetailPanel.useBlueprintStore[readOnly]"]);
    const requirements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "CardDetailPanel.useBlueprintStore[requirements]": (s)=>s.requirements
    }["CardDetailPanel.useBlueprintStore[requirements]"]);
    const apiContracts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "CardDetailPanel.useBlueprintStore[apiContracts]": (s)=>s.apiContracts
    }["CardDetailPanel.useBlueprintStore[apiContracts]"]);
    const uiScaffolds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "CardDetailPanel.useBlueprintStore[uiScaffolds]": (s)=>s.uiScaffolds
    }["CardDetailPanel.useBlueprintStore[uiScaffolds]"]);
    const [showAddLink, setShowAddLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAddEvidence, setShowAddEvidence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingTitle, setEditingTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [titleValue, setTitleValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editingNotes, setEditingNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notesValue, setNotesValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [downstreamOpen, setDownstreamOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$hooks$2f$useFocusTrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusTrap"])(panelRef, !!selectedCardId);
    const card = selectedCardId ? cards.find((c)=>c.id === selectedCardId) ?? null : null;
    const displayTitle = card ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripTraceabilityForDisplay"])(card.title) : '';
    const displayBody = card ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripTraceabilityForDisplay"])(card.body) : '';
    const textTraceabilityCodes = card ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraceabilityCodesFromText"])(`${card.title} ${card.body}`).filter((code)=>code !== card.traceabilityCode) : [];
    const evidenceCodes = card ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$display$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEvidenceCodesFromText"])(`${card.title} ${card.body}`) : [];
    const referenceCodes = textTraceabilityCodes.filter((code)=>!evidenceCodes.includes(code));
    // Outbound links: this card → other cards
    const outboundLinks = cardLinks.filter((l)=>l.sourceCardId === card?.id);
    // Inbound links: other cards → this card (impact)
    const inboundLinks = cardLinks.filter((l)=>l.targetCardId === card?.id);
    const cardEvidence = evidence.filter((e)=>e.cardId === card?.id);
    // Opportunities that reference this card via sourceCardIds
    const linkedOpportunities = card ? opportunities.filter((o)=>o.sourceCardIds.includes(card.id)) : [];
    // Downstream artifacts derived from this card
    const linkedRequirements = card ? requirements.filter((r)=>r.sourceCardIds.includes(card.id)) : [];
    const linkedApiContracts = card ? apiContracts.filter((a)=>a.sourceCardIds.includes(card.id)) : [];
    const linkedUiScaffolds = card ? uiScaffolds.filter((u)=>u.sourceCardIds.includes(card.id)) : [];
    const hasDownstream = linkedRequirements.length > 0 || linkedApiContracts.length > 0 || linkedUiScaffolds.length > 0;
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CardDetailPanel.useCallback[handleClose]": ()=>{
            selectCard(null);
            setShowAddLink(false);
            setShowAddEvidence(false);
            setEditingTitle(false);
            setEditingNotes(false);
        }
    }["CardDetailPanel.useCallback[handleClose]"], [
        selectCard
    ]);
    const saveTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CardDetailPanel.useCallback[saveTitle]": ()=>{
            if (!card) return;
            const t = titleValue.trim();
            if (!t) {
                setTitleValue(card.title);
                setEditingTitle(false);
                return;
            }
            if (t !== card.title) {
                updateCard(card.id, {
                    title: t
                });
            }
            setEditingTitle(false);
        }
    }["CardDetailPanel.useCallback[saveTitle]"], [
        card,
        titleValue,
        updateCard
    ]);
    // Close on Escape (cancel inline edits first, then close panel)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardDetailPanel.useEffect": ()=>{
            const onKey = {
                "CardDetailPanel.useEffect.onKey": (e)=>{
                    if (e.key !== 'Escape' || !selectedCardId) return;
                    if (editingTitle && card) {
                        e.preventDefault();
                        setTitleValue(card.title);
                        setEditingTitle(false);
                        return;
                    }
                    if (editingNotes && card) {
                        e.preventDefault();
                        setNotesValue(card.notes ?? '');
                        setEditingNotes(false);
                        return;
                    }
                    handleClose();
                }
            }["CardDetailPanel.useEffect.onKey"];
            document.addEventListener('keydown', onKey);
            return ({
                "CardDetailPanel.useEffect": ()=>document.removeEventListener('keydown', onKey)
            })["CardDetailPanel.useEffect"];
        }
    }["CardDetailPanel.useEffect"], [
        selectedCardId,
        handleClose,
        editingTitle,
        editingNotes,
        card
    ]);
    // Reset sub-forms when card changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardDetailPanel.useEffect": ()=>{
            setShowAddLink(false);
            setShowAddEvidence(false);
            setEditingTitle(false);
            setEditingNotes(false);
        }
    }["CardDetailPanel.useEffect"], [
        selectedCardId
    ]);
    // Sync title / notes local state when card changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardDetailPanel.useEffect": ()=>{
            if (card) {
                setTitleValue(card.title);
                setNotesValue(card.notes ?? '');
            }
        }
    }["CardDetailPanel.useEffect"], [
        card
    ]);
    const saveNotes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CardDetailPanel.useCallback[saveNotes]": ()=>{
            if (card) updateCard(card.id, {
                notes: notesValue.trim()
            });
            setEditingNotes(false);
        }
    }["CardDetailPanel.useCallback[saveNotes]"], [
        card,
        notesValue,
        updateCard
    ]);
    if (!card) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: panelRef,
        "data-no-pan": true,
        "data-no-select": true,
        className: "pointer-events-auto absolute inset-y-0 right-0 z-40 flex w-[380px] flex-col border-l border-neutral-200 bg-white shadow-[-4px_0_24px_rgba(0,0,0,0.06)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative shrink-0 border-b border-neutral-100 px-5 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleClose,
                        className: "absolute right-5 top-4 z-10 rounded-lg p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                        "aria-label": "Close panel",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            "aria-hidden": "true",
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                            lineNumber: 621,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 615,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardBreadcrumb, {
                                card: card
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                lineNumber: 624,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                label: "Description",
                                action: editingTitle ? undefined : {
                                    label: 'Edit',
                                    onClick: ()=>setEditingTitle(true)
                                },
                                className: "mt-3"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                lineNumber: 625,
                                columnNumber: 11
                            }, this),
                            editingTitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        autoFocus: true,
                                        value: titleValue,
                                        onChange: (e)=>setTitleValue(e.target.value),
                                        rows: 8,
                                        placeholder: "Card title",
                                        "aria-label": "Card title",
                                        className: "field-sizing-content min-h-32 w-full resize-y rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-[15px] font-semibold leading-snug text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                        lineNumber: 636,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: saveTitle,
                                                disabled: !titleValue.trim(),
                                                className: "rounded-md bg-neutral-900 px-3 py-1.5 text-[12px] font-semibold text-white hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-50",
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                lineNumber: 646,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setTitleValue(card.title);
                                                    setEditingTitle(false);
                                                },
                                                className: "rounded-md px-3 py-1.5 text-[12px] text-neutral-500 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                lineNumber: 654,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                        lineNumber: 645,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                lineNumber: 635,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[15px] font-semibold leading-snug text-neutral-900",
                                children: displayTitle || card.title
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                lineNumber: 667,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 623,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 614,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-5 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        displayBody && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] leading-relaxed text-neutral-600",
                                children: displayBody
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                lineNumber: 681,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                            lineNumber: 680,
                            columnNumber: 13
                        }, this),
                        card.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: card.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-500",
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                        lineNumber: 690,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                lineNumber: 688,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                            lineNumber: 687,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    label: "Comments",
                                    action: editingNotes ? undefined : {
                                        label: 'Edit',
                                        onClick: ()=>setEditingNotes(true)
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                    lineNumber: 703,
                                    columnNumber: 13
                                }, this),
                                editingNotes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            autoFocus: true,
                                            value: notesValue,
                                            onChange: (e)=>setNotesValue(e.target.value),
                                            rows: 4,
                                            placeholder: "Add notes…",
                                            className: "w-full resize-none rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-[13px] leading-relaxed text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                            lineNumber: 709,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: saveNotes,
                                                    className: "rounded-md bg-neutral-900 px-3 py-1.5 text-[12px] font-semibold text-white hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                                    children: "Save"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                    lineNumber: 718,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setNotesValue(card.notes ?? '');
                                                        setEditingNotes(false);
                                                    },
                                                    className: "rounded-md px-3 py-1.5 text-[12px] text-neutral-500 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                    lineNumber: 724,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                            lineNumber: 717,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                    lineNumber: 708,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13px] leading-relaxed text-neutral-500",
                                    children: card.notes || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "italic text-neutral-300",
                                        children: "No notes yet"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                        lineNumber: 734,
                                        columnNumber: 32
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                    lineNumber: 733,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                            lineNumber: 702,
                            columnNumber: 11
                        }, this),
                        (card.traceabilityCode || referenceCodes.length > 0 || evidenceCodes.length > 0 || card.sourceRef || card.derivedFromIds && card.derivedFromIds.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    label: "Traceability"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                    lineNumber: 746,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "space-y-1 text-[12px]",
                                    children: [
                                        card.traceabilityCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "w-20 shrink-0 text-neutral-500",
                                                    children: "Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                    lineNumber: 750,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "font-mono font-semibold text-neutral-800",
                                                    children: card.traceabilityCode
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                    lineNumber: 751,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                            lineNumber: 749,
                                            columnNumber: 19
                                        }, this),
                                        referenceCodes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "w-20 shrink-0 text-neutral-500",
                                                    children: "Refs"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                    lineNumber: 756,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "flex flex-wrap gap-1",
                                                    children: referenceCodes.map((code)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[10px] text-neutral-600",
                                                            children: code
                                                        }, code, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                            lineNumber: 759,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                    lineNumber: 757,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                            lineNumber: 755,
                                            columnNumber: 19
                                        }, this),
                                        evidenceCodes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "w-20 shrink-0 text-neutral-500",
                                                    children: "Evidence"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                    lineNumber: 768,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "flex flex-wrap gap-1",
                                                    children: evidenceCodes.map((code)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[10px] text-neutral-600",
                                                            children: code
                                                        }, code, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                            lineNumber: 771,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                    lineNumber: 769,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                            lineNumber: 767,
                                            columnNumber: 19
                                        }, this),
                                        card.derivedFromIds && card.derivedFromIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "w-20 shrink-0 text-neutral-500",
                                                    children: "Derived from"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                    lineNumber: 780,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "flex flex-wrap gap-1",
                                                    children: card.derivedFromIds.map((code)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[10px] text-neutral-600",
                                                            children: code
                                                        }, code, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                            lineNumber: 783,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                    lineNumber: 781,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                            lineNumber: 779,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                    lineNumber: 747,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                            lineNumber: 745,
                            columnNumber: 13
                        }, this),
                        cardEvidence.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    label: "Evidence"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                    lineNumber: 796,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: cardEvidence.map((ev)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EvidenceRow, {
                                            ev: ev
                                        }, ev.id, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                            lineNumber: 799,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                    lineNumber: 797,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                            lineNumber: 795,
                            columnNumber: 13
                        }, this),
                        linkedOpportunities.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    label: "Opportunities"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                    lineNumber: 808,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: linkedOpportunities.map((opp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkedOpportunityRow, {
                                            opportunity: opp,
                                            onOpenPanel: ()=>{}
                                        }, opp.id, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                            lineNumber: 813,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                    lineNumber: 811,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                            lineNumber: 807,
                            columnNumber: 13
                        }, this),
                        hasDownstream && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    label: `Downstream · REQ ${linkedRequirements.length} / API ${linkedApiContracts.length} / UI ${linkedUiScaffolds.length}`,
                                    action: {
                                        label: downstreamOpen ? 'Collapse' : 'Expand',
                                        onClick: ()=>setDownstreamOpen((v)=>!v)
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                    lineNumber: 826,
                                    columnNumber: 15
                                }, this),
                                downstreamOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        linkedRequirements.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DownstreamArtifactRow, {
                                                artifact: r
                                            }, r.id, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                lineNumber: 833,
                                                columnNumber: 21
                                            }, this)),
                                        linkedApiContracts.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DownstreamArtifactRow, {
                                                artifact: a
                                            }, a.id, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                lineNumber: 836,
                                                columnNumber: 21
                                            }, this)),
                                        linkedUiScaffolds.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DownstreamArtifactRow, {
                                                artifact: u
                                            }, u.id, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                                lineNumber: 839,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                                    lineNumber: 831,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                            lineNumber: 825,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                    lineNumber: 676,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 675,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
        lineNumber: 607,
        columnNumber: 5
    }, this);
}
_s6(CardDetailPanel, "DEse4bkypAVGyHPM9TElpIQ+WOg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$hooks$2f$useFocusTrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusTrap"]
    ];
});
_c8 = CardDetailPanel;
function SectionHeader({ label, action, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mb-2 flex items-center justify-between', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-[11px] font-semibold uppercase tracking-wider text-neutral-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 863,
                columnNumber: 7
            }, this),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: action.onClick,
                className: "inline-flex items-center gap-1 rounded text-[11px] font-medium text-neutral-400 transition-colors hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                children: [
                    action.icon ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        "aria-hidden": "true",
                        className: "h-3 w-3"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                        lineNumber: 869,
                        columnNumber: 27
                    }, this),
                    action.label
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
                lineNumber: 865,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx",
        lineNumber: 862,
        columnNumber: 5
    }, this);
}
_c9 = SectionHeader;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "CardBreadcrumb");
__turbopack_context__.k.register(_c1, "LinkedCardRow");
__turbopack_context__.k.register(_c2, "InboundCardRow");
__turbopack_context__.k.register(_c3, "LinkedOpportunityRow");
__turbopack_context__.k.register(_c4, "EvidenceRow");
__turbopack_context__.k.register(_c5, "AddLinkForm");
__turbopack_context__.k.register(_c6, "AddEvidenceForm");
__turbopack_context__.k.register(_c7, "DownstreamArtifactRow");
__turbopack_context__.k.register(_c8, "CardDetailPanel");
__turbopack_context__.k.register(_c9, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Board",
    ()=>Board
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/hand.js [app-client] (ecmascript) <export default as Hand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/image-plus.js [app-client] (ecmascript) <export default as ImagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/store/blueprint-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$LaneLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/LaneLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$CellArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CellArea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$StageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$StageDescription$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StageDescription.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$StepHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StepHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$BlueprintCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BlueprintCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$StoryboardCell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/StoryboardCell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$ImageCropModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/ImageCropModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$CardDetailPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/CardDetailPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/lane-definitions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$board$2d$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/board-layout.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const FRONTSTAGE_BOUNDARY_KEY = 'frontstage_touchpoint';
const STEP_WIDTH = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$board$2d$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOARD_STEP_WIDTH"];
const MIN_STAGE_ROW_H = 56; // minimum; row grows when stage titles wrap
const LOV_H = 28; // line of visibility divider height
const COLLAPSED_LANE_H = 56;
/** Minimum height; row grows with stacked / tall storyboard images (ResizeObserver syncs left label). */ const STORYBOARD_ROW_H = 180;
const HORIZONTAL_PAN_STEP = 120;
const VERTICAL_PAN_STEP = 96;
/** Right border between step columns: lighter within stage, heavier at stage boundary */ function stepBorderR(stepIdx, stageStepCount) {
    return stepIdx < stageStepCount - 1 ? 'border-r border-neutral-100' : 'border-r border-neutral-200';
}
function stepHeaderBorderR(stepIdx, stageStepCount) {
    return stepIdx < stageStepCount - 1 ? 'border-r border-neutral-100' : '';
}
function isBoardInteractiveTarget(target) {
    const el = target instanceof Element ? target : target instanceof Text ? target.parentElement : null;
    if (!el) return false;
    return Boolean(el.closest('button, input, textarea, select, a, [role="button"], [contenteditable="true"], [data-board-card], [data-no-pan]'));
}
/** Alternating monochrome bands: dark grey / white, then light grey / black */ const PHASE_MONO_STYLES = [
    {
        bg: '#3f3f46',
        border: '#52525b',
        text: '#fafafa'
    },
    {
        bg: '#7c7c7e',
        border: '#d4d4d8',
        text: '#f0f0f0'
    }
];
function PhaseCell({ phase, width, stageIds, colorIndex, onSave }) {
    _s();
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(phase);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhaseCell.useEffect": ()=>{
            setDraft(phase);
        }
    }["PhaseCell.useEffect"], [
        phase
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhaseCell.useEffect": ()=>{
            if (editing) inputRef.current?.focus();
        }
    }["PhaseCell.useEffect"], [
        editing
    ]);
    const commit = ()=>{
        const trimmed = draft.trim();
        if (trimmed !== phase) onSave(trimmed);
        setEditing(false);
    };
    const palette = phase ? PHASE_MONO_STYLES[colorIndex % PHASE_MONO_STYLES.length] : null;
    const sizeStyle = {
        width,
        minWidth: width
    };
    if (editing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "box-border shrink-0 flex items-center border-b px-3",
            style: {
                ...sizeStyle,
                backgroundColor: palette?.bg ?? '#f5f5f5',
                borderBottomColor: palette?.border ?? '#d4d4d4',
                borderRightWidth: 1,
                borderRightColor: palette?.border ?? '#d4d4d4'
            },
            "data-no-pan": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: inputRef,
                value: draft,
                onChange: (e)=>setDraft(e.target.value),
                onBlur: commit,
                onKeyDown: (e)=>{
                    if (e.key === 'Enter') commit();
                    if (e.key === 'Escape') {
                        setDraft(phase);
                        setEditing(false);
                    }
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full bg-transparent text-center text-xs font-semibold uppercase tracking-wider outline-none', colorIndex % 2 === 0 ? 'placeholder:text-neutral-400' : 'placeholder:text-neutral-500'),
                style: {
                    color: palette?.text ?? '#525252'
                },
                placeholder: "Phase name"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "box-border flex shrink-0 cursor-pointer items-center justify-center border-b px-3 transition-colors",
        style: {
            ...sizeStyle,
            backgroundColor: palette?.bg ?? '#fafafa',
            borderBottomColor: palette?.border ?? '#e5e5e5',
            borderRightWidth: 1,
            borderRightColor: palette?.border ?? '#e5e5e5'
        },
        onClick: ()=>setEditing(true),
        title: phase || 'Click to set phase',
        children: phase ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-semibold uppercase tracking-wider",
            style: {
                color: palette?.text
            },
            children: phase
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
            lineNumber: 144,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] font-medium tracking-wider text-neutral-300",
            children: "+ Phase"
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
            lineNumber: 151,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s(PhaseCell, "mpZyfubhqknTxXZVqVVfqFuzn00=");
_c = PhaseCell;
function Board() {
    _s1();
    const stages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[stages]": (s)=>s.stages
    }["Board.useBlueprintStore[stages]"]);
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[steps]": (s)=>s.steps
    }["Board.useBlueprintStore[steps]"]);
    const addStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[addStage]": (s)=>s.addStage
    }["Board.useBlueprintStore[addStage]"]);
    const readOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[readOnly]": (s)=>s.readOnly
    }["Board.useBlueprintStore[readOnly]"]);
    const updateStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[updateStage]": (s)=>s.updateStage
    }["Board.useBlueprintStore[updateStage]"]);
    const lanes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[lanes]": (s)=>s.lanes
    }["Board.useBlueprintStore[lanes]"]);
    const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[cards]": (s)=>s.cards
    }["Board.useBlueprintStore[cards]"]);
    const rootDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[rootDocument]": (s)=>s.rootDocument
    }["Board.useBlueprintStore[rootDocument]"]);
    const activeBlueprintId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[activeBlueprintId]": (s)=>s.activeBlueprintId
    }["Board.useBlueprintStore[activeBlueprintId]"]);
    const rootBlueprintId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[rootBlueprintId]": (s)=>s.rootBlueprintId
    }["Board.useBlueprintStore[rootBlueprintId]"]);
    const moveCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[moveCard]": (s)=>s.moveCard
    }["Board.useBlueprintStore[moveCard]"]);
    const reorderCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[reorderCard]": (s)=>s.reorderCard
    }["Board.useBlueprintStore[reorderCard]"]);
    const toggleLaneCollapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[toggleLaneCollapsed]": (s)=>s.toggleLaneCollapsed
    }["Board.useBlueprintStore[toggleLaneCollapsed]"]);
    const storyboardImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[storyboardImages]": (s)=>s.storyboardImages
    }["Board.useBlueprintStore[storyboardImages]"]);
    const storyboardVisible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[storyboardVisible]": (s)=>s.storyboardVisible
    }["Board.useBlueprintStore[storyboardVisible]"]);
    const storyboardCollapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[storyboardCollapsed]": (s)=>s.storyboardCollapsed
    }["Board.useBlueprintStore[storyboardCollapsed]"]);
    const addStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[addStep]": (s)=>s.addStep
    }["Board.useBlueprintStore[addStep]"]);
    const addStoryboardImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[addStoryboardImage]": (s)=>s.addStoryboardImage
    }["Board.useBlueprintStore[addStoryboardImage]"]);
    const updateStoryboardImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[updateStoryboardImage]": (s)=>s.updateStoryboardImage
    }["Board.useBlueprintStore[updateStoryboardImage]"]);
    const removeStoryboardImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[removeStoryboardImage]": (s)=>s.removeStoryboardImage
    }["Board.useBlueprintStore[removeStoryboardImage]"]);
    const toggleStoryboardCollapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[toggleStoryboardCollapsed]": (s)=>s.toggleStoryboardCollapsed
    }["Board.useBlueprintStore[toggleStoryboardCollapsed]"]);
    const selectCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Board.useBlueprintStore[selectCard]": (s)=>s.selectCard
    }["Board.useBlueprintStore[selectCard]"]);
    const [activeCard, setActiveCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [panMode, setPanMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [storyboardUploadStageId, setStoryboardUploadStageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPointerPanning, setIsPointerPanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Heights measured from right panel, mirrored to left panel
    const [stageRowH, setStageRowH] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MIN_STAGE_ROW_H);
    const [descriptionRowH, setDescriptionRowH] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(60);
    // Panel refs
    const leftPanelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightPanelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const boardRootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Right-panel row refs for height measurement
    const rightStageRowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightDescriptionRowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightStoryboardRowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftStoryboardLabelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightLaneRowRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const leftLaneRowRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const pointerPanRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getRenderedHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Board.useCallback[getRenderedHeight]": (el)=>{
            if (!el) return 0;
            return Math.ceil(el.getBoundingClientRect().height);
        }
    }["Board.useCallback[getRenderedHeight]"], []);
    // Bidirectional vertical scroll sync (guard against infinite loops)
    const syncingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const handleRightScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Board.useCallback[handleRightScroll]": ()=>{
            if (syncingRef.current) return;
            syncingRef.current = true;
            requestAnimationFrame({
                "Board.useCallback[handleRightScroll]": ()=>{
                    if (leftPanelRef.current && rightPanelRef.current) {
                        leftPanelRef.current.scrollTop = rightPanelRef.current.scrollTop;
                    }
                    syncingRef.current = false;
                }
            }["Board.useCallback[handleRightScroll]"]);
        }
    }["Board.useCallback[handleRightScroll]"], []);
    const handleLeftScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Board.useCallback[handleLeftScroll]": ()=>{
            if (syncingRef.current) return;
            syncingRef.current = true;
            requestAnimationFrame({
                "Board.useCallback[handleLeftScroll]": ()=>{
                    if (rightPanelRef.current && leftPanelRef.current) {
                        rightPanelRef.current.scrollTop = leftPanelRef.current.scrollTop;
                    }
                    syncingRef.current = false;
                }
            }["Board.useCallback[handleLeftScroll]"]);
        }
    }["Board.useCallback[handleLeftScroll]"], []);
    // Measure stage row height (wraps with longest title)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Board.useLayoutEffect": ()=>{
            const el = rightStageRowRef.current;
            if (!el) return;
            const initialHeight = getRenderedHeight(el);
            if (initialHeight > 0) setStageRowH(initialHeight);
            const obs = new ResizeObserver({
                "Board.useLayoutEffect": ([entry])=>{
                    const h = getRenderedHeight(entry.target);
                    if (h > 0) setStageRowH(h);
                }
            }["Board.useLayoutEffect"]);
            obs.observe(el);
            return ({
                "Board.useLayoutEffect": ()=>obs.disconnect()
            })["Board.useLayoutEffect"];
        }
    }["Board.useLayoutEffect"], [
        getRenderedHeight
    ]);
    // Measure description row height (mirrors to left "Description" label).
    // Depends on whether any stage has a description — when that flips from
    // false→true (e.g. navigating into L2 Macro) the effect re-runs so the
    // ResizeObserver attaches to the newly-rendered row.
    const anyStageHasDescription = stages.some((s)=>Boolean(s.description?.trim()));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Board.useLayoutEffect": ()=>{
            const el = rightDescriptionRowRef.current;
            if (!el) return;
            const initialHeight = getRenderedHeight(el);
            if (initialHeight > 0) setDescriptionRowH(initialHeight);
            const obs = new ResizeObserver({
                "Board.useLayoutEffect": ([entry])=>{
                    const h = getRenderedHeight(entry.target);
                    if (h > 0) setDescriptionRowH(h);
                }
            }["Board.useLayoutEffect"]);
            obs.observe(el);
            return ({
                "Board.useLayoutEffect": ()=>obs.disconnect()
            })["Board.useLayoutEffect"];
        }
    }["Board.useLayoutEffect"], [
        getRenderedHeight,
        anyStageHasDescription
    ]);
    // Sync storyboard label height: imperatively set left label to match right row.
    // We avoid putting height in the JSX style prop so React never overrides this on re-renders.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Board.useLayoutEffect": ()=>{
            const leftEl = leftStoryboardLabelRef.current;
            if (!leftEl) return;
            if (storyboardCollapsed) {
                leftEl.style.height = `${COLLAPSED_LANE_H}px`;
                return;
            }
            const rightEl = rightStoryboardRowRef.current;
            if (!rightEl) {
                leftEl.style.height = `${STORYBOARD_ROW_H}px`;
                return;
            }
            const sync = {
                "Board.useLayoutEffect.sync": ()=>{
                    const h = rightEl.offsetHeight;
                    if (h > 0) leftEl.style.height = `${h}px`;
                }
            }["Board.useLayoutEffect.sync"];
            sync();
            const obs = new ResizeObserver(sync);
            obs.observe(rightEl);
            return ({
                "Board.useLayoutEffect": ()=>obs.disconnect()
            })["Board.useLayoutEffect"];
        }
    }["Board.useLayoutEffect"], [
        storyboardVisible,
        storyboardCollapsed
    ]);
    const sensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerSensor"], {
        activationConstraint: {
            distance: 5
        }
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardSensor"], {
        coordinateGetter: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortableKeyboardCoordinates"]
    }));
    const sortedStages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Board.useMemo[sortedStages]": ()=>[
                ...stages
            ].sort({
                "Board.useMemo[sortedStages]": (a, b)=>a.order - b.order
            }["Board.useMemo[sortedStages]"])
    }["Board.useMemo[sortedStages]"], [
        stages
    ]);
    const stepsPerStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Board.useMemo[stepsPerStage]": ()=>{
            const map = new Map();
            for (const stage of sortedStages){
                map.set(stage.id, [
                    ...steps.filter({
                        "Board.useMemo[stepsPerStage]": (s)=>s.stageId === stage.id
                    }["Board.useMemo[stepsPerStage]"])
                ].sort({
                    "Board.useMemo[stepsPerStage]": (a, b)=>a.order - b.order
                }["Board.useMemo[stepsPerStage]"]));
            }
            return map;
        }
    }["Board.useMemo[stepsPerStage]"], [
        sortedStages,
        steps
    ]);
    const visibleLanes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Board.useMemo[visibleLanes]": ()=>lanes.filter({
                "Board.useMemo[visibleLanes]": (l)=>l.visible
            }["Board.useMemo[visibleLanes]"]).sort({
                "Board.useMemo[visibleLanes]": (a, b)=>a.order - b.order
            }["Board.useMemo[visibleLanes]"])
    }["Board.useMemo[visibleLanes]"], [
        lanes
    ]);
    const isChildView = Boolean(rootDocument && activeBlueprintId !== rootBlueprintId);
    const isL2Mode = false;
    const isL3Mode = false;
    const isL1MacroMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Board.useMemo[isL1MacroMode]": ()=>lanes.some({
                "Board.useMemo[isL1MacroMode]": (l)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L1_MACRO_LANE_KEYS"].has(l.key)
            }["Board.useMemo[isL1MacroMode]"])
    }["Board.useMemo[isL1MacroMode]"], [
        lanes
    ]);
    const effectiveVisibleLanes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Board.useMemo[effectiveVisibleLanes]": ()=>{
            // L3 (Micro) uses the canonical L3 lane order while respecting the user's
            // visibility toggles from the Lanes dropdown.
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // L2 (Macro) uses L2_LANE_KEYS (includes user_journey for nested L3 journeys)
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return visibleLanes;
        }
    }["Board.useMemo[effectiveVisibleLanes]"], [
        isL2Mode,
        isL3Mode,
        lanes,
        visibleLanes
    ]);
    const lineOfVisibilityIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Board.useMemo[lineOfVisibilityIndex]": ()=>{
            if (isL2Mode || isL3Mode || isL1MacroMode) return -1;
            const idx = effectiveVisibleLanes.findIndex({
                "Board.useMemo[lineOfVisibilityIndex].idx": (l)=>l.key === FRONTSTAGE_BOUNDARY_KEY
            }["Board.useMemo[lineOfVisibilityIndex].idx"]);
            return idx >= 0 ? idx : -1;
        }
    }["Board.useMemo[lineOfVisibilityIndex]"], [
        effectiveVisibleLanes,
        isL2Mode,
        isL3Mode,
        isL1MacroMode
    ]);
    const phaseGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Board.useMemo[phaseGroups]": ()=>{
            if (!isL1MacroMode) return [];
            const groups = [];
            for (const stage of sortedStages){
                const phase = stage.phase ?? '';
                const stageSteps = stepsPerStage.get(stage.id) || [];
                const colCount = Math.max(stageSteps.length, 1);
                const last = groups[groups.length - 1];
                if (last && last.phase === phase) {
                    last.stageIds.push(stage.id);
                    last.colSpan += colCount;
                } else {
                    groups.push({
                        phase,
                        stageIds: [
                            stage.id
                        ],
                        colSpan: colCount
                    });
                }
            }
            return groups;
        }
    }["Board.useMemo[phaseGroups]"], [
        sortedStages,
        stepsPerStage,
        isL1MacroMode
    ]);
    const showStepHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Board.useMemo[showStepHeaders]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return sortedStages.some({
                "Board.useMemo[showStepHeaders]": (stage)=>{
                    const stageSteps = stepsPerStage.get(stage.id) || [];
                    if (stageSteps.length === 0) return false;
                    if (stageSteps.length !== 1) return true;
                    const onlyStep = stageSteps[0];
                    return Boolean(onlyStep && onlyStep.title.trim() !== stage.title.trim());
                }
            }["Board.useMemo[showStepHeaders]"]);
        }
    }["Board.useMemo[showStepHeaders]"], [
        isL2Mode,
        isL3Mode,
        sortedStages,
        stepsPerStage
    ]);
    const hasStageDescriptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Board.useMemo[hasStageDescriptions]": ()=>sortedStages.some({
                "Board.useMemo[hasStageDescriptions]": (stage)=>Boolean(stage.description?.trim())
            }["Board.useMemo[hasStageDescriptions]"])
    }["Board.useMemo[hasStageDescriptions]"], [
        sortedStages
    ]);
    const cardsMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Board.useMemo[cardsMap]": ()=>{
            const map = new Map();
            for (const card of cards){
                const key = `${card.stepId}::${card.laneKey}`;
                const existing = map.get(key) || [];
                existing.push(card);
                map.set(key, existing);
            }
            for (const [, arr] of map){
                arr.sort({
                    "Board.useMemo[cardsMap]": (a, b)=>a.order - b.order
                }["Board.useMemo[cardsMap]"]);
            }
            return map;
        }
    }["Board.useMemo[cardsMap]"], [
        cards
    ]);
    const getCardsForCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Board.useCallback[getCardsForCell]": (stepId, laneKey)=>cardsMap.get(`${stepId}::${laneKey}`) || []
    }["Board.useCallback[getCardsForCell]"], [
        cardsMap
    ]);
    const storyboardImagesByStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Board.useMemo[storyboardImagesByStep]": ()=>{
            const map = new Map();
            for (const img of storyboardImages){
                const list = map.get(img.stepId) ?? [];
                list.push(img);
                map.set(img.stepId, list);
            }
            for (const list of map.values()){
                list.sort({
                    "Board.useMemo[storyboardImagesByStep]": (a, b)=>a.createdAt.localeCompare(b.createdAt)
                }["Board.useMemo[storyboardImagesByStep]"]);
            }
            return map;
        }
    }["Board.useMemo[storyboardImagesByStep]"], [
        storyboardImages
    ]);
    /** L1/L2: at most one image per step; L3: unlimited. */ const addStoryboardImageIfAllowed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Board.useCallback[addStoryboardImageIfAllowed]": (stepId, dataUrl)=>{
            if (!isL3Mode && (storyboardImagesByStep.get(stepId)?.length ?? 0) >= 1) {
                return;
            }
            addStoryboardImage(stepId, dataUrl);
        }
    }["Board.useCallback[addStoryboardImageIfAllowed]"], [
        isL3Mode,
        storyboardImagesByStep,
        addStoryboardImage
    ]);
    // Sync each lane label height imperatively to match the right panel row.
    // We avoid putting height in JSX style so React never overwrites our DOM changes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Board.useLayoutEffect": ()=>{
            const rightMap = rightLaneRowRefs.current;
            const leftMap = leftLaneRowRefs.current;
            const cleanups = [];
            for (const [key, rightEl] of rightMap.entries()){
                const leftEl = leftMap.get(key);
                if (!leftEl) continue;
                const sync = {
                    "Board.useLayoutEffect.sync": ()=>{
                        const h = rightEl.offsetHeight;
                        if (h > 0) leftEl.style.height = `${h}px`;
                    }
                }["Board.useLayoutEffect.sync"];
                sync();
                const obs = new ResizeObserver(sync);
                obs.observe(rightEl);
                cleanups.push({
                    "Board.useLayoutEffect": ()=>obs.disconnect()
                }["Board.useLayoutEffect"]);
            }
            return ({
                "Board.useLayoutEffect": ()=>cleanups.forEach({
                        "Board.useLayoutEffect": (fn)=>fn()
                    }["Board.useLayoutEffect"])
            })["Board.useLayoutEffect"];
        }
    }["Board.useLayoutEffect"], [
        effectiveVisibleLanes
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Board.useEffect": ()=>{
            const handleFullscreenChange = {
                "Board.useEffect.handleFullscreenChange": ()=>{
                    setIsFullscreen(document.fullscreenElement === boardRootRef.current);
                }
            }["Board.useEffect.handleFullscreenChange"];
            document.addEventListener('fullscreenchange', handleFullscreenChange);
            return ({
                "Board.useEffect": ()=>document.removeEventListener('fullscreenchange', handleFullscreenChange)
            })["Board.useEffect"];
        }
    }["Board.useEffect"], []);
    const handleDragStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Board.useCallback[handleDragStart]": (event)=>{
            const card = cards.find({
                "Board.useCallback[handleDragStart].card": (c)=>c.id === event.active.id
            }["Board.useCallback[handleDragStart].card"]);
            if (card) setActiveCard(card);
        }
    }["Board.useCallback[handleDragStart]"], [
        cards
    ]);
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Board.useCallback[handleDragOver]": (_event)=>{}
    }["Board.useCallback[handleDragOver]"], []);
    const focusBoardSurface = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Board.useCallback[focusBoardSurface]": ()=>{
            boardRootRef.current?.focus({
                preventScroll: true
            });
        }
    }["Board.useCallback[focusBoardSurface]"], []);
    const handleBoardPointerDownCapture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Board.useCallback[handleBoardPointerDownCapture]": (event)=>{
            if (isBoardInteractiveTarget(event.target)) return;
            focusBoardSurface();
            // Deselect card when clicking on the blank canvas
            if (!event.target.closest('[data-board-card], [data-no-select]')) {
                selectCard(null);
            }
        }
    }["Board.useCallback[handleBoardPointerDownCapture]"], [
        focusBoardSurface,
        selectCard
    ]);
    const handleBoardKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Board.useCallback[handleBoardKeyDown]": (event)=>{
            if (isBoardInteractiveTarget(event.target)) return;
            const panel = rightPanelRef.current;
            if (!panel) return;
            switch(event.key){
                case 'ArrowLeft':
                    event.preventDefault();
                    panel.scrollBy({
                        left: -HORIZONTAL_PAN_STEP
                    });
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    panel.scrollBy({
                        left: HORIZONTAL_PAN_STEP
                    });
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    panel.scrollBy({
                        top: -VERTICAL_PAN_STEP
                    });
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    panel.scrollBy({
                        top: VERTICAL_PAN_STEP
                    });
                    break;
                case 'Home':
                    event.preventDefault();
                    panel.scrollTo({
                        left: 0,
                        top: panel.scrollTop
                    });
                    break;
                case 'End':
                    event.preventDefault();
                    panel.scrollTo({
                        left: panel.scrollWidth,
                        top: panel.scrollTop
                    });
                    break;
                case 'PageUp':
                    event.preventDefault();
                    panel.scrollBy({
                        top: -(panel.clientHeight * 0.8)
                    });
                    break;
                case 'PageDown':
                    event.preventDefault();
                    panel.scrollBy({
                        top: panel.clientHeight * 0.8
                    });
                    break;
                default:
                    break;
            }
        }
    }["Board.useCallback[handleBoardKeyDown]"], []);
    const handlePanPointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Board.useCallback[handlePanPointerDown]": (event)=>{
            if (!panMode || isBoardInteractiveTarget(event.target)) return;
            const panel = rightPanelRef.current;
            if (!panel) return;
            pointerPanRef.current = {
                pointerId: event.pointerId,
                startX: event.clientX,
                startY: event.clientY,
                startLeft: panel.scrollLeft,
                startTop: panel.scrollTop
            };
            setIsPointerPanning(true);
            event.currentTarget.setPointerCapture(event.pointerId);
            event.preventDefault();
        }
    }["Board.useCallback[handlePanPointerDown]"], [
        panMode
    ]);
    const handlePanPointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Board.useCallback[handlePanPointerMove]": (event)=>{
            const drag = pointerPanRef.current;
            const panel = rightPanelRef.current;
            if (!drag || !panel || drag.pointerId !== event.pointerId) return;
            panel.scrollLeft = drag.startLeft - (event.clientX - drag.startX);
            panel.scrollTop = drag.startTop - (event.clientY - drag.startY);
        }
    }["Board.useCallback[handlePanPointerMove]"], []);
    const stopPanPointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Board.useCallback[stopPanPointer]": (event)=>{
            if (event && pointerPanRef.current && event.currentTarget.hasPointerCapture(pointerPanRef.current.pointerId)) {
                event.currentTarget.releasePointerCapture(pointerPanRef.current.pointerId);
            }
            pointerPanRef.current = null;
            setIsPointerPanning(false);
        }
    }["Board.useCallback[stopPanPointer]"], []);
    const handleScrollToTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Board.useCallback[handleScrollToTop]": ()=>{
            const panel = rightPanelRef.current;
            if (!panel) return;
            panel.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            focusBoardSurface();
        }
    }["Board.useCallback[handleScrollToTop]"], [
        focusBoardSurface
    ]);
    const toggleFullscreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Board.useCallback[toggleFullscreen]": async ()=>{
            const container = boardRootRef.current;
            if (!container) return;
            if (document.fullscreenElement === container) {
                await document.exitFullscreen();
                return;
            }
            await container.requestFullscreen();
        }
    }["Board.useCallback[toggleFullscreen]"], []);
    const handleDragEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Board.useCallback[handleDragEnd]": (event)=>{
            setActiveCard(null);
            const { active, over } = event;
            if (!over) return;
            const activeCardId = active.id;
            const card = cards.find({
                "Board.useCallback[handleDragEnd].card": (c)=>c.id === activeCardId
            }["Board.useCallback[handleDragEnd].card"]);
            if (!card) return;
            const overData = over.data.current;
            if (overData?.type === 'cell') {
                const toStepId = overData.stepId;
                const toLaneKey = overData.laneKey;
                if (card.stepId === toStepId && card.laneKey === toLaneKey) return;
                moveCard(activeCardId, toStepId, toLaneKey, getCardsForCell(toStepId, toLaneKey).length);
            } else if (overData?.type === 'card') {
                const overCard = overData.card;
                if (card.stepId === overCard.stepId && card.laneKey === overCard.laneKey) {
                    const cellCards = getCardsForCell(card.stepId, card.laneKey);
                    const overIdx = cellCards.findIndex({
                        "Board.useCallback[handleDragEnd].overIdx": (c)=>c.id === overCard.id
                    }["Board.useCallback[handleDragEnd].overIdx"]);
                    if (overIdx !== -1) reorderCard(activeCardId, overIdx);
                } else {
                    moveCard(activeCardId, overCard.stepId, overCard.laneKey, overCard.order);
                }
            }
        }
    }["Board.useCallback[handleDragEnd]"], [
        cards,
        getCardsForCell,
        moveCard,
        reorderCard
    ]);
    // Reset scroll when the active blueprint changes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Board.useEffect": ()=>{
            const rightPanel = rightPanelRef.current;
            const leftPanel = leftPanelRef.current;
            rightPanel?.scrollTo({
                left: 0,
                top: 0
            });
            if (leftPanel) leftPanel.scrollTop = 0;
            focusBoardSurface();
        }
    }["Board.useEffect"], [
        activeBlueprintId,
        focusBoardSurface
    ]);
    if (sortedStages.length === 0) return null;
    const totalStepColumns = sortedStages.reduce((sum, stage)=>{
        const stageSteps = stepsPerStage.get(stage.id) || [];
        return sum + Math.max(stageSteps.length, 1);
    }, 0);
    // Content width for the RIGHT panel only (no lane label column)
    const contentWidth = totalStepColumns * STEP_WIDTH;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DndContext"], {
        sensors: sensors,
        collisionDetection: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closestCenter"],
        onDragStart: handleDragStart,
        onDragOver: handleDragOver,
        onDragEnd: handleDragEnd,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: boardRootRef,
                id: "board-main",
                tabIndex: 0,
                role: "region",
                "aria-label": "Service blueprint board",
                "aria-describedby": "board-keyboard-help",
                onPointerDownCapture: handleBoardPointerDownCapture,
                onKeyDown: handleBoardKeyDown,
                className: "relative z-0 flex h-full min-h-0 flex-1 overflow-hidden bg-[#fafafa] outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "board-keyboard-help",
                        className: "sr-only",
                        children: "Use the arrow keys to pan the board when this region is focused. Use Home and End to jump left and right, and Page Up and Page Down to move vertically."
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                        lineNumber: 659,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: leftPanelRef,
                        onScroll: handleLeftScroll,
                        className: "flex w-[172px] shrink-0 flex-col overflow-y-scroll overflow-x-hidden border-r border-neutral-200 bg-[#fafafa] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky top-0 z-30 bg-[#fafafa]",
                                children: [
                                    isL1MacroMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center border-b border-neutral-200 bg-neutral-50 px-4",
                                        style: {
                                            minHeight: 36
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold uppercase tracking-wider text-neutral-400",
                                            children: "Phase"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                            lineNumber: 676,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                        lineNumber: 672,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center border-b border-neutral-200 px-4",
                                        style: {
                                            height: stageRowH
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-semibold uppercase tracking-wider text-neutral-400",
                                            children: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Stages'
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                            lineNumber: 685,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                        lineNumber: 681,
                                        columnNumber: 13
                                    }, this),
                                    hasStageDescriptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center border-b border-neutral-200 px-4",
                                        style: {
                                            height: descriptionRowH
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-semibold uppercase tracking-wider text-neutral-400",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                            lineNumber: 697,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                        lineNumber: 693,
                                        columnNumber: 15
                                    }, this),
                                    storyboardVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: leftStoryboardLabelRef,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group/storyboard flex border-b border-neutral-200 px-3', storyboardCollapsed ? 'items-center py-2.5' : 'items-start py-3'),
                                        style: {
                                            minHeight: storyboardCollapsed ? COLLAPSED_LANE_H : STORYBOARD_ROW_H
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex w-full flex-col gap-1.5 overflow-hidden rounded-xl border transition-colors', storyboardCollapsed ? 'px-3 py-1.5' : 'px-3 py-2', 'bg-neutral-50 text-neutral-600 border-neutral-200'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                                        "aria-hidden": "true",
                                                        className: "h-3.5 w-3.5 shrink-0 opacity-70"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                        lineNumber: 723,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "min-w-0 flex-1 text-[13px] font-semibold leading-tight tracking-tight",
                                                        children: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Storyboard'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                        lineNumber: 724,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: toggleStoryboardCollapsed,
                                                        "aria-label": `${storyboardCollapsed ? 'Expand' : 'Collapse'} ${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Storyboard'}`,
                                                        "aria-expanded": !storyboardCollapsed,
                                                        className: "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-transparent text-current/80 transition-colors hover:bg-white/60 hover:text-current focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                                        children: storyboardCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            "aria-hidden": "true",
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                            lineNumber: 736,
                                                            columnNumber: 46
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                            "aria-hidden": "true",
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                            lineNumber: 736,
                                                            columnNumber: 103
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                        lineNumber: 727,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                lineNumber: 722,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                            lineNumber: 714,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                        lineNumber: 706,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                lineNumber: 670,
                                columnNumber: 11
                            }, this),
                            effectiveVisibleLanes.map((lane, laneIdx)=>{
                                const isAfterVisibility = lineOfVisibilityIndex >= 0 && laneIdx === lineOfVisibilityIndex + 1;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        isAfterVisibility && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center border-b border-t-2 border-t-neutral-400 bg-neutral-100 px-4",
                                            style: {
                                                height: LOV_H
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-semibold uppercase tracking-widest text-neutral-400",
                                                children: "Line of visibility"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                lineNumber: 757,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                            lineNumber: 753,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: (el)=>{
                                                if (el) leftLaneRowRefs.current.set(lane.key, el);
                                                else leftLaneRowRefs.current.delete(lane.key);
                                            },
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex border-b border-neutral-200 px-3 overflow-hidden', lane.collapsed ? 'items-center py-2.5' : 'items-start py-3'),
                                            style: {
                                                minHeight: lane.collapsed ? COLLAPSED_LANE_H : 88
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$LaneLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LaneLabel"], {
                                                lane: lane,
                                                collapsed: lane.collapsed,
                                                onToggleCollapsed: ()=>toggleLaneCollapsed(lane.key),
                                                titleOverride: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                lineNumber: 773,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                            lineNumber: 762,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, lane.key, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                    lineNumber: 751,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                        lineNumber: 664,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: rightPanelRef,
                        onScroll: handleRightScroll,
                        onPointerDown: handlePanPointerDown,
                        onPointerMove: handlePanPointerMove,
                        onPointerUp: stopPanPointer,
                        onPointerCancel: stopPanPointer,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-1 overflow-auto bg-[#fafafa]', panMode && 'cursor-grab', isPointerPanning && 'cursor-grabbing'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                minWidth: contentWidth
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sticky top-0 z-40 bg-white",
                                    children: [
                                        phaseGroups.length > 0 && (()=>{
                                            const distinctPhases = [
                                                ...new Set(phaseGroups.map((pg)=>pg.phase).filter(Boolean))
                                            ];
                                            const phaseColorMap = new Map(distinctPhases.map((p, i)=>[
                                                    p,
                                                    i
                                                ]));
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex",
                                                style: {
                                                    minHeight: 36
                                                },
                                                children: [
                                                    phaseGroups.map((pg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhaseCell, {
                                                            phase: pg.phase,
                                                            width: pg.colSpan * STEP_WIDTH,
                                                            stageIds: pg.stageIds,
                                                            colorIndex: phaseColorMap.get(pg.phase) ?? 0,
                                                            onSave: (value)=>{
                                                                for (const stageId of pg.stageIds){
                                                                    updateStage(stageId, {
                                                                        phase: value
                                                                    });
                                                                }
                                                            }
                                                        }, `${pg.stageIds[0]}-${idx}`, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                            lineNumber: 811,
                                                            columnNumber: 23
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "box-border shrink-0 border-b border-neutral-200 bg-neutral-50",
                                                        style: {
                                                            width: 120,
                                                            minWidth: 120
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                        lineNumber: 824,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                lineNumber: 809,
                                                columnNumber: 19
                                            }, this);
                                        })(),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: rightStageRowRef,
                                            className: "group relative z-20 flex items-stretch",
                                            style: {
                                                minHeight: MIN_STAGE_ROW_H
                                            },
                                            children: [
                                                sortedStages.map((stage)=>{
                                                    const stageSteps = stepsPerStage.get(stage.id) || [];
                                                    const colCount = Math.max(stageSteps.length, 1);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$StageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StageHeader"], {
                                                        stage: stage,
                                                        stepCount: colCount,
                                                        stepWidth: STEP_WIDTH,
                                                        isChildLevel: isL2Mode || isL3Mode
                                                    }, stage.id, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                        lineNumber: 839,
                                                        columnNumber: 21
                                                    }, this);
                                                }),
                                                !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group/addstage relative min-h-[56px] shrink-0 self-stretch border-b border-r border-neutral-200 bg-white transition-colors hover:bg-neutral-50/80",
                                                    style: {
                                                        width: 120
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pointer-events-none absolute inset-x-0 top-full z-30 flex justify-center border-x border-b border-neutral-200 bg-white py-1.5 shadow-sm opacity-0 transition-opacity duration-150 group-hover/addstage:pointer-events-auto group-hover/addstage:opacity-100 group-focus-within/addstage:pointer-events-auto group-focus-within/addstage:opacity-100",
                                                        role: "toolbar",
                                                        "aria-label": ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Add stage',
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>addStage(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'New stage'),
                                                            className: "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                                            "aria-label": ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Add stage',
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "h-3.5 w-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                                    lineNumber: 864,
                                                                    columnNumber: 25
                                                                }, this),
                                                                ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Add stage'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                            lineNumber: 858,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                        lineNumber: 853,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                    lineNumber: 849,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                            lineNumber: 830,
                                            columnNumber: 15
                                        }, this),
                                        hasStageDescriptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: rightDescriptionRowRef,
                                            className: "flex",
                                            children: [
                                                sortedStages.map((stage)=>{
                                                    const stageSteps = stepsPerStage.get(stage.id) || [];
                                                    const colCount = Math.max(stageSteps.length, 1);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$StageDescription$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StageDescription"], {
                                                        stage: stage,
                                                        width: colCount * STEP_WIDTH
                                                    }, stage.id, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                        lineNumber: 878,
                                                        columnNumber: 23
                                                    }, this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "shrink-0 border-b border-r border-neutral-200 bg-white",
                                                    style: {
                                                        width: 120,
                                                        minWidth: 120
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                    lineNumber: 885,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                            lineNumber: 873,
                                            columnNumber: 17
                                        }, this),
                                        showStepHeaders && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex border-b border-neutral-200 bg-white",
                                            children: [
                                                sortedStages.map((stage)=>{
                                                    const stageSteps = stepsPerStage.get(stage.id) || [];
                                                    if (stageSteps.length === 0) {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "shrink-0 border-r border-neutral-200 bg-white",
                                                            style: {
                                                                width: STEP_WIDTH,
                                                                minHeight: 48
                                                            }
                                                        }, stage.id, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                            lineNumber: 898,
                                                            columnNumber: 25
                                                        }, this);
                                                    }
                                                    return stageSteps.map((step, stepIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('shrink-0 bg-white', stepHeaderBorderR(stepIdx, stageSteps.length)),
                                                            style: {
                                                                width: STEP_WIDTH,
                                                                minHeight: 48
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$StepHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepHeader"], {
                                                                step: step,
                                                                stepWidth: STEP_WIDTH,
                                                                canMoveLeft: stepIdx > 0,
                                                                canMoveRight: stepIdx < stageSteps.length - 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                                lineNumber: 912,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, step.id, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                            lineNumber: 907,
                                                            columnNumber: 23
                                                        }, this));
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "shrink-0 border-r border-neutral-200 bg-white",
                                                    style: {
                                                        width: 120,
                                                        minWidth: 120
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                    lineNumber: 921,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                            lineNumber: 893,
                                            columnNumber: 17
                                        }, this),
                                        storyboardVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: rightStoryboardRowRef,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex border-b border-neutral-200', storyboardCollapsed && 'bg-neutral-50/80'),
                                            style: storyboardCollapsed ? {
                                                height: COLLAPSED_LANE_H
                                            } : {
                                                minHeight: STORYBOARD_ROW_H
                                            },
                                            children: storyboardCollapsed ? sortedStages.map((stage)=>{
                                                const stageSteps = stepsPerStage.get(stage.id) || [];
                                                if (stageSteps.length === 0) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "shrink-0 border-r border-neutral-200",
                                                        style: {
                                                            width: STEP_WIDTH,
                                                            height: COLLAPSED_LANE_H
                                                        }
                                                    }, stage.id, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                        lineNumber: 943,
                                                        columnNumber: 27
                                                    }, this);
                                                }
                                                return stageSteps.map((step, stepIdx)=>{
                                                    const n = storyboardImagesByStep.get(step.id)?.length ?? 0;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex shrink-0 items-center px-4', stepBorderR(stepIdx, stageSteps.length)),
                                                        style: {
                                                            width: STEP_WIDTH,
                                                            height: COLLAPSED_LANE_H
                                                        },
                                                        children: n > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-500",
                                                            children: [
                                                                n,
                                                                " image",
                                                                n !== 1 ? 's' : ''
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                            lineNumber: 962,
                                                            columnNumber: 31
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] text-neutral-300",
                                                            children: " "
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                            lineNumber: 966,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, step.id, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                        lineNumber: 953,
                                                        columnNumber: 27
                                                    }, this);
                                                });
                                            }) : sortedStages.map((stage)=>{
                                                const stageSteps = stepsPerStage.get(stage.id) || [];
                                                if (stageSteps.length === 0) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex shrink-0 items-start border-r border-neutral-200 p-2",
                                                        style: {
                                                            width: STEP_WIDTH,
                                                            minHeight: STORYBOARD_ROW_H
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setStoryboardUploadStageId(stage.id),
                                                            className: "flex min-h-24 w-full flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-neutral-200 bg-white/60 p-2 text-center transition-colors hover:border-neutral-300 hover:bg-white",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__["ImagePlus"], {
                                                                    className: "h-5 w-5 text-neutral-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                                    lineNumber: 986,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-medium text-neutral-600",
                                                                    children: "Add image / screen"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                                    lineNumber: 987,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                            lineNumber: 981,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, stage.id, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                        lineNumber: 976,
                                                        columnNumber: 27
                                                    }, this);
                                                }
                                                return stageSteps.map((step, stepIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('shrink-0', stepBorderR(stepIdx, stageSteps.length)),
                                                        style: {
                                                            width: STEP_WIDTH,
                                                            minHeight: STORYBOARD_ROW_H
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$StoryboardCell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StoryboardCell"], {
                                                            stepId: step.id,
                                                            microPageOnly: isL3Mode,
                                                            allowMultipleImages: isL3Mode,
                                                            images: storyboardImagesByStep.get(step.id) ?? [],
                                                            onAddImage: addStoryboardImageIfAllowed,
                                                            onUpdateImage: updateStoryboardImage,
                                                            onRemoveImage: removeStoryboardImage
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                            lineNumber: 1001,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, step.id, false, {
                                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                        lineNumber: 993,
                                                        columnNumber: 25
                                                    }, this));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                            lineNumber: 930,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                    lineNumber: 802,
                                    columnNumber: 13
                                }, this),
                                effectiveVisibleLanes.map((lane, laneIdx)=>{
                                    const isAfterVisibility = lineOfVisibilityIndex >= 0 && laneIdx === lineOfVisibilityIndex + 1;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            isAfterVisibility && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-b border-t-2 border-t-neutral-400 bg-neutral-100",
                                                style: {
                                                    height: LOV_H
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                lineNumber: 1024,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ref: (el)=>{
                                                    if (el) rightLaneRowRefs.current.set(lane.key, el);
                                                    else rightLaneRowRefs.current.delete(lane.key);
                                                },
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex border-b border-neutral-200', lane.collapsed && 'bg-neutral-50/80'),
                                                children: lane.collapsed ? sortedStages.map((stage)=>{
                                                    const stageSteps = stepsPerStage.get(stage.id) || [];
                                                    if (stageSteps.length === 0) {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "shrink-0 border-r border-neutral-200",
                                                            style: {
                                                                width: STEP_WIDTH,
                                                                height: COLLAPSED_LANE_H
                                                            }
                                                        }, stage.id, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                            lineNumber: 1044,
                                                            columnNumber: 31
                                                        }, this);
                                                    }
                                                    return stageSteps.map((step, stepIdx)=>{
                                                        const hiddenCards = getCardsForCell(step.id, lane.key).length;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex shrink-0 items-center px-4', stepBorderR(stepIdx, stageSteps.length)),
                                                            style: {
                                                                width: STEP_WIDTH,
                                                                height: COLLAPSED_LANE_H
                                                            },
                                                            children: hiddenCards > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-500",
                                                                children: [
                                                                    hiddenCards,
                                                                    " hidden"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                                lineNumber: 1063,
                                                                columnNumber: 35
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-neutral-300",
                                                                children: " "
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                                lineNumber: 1067,
                                                                columnNumber: 35
                                                            }, this)
                                                        }, step.id, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                            lineNumber: 1054,
                                                            columnNumber: 31
                                                        }, this);
                                                    });
                                                }) : sortedStages.map((stage)=>{
                                                    const stageSteps = stepsPerStage.get(stage.id) || [];
                                                    if (stageSteps.length === 0) {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "shrink-0 border-r border-neutral-200 p-1",
                                                            style: {
                                                                width: STEP_WIDTH,
                                                                minHeight: 88
                                                            }
                                                        }, stage.id, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                            lineNumber: 1077,
                                                            columnNumber: 31
                                                        }, this);
                                                    }
                                                    return stageSteps.map((step, stepIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('shrink-0 p-1', stepBorderR(stepIdx, stageSteps.length)),
                                                            style: {
                                                                width: STEP_WIDTH,
                                                                minHeight: 88
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$CellArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CellArea"], {
                                                                stepId: step.id,
                                                                laneKey: lane.key,
                                                                cards: getCardsForCell(step.id, lane.key)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                                lineNumber: 1093,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, step.id, false, {
                                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                            lineNumber: 1085,
                                                            columnNumber: 29
                                                        }, this));
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                lineNumber: 1029,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, lane.key, true, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                        lineNumber: 1022,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                            lineNumber: 799,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                        lineNumber: 786,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$CardDetailPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDetailPanel"], {}, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                        lineNumber: 1108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-no-pan": true,
                        className: "pointer-events-none absolute bottom-4 right-4 z-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-auto flex items-stretch gap-0 rounded-2xl border border-neutral-200/90 bg-white/95 p-1 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                            render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setPanMode((current)=>!current),
                                                "aria-label": panMode ? 'Disable pan mode' : 'Enable pan mode',
                                                "aria-pressed": panMode,
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('inline-flex h-10 w-10 items-center justify-center rounded-xl text-neutral-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400', panMode ? 'bg-blue-50 text-blue-700' : 'hover:bg-neutral-50')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                lineNumber: 1118,
                                                columnNumber: 19
                                            }, void 0),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__["Hand"], {
                                                "aria-hidden": "true",
                                                className: "h-4.5 w-4.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                lineNumber: 1129,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                            lineNumber: 1116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                            className: "items-center text-center",
                                            children: panMode ? 'Disable hand panning' : 'Enable hand panning'
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                            lineNumber: 1131,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                    lineNumber: 1115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "my-1 w-px self-stretch bg-neutral-200"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                    lineNumber: 1133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                            render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleScrollToTop,
                                                "aria-label": "Scroll board to top",
                                                className: "inline-flex h-10 w-10 items-center justify-center rounded-xl text-neutral-600 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                lineNumber: 1137,
                                                columnNumber: 19
                                            }, void 0),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                                "aria-hidden": "true",
                                                className: "h-4.5 w-4.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                lineNumber: 1144,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                            lineNumber: 1135,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                            className: "items-center text-center",
                                            children: "Scroll to top"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                            lineNumber: 1146,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                    lineNumber: 1134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "my-1 w-px self-stretch bg-neutral-200"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                    lineNumber: 1148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                            render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    void toggleFullscreen();
                                                },
                                                "aria-label": isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen',
                                                className: "inline-flex h-10 w-10 items-center justify-center rounded-xl text-neutral-600 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                lineNumber: 1152,
                                                columnNumber: 19
                                            }, void 0),
                                            children: isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                                "aria-hidden": "true",
                                                className: "h-4.5 w-4.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                lineNumber: 1162,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                "aria-hidden": "true",
                                                className: "h-4.5 w-4.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                                lineNumber: 1164,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                            lineNumber: 1150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                            className: "items-center text-center",
                                            children: isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                            lineNumber: 1167,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                                    lineNumber: 1149,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                            lineNumber: 1114,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                        lineNumber: 1110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                lineNumber: 648,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragOverlay"], {
                dropAnimation: {
                    duration: 200,
                    easing: 'ease'
                },
                children: activeCard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$BlueprintCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlueprintCard"], {
                    card: activeCard,
                    isDragOverlay: true
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                    lineNumber: 1174,
                    columnNumber: 23
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                lineNumber: 1173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$ImageCropModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageCropModal"], {
                open: storyboardUploadStageId !== null,
                onOpenChange: (open)=>{
                    if (!open) setStoryboardUploadStageId(null);
                },
                onConfirm: (dataUrl)=>{
                    if (!storyboardUploadStageId) return;
                    addStep(storyboardUploadStageId, 'New stage');
                    const step = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"].getState().steps.find((s)=>s.stageId === storyboardUploadStageId);
                    if (step) addStoryboardImage(step.id, dataUrl);
                    setStoryboardUploadStageId(null);
                },
                defaultFormat: "page",
                lockFormat: "page"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
                lineNumber: 1177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx",
        lineNumber: 641,
        columnNumber: 5
    }, this);
}
_s1(Board, "VumrXJz5zq4D3K8M0Gkmjwcv0tc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensors"]
    ];
});
_c1 = Board;
var _c, _c1;
__turbopack_context__.k.register(_c, "PhaseCell");
__turbopack_context__.k.register(_c1, "Board");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/EmptyState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/store/blueprint-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function EmptyState({ onImport }) {
    _s();
    const addStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "EmptyState.useBlueprintStore[addStage]": (s)=>s.addStage
    }["EmptyState.useBlueprintStore[addStage]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 items-center justify-center bg-[#fafafa]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex max-w-md flex-col items-center gap-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                        className: "h-8 w-8 text-neutral-400"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/EmptyState.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/EmptyState.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[18px] font-semibold text-neutral-800",
                            children: "Start a new blueprint"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/EmptyState.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1.5 text-[14px] leading-relaxed text-neutral-500",
                            children: "You are in a fresh blueprint. Add your first stage to start mapping, or import an existing blueprint from a spreadsheet."
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/EmptyState.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/EmptyState.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>addStage('New stage'),
                            className: "inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-2.5 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/EmptyState.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                "Add first stage"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/EmptyState.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onImport,
                            className: "inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-[14px] font-medium text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/EmptyState.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                "Import file"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/EmptyState.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/EmptyState.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/EmptyState.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/EmptyState.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(EmptyState, "lfBJiaqMp/AQ2Ob16xGNSdPwsS0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"]
    ];
});
_c = EmptyState;
var _c;
__turbopack_context__.k.register(_c, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiImportDialog",
    ()=>AiImportDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * AiImportDialog
 *
 * Multi-step import workflow for messy/unstructured source material.
 *
 * Steps:
 *   upload     — file drop-zone or paste text area
 *   extracting — brief parsing spinner
 *   mapping    — AI mapping service runs (mock by default)
 *   review     — editable row-by-row review before commit
 *   done       — success confirmation
 *
 * The AI output NEVER writes directly to the store; it always goes through
 * the review step first. Only the user-confirmed commit triggers loadBlueprint.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$parse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/parse.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$extract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/extract.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$extract$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/extract-pdf.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$mock$2d$mapping$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/mock-mapping-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$commit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/commit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/store/blueprint-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/lane-definitions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const MAPPING_SERVICE = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$mock$2d$mapping$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MockImportMappingService"]();
function confidenceColor(conf) {
    if (conf >= 0.75) return 'bg-emerald-100 text-emerald-700';
    if (conf >= 0.5) return 'bg-amber-100 text-amber-700';
    return 'bg-red-100 text-red-700';
}
function confidenceLabel(conf) {
    if (conf >= 0.75) return `${Math.round(conf * 100)}%`;
    if (conf >= 0.5) return `${Math.round(conf * 100)}%`;
    return `${Math.round(conf * 100)}%`;
}
function recordTypeBadge(type) {
    switch(type){
        case 'card_row':
            return {
                label: 'card',
                className: 'bg-blue-100 text-blue-700'
            };
        case 'structure_row':
            return {
                label: 'structure',
                className: 'bg-purple-100 text-purple-700'
            };
        case 'noise_row':
            return {
                label: 'noise',
                className: 'bg-neutral-100 text-neutral-500'
            };
    }
}
function truncate(text, max) {
    if (!text) return '—';
    return text.length <= max ? text : text.slice(0, max) + '…';
}
const RECORD_TYPE_OPTIONS = [
    'card_row',
    'structure_row',
    'noise_row'
];
const RECORD_TYPE_LABELS = {
    card_row: 'card',
    structure_row: 'structure',
    noise_row: 'noise'
};
function RowEditor({ row, index, onChange }) {
    _s();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const resolved = {
        recordType: row.editedRecordType ?? row.proposedRecordType,
        stage: row.editedStage ?? row.proposedStage,
        step: row.editedStep ?? row.proposedStep,
        laneKey: row.editedLaneKey !== undefined ? row.editedLaneKey : row.proposedLaneKey,
        cardTitle: row.editedCardTitle ?? row.proposedCardTitle,
        cardBody: row.editedCardBody ?? row.proposedCardBody
    };
    const isRejected = row.reviewStatus === 'rejected';
    const isAccepted = row.reviewStatus === 'accepted';
    const isCard = resolved.recordType === 'card_row';
    const needsAttention = isCard && (row.confidence < 0.5 || row.flags.length > 0);
    const { label: typeLabel, className: typeClassName } = recordTypeBadge(resolved.recordType);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-lg border text-[12px] transition-colors', isRejected ? 'border-neutral-200 bg-neutral-50 opacity-50' : needsAttention ? 'border-amber-200 bg-amber-50/40' : isAccepted ? 'border-emerald-200 bg-emerald-50/30' : 'border-neutral-200 bg-white'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-3 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-8 shrink-0 text-center text-[11px] text-neutral-400",
                        children: row.sourceRow.sourceRowNumber
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold', typeClassName),
                        children: typeLabel
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    isCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-36 shrink-0 truncate text-[11px] text-neutral-500",
                        children: [
                            truncate(resolved.stage, 14),
                            resolved.step !== resolved.stage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mx-0.5 text-neutral-300",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this),
                                    truncate(resolved.step, 14)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    isCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-28 shrink-0 truncate text-[11px] font-medium text-neutral-700",
                        children: resolved.laneKey ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANE_TITLE_MAP"][resolved.laneKey] ?? resolved.laneKey : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-500 italic",
                            children: "no lane"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 183,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "min-w-0 flex-1 truncate text-[12px] text-neutral-800",
                        children: isCard ? truncate(resolved.cardTitle || row.sourceRow.rawText, 80) : truncate(row.sourceRow.rawText, 80)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    isCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold', confidenceColor(row.confidence)),
                        children: confidenceLabel(row.confidence)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this),
                    row.flags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-3.5 w-3.5 shrink-0 text-amber-500"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setExpanded(!expanded),
                        className: "shrink-0 rounded p-0.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600",
                        "aria-label": expanded ? 'Collapse row' : 'Expand row',
                        children: expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 gap-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onChange(row.id, {
                                        reviewStatus: isAccepted ? 'pending' : 'accepted'
                                    }),
                                title: isAccepted ? 'Accepted — click to reset' : 'Accept this row',
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded p-1 transition-colors', isAccepted ? 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200' : 'text-neutral-300 hover:bg-neutral-100 hover:text-emerald-500'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onChange(row.id, {
                                        reviewStatus: isRejected ? 'pending' : 'rejected'
                                    }),
                                title: isRejected ? 'Rejected — click to restore' : 'Reject this row',
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded p-1 transition-colors', isRejected ? 'bg-red-100 text-red-500 hover:bg-red-200' : 'text-neutral-300 hover:bg-neutral-100 hover:text-red-400'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-neutral-100 px-3 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 rounded bg-neutral-50 px-2 py-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-400",
                                children: [
                                    "Source row ",
                                    row.sourceRow.sourceRowNumber,
                                    " · ",
                                    row.sourceRow.sourceSheetOrPage
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "break-all text-[11px] text-neutral-600",
                                children: row.sourceRow.rawText || '(empty)'
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this),
                    row.flags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex flex-col gap-1",
                        children: row.flags.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex items-start gap-1 text-[11px] text-amber-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "mt-0.5 h-3 w-3 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                        lineNumber: 277,
                                        columnNumber: 19
                                    }, this),
                                    f
                                ]
                            }, i, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                lineNumber: 276,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                        lineNumber: 274,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-semibold uppercase tracking-wide text-neutral-400",
                                        children: "Type"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: resolved.recordType,
                                        onChange: (e)=>onChange(row.id, {
                                                editedRecordType: e.target.value
                                            }),
                                        className: "rounded border border-neutral-200 bg-white px-2 py-1 text-[12px] text-neutral-700 focus:border-blue-400 focus:outline-none",
                                        children: RECORD_TYPE_OPTIONS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: t,
                                                children: RECORD_TYPE_LABELS[t]
                                            }, t, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                                lineNumber: 299,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-semibold uppercase tracking-wide text-neutral-400",
                                        children: "Stage"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: resolved.stage,
                                        onChange: (e)=>onChange(row.id, {
                                                editedStage: e.target.value
                                            }),
                                        className: "rounded border border-neutral-200 bg-white px-2 py-1 text-[12px] text-neutral-700 focus:border-blue-400 focus:outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-semibold uppercase tracking-wide text-neutral-400",
                                        children: "Step"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                        lineNumber: 321,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: resolved.step,
                                        onChange: (e)=>onChange(row.id, {
                                                editedStep: e.target.value
                                            }),
                                        className: "rounded border border-neutral-200 bg-white px-2 py-1 text-[12px] text-neutral-700 focus:border-blue-400 focus:outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col gap-0.5 sm:col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-semibold uppercase tracking-wide text-neutral-400",
                                        children: "Lane"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: resolved.laneKey,
                                        onChange: (e)=>onChange(row.id, {
                                                editedLaneKey: e.target.value
                                            }),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded border bg-white px-2 py-1 text-[12px] focus:border-blue-400 focus:outline-none', !resolved.laneKey ? 'border-red-300 text-red-500' : 'border-neutral-200 text-neutral-700'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "— assign lane —"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANE_KEYS"].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: k,
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANE_TITLE_MAP"][k]
                                                }, k, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                lineNumber: 333,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col gap-0.5 sm:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-semibold uppercase tracking-wide text-neutral-400",
                                        children: "Card title"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: resolved.cardTitle,
                                        onChange: (e)=>onChange(row.id, {
                                                editedCardTitle: e.target.value
                                            }),
                                        className: "rounded border border-neutral-200 bg-white px-2 py-1 text-[12px] text-neutral-700 focus:border-blue-400 focus:outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                lineNumber: 357,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col gap-0.5 sm:col-span-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-semibold uppercase tracking-wide text-neutral-400",
                                        children: "Card body (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                        lineNumber: 371,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: resolved.cardBody,
                                        onChange: (e)=>onChange(row.id, {
                                                editedCardBody: e.target.value
                                            }),
                                        rows: 2,
                                        className: "rounded border border-neutral-200 bg-white px-2 py-1 text-[12px] text-neutral-700 focus:border-blue-400 focus:outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                lineNumber: 370,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                lineNumber: 263,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_s(RowEditor, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");
_c = RowEditor;
function AiImportDialog({ open, onClose }) {
    _s1();
    const replaceActiveBlueprint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "AiImportDialog.useBlueprintStore[replaceActiveBlueprint]": (s)=>s.replaceActiveBlueprint
    }["AiImportDialog.useBlueprintStore[replaceActiveBlueprint]"]);
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('upload');
    const [dragOver, setDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sheets, setSheets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [workbook, setWorkbook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [extractedRows, setExtractedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mappedRows, setMappedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mappingErrors, setMappingErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mappingWarnings, setMappingWarnings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [serviceName, setServiceName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Enter title');
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [commitWarnings, setCommitWarnings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [committedCardCount, setCommittedCardCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [committedStageCount, setCommittedStageCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // ── Reset ────────────────────────────────────────────────────────────────
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AiImportDialog.useCallback[reset]": ()=>{
            setStep('upload');
            setDragOver(false);
            setFileName('');
            setSheets([]);
            setWorkbook(null);
            setExtractedRows([]);
            setMappedRows([]);
            setMappingErrors([]);
            setMappingWarnings([]);
            setServiceName('Enter title');
            setFilter('all');
            setCommitWarnings([]);
            setCommittedCardCount(0);
            setCommittedStageCount(0);
        }
    }["AiImportDialog.useCallback[reset]"], []);
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AiImportDialog.useCallback[handleClose]": ()=>{
            reset();
            onClose();
        }
    }["AiImportDialog.useCallback[handleClose]"], [
        reset,
        onClose
    ]);
    // ── Run mapping service ───────────────────────────────────────────────────
    const runMapping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AiImportDialog.useCallback[runMapping]": async (rows)=>{
            setStep('mapping');
            try {
                const result = await MAPPING_SERVICE.mapRows(rows);
                setMappedRows(result.rows);
                setMappingErrors(result.errors);
                setMappingWarnings(result.warnings);
                setStep('review');
            } catch (err) {
                setMappingErrors([
                    err instanceof Error ? err.message : 'Mapping failed'
                ]);
                setMappedRows([]);
                setStep('review');
            }
        }
    }["AiImportDialog.useCallback[runMapping]"], []);
    // ── Process a file ────────────────────────────────────────────────────────
    const processFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AiImportDialog.useCallback[processFile]": async (file)=>{
            setFileName(file.name);
            setStep('extracting');
            // Small delay so the spinner renders before synchronous parsing blocks the thread
            await new Promise({
                "AiImportDialog.useCallback[processFile]": (r)=>setTimeout(r, 80)
            }["AiImportDialog.useCallback[processFile]"]);
            const ext = file.name.split('.').pop()?.toLowerCase();
            if (ext === 'csv') {
                const text = await file.text();
                const extraction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$extract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFromCsv"])(text, file.name);
                setExtractedRows(extraction.rows);
                await runMapping(extraction.rows);
                return;
            }
            if (ext === 'xlsx' || ext === 'xls') {
                const buffer = await file.arrayBuffer();
                const { sheets: sheetList, workbook: wb } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$parse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseXlsx"])(buffer, file.name);
                setWorkbook(wb);
                const visibleSheets = sheetList.filter({
                    "AiImportDialog.useCallback[processFile].visibleSheets": (s)=>s.rowCount > 1
                }["AiImportDialog.useCallback[processFile].visibleSheets"]);
                setSheets(visibleSheets);
                if (visibleSheets.length === 0) {
                    setMappingErrors([
                        'No sheets with data found'
                    ]);
                    setMappedRows([]);
                    setStep('review');
                    return;
                }
                if (visibleSheets.length === 1) {
                    const extraction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$extract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFromXlsx"])(wb, visibleSheets[0].name, file.name);
                    setExtractedRows(extraction.rows);
                    await runMapping(extraction.rows);
                } else {
                    setStep('sheet-select');
                }
                return;
            }
            if (ext === 'pdf') {
                const buffer = await file.arrayBuffer();
                const extraction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$extract$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFromPdf"])(buffer, file.name);
                setExtractedRows(extraction.rows);
                if (extraction.errors.length > 0) {
                    setMappingErrors(extraction.errors);
                    setMappedRows([]);
                    setStep('review');
                } else {
                    await runMapping(extraction.rows);
                }
                return;
            }
            setMappingErrors([
                `Unsupported file type: .${ext ?? 'unknown'}. Use CSV, XLSX, or PDF.`
            ]);
            setMappedRows([]);
            setStep('review');
        }
    }["AiImportDialog.useCallback[processFile]"], [
        runMapping
    ]);
    // ── Sheet selection ───────────────────────────────────────────────────────
    const handleSheetSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AiImportDialog.useCallback[handleSheetSelect]": async (sheetName)=>{
            if (!workbook) return;
            setStep('extracting');
            await new Promise({
                "AiImportDialog.useCallback[handleSheetSelect]": (r)=>setTimeout(r, 80)
            }["AiImportDialog.useCallback[handleSheetSelect]"]);
            const extraction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$extract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFromXlsx"])(workbook, sheetName, fileName);
            setExtractedRows(extraction.rows);
            await runMapping(extraction.rows);
        }
    }["AiImportDialog.useCallback[handleSheetSelect]"], [
        workbook,
        fileName,
        runMapping
    ]);
    // ── Row editing ───────────────────────────────────────────────────────────
    const handleRowChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AiImportDialog.useCallback[handleRowChange]": (id, patch)=>{
            setMappedRows({
                "AiImportDialog.useCallback[handleRowChange]": (prev)=>prev.map({
                        "AiImportDialog.useCallback[handleRowChange]": (r)=>r.id === id ? {
                                ...r,
                                ...patch
                            } : r
                    }["AiImportDialog.useCallback[handleRowChange]"])
            }["AiImportDialog.useCallback[handleRowChange]"]);
        }
    }["AiImportDialog.useCallback[handleRowChange]"], []);
    // ── Bulk actions ──────────────────────────────────────────────────────────
    const handleAcceptAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AiImportDialog.useCallback[handleAcceptAll]": ()=>{
            setMappedRows({
                "AiImportDialog.useCallback[handleAcceptAll]": (prev)=>prev.map({
                        "AiImportDialog.useCallback[handleAcceptAll]": (r)=>r.reviewStatus !== 'rejected' ? {
                                ...r,
                                reviewStatus: 'accepted'
                            } : r
                    }["AiImportDialog.useCallback[handleAcceptAll]"])
            }["AiImportDialog.useCallback[handleAcceptAll]"]);
        }
    }["AiImportDialog.useCallback[handleAcceptAll]"], []);
    const handleRejectNoise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AiImportDialog.useCallback[handleRejectNoise]": ()=>{
            setMappedRows({
                "AiImportDialog.useCallback[handleRejectNoise]": (prev)=>prev.map({
                        "AiImportDialog.useCallback[handleRejectNoise]": (r)=>{
                            const type = r.editedRecordType ?? r.proposedRecordType;
                            return type === 'noise_row' ? {
                                ...r,
                                reviewStatus: 'rejected'
                            } : r;
                        }
                    }["AiImportDialog.useCallback[handleRejectNoise]"])
            }["AiImportDialog.useCallback[handleRejectNoise]"]);
        }
    }["AiImportDialog.useCallback[handleRejectNoise]"], []);
    // ── Commit ────────────────────────────────────────────────────────────────
    const handleCommit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AiImportDialog.useCallback[handleCommit]": ()=>{
            const { state, warnings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$commit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commitMappedRows"])(mappedRows, serviceName, fileName);
            setCommitWarnings(warnings);
            setCommittedCardCount(state.cards.length);
            setCommittedStageCount(state.stages.length);
            replaceActiveBlueprint(state);
            setStep('done');
        }
    }["AiImportDialog.useCallback[handleCommit]"], [
        mappedRows,
        serviceName,
        fileName,
        replaceActiveBlueprint
    ]);
    // ── Derived stats ─────────────────────────────────────────────────────────
    const cardRows = mappedRows.filter((r)=>(r.editedRecordType ?? r.proposedRecordType) === 'card_row');
    const acceptedCount = mappedRows.filter((r)=>r.reviewStatus === 'accepted').length;
    const rejectedCount = mappedRows.filter((r)=>r.reviewStatus === 'rejected').length;
    const pendingCount = mappedRows.filter((r)=>r.reviewStatus === 'pending').length;
    const needsAttentionCount = cardRows.filter((r)=>r.reviewStatus !== 'rejected' && (r.confidence < 0.5 || r.flags.length > 0)).length;
    // Rows that will be committed (pending + accepted, not rejected)
    const committableCards = cardRows.filter((r)=>r.reviewStatus !== 'rejected').length;
    const filteredRows = mappedRows.filter((r)=>{
        const type = r.editedRecordType ?? r.proposedRecordType;
        switch(filter){
            case 'cards':
                return type === 'card_row';
            case 'needs_attention':
                return type === 'card_row' && r.reviewStatus !== 'rejected' && (r.confidence < 0.5 || r.flags.length > 0);
            case 'accepted':
                return r.reviewStatus === 'accepted';
            case 'rejected':
                return r.reviewStatus === 'rejected';
            default:
                return true;
        }
    });
    // ── Render ────────────────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: (isOpen)=>!isOpen && handleClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-0 p-0 transition-all', step === 'review' ? 'max-h-[90vh] max-w-5xl' : 'max-w-lg'),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "border-b border-neutral-100 px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "flex items-center gap-2 text-[16px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "h-4 w-4 text-violet-500"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 617,
                                    columnNumber: 13
                                }, this),
                                "AI-assisted import"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 616,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            className: "text-[13px]",
                            children: "Upload a file — the AI will propose mappings for you to review before committing to the board. Supports CSV, XLSX, and PDF (e.g. Confluence exports)."
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 620,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                    lineNumber: 615,
                    columnNumber: 9
                }, this),
                step === 'upload' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-12 transition-colors', dragOver ? 'border-violet-400 bg-violet-50' : 'border-neutral-200 bg-neutral-50/50'),
                        onDragOver: (e)=>{
                            e.preventDefault();
                            setDragOver(true);
                        },
                        onDragLeave: ()=>setDragOver(false),
                        onDrop: (e)=>{
                            e.preventDefault();
                            setDragOver(false);
                            const file = e.dataTransfer.files[0];
                            if (file) processFile(file);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                className: "h-8 w-8 text-neutral-300"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                lineNumber: 645,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px] font-medium text-neutral-600",
                                children: [
                                    "Drop a file here or",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>fileRef.current?.click(),
                                        className: "text-violet-600 underline underline-offset-2 hover:text-violet-700",
                                        children: "browse"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                        lineNumber: 648,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                lineNumber: 646,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] text-neutral-400",
                                children: "CSV, XLSX, or PDF"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                lineNumber: 655,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: fileRef,
                                type: "file",
                                accept: ".csv,.xlsx,.xls,.pdf",
                                onChange: (e)=>{
                                    const file = e.target.files?.[0];
                                    if (file) processFile(file);
                                },
                                className: "hidden"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                lineNumber: 656,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                        lineNumber: 628,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                    lineNumber: 627,
                    columnNumber: 11
                }, this),
                step === 'sheet-select' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 px-6 py-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13px] text-neutral-600",
                            children: [
                                "Multiple sheets found in ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: fileName
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 674,
                                    columnNumber: 40
                                }, this),
                                ". Select one:"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 673,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: sheets.map((sheet)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSheetSelect(sheet.name),
                                    className: "flex w-full items-center justify-between rounded-lg border border-neutral-200 bg-white px-4 py-3 text-left transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[14px] font-medium text-neutral-800",
                                            children: sheet.name
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                            lineNumber: 683,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[12px] text-neutral-400",
                                            children: [
                                                sheet.rowCount,
                                                " rows"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                            lineNumber: 684,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, sheet.name, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 678,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 676,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: reset,
                            className: "text-[13px] text-neutral-500 underline underline-offset-2 hover:text-neutral-700",
                            children: "Choose a different file"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 688,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                    lineNumber: 672,
                    columnNumber: 11
                }, this),
                step === 'extracting' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-3 py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "h-8 w-8 animate-spin text-neutral-400"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 700,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[14px] font-medium text-neutral-700",
                            children: "Reading source data…"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 701,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                    lineNumber: 699,
                    columnNumber: 11
                }, this),
                step === 'mapping' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-3 py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-8 w-8 animate-spin text-neutral-300"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 709,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "absolute inset-0 m-auto h-4 w-4 text-violet-500"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 710,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 708,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[14px] font-medium text-neutral-700",
                            children: [
                                "Analysing ",
                                extractedRows.length,
                                " rows…"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 712,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[12px] text-neutral-400",
                            children: "Inferring stages, steps, and lane mappings"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 715,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                    lineNumber: 707,
                    columnNumber: 11
                }, this),
                step === 'review' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-0 flex-1 flex-col",
                    children: [
                        mappingErrors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-6 mt-4 rounded-lg border border-red-200 bg-red-50 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-1 flex items-center gap-1.5 text-[13px] font-semibold text-red-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                            lineNumber: 726,
                                            columnNumber: 19
                                        }, this),
                                        mappingErrors.length,
                                        " error",
                                        mappingErrors.length > 1 ? 's' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 725,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-0.5 text-[12px] text-red-600",
                                    children: mappingErrors.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: e
                                        }, i, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                            lineNumber: 731,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 729,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 724,
                            columnNumber: 15
                        }, this),
                        mappingWarnings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-6 mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-1 flex items-center gap-1.5 text-[13px] font-semibold text-amber-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                            lineNumber: 741,
                                            columnNumber: 19
                                        }, this),
                                        mappingWarnings.length,
                                        " warning",
                                        mappingWarnings.length > 1 ? 's' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 740,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-0.5 text-[12px] text-amber-600",
                                    children: mappingWarnings.map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: w
                                        }, i, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                            lineNumber: 746,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 744,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 739,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 border-b border-neutral-100 px-6 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[12px] text-neutral-500",
                                            children: "Service:"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                            lineNumber: 756,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: serviceName,
                                            onChange: (e)=>setServiceName(e.target.value),
                                            className: "rounded border border-neutral-200 px-2 py-0.5 text-[13px] font-medium text-neutral-800 focus:border-blue-400 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                            lineNumber: 757,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 755,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 765,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAcceptAll,
                                    className: "rounded px-2 py-1 text-[12px] font-medium text-emerald-700 transition-colors hover:bg-emerald-50",
                                    children: "Accept all"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 768,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleRejectNoise,
                                    className: "rounded px-2 py-1 text-[12px] font-medium text-neutral-500 transition-colors hover:bg-neutral-100",
                                    children: "Reject noise rows"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 774,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 753,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-0.5 border-b border-neutral-100 px-6 py-2",
                            children: [
                                {
                                    key: 'all',
                                    label: `All (${mappedRows.length})`
                                },
                                {
                                    key: 'cards',
                                    label: `Cards (${cardRows.length})`
                                },
                                {
                                    key: 'needs_attention',
                                    label: `Needs attention (${needsAttentionCount})`,
                                    highlight: needsAttentionCount > 0
                                },
                                {
                                    key: 'accepted',
                                    label: `Accepted (${acceptedCount})`
                                },
                                {
                                    key: 'rejected',
                                    label: `Rejected (${rejectedCount})`
                                }
                            ].map(({ key, label, highlight })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFilter(key),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-md px-2.5 py-1 text-[12px] font-medium transition-colors', filter === key ? 'bg-neutral-900 text-white' : highlight ? 'text-amber-600 hover:bg-amber-50' : 'text-neutral-500 hover:bg-neutral-100'),
                                    children: label
                                }, key, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 797,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 783,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-h-0 flex-1 overflow-y-auto px-6 py-3",
                            children: filteredRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-32 items-center justify-center text-[13px] text-neutral-400",
                                children: "No rows match this filter"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                lineNumber: 817,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: filteredRows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RowEditor, {
                                        row: row,
                                        index: i,
                                        onChange: handleRowChange
                                    }, row.id, false, {
                                        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                        lineNumber: 823,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                lineNumber: 821,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 815,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 border-t border-neutral-100 px-6 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[12px] text-neutral-500",
                                    children: [
                                        pendingCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-neutral-700",
                                                    children: pendingCount
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                                    lineNumber: 834,
                                                    columnNumber: 21
                                                }, this),
                                                " pending"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                            lineNumber: 833,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-emerald-700",
                                                    children: acceptedCount
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                                    lineNumber: 838,
                                                    columnNumber: 19
                                                }, this),
                                                " accepted"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                            lineNumber: 837,
                                            columnNumber: 17
                                        }, this),
                                        rejectedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-red-500",
                                                    children: rejectedCount
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                                    lineNumber: 842,
                                                    columnNumber: 21
                                                }, this),
                                                " rejected"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                            lineNumber: 841,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 831,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 846,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: reset,
                                    className: "rounded-lg px-3 py-2 text-[13px] font-medium text-neutral-500 transition-colors hover:bg-neutral-100",
                                    children: "Start over"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 847,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCommit,
                                    disabled: committableCards === 0,
                                    className: "rounded-lg bg-neutral-900 px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-neutral-700 disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                                    children: [
                                        "Commit ",
                                        committableCards,
                                        " card",
                                        committableCards !== 1 ? 's' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 853,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 830,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                    lineNumber: 721,
                    columnNumber: 11
                }, this),
                step === 'done' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-3 px-6 py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "h-10 w-10 text-emerald-500"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 867,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[15px] font-semibold text-neutral-800",
                            children: "Blueprint imported"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 868,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13px] text-neutral-500",
                            children: [
                                committedCardCount,
                                " card",
                                committedCardCount !== 1 ? 's' : '',
                                " across",
                                ' ',
                                committedStageCount,
                                " stage",
                                committedStageCount !== 1 ? 's' : ''
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 869,
                            columnNumber: 13
                        }, this),
                        commitWarnings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1 w-full rounded-lg border border-amber-200 bg-amber-50 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-1 text-[12px] font-semibold text-amber-700",
                                    children: [
                                        commitWarnings.length,
                                        " row",
                                        commitWarnings.length > 1 ? 's' : '',
                                        " skipped"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 875,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-0.5 text-[11px] text-amber-600",
                                    children: [
                                        commitWarnings.slice(0, 5).map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: w
                                            }, i, false, {
                                                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                                lineNumber: 880,
                                                columnNumber: 21
                                            }, this)),
                                        commitWarnings.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "…and ",
                                                commitWarnings.length - 5,
                                                " more"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                            lineNumber: 883,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                                    lineNumber: 878,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 874,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "mt-2 rounded-lg bg-neutral-900 px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                            children: "Done"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                            lineNumber: 888,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
                    lineNumber: 866,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
            lineNumber: 609,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx",
        lineNumber: 608,
        columnNumber: 5
    }, this);
}
_s1(AiImportDialog, "iDtwE21SQgPPjJEfjj31gJVSL8M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"]
    ];
});
_c1 = AiImportDialog;
var _c, _c1;
__turbopack_context__.k.register(_c, "RowEditor");
__turbopack_context__.k.register(_c1, "AiImportDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_defra-design_service-mapping-tool_src_components_ffbb1ae0._.js.map