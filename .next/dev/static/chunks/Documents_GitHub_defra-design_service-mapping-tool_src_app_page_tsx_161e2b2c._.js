(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/store/blueprint-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$BoardToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/BoardToolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$Board$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/Board.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/board/EmptyState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$import$2f$AiImportDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/components/import/AiImportDialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const STAGE_MRF_TITLE_PREVIOUS = 'MRFs separate material streams and pre-treatment';
const STAGE_MRF_TITLE = 'Materials Recovery Facilities separate material streams and pre-treatment';
const STAGE_PHASE_MAP = {
    'Selection of materials (raw or recycled)': 'Production',
    'Product design and manufacture of product': 'Production',
    'Placement of product on the market': 'Production',
    'Purchase products from the market': 'Consumption',
    'Product use (households and businesses)': 'Consumption',
    'Discard waste': 'Consumption',
    'Collect waste to transfer stations, maintain duty-of-care documentation': 'Waste management',
    [STAGE_MRF_TITLE]: 'Waste management',
    'Materials turned into secondary raw materials that re-enter manufacturing': 'Waste management',
    'Residual waste processed in EfW plants, energy generated and ash handled safely': 'Waste management',
    'Landfill disposal or exporting': 'Waste management'
};
function Home() {
    _s();
    const hydrate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Home.useBlueprintStore[hydrate]": (s)=>s.hydrate
    }["Home.useBlueprintStore[hydrate]"]);
    const hydrated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Home.useBlueprintStore[hydrated]": (s)=>s._hydrated
    }["Home.useBlueprintStore[hydrated]"]);
    const stages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Home.useBlueprintStore[stages]": (s)=>s.stages
    }["Home.useBlueprintStore[stages]"]);
    const updateStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"])({
        "Home.useBlueprintStore[updateStage]": (s)=>s.updateStage
    }["Home.useBlueprintStore[updateStage]"]);
    const [showImport, setShowImport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            hydrate();
        }
    }["Home.useEffect"], [
        hydrate
    ]);
    // Rename legacy stage title (template + localStorage) to spell out MRF
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!hydrated || stages.length === 0) return;
            for (const stage of stages){
                if (stage.title === STAGE_MRF_TITLE_PREVIOUS) {
                    updateStage(stage.id, {
                        title: STAGE_MRF_TITLE
                    });
                }
            }
        }
    }["Home.useEffect"], [
        hydrated,
        stages,
        updateStage
    ]);
    // One-time migration: assign phases to stages that match the waste lifecycle template
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!hydrated || stages.length === 0) return;
            const needsMigration = stages.some({
                "Home.useEffect.needsMigration": (s)=>{
                    const expected = STAGE_PHASE_MAP[s.title];
                    return expected && s.phase !== expected;
                }
            }["Home.useEffect.needsMigration"]);
            if (!needsMigration) return;
            for (const stage of stages){
                const phase = STAGE_PHASE_MAP[stage.title];
                if (phase && stage.phase !== phase) {
                    updateStage(stage.id, {
                        phase
                    });
                }
            }
        }
    }["Home.useEffect"], [
        hydrated,
        stages,
        updateStage
    ]);
    if (!hydrated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen items-center justify-center bg-[#fafafa]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-6 w-6 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-600"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/app/page.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/app/page.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen flex-col bg-[#fafafa]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$BoardToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoardToolbar"], {
                onImport: ()=>setShowImport(true)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/app/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            stages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                onImport: ()=>setShowImport(true)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/app/page.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$board$2f$Board$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Board"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/app/page.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$components$2f$import$2f$AiImportDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiImportDialog"], {
                open: showImport,
                onClose: ()=>setShowImport(false)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/app/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/defra-design/service-mapping-tool/src/app/page.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(Home, "2ubBDbn50KDm3ivTLe9ohZGkLxA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$store$2f$blueprint$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlueprintStore"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_defra-design_service-mapping-tool_src_app_page_tsx_161e2b2c._.js.map