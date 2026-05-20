(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/traceability/registry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SOURCE_TYPE_PREFIXES",
    ()=>SOURCE_TYPE_PREFIXES,
    "TRACEABILITY_PREFIXES",
    ()=>TRACEABILITY_PREFIXES,
    "getLanePrefix",
    ()=>getLanePrefix,
    "parseTraceabilityCode",
    ()=>parseTraceabilityCode
]);
const TRACEABILITY_PREFIXES = {
    // Blueprint structure
    service: 'SV',
    stage: 'ST',
    stage_outcome: 'SO',
    step: 'SS',
    // Swimlane card types (keyed by LaneKey)
    actor: 'AC',
    user_action_event: 'UA',
    user_need: 'UN',
    pain_point: 'PP',
    frontstage_touchpoint: 'FT',
    backstage_process: 'BP',
    description: 'DS',
    behaviour_change: 'BC',
    success_measure: 'SM',
    motivation: 'MO',
    ability: 'AB',
    prompts: 'PM',
    system: 'SY',
    policy_intent: 'PI',
    business_rule: 'BR',
    data_input: 'DI',
    data_output: 'DO',
    opportunities: 'OPP',
    ideas: 'IDEA',
    // L1 Macro swimlane card types
    policy_outcome: 'PO',
    user_outcome: 'UO',
    operational_outcome: 'OO',
    insights: 'IN',
    impact_of_pain_points: 'IP',
    performance_indicators: 'SPI',
    opportunities_lane: 'WOA',
    third_parties_involved: 'TP',
    support_system: 'SUP',
    // Downstream artifacts
    opportunity: 'OPP',
    evidence: 'EVD',
    requirement: 'REQ',
    api_contract: 'API',
    ui_scaffold: 'UI',
    // Relationship types (for NS codes on import mapping)
    next_step: 'NS'
};
const SOURCE_TYPE_PREFIXES = {
    pdf: 'PDF',
    xlsx: 'XLSX',
    csv: 'CSV',
    ai: 'AI',
    mural: 'MURAL',
    manual: 'MAN'
};
function getLanePrefix(laneKey) {
    const prefix = TRACEABILITY_PREFIXES[laneKey];
    // All LaneKeys have a direct entry in TRACEABILITY_PREFIXES
    return prefix ?? 'UN';
}
function parseTraceabilityCode(code) {
    // Semantic code: PP-027 or OPP-003
    const semanticMatch = code.match(/^([A-Z]+)-(\d{3,})$/);
    if (semanticMatch) {
        return {
            prefix: semanticMatch[1],
            sequence: parseInt(semanticMatch[2], 10)
        };
    }
    // Source provenance code: SRC-PDF-001
    const srcMatch = code.match(/^SRC-([A-Z]+)-(\d{3,})$/);
    if (srcMatch) {
        return {
            prefix: `SRC-${srcMatch[1]}`,
            sequence: parseInt(srcMatch[2], 10)
        };
    }
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/traceability/service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectSourceType",
    ()=>detectSourceType,
    "generateSourceRef",
    ()=>generateSourceRef,
    "generateTraceabilityCode",
    ()=>generateTraceabilityCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/traceability/registry.ts [app-client] (ecmascript)");
;
function generateTraceabilityCode(prefix, counters) {
    const current = counters[prefix] ?? 0;
    const next = current + 1;
    const code = `${prefix}-${String(next).padStart(3, '0')}`;
    return {
        code,
        updatedCounters: {
            ...counters,
            [prefix]: next
        }
    };
}
function generateSourceRef(sourceType, counters) {
    const typePrefix = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOURCE_TYPE_PREFIXES"][sourceType];
    const counterKey = `SRC_${typePrefix}`;
    const current = counters[counterKey] ?? 0;
    const next = current + 1;
    const ref = `SRC-${typePrefix}-${String(next).padStart(3, '0')}`;
    return {
        ref,
        updatedCounters: {
            ...counters,
            [counterKey]: next
        }
    };
}
function detectSourceType(sourceFile) {
    const ext = sourceFile.split('.').pop()?.toLowerCase() ?? '';
    if (ext === 'pdf') return 'pdf';
    if (ext === 'xlsx' || ext === 'xls') return 'xlsx';
    if (ext === 'csv') return 'csv';
    if (sourceFile === 'AI' || sourceFile.toLowerCase().includes('ai')) return 'ai';
    if (sourceFile.toLowerCase().includes('mural')) return 'mural';
    return 'manual';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/traceability/downstream.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createApiContractFromRequirement",
    ()=>createApiContractFromRequirement,
    "createRequirementFromOpportunity",
    ()=>createRequirementFromOpportunity,
    "createUiScaffoldFromRequirementAndApi",
    ()=>createUiScaffoldFromRequirementAndApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/traceability/service.ts [app-client] (ecmascript)");
;
;
function createRequirementFromOpportunity(opp, counters, blueprintId) {
    const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('REQ', counters);
    const ts = new Date().toISOString();
    const requirement = {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        blueprintId,
        traceabilityCode: code,
        title: opp.title,
        description: opp.statement || undefined,
        derivedFromIds: [
            opp.traceabilityCode ?? ''
        ],
        sourceCardIds: [
            ...opp.sourceCardIds
        ],
        status: 'draft',
        owner: opp.owner,
        createdAt: ts,
        updatedAt: ts
    };
    return {
        requirement,
        updatedCounters
    };
}
function createApiContractFromRequirement(req, counters, blueprintId) {
    const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('API', counters);
    const ts = new Date().toISOString();
    const apiContract = {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        blueprintId,
        traceabilityCode: code,
        title: req.title,
        description: req.description,
        derivedFromIds: [
            req.traceabilityCode
        ],
        sourceCardIds: [
            ...req.sourceCardIds
        ],
        status: 'draft',
        owner: req.owner,
        createdAt: ts,
        updatedAt: ts
    };
    return {
        apiContract,
        updatedCounters
    };
}
function createUiScaffoldFromRequirementAndApi(req, api, counters, blueprintId) {
    const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('UI', counters);
    const ts = new Date().toISOString();
    // Deduplicate sourceCardIds across both upstream artifacts
    const sourceCardIds = [
        ...new Set([
            ...req.sourceCardIds,
            ...api.sourceCardIds
        ])
    ];
    const uiScaffold = {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        blueprintId,
        traceabilityCode: code,
        title: req.title,
        description: req.description,
        derivedFromIds: [
            req.traceabilityCode,
            api.traceabilityCode
        ],
        sourceCardIds,
        status: 'draft',
        owner: req.owner,
        createdAt: ts,
        updatedAt: ts
    };
    return {
        uiScaffold,
        updatedCounters
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/lane-definitions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_LANES",
    ()=>DEFAULT_LANES,
    "L1_HIDDEN_LANE_KEYS",
    ()=>L1_HIDDEN_LANE_KEYS,
    "L1_INSIGHT_LANE_KEYS",
    ()=>L1_INSIGHT_LANE_KEYS,
    "L1_MACRO_LANES",
    ()=>L1_MACRO_LANES,
    "L1_MACRO_LANE_KEYS",
    ()=>L1_MACRO_LANE_KEYS,
    "L2_INSIGHT_LANE_KEYS",
    ()=>L2_INSIGHT_LANE_KEYS,
    "L2_LANE_KEYS",
    ()=>L2_LANE_KEYS,
    "L2_LANE_TITLE_OVERRIDES",
    ()=>L2_LANE_TITLE_OVERRIDES,
    "L3_INSIGHT_LANE_KEYS",
    ()=>L3_INSIGHT_LANE_KEYS,
    "L3_LANE_KEYS",
    ()=>L3_LANE_KEYS,
    "L3_LANE_TITLE_OVERRIDES",
    ()=>L3_LANE_TITLE_OVERRIDES,
    "LANE_ICON_MAP",
    ()=>LANE_ICON_MAP,
    "LANE_TITLE_MAP",
    ()=>LANE_TITLE_MAP,
    "getLaneTitle",
    ()=>getLaneTitle
]);
const DEFAULT_LANES = [
    {
        key: 'actor',
        title: 'Actor',
        order: 0,
        visible: true,
        collapsed: false
    },
    {
        key: 'user_action_event',
        title: 'User action',
        order: 1,
        visible: true,
        collapsed: false
    },
    {
        key: 'user_need',
        title: 'User need',
        order: 2,
        visible: true,
        collapsed: false
    },
    {
        key: 'pain_point',
        title: 'Pain point',
        order: 3,
        visible: true,
        collapsed: false
    },
    {
        key: 'frontstage_touchpoint',
        title: 'Frontstage touchpoint',
        order: 4,
        visible: true,
        collapsed: false
    },
    {
        key: 'activity',
        title: 'Activity',
        order: 5,
        visible: false,
        collapsed: false
    },
    {
        key: 'backstage_process',
        title: 'Backstage process',
        order: 6,
        visible: true,
        collapsed: false
    },
    {
        key: 'description',
        title: 'Description',
        order: 7,
        visible: false,
        collapsed: false
    },
    {
        key: 'behaviour_change',
        title: 'Desired behaviour change',
        order: 8,
        visible: false,
        collapsed: false
    },
    {
        key: 'success_measure',
        title: 'Success measure',
        order: 9,
        visible: false,
        collapsed: false
    },
    {
        key: 'motivation',
        title: 'Motivation',
        order: 10,
        visible: false,
        collapsed: false
    },
    {
        key: 'ability',
        title: 'Ability',
        order: 11,
        visible: false,
        collapsed: false
    },
    {
        key: 'prompts',
        title: 'Prompts',
        order: 12,
        visible: false,
        collapsed: false
    },
    {
        key: 'system',
        title: 'System',
        order: 13,
        visible: true,
        collapsed: false
    },
    {
        key: 'policy_intent',
        title: 'Policy reform',
        order: 14,
        visible: false,
        collapsed: false
    },
    {
        key: 'business_rule',
        title: 'Business rule',
        order: 15,
        visible: false,
        collapsed: false
    },
    {
        key: 'data_input',
        title: 'Data input',
        order: 16,
        visible: false,
        collapsed: false
    },
    {
        key: 'data_output',
        title: 'Data output',
        order: 17,
        visible: false,
        collapsed: false
    },
    {
        key: 'backstage_actor',
        title: 'Backstage actor',
        order: 18,
        visible: false,
        collapsed: false
    },
    {
        key: 'shared_services',
        title: 'Shared services',
        order: 19,
        visible: false,
        collapsed: false
    },
    {
        key: 'opportunities',
        title: 'Opportunities',
        order: 20,
        visible: true,
        collapsed: false
    },
    {
        key: 'ideas',
        title: 'Ideas',
        order: 21,
        visible: true,
        collapsed: false
    }
];
const L1_MACRO_LANES = [
    {
        key: 'actor',
        title: 'Actors',
        order: 0,
        visible: true,
        collapsed: false
    },
    {
        key: 'policy_outcome',
        title: 'Policy outcome',
        order: 1,
        visible: true,
        collapsed: false
    },
    {
        key: 'user_outcome',
        title: 'User outcome',
        order: 2,
        visible: true,
        collapsed: false
    },
    {
        key: 'operational_outcome',
        title: 'Operational outcome',
        order: 3,
        visible: true,
        collapsed: false
    },
    {
        key: 'performance_indicators',
        title: 'Success measure',
        order: 4,
        visible: false,
        collapsed: false
    },
    {
        key: 'insights',
        title: 'Insights',
        order: 5,
        visible: false,
        collapsed: false
    },
    {
        key: 'pain_point',
        title: 'Pain points',
        order: 6,
        visible: true,
        collapsed: false
    },
    {
        key: 'impact_of_pain_points',
        title: 'Impact of pain points',
        order: 7,
        visible: true,
        collapsed: false
    },
    {
        key: 'opportunities_lane',
        title: 'Ideas',
        order: 8,
        visible: false,
        collapsed: false
    }
];
const L1_MACRO_LANE_KEYS = new Set([
    'policy_outcome',
    'user_outcome',
    'operational_outcome',
    'insights',
    'impact_of_pain_points',
    'performance_indicators',
    'opportunities_lane'
]);
const L1_HIDDEN_LANE_KEYS = new Set([
    'user_action_event',
    'business_rule',
    'data_input',
    'data_output',
    'backstage_actor',
    'shared_services'
]);
const L2_LANE_KEYS = [
    'actor',
    'frontstage_touchpoint',
    'activity',
    'user_need',
    'pain_point',
    'backstage_process',
    'behaviour_change',
    'success_measure',
    'motivation',
    'ability',
    'prompts',
    'opportunities',
    'ideas'
];
const L3_LANE_KEYS = [
    'actor',
    'user_action_event',
    'user_need',
    'pain_point',
    'frontstage_touchpoint',
    'backstage_actor',
    'backstage_process',
    'business_rule',
    'behaviour_change',
    'success_measure',
    'data_input',
    'data_output',
    'shared_services',
    'system',
    'opportunities',
    'ideas'
];
const L2_LANE_TITLE_OVERRIDES = {
    system: 'Shared capabilities'
};
const L3_LANE_TITLE_OVERRIDES = {
    system: 'Shared capabilities',
    behaviour_change: 'What good looks like'
};
const L1_INSIGHT_LANE_KEYS = new Set([
    'pain_point',
    'insights'
]);
const L2_INSIGHT_LANE_KEYS = new Set([
    'pain_point',
    'user_need'
]);
const L3_INSIGHT_LANE_KEYS = new Set([
    'pain_point',
    'user_need'
]);
const LANE_TITLE_MAP = Object.fromEntries(_c1 = [
    ...DEFAULT_LANES,
    ...L1_MACRO_LANES
].map(_c = (lane)=>[
        lane.key,
        lane.title
    ]));
_c2 = LANE_TITLE_MAP;
function getLaneTitle(key) {
    return LANE_TITLE_MAP[key];
}
const LANE_ICON_MAP = {
    actor: 'User',
    user_action_event: 'MousePointerClick',
    user_need: 'Heart',
    pain_point: 'AlertTriangle',
    frontstage_touchpoint: 'Monitor',
    activity: 'ListChecks',
    backstage_process: 'Settings',
    description: 'BookOpen',
    behaviour_change: 'Sparkles',
    success_measure: 'BarChart3',
    motivation: 'Target',
    ability: 'Cog',
    prompts: 'Lightbulb',
    system: 'Database',
    policy_intent: 'Scale',
    business_rule: 'BookOpen',
    data_input: 'DatabaseBackup',
    data_output: 'DatabaseZap',
    backstage_actor: 'UserCog',
    shared_services: 'Share2',
    opportunities: 'Sparkles',
    ideas: 'Lightbulb',
    // L1 Macro lanes
    policy_outcome: 'Scale',
    user_outcome: 'Target',
    operational_outcome: 'Cog',
    insights: 'Lightbulb',
    impact_of_pain_points: 'Flame',
    performance_indicators: 'BarChart3',
    opportunities_lane: 'Sparkles',
    third_parties_involved: 'Users',
    support_system: 'LifeBuoy'
};
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LANE_TITLE_MAP$Object.fromEntries$[...DEFAULT_LANES, ...L1_MACRO_LANES].map");
__turbopack_context__.k.register(_c1, "LANE_TITLE_MAP$Object.fromEntries");
__turbopack_context__.k.register(_c2, "LANE_TITLE_MAP");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/seed-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDefraEnvironmentalOstBlueprint",
    ()=>createDefraEnvironmentalOstBlueprint,
    "createExampleOstBlueprint",
    ()=>createExampleOstBlueprint,
    "createSeedBlueprint",
    ()=>createSeedBlueprint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/lane-definitions.ts [app-client] (ecmascript)");
;
;
function makeCard(blueprintId, stageId, stepId, laneKey, title, body, order, tags = []) {
    const now = new Date().toISOString();
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        blueprintId,
        stageId,
        stepId,
        laneKey: laneKey,
        title,
        body,
        order,
        tags,
        sourceFile: '',
        sourceSheet: '',
        sourceRow: null,
        sourceRef: 'seed',
        createdAt: now,
        updatedAt: now
    };
}
function createSeedBlueprint() {
    const bpId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const now = new Date().toISOString();
    const stages = [
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            title: 'Prepare',
            outcome: 'Producer understands obligations and has the required source information',
            order: 0,
            phase: 'Planning'
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            title: 'Submit',
            outcome: 'Producer successfully submits a valid return before the deadline',
            order: 1,
            phase: 'Submission'
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            title: 'Review',
            outcome: 'Regulator reviews submission and confirms or queries the data',
            order: 2,
            phase: 'Review'
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            title: 'Respond',
            outcome: 'Producer resolves any queries and receives confirmation of compliance',
            order: 3,
            phase: 'Resolution'
        }
    ];
    const steps = [
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            stageId: stages[0].id,
            title: 'Check whether reporting applies',
            order: 0
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            stageId: stages[0].id,
            title: 'Gather packaging data',
            order: 1
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            stageId: stages[1].id,
            title: 'Upload and review submission',
            order: 0
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            stageId: stages[1].id,
            title: 'Confirm and submit return',
            order: 1
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            stageId: stages[2].id,
            title: 'Assess submission quality',
            order: 0
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            stageId: stages[3].id,
            title: 'Respond to queries',
            order: 0
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            stageId: stages[3].id,
            title: 'Receive confirmation',
            order: 1
        }
    ];
    const cards = [
        // Stage 1, Step 1: Check whether reporting applies
        makeCard(bpId, stages[0].id, steps[0].id, 'actor', 'Producer', 'Small business owner trying to understand whether reporting applies', 0, [
            'user'
        ]),
        makeCard(bpId, stages[0].id, steps[0].id, 'user_action_event', 'Reviews guidance and checks packaging thresholds', 'Searches GOV.UK and cross-checks tonnage thresholds', 0, [
            'journey'
        ]),
        makeCard(bpId, stages[0].id, steps[0].id, 'user_need', 'As a producer, I need to know whether I am in scope and what I must report', '', 0, [
            'research'
        ]),
        makeCard(bpId, stages[0].id, steps[0].id, 'pain_point', 'Guidance is fragmented and threshold rules are hard to interpret', '', 0, [
            'research'
        ]),
        makeCard(bpId, stages[0].id, steps[0].id, 'frontstage_touchpoint', 'Guidance pages and obligation checker', '', 0, [
            'touchpoint'
        ]),
        makeCard(bpId, stages[0].id, steps[0].id, 'backstage_process', 'Maintain guidance content and obligation checker rules', '', 0, [
            'operations'
        ]),
        makeCard(bpId, stages[0].id, steps[0].id, 'system', 'CMS and obligation checker service', '', 0, [
            'tech'
        ]),
        makeCard(bpId, stages[0].id, steps[0].id, 'policy_intent', 'Help producers understand whether EPR applies to them', '', 0, [
            'policy'
        ]),
        makeCard(bpId, stages[0].id, steps[0].id, 'business_rule', 'If annual packaging placed on market exceeds the threshold, registration and reporting are required', '', 0, [
            'rules'
        ]),
        makeCard(bpId, stages[0].id, steps[0].id, 'data_input', 'Annual tonnage, company registration number, packaging activity type', '', 0, [
            'data'
        ]),
        makeCard(bpId, stages[0].id, steps[0].id, 'data_output', 'In-scope decision and reporting requirements summary', '', 0, [
            'data'
        ]),
        // Stage 1, Step 2: Gather packaging data
        makeCard(bpId, stages[0].id, steps[1].id, 'actor', 'Producer', '', 0, [
            'user'
        ]),
        makeCard(bpId, stages[0].id, steps[1].id, 'user_action_event', 'Collects packaging data from suppliers and internal records', '', 0, [
            'journey'
        ]),
        makeCard(bpId, stages[0].id, steps[1].id, 'user_need', 'As a producer, I need clarity on what data to collect and in what format', '', 0, [
            'research'
        ]),
        makeCard(bpId, stages[0].id, steps[1].id, 'pain_point', 'Suppliers do not provide packaging data easily', '', 0, [
            'research'
        ]),
        makeCard(bpId, stages[0].id, steps[1].id, 'frontstage_touchpoint', 'Data collection template and supplier portal', '', 0, [
            'touchpoint'
        ]),
        makeCard(bpId, stages[0].id, steps[1].id, 'backstage_process', 'Provide data templates and process supplier integrations', '', 0, [
            'operations'
        ]),
        makeCard(bpId, stages[0].id, steps[1].id, 'system', 'Packaging data schema and supplier integration API', '', 0, [
            'tech'
        ]),
        makeCard(bpId, stages[0].id, steps[1].id, 'data_input', 'Packaging material type, weight, recyclability rating, supplier ID', '', 0, [
            'data'
        ]),
        // Stage 2, Step 1: Upload and review submission
        makeCard(bpId, stages[1].id, steps[2].id, 'actor', 'Producer', '', 0, [
            'user'
        ]),
        makeCard(bpId, stages[1].id, steps[2].id, 'user_action_event', 'Uploads completed file and reviews validation messages', '', 0, [
            'journey'
        ]),
        makeCard(bpId, stages[1].id, steps[2].id, 'user_need', 'As a producer, I need quick feedback on whether my submission is valid', '', 0, [
            'research'
        ]),
        makeCard(bpId, stages[1].id, steps[2].id, 'pain_point', 'Validation errors are difficult to interpret and do not explain how to fix them', '', 0, [
            'research'
        ]),
        makeCard(bpId, stages[1].id, steps[2].id, 'frontstage_touchpoint', 'Upload form and validation screen', '', 0, [
            'touchpoint'
        ]),
        makeCard(bpId, stages[1].id, steps[2].id, 'backstage_process', 'Run validation rules and generate submission receipt', '', 0, [
            'operations'
        ]),
        makeCard(bpId, stages[1].id, steps[2].id, 'system', 'Submission portal and validation rules engine', '', 0, [
            'tech'
        ]),
        makeCard(bpId, stages[1].id, steps[2].id, 'policy_intent', 'Support compliant and timely submission of packaging data', '', 0, [
            'policy'
        ]),
        makeCard(bpId, stages[1].id, steps[2].id, 'business_rule', 'Submission must include all mandatory fields and pass validation before acceptance', '', 0, [
            'rules'
        ]),
        makeCard(bpId, stages[1].id, steps[2].id, 'data_input', 'Submission file, reporting period, producer identifier', '', 0, [
            'data'
        ]),
        makeCard(bpId, stages[1].id, steps[2].id, 'data_output', 'Validation result, accepted submission record, error report', '', 0, [
            'data'
        ]),
        // Stage 2, Step 2: Confirm and submit return
        makeCard(bpId, stages[1].id, steps[3].id, 'actor', 'Producer', '', 0, [
            'user'
        ]),
        makeCard(bpId, stages[1].id, steps[3].id, 'user_action_event', 'Reviews summary and confirms submission', '', 0, [
            'journey'
        ]),
        makeCard(bpId, stages[1].id, steps[3].id, 'frontstage_touchpoint', 'Submission confirmation screen and email', '', 0, [
            'touchpoint'
        ]),
        makeCard(bpId, stages[1].id, steps[3].id, 'data_output', 'Submission receipt and reference number', '', 0, [
            'data'
        ]),
        // Stage 3, Step 1: Assess submission quality
        makeCard(bpId, stages[2].id, steps[4].id, 'actor', 'Regulator', '', 0, [
            'internal'
        ]),
        makeCard(bpId, stages[2].id, steps[4].id, 'user_action_event', 'Reviews flagged submissions and runs compliance checks', '', 0, [
            'journey'
        ]),
        makeCard(bpId, stages[2].id, steps[4].id, 'frontstage_touchpoint', 'Query notification email', '', 0, [
            'touchpoint'
        ]),
        makeCard(bpId, stages[2].id, steps[4].id, 'backstage_process', 'Automated compliance scoring and manual review', '', 0, [
            'operations'
        ]),
        makeCard(bpId, stages[2].id, steps[4].id, 'system', 'Compliance review platform and risk scoring engine', '', 0, [
            'tech'
        ]),
        makeCard(bpId, stages[2].id, steps[4].id, 'business_rule', 'Submissions with anomalies above threshold are flagged for manual review', '', 0, [
            'rules'
        ]),
        makeCard(bpId, stages[2].id, steps[4].id, 'data_input', 'Submitted data, historical benchmarks, risk thresholds', '', 0, [
            'data'
        ]),
        makeCard(bpId, stages[2].id, steps[4].id, 'data_output', 'Review outcome, query list, compliance score', '', 0, [
            'data'
        ]),
        // Stage 4, Step 1: Respond to queries
        makeCard(bpId, stages[3].id, steps[5].id, 'actor', 'Producer', '', 0, [
            'user'
        ]),
        makeCard(bpId, stages[3].id, steps[5].id, 'user_action_event', 'Reviews query details and submits corrected data or evidence', '', 0, [
            'journey'
        ]),
        makeCard(bpId, stages[3].id, steps[5].id, 'user_need', 'As a producer, I need to understand what exactly is wrong and how to fix it', '', 0, [
            'research'
        ]),
        makeCard(bpId, stages[3].id, steps[5].id, 'pain_point', 'Query notifications lack detail and turnaround is too short', '', 0, [
            'research'
        ]),
        makeCard(bpId, stages[3].id, steps[5].id, 'frontstage_touchpoint', 'Query response portal and notification emails', '', 0, [
            'touchpoint'
        ]),
        makeCard(bpId, stages[3].id, steps[5].id, 'backstage_process', 'Track query responses and update compliance record', '', 0, [
            'operations'
        ]),
        makeCard(bpId, stages[3].id, steps[5].id, 'system', 'Query management system', '', 0, [
            'tech'
        ]),
        // Stage 4, Step 2: Receive confirmation
        makeCard(bpId, stages[3].id, steps[6].id, 'actor', 'Producer', '', 0, [
            'user'
        ]),
        makeCard(bpId, stages[3].id, steps[6].id, 'user_action_event', 'Receives compliance confirmation', '', 0, [
            'journey'
        ]),
        makeCard(bpId, stages[3].id, steps[6].id, 'frontstage_touchpoint', 'Compliance certificate and portal status', '', 0, [
            'touchpoint'
        ]),
        makeCard(bpId, stages[3].id, steps[6].id, 'data_output', 'Compliance status, certificate, next reporting period date', '', 0, [
            'data'
        ])
    ];
    // ── Strategic Goals (circular economy) ────────────────────────────────────
    const goalReduceWasteId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const goalIncreaseRecyclingId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const goalPreventCrimeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const strategicGoals = [
        {
            id: goalReduceWasteId,
            blueprintId: bpId,
            title: 'Reduce waste',
            description: 'Minimise packaging waste through accurate data and better compliance guidance.',
            color: 'emerald',
            order: 0,
            createdAt: now,
            updatedAt: now
        },
        {
            id: goalIncreaseRecyclingId,
            blueprintId: bpId,
            title: 'Increase recycling of materials',
            description: 'Improve quality and completeness of packaging data to support recycling targets.',
            color: 'blue',
            order: 1,
            createdAt: now,
            updatedAt: now
        },
        {
            id: goalPreventCrimeId,
            blueprintId: bpId,
            title: 'Prevent waste crime',
            description: 'Strengthen submission validation and compliance review to deter fraudulent reporting.',
            color: 'rose',
            order: 2,
            createdAt: now,
            updatedAt: now
        }
    ];
    // ── Outcomes ───────────────────────────────────────────────────────────────
    const out1Id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // Reduce waste → producer self-service
    const out2Id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // Increase recycling → data completeness
    const out3Id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // Prevent crime → submission accuracy
    const out4Id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // Prevent crime → query resolution
    const outcomes = [
        {
            id: out1Id,
            blueprintId: bpId,
            goalId: goalReduceWasteId,
            title: '80% of producers successfully self-serve on obligation checks',
            metric: '80% self-serve rate',
            order: 0,
            createdAt: now,
            updatedAt: now
        },
        {
            id: out2Id,
            blueprintId: bpId,
            goalId: goalIncreaseRecyclingId,
            title: 'Producers submit complete and accurate packaging material data',
            metric: '>95% data completeness score',
            order: 0,
            createdAt: now,
            updatedAt: now
        },
        {
            id: out3Id,
            blueprintId: bpId,
            goalId: goalPreventCrimeId,
            title: '50% reduction in resubmissions caused by validation errors',
            metric: '50% resubmission reduction',
            order: 0,
            createdAt: now,
            updatedAt: now
        },
        {
            id: out4Id,
            blueprintId: bpId,
            goalId: goalPreventCrimeId,
            title: 'Compliance query resolution rate increases by 25%',
            metric: '+25% query resolution rate',
            order: 1,
            createdAt: now,
            updatedAt: now
        }
    ];
    // ── Opportunities ──────────────────────────────────────────────────────────
    const opp1Id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opp2Id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opp3Id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opp4Id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opportunities = [
        {
            id: opp1Id,
            blueprintId: bpId,
            title: 'Improve clarity of packaging obligation guidance',
            statement: 'Producers struggle to self-serve on whether EPR applies to them, leading to late or incorrect registrations.',
            rationale: 'Pain point: guidance is fragmented and threshold rules are hard to interpret.',
            sourceCardIds: [],
            affectedStages: [
                stages[0].id
            ],
            affectedSteps: [],
            status: 'in_progress',
            outcomeId: out1Id,
            createdAt: now,
            updatedAt: now,
            traceabilityCode: 'OPP-001'
        },
        {
            id: opp2Id,
            blueprintId: bpId,
            title: 'Reduce burden of packaging data collection',
            statement: 'Producers manually chase suppliers for packaging data that could be shared digitally, creating delays and errors.',
            rationale: 'Pain point: suppliers do not provide packaging data easily.',
            sourceCardIds: [],
            affectedStages: [
                stages[0].id
            ],
            affectedSteps: [],
            status: 'open',
            outcomeId: out2Id,
            createdAt: now,
            updatedAt: now,
            traceabilityCode: 'OPP-002'
        },
        {
            id: opp3Id,
            blueprintId: bpId,
            title: 'Make submission validation errors actionable',
            statement: 'Producers receive cryptic validation errors with no guidance on how to fix them, causing resubmissions and delays.',
            rationale: 'Pain point: validation errors are difficult to interpret.',
            sourceCardIds: [],
            affectedStages: [
                stages[1].id
            ],
            affectedSteps: [],
            status: 'open',
            outcomeId: out3Id,
            createdAt: now,
            updatedAt: now,
            traceabilityCode: 'OPP-003'
        },
        {
            id: opp4Id,
            blueprintId: bpId,
            title: 'Improve query resolution experience',
            statement: 'Producers cannot effectively respond to compliance queries due to insufficient detail and unrealistic turnaround times.',
            rationale: 'Pain point: query notifications lack detail and turnaround is too short.',
            sourceCardIds: [],
            affectedStages: [
                stages[3].id
            ],
            affectedSteps: [],
            status: 'open',
            outcomeId: out4Id,
            createdAt: now,
            updatedAt: now,
            traceabilityCode: 'OPP-004'
        }
    ];
    // ── Solutions ──────────────────────────────────────────────────────────────
    const sol1Id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const sol2Id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const sol3Id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const sol4Id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const sol5Id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const solutions = [
        {
            id: sol1Id,
            blueprintId: bpId,
            opportunityId: opp1Id,
            title: 'Interactive obligation checker with threshold calculator',
            status: 'building',
            createdAt: now,
            updatedAt: now
        },
        {
            id: sol2Id,
            blueprintId: bpId,
            opportunityId: opp1Id,
            title: 'Redesigned guidance pages with worked examples',
            status: 'shipped',
            createdAt: now,
            updatedAt: now
        },
        {
            id: sol3Id,
            blueprintId: bpId,
            opportunityId: opp2Id,
            title: 'Supplier data API — machine-readable packaging data exchange',
            status: 'validating',
            createdAt: now,
            updatedAt: now
        },
        {
            id: sol4Id,
            blueprintId: bpId,
            opportunityId: opp3Id,
            title: 'Plain-English error messages with inline fix suggestions',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        {
            id: sol5Id,
            blueprintId: bpId,
            opportunityId: opp4Id,
            title: 'Structured query response portal with 14-day response window',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        }
    ];
    // ── Assumptions ────────────────────────────────────────────────────────────
    const assumptions = [
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: sol1Id,
            title: 'Producers will use a self-serve checker rather than calling the helpline',
            status: 'validated',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: sol1Id,
            title: 'Threshold rules are stable enough to encode without frequent updates',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: sol3Id,
            title: 'Suppliers can expose packaging data via a standardised API',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: sol3Id,
            title: 'Adoption rate will be high enough among large suppliers to reduce manual chasing',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: sol4Id,
            title: 'Plain-English errors will reduce resubmission rate by >30%',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: sol5Id,
            title: 'A 14-day window is sufficient for most query responses without regulatory risk',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        }
    ];
    return {
        blueprint: {
            id: bpId,
            serviceName: 'Submit regulatory packaging data',
            description: 'End-to-end service blueprint for regulatory packaging data submission',
            createdAt: now,
            updatedAt: now
        },
        stages,
        steps,
        lanes: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_LANES"].map((l)=>({
                ...l
            })),
        childBlueprints: [],
        rootDocument: null,
        activeBlueprintId: bpId,
        rootBlueprintId: bpId,
        cards,
        storyboardImages: [],
        storyboardVisible: true,
        storyboardCollapsed: false,
        cardLinks: [],
        evidence: [],
        strategicGoals,
        outcomes,
        opportunities,
        solutions,
        assumptions,
        systemOutcomes: [],
        behaviourOutcomes: [],
        serviceOutcomes: [],
        stepLinks: [],
        requirements: [],
        apiContracts: [],
        uiScaffolds: [],
        traceabilityCounters: {
            OPP: 4
        }
    };
}
function createExampleOstBlueprint() {
    const bpId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const now = new Date().toISOString();
    // Minimal canvas — no stages/steps/cards needed for the OST example.
    const stages = [];
    const steps = [];
    // ── Goals ──────────────────────────────────────────────────────────────────
    const gReduceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const gRecycleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const gCrimeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const strategicGoals = [
        {
            id: gReduceId,
            blueprintId: bpId,
            title: 'Reduce waste',
            description: 'Cut total packaging waste through better data and guidance.',
            color: 'emerald',
            order: 0,
            createdAt: now,
            updatedAt: now
        },
        {
            id: gRecycleId,
            blueprintId: bpId,
            title: 'Increase recycling of materials',
            description: 'Raise the quality of recycling data to support circular economy targets.',
            color: 'blue',
            order: 1,
            createdAt: now,
            updatedAt: now
        },
        {
            id: gCrimeId,
            blueprintId: bpId,
            title: 'Prevent waste crime',
            description: 'Strengthen compliance checks to deter fraudulent reporting.',
            color: 'rose',
            order: 2,
            createdAt: now,
            updatedAt: now
        }
    ];
    // ── Outcomes ───────────────────────────────────────────────────────────────
    const oR1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const oR2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const oC1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const oC2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const oP1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const oP2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const outcomes = [
        {
            id: oR1,
            blueprintId: bpId,
            goalId: gReduceId,
            title: '80% of producers self-serve on obligation checks',
            metric: '80% self-serve rate',
            order: 0,
            createdAt: now,
            updatedAt: now
        },
        {
            id: oR2,
            blueprintId: bpId,
            goalId: gReduceId,
            title: '50% reduction in resubmissions from data errors',
            metric: '50% resubmission reduction',
            order: 1,
            createdAt: now,
            updatedAt: now
        },
        {
            id: oC1,
            blueprintId: bpId,
            goalId: gRecycleId,
            title: '>95% packaging data completeness on first submission',
            metric: '>95% completeness score',
            order: 0,
            createdAt: now,
            updatedAt: now
        },
        {
            id: oC2,
            blueprintId: bpId,
            goalId: gRecycleId,
            title: '3× increase in recyclability classification accuracy',
            metric: '3× accuracy improvement',
            order: 1,
            createdAt: now,
            updatedAt: now
        },
        {
            id: oP1,
            blueprintId: bpId,
            goalId: gCrimeId,
            title: '25% increase in compliance query resolution rate',
            metric: '+25% query resolution',
            order: 0,
            createdAt: now,
            updatedAt: now
        },
        {
            id: oP2,
            blueprintId: bpId,
            goalId: gCrimeId,
            title: 'Zero tolerance for duplicate or fraudulent submissions',
            metric: '0 confirmed fraud cases undetected',
            order: 1,
            createdAt: now,
            updatedAt: now
        }
    ];
    // ── Opportunities ──────────────────────────────────────────────────────────
    const op1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const op2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const op3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const op4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const op5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const op6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const op7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const op8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opportunities = [
        {
            id: op1,
            blueprintId: bpId,
            title: 'Guidance on obligation thresholds is hard to navigate',
            statement: 'Producers cannot easily determine if EPR applies to them without expert help.',
            rationale: '',
            sourceCardIds: [],
            affectedStages: [],
            affectedSteps: [],
            status: 'in_progress',
            outcomeId: oR1,
            createdAt: now,
            updatedAt: now,
            traceabilityCode: 'OPP-001'
        },
        {
            id: op2,
            blueprintId: bpId,
            title: 'No digital self-service for registration eligibility checks',
            statement: 'Producers must call a helpline to confirm registration requirements.',
            rationale: '',
            sourceCardIds: [],
            affectedStages: [],
            affectedSteps: [],
            status: 'open',
            outcomeId: oR1,
            createdAt: now,
            updatedAt: now,
            traceabilityCode: 'OPP-002'
        },
        {
            id: op3,
            blueprintId: bpId,
            title: 'Validation errors are cryptic and not actionable',
            statement: 'Error messages do not explain what is wrong or how to fix the data.',
            rationale: '',
            sourceCardIds: [],
            affectedStages: [],
            affectedSteps: [],
            status: 'open',
            outcomeId: oR2,
            createdAt: now,
            updatedAt: now,
            traceabilityCode: 'OPP-003'
        },
        {
            id: op4,
            blueprintId: bpId,
            title: 'Packaging data collection from suppliers is manual',
            statement: 'Producers spend days emailing suppliers for data that could be exchanged digitally.',
            rationale: '',
            sourceCardIds: [],
            affectedStages: [],
            affectedSteps: [],
            status: 'open',
            outcomeId: oC1,
            createdAt: now,
            updatedAt: now,
            traceabilityCode: 'OPP-004'
        },
        {
            id: op5,
            blueprintId: bpId,
            title: 'Recyclability classifications change without producer notification',
            statement: 'Producers submit data with stale recyclability ratings, reducing accuracy.',
            rationale: '',
            sourceCardIds: [],
            affectedStages: [],
            affectedSteps: [],
            status: 'open',
            outcomeId: oC2,
            createdAt: now,
            updatedAt: now,
            traceabilityCode: 'OPP-005'
        },
        {
            id: op6,
            blueprintId: bpId,
            title: 'Query notifications lack the detail needed to respond',
            statement: 'Producers receive vague queries with no reference to the specific data in question.',
            rationale: '',
            sourceCardIds: [],
            affectedStages: [],
            affectedSteps: [],
            status: 'in_progress',
            outcomeId: oP1,
            createdAt: now,
            updatedAt: now,
            traceabilityCode: 'OPP-006'
        },
        {
            id: op7,
            blueprintId: bpId,
            title: 'Query response window is too short for complex cases',
            statement: 'A 5-day turnaround is insufficient for producers who need to gather evidence.',
            rationale: '',
            sourceCardIds: [],
            affectedStages: [],
            affectedSteps: [],
            status: 'open',
            outcomeId: oP1,
            createdAt: now,
            updatedAt: now,
            traceabilityCode: 'OPP-007'
        },
        {
            id: op8,
            blueprintId: bpId,
            title: 'No duplicate detection across multiple submissions',
            statement: 'The same data can be submitted twice by different entities without detection.',
            rationale: '',
            sourceCardIds: [],
            affectedStages: [],
            affectedSteps: [],
            status: 'open',
            outcomeId: oP2,
            createdAt: now,
            updatedAt: now,
            traceabilityCode: 'OPP-008'
        }
    ];
    // ── Solutions ──────────────────────────────────────────────────────────────
    const s1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const s2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const s3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const s4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const s5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const s6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const s7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const s8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const s9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const s10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const solutions = [
        {
            id: s1,
            blueprintId: bpId,
            opportunityId: op1,
            title: 'Interactive obligation checker with threshold calculator',
            status: 'building',
            createdAt: now,
            updatedAt: now
        },
        {
            id: s2,
            blueprintId: bpId,
            opportunityId: op1,
            title: 'Redesigned guidance pages with plain-English worked examples',
            status: 'shipped',
            createdAt: now,
            updatedAt: now
        },
        {
            id: s3,
            blueprintId: bpId,
            opportunityId: op2,
            title: 'Self-service eligibility portal with instant result',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        {
            id: s4,
            blueprintId: bpId,
            opportunityId: op3,
            title: 'Contextual error messages with inline fix suggestions',
            status: 'validating',
            createdAt: now,
            updatedAt: now
        },
        {
            id: s5,
            blueprintId: bpId,
            opportunityId: op4,
            title: 'Supplier data API — machine-readable packaging exchange',
            status: 'validating',
            createdAt: now,
            updatedAt: now
        },
        {
            id: s6,
            blueprintId: bpId,
            opportunityId: op5,
            title: 'Live recyclability reference API embedded in submission form',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        {
            id: s7,
            blueprintId: bpId,
            opportunityId: op6,
            title: 'Structured query portal with direct data links',
            status: 'building',
            createdAt: now,
            updatedAt: now
        },
        {
            id: s8,
            blueprintId: bpId,
            opportunityId: op7,
            title: 'Extended 14-day response window for complex queries',
            status: 'shipped',
            createdAt: now,
            updatedAt: now
        },
        {
            id: s9,
            blueprintId: bpId,
            opportunityId: op7,
            title: 'Guided evidence submission template',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        {
            id: s10,
            blueprintId: bpId,
            opportunityId: op8,
            title: 'Cross-submission deduplication engine using producer ID + period hash',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        }
    ];
    // ── Assumptions ────────────────────────────────────────────────────────────
    const assumptions = [
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: s1,
            title: 'Producers will use a self-serve checker rather than calling the helpline',
            status: 'validated',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: s1,
            title: 'Threshold rules are stable enough to encode without weekly updates',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: s3,
            title: 'A digital portal reduces helpline call volume by >40%',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: s4,
            title: 'Plain-language errors reduce resubmission rate by >30%',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: s5,
            title: 'Major suppliers can implement the API within 6 months',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: s5,
            title: 'API adoption among large suppliers is sufficient to reduce manual chasing',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: s6,
            title: 'An embedded reference API improves classification accuracy without slowing submission',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: s7,
            title: 'Linking query notices to specific data fields reduces back-and-forth by >50%',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: s8,
            title: 'A 14-day window is sufficient without creating regulatory risk',
            status: 'validated',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: s10,
            title: 'Producer ID + reporting period hash is a reliable deduplication key',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        }
    ];
    return {
        blueprint: {
            id: bpId,
            serviceName: 'Example opportunity tree',
            description: 'A pre-populated example showing the Goal → Outcome → Opportunity → Solution → Assumption hierarchy.',
            createdAt: now,
            updatedAt: now
        },
        stages,
        steps,
        lanes: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_LANES"].map((l)=>({
                ...l
            })),
        childBlueprints: [],
        rootDocument: null,
        activeBlueprintId: bpId,
        rootBlueprintId: bpId,
        cards: [],
        storyboardImages: [],
        storyboardVisible: true,
        storyboardCollapsed: false,
        cardLinks: [],
        evidence: [],
        strategicGoals,
        outcomes,
        opportunities,
        solutions,
        assumptions,
        systemOutcomes: [],
        behaviourOutcomes: [],
        serviceOutcomes: [],
        stepLinks: [],
        requirements: [],
        apiContracts: [],
        uiScaffolds: [],
        traceabilityCounters: {
            OPP: 8
        }
    };
}
function createDefraEnvironmentalOstBlueprint() {
    const bpId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const now = new Date().toISOString();
    // ── Strategic Goals ────────────────────────────────────────────────────────
    const gEnv01 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const gEnv02 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const gEnv03 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const gPackUK = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const strategicGoals = [
        {
            id: gEnv01,
            blueprintId: bpId,
            title: 'Reduce waste',
            description: 'Improve prevention and packaging-design incentives; reduce avoidable reporting friction that blocks lower-material choices; give policy teams better data to evaluate waste reduction.',
            color: 'emerald',
            order: 0,
            createdAt: now,
            updatedAt: now
        },
        {
            id: gEnv02,
            blueprintId: bpId,
            title: 'Increase circularity',
            description: 'Make reuse, refill, recyclability, evidence, and material-flow data easier to understand, report, monitor, and act on.',
            color: 'teal',
            order: 1,
            createdAt: now,
            updatedAt: now
        },
        {
            id: gEnv03,
            blueprintId: bpId,
            title: 'Prevent waste crime',
            description: 'Improve end-to-end traceability, permit legitimacy checks, anomaly detection, audit trails, and investigation workflows.',
            color: 'rose',
            order: 2,
            createdAt: now,
            updatedAt: now
        },
        {
            id: gPackUK,
            blueprintId: bpId,
            title: 'PackUK Operational Outcomes',
            description: 'Service-level outcomes connecting product delivery to Defra environmental goals through waste movement tracking performance.',
            color: 'sky',
            order: 3,
            createdAt: now,
            updatedAt: now
        }
    ];
    // ── Outcomes (Opportunity Areas) ───────────────────────────────────────────
    // Each area is assigned to its primary environmental outcome.
    const oAreaA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // → ENV-01
    const oAreaB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // → ENV-02
    const oAreaC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // → ENV-01
    const oAreaD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // → ENV-02
    const oAreaE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // → ENV-03
    const oAreaF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // → ENV-03
    const oAreaG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // → ENV-01
    const oAreaH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // → ENV-01
    const oAreaI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // → ENV-01
    const oAreaJ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // → ENV-03
    // PackUK operational outcomes (OST-2026-04-26 product layer)
    const oPackUKEfficiency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const oPackUKValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const oPackUKData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const outcomes = [
        {
            id: oAreaA,
            blueprintId: bpId,
            goalId: gEnv01,
            code: 'AREA-A',
            title: 'AREA-A: Align Packaging Incentives With Environmental Intent',
            description: 'Producers make packaging decisions with clearer environmental and fee consequences before design choices are locked in.',
            order: 0,
            createdAt: now,
            updatedAt: now
        },
        {
            id: oAreaC,
            blueprintId: bpId,
            goalId: gEnv01,
            code: 'AREA-C',
            title: 'AREA-C: Improve Reporting, Validation, And Fee Transparency',
            description: 'Users classify, validate, submit, and understand charging obligations correctly first time.',
            order: 1,
            createdAt: now,
            updatedAt: now
        },
        {
            id: oAreaG,
            blueprintId: bpId,
            goalId: gEnv01,
            code: 'AREA-G',
            title: 'AREA-G: Make Ecosystem Adoption Proportionate And Stable',
            description: 'Organisations can comply and adapt without excessive disruption, confusion, or innovation lock-in.',
            order: 2,
            createdAt: now,
            updatedAt: now
        },
        {
            id: oAreaH,
            blueprintId: bpId,
            goalId: gEnv01,
            code: 'AREA-H',
            title: 'AREA-H: Simplify EPR Policy And Make Charging More Predictable And Proportionate',
            description: 'Producers make packaging decisions earlier with clearer fee signals and less EPR policy complexity.',
            metric: "This area is adjacent to 'policy barriers to innovation', but it is not the same thing. The evidence points to a more specific opportunity: simplify EPR policy and charging logic so producers can make better packaging decisions earlier, and so the policy burden is fairer across different organisation types.",
            order: 3,
            createdAt: now,
            updatedAt: now
        },
        {
            id: oAreaI,
            blueprintId: bpId,
            goalId: gEnv01,
            code: 'AREA-I',
            title: 'AREA-I: Influence Upstream Design Before Waste Exists',
            description: 'Producers can compare packaging options and understand environmental and fee consequences before design choices are locked in.',
            metric: 'This is the most prevention-oriented branch. It focuses on design decisions made before packaging becomes waste: material choice, packaging size, recyclability, compostability, reuse/refill potential, supply-chain configuration, and commercial lock-in. The opportunity is to move EPR from a downstream reporting obligation into an upstream design signal.',
            order: 4,
            createdAt: now,
            updatedAt: now
        },
        {
            id: oAreaB,
            blueprintId: bpId,
            goalId: gEnv02,
            code: 'AREA-B',
            title: 'AREA-B: Make Obligations, Roles, And Classification Easier To Apply',
            description: 'Users classify, validate, submit, and understand charging obligations correctly first time.',
            order: 0,
            createdAt: now,
            updatedAt: now
        },
        {
            id: oAreaD,
            blueprintId: bpId,
            goalId: gEnv02,
            code: 'AREA-D',
            title: 'AREA-D: Create Trusted, Reusable Data For Policy And Accountability',
            description: 'Internal users trust reusable data enough to stop recreating parallel evidence bases.',
            order: 1,
            createdAt: now,
            updatedAt: now
        },
        {
            id: oAreaE,
            blueprintId: bpId,
            goalId: gEnv03,
            code: 'AREA-E',
            title: 'AREA-E: Strengthen Waste Traceability And Real-World Movement Recording',
            description: 'Waste movements are recorded with complete, timely, and accurate tracking data from collection to destination.',
            order: 0,
            createdAt: now,
            updatedAt: now
        },
        {
            id: oAreaF,
            blueprintId: bpId,
            goalId: gEnv03,
            code: 'AREA-F',
            title: 'AREA-F: Improve Risk Detection, Investigation, And Enforcement Capability',
            description: 'Regulators can detect, prioritise, investigate, and evidence risk without rebuilding context manually.',
            order: 1,
            createdAt: now,
            updatedAt: now
        },
        {
            id: oAreaJ,
            blueprintId: bpId,
            goalId: gEnv03,
            code: 'AREA-J',
            title: 'AREA-J: Strengthen Operational Control And Status Visibility',
            description: 'Compliance and operational status is visible early enough for teams to intervene before gaps become persistent risk.',
            metric: 'This area came through more clearly when cross-checking the older opportunities/outcomes matrix. It is not mainly about policy design or environmental incentives. It is about whether the operational system can prove who is authorised to act, whether reporting is complete, whether evidence and payments reconcile, whether accreditation cases are progressing, and whether regulated capacity constraints are being respected.',
            order: 2,
            createdAt: now,
            updatedAt: now
        },
        // PackUK operational outcomes — product delivery layer (OST-2026-04-26)
        {
            id: oPackUKEfficiency,
            blueprintId: bpId,
            goalId: gPackUK,
            title: 'Efficiency — reduce time creating, correcting, validating, and reusing waste movement records',
            metric: 'SPI-022: time per waste movement record from collection to receipt',
            order: 0,
            createdAt: now,
            updatedAt: now
        },
        {
            id: oPackUKValue,
            blueprintId: bpId,
            goalId: gPackUK,
            title: 'Value for money — reduce avoidable manual reconciliation, support queries, rework, and duplicated reporting effort',
            order: 1,
            createdAt: now,
            updatedAt: now
        },
        {
            id: oPackUKData,
            blueprintId: bpId,
            goalId: gPackUK,
            title: 'Data accuracy — increase complete, timely, accurate, and reusable service data',
            metric: 'SPI-021: % of waste movements with complete, timely, and accurate tracking data from collection to destination',
            order: 2,
            createdAt: now,
            updatedAt: now
        }
    ];
    // ── Opportunities ──────────────────────────────────────────────────────────
    const opA1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opA2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opA3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opA4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opB1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opB2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opB3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opB4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opC1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opC2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opC3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opC4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opD1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opD2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opD3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opD4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opE1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opE2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opE3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opE4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opF1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opF2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opF3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opF4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opG1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opG2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opG3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opG4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opH1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opH2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opH3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opH4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opH5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opI1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opI2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opI3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opI4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opI5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opJ1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opJ2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opJ3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opJ4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opJ5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    // Sub-opportunity IDs (product team findings — need named consts for solution references)
    const subH1a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // product finding under H1
    const subB1a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // product finding under B1
    const subB4a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // product finding under B4
    const subC1a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(); // product finding under C1
    const mkOpp = (id, code, title, outcomeId)=>({
            id,
            blueprintId: bpId,
            title,
            statement: '',
            rationale: '',
            sourceCardIds: [],
            affectedStages: [],
            affectedSteps: [],
            status: 'open',
            outcomeId,
            createdAt: now,
            updatedAt: now,
            traceabilityCode: code
        });
    const mkSubOpp = (id, title, parentOpportunityId)=>({
            id,
            blueprintId: bpId,
            title,
            statement: '',
            rationale: '',
            sourceCardIds: [],
            affectedStages: [],
            affectedSteps: [],
            status: 'open',
            createdAt: now,
            updatedAt: now,
            parentOpportunityId
        });
    // Evidence codes per opportunity — from defra-environmental-opportunity-map-2026-04-28.graph.json
    // (supported_by edges). Used to populate `statement` in the chain view.
    const evidenceByCode = {
        A1: 'E-110, E-111, E-112, E-118, E-121',
        A2: 'E-111, E-118, E-119',
        A3: 'E-119, E-120',
        A4: 'E-107, E-121',
        B1: 'E-037, E-056, E-063, E-068, E-094, E-095',
        B2: 'E-108',
        B3: 'E-038, E-039, E-041, E-054, E-055, E-077, E-098',
        B4: 'E-064, E-065, E-076, E-093, E-098',
        C1: 'E-042, E-048, E-065, E-076, E-084, E-092, E-093',
        C2: 'E-045, E-047, E-057, E-066, E-071, E-119',
        C3: 'E-117',
        C4: 'E-102',
        D1: 'E-002, E-008, E-014, E-027, E-089, E-090, E-099, E-101',
        D2: 'E-003, E-004, E-005, E-022, E-026, E-030, E-100',
        D3: 'E-012, E-024, E-052, E-061, E-087, E-088, E-090, E-105, E-115',
        D4: 'E-115',
        E1: 'E-028, E-067, E-072, E-073, E-081, E-083, E-090, E-091',
        E2: 'E-093, E-097',
        E3: 'E-079, E-098',
        E4: 'E-081, E-084, E-085, E-091, E-092',
        F1: 'E-009, E-011, E-023, E-033',
        F2: 'E-001, E-010, E-018, E-019, E-026, E-031, E-091',
        F3: 'E-007, E-020, E-032, E-079',
        F4: 'E-021, E-070, E-074',
        G1: 'E-056, E-116',
        G2: 'E-114',
        G3: 'E-075, E-080, E-096',
        G4: 'E-049, E-059, E-060, E-070, E-074, E-083, E-106',
        H1: 'E-109, E-117',
        H2: 'E-057, E-064, E-066, E-110, E-112, E-118, E-121',
        H3: 'E-113, E-114, E-115, E-116',
        H4: 'E-113, E-115, E-119',
        H5: 'E-089, E-090, E-105, E-115',
        I1: 'E-057, E-064, E-066, E-110, E-111, E-118, E-119',
        I2: 'E-110, E-111, E-112, E-118',
        I3: 'E-064, E-110, E-112, E-121',
        I4: 'E-114, E-116',
        I5: 'E-105, E-115, E-118, E-119',
        J1: 'E-038, E-041, E-050, E-103',
        J2: 'E-029, E-049, E-104, E-106',
        J3: 'E-006, E-016, E-017, E-043, E-044',
        J4: 'E-013, E-015, E-016, E-017, E-074',
        J5: 'E-034, E-068, E-072'
    };
    // KPI signals per opportunity — from ost-priority-branches-2026-04-30.md.
    // Reads top-to-bottom: product KPI → service outcome → behaviour → system condition → environmental outcome.
    const kpiByCode = {
        // Branch 1: Packaging incentives and material switching (AREA-A, H, I)
        A1: 'KPI signals: Scenario completion rate; confidence in packaging decision; reduction in support questions about fee consequences; number of design alternatives compared.',
        A2: 'KPI signals: Material-mix changes over time; policy-team confidence in charging rationale; industry understanding of fee model.',
        A3: 'KPI signals: Material-mix changes over time; policy-team confidence in charging rationale; industry understanding of fee model.',
        A4: 'KPI signals: Reuse/refill readiness assessments completed; producer confidence; follow-up actions started.',
        H2: 'KPI signals: Scenario completion rate; confidence in packaging decision; reduction in support questions about fee consequences; number of design alternatives compared.',
        H5: 'KPI signals: Availability of design-change data; completeness of packaging profile history; policy evaluation questions answered.',
        I1: 'KPI signals: Scenario completion rate; confidence in packaging decision; reduction in support questions about fee consequences; number of design alternatives compared.',
        I2: 'KPI signals: Material-mix changes over time; policy-team confidence in charging rationale; industry understanding of fee model.',
        I3: 'KPI signals: Scenario completion rate; confidence in packaging decision; number of design alternatives compared.',
        I4: 'KPI signals: Change preview use; packaging/data changes completed; perceived risk of change.',
        I5: 'KPI signals: Availability of design-change data; completeness of packaging profile history; policy evaluation questions answered.',
        // Branch 2: Obligations, classification, reporting, fee transparency (AREA-B, C, H)
        B1: 'KPI signals: Checker completion rate; support contacts about applicability; wrong-route corrections.',
        B2: 'KPI signals: Classification error rates; repeated correction loops; confidence after classification.',
        B3: 'KPI signals: Classification error rates; repeated correction loops; confidence after classification.',
        B4: 'KPI signals: Classification error rates; repeated correction loops; confidence after classification.',
        C1: 'KPI signals: Upload success rate; validation error resolution rate; drop-off at reporting steps.',
        C2: 'KPI signals: Fee explanation views used; support contacts about charges; successful self-serve charge reconciliation.',
        C3: 'KPI signals: Upload success rate; validation error resolution rate; drop-off at reporting steps.',
        C4: 'KPI signals: Upload success rate; validation error resolution rate; drop-off at reporting steps.',
        H1: 'KPI signals: Checker completion rate; support contacts about applicability; wrong-route corrections.',
        H3: 'KPI signals: Completion rate by actor type; assisted-route use; route time and error rate.',
        H4: 'KPI signals: Material-mix changes over time; policy-team confidence in charging rationale; industry understanding of fee model.',
        // Branch 3: Trusted, reusable data (AREA-D)
        D1: 'KPI signals: Reduction in bespoke extracts; repeat use of standard datasets; analyst satisfaction.',
        D2: 'KPI signals: Time to reconstruct a history; completeness of amendment lineage; confidence in historical comparison.',
        D3: 'KPI signals: Policy questions answered from reusable data; fields mapped to decisions; reduced manual reconciliation.',
        D4: 'KPI signals: Fields with clear decision owner; retired or inferred low-value fields; user burden indicators.',
        // Branch 4 (AREA-E) — product KPIs come from ost-2026-04-26.md
        E1: 'KPI signals: Completion rates for waste movement records; error rates in waste descriptions; satisfaction with recording guidance.',
        E2: 'KPI signals: Completion rates for amendments; error rates in corrected records; repeat sessions for the same movement.',
        E3: 'KPI signals: Completion rates for movement creation; error rates for missing/invalid fields; satisfaction with recording guidance.',
        E4: 'KPI signals: Completion rates for receipt decisions; error rates in accept/refuse decisions; session duration for receipt checks.',
        // Branch 4: Risk detection (AREA-F)
        F1: 'KPI signals: Time to identify high-risk cases; queue action rate; regulator confidence in prioritisation.',
        F2: 'KPI signals: Time to assemble case context; completeness of case records; handover quality.',
        F3: 'KPI signals: Lookup time; checks recorded; incorrect or missed legitimacy decisions.',
        F4: 'KPI signals: Missing document rate; overdue confirmation rate; time to resolve export exceptions.',
        // Branch 5: Ecosystem adoption (AREA-G)
        G1: 'KPI signals: Support contacts about changes; update comprehension; missed deadline rates.',
        G2: 'KPI signals: Change preview use; packaging/data changes completed; perceived risk of change.',
        G3: 'KPI signals: Completion rate by actor type; assisted-route use; route time and error rate.',
        G4: 'KPI signals: Time to publish change guidance; repeated support themes; developer satisfaction.',
        // Branch 6: Operational control (AREA-J)
        J1: 'KPI signals: Permission-related errors; manual checks; unresolved authority conflicts.',
        J2: 'KPI signals: Missing submission resolution time; successful contact rate; manual chase volume.',
        J3: 'KPI signals: Reconciliation exceptions; time to confirm compliance status; payment/evidence mismatch rate.',
        J4: 'KPI signals: Renewal completion rate; overdue evidence; case history completeness.',
        J5: 'KPI signals: Near-limit alerts reviewed; manual lookup time; capacity-related risk cases identified.'
    };
    // ── OST opportunities (OST-2026-04-26) under PackUK operational outcomes ───
    const opCarrierField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opAmendment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opReceiver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opSoftware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const opRegulator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const ostOpps = [
        {
            id: opCarrierField,
            blueprintId: bpId,
            outcomeId: oPackUKEfficiency,
            title: 'Carriers need to know exactly what to record at collection and handover without slowing routes down',
            statement: 'E-073 shows carriers need a clear view of phase-2 digital tracking duties and when to record information during collection and transfer. E-084 says carriers need clear mandatory-versus-optional data requirements so they can produce complete records without delaying routes. E-096 shows carriers may have low digital skills, weak connectivity, outdated or costly software, and heavy training overhead.',
            rationale: 'KPI signals: completion rates for movement creation; drop-off rates at required-field steps; error rates for missing/invalid fields; satisfaction with recording guidance.',
            sourceCardIds: [],
            affectedStages: [],
            affectedSteps: [],
            status: 'open',
            traceabilityCode: 'OST-01',
            createdAt: now,
            updatedAt: now
        },
        {
            id: opAmendment,
            blueprintId: bpId,
            outcomeId: oPackUKEfficiency,
            title: 'Carriers and controllers need movement records to handle real-world changes without losing traceability',
            statement: 'E-093 says controllers need workflows for repeat collections, multiple EWC codes, and reclassification without recreating records from scratch. E-097 reports misdescribed waste, mixed loads, receiver changes, weight corrections, contaminated skips, missing paperwork, and repeat visits.',
            rationale: 'KPI signals: completion rates for amendments; error rates in corrected records; repeat sessions for the same movement; satisfaction with exception handling.',
            sourceCardIds: [],
            affectedStages: [],
            affectedSteps: [],
            status: 'open',
            traceabilityCode: 'OST-02',
            createdAt: now,
            updatedAt: now
        },
        {
            id: opReceiver,
            blueprintId: bpId,
            outcomeId: oPackUKData,
            title: 'Receivers need to verify incoming waste against documentation and permit scope quickly',
            statement: 'E-081 shows receivers must confirm waste matches transfer notes and permit scope before accepting it, while doing this under time pressure. The service outcomes also identify receiver verification as a low-confidence but important adjacent stage through OUT-016 and SPI-027.',
            rationale: 'KPI signals: completion rates for receipt decisions; error rates in accept/refuse decisions; session duration for receipt checks; satisfaction among receiver users.',
            sourceCardIds: [],
            affectedStages: [],
            affectedSteps: [],
            status: 'open',
            traceabilityCode: 'OST-03',
            createdAt: now,
            updatedAt: now
        },
        {
            id: opSoftware,
            blueprintId: bpId,
            outcomeId: oPackUKValue,
            title: 'Software providers need stable, timely integration guidance so customer workflows stay compliant',
            statement: 'E-072 identifies uncertainty around API-led rollout, phased compliance, and receipt-of-waste implementation. E-083 shows software developers need timely requirement changes and stable API integration support so waste-industry software can remain compliant.',
            rationale: 'KPI signals: API-related error rates; completion rates for successful submissions through integrations; daily active software/API users; satisfaction with developer guidance.',
            sourceCardIds: [],
            affectedStages: [],
            affectedSteps: [],
            status: 'open',
            traceabilityCode: 'OST-04',
            createdAt: now,
            updatedAt: now
        },
        {
            id: opRegulator,
            blueprintId: bpId,
            outcomeId: oPackUKData,
            title: 'Regulators and analysts need reusable trusted data products for investigations and reporting',
            statement: 'E-001 shows compliance casework is tracked across spreadsheets and ad hoc records. E-008 shows regulators export raw data into master spreadsheets because they do not trust system data as a single source of truth. E-028 shows regulators manually link records from production through transport to final treatment or disposal. E-052 and E-089 show reporting consumers and analysts need both reusable outputs and raw transactional data to validate quality issues and investigate anomalies.',
            rationale: 'KPI signals: completion rates for reporting/investigation tasks; session duration for analysis tasks; error rates or quality flags in extracted data; satisfaction with data confidence.',
            sourceCardIds: [],
            affectedStages: [],
            affectedSteps: [],
            status: 'open',
            traceabilityCode: 'OST-05',
            createdAt: now,
            updatedAt: now
        }
    ];
    const opportunities = [
        mkOpp(opA1, 'A1', 'Producers struggle to tell whether lower-material, compostable, reusable, or heavier recyclable packaging will reduce environmental impact without increasing charges.', oAreaA),
        mkOpp(opA2, 'A2', 'Weight-based pEPR charging may create a material-switching incentive from glass or metal toward plastic.', oAreaA),
        mkOpp(opA3, 'A3', 'The rationale for retaining weight-based fee apportionment is hard for industry to inspect, challenge, or translate into design decisions.', oAreaA),
        mkOpp(opA4, 'A4', 'Reuse and refill are positioned as a route to reduce recurring liability, but producers need clearer practical transition paths.', oAreaA),
        mkOpp(opB1, 'B1', 'Producers, importers, and supply-chain actors may not know whether EPR, RAM, or DWT applies to them, especially when guidance, thresholds, or roles change.', oAreaB),
        mkOpp(opB2, 'B2', 'Policy terminology does not always match how businesses understand themselves.', oAreaB),
        mkOpp(opB3, 'B3', 'Responsibility boundaries across producers, schemes, consultants, supply chains, and waste actors are unclear.', oAreaB),
        mkOpp(opB4, 'B4', 'Material-specific, household/non-household, nation-of-sale, dual-use, EWC, and RAM classification rules are hard to apply consistently.', oAreaB),
        mkOpp(opC1, 'C1', 'Reporting templates, validation messages, and field requirements are unclear or inconsistent.', oAreaC),
        mkOpp(opC2, 'C2', 'Fees, disposal charges, PRN/PERN obligations, RAM tiers, and offset rules are opaque.', oAreaC),
        mkOpp(opC3, 'C3', 'Ambiguous obligations create interpretation burden, paid advice, training cost, poor data quality, inaccurate charges, and market distortion.', oAreaC),
        mkOpp(opC4, 'C4', 'Duplicate or conflicting scheme submissions can enter reporting before prevention controls catch them.', oAreaC),
        mkOpp(opD1, 'D1', 'Regulatory, producer, and waste data is fragmented across pages, exports, spreadsheets, dashboards, and external sources.', oAreaD),
        mkOpp(opD2, 'D2', 'Historical comparisons, submission histories, and amendments are hard to trace.', oAreaD),
        mkOpp(opD3, 'D3', 'Policy and reporting users need data designed around explicit questions: evaluation, accountability, fair charging, and behaviour change.', oAreaD),
        mkOpp(opD4, 'D4', 'Data collection may be heavier than necessary if fields are collected by default rather than because they answer a clear decision or evidence question.', oAreaD),
        mkOpp(opE1, 'E1', 'End-to-end waste traceability is fragmented across collection, transfer, receipt, treatment, and export.', oAreaE),
        mkOpp(opE2, 'E2', 'Real-world collection variability breaks neat digital records: mixed loads, partial receipts, receiver changes, weight corrections, contamination, and repeat visits.', oAreaE),
        mkOpp(opE3, 'E3', 'Waste producers often hand over incomplete or inaccurate descriptions, pushing correction and policing work downstream.', oAreaE),
        mkOpp(opE4, 'E4', 'Receivers, carriers, and frontline officers need permit, movement, and classification data in context to act confidently.', oAreaE),
        mkOpp(opF1, 'F1', 'Risk signals, workload prioritisation, and anomaly detection are not surfaced inside regulator workflows.', oAreaF),
        mkOpp(opF2, 'F2', 'Investigations, inspections, decisions, and case histories are scattered across spreadsheets and informal notes.', oAreaF),
        mkOpp(opF3, 'F3', 'Legitimacy and permit checks rely on manual lookups across external sources.', oAreaF),
        mkOpp(opF4, 'F4', 'Export and shipment compliance checks are document-heavy and difficult to monitor consistently.', oAreaF),
        mkOpp(opG1, 'G1', 'Organisations experience change fatigue from unstable rules, fragmented communications, and uncertainty about UK/EU requirements.', oAreaG),
        mkOpp(opG2, 'G2', 'Once producers have made a difficult submission work, the perceived cost of changing packaging or data practices can suppress innovation.', oAreaG),
        mkOpp(opG3, 'G3', 'Small, low-digital, or low-margin operators need proportionate routes to comply without excessive disruption.', oAreaG),
        mkOpp(opG4, 'G4', 'Helpdesk, interim guidance, developer updates, manual support, and service status feedback are inconsistent or too slow to reduce avoidable support demand.', oAreaG),
        mkOpp(opH1, 'H1', 'EPR policy is experienced as unusually hard to comply with, creating burden that can conflict with growth, participation, and effective compliance.', oAreaH),
        mkOpp(opH2, 'H2', 'Producers lack forward fee visibility while designing packaging, so they cannot easily design out unrecyclable elements before decisions are locked in.', oAreaH),
        mkOpp(opH3, 'H3', 'Charging and support are not yet sufficiently segmented by real packaging complexity, submission complexity, packaging variety, and supply-chain depth.', oAreaH),
        mkOpp(opH4, 'H4', 'Fair taxation or charging depends on better organisation typologies than blunt large/small producer categories.', oAreaH),
        mkOpp(opH5, 'H5', 'Flexible policy and targeted service support require real packaging and registration data to identify where burden, risk, and environmental leverage actually sit.', oAreaH),
        mkOpp(opI1, 'I1', 'Producers do not have early enough cost and environmental impact signals to compare packaging options before design choices are committed.', oAreaI),
        mkOpp(opI2, 'I2', 'Current rules can unintentionally make lower-material or lower-impact choices look commercially worse once classification and fee rules are applied.', oAreaI),
        mkOpp(opI3, 'I3', 'Producers need scenario modelling for design choices, such as removing unrecyclable elements, changing materials, reducing size, moving to compostable formats, or adopting reuse/refill.', oAreaI),
        mkOpp(opI4, 'I4', 'Compliance effort can lock producers into existing packaging and data practices after they have made a difficult submission work.', oAreaI),
        mkOpp(opI5, 'I5', 'Policy teams lack enough product-design feedback data to see whether EPR is changing packaging decisions upstream or only collecting downstream reports.', oAreaI),
        mkOpp(opJ1, 'J1', 'Delegated access, approved-person responsibility, and authority to act are not visible enough across producer, consultant, scheme, and regulator workflows.', oAreaJ),
        mkOpp(opJ2, 'J2', 'Missing submissions, incomplete reporting, completion status, and unreliable contact data create manual chasing and leave gaps in compliance coverage.', oAreaJ),
        mkOpp(opJ3, 'J3', 'Evidence sufficiency, evidence reconciliation, fee status, and payment status are still too manual or fragmented to provide a shared compliance picture.', oAreaJ),
        mkOpp(opJ4, 'J4', 'Accreditation casework, renewals, and compliance evidence are fragmented, making it harder to manage regulated actors consistently over time.', oAreaJ),
        mkOpp(opJ5, 'J5', "Facility capacity and permit-limit checks are manual, limiting the system's ability to detect operational risk before it becomes non-compliance or waste crime.", oAreaJ),
        ...ostOpps,
        // Sub-opportunities: product team findings from L3 research (depth=1, nested inside strategic opps)
        mkSubOpp(subH1a, 'Producers find GOV.UK guidance too long, too general and jargon-heavy — they often have multiple browser tabs open or print guidance to complete a task, leading to poor compliance and heavy helpdesk demand.', opH1),
        mkSubOpp(subB1a, 'Businesses have no straightforward way to find out whether they need to register under EPR — guidance is complex, often misunderstood, and fails to reach all producers who may be obligated.', opB1),
        mkSubOpp(subB4a, 'The current CSV upload process is manual, time-consuming and error-prone with poor validation — large schemes must export to CSV from internal portals before uploading, creating multi-stage failure points.', opB4),
        mkSubOpp(subC1a, 'Registration is fragmented, heavily dependent on CSV uploads, error-prone with unclear error messaging — producers must navigate separate processes for organisation details, subsidiaries, packaging data, fees, and charges.', opC1)
    ].map((opp)=>({
            ...opp,
            // Backfill evidence and KPI signals for AREA opportunities from the lookup tables.
            // OST opportunities already have statement/rationale set inline, so || preserves them.
            statement: opp.statement || (opp.traceabilityCode && evidenceByCode[opp.traceabilityCode] ? `Evidence: ${evidenceByCode[opp.traceabilityCode]}` : ''),
            rationale: opp.rationale || (opp.traceabilityCode && kpiByCode[opp.traceabilityCode] ? kpiByCode[opp.traceabilityCode] : '')
        }));
    // ── Solutions (illustrative sample across areas) ────────────────────────────
    const sA1a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const sA1b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const sC1a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const sF1a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const sI3a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const sJ1a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    // OST solution IDs (needed for assumption references)
    const sCarrierChecklist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const sAmendmentFlow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const sReceiptCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const sApiChangeLog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const sTransactionExtract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const solutions = [
        {
            id: sA1a,
            blueprintId: bpId,
            opportunityId: opA1,
            title: 'Packaging impact simulator — fee and environmental impact side-by-side for material options',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        {
            id: sA1b,
            blueprintId: bpId,
            opportunityId: opA1,
            title: 'Redesigned fee explainer pages with material-switching scenario tables',
            status: 'building',
            createdAt: now,
            updatedAt: now
        },
        {
            id: sC1a,
            blueprintId: bpId,
            opportunityId: opC1,
            title: 'Plain-English validation errors with field-level fix suggestions',
            status: 'validating',
            createdAt: now,
            updatedAt: now
        },
        {
            id: sF1a,
            blueprintId: bpId,
            opportunityId: opF1,
            title: 'Automated risk dashboard surfacing anomalies inside regulator workflows',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        {
            id: sI3a,
            blueprintId: bpId,
            opportunityId: opI3,
            title: 'Packaging redesign scenario calculator — model fee and impact before committing to a design',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        {
            id: sJ1a,
            blueprintId: bpId,
            opportunityId: opJ1,
            title: 'Unified delegated-access registry visible across producer, consultant, scheme, and regulator views',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        // OST-01: Carrier field clarity
        {
            id: sCarrierChecklist,
            blueprintId: bpId,
            opportunityId: opCarrierField,
            title: 'Role-specific field checklist for collection and handover',
            status: 'validating',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            opportunityId: opCarrierField,
            title: 'Guided movement creation with mandatory/optional field explanations',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            opportunityId: opCarrierField,
            title: 'Pre-filled repeat movement templates for common collections',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        // OST-02: Amendment and exception flows
        {
            id: sAmendmentFlow,
            blueprintId: bpId,
            opportunityId: opAmendment,
            title: 'Amendment flow for corrected weights, receiver changes, and mixed loads',
            status: 'building',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            opportunityId: opAmendment,
            title: 'Partial receipt and exception capture at handover',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            opportunityId: opAmendment,
            title: 'Reclassification workflow that preserves original record history',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        // OST-03: Receiver verification
        {
            id: sReceiptCheck,
            blueprintId: bpId,
            opportunityId: opReceiver,
            title: 'Receipt check screen showing transfer details, permit scope, and accept/refuse actions',
            status: 'validating',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            opportunityId: opReceiver,
            title: 'Weighbridge exception queue for missing or inconsistent documentation',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            opportunityId: opReceiver,
            title: 'Standard refusal reason codes with audit trail',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        // OST-04: Software integration
        {
            id: sApiChangeLog,
            blueprintId: bpId,
            opportunityId: opSoftware,
            title: 'Versioned API change log with migration windows',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            opportunityId: opSoftware,
            title: 'Sandbox and conformance test pack for receipt and transfer APIs',
            status: 'validating',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            opportunityId: opSoftware,
            title: 'Developer office hours before each mandatory phase',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        // OST-05: Regulator and analyst data products
        {
            id: sTransactionExtract,
            blueprintId: bpId,
            opportunityId: opRegulator,
            title: 'Transaction-level data extract with quality flags and lineage',
            status: 'validating',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            opportunityId: opRegulator,
            title: 'Compliance dashboard linked to movement records and case history',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            opportunityId: opRegulator,
            title: 'Standard reporting templates for cross-nation reconciliation',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        // Solutions for product team findings
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            opportunityId: subH1a,
            title: 'Task-focused guidance with worked examples for EPR obligations, fees, and evidence requirements',
            status: 'ideation',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            opportunityId: subB1a,
            title: 'Eligibility checker: enter business activity, packaging role, and thresholds to get a clear in/out/scheme decision',
            status: 'validating',
            createdAt: now,
            updatedAt: now
        }
    ];
    // ── Assumptions ────────────────────────────────────────────────────────────
    const assumptions = [
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: sA1a,
            title: 'Producers will trust a tool that shows fee impact alongside environmental impact without expert facilitation',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: sA1a,
            title: 'Fee and recyclability data is stable enough to power a live simulator without frequent recalibration',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: sC1a,
            title: 'Plain-language errors will reduce resubmission rate by at least 30%',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: sF1a,
            title: 'Regulators will act on automated risk signals rather than continuing to rely on manual review',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: sI3a,
            title: 'Producers engage with design tools before packaging decisions are commercially locked in',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: sJ1a,
            title: 'A single access registry reduces onboarding errors and unauthorised submissions',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        // OST-2026-04-26 experiment assumptions
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: sCarrierChecklist,
            title: 'Clearer field guidance will reduce incomplete records without increasing route time',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: sAmendmentFlow,
            title: 'Users can update records accurately if amendment reasons are structured and presented at the point of change',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: sReceiptCheck,
            title: 'Receivers can make lawful accept/refuse decisions faster when permit checks are brought into the same workflow as transfer details',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: sApiChangeLog,
            title: 'Earlier change visibility will reduce reactive development sprints and customer disruption before compliance deadlines',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            solutionId: sTransactionExtract,
            title: 'Analysts need drill-down to transaction level to diagnose quality issues — aggregated dashboards alone are insufficient',
            status: 'untested',
            createdAt: now,
            updatedAt: now
        }
    ];
    // ── System outcomes (SYS) ─────────────────────────────────────────────────
    const systemOutcomes = [
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            code: 'SYS-01',
            title: 'Packaging incentives align with the waste hierarchy and do not accidentally push producers toward worse materials.',
            goalIds: [
                gEnv01,
                gEnv02
            ],
            relatedAreaCodes: [
                'AREA-A',
                'AREA-H',
                'AREA-I'
            ],
            order: 0,
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            code: 'SYS-02',
            title: 'Producers, schemes, and regulators can understand fee, evidence, and obligation rules consistently.',
            goalIds: [
                gEnv01,
                gEnv02
            ],
            relatedAreaCodes: [
                'AREA-B',
                'AREA-C',
                'AREA-H'
            ],
            order: 1,
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            code: 'SYS-03',
            title: 'Packaging and waste data is accurate, timely, trusted, and reusable for policy, compliance, and operational decisions.',
            goalIds: [
                gEnv01,
                gEnv02,
                gEnv03
            ],
            relatedAreaCodes: [
                'AREA-C',
                'AREA-D',
                'AREA-H',
                'AREA-I'
            ],
            order: 2,
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            code: 'SYS-04',
            title: 'Waste movements and handovers are traceable across actors, sites, and lifecycle stages.',
            goalIds: [
                gEnv02,
                gEnv03
            ],
            relatedAreaCodes: [
                'AREA-B',
                'AREA-E',
                'AREA-J'
            ],
            order: 3,
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            code: 'SYS-05',
            title: 'Regulators can detect risk, investigate anomalies, and maintain defensible enforcement records.',
            goalIds: [
                gEnv03
            ],
            relatedAreaCodes: [
                'AREA-C',
                'AREA-D',
                'AREA-F',
                'AREA-J'
            ],
            order: 4,
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            code: 'SYS-06',
            title: 'The ecosystem has proportionate routes for different actor types, including small producers, schemes, carriers, low-digital users, and complex supply chains.',
            goalIds: [
                gEnv01,
                gEnv02,
                gEnv03
            ],
            relatedAreaCodes: [
                'AREA-D',
                'AREA-G',
                'AREA-H',
                'AREA-I',
                'AREA-J'
            ],
            order: 5,
            createdAt: now,
            updatedAt: now
        }
    ];
    // ── Behaviour outcomes (BEH) ───────────────────────────────────────────────
    const bBeh01 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const bBeh02 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const bBeh03 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const bBeh04 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const bBeh05 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const bBeh06 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const behaviourOutcomes = [
        {
            id: bBeh01,
            blueprintId: bpId,
            code: 'BEH-01',
            title: 'Producers choose packaging, reuse, refill, and material strategies with a clear understanding of environmental and fee consequences.',
            actors: [
                'Producers',
                'compliance leads',
                'policy teams'
            ],
            relatedAreaCodes: [
                'AREA-A',
                'AREA-H',
                'AREA-I'
            ],
            order: 0,
            createdAt: now,
            updatedAt: now
        },
        {
            id: bBeh02,
            blueprintId: bpId,
            code: 'BEH-02',
            title: 'Producers and schemes classify, validate, and submit data correctly first time.',
            actors: [
                'Producers',
                'compliance schemes',
                'consultants'
            ],
            relatedAreaCodes: [
                'AREA-B',
                'AREA-C'
            ],
            order: 1,
            createdAt: now,
            updatedAt: now
        },
        {
            id: bBeh03,
            blueprintId: bpId,
            code: 'BEH-03',
            title: 'Waste producers, carriers, controllers, and receivers record what actually happened, including exceptions and corrections.',
            actors: [
                'Waste producers',
                'carriers',
                'controllers',
                'receivers'
            ],
            relatedAreaCodes: [
                'AREA-E'
            ],
            order: 2,
            createdAt: now,
            updatedAt: now
        },
        {
            id: bBeh04,
            blueprintId: bpId,
            code: 'BEH-04',
            title: 'Regulators use trusted service data rather than parallel spreadsheets for monitoring, investigation, and reporting.',
            actors: [
                'Regulators',
                'analysts',
                'policy advisors'
            ],
            relatedAreaCodes: [
                'AREA-D',
                'AREA-F'
            ],
            order: 3,
            createdAt: now,
            updatedAt: now
        },
        {
            id: bBeh05,
            blueprintId: bpId,
            code: 'BEH-05',
            title: 'Policy and data teams use explicit evidence questions to decide what data to collect, reuse, infer, or remove.',
            actors: [
                'Policy teams',
                'data teams',
                'analysts'
            ],
            relatedAreaCodes: [
                'AREA-D',
                'AREA-H',
                'AREA-I'
            ],
            order: 4,
            createdAt: now,
            updatedAt: now
        },
        {
            id: bBeh06,
            blueprintId: bpId,
            code: 'BEH-06',
            title: 'Users seek the right support route early, understand their role, and avoid misrouting obligations or responsibilities.',
            actors: [
                'producers',
                'CSO',
                'importers',
                'waste operators',
                'helpdesk'
            ],
            relatedAreaCodes: [
                'AREA-B',
                'AREA-G',
                'AREA-J'
            ],
            order: 5,
            createdAt: now,
            updatedAt: now
        }
    ];
    // ── Strategic service outcomes (SO) ───────────────────────────────────────
    const serviceOutcomes = [
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            code: 'SO-01',
            title: 'Users can understand obligations, roles, deadlines, evidence requirements, and fee logic before they act.',
            behIds: [
                bBeh01,
                bBeh02,
                bBeh06
            ],
            relatedAreaCodes: [
                'AREA-B',
                'AREA-H',
                'AREA-I'
            ],
            order: 0,
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            code: 'SO-02',
            title: 'Users can submit, validate, amend, and trace data with clear feedback and less rework.',
            behIds: [
                bBeh02,
                bBeh03
            ],
            relatedAreaCodes: [
                'AREA-C',
                'AREA-E'
            ],
            order: 1,
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            code: 'SO-03',
            title: 'Regulators and analysts can access trusted current and historical data in reusable views and exports.',
            behIds: [
                bBeh04,
                bBeh05
            ],
            relatedAreaCodes: [
                'AREA-D',
                'AREA-F'
            ],
            order: 2,
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            code: 'SO-04',
            title: 'Waste movements can be tracked across collection, transfer, receipt, treatment, export, and exception events.',
            behIds: [
                bBeh03,
                bBeh04
            ],
            relatedAreaCodes: [
                'AREA-E',
                'AREA-J'
            ],
            order: 3,
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            code: 'SO-05',
            title: 'Risk, anomaly, legitimacy, duplicate-submission, and investigation signals are visible inside operational workflows.',
            behIds: [
                bBeh04
            ],
            relatedAreaCodes: [
                'AREA-F',
                'AREA-J'
            ],
            order: 4,
            createdAt: now,
            updatedAt: now
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            code: 'SO-06',
            title: 'Guidance, support, and transition routes are stable, coordinated, and proportionate to actor complexity.',
            behIds: [
                bBeh01,
                bBeh06
            ],
            relatedAreaCodes: [
                'AREA-G',
                'AREA-B'
            ],
            order: 5,
            createdAt: now,
            updatedAt: now
        }
    ];
    return {
        blueprint: {
            id: bpId,
            serviceName: 'Defra Environmental Opportunity Map',
            description: 'Goals → Outcome Areas → Opportunities from the Defra environmental opportunity map (2026-04-28). ENV-01 Reduce waste · ENV-02 Increase circularity · ENV-03 Prevent waste crime.',
            createdAt: now,
            updatedAt: now
        },
        stages: [],
        steps: [],
        lanes: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_LANES"].map((l)=>({
                ...l
            })),
        childBlueprints: [],
        rootDocument: null,
        activeBlueprintId: bpId,
        rootBlueprintId: bpId,
        cards: [],
        storyboardImages: [],
        storyboardVisible: true,
        storyboardCollapsed: false,
        cardLinks: [],
        evidence: [],
        strategicGoals,
        outcomes,
        systemOutcomes,
        behaviourOutcomes,
        serviceOutcomes,
        opportunities,
        solutions,
        assumptions,
        stepLinks: [],
        requirements: [],
        apiContracts: [],
        uiScaffolds: [],
        traceabilityCounters: {
            OPP: 51
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/share-payload.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blueprintHasStoryboardImageBytes",
    ()=>blueprintHasStoryboardImageBytes,
    "buildSharePostInit",
    ()=>buildSharePostInit,
    "createShareAndGetId",
    ()=>createShareAndGetId,
    "prepareSnapshotForShare",
    ()=>prepareSnapshotForShare,
    "publishOrRefreshShare",
    ()=>publishOrRefreshShare,
    "stripStoryboardImageBytesForTransport",
    ()=>stripStoryboardImageBytesForTransport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Share payload: trim to a size gateways accept, insert from browser → Supabase,
 * or gzip POST /api/share only when the body is under Vercel’s ~4.5MB cap.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$fflate$2f$esm$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/fflate/esm/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
;
const VERCEL_SHARE_BODY_BUDGET = 4_000_000;
/**
 * Hard target for JSON.stringify length. Keeps direct Supabase REST inserts and
 * gzip+API fallback under common ~4–5MB gateway limits (gzip typically 25–40% of JSON for text).
 */ const TARGET_JSON_STRING_CHARS = 900_000;
const TOO_LARGE = 'This blueprint is too large to share even after trimming. Try removing storyboard images or use Export.';
function isBlueprintState(s) {
    if (typeof s !== 'object' || s === null) return false;
    const o = s;
    return o.blueprint != null && Array.isArray(o.storyboardImages);
}
/** Remove ids that must not be copied into public share payloads (prevents others from overwriting your link). */ function stripShareTransportSecrets(doc) {
    const d = cloneBlueprintForShareTransport(doc);
    const walk = (x)=>{
        if (x.blueprint?.publishedShareId) {
            const bp = {
                ...x.blueprint
            };
            delete bp.publishedShareId;
            x.blueprint = bp;
        }
        for (const ch of x.childBlueprints ?? [])walk(ch);
    };
    walk(d);
    return d;
}
function cloneBlueprintForShareTransport(doc) {
    try {
        return structuredClone(doc);
    } catch  {
        return JSON.parse(JSON.stringify(doc));
    }
}
function blueprintHasStoryboardImageBytes(doc) {
    const walk = (d)=>{
        if ((d.storyboardImages ?? []).some((img)=>(img.dataUrl?.length ?? 0) > 0)) return true;
        return (d.childBlueprints ?? []).some(walk);
    };
    return walk(doc);
}
function stripStoryboardImageBytesForTransport(doc) {
    const clone = cloneBlueprintForShareTransport(doc);
    const walk = (d)=>{
        d.storyboardImages = (d.storyboardImages ?? []).map((img)=>({
                ...img,
                dataUrl: ''
            }));
        for (const child of d.childBlueprints ?? [])walk(child);
    };
    walk(clone);
    return clone;
}
function clip(s, max) {
    if (s == null || s.length <= max) return s ?? '';
    return `${s.slice(0, max)}…`;
}
function truncateCardBodies(doc, maxLen) {
    const d = cloneBlueprintForShareTransport(doc);
    const walk = (x)=>{
        x.cards = (x.cards ?? []).map((c)=>{
            const b = c.body ?? '';
            if (b.length <= maxLen) return c;
            return {
                ...c,
                body: `${b.slice(0, maxLen)}\n\n… [truncated for share link]`
            };
        });
        for (const ch of x.childBlueprints ?? [])walk(ch);
    };
    walk(d);
    return d;
}
/** Shorten long string fields across the tree (OST + board prose dominates size). */ function clipTraceabilityProse(doc, scale) {
    const d = cloneBlueprintForShareTransport(doc);
    const L = (n)=>Math.max(80, Math.floor(n * scale));
    const walk = (x)=>{
        if (x.blueprint?.description) {
            x.blueprint = {
                ...x.blueprint,
                description: clip(x.blueprint.description, L(6000))
            };
        }
        x.cards = (x.cards ?? []).map((c)=>({
                ...c,
                title: clip(c.title, L(1800)),
                body: clip(c.body, L(12000)),
                notes: c.notes ? clip(c.notes, L(4000)) : c.notes
            }));
        x.opportunities = (x.opportunities ?? []).map((o)=>({
                ...o,
                title: clip(o.title, L(500)),
                statement: clip(o.statement, L(8000)),
                rationale: clip(o.rationale, L(8000))
            }));
        x.outcomes = (x.outcomes ?? []).map((o)=>({
                ...o,
                title: clip(o.title, L(500)),
                description: o.description ? clip(o.description, L(12000)) : o.description,
                metric: o.metric ? clip(o.metric, L(8000)) : o.metric,
                priorityRationale: o.priorityRationale ? clip(o.priorityRationale, L(4000)) : o.priorityRationale
            }));
        x.strategicGoals = (x.strategicGoals ?? []).map((g)=>({
                ...g,
                title: clip(g.title, L(400)),
                description: g.description ? clip(g.description, L(4000)) : g.description
            }));
        x.systemOutcomes = (x.systemOutcomes ?? []).map((s)=>({
                ...s,
                title: clip(s.title, L(2500))
            }));
        x.behaviourOutcomes = (x.behaviourOutcomes ?? []).map((b)=>({
                ...b,
                title: clip(b.title, L(2500))
            }));
        x.serviceOutcomes = (x.serviceOutcomes ?? []).map((s)=>({
                ...s,
                title: clip(s.title, L(2500))
            }));
        x.evidence = (x.evidence ?? []).map((e)=>({
                ...e,
                quote: clip(e.quote, L(4000)),
                source: clip(e.source, L(1200))
            }));
        x.solutions = (x.solutions ?? []).map((s)=>({
                ...s,
                title: clip(s.title, L(500)),
                description: s.description ? clip(s.description, L(4000)) : s.description
            }));
        x.assumptions = (x.assumptions ?? []).map((a)=>({
                ...a,
                title: clip(a.title, L(2000)),
                rationale: a.rationale ? clip(a.rationale, L(3000)) : a.rationale
            }));
        x.requirements = (x.requirements ?? []).map((r)=>({
                ...r,
                title: clip(r.title, L(500)),
                description: r.description ? clip(r.description, L(4000)) : r.description,
                acceptanceCriteria: r.acceptanceCriteria ? clip(r.acceptanceCriteria, L(4000)) : r.acceptanceCriteria
            }));
        x.apiContracts = (x.apiContracts ?? []).map((r)=>({
                ...r,
                title: clip(r.title, L(500)),
                description: r.description ? clip(r.description, L(4000)) : r.description
            }));
        x.uiScaffolds = (x.uiScaffolds ?? []).map((r)=>({
                ...r,
                title: clip(r.title, L(500)),
                description: r.description ? clip(r.description, L(4000)) : r.description,
                componentName: r.componentName ? clip(r.componentName, L(500)) : r.componentName
            }));
        x.stages = (x.stages ?? []).map((st)=>({
                ...st,
                title: clip(st.title, L(2000)),
                outcome: clip(st.outcome, L(4000)),
                description: st.description ? clip(st.description, L(4000)) : st.description
            }));
        x.steps = (x.steps ?? []).map((st)=>({
                ...st,
                title: clip(st.title, L(2000))
            }));
        for (const ch of x.childBlueprints ?? [])walk(ch);
    };
    walk(d);
    return d;
}
function jsonCharLength(obj) {
    return JSON.stringify(obj).length;
}
/**
 * Card/link/evidence count dominates JSON size. Shrink each blueprint subtree until the
 * whole document fits — never rely on string clipping alone for huge boards.
 */ function thinCardsForShareBudget(doc, keepRatio) {
    const d = cloneBlueprintForShareTransport(doc);
    const walk = (x)=>{
        const cards = [
            ...x.cards ?? []
        ].sort((a, b)=>a.order - b.order);
        const keep = Math.max(0, Math.floor(cards.length * keepRatio));
        const kept = cards.slice(0, keep);
        const cardIds = new Set(kept.map((c)=>c.id));
        x.cards = kept;
        x.cardLinks = (x.cardLinks ?? []).filter((l)=>cardIds.has(l.sourceCardId) && cardIds.has(l.targetCardId));
        x.evidence = (x.evidence ?? []).filter((e)=>cardIds.has(e.cardId));
        for (const ch of x.childBlueprints ?? [])walk(ch);
    };
    walk(d);
    return d;
}
/** Reduce opportunity/solution/assumption rows when the graph is huge (e.g. OST-heavy). */ function thinOpportunityGraphForShareBudget(doc, keepRatio) {
    const d = cloneBlueprintForShareTransport(doc);
    const walk = (x)=>{
        const opps = [
            ...x.opportunities ?? []
        ].sort((a, b)=>(a.traceabilityCode ?? a.id).localeCompare(b.traceabilityCode ?? b.id));
        const keep = Math.max(0, Math.floor(opps.length * keepRatio));
        const kept = opps.slice(0, keep);
        const oppIds = new Set(kept.map((o)=>o.id));
        x.opportunities = kept;
        x.solutions = (x.solutions ?? []).filter((s)=>!s.opportunityId || oppIds.has(s.opportunityId));
        const solIds = new Set((x.solutions ?? []).map((s)=>s.id));
        x.assumptions = (x.assumptions ?? []).filter((a)=>!a.solutionId || solIds.has(a.solutionId));
        for (const ch of x.childBlueprints ?? [])walk(ch);
    };
    walk(d);
    return d;
}
/**
 * Ensures JSON.stringify(doc).length ≤ TARGET. Drops cards and OST rows (by ratio)
 * across the tree until it fits — PostgREST sends uncompressed JSON.
 */ function finalizeBlueprintSharePayload(doc, storyboardImagesStripped, shareTextTrimmed) {
    let trimmed = shareTextTrimmed;
    let out = doc;
    let ratio = 0.92;
    let guard = 0;
    while(jsonCharLength(out) > TARGET_JSON_STRING_CHARS && guard < 72){
        out = thinCardsForShareBudget(out, ratio);
        out = thinOpportunityGraphForShareBudget(out, ratio);
        trimmed = true;
        ratio *= 0.88;
        guard += 1;
    }
    if (jsonCharLength(out) > TARGET_JSON_STRING_CHARS) {
        throw new Error(TOO_LARGE);
    }
    return {
        payload: out,
        storyboardImagesStripped,
        shareTextTrimmed: trimmed
    };
}
function prepareSnapshotForShare(snapshot) {
    if (!isBlueprintState(snapshot)) {
        const len = jsonCharLength(snapshot);
        if (len > TARGET_JSON_STRING_CHARS) {
            throw new Error(TOO_LARGE);
        }
        return {
            payload: snapshot,
            storyboardImagesStripped: false,
            shareTextTrimmed: false
        };
    }
    const storyboardImagesStripped = blueprintHasStoryboardImageBytes(snapshot);
    let shareTextTrimmed = false;
    const baseForShare = stripShareTransportSecrets(snapshot);
    let doc = stripStoryboardImageBytesForTransport(baseForShare);
    const cardSteps = [
        6_000,
        2_500,
        900,
        300,
        100,
        40
    ];
    for (const max of cardSteps){
        if (jsonCharLength(doc) <= TARGET_JSON_STRING_CHARS) break;
        doc = truncateCardBodies(stripStoryboardImageBytesForTransport(baseForShare), max);
        shareTextTrimmed = true;
    }
    const scales = [
        1,
        0.45,
        0.2,
        0.08
    ];
    for (const scale of scales){
        if (jsonCharLength(doc) <= TARGET_JSON_STRING_CHARS) break;
        doc = clipTraceabilityProse(doc, scale);
        shareTextTrimmed = true;
    }
    let safety = 0;
    while(jsonCharLength(doc) > TARGET_JSON_STRING_CHARS && safety < 12){
        doc = truncateCardBodies(doc, 20);
        doc = clipTraceabilityProse(doc, 0.08);
        shareTextTrimmed = true;
        if (jsonCharLength(doc) > TARGET_JSON_STRING_CHARS * 1.2) {
            doc = truncateCardBodies(doc, 0);
            shareTextTrimmed = true;
        }
        safety += 1;
    }
    return finalizeBlueprintSharePayload(doc, storyboardImagesStripped, shareTextTrimmed);
}
function byteLength(body) {
    return body.byteLength;
}
function gzipUtf8WithFflate(json) {
    const input = new TextEncoder().encode(json);
    return new Promise((resolve, reject)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$fflate$2f$esm$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gzip"])(input, {
            level: 6
        }, (err, result)=>{
            if (err) {
                reject(err);
                return;
            }
            resolve(new Uint8Array(result).buffer);
        });
    });
}
async function encodeShareJsonToGzip(json) {
    if (typeof CompressionStream !== 'undefined') {
        try {
            const stream = new Blob([
                json
            ]).stream().pipeThrough(new CompressionStream('gzip'));
            const buf = await new Response(stream).arrayBuffer();
            if (buf.byteLength > 0) return buf;
        } catch  {
        // fall through
        }
    }
    return gzipUtf8WithFflate(json);
}
async function gzipBytesUnderVercelLimit(prepared) {
    const json = JSON.stringify(prepared.payload);
    const body = await encodeShareJsonToGzip(json);
    return byteLength(body) <= VERCEL_SHARE_BODY_BUDGET;
}
async function buildSharePostInitFromPrepared(prepared) {
    const json = JSON.stringify(prepared.payload);
    const body = await encodeShareJsonToGzip(json);
    if (byteLength(body) > VERCEL_SHARE_BODY_BUDGET) {
        throw new Error(TOO_LARGE);
    }
    return {
        init: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Content-Encoding': 'gzip'
            },
            body
        },
        storyboardImagesStripped: prepared.storyboardImagesStripped,
        shareTextTrimmed: prepared.shareTextTrimmed
    };
}
async function buildSharePostInit(snapshot) {
    return buildSharePostInitFromPrepared(prepareSnapshotForShare(snapshot));
}
async function createShareAndGetId(snapshot) {
    const prepared = prepareSnapshotForShare(snapshot);
    const url = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (url && anonKey) {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, anonKey);
        const { data, error } = await supabase.from('blueprints').insert({
            snapshot: prepared.payload
        }).select('id').single();
        if (!error && data?.id) {
            return {
                id: data.id,
                storyboardImagesStripped: prepared.storyboardImagesStripped,
                shareTextTrimmed: prepared.shareTextTrimmed
            };
        }
        console.warn('[share] Direct Supabase insert failed:', error?.message);
        const canTryApi = await gzipBytesUnderVercelLimit(prepared);
        if (!canTryApi) {
            throw new Error(error?.message ? `Could not create share: ${error.message}` : 'Could not create share (storage rejected the payload and it is too large for the API fallback).');
        }
    } else {
        const ok = await gzipBytesUnderVercelLimit(prepared);
        if (!ok) {
            throw new Error(TOO_LARGE);
        }
    }
    const { init, storyboardImagesStripped, shareTextTrimmed } = await buildSharePostInitFromPrepared(prepared);
    const res = await fetch('/api/share', init);
    const resBody = await res.json().catch(()=>({}));
    if (!res.ok || !resBody.id) {
        const msg = typeof resBody.error === 'string' ? resBody.error : res.status === 413 ? 'Share payload is too large for this server.' : `Share failed with HTTP ${res.status}`;
        throw new Error(msg);
    }
    return {
        id: resBody.id,
        storyboardImagesStripped,
        shareTextTrimmed
    };
}
async function publishOrRefreshShare(snapshot, existingShareId) {
    if (!existingShareId) {
        return createShareAndGetId(snapshot);
    }
    const prepared = prepareSnapshotForShare(snapshot);
    const json = JSON.stringify(prepared.payload);
    const body = await encodeShareJsonToGzip(json);
    if (byteLength(body) > VERCEL_SHARE_BODY_BUDGET) {
        throw new Error(TOO_LARGE);
    }
    const res = await fetch(`/api/share/${encodeURIComponent(existingShareId)}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Content-Encoding': 'gzip'
        },
        body
    });
    const resBody = await res.json().catch(()=>({}));
    if (res.status === 404) {
        return createShareAndGetId(snapshot);
    }
    if (!res.ok) {
        const msg = typeof resBody.error === 'string' ? resBody.error : res.status === 413 ? 'Share payload is too large for this server.' : `Publish failed with HTTP ${res.status}`;
        throw new Error(msg);
    }
    return {
        id: existingShareId,
        storyboardImagesStripped: prepared.storyboardImagesStripped,
        shareTextTrimmed: prepared.shareTextTrimmed
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/blueprint-title.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Legacy default title from imports; show the current placeholder instead. */ __turbopack_context__.s([
    "blueprintTitleLabel",
    ()=>blueprintTitleLabel
]);
function blueprintTitleLabel(serviceName) {
    return serviceName === 'Imported Blueprint' ? 'Enter title' : serviceName;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/blueprint-levels.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LIBRARY_LEVEL_PILL",
    ()=>LIBRARY_LEVEL_PILL,
    "getActiveBlueprintJourneyLevel",
    ()=>getActiveBlueprintJourneyLevel,
    "getCanonicalRootBlueprintId",
    ()=>getCanonicalRootBlueprintId,
    "getLibraryEntryJourneyLevel",
    ()=>getLibraryEntryJourneyLevel,
    "isActiveLibraryEntry",
    ()=>isActiveLibraryEntry
]);
/** Walk upward to the lifecycle (L1) root so library rows don't recurse infinitely via rootDocument ↔ childBlueprints. */ function getCanonicalRootState(state) {
    const seen = new Set();
    let current = state;
    for(let i = 0; i < 64; i++){
        const next = current.rootDocument;
        if (!next) return current;
        const nextId = next.blueprint?.id;
        if (nextId && seen.has(nextId)) {
            console.warn('[service-blueprint] Cyclic rootDocument chain; using nearest stable root.');
            return current;
        }
        const id = current.blueprint?.id;
        if (id) seen.add(id);
        current = next;
    }
    console.warn('[service-blueprint] rootDocument chain exceeded max depth.');
    return current;
}
function getLibraryEntryJourneyLevel(_state, _entryBlueprintId) {
    return 'L1';
}
function getActiveBlueprintJourneyLevel(_state) {
    return 'L1';
}
function getCanonicalRootBlueprintId(state) {
    return getCanonicalRootState(state).blueprint?.id ?? '';
}
function isActiveLibraryEntry(currentState, entry, entryBlueprintId) {
    return getCanonicalRootBlueprintId(entry) === getCanonicalRootBlueprintId(currentState) && entryBlueprintId === (currentState.activeBlueprintId ?? currentState.blueprint?.id ?? '');
}
const LIBRARY_LEVEL_PILL = {
    L1: {
        label: 'L1 · Lifecycle',
        className: 'border border-emerald-200 bg-emerald-50 text-emerald-900'
    },
    L2: {
        label: 'L2 · Macro journey',
        className: 'border border-sky-200 bg-sky-50 text-sky-900'
    },
    L3: {
        label: 'L3 · Micro (Service or product)',
        className: 'border border-violet-200 bg-violet-50 text-violet-900'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/export-markdown.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportMarkdown",
    ()=>exportMarkdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/lane-definitions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$blueprint$2d$levels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/blueprint-levels.ts [app-client] (ecmascript)");
;
;
const LANE_SWIMLANE_LABEL = {
    actor: 'actor',
    user_action_event: 'user_action',
    user_need: 'user_need',
    pain_point: 'pain_point',
    frontstage_touchpoint: 'frontstage_touchpoint',
    activity: 'activity',
    backstage_process: 'backstage_process',
    description: 'description',
    behaviour_change: 'behaviour_change',
    success_measure: 'success_measure',
    motivation: 'motivation',
    ability: 'ability',
    prompts: 'prompts',
    system: 'support_system',
    policy_intent: 'policy_intent',
    business_rule: 'business_rule',
    data_input: 'data_in',
    data_output: 'data_out',
    backstage_actor: 'backstage_actor',
    shared_services: 'shared_services',
    opportunities: 'opportunities',
    ideas: 'ideas',
    // L1 Macro lanes
    policy_outcome: 'policy_outcome',
    user_outcome: 'user_outcome',
    operational_outcome: 'operational_outcome',
    insights: 'insights',
    impact_of_pain_points: 'impact_of_pain_points',
    performance_indicators: 'performance_indicators',
    opportunities_lane: 'opportunities',
    third_parties_involved: 'third_parties_involved',
    support_system: 'support_system'
};
const LANE_ORDER = [
    'actor',
    'user_action_event',
    'user_need',
    'pain_point',
    'frontstage_touchpoint',
    'activity',
    'backstage_process',
    'description',
    'behaviour_change',
    'success_measure',
    'motivation',
    'ability',
    'prompts',
    'system',
    'policy_intent',
    'business_rule',
    'data_input',
    'data_output',
    'backstage_actor',
    'shared_services',
    'opportunities',
    'ideas',
    // L1 Macro lanes
    'policy_outcome',
    'user_outcome',
    'operational_outcome',
    'insights',
    'impact_of_pain_points',
    'performance_indicators',
    'opportunities_lane',
    'third_parties_involved',
    'support_system'
];
/**
 * Pick the right lane key list for the blueprint based on its journey level —
 * mirrors the logic in Board.tsx so the export shows exactly the lanes the
 * editor would show for that level.
 *
 * - L3 micro    → L3_LANE_KEYS (e.g. business_rule, product_teams, backstage_actor…)
 * - L2 macro    → L2_LANE_KEYS
 * - L1 macro    → L1_MACRO_LANES (lifecycle blueprints with policy_reform, etc.)
 * - Otherwise   → legacy LANE_ORDER (for the original report-packaging-style standalone)
 */ function getLaneOrderForState(state) {
    const activeJourneyLevel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$blueprint$2d$levels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveBlueprintJourneyLevel"])(state);
    const isChildView = Boolean(state.rootDocument && state.activeBlueprintId !== state.rootBlueprintId);
    const isL2Mode = isChildView && activeJourneyLevel === 'L2';
    const isL3Mode = isChildView && activeJourneyLevel === 'L3';
    const isL1MacroMode = state.lanes.some((l)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L1_MACRO_LANE_KEYS"].has(l.key));
    if (isL3Mode) return [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L3_LANE_KEYS"]
    ];
    if (isL2Mode) return [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L2_LANE_KEYS"]
    ];
    if (isL1MacroMode) return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L1_MACRO_LANES"].map((l)=>l.key);
    return LANE_ORDER;
}
function stageCode(index) {
    return `STG-${String(index + 1).padStart(2, '0')}`;
}
function exportMarkdown(state) {
    const { blueprint, stages, steps, cards, cardLinks, evidence, opportunities } = state;
    const sortedStages = [
        ...stages
    ].sort((a, b)=>a.order - b.order);
    const laneOrder = getLaneOrderForState(state);
    const lines = [];
    // ── Header ───────────────────────────────────────────────────────────────
    lines.push(`# Service Blueprint: ${blueprint.serviceName}`);
    lines.push('');
    if (blueprint.description) {
        lines.push(`> ${blueprint.description}`);
        lines.push('');
    }
    lines.push('---');
    lines.push('');
    // ── Section 1: Service ────────────────────────────────────────────────────
    lines.push('## 1. Service');
    lines.push('');
    lines.push('| Field | Value |');
    lines.push('|---|---|');
    lines.push(`| **service_name** | ${blueprint.serviceName} |`);
    lines.push(`| **description** | ${blueprint.description || '—'} |`);
    lines.push(`| **last_updated** | ${blueprint.updatedAt.split('T')[0]} |`);
    lines.push('');
    lines.push('---');
    lines.push('');
    // ── Section 2: Stages ─────────────────────────────────────────────────────
    lines.push('## 2. Stages');
    lines.push('');
    lines.push('| stage_id | stage_number | stage_name | stage_outcome | preceding_stage_id |');
    lines.push('|---|---|---|---|---|');
    sortedStages.forEach((stage, i)=>{
        const id = stage.traceabilityCode || stageCode(i);
        const precedingId = i === 0 ? '—' : sortedStages[i - 1].traceabilityCode || stageCode(i - 1);
        const precedingCell = i === 0 ? '—' : `\`${precedingId}\``;
        lines.push(`| \`${id}\` | ${i + 1} | ${stage.title} | ${stage.outcome || '—'} | ${precedingCell} |`);
    });
    lines.push('');
    lines.push('---');
    lines.push('');
    // ── Section 3: Actors ─────────────────────────────────────────────────────
    const actorCards = cards.filter((c)=>c.laneKey === 'actor');
    lines.push('## 3. Actors');
    lines.push('');
    if (actorCards.length > 0) {
        lines.push('| actor_id | actor_name | description | tags |');
        lines.push('|---|---|---|---|');
        actorCards.forEach((card)=>{
            const id = card.traceabilityCode || card.id.slice(0, 8);
            lines.push(`| \`${id}\` | ${card.title} | ${card.body || '—'} | ${card.tags.join(', ') || '—'} |`);
        });
    } else {
        lines.push('_No actors defined._');
    }
    lines.push('');
    lines.push('---');
    lines.push('');
    // ── Section 4: Blueprint ──────────────────────────────────────────────────
    lines.push('## 4. Blueprint');
    lines.push('');
    lines.push('The core swimlane grid. Rows are swimlane categories; columns are steps (one per stage).');
    lines.push('');
    sortedStages.forEach((stage, i)=>{
        const stageId = stage.traceabilityCode || stageCode(i);
        const stageSteps = [
            ...steps
        ].filter((s)=>s.stageId === stage.id).sort((a, b)=>a.order - b.order);
        lines.push(`### ${stageId}: ${stage.title}`);
        lines.push('');
        lines.push('| Swimlane | Value |');
        lines.push('|---|---|');
        lines.push(`| **stage** | \`${stageId}\` |`);
        lines.push(`| **step** | ${stageSteps.map((s)=>s.title).join('; ') || '—'} |`);
        for (const laneKey of laneOrder){
            const laneCards = cards.filter((c)=>c.stageId === stage.id && c.laneKey === laneKey).sort((a, b)=>a.order - b.order);
            const label = LANE_SWIMLANE_LABEL[laneKey];
            const value = laneCards.length ? laneCards.map((c)=>c.title).join('; ') : '—';
            lines.push(`| **${label}** | ${value} |`);
        }
        lines.push('');
    });
    lines.push('---');
    lines.push('');
    // ── Section 5: Opportunities ──────────────────────────────────────────────
    lines.push('## 5. Opportunities');
    lines.push('');
    if (opportunities.length > 0) {
        lines.push('| opportunity_id | title | statement | rationale | status | affected_stages | source_cards |');
        lines.push('|---|---|---|---|---|---|---|');
        opportunities.forEach((opp)=>{
            const id = opp.traceabilityCode || opp.id.slice(0, 8);
            const affectedStages = opp.affectedStages.length ? opp.affectedStages.join('; ') : '—';
            const sourceCards = opp.sourceCardIds.map((cardId)=>{
                const c = cards.find((card)=>card.id === cardId);
                return c ? c.traceabilityCode || c.id.slice(0, 8) : cardId.slice(0, 8);
            }).join('; ') || '—';
            lines.push(`| \`${id}\` | ${opp.title} | ${opp.statement || '—'} | ${opp.rationale || '—'} | ${opp.status} | ${affectedStages} | ${sourceCards} |`);
        });
    } else {
        lines.push('_No opportunities defined._');
    }
    lines.push('');
    lines.push('---');
    lines.push('');
    // ── Section 6: Card Links ─────────────────────────────────────────────────
    lines.push('## 6. Card Links');
    lines.push('');
    const visibleLinks = cardLinks.filter((l)=>l.relation !== 'next_step');
    if (visibleLinks.length > 0) {
        lines.push('| link_id | source_card | relation | target_card |');
        lines.push('|---|---|---|---|');
        visibleLinks.forEach((link)=>{
            const source = cards.find((c)=>c.id === link.sourceCardId);
            const target = cards.find((c)=>c.id === link.targetCardId);
            if (!source || !target) return;
            const srcId = source.traceabilityCode || source.id.slice(0, 8);
            const tgtId = target.traceabilityCode || target.id.slice(0, 8);
            lines.push(`| \`${link.id.slice(0, 8)}\` | ${source.title} (\`${srcId}\`) | ${link.relation} | ${target.title} (\`${tgtId}\`) |`);
        });
    } else {
        lines.push('_No card links defined._');
    }
    lines.push('');
    lines.push('---');
    lines.push('');
    // ── Section 7: Evidence ───────────────────────────────────────────────────
    lines.push('## 7. Evidence');
    lines.push('');
    if (evidence.length > 0) {
        lines.push('| evidence_id | card | quote | source | type | strength |');
        lines.push('|---|---|---|---|---|---|');
        evidence.forEach((ev)=>{
            const card = cards.find((c)=>c.id === ev.cardId);
            const cardRef = card ? `${card.title} (\`${card.traceabilityCode || card.id.slice(0, 8)}\`)` : ev.cardId.slice(0, 8);
            const evId = ev.traceabilityCode || ev.id.slice(0, 8);
            lines.push(`| \`${evId}\` | ${cardRef} | ${ev.quote || '—'} | ${ev.source || '—'} | ${ev.evidenceType} | ${ev.strength} |`);
        });
    } else {
        lines.push('_No evidence records defined._');
    }
    lines.push('');
    return lines.join('\n');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/traceability/display.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEvidenceCodesFromText",
    ()=>getEvidenceCodesFromText,
    "getTraceabilityCodesFromText",
    ()=>getTraceabilityCodesFromText,
    "stripRollupsForCardDisplay",
    ()=>stripRollupsForCardDisplay,
    "stripTraceabilityForDisplay",
    ()=>stripTraceabilityForDisplay
]);
const TRACEABILITY_CODE_PATTERN = /\b[A-Z]{1,5}-\d{3,}\b/g;
const LEADING_CODE_PATTERN = /^\s*([A-Z]{1,5}-\d{3,})(?:\s*[:\-]\s*|\s+)/;
const EVIDENCE_PATTERN = /\s*Evidence(?:\s+includes|:)[^.]*\b[A-Z]{1,5}-\d{3,}\b[^.]*\.?/gi;
const ROLLS_UP_PATTERN = /\s*\[\s*Rolls up\b[^\]]*\]\s*/gi;
function stripTraceabilityForDisplay(value) {
    return value.replace(LEADING_CODE_PATTERN, '').replace(EVIDENCE_PATTERN, '').replace(/\s{2,}/g, ' ').trim();
}
function stripRollupsForCardDisplay(value) {
    return value.replace(ROLLS_UP_PATTERN, ' ').replace(/\s{2,}/g, ' ').trim();
}
function getTraceabilityCodesFromText(value) {
    return Array.from(new Set(value.match(TRACEABILITY_CODE_PATTERN) ?? []));
}
function getEvidenceCodesFromText(value) {
    const codes = [];
    for (const match of value.matchAll(EVIDENCE_PATTERN)){
        codes.push(...getTraceabilityCodesFromText(match[0] ?? ''));
    }
    return Array.from(new Set(codes));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/hooks/useFocusTrap.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFocusTrap",
    ()=>useFocusTrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const FOCUSABLE_SELECTORS = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
].join(', ');
function useFocusTrap(ref, enabled) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFocusTrap.useEffect": ()=>{
            if (!enabled || !ref.current) return;
            const container = ref.current;
            const previouslyFocused = document.activeElement;
            // Move focus into the panel on open
            const focusable = Array.from(container.querySelectorAll(FOCUSABLE_SELECTORS));
            focusable[0]?.focus();
            const handleKeyDown = {
                "useFocusTrap.useEffect.handleKeyDown": (e)=>{
                    if (e.key !== 'Tab') return;
                    const items = Array.from(container.querySelectorAll(FOCUSABLE_SELECTORS));
                    if (items.length === 0) return;
                    const first = items[0];
                    const last = items[items.length - 1];
                    if (e.shiftKey) {
                        if (document.activeElement === first) {
                            e.preventDefault();
                            last.focus();
                        }
                    } else {
                        if (document.activeElement === last) {
                            e.preventDefault();
                            first.focus();
                        }
                    }
                }
            }["useFocusTrap.useEffect.handleKeyDown"];
            container.addEventListener('keydown', handleKeyDown);
            return ({
                "useFocusTrap.useEffect": ()=>{
                    container.removeEventListener('keydown', handleKeyDown);
                    previouslyFocused?.focus();
                }
            })["useFocusTrap.useEffect"];
        }
    }["useFocusTrap.useEffect"], [
        ref,
        enabled
    ]);
}
_s(useFocusTrap, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/board-layout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Width of one step column (px). Kept in sync across Board and span rows. */ __turbopack_context__.s([
    "BOARD_STEP_WIDTH",
    ()=>BOARD_STEP_WIDTH
]);
const BOARD_STEP_WIDTH = 320;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LANE_KEYS",
    ()=>LANE_KEYS
]);
const LANE_KEYS = [
    // L2 Micro lanes
    'actor',
    'user_action_event',
    'user_need',
    'pain_point',
    'frontstage_touchpoint',
    'activity',
    'backstage_process',
    'description',
    'behaviour_change',
    'success_measure',
    'motivation',
    'ability',
    'prompts',
    'system',
    'policy_intent',
    'business_rule',
    'data_input',
    'data_output',
    'backstage_actor',
    'shared_services',
    'opportunities',
    'ideas',
    // L1 Macro lanes
    'policy_outcome',
    'user_outcome',
    'operational_outcome',
    'insights',
    'impact_of_pain_points',
    'performance_indicators',
    'opportunities_lane',
    'third_parties_involved',
    'support_system'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/validate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEmptyRow",
    ()=>isEmptyRow,
    "normalizeHeaders",
    ()=>normalizeHeaders,
    "validateHeaders",
    ()=>validateHeaders,
    "validateLaneKey",
    ()=>validateLaneKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/types.ts [app-client] (ecmascript)");
;
const REQUIRED_HEADERS = [
    'record_type',
    'service_name',
    'stage',
    'stage_order',
    'step',
    'step_order'
];
const ALL_HEADERS = [
    'record_type',
    'service_name',
    'stage',
    'stage_order',
    'stage_outcome',
    'step',
    'step_order',
    'lane_key',
    'card_title',
    'card_body',
    'card_order',
    'tags',
    'source_ref',
    // Optional traceability columns (not required; preserved if present)
    'traceability_code',
    'derived_from_ids',
    'next_step'
];
function validateHeaders(headers) {
    const errors = [];
    const normalized = headers.map((h)=>h.toLowerCase().trim().replace(/\s+/g, '_'));
    for (const req of REQUIRED_HEADERS){
        if (!normalized.includes(req)) {
            errors.push({
                row: 0,
                field: req,
                message: `Missing required column: ${req}`
            });
        }
    }
    return errors;
}
function normalizeHeaders(headers) {
    return headers.map((h)=>{
        const normalized = h.toLowerCase().trim().replace(/\s+/g, '_');
        const match = ALL_HEADERS.find((ah)=>ah === normalized);
        return match || normalized;
    });
}
function validateLaneKey(laneKey, row) {
    if (!laneKey) return null;
    const normalized = laneKey.toLowerCase().trim().replace(/\s+/g, '_');
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANE_KEYS"].includes(normalized)) {
        return {
            row,
            field: 'lane_key',
            message: `Invalid lane_key "${laneKey}". Valid keys: ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANE_KEYS"].join(', ')}`
        };
    }
    return null;
}
function isEmptyRow(row) {
    return Object.values(row).every((v)=>!v || v.trim() === '');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/normalize.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MULTI_TAB_SHEET_NAMES",
    ()=>MULTI_TAB_SHEET_NAMES,
    "detectFormat",
    ()=>detectFormat,
    "detectMultiTabWorkbook",
    ()=>detectMultiTabWorkbook,
    "normalizeImportRows",
    ()=>normalizeImportRows,
    "normalizeMultiTabBlueprint",
    ()=>normalizeMultiTabBlueprint,
    "normalizeMuralExport",
    ()=>normalizeMuralExport,
    "normalizeSwimlaneMatrix",
    ()=>normalizeSwimlaneMatrix,
    "parseInlineId",
    ()=>parseInlineId,
    "parseLeadingCodeLabel",
    ()=>parseLeadingCodeLabel,
    "parseTypedTraceableLaneItem",
    ()=>parseTypedTraceableLaneItem,
    "splitCellItems",
    ()=>splitCellItems,
    "splitEmbeddedTypedLaneItems",
    ()=>splitEmbeddedTypedLaneItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/lane-definitions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/validate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/traceability/service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/traceability/registry.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
function safeNum(val, fallback) {
    if (val === undefined || val === null || val === '') return fallback;
    const n = Number(val);
    return isNaN(n) ? fallback : n;
}
function safeTrim(val) {
    return val?.toString().trim() ?? '';
}
function capitalizeSentenceStart(text) {
    const trimmed = text.trim();
    if (!trimmed) return trimmed;
    const firstLetterIndex = trimmed.search(/[A-Za-z]/);
    if (firstLetterIndex === -1) return trimmed;
    return `${trimmed.slice(0, firstLetterIndex)}${trimmed[firstLetterIndex].toUpperCase()}${trimmed.slice(firstLetterIndex + 1)}`;
}
const SWIMLANE_LANE_ALIASES = {
    user_action: 'user_action_event',
    actors: 'actor',
    primary_actor: 'actor',
    primary_actors: 'actor',
    secondary_actor: 'actor',
    secondary_actors: 'actor',
    user_needs: 'user_need',
    frontstage_touchpoints: 'frontstage_touchpoint',
    business_rule_refs: 'business_rule',
    business_rules: 'business_rule',
    data_in: 'data_input',
    data_out: 'data_output',
    backstage_actors: 'backstage_actor',
    // behaviour_change aliases
    desired_behaviour_change: 'behaviour_change',
    desired_behaviour: 'behaviour_change',
    what_good_looks_like: 'behaviour_change',
    target_behaviour: 'behaviour_change',
    // activity aliases
    activities: 'activity',
    user_activity: 'activity',
    user_activities: 'activity',
    user_task: 'activity',
    user_tasks: 'activity',
    tasks: 'activity',
    // L1 Macro aliases
    pain_points: 'pain_point'
};
function getSwimlaneSourceTags(label) {
    switch(label){
        case 'primary_actor':
        case 'primary_actors':
            return [
                'primary'
            ];
        case 'secondary_actors':
            return [
                'secondary'
            ];
        default:
            return [];
    }
}
function isL1LikeSheetName(sourceSheet) {
    return /^(lifecycle|blueprint|l1|l1_macro|l1-macro)$/i.test(sourceSheet?.trim() ?? '');
}
function isExplicitL1SheetName(sourceSheet) {
    return /^(lifecycle|l1|l1_macro|l1-macro)$/i.test(sourceSheet?.trim() ?? '');
}
function isL1MacroSwimlaneLabel(label) {
    return [
        'phase',
        'policy_reform',
        'policy_outcome',
        'user_outcome',
        'operational_outcome',
        'insights',
        'impact_of_pain_points',
        'performance_indicators',
        'opportunities_lane'
    ].includes(label);
}
function resolveSwimlaneLaneKey(label, sourceSheet, isL1MacroContext = false) {
    const isL1LikeSheet = isL1LikeSheetName(sourceSheet);
    if ((isL1LikeSheet || isL1MacroContext) && (label === 'success_measure' || label === 'success_measures')) {
        return 'performance_indicators';
    }
    if ((isExplicitL1SheetName(sourceSheet) || isL1MacroContext) && (label === 'ideas' || label === 'opportunities' || label === 'opportunities_lane')) {
        return 'opportunities_lane';
    }
    return SWIMLANE_LANE_ALIASES[label] ?? label;
}
function getIndefiniteArticle(label) {
    return /^[aeiou]/i.test(label.trim()) ? 'an' : 'a';
}
function qualifyUserNeedWithActor(text, actorLabel) {
    const trimmedText = text.trim();
    const trimmedActor = actorLabel.trim();
    if (!trimmedText || !trimmedActor) return trimmedText;
    if (/^as\s+(a|an|the)\b/i.test(trimmedText)) return trimmedText;
    const article = getIndefiniteArticle(trimmedActor);
    return capitalizeSentenceStart(`As ${article} ${trimmedActor}, ${trimmedText.charAt(0).toLowerCase()}${trimmedText.slice(1)}`);
}
/**
 * Canonical first-column labels recognized in swimlane matrix format.
 * Structural rows (service_name, stage, etc.) and content lane keys.
 */ const SWIMLANE_FIRST_COL_KEYS = new Set([
    'service_name',
    'stage',
    'stage_outcome',
    'step',
    'next_step',
    'actor',
    'actors',
    'primary_actor',
    'secondary_actor',
    'secondary_actors',
    'primary_actors',
    'user_journeys',
    'user_action',
    'user_need',
    'user_needs',
    'pain_point',
    'frontstage_touchpoint',
    'frontstage_touchpoints',
    'activity',
    'activities',
    'user_activity',
    'user_activities',
    'user_task',
    'user_tasks',
    'tasks',
    'backstage_process',
    'description',
    'behaviour_change',
    'desired_behaviour_change',
    'desired_behaviour',
    'what_good_looks_like',
    'target_behaviour',
    'success_measure',
    'motivation',
    'ability',
    'prompts',
    'system',
    'support_system',
    'policy_intent',
    'business_rule',
    'business_rule_refs',
    'business_rules',
    'data_input',
    'data_in',
    'data_output',
    'data_out',
    'backstage_actor',
    'backstage_actors',
    // L1 Macro keys
    'phase',
    'policy_reform',
    'policy_outcome',
    'user_outcome',
    'operational_outcome',
    'insights',
    'pain_points',
    'impact_of_pain_points',
    'performance_indicators',
    'opportunities',
    'ideas',
    'third_parties_involved'
]);
function splitCellItems(cell) {
    if (!cell || cell.trim() === '') return [];
    return cell.split(/\r?\n/).flatMap((line)=>line.split(';')).map((segment)=>segment.replace(/^[-\u2022*\s]+/, '').trim()).filter(Boolean);
}
function parseInlineId(raw) {
    const match = raw.match(/^([A-Z]+-\d{3,})\s+(.+)$/);
    if (match) {
        return {
            traceabilityCode: match[1],
            text: match[2].trim()
        };
    }
    return {
        text: raw
    };
}
function parseLeadingCodeLabel(raw) {
    const match = raw.match(/^([A-Z]+-\d{3,})\s*:\s+(.+)$/);
    if (match) {
        return {
            traceabilityCode: match[1],
            text: match[2].trim()
        };
    }
    return {
        text: raw
    };
}
function splitEmbeddedTypedLaneItems(raw) {
    const trimmed = raw.trim();
    if (!trimmed) return [];
    const parts = trimmed.split(/(?<=.)\s+(?=[A-Z][A-Za-z\s/-]*:\s+[A-Z]+-\d{3,}\b)/g);
    return parts.map((part)=>part.trim()).filter(Boolean);
}
function parseTypedTraceableLaneItem(raw) {
    const trimmed = raw.trim();
    if (!trimmed) return {
        text: '',
        tags: []
    };
    const leadingCode = parseLeadingCodeLabel(trimmed);
    if (leadingCode.traceabilityCode) {
        return {
            traceabilityCode: leadingCode.traceabilityCode,
            text: leadingCode.text.trim(),
            tags: []
        };
    }
    const typeMatch = trimmed.match(/^([A-Za-z][A-Za-z\s/-]*):\s*(.+)$/);
    const typeLabel = typeMatch?.[1]?.trim().toLowerCase();
    const remainder = typeMatch?.[2]?.trim() ?? trimmed;
    const parsed = parseLeadingCodeLabel(remainder).traceabilityCode ? parseLeadingCodeLabel(remainder) : parseInlineId(remainder);
    return {
        traceabilityCode: parsed.traceabilityCode,
        text: parsed.text.trim(),
        tags: typeLabel ? [
            typeLabel
        ] : []
    };
}
/**
 * Builds a normalized empty BlueprintState with the four new arrays included.
 * Used as the base for all three normalizer functions.
 */ function emptyImportState(bpId, ts, serviceName) {
    return {
        blueprint: {
            id: bpId,
            serviceName: serviceName || 'Enter title',
            description: '',
            createdAt: ts,
            updatedAt: ts
        },
        stages: [],
        steps: [],
        lanes: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_LANES"].map((l)=>({
                ...l
            })),
        childBlueprints: [],
        rootDocument: null,
        activeBlueprintId: bpId,
        rootBlueprintId: bpId,
        cards: [],
        storyboardImages: [],
        storyboardVisible: true,
        storyboardCollapsed: false,
        cardLinks: [],
        evidence: [],
        opportunities: [],
        solutions: [],
        assumptions: [],
        strategicGoals: [],
        outcomes: [],
        systemOutcomes: [],
        behaviourOutcomes: [],
        serviceOutcomes: [],
        stepLinks: [],
        requirements: [],
        apiContracts: [],
        uiScaffolds: [],
        traceabilityCounters: {}
    };
}
/**
 * If any card in the state uses an L1-Macro-only lane key, swap the lane
 * definitions to L1_MACRO_LANES so the board renders the correct swimlanes.
 */ function applyLaneSetFromCards(state) {
    const hasL1 = state.cards.some((c)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L1_MACRO_LANE_KEYS"].has(c.laneKey));
    if (hasL1) {
        state.lanes = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L1_MACRO_LANES"].map((l)=>({
                ...l
            }));
    }
}
/**
 * Resolves a `next_step` column value to a step ID.
 *
 * Lookup order:
 *  1. SS-NNN traceability code match
 *  2. stage::step composite key match
 *  3. Bare step title within the same stage (warns on ambiguity)
 *
 * Returns the resolved target step ID or null if unresolved.
 */ function resolveNextStep(value, currentStageName, stepMap, warnings, rowNum) {
    const trimmed = value.trim();
    if (!trimmed) return null;
    const allSteps = Array.from(stepMap.values());
    // 1. SS-NNN code match
    if (/^SS-\d{3,}$/.test(trimmed)) {
        const match = allSteps.find((s)=>s.traceabilityCode === trimmed);
        if (!match) {
            warnings.push({
                row: rowNum,
                field: 'next_step',
                message: `next_step code "${trimmed}" not found, skipped`
            });
        }
        return match ?? null;
    }
    // 2. stage::step composite
    if (trimmed.includes('::')) {
        const match = stepMap.get(trimmed);
        if (!match) {
            warnings.push({
                row: rowNum,
                field: 'next_step',
                message: `next_step "${trimmed}" (stage::step) not found, skipped`
            });
        }
        return match ?? null;
    }
    // 3. Bare title within same stage
    const candidates = Array.from(stepMap.entries()).filter(([key])=>key.startsWith(`${currentStageName}::`) && key.endsWith(`::${trimmed}`)).map(([, s])=>s);
    // Also try composite keys that exactly end with ::trimmed
    const exactCandidates = Array.from(stepMap.entries()).filter(([key])=>key === `${currentStageName}::${trimmed}`).map(([, s])=>s);
    const resolved = exactCandidates.length > 0 ? exactCandidates : candidates;
    if (resolved.length === 0) {
        warnings.push({
            row: rowNum,
            field: 'next_step',
            message: `next_step "${trimmed}" not found in stage "${currentStageName}", skipped`
        });
        return null;
    }
    if (resolved.length > 1) {
        warnings.push({
            row: rowNum,
            field: 'next_step',
            message: `next_step "${trimmed}" is ambiguous (${resolved.length} matches), using first`
        });
    }
    return resolved[0];
}
function normalizeImportRows(rows, sourceFile, sourceSheet, existingCounters) {
    const errors = [];
    const warnings = [];
    const bpId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const ts = new Date().toISOString();
    const srcType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectSourceType"])(sourceFile);
    let srcCounters = {
        ...existingCounters ?? {}
    };
    let traceCounters = {
        ...existingCounters ?? {}
    };
    let serviceName = '';
    const stageMap = new Map();
    const stepMap = new Map();
    const cards = [];
    const stepLinkRows = [];
    // -------------------------------------------------------------------------
    // Pass 1 — Build stage/step hierarchy
    // -------------------------------------------------------------------------
    for(let i = 0; i < rows.length; i++){
        const row = rows[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyRow"])(row)) continue;
        const rowServiceName = safeTrim(row.service_name);
        const stageName = safeTrim(row.stage);
        const stageOrder = safeNum(row.stage_order, 0);
        const stageOutcome = safeTrim(row.stage_outcome);
        const stepName = safeTrim(row.step);
        const stepOrder = safeNum(row.step_order, 0);
        const rowTraceCode = safeTrim(row.traceability_code);
        const recordType = safeTrim(row.record_type).toLowerCase();
        if (rowServiceName && !serviceName) {
            serviceName = rowServiceName;
        }
        if (stageName && !stageMap.has(stageName)) {
            stageMap.set(stageName, {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                blueprintId: bpId,
                title: stageName,
                outcome: stageOutcome,
                order: stageOrder,
                // Preserve imported ST code if provided on a structure row
                traceabilityCode: recordType === 'structure' && rowTraceCode.startsWith('ST-') ? rowTraceCode : undefined
            });
        } else if (stageName && stageOutcome) {
            const existing = stageMap.get(stageName);
            if (!existing.outcome) existing.outcome = stageOutcome;
        }
        const stageObj = stageMap.get(stageName);
        const stepKey = `${stageName}::${stepName}`;
        if (stepName && stageObj && !stepMap.has(stepKey)) {
            stepMap.set(stepKey, {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                blueprintId: bpId,
                stageId: stageObj.id,
                title: stepName,
                order: stepOrder,
                // Preserve imported SS code if provided on a structure row
                traceabilityCode: recordType === 'structure' && rowTraceCode.startsWith('SS-') ? rowTraceCode : undefined
            });
        }
        // Collect next_step candidates for Pass 3
        const nextStep = safeTrim(row.next_step);
        if (nextStep && stepName) {
            stepLinkRows.push({
                rowNum: i + 2,
                stageName,
                stepKey,
                nextStepValue: nextStep
            });
        }
    }
    // Assign ST codes to stages that don't have one yet
    for (const stage of stageMap.values()){
        if (!stage.traceabilityCode) {
            const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('ST', traceCounters);
            stage.traceabilityCode = code;
            traceCounters = updatedCounters;
        }
    }
    // Assign SS codes to steps that don't have one yet
    for (const step of stepMap.values()){
        if (!step.traceabilityCode) {
            const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('SS', traceCounters);
            step.traceabilityCode = code;
            traceCounters = updatedCounters;
        }
    }
    // -------------------------------------------------------------------------
    // Pass 2 — Create cards
    // -------------------------------------------------------------------------
    for(let i = 0; i < rows.length; i++){
        const row = rows[i];
        const rowNum = i + 2;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyRow"])(row)) continue;
        const recordType = safeTrim(row.record_type).toLowerCase();
        if (recordType === 'structure') continue;
        const stageName = safeTrim(row.stage);
        const stepName = safeTrim(row.step);
        const laneKey = safeTrim(row.lane_key).toLowerCase().replace(/\s+/g, '_');
        const cardTitle = safeTrim(row.card_title);
        const cardBody = safeTrim(row.card_body);
        const cardOrder = safeNum(row.card_order, 0);
        const tags = safeTrim(row.tags);
        const sourceRef = safeTrim(row.source_ref);
        const rowTraceCode = safeTrim(row.traceability_code);
        const derivedFromRaw = safeTrim(row.derived_from_ids);
        if (recordType !== 'card' && !(recordType === '' && cardTitle)) continue;
        if (!laneKey) {
            if (cardTitle) {
                warnings.push({
                    row: rowNum,
                    field: 'lane_key',
                    message: 'Card row missing lane_key, skipped'
                });
            }
            continue;
        }
        const laneError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateLaneKey"])(laneKey, rowNum);
        if (laneError) {
            errors.push(laneError);
            continue;
        }
        if (!cardTitle) {
            warnings.push({
                row: rowNum,
                field: 'card_title',
                message: 'Card row has no title, skipped'
            });
            continue;
        }
        const stepKey = `${stageName}::${stepName}`;
        const stepObj = stepMap.get(stepKey);
        const stageObj = stageMap.get(stageName);
        if (!stepObj || !stageObj) {
            errors.push({
                row: rowNum,
                field: 'step',
                message: `Cannot find step "${stepName}" in stage "${stageName}"`
            });
            continue;
        }
        // Parse derivedFromIds
        const derivedFromIds = derivedFromRaw ? derivedFromRaw.split(',').map((s)=>s.trim()).filter(Boolean) : undefined;
        // Support "||" delimiter for multiple cards in one cell
        const titleItems = cardTitle.includes('||') ? cardTitle.split('||').map((s)=>s.trim()).filter(Boolean) : [
            cardTitle
        ];
        titleItems.forEach((itemTitle, idx)=>{
            // Assign source provenance ref
            let cardSourceRef = sourceRef;
            if (!cardSourceRef) {
                const { ref, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSourceRef"])(srcType, srcCounters);
                cardSourceRef = ref;
                srcCounters = updatedCounters;
            }
            // Determine traceability code: use imported code for first item only; generate for splits
            let cardTraceCode;
            if (idx === 0 && rowTraceCode) {
                // Imported code preserved as-is
                cardTraceCode = rowTraceCode;
            } else {
                // Generate from lane prefix
                const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLanePrefix"])(laneKey);
                const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])(prefix, traceCounters);
                cardTraceCode = code;
                traceCounters = updatedCounters;
            }
            cards.push({
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                blueprintId: bpId,
                stageId: stageObj.id,
                stepId: stepObj.id,
                laneKey: laneKey,
                title: capitalizeSentenceStart(itemTitle),
                body: idx === 0 ? cardBody : '',
                order: cardOrder + idx,
                tags: tags ? tags.split(',').map((t)=>t.trim()).filter(Boolean) : [],
                sourceFile,
                sourceSheet,
                sourceRow: rowNum,
                sourceRef: cardSourceRef,
                traceabilityCode: cardTraceCode,
                derivedFromIds: idx === 0 ? derivedFromIds : undefined,
                createdAt: ts,
                updatedAt: ts
            });
        });
    }
    // -------------------------------------------------------------------------
    // Pass 3 — Build StepLink records from next_step column values
    // -------------------------------------------------------------------------
    const stepLinks = [];
    for (const { rowNum, stageName, stepKey, nextStepValue } of stepLinkRows){
        const sourceStep = stepMap.get(stepKey);
        if (!sourceStep) continue;
        const targetStep = resolveNextStep(nextStepValue, stageName, stepMap, warnings, rowNum);
        if (!targetStep) continue;
        // Avoid duplicate links
        const alreadyLinked = stepLinks.some((l)=>l.sourceStepId === sourceStep.id && l.targetStepId === targetStep.id);
        if (alreadyLinked) continue;
        const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('NS', traceCounters);
        traceCounters = updatedCounters;
        stepLinks.push({
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            sourceStepId: sourceStep.id,
            targetStepId: targetStep.id,
            traceabilityCode: code,
            createdAt: ts
        });
    }
    // -------------------------------------------------------------------------
    // Assemble result
    // -------------------------------------------------------------------------
    const stages = Array.from(stageMap.values()).sort((a, b)=>a.order - b.order);
    const steps = Array.from(stepMap.values());
    // Separate src counters (SRC_PDF, SRC_CSV, …) from semantic counters (ST, SS, PP, …)
    // srcCounters may contain semantic keys if existingCounters was passed — that's fine,
    // the store merges all of them. We keep them separated in the return value for clarity.
    const semanticKeys = new Set(Object.keys(traceCounters).filter((k)=>!k.startsWith('SRC_')));
    const finalTraceCounters = {};
    for (const k of semanticKeys)finalTraceCounters[k] = traceCounters[k];
    const finalSrcCounters = {};
    for (const [k, v] of Object.entries(srcCounters)){
        if (k.startsWith('SRC_')) finalSrcCounters[k] = v;
    }
    const state = emptyImportState(bpId, ts, serviceName);
    state.stages = stages;
    state.steps = steps;
    state.cards = cards;
    state.stepLinks = stepLinks;
    state.traceabilityCounters = finalTraceCounters;
    applyLaneSetFromCards(state);
    return {
        state,
        errors,
        warnings,
        srcRefCounters: finalSrcCounters,
        traceabilityCounters: finalTraceCounters
    };
}
function normalizeMuralExport(rows, sourceFile, sourceSheet) {
    const errors = [];
    const warnings = [];
    const bpId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const ts = new Date().toISOString();
    let srcCounters = {};
    let serviceName = '';
    const stageMap = new Map();
    const stepMap = new Map();
    const cards = [];
    // Lane number based mapping for the Mural format
    function laneFromNumber(laneNum, laneName) {
        const ln = laneName.toLowerCase().trim();
        if (laneNum === 8) return 'user_action_event';
        if (laneNum === 11) return 'user_need';
        if (laneNum === 13) return 'pain_point';
        if (laneNum === 14) return 'frontstage_touchpoint';
        if (laneNum === 16) return 'backstage_process';
        if (laneNum === 18) return 'system';
        if (laneNum === 20) return 'data_input';
        if (ln === 'front-stage actions') return 'backstage_process';
        if (ln === 'back-stage actions') return 'system';
        return null;
    }
    for(let i = 0; i < rows.length; i++){
        const row = rows[i];
        const rowNum = i + 2;
        const id = safeTrim(row.id);
        const stageNum = safeTrim(row['stage_#'] || row['stage #']);
        const stageLabel = safeTrim(row.stage_label || row['stage label']);
        const laneNum = safeNum(row['lane_#'] || row['lane #'], 0);
        const laneName = safeTrim(row.swim_lane_label || row['swim lane label']);
        const content = safeTrim(row.content);
        if (!content) continue;
        const lnLower = laneName.toLowerCase().trim();
        // Service name
        if (lnLower === 'service name') {
            serviceName = content;
            continue;
        }
        // Stage label
        if (lnLower === 'stages') {
            if (!stageMap.has(stageLabel)) {
                stageMap.set(stageLabel, {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                    blueprintId: bpId,
                    title: content,
                    outcome: '',
                    order: safeNum(stageNum, stageMap.size)
                });
            }
            continue;
        }
        // Step
        if (lnLower === 'service steps') {
            const stage = stageMap.get(stageLabel);
            if (stage) {
                const stepKey = `${stageLabel}::${content}`;
                if (!stepMap.has(stepKey)) {
                    const stepsInStage = Array.from(stepMap.values()).filter((s)=>s.stageId === stage.id);
                    stepMap.set(stepKey, {
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                        blueprintId: bpId,
                        stageId: stage.id,
                        title: content,
                        order: stepsInStage.length
                    });
                }
            }
            continue;
        }
        // Stage outcome
        if (lnLower === 'stage outcomes') {
            const stage = stageMap.get(stageLabel);
            if (stage) {
                stage.outcome = content;
            }
            continue;
        }
        // Card lanes
        const lane = laneFromNumber(laneNum, laneName);
        if (!lane) {
            if (lnLower !== 'service name' && lnLower !== 'stages' && lnLower !== 'service steps' && lnLower !== 'stage outcomes') {
                warnings.push({
                    row: rowNum,
                    field: 'lane',
                    message: `Unmapped lane "${laneName}" (lane# ${laneNum}), skipped`
                });
            }
            continue;
        }
        // Find the step for this card — match by stage
        const stage = stageMap.get(stageLabel);
        if (!stage) {
            warnings.push({
                row: rowNum,
                field: 'stage',
                message: `No stage found for "${stageLabel}"`
            });
            continue;
        }
        const stepsInStage = Array.from(stepMap.entries()).filter(([, s])=>s.stageId === stage.id).map(([, s])=>s);
        const step = stepsInStage[0]; // Mural format has one step per stage typically
        if (!step) {
            warnings.push({
                row: rowNum,
                field: 'step',
                message: `No step found in stage "${stageLabel}"`
            });
            continue;
        }
        // Handle "||" delimited multi-cards
        const items = content.includes('||') ? content.split('||').map((s)=>s.trim()).filter(Boolean) : [
            content
        ];
        items.forEach((item, idx)=>{
            // Mural rows have a native id — use as sourceRef; generate SRC-MURAL-NNN if absent
            let cardSourceRef = id;
            if (!cardSourceRef) {
                const { ref, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSourceRef"])('mural', srcCounters);
                cardSourceRef = ref;
                srcCounters = updatedCounters;
            }
            cards.push({
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                blueprintId: bpId,
                stageId: stage.id,
                stepId: step.id,
                laneKey: lane,
                title: item,
                body: '',
                order: idx,
                tags: [],
                sourceFile,
                sourceSheet,
                sourceRow: rowNum,
                sourceRef: cardSourceRef,
                createdAt: ts,
                updatedAt: ts
            });
        });
    }
    const state = emptyImportState(bpId, ts, serviceName);
    state.stages = Array.from(stageMap.values()).sort((a, b)=>a.order - b.order);
    state.steps = Array.from(stepMap.values());
    state.cards = cards;
    applyLaneSetFromCards(state);
    return {
        state,
        errors,
        warnings,
        srcRefCounters: srcCounters
    };
}
function normalizeSwimlaneMatrix(headers, rows, sourceFile, sourceSheet) {
    const errors = [];
    const warnings = [];
    const bpId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const ts = new Date().toISOString();
    const srcType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectSourceType"])(sourceFile);
    let srcCounters = {};
    let traceCounters = {};
    // ---------------------------------------------------------------------------
    // Derive column keys
    // ---------------------------------------------------------------------------
    const normalizeKey = (h)=>h.toLowerCase().trim().replace(/\s+/g, '_');
    const laneColKey = normalizeKey(headers[0]); // "swimlane"
    const stepColKeys = headers.slice(1).map(normalizeKey); // ["step_1", "step_2", ...]
    if (stepColKeys.length === 0) {
        errors.push({
            row: 0,
            field: 'headers',
            message: 'Swimlane matrix has no step columns'
        });
        return {
            state: emptyImportState(bpId, ts, ''),
            errors,
            warnings
        };
    }
    // ---------------------------------------------------------------------------
    // Scan rows into metadata buckets and lane rows
    // ---------------------------------------------------------------------------
    let serviceNameRow;
    let stageRow;
    let stageOutcomeRow;
    let stepRow;
    let primaryActorRow;
    let phaseRow;
    let nextStepRow;
    let nextStepRowIndex = 0;
    const laneRows = [];
    const isL1MacroContext = rows.some((row)=>{
        const label = (row[laneColKey] ?? '').trim().toLowerCase().replace(/\s+/g, '_');
        return isL1MacroSwimlaneLabel(label);
    });
    for(let i = 0; i < rows.length; i++){
        const row = rows[i];
        const cellVal = (row[laneColKey] ?? '').trim().toLowerCase().replace(/\s+/g, '_');
        if (cellVal === 'service_name') {
            serviceNameRow = row;
            continue;
        }
        if (cellVal === 'phase') {
            phaseRow = row;
            continue;
        }
        if (cellVal === 'stage') {
            stageRow = row;
            continue;
        }
        if (cellVal === 'stage_outcome') {
            stageOutcomeRow = row;
            continue;
        }
        if (cellVal === 'step') {
            stepRow = row;
            continue;
        }
        if (cellVal === 'primary_actor' || cellVal === 'primary_actors') primaryActorRow = row;
        if (cellVal === 'next_step') {
            nextStepRow = row;
            nextStepRowIndex = i + 2;
            continue;
        }
        if (!cellVal) continue;
        const resolvedLane = resolveSwimlaneLaneKey(cellVal, sourceSheet, isL1MacroContext);
        const laneError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateLaneKey"])(resolvedLane, i + 2);
        if (laneError) {
            warnings.push({
                row: i + 2,
                field: 'lane',
                message: `Unknown swimlane label "${row[laneColKey]}", row skipped`
            });
            continue;
        }
        laneRows.push({
            laneKey: resolvedLane,
            sourceTags: getSwimlaneSourceTags(cellVal),
            row,
            rowIndex: i + 2
        });
    }
    // ---------------------------------------------------------------------------
    // Extract service name
    // ---------------------------------------------------------------------------
    let serviceName = 'Enter title';
    if (serviceNameRow) {
        for (const colKey of stepColKeys){
            const val = (serviceNameRow[colKey] ?? '').trim();
            if (val) {
                serviceName = val;
                break;
            }
        }
    }
    // ---------------------------------------------------------------------------
    // Build stage/step structure (one step per column, stages deduplicated by name)
    // ---------------------------------------------------------------------------
    const stageMap = new Map();
    const stepMap = new Map(); // "stageName::stepTitle" → Step
    const colIndexToStep = new Map(); // stepColKey → Step
    const preservedStepIds = new Set();
    let lastStageName = 'Stage 1';
    let lastPhaseName = '';
    for (const [colIdx, colKey] of stepColKeys.entries()){
        const originalHeader = headers[colIdx + 1]; // e.g. "Step 1"
        const stageCell = (stageRow?.[colKey] ?? '').trim();
        const stageName = stageCell || lastStageName;
        if (stageCell) lastStageName = stageCell;
        const phaseCell = (phaseRow?.[colKey] ?? '').trim();
        const phaseName = phaseCell || lastPhaseName;
        if (phaseCell) lastPhaseName = phaseCell;
        const phaseVal = phaseName || undefined;
        const stageOutcomeCell = (stageOutcomeRow?.[colKey] ?? '').trim();
        const nextStepCell = (nextStepRow?.[colKey] ?? '').trim();
        let stage = stageMap.get(stageName);
        if (!stage) {
            stage = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                blueprintId: bpId,
                title: stageName,
                outcome: stageOutcomeCell,
                order: stageMap.size,
                phase: phaseVal
            };
            stageMap.set(stageName, stage);
        } else {
            if (!stage.outcome && stageOutcomeRow) {
                const outcomeVal = (stageOutcomeRow[colKey] ?? '').trim();
                if (outcomeVal) stage.outcome = outcomeVal;
            }
            if (!stage.phase && phaseVal) stage.phase = phaseVal;
        }
        const rawStepTitle = (stepRow?.[colKey] ?? '').trim();
        const stepTitle = rawStepTitle || (originalHeader.startsWith('_col_') ? stageName : originalHeader);
        const stepKey = `${stageName}::${stepTitle}`;
        let step = stepMap.get(stepKey);
        if (!step) {
            const stepsInStage = Array.from(stepMap.values()).filter((s)=>s.stageId === stage.id);
            step = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                blueprintId: bpId,
                stageId: stage.id,
                title: stepTitle,
                order: stepsInStage.length
            };
            stepMap.set(stepKey, step);
        }
        colIndexToStep.set(colKey, step);
        // Preserve columns that are structurally meaningful even when no cards land in them.
        // This keeps explicitly-authored lifecycle stages and phases visible in the board.
        if (stageCell || phaseCell || stageOutcomeCell || rawStepTitle || nextStepCell) {
            preservedStepIds.add(step.id);
        }
    }
    // ---------------------------------------------------------------------------
    // Create cards from lane rows × step columns
    // ---------------------------------------------------------------------------
    const cards = [];
    // Track assigned traceability codes → card title for duplicate detection.
    // code → first title seen with that code
    const seenCodes = new Map();
    for (const { laneKey, sourceTags, row, rowIndex } of laneRows){
        for (const colKey of stepColKeys){
            const cellValue = (row[colKey] ?? '').trim();
            const step = colIndexToStep.get(colKey);
            if (!step) continue;
            const stage = Array.from(stageMap.values()).find((s)=>s.id === step.stageId);
            if (!stage) continue;
            const items = splitCellItems(cellValue);
            if (items.length === 0) continue;
            const normalizedItems = laneKey === 'performance_indicators' ? items.flatMap((item)=>splitEmbeddedTypedLaneItems(item)) : items;
            normalizedItems.forEach((rawItem, idx)=>{
                // Some L1 macro lanes may carry both a type label and a traceability code.
                const parsedItem = laneKey === 'performance_indicators' || laneKey === 'opportunities_lane' ? parseTypedTraceableLaneItem(rawItem) : {
                    ...parseInlineId(rawItem),
                    tags: []
                };
                const { traceabilityCode: inlineCode, text: itemTitle, tags: parsedTags } = parsedItem;
                const primaryActor = (primaryActorRow?.[colKey] ?? '').trim();
                const resolvedTitle = laneKey === 'user_need' ? qualifyUserNeedWithActor(itemTitle, primaryActor) : capitalizeSentenceStart(itemTitle);
                const { ref, updatedCounters: sc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSourceRef"])(srcType, srcCounters);
                srcCounters = sc;
                let cardTraceCode;
                if (inlineCode) {
                    const previous = seenCodes.get(inlineCode);
                    if (previous !== undefined) {
                        if (previous !== itemTitle) {
                            // Same code, different text → error (conflicting IDs)
                            errors.push({
                                row: rowIndex,
                                field: 'traceability_code',
                                message: `Duplicate ID "${inlineCode}" with conflicting text: previously "${previous}", now "${itemTitle}"`
                            });
                        } else {
                            // Same code, same text → warn (exact duplicate)
                            warnings.push({
                                row: rowIndex,
                                field: 'traceability_code',
                                message: `Duplicate ID "${inlineCode}" ("${itemTitle}") — card imported once`
                            });
                            return; // skip exact duplicates
                        }
                    }
                    seenCodes.set(inlineCode, itemTitle);
                    cardTraceCode = inlineCode;
                } else {
                    const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLanePrefix"])(laneKey);
                    const { code, updatedCounters: tc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])(prefix, traceCounters);
                    traceCounters = tc;
                    cardTraceCode = code;
                    seenCodes.set(cardTraceCode, itemTitle);
                }
                cards.push({
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                    blueprintId: bpId,
                    stageId: stage.id,
                    stepId: step.id,
                    laneKey,
                    title: capitalizeSentenceStart(resolvedTitle),
                    body: '',
                    order: idx,
                    tags: Array.from(new Set([
                        ...sourceTags,
                        ...parsedTags
                    ])),
                    sourceFile,
                    sourceSheet,
                    sourceRow: rowIndex,
                    sourceRef: ref,
                    traceabilityCode: cardTraceCode,
                    createdAt: ts,
                    updatedAt: ts
                });
            });
        }
    }
    // ---------------------------------------------------------------------------
    // Remove empty step columns (template columns with no card content)
    // ---------------------------------------------------------------------------
    const stepsWithCards = new Set(cards.map((c)=>c.stepId));
    for (const [key, step] of stepMap){
        if (!stepsWithCards.has(step.id) && !preservedStepIds.has(step.id)) {
            stepMap.delete(key);
            for (const [ck, s] of colIndexToStep){
                if (s.id === step.id) colIndexToStep.delete(ck);
            }
        }
    }
    // Assign ST codes to stages
    for (const stage of stageMap.values()){
        const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('ST', traceCounters);
        stage.traceabilityCode = code;
        traceCounters = updatedCounters;
    }
    // Assign SS codes to steps (only those that survived pruning)
    for (const step of stepMap.values()){
        const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('SS', traceCounters);
        step.traceabilityCode = code;
        traceCounters = updatedCounters;
    }
    // ---------------------------------------------------------------------------
    // Build StepLink records from next_step row
    // ---------------------------------------------------------------------------
    const stepLinks = [];
    if (nextStepRow) {
        for (const colKey of stepColKeys){
            const nextStepValue = (nextStepRow[colKey] ?? '').trim();
            if (!nextStepValue) continue;
            const sourceStep = colIndexToStep.get(colKey);
            if (!sourceStep) continue;
            const sourceStageName = Array.from(stageMap.entries()).find(([, s])=>s.id === sourceStep.stageId)?.[0] ?? '';
            const targetStep = resolveNextStep(nextStepValue, sourceStageName, stepMap, warnings, nextStepRowIndex);
            if (!targetStep) continue;
            const alreadyLinked = stepLinks.some((l)=>l.sourceStepId === sourceStep.id && l.targetStepId === targetStep.id);
            if (alreadyLinked) continue;
            const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('NS', traceCounters);
            traceCounters = updatedCounters;
            stepLinks.push({
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                blueprintId: bpId,
                sourceStepId: sourceStep.id,
                targetStepId: targetStep.id,
                traceabilityCode: code,
                createdAt: ts
            });
        }
    }
    // ---------------------------------------------------------------------------
    // Assemble result
    // ---------------------------------------------------------------------------
    const stages = Array.from(stageMap.values()).sort((a, b)=>a.order - b.order);
    const steps = Array.from(stepMap.values());
    const semanticKeys = new Set(Object.keys(traceCounters).filter((k)=>!k.startsWith('SRC_')));
    const finalTraceCounters = {};
    for (const k of semanticKeys)finalTraceCounters[k] = traceCounters[k];
    const finalSrcCounters = {};
    for (const [k, v] of Object.entries(srcCounters)){
        if (k.startsWith('SRC_')) finalSrcCounters[k] = v;
    }
    const state = emptyImportState(bpId, ts, serviceName);
    state.stages = stages;
    state.steps = steps;
    state.cards = cards;
    state.stepLinks = stepLinks;
    state.traceabilityCounters = finalTraceCounters;
    applyLaneSetFromCards(state);
    return {
        state,
        errors,
        warnings,
        srcRefCounters: finalSrcCounters,
        traceabilityCounters: finalTraceCounters
    };
}
const MULTI_TAB_SHEET_NAMES = [
    'service',
    'stages',
    'actors',
    'business rules',
    'blueprint'
];
function detectMultiTabWorkbook(sheetNames) {
    const norm = sheetNames.map((n)=>n.toLowerCase().trim());
    if (!norm.includes('stages')) return false;
    return MULTI_TAB_SHEET_NAMES.filter((t)=>norm.includes(t)).length >= 2;
}
/**
 * Converts an XLSX worksheet to an array of row objects.
 * Header row keys are lower-cased and spaces replaced with underscores.
 * Kept private — used only by normalizeMultiTabBlueprint to avoid circular
 * deps with parse.ts which has its own copy.
 */ function multiTabSheetRows(ws) {
    const raw = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(ws, {
        header: 1,
        defval: ''
    });
    if (raw.length < 2) return [];
    const headers = raw[0].map((h)=>String(h).trim().toLowerCase().replace(/\s+/g, '_'));
    return raw.slice(1).map((row)=>{
        const obj = {};
        headers.forEach((h, i)=>{
            obj[h] = String(row[i] ?? '').trim();
        });
        return obj;
    });
}
/** Finds a sheet by trying candidate names case-insensitively. */ function findSheet(wb, candidates) {
    for (const candidate of candidates){
        const match = wb.SheetNames.find((n)=>n.toLowerCase().trim() === candidate.toLowerCase());
        if (match) return wb.Sheets[match];
    }
    return null;
}
function normalizeMultiTabBlueprint(workbook, sourceFile) {
    const bpId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const ts = new Date().toISOString();
    const errors = [];
    const warnings = [];
    let traceCounters = {};
    let srcCounters = {};
    // ── Service tab ────────────────────────────────────────────────────────────
    let serviceName = 'Enter title';
    let description = '';
    const serviceSheet = findSheet(workbook, [
        'service'
    ]);
    if (serviceSheet) {
        const rows = multiTabSheetRows(serviceSheet).filter((r)=>Object.values(r).some(Boolean));
        if (rows[0]) {
            serviceName = rows[0]['service_name'] || serviceName;
            description = rows[0]['description'] || '';
        }
    } else {
        warnings.push({
            row: 0,
            field: 'sheet',
            message: 'Service tab not found — using default service name'
        });
    }
    // ── Stages tab ─────────────────────────────────────────────────────────────
    const stagesSheet = findSheet(workbook, [
        'stages'
    ]);
    if (!stagesSheet) {
        errors.push({
            row: 0,
            field: 'sheet',
            message: 'Stages tab not found — cannot resolve stage names'
        });
        const state = emptyImportState(bpId, ts, serviceName);
        state.blueprint.description = description;
        return {
            state,
            errors,
            warnings
        };
    }
    const stageById = new Map(); // "STG-01" → Stage (for Blueprint tab headers)
    const stageByName = new Map(); // lowercase name → Stage (for Business Rules tab)
    const stages = [];
    const stageRows = multiTabSheetRows(stagesSheet).filter((r)=>r['stage_id'] || r['stage_name']);
    const sortedStageRows = [
        ...stageRows
    ].sort((a, b)=>{
        const na = parseInt(a['stage_number'] || '0', 10) || 0;
        const nb = parseInt(b['stage_number'] || '0', 10) || 0;
        return na - nb;
    });
    sortedStageRows.forEach((row, i)=>{
        const stageId = row['stage_id']?.toUpperCase().trim();
        const stageName = row['stage_name']?.trim() || stageId || `Stage ${i + 1}`;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (stageById.has(stageId)) {
            warnings.push({
                row: i + 2,
                field: 'stage_id',
                message: `Duplicate stage_id "${stageId}" — first occurrence used`
            });
            return;
        }
        const { code: stCode, updatedCounters: tc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('ST', traceCounters);
        traceCounters = tc;
        const stage = {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            title: stageName,
            outcome: row['stage_outcome']?.trim() || '',
            order: i,
            traceabilityCode: stCode
        };
        stages.push(stage);
        if (stageId) stageById.set(stageId, stage);
        stageByName.set(stageName.toLowerCase(), stage);
    });
    // ── Default Steps (one per Stage) ─────────────────────────────────────────
    const steps = [];
    const stepByStageId = new Map(); // stageId → default Step
    for (const stage of stages){
        const { code: ssCode, updatedCounters: tc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('SS', traceCounters);
        traceCounters = tc;
        const step = {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            stageId: stage.id,
            title: stage.title,
            order: 0,
            traceabilityCode: ssCode
        };
        steps.push(step);
        stepByStageId.set(stage.id, step);
    }
    // ── Actors tab ─────────────────────────────────────────────────────────────
    const actorCards = [];
    const actorsSheet = findSheet(workbook, [
        'actors'
    ]);
    if (actorsSheet && stages.length > 0) {
        const firstStage = stages[0];
        const firstStep = stepByStageId.get(firstStage.id);
        const actorRows = multiTabSheetRows(actorsSheet).filter((r)=>r['actor_name']);
        warnings.push({
            row: 0,
            field: 'actors',
            message: `Actor cards placed in stage 1 ("${firstStage.title}"). Drag to other stages as needed.`
        });
        actorRows.forEach((row, i)=>{
            const bodyParts = [
                row['description']?.trim(),
                row['goals']?.trim() ? `Goals: ${row['goals'].trim()}` : ''
            ].filter(Boolean);
            const tags = row['actor_type']?.trim() ? [
                row['actor_type'].trim()
            ] : [];
            const { ref, updatedCounters: sc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSourceRef"])('xlsx', srcCounters);
            srcCounters = sc;
            const { code, updatedCounters: tc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLanePrefix"])('actor'), traceCounters);
            traceCounters = tc;
            actorCards.push({
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                blueprintId: bpId,
                stageId: firstStage.id,
                stepId: firstStep.id,
                laneKey: 'actor',
                title: row['actor_name']?.trim() || `Actor ${i + 1}`,
                body: bodyParts.join('\n\n'),
                order: i,
                tags,
                sourceFile,
                sourceSheet: 'Actors',
                sourceRow: i + 2,
                sourceRef: ref,
                traceabilityCode: code,
                createdAt: ts,
                updatedAt: ts
            });
        });
    } else if (!actorsSheet) {
        warnings.push({
            row: 0,
            field: 'sheet',
            message: 'Actors tab not found — actor cards skipped'
        });
    }
    // ── Blueprint tab ──────────────────────────────────────────────────────────
    const matrixCards = [];
    const blueprintSheet = findSheet(workbook, [
        'blueprint'
    ]);
    if (blueprintSheet) {
        const raw = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(blueprintSheet, {
            header: 1,
            defval: ''
        });
        if (raw.length >= 2) {
            const rawHeaders = raw[0].map((h)=>String(h).trim());
            // First col is the swimlane label column; remaining are stage ID references
            const stageColHeaders = rawHeaders.slice(1);
            const resolvedStageForCol = stageColHeaders.map((hdr)=>{
                const key = hdr.toUpperCase().trim();
                const stage = stageById.get(key) ?? null;
                if (!stage && hdr.trim()) {
                    warnings.push({
                        row: 1,
                        field: 'blueprint_header',
                        message: `Blueprint column "${hdr}" does not match any stage_id — column skipped`
                    });
                }
                return stage;
            });
            const STRUCTURAL_KEYS = new Set([
                'stage',
                'stage_outcome',
                'step',
                'service_name',
                'next_step',
                'phase'
            ]);
            const primaryActorMatrixRow = raw.slice(1).find((row)=>String(row[0] ?? '').trim().toLowerCase().replace(/\s+/g, '_') === 'primary_actor');
            const phaseMatrixRow = raw.slice(1).find((row)=>String(row[0] ?? '').trim().toLowerCase().replace(/\s+/g, '_') === 'phase');
            if (phaseMatrixRow) {
                stageColHeaders.forEach((_, colIdx)=>{
                    const stage = resolvedStageForCol[colIdx];
                    if (!stage) return;
                    const val = String(phaseMatrixRow[colIdx + 1] ?? '').trim();
                    if (val && !stage.phase) stage.phase = val;
                });
            }
            raw.slice(1).forEach((row, rowIdx)=>{
                const firstCell = String(row[0] ?? '').trim().toLowerCase().replace(/\s+/g, '_');
                if (!firstCell) return;
                if (STRUCTURAL_KEYS.has(firstCell)) return;
                // Resolve lane key
                const resolvedLaneKey = firstCell === 'opportunities' || firstCell === 'ideas' ? 'opportunities_lane' : resolveSwimlaneLaneKey(firstCell, 'Blueprint');
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateLaneKey"])(resolvedLaneKey, rowIdx + 2) !== null) return;
                const laneKey = resolvedLaneKey;
                const sourceTags = getSwimlaneSourceTags(firstCell);
                stageColHeaders.forEach((_, colIdx)=>{
                    const stage = resolvedStageForCol[colIdx];
                    if (!stage) return;
                    const step = stepByStageId.get(stage.id);
                    if (!step) return;
                    const cellValue = String(row[colIdx + 1] ?? '').trim();
                    if (!cellValue) return;
                    const items = splitCellItems(cellValue);
                    const normalizedItems = laneKey === 'performance_indicators' ? items.flatMap((item)=>splitEmbeddedTypedLaneItems(item)) : items;
                    normalizedItems.forEach((rawItem, itemIdx)=>{
                        const parsedItem = laneKey === 'performance_indicators' || laneKey === 'opportunities_lane' ? parseTypedTraceableLaneItem(rawItem) : {
                            ...parseInlineId(rawItem),
                            tags: []
                        };
                        const { traceabilityCode: inlineCode, text: itemTitle, tags: parsedTags } = parsedItem;
                        if (!itemTitle) return;
                        const primaryActor = String(primaryActorMatrixRow?.[colIdx + 1] ?? '').trim();
                        const resolvedTitle = laneKey === 'user_need' ? qualifyUserNeedWithActor(itemTitle, primaryActor) : capitalizeSentenceStart(itemTitle);
                        const { ref, updatedCounters: sc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSourceRef"])('xlsx', srcCounters);
                        srcCounters = sc;
                        let cardTraceCode;
                        if (inlineCode) {
                            cardTraceCode = inlineCode;
                        } else {
                            const { code, updatedCounters: tc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLanePrefix"])(laneKey), traceCounters);
                            traceCounters = tc;
                            cardTraceCode = code;
                        }
                        matrixCards.push({
                            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                            blueprintId: bpId,
                            stageId: stage.id,
                            stepId: step.id,
                            laneKey,
                            title: capitalizeSentenceStart(resolvedTitle),
                            body: '',
                            order: itemIdx,
                            tags: Array.from(new Set([
                                ...sourceTags,
                                ...parsedTags
                            ])),
                            sourceFile,
                            sourceSheet: 'Blueprint',
                            sourceRow: rowIdx + 2,
                            sourceRef: ref,
                            traceabilityCode: cardTraceCode,
                            createdAt: ts,
                            updatedAt: ts
                        });
                    });
                });
            });
        }
    } else {
        warnings.push({
            row: 0,
            field: 'sheet',
            message: 'Blueprint tab not found — swimlane cards skipped'
        });
    }
    // ── Business Rules tab ─────────────────────────────────────────────────────
    const bizRuleCards = [];
    const bizSheet = findSheet(workbook, [
        'business rules',
        'business_rules'
    ]);
    if (bizSheet) {
        const bizRows = multiTabSheetRows(bizSheet).filter((r)=>r['description']);
        bizRows.forEach((row, i)=>{
            const stageNameRaw = row['stage_name']?.trim() ?? '';
            const stage = stageByName.get(stageNameRaw.toLowerCase()) ?? null;
            if (!stage) {
                if (stageNameRaw) {
                    warnings.push({
                        row: i + 2,
                        field: 'stage_name',
                        message: `Business rule row ${i + 2}: stage_name "${stageNameRaw}" not found — row skipped`
                    });
                }
                return;
            }
            const step = stepByStageId.get(stage.id);
            if (!step) return;
            const desc = row['description'].trim();
            const title = desc.length > 80 ? desc.slice(0, desc.indexOf(' ', 70) + 1 || 80).trim() : desc;
            const tags = row['actor_id']?.trim() ? [
                row['actor_id'].trim()
            ] : [];
            const { ref, updatedCounters: sc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSourceRef"])('xlsx', srcCounters);
            srcCounters = sc;
            const { code, updatedCounters: tc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLanePrefix"])('business_rule'), traceCounters);
            traceCounters = tc;
            bizRuleCards.push({
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                blueprintId: bpId,
                stageId: stage.id,
                stepId: step.id,
                laneKey: 'business_rule',
                title,
                body: desc,
                order: i,
                tags,
                sourceFile,
                sourceSheet: 'Business Rules',
                sourceRow: i + 2,
                sourceRef: ref,
                traceabilityCode: code,
                createdAt: ts,
                updatedAt: ts
            });
        });
    } else {
        warnings.push({
            row: 0,
            field: 'sheet',
            message: 'Business Rules tab not found — business rule cards skipped'
        });
    }
    // ── Assemble ───────────────────────────────────────────────────────────────
    const state = emptyImportState(bpId, ts, serviceName);
    state.blueprint.description = description;
    state.stages = stages;
    state.steps = steps;
    state.cards = [
        ...actorCards,
        ...matrixCards,
        ...bizRuleCards
    ];
    state.traceabilityCounters = traceCounters;
    applyLaneSetFromCards(state);
    const finalSrcCounters = {};
    for (const [k, v] of Object.entries(srcCounters)){
        if (k.startsWith('SRC_')) finalSrcCounters[k] = v;
    }
    return {
        state,
        errors,
        warnings,
        srcRefCounters: finalSrcCounters,
        traceabilityCounters: traceCounters
    };
}
function detectFormat(headers, rows) {
    const normalized = headers.map((h)=>h.toLowerCase().trim().replace(/\s+/g, '_'));
    if (normalized.includes('record_type') && normalized.includes('lane_key')) {
        return 'template';
    }
    if (normalized.includes('swim_lane_label') && normalized.includes('stage_label')) {
        return 'mural';
    }
    // Swimlane matrix: at least one step-column header after the first cell …
    const hasStepHeaders = normalized.slice(1).some(Boolean);
    if (hasStepHeaders) {
        // … and the first column of data rows contains known lane/structural keys.
        const firstColKey = normalized[0];
        const firstColValues = (rows ?? []).map((r)=>(r[firstColKey] ?? '').toLowerCase().trim().replace(/\s+/g, '_'));
        const hasLaneRows = firstColValues.some((v)=>SWIMLANE_FIRST_COL_KEYS.has(v));
        // Also accept the legacy explicit label for backwards compatibility.
        const legacyLabel = firstColKey === 'swimlane';
        if (hasLaneRows || legacyLabel) {
            return 'swimlane';
        }
    }
    return 'unknown';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/parse.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseCsv",
    ()=>parseCsv,
    "parseXlsx",
    ()=>parseXlsx,
    "processMultiTabWorkbook",
    ()=>processMultiTabWorkbook,
    "processXlsxSheet",
    ()=>processXlsxSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/validate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$normalize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/normalize.ts [app-client] (ecmascript)");
;
;
;
;
function xlsxSheetToRows(ws) {
    const raw = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(ws, {
        header: 1,
        defval: ''
    });
    if (raw.length === 0) return {
        headers: [],
        rows: []
    };
    const seenKeys = new Set();
    const headers = raw[0].map((h, i)=>{
        const trimmed = String(h).trim();
        if (!trimmed) return `_col_${i}`;
        if (seenKeys.has(trimmed.toLowerCase().replace(/\s+/g, '_'))) return `${trimmed}_${i}`;
        seenKeys.add(trimmed.toLowerCase().replace(/\s+/g, '_'));
        return trimmed;
    });
    const rows = raw.slice(1).map((row)=>{
        const obj = {};
        headers.forEach((h, i)=>{
            obj[h.toLowerCase().trim().replace(/\s+/g, '_')] = row[i] !== undefined && row[i] !== null ? String(row[i]).trim() : '';
        });
        return obj;
    });
    return {
        headers,
        rows
    };
}
function parseXlsx(buffer, fileName) {
    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"](buffer, {
        type: 'array'
    });
    const sheets = wb.SheetNames.filter((name)=>{
        const ws = wb.Sheets[name];
        return ws['!ref'] !== undefined;
    }).map((name)=>{
        const ws = wb.Sheets[name];
        const range = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].decode_range(ws['!ref']);
        return {
            name,
            rowCount: range.e.r + 1
        };
    });
    return {
        sheets,
        workbook: wb
    };
}
function processXlsxSheet(workbook, sheetName, fileName) {
    const ws = workbook.Sheets[sheetName];
    if (!ws) {
        return {
            state: {
                blueprint: {
                    id: '',
                    serviceName: '',
                    description: '',
                    createdAt: '',
                    updatedAt: ''
                },
                stages: [],
                steps: [],
                lanes: [],
                childBlueprints: [],
                rootDocument: null,
                activeBlueprintId: '',
                rootBlueprintId: '',
                cards: [],
                storyboardImages: [],
                storyboardVisible: true,
                storyboardCollapsed: false,
                cardLinks: [],
                evidence: [],
                opportunities: [],
                solutions: [],
                assumptions: [],
                strategicGoals: [],
                outcomes: [],
                systemOutcomes: [],
                behaviourOutcomes: [],
                serviceOutcomes: [],
                stepLinks: [],
                requirements: [],
                apiContracts: [],
                uiScaffolds: [],
                traceabilityCounters: {}
            },
            errors: [
                {
                    row: 0,
                    field: 'sheet',
                    message: `Sheet "${sheetName}" not found`
                }
            ],
            warnings: []
        };
    }
    const { headers, rows } = xlsxSheetToRows(ws);
    if (headers.length === 0) {
        return {
            state: {
                blueprint: {
                    id: '',
                    serviceName: '',
                    description: '',
                    createdAt: '',
                    updatedAt: ''
                },
                stages: [],
                steps: [],
                lanes: [],
                childBlueprints: [],
                rootDocument: null,
                activeBlueprintId: '',
                rootBlueprintId: '',
                cards: [],
                storyboardImages: [],
                storyboardVisible: true,
                storyboardCollapsed: false,
                cardLinks: [],
                evidence: [],
                opportunities: [],
                solutions: [],
                assumptions: [],
                strategicGoals: [],
                outcomes: [],
                systemOutcomes: [],
                behaviourOutcomes: [],
                serviceOutcomes: [],
                stepLinks: [],
                requirements: [],
                apiContracts: [],
                uiScaffolds: [],
                traceabilityCounters: {}
            },
            errors: [
                {
                    row: 0,
                    field: 'headers',
                    message: 'No headers found in sheet'
                }
            ],
            warnings: []
        };
    }
    const format = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$normalize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectFormat"])(headers, rows);
    if (format === 'mural') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$normalize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeMuralExport"])(rows, fileName, sheetName);
    }
    if (format === 'swimlane') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$normalize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeSwimlaneMatrix"])(headers, rows, fileName, sheetName);
    }
    if (format === 'template') {
        const normalizedHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeHeaders"])(headers);
        const headerErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateHeaders"])(normalizedHeaders);
        if (headerErrors.length > 0) {
            return {
                state: {
                    blueprint: {
                        id: '',
                        serviceName: '',
                        description: '',
                        createdAt: '',
                        updatedAt: ''
                    },
                    stages: [],
                    steps: [],
                    lanes: [],
                    childBlueprints: [],
                    rootDocument: null,
                    activeBlueprintId: '',
                    rootBlueprintId: '',
                    cards: [],
                    storyboardImages: [],
                    storyboardVisible: true,
                    storyboardCollapsed: false,
                    cardLinks: [],
                    evidence: [],
                    opportunities: [],
                    solutions: [],
                    assumptions: [],
                    strategicGoals: [],
                    outcomes: [],
                    systemOutcomes: [],
                    behaviourOutcomes: [],
                    serviceOutcomes: [],
                    stepLinks: [],
                    requirements: [],
                    apiContracts: [],
                    uiScaffolds: [],
                    traceabilityCounters: {}
                },
                errors: headerErrors,
                warnings: []
            };
        }
        // Re-map rows to normalized headers
        const normalizedRows = rows.map((row)=>{
            const mapped = {};
            headers.forEach((h, i)=>{
                const nk = normalizedHeaders[i];
                const origKey = h.toLowerCase().trim().replace(/\s+/g, '_');
                mapped[nk] = row[origKey] || '';
            });
            return mapped;
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$normalize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeImportRows"])(normalizedRows, fileName, sheetName);
    }
    return {
        state: {
            blueprint: {
                id: '',
                serviceName: '',
                description: '',
                createdAt: '',
                updatedAt: ''
            },
            stages: [],
            steps: [],
            lanes: [],
            childBlueprints: [],
            rootDocument: null,
            activeBlueprintId: '',
            rootBlueprintId: '',
            cards: [],
            storyboardImages: [],
            storyboardVisible: true,
            storyboardCollapsed: false,
            cardLinks: [],
            evidence: [],
            opportunities: [],
            solutions: [],
            assumptions: [],
            strategicGoals: [],
            outcomes: [],
            systemOutcomes: [],
            behaviourOutcomes: [],
            serviceOutcomes: [],
            stepLinks: [],
            requirements: [],
            apiContracts: [],
            uiScaffolds: [],
            traceabilityCounters: {}
        },
        errors: [
            {
                row: 0,
                field: 'format',
                message: 'Unrecognized spreadsheet format. Expected template (record_type, lane_key) or Mural export (Swim Lane Label, Stage Label) columns.'
            }
        ],
        warnings: []
    };
}
function parseCsv(text, fileName) {
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(text, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (h)=>h.toLowerCase().trim().replace(/\s+/g, '_')
    });
    if (result.errors.length > 0) {
        return {
            state: {
                blueprint: {
                    id: '',
                    serviceName: '',
                    description: '',
                    createdAt: '',
                    updatedAt: ''
                },
                stages: [],
                steps: [],
                lanes: [],
                childBlueprints: [],
                rootDocument: null,
                activeBlueprintId: '',
                rootBlueprintId: '',
                cards: [],
                storyboardImages: [],
                storyboardVisible: true,
                storyboardCollapsed: false,
                cardLinks: [],
                evidence: [],
                opportunities: [],
                solutions: [],
                assumptions: [],
                strategicGoals: [],
                outcomes: [],
                systemOutcomes: [],
                behaviourOutcomes: [],
                serviceOutcomes: [],
                stepLinks: [],
                requirements: [],
                apiContracts: [],
                uiScaffolds: [],
                traceabilityCounters: {}
            },
            errors: result.errors.map((e, i)=>({
                    row: e.row ?? i,
                    field: 'csv',
                    message: e.message
                })),
            warnings: []
        };
    }
    const headers = result.meta.fields || [];
    const format = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$normalize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectFormat"])(headers, result.data);
    if (format === 'mural') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$normalize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeMuralExport"])(result.data, fileName, 'CSV');
    }
    if (format === 'swimlane') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$normalize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeSwimlaneMatrix"])(headers, result.data, fileName, 'CSV');
    }
    const headerErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateHeaders"])(headers);
    if (headerErrors.length > 0) {
        return {
            state: {
                blueprint: {
                    id: '',
                    serviceName: '',
                    description: '',
                    createdAt: '',
                    updatedAt: ''
                },
                stages: [],
                steps: [],
                lanes: [],
                childBlueprints: [],
                rootDocument: null,
                activeBlueprintId: '',
                rootBlueprintId: '',
                cards: [],
                storyboardImages: [],
                storyboardVisible: true,
                storyboardCollapsed: false,
                cardLinks: [],
                evidence: [],
                opportunities: [],
                solutions: [],
                assumptions: [],
                strategicGoals: [],
                outcomes: [],
                systemOutcomes: [],
                behaviourOutcomes: [],
                serviceOutcomes: [],
                stepLinks: [],
                requirements: [],
                apiContracts: [],
                uiScaffolds: [],
                traceabilityCounters: {}
            },
            errors: headerErrors,
            warnings: []
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$normalize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeImportRows"])(result.data, fileName, 'CSV');
}
function processMultiTabWorkbook(workbook, fileName) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$normalize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeMultiTabBlueprint"])(workbook, fileName);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/extract.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractFromCsv",
    ()=>extractFromCsv,
    "extractFromPastedText",
    ()=>extractFromPastedText,
    "extractFromXlsx",
    ()=>extractFromXlsx
]);
/**
 * extract.ts
 *
 * Low-level extraction layer: parse raw source files/text into a normalised
 * intermediate format (ExtractedRow[]) that preserves full provenance before
 * any AI mapping or schema normalisation happens.
 *
 * Supported sources:
 *   - CSV (via Papa Parse)
 *   - XLSX / XLS (via SheetJS workbook already parsed by parseXlsx)
 *   - Pasted tabular text (tab- or comma-delimited)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/types.ts [app-client] (ecmascript)");
;
;
;
function extractFromCsv(text, fileName) {
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(text, {
        header: true,
        skipEmptyLines: true
    });
    const headers = result.meta.fields ?? [];
    const errors = result.errors.map((e)=>e.message);
    const rows = result.data.map((row, i)=>({
            sourceType: 'csv',
            sourceFileName: fileName,
            sourceSheetOrPage: 'CSV',
            sourceRowNumber: i + 2,
            extractedHeaders: headers,
            extractedCells: Object.fromEntries(Object.entries(row).map(([k, v])=>[
                    k,
                    String(v ?? '').trim()
                ])),
            rawText: headers.map((h)=>String(row[h] ?? '')).join('\t')
        }));
    return {
        rows,
        headers,
        errors,
        warnings: []
    };
}
// ---------------------------------------------------------------------------
// XLSX (uses a workbook already parsed by parseXlsx in parse.ts)
// ---------------------------------------------------------------------------
const SWIMLANE_LANE_ALIASES = {
    user_action: 'user_action_event',
    actors: 'actor',
    primary_actor: 'actor',
    primary_actors: 'actor',
    secondary_actor: 'actor',
    secondary_actors: 'actor',
    user_needs: 'user_need',
    // Plural → singular so frontstage content lands in its own lane (not merged into user_action_event)
    frontstage_touchpoints: 'frontstage_touchpoint',
    business_rule_refs: 'business_rule',
    business_rules: 'business_rule',
    data_in: 'data_input',
    data_out: 'data_output',
    backstage_actors: 'backstage_actor',
    desired_behaviour_change: 'behaviour_change',
    desired_behaviour: 'behaviour_change',
    what_good_looks_like: 'behaviour_change',
    target_behaviour: 'behaviour_change',
    activities: 'activity',
    user_activity: 'activity',
    user_activities: 'activity',
    user_task: 'activity',
    user_tasks: 'activity',
    tasks: 'activity',
    // L3 displays the system lane as "Shared capabilities"
    shared_capabilities: 'system',
    // L1 Macro aliases
    pain_points: 'pain_point'
};
function normalizeKey(h) {
    return h.toLowerCase().trim().replace(/\s+/g, '_');
}
function isL1LikeSheetName(sourceSheet) {
    return /^(lifecycle|blueprint|l1|l1_macro|l1-macro)$/i.test(sourceSheet?.trim() ?? '');
}
function isExplicitL1SheetName(sourceSheet) {
    return /^(lifecycle|l1|l1_macro|l1-macro)$/i.test(sourceSheet?.trim() ?? '');
}
function isL1MacroSwimlaneLabel(label) {
    return [
        'phase',
        'policy_reform',
        'policy_outcome',
        'user_outcome',
        'operational_outcome',
        'insights',
        'impact_of_pain_points',
        'performance_indicators',
        'opportunities_lane'
    ].includes(label);
}
function resolveSwimlaneLaneKey(label, sourceSheet, isL1MacroContext = false) {
    if ((isL1LikeSheetName(sourceSheet) || isL1MacroContext) && (label === 'success_measure' || label === 'success_measures')) {
        return 'performance_indicators';
    }
    if ((isExplicitL1SheetName(sourceSheet) || isL1MacroContext) && (label === 'ideas' || label === 'opportunities' || label === 'opportunities_lane')) {
        return 'opportunities_lane';
    }
    return SWIMLANE_LANE_ALIASES[label] ?? label;
}
function splitCellItems(cell) {
    if (!cell.trim()) return [];
    return cell.split(/\r?\n/).flatMap((line)=>line.split(';')).map((segment)=>segment.replace(/^[-\u2022*\s]+/, '').trim()).filter(Boolean);
}
function getSwimlaneSourceTags(label) {
    switch(label){
        case 'primary_actor':
        case 'primary_actors':
            return [
                'primary'
            ];
        case 'secondary_actors':
            return [
                'secondary'
            ];
        default:
            return [];
    }
}
function getIndefiniteArticle(label) {
    return /^[aeiou]/i.test(label.trim()) ? 'an' : 'a';
}
function capitalizeSentenceStart(text) {
    const trimmed = text.trim();
    if (!trimmed) return trimmed;
    const firstLetterIndex = trimmed.search(/[A-Za-z]/);
    if (firstLetterIndex === -1) return trimmed;
    return `${trimmed.slice(0, firstLetterIndex)}${trimmed[firstLetterIndex].toUpperCase()}${trimmed.slice(firstLetterIndex + 1)}`;
}
function qualifyUserNeedWithActor(text, actorLabel) {
    const trimmedText = text.trim();
    const trimmedActor = actorLabel.trim();
    if (!trimmedText || !trimmedActor) return trimmedText;
    if (/^as\s+(a|an|the)\b/i.test(trimmedText)) return trimmedText;
    const article = getIndefiniteArticle(trimmedActor);
    return capitalizeSentenceStart(`As ${article} ${trimmedActor}, ${trimmedText.charAt(0).toLowerCase()}${trimmedText.slice(1)}`);
}
/**
 * Handles the swimlane matrix format where rows = lanes and columns = steps.
 * Pivots the matrix into flat ExtractedRows with explicit stage/step/lane_key/card_title
 * so the mapping service can resolve them correctly.
 */ function extractFromSwimlaneMatrix(ws, sheetName, fileName) {
    const raw = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(ws, {
        header: 1,
        defval: ''
    });
    if (raw.length === 0) {
        return {
            rows: [],
            headers: [],
            errors: [
                'Sheet is empty'
            ],
            warnings: []
        };
    }
    // Deduplicate empty/repeated headers so every column gets a unique key.
    // Without this, spreadsheets whose header row has blank cells (like the
    // swimlane matrix where only the first cell says "swimlane") collapse
    // all empty-header columns into a single key and only the last column
    // value survives.
    const seenKeys = new Set();
    const headers = raw[0].map((h, i)=>{
        const trimmed = String(h).trim();
        if (!trimmed) return `_col_${i}`;
        const norm = trimmed.toLowerCase().replace(/\s+/g, '_');
        if (seenKeys.has(norm)) return `${trimmed}_${i}`;
        seenKeys.add(norm);
        return trimmed;
    });
    const laneColKey = normalizeKey(headers[0]);
    const stepColKeys = headers.slice(1).map(normalizeKey);
    // Parse all data rows into keyed objects
    const allRows = raw.slice(1).map((row)=>{
        const obj = {};
        headers.forEach((h, i)=>{
            obj[normalizeKey(h)] = row[i] !== undefined ? String(row[i]).trim() : '';
        });
        return obj;
    });
    // Scan for metadata rows and lane rows
    let stageRow;
    let stepRow;
    let phaseRow;
    let descriptionRow;
    let primaryActorRow;
    const laneRows = [];
    const isL1MacroContext = allRows.some((row)=>{
        const label = normalizeKey(row[laneColKey] ?? '');
        return isL1MacroSwimlaneLabel(label);
    });
    for(let i = 0; i < allRows.length; i++){
        const row = allRows[i];
        const cellVal = normalizeKey(row[laneColKey] ?? '');
        if (cellVal === 'stage') {
            stageRow = row;
            continue;
        }
        if (cellVal === 'step') {
            stepRow = row;
            continue;
        }
        if (cellVal === 'phase') {
            phaseRow = row;
            continue;
        }
        if (cellVal === 'description') {
            descriptionRow = row;
            continue;
        }
        if (cellVal === 'primary_actor' || cellVal === 'primary_actors') primaryActorRow = row;
        // Skip other metadata rows
        if ([
            'service_name',
            'stage_outcome',
            'next_step'
        ].includes(cellVal)) continue;
        if (!cellVal) continue;
        const resolvedLane = resolveSwimlaneLaneKey(cellVal, sheetName, isL1MacroContext);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANE_KEYS"].includes(resolvedLane)) {
            laneRows.push({
                laneKey: resolvedLane,
                sourceTags: getSwimlaneSourceTags(cellVal),
                row,
                rowIndex: i + 2
            });
        }
    }
    // L2/L3 fallback: if the sheet has a step row but no stage row, treat step
    // names as stage names too. This gives each column its own stage (matching
    // the L2/L3 "one column = one step" expectation) instead of collapsing all
    // columns into a single default "Stage 1".
    if (!stageRow && stepRow) {
        stageRow = stepRow;
    }
    // Build per-column stage/step/phase/description names with carry-forward for
    // merged cells.
    let lastStageName = 'Stage 1';
    let lastPhaseName = '';
    const colStage = {};
    const colStep = {};
    const colPhase = {};
    const colDescription = {};
    for(let colIdx = 0; colIdx < stepColKeys.length; colIdx++){
        const colKey = stepColKeys[colIdx];
        const originalHeader = headers[colIdx + 1];
        const stageCell = (stageRow?.[colKey] ?? '').trim();
        const stageName = stageCell || lastStageName;
        if (stageCell) lastStageName = stageCell;
        const phaseCell = (phaseRow?.[colKey] ?? '').trim();
        const phaseName = phaseCell || lastPhaseName;
        if (phaseCell) lastPhaseName = phaseCell;
        colStage[colKey] = stageName;
        colPhase[colKey] = phaseName;
        colDescription[colKey] = (descriptionRow?.[colKey] ?? '').trim();
        const rawStep = (stepRow?.[colKey] ?? '').trim();
        colStep[colKey] = rawStep || (originalHeader.startsWith('_col_') ? stageName : originalHeader);
    }
    // Pivot: for each lane row × step column, create one ExtractedRow per cell item.
    // We prepend one structure_row per column so stages get created in column order
    // (left-to-right) and carry phase info through to commit.ts.
    const rows = [];
    const flatHeaders = [
        'record_type',
        'stage',
        'step',
        'lane_key',
        'card_title',
        'tags',
        'phase',
        'description'
    ];
    // Emit structure rows first, one per column, in left-to-right order.
    // This seeds the stage list in spreadsheet column order regardless of which
    // lane row happens to have content in which column.
    for (const colKey of stepColKeys){
        const cells = {
            record_type: 'structure_row',
            stage: colStage[colKey],
            step: colStep[colKey],
            lane_key: '',
            card_title: '',
            tags: '',
            phase: colPhase[colKey],
            description: colDescription[colKey]
        };
        rows.push({
            sourceType: 'xlsx',
            sourceFileName: fileName,
            sourceSheetOrPage: sheetName,
            sourceRowNumber: 1,
            extractedHeaders: flatHeaders,
            extractedCells: cells,
            rawText: `${colStage[colKey]}\t${colStep[colKey]}\t${colPhase[colKey]}`
        });
    }
    for (const { laneKey, sourceTags, row, rowIndex } of laneRows){
        for (const colKey of stepColKeys){
            const cellValue = (row[colKey] ?? '').trim();
            if (!cellValue) continue;
            const items = splitCellItems(cellValue);
            for (const item of items){
                const primaryActor = (primaryActorRow?.[colKey] ?? '').trim();
                const resolvedTitle = laneKey === 'user_need' ? qualifyUserNeedWithActor(item, primaryActor) : capitalizeSentenceStart(item);
                const cells = {
                    record_type: 'card_row',
                    stage: colStage[colKey],
                    step: colStep[colKey],
                    lane_key: laneKey,
                    card_title: capitalizeSentenceStart(resolvedTitle),
                    tags: sourceTags.join('; '),
                    phase: colPhase[colKey],
                    description: colDescription[colKey]
                };
                rows.push({
                    sourceType: 'xlsx',
                    sourceFileName: fileName,
                    sourceSheetOrPage: sheetName,
                    sourceRowNumber: rowIndex,
                    extractedHeaders: flatHeaders,
                    extractedCells: cells,
                    rawText: `${colStage[colKey]}\t${colStep[colKey]}\t${laneKey}\t${item}`
                });
            }
        }
    }
    return {
        rows,
        headers: flatHeaders,
        errors: [],
        warnings: []
    };
}
function extractFromXlsx(workbook, sheetName, fileName) {
    const ws = workbook.Sheets[sheetName];
    if (!ws) {
        return {
            rows: [],
            headers: [],
            errors: [
                `Sheet "${sheetName}" not found`
            ],
            warnings: []
        };
    }
    const raw = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(ws, {
        header: 1,
        defval: ''
    });
    if (raw.length === 0) {
        return {
            rows: [],
            headers: [],
            errors: [
                'Sheet is empty'
            ],
            warnings: []
        };
    }
    // Detect swimlane matrix format (first header cell = "Swimlane")
    const firstHeader = normalizeKey(String(raw[0]?.[0] ?? ''));
    if (firstHeader === 'swimlane') {
        return extractFromSwimlaneMatrix(ws, sheetName, fileName);
    }
    const headers = raw[0].map((h)=>String(h).trim());
    const rows = raw.slice(1).map((row, i)=>{
        const cells = {};
        headers.forEach((h, j)=>{
            cells[h] = row[j] !== undefined ? String(row[j]).trim() : '';
        });
        return {
            sourceType: 'xlsx',
            sourceFileName: fileName,
            sourceSheetOrPage: sheetName,
            sourceRowNumber: i + 2,
            extractedHeaders: headers,
            extractedCells: cells,
            rawText: headers.map((h)=>cells[h] ?? '').join('\t')
        };
    }).filter((r)=>Object.values(r.extractedCells).some((v)=>v !== ''));
    return {
        rows,
        headers,
        errors: [],
        warnings: []
    };
}
function extractFromPastedText(text) {
    const lines = text.split('\n').map((l)=>l.trim()).filter(Boolean);
    if (lines.length === 0) {
        return {
            rows: [],
            headers: [],
            errors: [
                'No content found in pasted text'
            ],
            warnings: []
        };
    }
    // Detect delimiter: prefer tab, fallback to comma
    const firstLine = lines[0];
    const delimiter = firstLine.includes('\t') ? '\t' : ',';
    const allRows = lines.map((l)=>l.split(delimiter).map((c)=>c.trim()));
    const maxCols = Math.max(...allRows.map((r)=>r.length));
    // Use first row as headers if it looks like header labels (non-numeric)
    const firstRow = allRows[0];
    const looksLikeHeader = firstRow.length > 1 && firstRow.every((cell)=>isNaN(Number(cell)) || cell === '');
    let headers;
    let dataRows;
    if (looksLikeHeader && allRows.length > 1) {
        headers = firstRow;
        dataRows = allRows.slice(1);
    } else {
        headers = Array.from({
            length: maxCols
        }, (_, i)=>`column_${i + 1}`);
        dataRows = allRows;
    }
    const rows = dataRows.map((row, i)=>{
        const cells = {};
        headers.forEach((h, j)=>{
            cells[h] = row[j] ?? '';
        });
        return {
            sourceType: 'pasted_text',
            sourceFileName: 'pasted',
            sourceSheetOrPage: 'Pasted text',
            sourceRowNumber: i + (looksLikeHeader ? 2 : 1),
            extractedHeaders: headers,
            extractedCells: cells,
            rawText: row.join('\t')
        };
    });
    return {
        rows,
        headers,
        errors: [],
        warnings: []
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/extract-pdf.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * extract-pdf.ts
 *
 * Extracts tabular content from PDFs (e.g. Confluence-exported service maps)
 * into ExtractedRow[] for the AI mapping pipeline.
 *
 * For Confluence-style tables the column headers encode the blueprint schema
 * directly ("Step" → stage, "Sub step" → step, "Pain point" → pain_point lane,
 * etc.), so we classify each column up-front and emit one ExtractedRow per
 * item per lane column — fully pre-filled with stage, step, lane_key and
 * card_title — so the mapping service can commit with high confidence and no
 * manual lane assignment is needed.
 */ __turbopack_context__.s([
    "extractFromPdf",
    ()=>extractFromPdf
]);
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/extract-pdf.ts")}`;
    }
};
// ---------------------------------------------------------------------------
// Column classification
// ---------------------------------------------------------------------------
/** Headers that represent the top-level stage. */ const STAGE_HEADERS = new Set([
    'step',
    'stage',
    'phase',
    'process step'
]);
/** Headers that represent the step (sub-stage). */ const STEP_HEADERS = new Set([
    'sub step',
    'sub-step',
    'substep',
    'sub stage',
    'sub-stage',
    'substage'
]);
/** Headers that represent the sub-step (treated as step if no step col present). */ const SUB_STEP_HEADERS = new Set([
    'sub sub step',
    'sub-sub-step',
    'sub sub stage',
    'sub-sub step',
    'sub sub stage',
    'sub substep'
]);
/** Column header → lane key, covering common Confluence column names. */ const HEADER_TO_LANE = {
    actor: 'actor',
    actors: 'actor',
    'pain point': 'pain_point',
    'pain points': 'pain_point',
    'user need': 'user_need',
    'user needs': 'user_need',
    'user story': 'user_action_event',
    'user stories': 'user_action_event',
    'user action': 'user_action_event',
    'user actions': 'user_action_event',
    'research question': 'description',
    'research questions': 'description',
    'backstage process': 'backstage_process',
    'backstage processes': 'backstage_process',
    'frontstage touchpoint': 'frontstage_touchpoint',
    'frontstage touchpoints': 'frontstage_touchpoint',
    touchpoint: 'frontstage_touchpoint',
    touchpoints: 'frontstage_touchpoint',
    'business rule': 'business_rule',
    'business rules': 'business_rule',
    system: 'system',
    systems: 'system',
    opportunity: 'opportunities',
    opportunities: 'opportunities',
    idea: 'ideas',
    ideas: 'ideas',
    'success measure': 'success_measure',
    'success measures': 'success_measure',
    behaviour: 'behaviour_change',
    'desired behaviour': 'behaviour_change',
    'desired behaviour change': 'behaviour_change',
    motivation: 'motivation',
    ability: 'ability',
    prompt: 'prompts',
    prompts: 'prompts'
};
function classifyHeader(raw) {
    const h = raw.toLowerCase().trim().replace(/\s{2,}/g, ' ');
    if (STAGE_HEADERS.has(h)) return {
        type: 'stage'
    };
    if (STEP_HEADERS.has(h)) return {
        type: 'step'
    };
    if (SUB_STEP_HEADERS.has(h)) return {
        type: 'sub_step'
    };
    const laneKey = HEADER_TO_LANE[h];
    if (laneKey) return {
        type: 'lane',
        laneKey
    };
    return {
        type: 'ignore'
    };
}
// ---------------------------------------------------------------------------
// PDF.js text extraction
// ---------------------------------------------------------------------------
async function extractRawItems(buffer) {
    const pdfjsLib = await __turbopack_context__.A("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript, async loader)");
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
        pdfjsLib.GlobalWorkerOptions.workerSrc = new __turbopack_context__.U(__turbopack_context__.r("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/pdfjs-dist/build/pdf.worker.min.mjs (static in ecmascript)")).toString();
    }
    const pdf = await pdfjsLib.getDocument({
        data: new Uint8Array(buffer)
    }).promise;
    const result = [];
    for(let p = 1; p <= pdf.numPages; p++){
        const page = await pdf.getPage(p);
        const vp = page.getViewport({
            scale: 1
        });
        const content = await page.getTextContent();
        for (const item of content.items){
            if (!('str' in item)) continue;
            const s = item.str.trim();
            if (!s) continue;
            result.push({
                str: s,
                x: item.transform[4],
                y: vp.height - item.transform[5],
                width: item.width ?? 0,
                page: p
            });
        }
    }
    return result;
}
// ---------------------------------------------------------------------------
// Geometry helpers
// ---------------------------------------------------------------------------
function centroidClusters(sorted, gap) {
    if (!sorted.length) return [];
    const groups = [
        [
            sorted[0]
        ]
    ];
    for(let i = 1; i < sorted.length; i++){
        const g = groups[groups.length - 1];
        if (sorted[i] - g[g.length - 1] <= gap) g.push(sorted[i]);
        else groups.push([
            sorted[i]
        ]);
    }
    return groups.map((g)=>g.reduce((s, v)=>s + v, 0) / g.length);
}
function nearest(value, centroids) {
    let best = 0;
    let bestD = Math.abs(value - centroids[0]);
    for(let i = 1; i < centroids.length; i++){
        const d = Math.abs(value - centroids[i]);
        if (d < bestD) {
            bestD = d;
            best = i;
        }
    }
    return best;
}
// ---------------------------------------------------------------------------
// Table grid construction
// ---------------------------------------------------------------------------
/**
 * Builds a 2D grid of cells from raw PDF text items.
 *
 * Each cell is an ordered list of (y, text) pairs so callers can split on
 * large y-gaps to separate multiple items within one cell.
 */ function buildGrid(items, colCentroids, rowCentroids) {
    // grid[row][col] = list of {y, str} fragments
    const grid = Array.from({
        length: rowCentroids.length
    }, ()=>Array.from({
            length: colCentroids.length
        }, ()=>[]));
    for (const item of items){
        const col = nearest(item.x, colCentroids);
        const row = nearest(item.y, rowCentroids);
        grid[row][col].push({
            y: item.y,
            str: item.str
        });
    }
    // Sort fragments within each cell by y so text reads top-to-bottom
    for (const row of grid){
        for (const cell of row){
            cell.sort((a, b)=>a.y - b.y);
        }
    }
    return grid;
}
/**
 * Given a cell's fragments, split into individual items by detecting
 * large y-gaps (> 1.5× median line height within the cell).
 */ function splitCellIntoItems(fragments, lineHeight) {
    if (!fragments.length) return [];
    const threshold = lineHeight * 1.4;
    const groups = [
        [
            fragments[0].str
        ]
    ];
    for(let i = 1; i < fragments.length; i++){
        const gap = fragments[i].y - fragments[i - 1].y;
        if (gap > threshold) {
            groups.push([
                fragments[i].str
            ]);
        } else {
            groups[groups.length - 1].push(fragments[i].str);
        }
    }
    return groups.map((g)=>g.join(' ').trim()).filter(Boolean);
}
async function extractFromPdf(buffer, fileName) {
    // -- 1. Pull text items from all pages
    let rawItems;
    try {
        rawItems = await extractRawItems(buffer);
    } catch (err) {
        return {
            rows: [],
            headers: [],
            errors: [
                err instanceof Error ? err.message : 'Failed to parse PDF'
            ],
            warnings: []
        };
    }
    if (!rawItems.length) {
        return {
            rows: [],
            headers: [],
            errors: [
                'No text found in PDF. The file may be scanned/image-only.'
            ],
            warnings: []
        };
    }
    // -- 2. Cluster into columns and rows
    const sortedX = [
        ...rawItems.map((i)=>i.x)
    ].sort((a, b)=>a - b);
    const colCentroids = centroidClusters(sortedX, 18);
    const sortedY = [
        ...rawItems.map((i)=>i.y)
    ].sort((a, b)=>a - b);
    const rowCentroids = centroidClusters(sortedY, 5);
    if (colCentroids.length < 2) {
        return {
            rows: [],
            headers: [],
            errors: [
                'Could not detect table columns in PDF. Ensure the file has a multi-column table.'
            ],
            warnings: []
        };
    }
    // -- 3. Build grid
    const grid = buildGrid(rawItems, colCentroids, rowCentroids);
    // -- 4. Find the header row — first row with ≥2 non-empty cells
    let headerRowIdx = -1;
    for(let r = 0; r < grid.length; r++){
        const nonEmpty = grid[r].filter((c)=>c.length > 0).length;
        if (nonEmpty >= 2) {
            headerRowIdx = r;
            break;
        }
    }
    if (headerRowIdx === -1) {
        return {
            rows: [],
            headers: [],
            errors: [
                'Could not find a header row in the PDF.'
            ],
            warnings: []
        };
    }
    // -- 5. Read header strings and classify each column
    const headers = grid[headerRowIdx].map((frags)=>frags.map((f)=>f.str).join(' ').trim());
    const colRoles = headers.map(classifyHeader);
    // Determine column indices for structural fields
    const stageColIdx = colRoles.findIndex((r)=>r.type === 'stage');
    const stepColIdx = colRoles.findIndex((r)=>r.type === 'step');
    // Use sub_step as step if no step column present
    const subStepColIdx = colRoles.findIndex((r)=>r.type === 'sub_step');
    const effectiveStepColIdx = stepColIdx !== -1 ? stepColIdx : subStepColIdx;
    const laneColIndices = [];
    colRoles.forEach((role, idx)=>{
        if (role.type === 'lane') laneColIndices.push({
            col: idx,
            laneKey: role.laneKey
        });
    });
    // Fall back to header-based extraction if no known columns found
    const hasKnownStructure = stageColIdx !== -1 || effectiveStepColIdx !== -1 || laneColIndices.length > 0;
    // -- 6. Estimate typical line height for intra-cell item splitting
    const yGaps = [];
    for(let i = 1; i < rowCentroids.length; i++){
        yGaps.push(rowCentroids[i] - rowCentroids[i - 1]);
    }
    yGaps.sort((a, b)=>a - b);
    const lineHeight = yGaps[Math.floor(yGaps.length * 0.25)] ?? 12; // lower quartile = typical line height
    // -- 7. Emit ExtractedRows
    const extractedRows = [];
    let sourceRowNumber = 2;
    // Track running stage/step across rows (Confluence tables repeat the step
    // across sub-rows for cells that span vertically)
    let currentStage = '';
    let currentStep = '';
    for(let r = headerRowIdx + 1; r < grid.length; r++){
        const rowCells = grid[r];
        // Update stage/step context from this row if present
        const stageText = stageColIdx !== -1 ? rowCells[stageColIdx].map((f)=>f.str).join(' ').trim() : '';
        const stepText = effectiveStepColIdx !== -1 ? rowCells[effectiveStepColIdx].map((f)=>f.str).join(' ').trim() : '';
        if (stageText) currentStage = stageText;
        if (stepText) currentStep = stepText;
        if (!currentStage && !currentStep) continue; // skip pre-table content
        if (hasKnownStructure) {
            // Emit one ExtractedRow per item per lane column
            for (const { col, laneKey } of laneColIndices){
                const cellFrags = rowCells[col];
                if (!cellFrags.length) continue;
                const items = splitCellIntoItems(cellFrags, lineHeight);
                for (const item of items){
                    if (!item) continue;
                    const cells = {
                        stage: currentStage,
                        step: currentStep,
                        lane_key: laneKey,
                        card_title: item,
                        record_type: 'card_row'
                    };
                    extractedRows.push({
                        sourceType: 'pdf_extracted',
                        sourceFileName: fileName,
                        sourceSheetOrPage: 'PDF',
                        sourceRowNumber: sourceRowNumber++,
                        extractedHeaders: [
                            'stage',
                            'step',
                            'lane_key',
                            'card_title'
                        ],
                        extractedCells: cells,
                        rawText: `${currentStage}\t${currentStep}\t${laneKey}\t${item}`
                    });
                }
            }
        } else {
            // No recognised column structure — fall back to one row per table row
            const nonEmpty = rowCells.filter((c)=>c.length > 0);
            if (!nonEmpty.length) continue;
            const cells = {};
            const rawParts = [];
            for(let c = 0; c < headers.length; c++){
                const h = headers[c];
                if (!h) continue;
                const val = rowCells[c].map((f)=>f.str).join(' ').trim();
                cells[h] = val;
                if (val) rawParts.push(val);
            }
            extractedRows.push({
                sourceType: 'pdf_extracted',
                sourceFileName: fileName,
                sourceSheetOrPage: 'PDF',
                sourceRowNumber: sourceRowNumber++,
                extractedHeaders: headers.filter(Boolean),
                extractedCells: cells,
                rawText: rawParts.join('\t')
            });
        }
    }
    const warnings = [];
    if (!hasKnownStructure) {
        warnings.push('Column headers did not match expected blueprint names (Step, Sub step, Actor, Pain point, etc.). ' + 'Rows have been extracted as-is — you may need to manually assign lanes.');
    }
    return {
        rows: extractedRows,
        headers: headers.filter(Boolean),
        errors: [],
        warnings: extractedRows.length === 0 ? [
            'PDF parsed but no data rows were extracted.'
        ] : warnings
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/mock-mapping-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MockImportMappingService",
    ()=>MockImportMappingService
]);
/**
 * mock-mapping-service.ts
 *
 * MockImportMappingService
 *
 * Deterministic keyword-heuristic implementation of ImportMappingService.
 * Used as the default provider; swap to an LLM-backed service when ready.
 *
 * Mapping strategy (in priority order):
 *   1. Explicit `lane_key` column → use directly (confidence 0.95)
 *   2. Explicit `card_title` column → use directly (confidence 0.85)
 *   3. Column header name matches a known lane → lane from header (0.70)
 *   4. Content keyword scan across full rawText → infer lane (0.35–0.60)
 *   5. No lane detected → flag for manual review (confidence 0.15)
 *
 * Record type detection:
 *   - Explicit `record_type` column → use value
 *   - Numeric hierarchy prefix (e.g. "1.", "2.3") → structure_row / card_row
 *   - Single non-empty cell with heading pattern → structure_row
 *   - Zero non-empty cells → noise_row
 *   - Default → card_row
 *
 * Stage / step inference:
 *   - Explicit `stage` + `step` columns (or `phase`, `activity`, etc.)
 *   - Numeric hierarchy: "2" → Stage 2, "2.1" → Step 1 within Stage 2
 *   - Running tracker — structure_rows update the active stage/step context
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/types.ts [app-client] (ecmascript)");
;
;
const LANE_PATTERNS = [
    {
        laneKey: 'actor',
        patterns: /\b(actor|persona|user|customer|citizen|client|stakeholder)\b/i
    },
    {
        laneKey: 'user_action_event',
        patterns: /\b(action|does|clicks|submits|navigates|triggers|event|user step|journey step)\b/i
    },
    {
        laneKey: 'user_need',
        patterns: /\b(need|want|goal|expect|require|motivation|job to be done|desire)\b/i
    },
    {
        laneKey: 'pain_point',
        patterns: /\b(pain|issue|problem|frustrat|confus|barrier|obstacle|challenge|difficult|broken|fail)\b/i
    },
    {
        laneKey: 'frontstage_touchpoint',
        patterns: /\b(touchpoint|ui|interface|screen|page|form|email|notification|channel|portal)\b/i
    },
    {
        laneKey: 'activity',
        patterns: /\b(activity|task|step|action item|to.?do|checklist item|user task)\b/i
    },
    {
        laneKey: 'backstage_process',
        patterns: /\b(process|workflow|manual process|staff|team|service desk|back.?stage|support task)\b/i
    },
    {
        laneKey: 'system',
        patterns: /\b(system|api|database|service|integration|platform|backend|infrastructure|microservice)\b/i
    },
    {
        laneKey: 'policy_intent',
        patterns: /\b(policy|intent|objective|goal|principle|regulation|compliance|requirement|mandate)\b/i
    },
    {
        laneKey: 'business_rule',
        patterns: /\b(rule|constraint|validation|logic|condition|criteria|threshold|eligibility|check)\b/i
    },
    {
        laneKey: 'data_input',
        patterns: /\b(input|data entry|capture|collect|field|form data|upload|ingest)\b/i
    },
    {
        laneKey: 'data_output',
        patterns: /\b(output|report|export|result|response|notification sent|generate|produce)\b/i
    },
    {
        laneKey: 'behaviour_change',
        patterns: /\b(behaviour change|desired behaviour|what good looks like|target behaviour|intended change|behaviour goal|good looks like)\b/i
    }
];
/** Map normalised column header names to a lane key */ const HEADER_LANE_MAP = {
    actor: 'actor',
    user: 'actor',
    persona: 'actor',
    action: 'user_action_event',
    user_action: 'user_action_event',
    user_action_event: 'user_action_event',
    event: 'user_action_event',
    need: 'user_need',
    user_need: 'user_need',
    pain: 'pain_point',
    pain_point: 'pain_point',
    issue: 'pain_point',
    problem: 'pain_point',
    touchpoint: 'frontstage_touchpoint',
    frontstage_touchpoint: 'frontstage_touchpoint',
    channel: 'frontstage_touchpoint',
    activity: 'activity',
    task: 'activity',
    user_task: 'activity',
    process: 'backstage_process',
    backstage: 'backstage_process',
    backstage_process: 'backstage_process',
    system: 'system',
    technology: 'system',
    tech: 'system',
    policy: 'policy_intent',
    policy_intent: 'policy_intent',
    intent: 'policy_intent',
    rule: 'business_rule',
    business_rule: 'business_rule',
    data: 'data_input',
    data_input: 'data_input',
    input: 'data_input',
    data_output: 'data_output',
    output: 'data_output',
    behaviour_change: 'behaviour_change',
    desired_behaviour: 'behaviour_change',
    desired_behaviour_change: 'behaviour_change',
    what_good_looks_like: 'behaviour_change',
    target_behaviour: 'behaviour_change'
};
function normaliseHeaderKey(header) {
    return header.toLowerCase().trim().replace(/\s+/g, '_');
}
function inferLaneFromContent(text) {
    let bestLane = null;
    let bestScore = 0;
    for (const { laneKey, patterns } of LANE_PATTERNS){
        const matches = text.match(new RegExp(patterns.source, patterns.flags + 'g'));
        if (matches) {
            const score = matches.length * 0.25;
            if (score > bestScore) {
                bestScore = score;
                bestLane = laneKey;
            }
        }
    }
    return {
        laneKey: bestLane,
        confidence: Math.min(bestScore + 0.1, 0.65)
    };
}
function inferLaneFromHeader(header) {
    const key = normaliseHeaderKey(header);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANE_KEYS"].includes(key)) return key;
    return HEADER_LANE_MAP[key] ?? null;
}
// ---------------------------------------------------------------------------
// Record type detection
// ---------------------------------------------------------------------------
function detectRecordType(row) {
    const cells = row.extractedCells;
    // Explicit column
    const explicit = cells['record_type']?.toLowerCase().trim();
    if (explicit) {
        if (explicit === 'structure' || explicit === 'structure_row') return 'structure_row';
        if (explicit === 'card' || explicit === 'card_row') return 'card_row';
        if (explicit === 'noise' || explicit === 'noise_row') return 'noise_row';
    }
    // Explicit lane_key column with a valid value → card_row
    const laneCol = cells['lane_key']?.toLowerCase().trim();
    if (laneCol && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANE_KEYS"].includes(laneCol)) return 'card_row';
    const nonEmpty = Object.values(cells).filter((v)=>v.trim() !== '');
    if (nonEmpty.length === 0) return 'noise_row';
    // Single-cell rows that look like section headings
    if (nonEmpty.length === 1) {
        const val = nonEmpty[0].trim();
        if (/^(phase|stage|section|part|step)\s*\d*/i.test(val)) return 'structure_row';
        if (val.length < 3) return 'noise_row';
        // Numeric-only prefix like "1." or "Phase 2" → structure
        if (/^\d+\.?\s*$/.test(val)) return 'structure_row';
    }
    return 'card_row';
}
function inferStageAndStep(row, ctx) {
    const cells = row.extractedCells;
    // Explicit columns (various common header names)
    const stageVal = cells['stage']?.trim() || cells['phase']?.trim() || cells['stage_name']?.trim() || cells['phase_name']?.trim() || '';
    const stepVal = cells['step']?.trim() || cells['activity']?.trim() || cells['sub_step']?.trim() || cells['step_name']?.trim() || '';
    if (stageVal) {
        ctx.currentStage = stageVal;
        ctx.currentStep = stepVal || stageVal;
        return {
            stage: stageVal,
            step: stepVal || stageVal,
            looksLikeStructure: false
        };
    }
    if (stepVal && ctx.currentStage) {
        ctx.currentStep = stepVal;
        return {
            stage: ctx.currentStage,
            step: stepVal,
            looksLikeStructure: false
        };
    }
    // Numeric hierarchy in the first non-empty cell
    const firstVal = Object.values(cells).find((v)=>v.trim()) ?? '';
    const numericMatch = firstVal.match(/^(\d+)(?:\.(\d+))?\s*(.*)/);
    if (numericMatch) {
        const major = parseInt(numericMatch[1], 10);
        const minor = numericMatch[2] ? parseInt(numericMatch[2], 10) : null;
        const label = numericMatch[3].trim();
        if (minor === null && major > 0) {
            // Top-level number → stage header
            const stageName = label || `Stage ${major}`;
            ctx.currentStage = stageName;
            ctx.currentStep = stageName;
            ctx.stageCounter = major;
            return {
                stage: stageName,
                step: stageName,
                looksLikeStructure: true
            };
        }
        if (minor !== null) {
            // Sub-level → step
            const stepName = label || `Step ${major}.${minor}`;
            if (!ctx.currentStage) ctx.currentStage = `Stage ${major}`;
            ctx.currentStep = stepName;
            return {
                stage: ctx.currentStage,
                step: stepName,
                looksLikeStructure: false
            };
        }
    }
    // Fall back to running context
    const stage = ctx.currentStage || 'Stage 1';
    const step = ctx.currentStep || stage;
    return {
        stage,
        step,
        looksLikeStructure: false
    };
}
class MockImportMappingService {
    async mapRows(rows) {
        if (rows.length === 0) {
            return {
                rows: [],
                errors: [
                    'No rows to map'
                ],
                warnings: []
            };
        }
        const errors = [];
        const warnings = [];
        const mapped = [];
        const headers = rows[0].extractedHeaders;
        // Pre-build a map of which column headers correspond to lane keys
        const headerLaneCols = [];
        for (const h of headers){
            const lane = inferLaneFromHeader(h);
            if (lane) headerLaneCols.push({
                header: h,
                laneKey: lane
            });
        }
        const ctx = {
            currentStage: '',
            currentStep: '',
            stageCounter: 0
        };
        for (const row of rows){
            const flags = [];
            let laneConfidence = 0;
            // ── Record type ────────────────────────────────────────────────────
            const baseRecordType = detectRecordType(row);
            // ── Stage / step ───────────────────────────────────────────────────
            const { stage, step, looksLikeStructure } = inferStageAndStep(row, ctx);
            const recordType = looksLikeStructure ? 'structure_row' : baseRecordType;
            // ── Lane key ───────────────────────────────────────────────────────
            let proposedLaneKey = '';
            let proposedCardTitle = '';
            let proposedCardBody = '';
            let confidence = 0.5;
            // 1. Explicit lane_key column
            const explicitLane = row.extractedCells['lane_key']?.toLowerCase().trim();
            if (explicitLane && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANE_KEYS"].includes(explicitLane)) {
                proposedLaneKey = explicitLane;
                laneConfidence = 0.95;
            }
            // 2. Explicit card_title column
            const explicitTitle = row.extractedCells['card_title']?.trim();
            if (explicitTitle) {
                proposedCardTitle = explicitTitle;
                proposedCardBody = row.extractedCells['card_body']?.trim() ?? '';
                confidence = laneConfidence > 0 ? 0.9 : 0.75;
            }
            // 3. Header-based lane inference (first matching column with content)
            if (!proposedLaneKey && recordType === 'card_row') {
                for (const { header, laneKey } of headerLaneCols){
                    const val = row.extractedCells[header]?.trim();
                    if (val) {
                        proposedLaneKey = laneKey;
                        if (!proposedCardTitle) proposedCardTitle = val;
                        laneConfidence = 0.70;
                        break;
                    }
                }
            }
            // 4. Content keyword scan
            if (!proposedLaneKey && recordType === 'card_row') {
                const { laneKey, confidence: kwConf } = inferLaneFromContent(row.rawText);
                if (laneKey) {
                    proposedLaneKey = laneKey;
                    laneConfidence = kwConf;
                    flags.push('Lane inferred from content keywords — please verify');
                } else {
                    flags.push('Could not infer lane key — assign manually before committing');
                    confidence = 0.15;
                }
            }
            // 5. Title fallback — pick longest substantive cell
            if (!proposedCardTitle && recordType === 'card_row') {
                const contentCells = Object.entries(row.extractedCells).filter(([, v])=>v.trim().length > 5).sort(([, a], [, b])=>b.length - a.length);
                if (contentCells.length > 0) {
                    proposedCardTitle = contentCells[0][1].slice(0, 120);
                    if (contentCells.length > 1) {
                        proposedCardBody = contentCells[1][1].slice(0, 400);
                    }
                    flags.push('Title inferred from longest content cell');
                    confidence = Math.min(confidence, 0.45);
                }
            }
            // ── Final confidence ───────────────────────────────────────────────
            if (recordType === 'structure_row' || recordType === 'noise_row') {
                confidence = 0.90;
            } else if (proposedLaneKey) {
                confidence = Math.max(confidence, laneConfidence * 0.85 + 0.1);
            } else {
                confidence = 0.15;
            }
            // ── Tags ───────────────────────────────────────────────────────────
            const tagsRaw = row.extractedCells['tags'] ?? '';
            const proposedTags = tagsRaw ? tagsRaw.split(/[,;|]/).map((t)=>t.trim()).filter(Boolean) : [];
            mapped.push({
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                sourceRow: row,
                proposedRecordType: recordType,
                proposedStage: stage,
                proposedStep: step,
                proposedLaneKey,
                proposedCardTitle,
                proposedCardBody,
                proposedTags,
                confidence,
                flags,
                reviewStatus: 'pending'
            });
        }
        // Summary warnings
        const lowConf = mapped.filter((r)=>r.proposedRecordType === 'card_row' && r.confidence < 0.4).length;
        if (lowConf > 0) {
            warnings.push(`${lowConf} card row${lowConf > 1 ? 's' : ''} have low confidence and need manual review`);
        }
        const noLane = mapped.filter((r)=>r.proposedRecordType === 'card_row' && !r.proposedLaneKey).length;
        if (noLane > 0) {
            warnings.push(`${noLane} card row${noLane > 1 ? 's' : ''} have no lane key — assign before committing`);
        }
        return {
            rows: mapped,
            errors,
            warnings
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/mapping-types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * mapping-types.ts
 *
 * Intermediate import model: the AI mapping service takes ExtractedRow[] as
 * input and returns MappedRow[], which the review UI presents to the user
 * before committing to the blueprint store.
 *
 * Separation of concerns:
 *   ExtractedRow  — raw source data (provenance only, no interpretation)
 *   MappedRow     — AI-proposed schema mapping + user corrections
 *   commit.ts     — converts accepted MappedRows into BlueprintState
 */ __turbopack_context__.s([
    "resolveRow",
    ()=>resolveRow
]);
function resolveRow(row) {
    return {
        recordType: row.editedRecordType ?? row.proposedRecordType,
        stage: row.editedStage ?? row.proposedStage,
        step: row.editedStep ?? row.proposedStep,
        laneKey: row.editedLaneKey !== undefined ? row.editedLaneKey : row.proposedLaneKey,
        cardTitle: row.editedCardTitle ?? row.proposedCardTitle,
        cardBody: row.editedCardBody ?? row.proposedCardBody,
        tags: row.proposedTags
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/commit.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "commitMappedRows",
    ()=>commitMappedRows
]);
/**
 * commit.ts
 *
 * Converts reviewed MappedRow[] into a BlueprintState that can be passed
 * directly to useBlueprintStore.loadBlueprint().
 *
 * Only rows with reviewStatus !== 'rejected' and recordType !== 'noise_row'
 * are included. Provenance is preserved on every card (sourceFile, sourceSheet,
 * sourceRow).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/lane-definitions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$mapping$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/import/mapping-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/types.ts [app-client] (ecmascript)");
;
;
;
;
function isL1MacroImport(rows) {
    return rows.some((row)=>{
        const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$mapping$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveRow"])(row);
        const firstCell = Object.values(row.sourceRow.extractedCells)[0]?.toLowerCase().trim().replace(/\s+/g, '_') ?? '';
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L1_MACRO_LANE_KEYS"].has(resolved.laneKey) || Boolean(row.sourceRow.extractedCells['phase']?.trim()) || [
            'phase',
            'policy_reform',
            'policy_outcome',
            'user_outcome',
            'operational_outcome',
            'insights',
            'impact_of_pain_points',
            'performance_indicators',
            'opportunities_lane'
        ].includes(firstCell);
    });
}
function resolveCommitLaneKey(laneKey, isL1Macro) {
    if (isL1Macro && (laneKey === 'ideas' || laneKey === 'opportunities')) {
        return 'opportunities_lane';
    }
    return laneKey;
}
function isAreaReferenceBehaviourChangeCard(laneKey, title) {
    return laneKey === 'behaviour_change' && /^areas?\s+[a-z](?:\s*,\s*[a-z])*(?:\s*(?:and|&)\s*[a-z])?(?:\b|[.:;-])/i.test(title.trim());
}
function isEvidenceReferencePainPointCard(laneKey, title, body = '') {
    if (laneKey !== 'pain_point') return false;
    const value = `${title} ${body}`.trim();
    if (!/\bE-\d{3,}\b/i.test(value)) return false;
    return value.replace(/\bE-\d{3,}\b/gi, '').replace(/[,\s.;:[\]()]+/g, '').trim() === '';
}
function stripOpportunityTraceText(laneKey, text) {
    if (laneKey !== 'opportunities' && laneKey !== 'opportunities_lane') return text;
    return text.replace(/(?:\s+|\n)*Trace:\s*OPP-\d{3,}(?:\s*\/\s*(?:OPP-)?\d{3,})*\.?\s*$/i, '').trim();
}
function stripRollupText(laneKey, title) {
    const prefix = laneKey === 'user_need' ? 'UN' : laneKey === 'pain_point' ? 'PP' : null;
    if (!prefix) return {
        title
    };
    const pattern = new RegExp(`\\s*\\[Rolls up\\s+((?:${prefix}-\\d{3,})(?:\\s*,\\s*${prefix}-\\d{3,})*)\\]?\\s*$`, 'i');
    const match = title.match(pattern);
    if (!match) return {
        title
    };
    return {
        title: title.slice(0, match.index).trim(),
        derivedFromIds: Array.from(new Set(match[1].match(new RegExp(`\\b${prefix}-\\d{3,}\\b`, 'g')) ?? []))
    };
}
function stripBehaviourChangeEvidenceBasis(laneKey, title) {
    if (laneKey !== 'behaviour_change') return {
        title
    };
    const evidencePattern = /\s*Evidence basis[^.?!]*(?:UN|PP)-\d{3,}[^.?!]*[.?!]?/i;
    const match = title.match(evidencePattern);
    if (!match) return {
        title
    };
    const evidenceText = match[0];
    return {
        title: title.replace(evidencePattern, '').replace(/\s{2,}/g, ' ').trim(),
        derivedFromIds: Array.from(new Set(evidenceText.match(/\b(?:UN|PP)-\d{3,}\b/g) ?? []))
    };
}
function stripSuccessMeasureReferenceText(laneKey, title) {
    if (laneKey !== 'success_measure') return {
        title
    };
    const pattern = /(?:^|\s+)((?:PP-\d{3,})(?:\s*,\s*PP-\d{3,})*)\.?\s*$/i;
    const match = title.match(pattern);
    if (!match) return {
        title
    };
    return {
        title: title.slice(0, match.index).trim(),
        derivedFromIds: Array.from(new Set(match[1].match(/\bPP-\d{3,}\b/g) ?? []))
    };
}
function commitMappedRows(rows, serviceName, sourceFile) {
    const errors = [];
    const warnings = [];
    const bpId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const ts = new Date().toISOString();
    const stageMap = new Map();
    const stepMap = new Map();
    const cards = [];
    // Only process accepted rows (not rejected; pending rows are treated as accepted)
    const includedRows = rows.filter((r)=>r.reviewStatus !== 'rejected');
    const isL1Macro = isL1MacroImport(includedRows);
    for (const row of includedRows){
        const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$import$2f$mapping$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveRow"])(row);
        if (resolved.recordType === 'noise_row') continue;
        const stageName = resolved.stage.trim() || 'Stage 1';
        const stepName = resolved.step.trim() || stageName;
        // Phase + description are carried through on each extracted row by
        // extract.ts for the swimlane matrix format. Both optional for other paths.
        const phase = row.sourceRow.extractedCells['phase']?.trim() || undefined;
        const description = row.sourceRow.extractedCells['description']?.trim() || undefined;
        // ── Ensure stage exists ───────────────────────────────────────────────
        if (!stageMap.has(stageName)) {
            stageMap.set(stageName, {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                blueprintId: bpId,
                title: stageName,
                outcome: '',
                order: stageMap.size,
                phase,
                description
            });
        } else {
            // Backfill phase/description onto an existing stage if it was created by
            // an earlier card row that didn't carry that info.
            const existing = stageMap.get(stageName);
            if (phase && !existing.phase) existing.phase = phase;
            if (description && !existing.description) existing.description = description;
        }
        const stage = stageMap.get(stageName);
        // ── Ensure step exists ────────────────────────────────────────────────
        const stepKey = `${stageName}::${stepName}`;
        if (!stepMap.has(stepKey)) {
            const stepsInStage = Array.from(stepMap.values()).filter((s)=>s.stageId === stage.id);
            stepMap.set(stepKey, {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                blueprintId: bpId,
                stageId: stage.id,
                title: stepName,
                order: stepsInStage.length
            });
        }
        // structure_row rows establish hierarchy only — no card created.
        if (resolved.recordType === 'structure_row') {
            continue;
        }
        // ── Validate lane key ─────────────────────────────────────────────────
        const laneKey = resolved.laneKey ? resolveCommitLaneKey(resolved.laneKey, isL1Macro) : '';
        if (!laneKey || !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANE_KEYS"].includes(laneKey)) {
            warnings.push(`Row ${row.sourceRow.sourceRowNumber}: no valid lane key — skipped`);
            continue;
        }
        // ── Validate title ────────────────────────────────────────────────────
        const titleWithoutTrace = stripOpportunityTraceText(laneKey, resolved.cardTitle);
        const titleRollup = stripRollupText(laneKey, titleWithoutTrace);
        const titleEvidenceBasis = stripBehaviourChangeEvidenceBasis(laneKey, titleRollup.title);
        const titleSuccessMeasureRefs = stripSuccessMeasureReferenceText(laneKey, titleEvidenceBasis.title);
        const title = titleSuccessMeasureRefs.title;
        if (!title) {
            warnings.push(`Row ${row.sourceRow.sourceRowNumber}: no card title — skipped`);
            continue;
        }
        if (isAreaReferenceBehaviourChangeCard(laneKey, title)) {
            continue;
        }
        if (isEvidenceReferencePainPointCard(laneKey, title, resolved.cardBody)) {
            continue;
        }
        const step = stepMap.get(stepKey);
        const cellOrder = cards.filter((c)=>c.stepId === step.id && c.laneKey === laneKey).length;
        cards.push({
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            blueprintId: bpId,
            stageId: stage.id,
            stepId: step.id,
            laneKey: laneKey,
            title,
            body: stripOpportunityTraceText(laneKey, resolved.cardBody),
            order: cellOrder,
            tags: resolved.tags,
            sourceFile,
            sourceSheet: row.sourceRow.sourceSheetOrPage,
            sourceRow: row.sourceRow.sourceRowNumber,
            sourceRef: '',
            createdAt: ts,
            updatedAt: ts,
            derivedFromIds: [
                ...titleRollup.derivedFromIds ?? [],
                ...titleEvidenceBasis.derivedFromIds ?? [],
                ...titleSuccessMeasureRefs.derivedFromIds ?? []
            ].length ? Array.from(new Set([
                ...titleRollup.derivedFromIds ?? [],
                ...titleEvidenceBasis.derivedFromIds ?? [],
                ...titleSuccessMeasureRefs.derivedFromIds ?? []
            ])) : undefined
        });
    }
    const stages = Array.from(stageMap.values()).sort((a, b)=>a.order - b.order);
    const steps = Array.from(stepMap.values());
    return {
        state: {
            blueprint: {
                id: bpId,
                serviceName: serviceName.trim() || 'Enter title',
                description: '',
                createdAt: ts,
                updatedAt: ts
            },
            stages,
            steps,
            lanes: (isL1Macro ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L1_MACRO_LANES"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_LANES"]).map((l)=>({
                    ...l
                })),
            childBlueprints: [],
            rootDocument: null,
            activeBlueprintId: bpId,
            rootBlueprintId: bpId,
            cards,
            storyboardImages: [],
            storyboardVisible: true,
            storyboardCollapsed: false,
            cardLinks: [],
            evidence: [],
            opportunities: [],
            solutions: [],
            assumptions: [],
            strategicGoals: [],
            outcomes: [],
            systemOutcomes: [],
            behaviourOutcomes: [],
            serviceOutcomes: [],
            stepLinks: [],
            requirements: [],
            apiContracts: [],
            uiScaffolds: [],
            traceabilityCounters: {}
        },
        errors,
        warnings
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_defra-design_service-mapping-tool_src_lib_f0688309._.js.map