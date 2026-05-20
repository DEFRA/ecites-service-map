(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/store/blueprint-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBlueprintStore",
    ()=>useBlueprintStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$downstream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/traceability/downstream.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/lane-definitions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$seed$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/seed-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/traceability/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/src/lib/traceability/service.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
const STORAGE_KEY = 'service-blueprint-data';
const HISTORY_LIMIT = 50;
function now() {
    return new Date().toISOString();
}
function shouldForceLaneVisible(_key) {
    return false;
}
function isChildJourneyOpen(state) {
    return Boolean(state.rootDocument && state.activeBlueprintId && state.rootBlueprintId && state.activeBlueprintId !== state.rootBlueprintId);
}
function upsertChildBlueprint(state, child) {
    const next = (state.childBlueprints ?? []).filter((doc)=>doc.blueprint.id !== child.blueprint.id);
    return [
        ...next,
        child
    ];
}
function loadFromStorage() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch  {
        return null;
    }
}
function saveToStorage(state) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        console.warn('[service-blueprint] Could not save to localStorage (quota or private mode).', e);
    }
}
function pickBaseLanes(state) {
    const hasL1 = (state.lanes ?? []).some((l)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L1_MACRO_LANE_KEYS"].has(l.key)) || (state.cards ?? []).some((c)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L1_MACRO_LANE_KEYS"].has(c.laneKey));
    return hasL1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L1_MACRO_LANES"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_LANES"];
}
function applyL3LaneVisibility(lanes) {
    const existingByKey = new Map(lanes.map((lane)=>[
            lane.key,
            lane
        ]));
    const l3Keys = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L3_LANE_KEYS"]);
    const orderedDefaults = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L3_LANE_KEYS"].map((key)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_LANES"].find((lane)=>lane.key === key)).filter((lane)=>Boolean(lane)),
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$lane$2d$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_LANES"].filter((lane)=>!l3Keys.has(lane.key))
    ];
    return orderedDefaults.map((defaultLane, order)=>{
        const existingLane = existingByKey.get(defaultLane.key);
        return {
            ...defaultLane,
            ...existingLane,
            title: defaultLane.title,
            order,
            // Respect toggles from the lanes menu; only force visibility for lanes that
            // must always show (e.g. user_journey). Do not set all L3 keys visible —
            // that broke every return to L3 after normalizeState / openJourneySpan.
            visible: shouldForceLaneVisible(defaultLane.key) ? "TURBOPACK unreachable" : existingLane?.visible ?? defaultLane.visible,
            collapsed: existingLane?.collapsed ?? defaultLane.collapsed
        };
    });
}
function sanitizeTypedTraceableLaneCard(card) {
    if (card.laneKey !== 'performance_indicators' && card.laneKey !== 'opportunities_lane') return card;
    const trimmedTitle = card.title.trim();
    const leadingCodeMatch = trimmedTitle.match(/^([A-Z]+-\d{3,})\s*:\s+(.+)$/);
    if (leadingCodeMatch) {
        return {
            ...card,
            title: leadingCodeMatch[2].trim()
        };
    }
    const typeMatch = trimmedTitle.match(/^([A-Za-z][A-Za-z\s/-]*):\s*(.+)$/);
    const typeLabel = typeMatch?.[1]?.trim().toLowerCase();
    const remainder = typeMatch?.[2]?.trim() ?? trimmedTitle;
    const inlineCodeMatch = remainder.match(/^([A-Z]+-\d{3,})(?:\s+|:\s+)(.+)$/);
    const cleanedTitle = inlineCodeMatch?.[2]?.trim() ?? remainder;
    if (!cleanedTitle || cleanedTitle === card.title.trim()) {
        if (!typeLabel || card.tags.includes(typeLabel)) return card;
        return {
            ...card,
            tags: [
                ...card.tags,
                typeLabel
            ]
        };
    }
    return {
        ...card,
        title: cleanedTitle,
        tags: typeLabel && !card.tags.includes(typeLabel) ? [
            ...card.tags,
            typeLabel
        ] : card.tags
    };
}
function expandMergedTypedTraceableCards(cards) {
    const expanded = [];
    cards.forEach((card)=>{
        if (card.laneKey !== 'performance_indicators') {
            expanded.push(card);
            return;
        }
        const parts = card.title.trim().split(/(?<=.)\s+(?=[A-Z][A-Za-z\s/-]*:\s+[A-Z]+-\d{3,}\b)/g).map((part)=>part.trim()).filter(Boolean);
        if (parts.length <= 1) {
            expanded.push(card);
            return;
        }
        expanded.push({
            ...card,
            title: parts[0]
        });
        parts.slice(1).forEach((part, index)=>{
            const leadingCodeMatch = part.match(/^([A-Za-z][A-Za-z\s/-]*):\s+([A-Z]+-\d{3,})\s+(.+)$/);
            expanded.push({
                ...card,
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                title: leadingCodeMatch?.[3]?.trim() ?? part,
                traceabilityCode: leadingCodeMatch?.[2] ?? card.traceabilityCode,
                tags: leadingCodeMatch?.[1] ? Array.from(new Set([
                    ...card.tags,
                    leadingCodeMatch[1].trim().toLowerCase()
                ])) : card.tags,
                order: card.order + index + 1
            });
        });
    });
    return expanded;
}
const TRACEABILITY_CODE_PATTERN = /\b[A-Z]{1,5}-\d{3,}\b/g;
function getTraceabilityCodesFromText(value) {
    return Array.from(new Set(value.match(TRACEABILITY_CODE_PATTERN) ?? []));
}
function isStandaloneTraceabilityCodeCard(card) {
    const value = `${card.title} ${card.body}`.trim();
    if (!value || getTraceabilityCodesFromText(value).length === 0) return false;
    return value.replace(TRACEABILITY_CODE_PATTERN, '').replace(/[,\s.;:[\]()]+/g, '').trim() === '';
}
function migrateStandaloneBehaviourChangeRollupCards(cards) {
    const removedIds = new Set();
    const codesByTargetId = new Map();
    const behaviourChangeCards = cards.filter((card)=>card.laneKey === 'behaviour_change');
    const standaloneCards = behaviourChangeCards.filter(isStandaloneTraceabilityCodeCard);
    for (const standalone of standaloneCards){
        const codes = getTraceabilityCodesFromText(`${standalone.title} ${standalone.body}`);
        if (codes.length === 0) continue;
        const siblingTargets = behaviourChangeCards.filter((candidate)=>candidate.id !== standalone.id && candidate.stepId === standalone.stepId && !isStandaloneTraceabilityCodeCard(candidate)).sort((a, b)=>a.order - b.order);
        const target = siblingTargets.find((candidate)=>codes.some((code)=>`${candidate.title} ${candidate.body}`.includes(code))) ?? siblingTargets[0];
        if (!target) continue;
        removedIds.add(standalone.id);
        codesByTargetId.set(target.id, [
            ...codesByTargetId.get(target.id) ?? [],
            ...codes
        ]);
    }
    if (removedIds.size === 0 && codesByTargetId.size === 0) return cards;
    return cards.filter((card)=>!removedIds.has(card.id)).map((card)=>{
        const codes = codesByTargetId.get(card.id);
        if (!codes?.length) return card;
        return {
            ...card,
            derivedFromIds: Array.from(new Set([
                ...card.derivedFromIds ?? [],
                ...codes
            ]))
        };
    });
}
function removeAreaReferenceBehaviourChangeCards(cards) {
    return cards.filter((card)=>{
        if (card.laneKey !== 'behaviour_change') return true;
        return !/^areas?\s+[a-z](?:\s*,\s*[a-z])*(?:\s*(?:and|&)\s*[a-z])?(?:\b|[.:;-])/i.test(card.title.trim());
    });
}
function removeEvidenceReferencePainPointCards(cards) {
    return cards.filter((card)=>{
        if (card.laneKey !== 'pain_point') return true;
        const value = `${card.title} ${card.body}`.trim();
        if (!/\bE-\d{3,}\b/i.test(value)) return true;
        return value.replace(/\bE-\d{3,}\b/gi, '').replace(/[,\s.;:[\]()]+/g, '').trim() !== '';
    });
}
function stripOpportunityTraceText(card) {
    if (card.laneKey !== 'opportunities' && card.laneKey !== 'opportunities_lane') return card;
    const stripTrace = (value)=>value.replace(/(?:\s+|\n)*Trace:\s*OPP-\d{3,}(?:\s*\/\s*(?:OPP-)?\d{3,})*\.?\s*$/i, '').trim();
    return {
        ...card,
        title: stripTrace(card.title),
        body: stripTrace(card.body)
    };
}
function stripRollupText(card) {
    const prefix = card.laneKey === 'user_need' ? 'UN' : card.laneKey === 'pain_point' ? 'PP' : null;
    if (!prefix) return card;
    const pattern = new RegExp(`\\s*\\[Rolls up\\s+((?:${prefix}-\\d{3,})(?:\\s*,\\s*${prefix}-\\d{3,})*)\\]?\\s*$`, 'i');
    const match = card.title.match(pattern);
    if (!match) return card;
    const rollupCodes = match[1].match(new RegExp(`\\b${prefix}-\\d{3,}\\b`, 'g')) ?? [];
    return {
        ...card,
        title: card.title.slice(0, match.index).trim(),
        derivedFromIds: Array.from(new Set([
            ...card.derivedFromIds ?? [],
            ...rollupCodes
        ]))
    };
}
function stripBehaviourChangeEvidenceBasis(card) {
    if (card.laneKey !== 'behaviour_change') return card;
    const evidencePattern = /\s*Evidence basis[^.?!]*(?:UN|PP)-\d{3,}[^.?!]*[.?!]?/i;
    const match = card.title.match(evidencePattern);
    if (!match) return card;
    const evidenceText = match[0];
    const evidenceCodes = evidenceText.match(/\b(?:UN|PP)-\d{3,}\b/g) ?? [];
    return {
        ...card,
        title: card.title.replace(evidencePattern, '').replace(/\s{2,}/g, ' ').trim(),
        derivedFromIds: Array.from(new Set([
            ...card.derivedFromIds ?? [],
            ...evidenceCodes
        ]))
    };
}
function stripSuccessMeasureReferenceText(card) {
    if (card.laneKey !== 'success_measure') return card;
    const pattern = /(?:^|\s+)((?:PP-\d{3,})(?:\s*,\s*PP-\d{3,})*)\.?\s*$/i;
    const match = card.title.match(pattern);
    if (!match) return card;
    const evidenceCodes = match[1].match(/\bPP-\d{3,}\b/g) ?? [];
    return {
        ...card,
        title: card.title.slice(0, match.index).trim(),
        derivedFromIds: Array.from(new Set([
            ...card.derivedFromIds ?? [],
            ...evidenceCodes
        ]))
    };
}
/**
 * Normalize one embedded child blueprint and recurse into grandchildren so L3
 * trees get the same lane/card migrations as L2 (embedded docs must never keep
 * a rootDocument pointer).
 */ function normalizeChildTreeNode(child, parent) {
    const childBaseLanes = pickBaseLanes(child);
    const childLanes = childBaseLanes.map((defaultLane)=>{
        const existingLane = (child.lanes ?? []).find((lane)=>lane.key === defaultLane.key);
        return existingLane ? {
            ...defaultLane,
            ...existingLane,
            title: defaultLane.title,
            order: defaultLane.order,
            visible: shouldForceLaneVisible(defaultLane.key) ? "TURBOPACK unreachable" : existingLane.visible ?? defaultLane.visible,
            collapsed: existingLane.collapsed ?? false
        } : {
            ...defaultLane
        };
    });
    const normalizedChildCards = removeEvidenceReferencePainPointCards(removeAreaReferenceBehaviourChangeCards(migrateStandaloneBehaviourChangeRollupCards(expandMergedTypedTraceableCards(child.cards ?? []).map(sanitizeTypedTraceableLaneCard).map(stripOpportunityTraceText).map(stripRollupText).map(stripBehaviourChangeEvidenceBasis).map(stripSuccessMeasureReferenceText))));
    const nestedChildren = (child.childBlueprints ?? []).map((nested)=>normalizeChildTreeNode(nested, child));
    return {
        ...child,
        childBlueprints: nestedChildren,
        rootDocument: null,
        activeBlueprintId: child.blueprint.id,
        rootBlueprintId: child.rootBlueprintId ?? child.blueprint.id,
        storyboardImages: child.storyboardImages ?? [],
        storyboardVisible: child.storyboardVisible ?? true,
        storyboardCollapsed: child.storyboardCollapsed ?? false,
        cardLinks: child.cardLinks ?? [],
        evidence: child.evidence ?? [],
        opportunities: child.opportunities ?? [],
        solutions: child.solutions ?? [],
        assumptions: child.assumptions ?? [],
        strategicGoals: child.strategicGoals ?? [],
        outcomes: child.outcomes ?? [],
        stepLinks: child.stepLinks ?? [],
        requirements: child.requirements ?? [],
        apiContracts: child.apiContracts ?? [],
        uiScaffolds: child.uiScaffolds ?? [],
        traceabilityCounters: child.traceabilityCounters ?? {},
        systemOutcomes: child.systemOutcomes ?? [],
        behaviourOutcomes: child.behaviourOutcomes ?? [],
        serviceOutcomes: child.serviceOutcomes ?? [],
        lanes: childLanes,
        cards: normalizedChildCards
    };
}
function normalizeState(state) {
    const lanesByKey = new Map(state.lanes.map((lane)=>[
            lane.key,
            lane
        ]));
    const baseLanes = pickBaseLanes(state);
    // Build the base normalized state first (backward-compat field defaults)
    const base = {
        ...state,
        childBlueprints: (state.childBlueprints ?? []).map((child)=>normalizeChildTreeNode(child, state)),
        rootDocument: state.rootDocument ?? null,
        activeBlueprintId: state.activeBlueprintId ?? state.blueprint.id,
        rootBlueprintId: state.rootBlueprintId ?? state.blueprint.id,
        storyboardImages: state.storyboardImages ?? [],
        storyboardVisible: state.storyboardVisible ?? true,
        storyboardCollapsed: state.storyboardCollapsed ?? false,
        cardLinks: state.cardLinks ?? [],
        evidence: state.evidence ?? [],
        opportunities: state.opportunities ?? [],
        solutions: state.solutions ?? [],
        assumptions: state.assumptions ?? [],
        strategicGoals: state.strategicGoals ?? [],
        outcomes: state.outcomes ?? [],
        // Backward compat: new arrays added post-initial release
        stepLinks: state.stepLinks ?? [],
        requirements: state.requirements ?? [],
        apiContracts: state.apiContracts ?? [],
        uiScaffolds: state.uiScaffolds ?? [],
        // Backward compat: existing blueprints in localStorage won't have this field
        traceabilityCounters: state.traceabilityCounters ?? {},
        lanes: baseLanes.map((defaultLane)=>{
            const existingLane = lanesByKey.get(defaultLane.key);
            return existingLane ? {
                ...defaultLane,
                ...existingLane,
                title: defaultLane.title,
                order: defaultLane.order,
                visible: shouldForceLaneVisible(defaultLane.key) ? "TURBOPACK unreachable" : existingLane.visible ?? defaultLane.visible,
                collapsed: existingLane.collapsed ?? false
            } : {
                ...defaultLane
            };
        })
    };
    // Backfill traceability codes for any stage/step/card that was loaded without one.
    // This covers seed data and blueprints imported before codes were introduced.
    // Entities that already have a code are skipped — codes are never overwritten.
    let counters = {
        ...base.traceabilityCounters
    };
    const stages = base.stages.map((stage)=>{
        if (stage.traceabilityCode) return stage;
        const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('ST', counters);
        counters = updatedCounters;
        return {
            ...stage,
            traceabilityCode: code
        };
    });
    const steps = base.steps.map((step)=>{
        if (step.traceabilityCode) return step;
        const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('SS', counters);
        counters = updatedCounters;
        return {
            ...step,
            traceabilityCode: code
        };
    });
    const cards = removeEvidenceReferencePainPointCards(removeAreaReferenceBehaviourChangeCards(migrateStandaloneBehaviourChangeRollupCards(expandMergedTypedTraceableCards(base.cards).map((originalCard)=>{
        const card = stripBehaviourChangeEvidenceBasis(stripRollupText(stripOpportunityTraceText(sanitizeTypedTraceableLaneCard(originalCard))));
        const normalizedCard = stripSuccessMeasureReferenceText(card);
        if (normalizedCard.traceabilityCode) return normalizedCard;
        const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLanePrefix"])(normalizedCard.laneKey);
        const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])(prefix, counters);
        counters = updatedCounters;
        return {
            ...normalizedCard,
            traceabilityCode: code
        };
    }))));
    return {
        ...base,
        lanes: base.lanes,
        stages,
        steps,
        cards,
        traceabilityCounters: counters
    };
}
function emptyBlueprint() {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const ts = now();
    return {
        blueprint: {
            id,
            serviceName: 'Untitled Blueprint',
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
        activeBlueprintId: id,
        rootBlueprintId: id,
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
function pickDocumentState(state) {
    const bp = state.blueprint;
    if (!bp) {
        return pickDocumentState(emptyBlueprint());
    }
    return {
        blueprint: bp,
        stages: state.stages,
        steps: state.steps,
        lanes: state.lanes,
        childBlueprints: state.childBlueprints ?? [],
        rootDocument: state.rootDocument ?? null,
        activeBlueprintId: state.activeBlueprintId ?? bp.id,
        rootBlueprintId: state.rootBlueprintId ?? bp.id,
        cards: state.cards,
        storyboardImages: state.storyboardImages,
        storyboardVisible: state.storyboardVisible,
        storyboardCollapsed: state.storyboardCollapsed,
        cardLinks: state.cardLinks,
        evidence: state.evidence,
        opportunities: state.opportunities,
        solutions: state.solutions,
        assumptions: state.assumptions,
        strategicGoals: state.strategicGoals ?? [],
        outcomes: state.outcomes ?? [],
        systemOutcomes: state.systemOutcomes ?? [],
        behaviourOutcomes: state.behaviourOutcomes ?? [],
        serviceOutcomes: state.serviceOutcomes ?? [],
        stepLinks: state.stepLinks ?? [],
        requirements: state.requirements ?? [],
        apiContracts: state.apiContracts ?? [],
        uiScaffolds: state.uiScaffolds ?? [],
        traceabilityCounters: state.traceabilityCounters
    };
}
/**
 * Fold an open journey drill-down into the root snapshot so embedded `childBlueprints`
 * match the live active level. Without this, localStorage would keep stale nested
 * copies under parents in `rootDocument` while edits only exist on the active leaf.
 */ function collapseDocumentStackToRoot(state, depth = 0) {
    if (depth > 32) {
        console.warn('[service-blueprint] Journey drill stack exceeded safe depth; opening root view only.');
        const doc = pickDocumentState(state);
        const rootId = doc.rootBlueprintId ?? doc.blueprint.id;
        return cloneDocumentState({
            ...doc,
            rootDocument: null,
            activeBlueprintId: rootId,
            rootBlueprintId: rootId
        });
    }
    if (!state.rootDocument) {
        return cloneDocumentState({
            ...pickDocumentState(state),
            rootDocument: null
        });
    }
    const leaf = cloneDocumentState(pickDocumentState(state));
    const embeddedLeaf = cloneDocumentState({
        ...leaf,
        rootDocument: null,
        activeBlueprintId: leaf.blueprint.id,
        rootBlueprintId: leaf.rootBlueprintId ?? leaf.blueprint.id
    });
    const parent = cloneDocumentState(state.rootDocument);
    const merged = cloneDocumentState({
        ...parent,
        childBlueprints: upsertChildBlueprint(parent, embeddedLeaf),
        activeBlueprintId: parent.blueprint.id,
        rootBlueprintId: parent.rootBlueprintId ?? parent.blueprint.id,
        rootDocument: parent.rootDocument ?? null
    });
    return collapseDocumentStackToRoot(merged, depth + 1);
}
function cloneDocumentState(state) {
    const bp = state.blueprint;
    if (!bp) {
        return cloneDocumentState(emptyBlueprint());
    }
    return {
        blueprint: {
            ...bp
        },
        stages: (state.stages ?? []).map((stage)=>({
                ...stage
            })),
        steps: (state.steps ?? []).map((step)=>({
                ...step
            })),
        lanes: (state.lanes ?? []).map((lane)=>({
                ...lane
            })),
        childBlueprints: (state.childBlueprints ?? []).map((child)=>cloneDocumentState(child)),
        rootDocument: state.rootDocument ? cloneDocumentState(state.rootDocument) : null,
        activeBlueprintId: state.activeBlueprintId ?? bp.id,
        rootBlueprintId: state.rootBlueprintId ?? bp.id,
        cards: (state.cards ?? []).map((card)=>({
                ...card,
                tags: [
                    ...card.tags ?? []
                ],
                // derivedFromIds is optional — must be cloned explicitly to avoid shared array references
                derivedFromIds: card.derivedFromIds ? [
                    ...card.derivedFromIds
                ] : undefined
            })),
        storyboardImages: (state.storyboardImages ?? []).map((img)=>({
                ...img
            })),
        storyboardVisible: state.storyboardVisible ?? true,
        storyboardCollapsed: state.storyboardCollapsed ?? false,
        cardLinks: (state.cardLinks ?? []).map((l)=>({
                ...l
            })),
        evidence: (state.evidence ?? []).map((e)=>({
                ...e
            })),
        opportunities: (state.opportunities ?? []).map((o)=>({
                ...o,
                sourceCardIds: [
                    ...o.sourceCardIds ?? []
                ],
                affectedStages: [
                    ...o.affectedStages ?? []
                ],
                affectedSteps: [
                    ...o.affectedSteps ?? []
                ],
                // derivedFromIds is optional — must be cloned explicitly
                derivedFromIds: o.derivedFromIds ? [
                    ...o.derivedFromIds
                ] : undefined
            })),
        solutions: (state.solutions ?? []).map((s)=>({
                ...s
            })),
        assumptions: (state.assumptions ?? []).map((a)=>({
                ...a
            })),
        strategicGoals: (state.strategicGoals ?? []).map((g)=>({
                ...g
            })),
        outcomes: (state.outcomes ?? []).map((o)=>({
                ...o
            })),
        systemOutcomes: (state.systemOutcomes ?? []).map((s)=>({
                ...s,
                goalIds: [
                    ...s.goalIds ?? []
                ],
                relatedAreaCodes: [
                    ...s.relatedAreaCodes ?? []
                ]
            })),
        behaviourOutcomes: (state.behaviourOutcomes ?? []).map((b)=>({
                ...b,
                actors: [
                    ...b.actors ?? []
                ],
                relatedAreaCodes: [
                    ...b.relatedAreaCodes ?? []
                ]
            })),
        serviceOutcomes: (state.serviceOutcomes ?? []).map((so)=>({
                ...so,
                behIds: [
                    ...so.behIds ?? []
                ],
                relatedAreaCodes: [
                    ...so.relatedAreaCodes ?? []
                ]
            })),
        stepLinks: (state.stepLinks ?? []).map((l)=>({
                ...l
            })),
        requirements: (state.requirements ?? []).map((r)=>({
                ...r,
                derivedFromIds: [
                    ...r.derivedFromIds ?? []
                ],
                sourceCardIds: [
                    ...r.sourceCardIds ?? []
                ]
            })),
        apiContracts: (state.apiContracts ?? []).map((a)=>({
                ...a,
                derivedFromIds: [
                    ...a.derivedFromIds ?? []
                ],
                sourceCardIds: [
                    ...a.sourceCardIds ?? []
                ]
            })),
        uiScaffolds: (state.uiScaffolds ?? []).map((u)=>({
                ...u,
                derivedFromIds: [
                    ...u.derivedFromIds ?? []
                ],
                sourceCardIds: [
                    ...u.sourceCardIds ?? []
                ]
            })),
        // Shallow clone — values are primitives (numbers), no deep clone needed
        traceabilityCounters: {
            ...state.traceabilityCounters ?? {}
        }
    };
}
function isSameDocument(a, b) {
    try {
        return JSON.stringify(a) === JSON.stringify(b);
    } catch  {
        return false;
    }
}
/** Collapse drill-down for disk / library / share; never throws — falls back to a safe document. */ function toPersistableSnapshot(state) {
    try {
        return collapseDocumentStackToRoot(state);
    } catch (e) {
        console.warn('[service-blueprint] Could not flatten journey stack for save; saving a safe slice.', e);
        try {
            const doc = pickDocumentState(state);
            return cloneDocumentState({
                ...doc,
                rootDocument: null,
                activeBlueprintId: state.rootBlueprintId ?? state.blueprint?.id ?? doc.blueprint.id,
                rootBlueprintId: state.rootBlueprintId ?? state.blueprint?.id ?? doc.blueprint.id
            });
        } catch  {
            return normalizeState(emptyBlueprint());
        }
    }
}
/**
 * Disk and hydrate always use the lifecycle root: no drill pointer, and
 * activeBlueprintId must match the top-level blueprint so reload never opens
 * on a stale child id without the parent chain in memory.
 */ function coercePersistedRootPointers(state) {
    const rootId = state.blueprint?.id;
    if (!rootId) return cloneDocumentState(state);
    return cloneDocumentState({
        ...state,
        rootDocument: null,
        activeBlueprintId: rootId,
        rootBlueprintId: rootId
    });
}
function persist(state) {
    const collapsed = toPersistableSnapshot(state);
    const rootId = collapsed.blueprint?.id;
    if (!rootId) {
        console.warn('[service-blueprint] persist: missing blueprint id, skip save');
        return;
    }
    const forDisk = coercePersistedRootPointers(collapsed);
    saveToStorage({
        blueprint: forDisk.blueprint,
        stages: forDisk.stages,
        steps: forDisk.steps,
        lanes: forDisk.lanes,
        childBlueprints: forDisk.childBlueprints ?? [],
        rootDocument: forDisk.rootDocument ?? null,
        activeBlueprintId: forDisk.activeBlueprintId ?? forDisk.blueprint.id,
        rootBlueprintId: forDisk.rootBlueprintId ?? forDisk.blueprint.id,
        cards: forDisk.cards,
        storyboardImages: forDisk.storyboardImages,
        storyboardVisible: forDisk.storyboardVisible,
        storyboardCollapsed: forDisk.storyboardCollapsed,
        cardLinks: forDisk.cardLinks,
        evidence: forDisk.evidence,
        opportunities: forDisk.opportunities,
        solutions: forDisk.solutions,
        assumptions: forDisk.assumptions,
        strategicGoals: forDisk.strategicGoals ?? [],
        outcomes: forDisk.outcomes ?? [],
        systemOutcomes: forDisk.systemOutcomes ?? [],
        behaviourOutcomes: forDisk.behaviourOutcomes ?? [],
        serviceOutcomes: forDisk.serviceOutcomes ?? [],
        stepLinks: forDisk.stepLinks ?? [],
        requirements: forDisk.requirements ?? [],
        apiContracts: forDisk.apiContracts ?? [],
        uiScaffolds: forDisk.uiScaffolds ?? [],
        traceabilityCounters: forDisk.traceabilityCounters
    });
}
const useBlueprintStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        ...emptyBlueprint(),
        _hydrated: false,
        _past: [],
        _future: [],
        canUndo: false,
        canRedo: false,
        selectedCardId: null,
        readOnly: false,
        hydrate: ()=>{
            const raw = loadFromStorage() ?? emptyBlueprint();
            // normalizeState backfills any missing traceability codes (among other defaults).
            // If a previous session saved an incompatible import shape, recover to a
            // blank board instead of leaving the app on a client-side blank screen.
            let normalized;
            try {
                normalized = normalizeState(raw);
            } catch (error) {
                console.error('Failed to hydrate saved blueprint state', error);
                normalized = normalizeState(emptyBlueprint());
                saveToStorage(normalized);
            }
            const collapsed = toPersistableSnapshot(normalized);
            const atRoot = coercePersistedRootPointers(collapsed);
            try {
                set({
                    ...cloneDocumentState(atRoot),
                    _hydrated: true,
                    _past: [],
                    _future: [],
                    canUndo: false,
                    canRedo: false,
                    // Clear read-only in case the user is returning from /view/[id]
                    // and should regain editing on their own board.
                    readOnly: false
                });
            } catch (error) {
                console.error('Failed to clone hydrated blueprint', error);
                const recovered = normalizeState(emptyBlueprint());
                set({
                    ...cloneDocumentState(recovered),
                    _hydrated: true,
                    _past: [],
                    _future: [],
                    canUndo: false,
                    canRedo: false,
                    readOnly: false
                });
                persist(recovered);
                return;
            }
            // Persist the normalized state so backfilled codes survive the next page load
            persist(atRoot);
        },
        undo: ()=>{
            set((s)=>{
                if (s._past.length === 0) return s;
                const previous = cloneDocumentState(s._past[s._past.length - 1]);
                const current = cloneDocumentState(pickDocumentState(s));
                const nextPast = s._past.slice(0, -1);
                const nextFuture = [
                    current,
                    ...s._future
                ].slice(0, HISTORY_LIMIT);
                persist(previous);
                return {
                    ...s,
                    ...previous,
                    _past: nextPast,
                    _future: nextFuture,
                    canUndo: nextPast.length > 0,
                    canRedo: nextFuture.length > 0
                };
            });
        },
        redo: ()=>{
            set((s)=>{
                if (s._future.length === 0) return s;
                const nextDocument = cloneDocumentState(s._future[0]);
                const current = cloneDocumentState(pickDocumentState(s));
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                const nextFuture = s._future.slice(1);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: nextFuture,
                    canUndo: nextPast.length > 0,
                    canRedo: nextFuture.length > 0
                };
            });
        },
        setServiceName: (name)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    blueprint: {
                        ...current.blueprint,
                        serviceName: name,
                        updatedAt: now()
                    }
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        setDescription: (desc)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    blueprint: {
                        ...current.blueprint,
                        description: desc,
                        updatedAt: now()
                    }
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        flushLocalPersistence: ()=>{
            const collapsed = toPersistableSnapshot(pickDocumentState(get()));
            persist(coercePersistedRootPointers(collapsed));
        },
        setPublishedShareId: (publishedShareId)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const bp = {
                    ...current.blueprint,
                    updatedAt: ts
                };
                if (publishedShareId) {
                    bp.publishedShareId = publishedShareId;
                } else {
                    delete bp.publishedShareId;
                }
                const nextDocument = cloneDocumentState({
                    ...current,
                    blueprint: bp
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        newBlueprint: ()=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const fresh = cloneDocumentState(emptyBlueprint());
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(fresh);
                return {
                    ...s,
                    ...fresh,
                    _hydrated: true,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        loadBlueprint: (state, opts)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const normalized = normalizeState(state);
                // Merge source provenance counters (SRC_PDF, SRC_CSV, …) from the import pipeline
                if (opts?.srcRefCounters) {
                    normalized.traceabilityCounters = {
                        ...normalized.traceabilityCounters,
                        ...opts.srcRefCounters
                    };
                }
                // Merge semantic traceability counters (ST, SS, PP, …) assigned during normalization
                if (opts?.traceabilityCounters) {
                    normalized.traceabilityCounters = {
                        ...normalized.traceabilityCounters,
                        ...opts.traceabilityCounters
                    };
                }
                const loaded = cloneDocumentState(normalized);
                if (isSameDocument(current, loaded)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(loaded);
                return {
                    ...s,
                    ...loaded,
                    _hydrated: true,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        loadSharedSnapshot: (state)=>{
            // Viewer-only path. Intentionally does NOT call persist() — the user's own
            // localStorage must remain untouched so navigating back to "/" restores
            // their saved work via hydrate().
            set((s)=>{
                const normalized = normalizeState(state);
                const loaded = cloneDocumentState(normalized);
                return {
                    ...s,
                    ...loaded,
                    _hydrated: true,
                    _past: [],
                    _future: [],
                    canUndo: false,
                    canRedo: false,
                    readOnly: true
                };
            });
        },
        replaceActiveBlueprint: (state)=>{
            set((s)=>{
                const inChildView = isChildJourneyOpen(s);
                // Root view → behave like loadBlueprint (full replace)
                if (!inChildView) {
                    const current = cloneDocumentState(pickDocumentState(s));
                    const normalized = normalizeState(state);
                    const loaded = cloneDocumentState(normalized);
                    if (isSameDocument(current, loaded)) return s;
                    const nextPast = [
                        ...s._past,
                        current
                    ].slice(-HISTORY_LIMIT);
                    persist(loaded);
                    return {
                        ...s,
                        ...loaded,
                        _hydrated: true,
                        _past: nextPast,
                        _future: [],
                        canUndo: nextPast.length > 0,
                        canRedo: false
                    };
                }
                // Child view → replace only this child's content. Keep:
                //   - rootDocument + rootBlueprintId (the parent chain)
                //   - activeBlueprintId (so parent's journey link stays valid)
                // Drop this child's own descendants (childBlueprints)
                // per user's choice: new import invalidates any L3 children.
                const current = cloneDocumentState(pickDocumentState(s));
                const normalized = normalizeState(state);
                const imported = cloneDocumentState(normalized);
                const next = {
                    // keep the current child's identity so parent spans still reference it
                    blueprint: {
                        ...imported.blueprint,
                        id: s.blueprint.id
                    },
                    stages: imported.stages,
                    steps: imported.steps,
                    lanes: imported.lanes,
                    cards: imported.cards,
                    storyboardImages: imported.storyboardImages,
                    storyboardVisible: imported.storyboardVisible,
                    storyboardCollapsed: imported.storyboardCollapsed,
                    cardLinks: imported.cardLinks,
                    evidence: imported.evidence,
                    opportunities: imported.opportunities,
                    solutions: imported.solutions,
                    assumptions: imported.assumptions,
                    strategicGoals: imported.strategicGoals ?? [],
                    outcomes: imported.outcomes ?? [],
                    systemOutcomes: imported.systemOutcomes ?? [],
                    behaviourOutcomes: imported.behaviourOutcomes ?? [],
                    serviceOutcomes: imported.serviceOutcomes ?? [],
                    stepLinks: imported.stepLinks,
                    requirements: imported.requirements,
                    apiContracts: imported.apiContracts,
                    uiScaffolds: imported.uiScaffolds,
                    traceabilityCounters: imported.traceabilityCounters,
                    // wipe this child's own descendants — they belonged to old data
                    childBlueprints: [],
                    // preserve hierarchy
                    rootDocument: s.rootDocument,
                    rootBlueprintId: s.rootBlueprintId,
                    activeBlueprintId: s.blueprint.id
                };
                const cloned = cloneDocumentState(next);
                if (isSameDocument(current, cloned)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(cloned);
                return {
                    ...s,
                    ...cloned,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        assignTraceabilityCode: (entityId, entityType)=>{
            let assigned = null;
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                let counters = {
                    ...current.traceabilityCounters
                };
                if (entityType === 'card') {
                    const card = current.cards.find((c)=>c.id === entityId);
                    if (!card || card.traceabilityCode) return s;
                    const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLanePrefix"])(card.laneKey);
                    const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])(prefix, counters);
                    counters = updatedCounters;
                    assigned = code;
                    const nextDocument = cloneDocumentState({
                        ...current,
                        cards: current.cards.map((c)=>c.id === entityId ? {
                                ...c,
                                traceabilityCode: code
                            } : c),
                        traceabilityCounters: counters
                    });
                    const nextPast = [
                        ...s._past,
                        current
                    ].slice(-HISTORY_LIMIT);
                    persist(nextDocument);
                    return {
                        ...s,
                        ...nextDocument,
                        _past: nextPast,
                        _future: [],
                        canUndo: true,
                        canRedo: false
                    };
                }
                if (entityType === 'stage') {
                    const stage = current.stages.find((st)=>st.id === entityId);
                    if (!stage || stage.traceabilityCode) return s;
                    const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('ST', counters);
                    counters = updatedCounters;
                    assigned = code;
                    const nextDocument = cloneDocumentState({
                        ...current,
                        stages: current.stages.map((st)=>st.id === entityId ? {
                                ...st,
                                traceabilityCode: code
                            } : st),
                        traceabilityCounters: counters
                    });
                    const nextPast = [
                        ...s._past,
                        current
                    ].slice(-HISTORY_LIMIT);
                    persist(nextDocument);
                    return {
                        ...s,
                        ...nextDocument,
                        _past: nextPast,
                        _future: [],
                        canUndo: true,
                        canRedo: false
                    };
                }
                if (entityType === 'step') {
                    const step = current.steps.find((st)=>st.id === entityId);
                    if (!step || step.traceabilityCode) return s;
                    const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('SS', counters);
                    counters = updatedCounters;
                    assigned = code;
                    const nextDocument = cloneDocumentState({
                        ...current,
                        steps: current.steps.map((st)=>st.id === entityId ? {
                                ...st,
                                traceabilityCode: code
                            } : st),
                        traceabilityCounters: counters
                    });
                    const nextPast = [
                        ...s._past,
                        current
                    ].slice(-HISTORY_LIMIT);
                    persist(nextDocument);
                    return {
                        ...s,
                        ...nextDocument,
                        _past: nextPast,
                        _future: [],
                        canUndo: true,
                        canRedo: false
                    };
                }
                if (entityType === 'evidence') {
                    const ev = current.evidence.find((e)=>e.id === entityId);
                    if (!ev || ev.traceabilityCode) return s;
                    const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('EVD', counters);
                    counters = updatedCounters;
                    assigned = code;
                    const nextDocument = cloneDocumentState({
                        ...current,
                        evidence: current.evidence.map((e)=>e.id === entityId ? {
                                ...e,
                                traceabilityCode: code
                            } : e),
                        traceabilityCounters: counters
                    });
                    const nextPast = [
                        ...s._past,
                        current
                    ].slice(-HISTORY_LIMIT);
                    persist(nextDocument);
                    return {
                        ...s,
                        ...nextDocument,
                        _past: nextPast,
                        _future: [],
                        canUndo: true,
                        canRedo: false
                    };
                }
                if (entityType === 'opportunity') {
                    const opp = current.opportunities.find((o)=>o.id === entityId);
                    if (!opp || opp.traceabilityCode) return s;
                    const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('OPP', counters);
                    assigned = code;
                    const nextDocument = cloneDocumentState({
                        ...current,
                        opportunities: current.opportunities.map((o)=>o.id === entityId ? {
                                ...o,
                                traceabilityCode: code
                            } : o),
                        traceabilityCounters: updatedCounters
                    });
                    const nextPast = [
                        ...s._past,
                        current
                    ].slice(-HISTORY_LIMIT);
                    persist(nextDocument);
                    return {
                        ...s,
                        ...nextDocument,
                        _past: nextPast,
                        _future: [],
                        canUndo: true,
                        canRedo: false
                    };
                }
                return s;
            });
            return assigned;
        },
        loadSeed: ()=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const seed = cloneDocumentState((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$seed$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSeedBlueprint"])());
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(seed);
                return {
                    ...s,
                    ...seed,
                    _hydrated: true,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        // Stages
        addStage: (title)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const maxOrder = s.stages.reduce((m, st)=>Math.max(m, st.order), -1);
                const { code: stCode, updatedCounters: countersAfterSt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('ST', current.traceabilityCounters);
                const stage = {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                    blueprintId: s.blueprint.id,
                    title,
                    outcome: '',
                    order: maxOrder + 1,
                    traceabilityCode: stCode
                };
                const nextDocument = cloneDocumentState({
                    ...current,
                    stages: [
                        ...current.stages,
                        stage
                    ],
                    blueprint: {
                        ...current.blueprint,
                        updatedAt: now()
                    },
                    traceabilityCounters: countersAfterSt
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        insertStageAfter: (stageId, title)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const anchor = current.stages.find((st)=>st.id === stageId);
                if (!anchor) return s;
                const insertOrder = anchor.order + 1;
                const { code: stCode, updatedCounters: countersAfterSt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('ST', current.traceabilityCounters);
                const newStage = {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                    blueprintId: s.blueprint.id,
                    title,
                    outcome: '',
                    order: insertOrder,
                    phase: anchor.phase,
                    traceabilityCode: stCode
                };
                // Seed a default step so the new stage matches the "1 step per stage"
                // invariant the rest of the board assumes (otherwise showStepHeaders
                // flips on and an empty step-header row appears across every stage).
                const { code: ssCode, updatedCounters: countersAfterSs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('SS', countersAfterSt);
                const newStep = {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                    blueprintId: s.blueprint.id,
                    stageId: newStage.id,
                    title,
                    order: 0,
                    traceabilityCode: ssCode
                };
                const shifted = current.stages.map((st)=>st.order >= insertOrder ? {
                        ...st,
                        order: st.order + 1
                    } : st);
                const nextDocument = cloneDocumentState({
                    ...current,
                    stages: [
                        ...shifted,
                        newStage
                    ],
                    steps: [
                        ...current.steps,
                        newStep
                    ],
                    blueprint: {
                        ...current.blueprint,
                        updatedAt: now()
                    },
                    traceabilityCounters: countersAfterSs
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        updateStage: (id, patch)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    stages: current.stages.map((st)=>st.id === id ? {
                            ...st,
                            ...patch
                        } : st),
                    blueprint: {
                        ...current.blueprint,
                        updatedAt: now()
                    }
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        deleteStage: (id)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const stepIds = s.steps.filter((st)=>st.stageId === id).map((st)=>st.id);
                const stepIdSet = new Set(stepIds);
                const removedCardIds = new Set(current.cards.filter((c)=>stepIdSet.has(c.stepId)).map((c)=>c.id));
                const nextDocument = cloneDocumentState({
                    ...current,
                    stages: current.stages.filter((st)=>st.id !== id),
                    steps: current.steps.filter((st)=>st.stageId !== id),
                    cards: current.cards.filter((c)=>!stepIdSet.has(c.stepId)),
                    storyboardImages: current.storyboardImages.filter((img)=>!stepIdSet.has(img.stepId)),
                    cardLinks: current.cardLinks.filter((l)=>!removedCardIds.has(l.sourceCardId) && !removedCardIds.has(l.targetCardId)),
                    evidence: current.evidence.filter((e)=>!removedCardIds.has(e.cardId)),
                    stepLinks: current.stepLinks.filter((l)=>!stepIdSet.has(l.sourceStepId) && !stepIdSet.has(l.targetStepId)),
                    blueprint: {
                        ...current.blueprint,
                        updatedAt: now()
                    }
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        reorderStage: (id, newOrder)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const sorted = [
                    ...s.stages
                ].sort((a, b)=>a.order - b.order);
                const idx = sorted.findIndex((st)=>st.id === id);
                if (idx === -1) return s;
                const [moved] = sorted.splice(idx, 1);
                sorted.splice(newOrder, 0, moved);
                const reordered = sorted.map((st, i)=>({
                        ...st,
                        order: i
                    }));
                const nextDocument = cloneDocumentState({
                    ...current,
                    stages: reordered,
                    blueprint: {
                        ...current.blueprint,
                        updatedAt: now()
                    }
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        // Steps
        addStep: (stageId, title)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const stepsInStage = s.steps.filter((st)=>st.stageId === stageId);
                const maxOrder = stepsInStage.reduce((m, st)=>Math.max(m, st.order), -1);
                const { code: ssCode, updatedCounters: countersAfterSs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('SS', current.traceabilityCounters);
                const step = {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                    blueprintId: s.blueprint.id,
                    stageId,
                    title,
                    order: maxOrder + 1,
                    traceabilityCode: ssCode
                };
                const nextDocument = cloneDocumentState({
                    ...current,
                    steps: [
                        ...current.steps,
                        step
                    ],
                    blueprint: {
                        ...current.blueprint,
                        updatedAt: now()
                    },
                    traceabilityCounters: countersAfterSs
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        updateStep: (id, patch)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    steps: current.steps.map((st)=>st.id === id ? {
                            ...st,
                            ...patch
                        } : st),
                    blueprint: {
                        ...current.blueprint,
                        updatedAt: now()
                    }
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        deleteStep: (id)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const removedCardIds = new Set(current.cards.filter((c)=>c.stepId === id).map((c)=>c.id));
                const nextDocument = cloneDocumentState({
                    ...current,
                    steps: current.steps.filter((st)=>st.id !== id),
                    cards: current.cards.filter((c)=>c.stepId !== id),
                    storyboardImages: current.storyboardImages.filter((img)=>img.stepId !== id),
                    cardLinks: current.cardLinks.filter((l)=>!removedCardIds.has(l.sourceCardId) && !removedCardIds.has(l.targetCardId)),
                    evidence: current.evidence.filter((e)=>!removedCardIds.has(e.cardId)),
                    stepLinks: current.stepLinks.filter((l)=>l.sourceStepId !== id && l.targetStepId !== id),
                    blueprint: {
                        ...current.blueprint,
                        updatedAt: now()
                    }
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        reorderStep: (id, newOrder)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const step = s.steps.find((st)=>st.id === id);
                if (!step) return s;
                const stepsInStage = [
                    ...s.steps.filter((st)=>st.stageId === step.stageId)
                ].sort((a, b)=>a.order - b.order);
                const idx = stepsInStage.findIndex((st)=>st.id === id);
                if (idx === -1) return s;
                const [moved] = stepsInStage.splice(idx, 1);
                stepsInStage.splice(newOrder, 0, moved);
                const reordered = stepsInStage.map((st, i)=>({
                        ...st,
                        order: i
                    }));
                const otherSteps = s.steps.filter((st)=>st.stageId !== step.stageId);
                const nextDocument = cloneDocumentState({
                    ...current,
                    steps: [
                        ...otherSteps,
                        ...reordered
                    ],
                    blueprint: {
                        ...current.blueprint,
                        updatedAt: now()
                    }
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        // Lanes
        toggleLane: (key)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    lanes: current.lanes.map((l)=>l.key === key ? {
                            ...l,
                            visible: !l.visible
                        } : l)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        setLaneVisibility: (key, visible)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    lanes: current.lanes.map((l)=>l.key === key ? {
                            ...l,
                            visible
                        } : l)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        toggleLaneCollapsed: (key)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    lanes: current.lanes.map((l)=>l.key === key ? {
                            ...l,
                            collapsed: !l.collapsed
                        } : l)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        // Cards
        addCard: (stepId, laneKey, title, body = '', tags = [])=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const step = s.steps.find((st)=>st.id === stepId);
                if (!step) return s;
                const cellCards = s.cards.filter((c)=>c.stepId === stepId && c.laneKey === laneKey);
                const maxOrder = cellCards.reduce((m, c)=>Math.max(m, c.order), -1);
                const ts = now();
                const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLanePrefix"])(laneKey);
                const { code: cardCode, updatedCounters: countersAfterCard } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])(prefix, current.traceabilityCounters);
                const card = {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                    blueprintId: s.blueprint.id,
                    stageId: step.stageId,
                    stepId,
                    laneKey,
                    title,
                    body,
                    order: maxOrder + 1,
                    tags,
                    sourceFile: '',
                    sourceSheet: '',
                    sourceRow: null,
                    sourceRef: '',
                    createdAt: ts,
                    updatedAt: ts,
                    traceabilityCode: cardCode
                };
                const nextDocument = cloneDocumentState({
                    ...current,
                    cards: [
                        ...current.cards,
                        card
                    ],
                    blueprint: {
                        ...current.blueprint,
                        updatedAt: ts
                    },
                    traceabilityCounters: countersAfterCard
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        updateCard: (id, patch)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const timestamp = now();
                const nextDocument = cloneDocumentState({
                    ...current,
                    cards: current.cards.map((c)=>c.id === id ? {
                            ...c,
                            ...patch,
                            updatedAt: timestamp
                        } : c),
                    blueprint: {
                        ...current.blueprint,
                        updatedAt: timestamp
                    }
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        deleteCard: (id)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    cards: current.cards.filter((c)=>c.id !== id),
                    cardLinks: current.cardLinks.filter((l)=>l.sourceCardId !== id && l.targetCardId !== id),
                    evidence: current.evidence.filter((e)=>e.cardId !== id),
                    blueprint: {
                        ...current.blueprint,
                        updatedAt: now()
                    }
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        moveCard: (cardId, toStepId, toLaneKey, toOrder)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const step = s.steps.find((st)=>st.id === toStepId);
                if (!step) return s;
                const timestamp = now();
                const nextDocument = cloneDocumentState({
                    ...current,
                    cards: current.cards.map((c)=>c.id === cardId ? {
                            ...c,
                            stepId: toStepId,
                            stageId: step.stageId,
                            laneKey: toLaneKey,
                            order: toOrder,
                            updatedAt: timestamp
                        } : c),
                    blueprint: {
                        ...current.blueprint,
                        updatedAt: timestamp
                    }
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        reorderCard: (cardId, newOrder)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const card = s.cards.find((c)=>c.id === cardId);
                if (!card) return s;
                const cellCards = [
                    ...s.cards.filter((c)=>c.stepId === card.stepId && c.laneKey === card.laneKey)
                ].sort((a, b)=>a.order - b.order);
                const idx = cellCards.findIndex((c)=>c.id === cardId);
                if (idx === -1) return s;
                const [moved] = cellCards.splice(idx, 1);
                cellCards.splice(newOrder, 0, moved);
                const reorderedIds = new Map(cellCards.map((c, i)=>[
                        c.id,
                        i
                    ]));
                const timestamp = now();
                const nextDocument = cloneDocumentState({
                    ...current,
                    cards: current.cards.map((c)=>{
                        const newIdx = reorderedIds.get(c.id);
                        return newIdx !== undefined ? {
                            ...c,
                            order: newIdx,
                            updatedAt: timestamp
                        } : c;
                    }),
                    blueprint: {
                        ...current.blueprint,
                        updatedAt: timestamp
                    }
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        // Storyboard
        addStoryboardImage: (stepId, dataUrl)=>{
            let newId = '';
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const step = s.steps.find((st)=>st.id === stepId);
                if (!step) return s;
                const ts = now();
                newId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
                const nextImages = [
                    ...current.storyboardImages,
                    {
                        id: newId,
                        blueprintId: s.blueprint.id,
                        stepId,
                        dataUrl,
                        createdAt: ts,
                        updatedAt: ts
                    }
                ];
                const nextDocument = cloneDocumentState({
                    ...current,
                    storyboardImages: nextImages,
                    blueprint: {
                        ...current.blueprint,
                        updatedAt: ts
                    }
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
            return newId;
        },
        updateStoryboardImage: (id, dataUrl)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                if (!current.storyboardImages.some((img)=>img.id === id)) return s;
                const ts = now();
                const nextImages = current.storyboardImages.map((img)=>img.id === id ? {
                        ...img,
                        dataUrl,
                        updatedAt: ts
                    } : img);
                const nextDocument = cloneDocumentState({
                    ...current,
                    storyboardImages: nextImages,
                    blueprint: {
                        ...current.blueprint,
                        updatedAt: ts
                    }
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        removeStoryboardImage: (id)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                if (!current.storyboardImages.some((img)=>img.id === id)) return s;
                const nextDocument = cloneDocumentState({
                    ...current,
                    storyboardImages: current.storyboardImages.filter((img)=>img.id !== id),
                    blueprint: {
                        ...current.blueprint,
                        updatedAt: now()
                    }
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        toggleStoryboardVisible: ()=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    storyboardVisible: !current.storyboardVisible
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        toggleStoryboardCollapsed: ()=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    storyboardCollapsed: !current.storyboardCollapsed
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: nextPast.length > 0,
                    canRedo: false
                };
            });
        },
        // Card selection (ephemeral)
        selectCard: (id)=>set((s)=>({
                    ...s,
                    selectedCardId: id
                })),
        // Card links
        addCardLink: (sourceCardId, targetCardId, relation)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const link = {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                    blueprintId: s.blueprint.id,
                    sourceCardId,
                    targetCardId,
                    relation,
                    createdAt: ts
                };
                const nextDocument = cloneDocumentState({
                    ...current,
                    cardLinks: [
                        ...current.cardLinks,
                        link
                    ]
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        deleteCardLink: (id)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    cardLinks: current.cardLinks.filter((l)=>l.id !== id)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        // Evidence
        addEvidence: (cardId, quote, source, evidenceType, strength)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const { code: evdCode, updatedCounters: countersAfterEvd } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('EVD', current.traceabilityCounters);
                const ev = {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                    blueprintId: s.blueprint.id,
                    cardId,
                    quote,
                    source,
                    evidenceType,
                    strength,
                    createdAt: ts,
                    updatedAt: ts,
                    traceabilityCode: evdCode
                };
                const nextDocument = cloneDocumentState({
                    ...current,
                    evidence: [
                        ...current.evidence,
                        ev
                    ],
                    traceabilityCounters: countersAfterEvd
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        updateEvidence: (id, patch)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const nextDocument = cloneDocumentState({
                    ...current,
                    evidence: current.evidence.map((e)=>e.id === id ? {
                            ...e,
                            ...patch,
                            updatedAt: ts
                        } : e)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        deleteEvidence: (id)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    evidence: current.evidence.filter((e)=>e.id !== id)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        // Opportunities
        addOpportunity: (data)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const { code: oppCode, updatedCounters: countersAfterOpp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('OPP', current.traceabilityCounters);
                const origin = data.origin ?? (data.sourceCardIds.length > 0 ? 'generated' : 'user');
                const opp = {
                    id,
                    blueprintId: s.blueprint.id,
                    ...data,
                    origin,
                    createdAt: ts,
                    updatedAt: ts,
                    traceabilityCode: oppCode
                };
                const nextDocument = cloneDocumentState({
                    ...current,
                    opportunities: [
                        ...current.opportunities,
                        opp
                    ],
                    traceabilityCounters: countersAfterOpp
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
            return id;
        },
        updateOpportunity: (id, patch)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const nextDocument = cloneDocumentState({
                    ...current,
                    opportunities: current.opportunities.map((o)=>o.id === id ? {
                            ...o,
                            ...patch,
                            updatedAt: ts
                        } : o)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        deleteOpportunity: (id)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    opportunities: current.opportunities.filter((o)=>o.id !== id)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        // Solutions
        addSolution: (data)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const solution = {
                    id,
                    blueprintId: s.blueprint.id,
                    ...data,
                    createdAt: ts,
                    updatedAt: ts
                };
                const nextDocument = cloneDocumentState({
                    ...current,
                    solutions: [
                        ...current.solutions,
                        solution
                    ]
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
            return id;
        },
        updateSolution: (id, patch)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const nextDocument = cloneDocumentState({
                    ...current,
                    solutions: current.solutions.map((sol)=>sol.id === id ? {
                            ...sol,
                            ...patch,
                            updatedAt: ts
                        } : sol)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        deleteSolution: (id)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    solutions: current.solutions.filter((sol)=>sol.id !== id),
                    assumptions: current.assumptions.filter((a)=>a.solutionId !== id)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        // Assumptions
        addAssumption: (data)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const assumption = {
                    id,
                    blueprintId: s.blueprint.id,
                    ...data,
                    createdAt: ts,
                    updatedAt: ts
                };
                const nextDocument = cloneDocumentState({
                    ...current,
                    assumptions: [
                        ...current.assumptions,
                        assumption
                    ]
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
            return id;
        },
        updateAssumption: (id, patch)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const nextDocument = cloneDocumentState({
                    ...current,
                    assumptions: current.assumptions.map((a)=>a.id === id ? {
                            ...a,
                            ...patch,
                            updatedAt: ts
                        } : a)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        deleteAssumption: (id)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    assumptions: current.assumptions.filter((a)=>a.id !== id)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        // Strategic Goals
        addStrategicGoal: (data)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const goal = {
                    id,
                    blueprintId: s.blueprint.id,
                    ...data,
                    createdAt: ts,
                    updatedAt: ts
                };
                const nextDocument = cloneDocumentState({
                    ...current,
                    strategicGoals: [
                        ...current.strategicGoals,
                        goal
                    ]
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
            return id;
        },
        updateStrategicGoal: (id, patch)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const nextDocument = cloneDocumentState({
                    ...current,
                    strategicGoals: current.strategicGoals.map((g)=>g.id === id ? {
                            ...g,
                            ...patch,
                            updatedAt: ts
                        } : g)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        deleteStrategicGoal: (id)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const orphanedOutcomeIds = new Set(current.outcomes.filter((o)=>o.goalId === id).map((o)=>o.id));
                const nextDocument = cloneDocumentState({
                    ...current,
                    strategicGoals: current.strategicGoals.filter((g)=>g.id !== id),
                    outcomes: current.outcomes.filter((o)=>o.goalId !== id),
                    opportunities: current.opportunities.map((o)=>orphanedOutcomeIds.has(o.outcomeId ?? '') ? {
                            ...o,
                            outcomeId: undefined
                        } : o)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        assignOpportunityToGoal: (opportunityId, goalId)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const nextDocument = cloneDocumentState({
                    ...current,
                    opportunities: current.opportunities.map((o)=>o.id === opportunityId ? {
                            ...o,
                            goalId,
                            updatedAt: ts
                        } : o)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        // Outcomes
        addOutcome: (data)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const outcome = {
                    id,
                    blueprintId: s.blueprint.id,
                    ...data,
                    createdAt: ts,
                    updatedAt: ts
                };
                const nextDocument = cloneDocumentState({
                    ...current,
                    outcomes: [
                        ...current.outcomes,
                        outcome
                    ]
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
            return id;
        },
        updateOutcome: (id, patch)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const nextDocument = cloneDocumentState({
                    ...current,
                    outcomes: current.outcomes.map((o)=>o.id === id ? {
                            ...o,
                            ...patch,
                            updatedAt: ts
                        } : o)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        deleteOutcome: (id)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    outcomes: current.outcomes.filter((o)=>o.id !== id),
                    opportunities: current.opportunities.map((o)=>o.outcomeId === id ? {
                            ...o,
                            outcomeId: undefined
                        } : o)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        assignOpportunityToOutcome: (opportunityId, outcomeId)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const nextDocument = cloneDocumentState({
                    ...current,
                    opportunities: current.opportunities.map((o)=>o.id === opportunityId ? {
                            ...o,
                            outcomeId,
                            updatedAt: ts
                        } : o)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        // StepLinks
        addStepLink: (sourceStepId, targetStepId)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const { code: nsCode, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('NS', current.traceabilityCounters);
                const link = {
                    id,
                    blueprintId: s.blueprint.id,
                    sourceStepId,
                    targetStepId,
                    traceabilityCode: nsCode,
                    createdAt: ts
                };
                const nextDocument = cloneDocumentState({
                    ...current,
                    stepLinks: [
                        ...current.stepLinks,
                        link
                    ],
                    traceabilityCounters: updatedCounters
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
            return id;
        },
        deleteStepLink: (id)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    stepLinks: current.stepLinks.filter((l)=>l.id !== id)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        // Requirements
        addRequirement: (data)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const { code: reqCode, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('REQ', current.traceabilityCounters);
                const req = {
                    id,
                    blueprintId: s.blueprint.id,
                    ...data,
                    traceabilityCode: reqCode,
                    createdAt: ts,
                    updatedAt: ts
                };
                const nextDocument = cloneDocumentState({
                    ...current,
                    requirements: [
                        ...current.requirements,
                        req
                    ],
                    traceabilityCounters: updatedCounters
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
            return id;
        },
        updateRequirement: (id, patch)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const nextDocument = cloneDocumentState({
                    ...current,
                    requirements: current.requirements.map((r)=>r.id === id ? {
                            ...r,
                            ...patch,
                            updatedAt: ts
                        } : r)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        deleteRequirement: (id)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    requirements: current.requirements.filter((r)=>r.id !== id)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        // ApiContracts
        addApiContract: (data)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const { code: apiCode, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('API', current.traceabilityCounters);
                const contract = {
                    id,
                    blueprintId: s.blueprint.id,
                    ...data,
                    traceabilityCode: apiCode,
                    createdAt: ts,
                    updatedAt: ts
                };
                const nextDocument = cloneDocumentState({
                    ...current,
                    apiContracts: [
                        ...current.apiContracts,
                        contract
                    ],
                    traceabilityCounters: updatedCounters
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
            return id;
        },
        updateApiContract: (id, patch)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const nextDocument = cloneDocumentState({
                    ...current,
                    apiContracts: current.apiContracts.map((a)=>a.id === id ? {
                            ...a,
                            ...patch,
                            updatedAt: ts
                        } : a)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        deleteApiContract: (id)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    apiContracts: current.apiContracts.filter((a)=>a.id !== id)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        // UiScaffolds
        addUiScaffold: (data)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const { code: uiCode, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('UI', current.traceabilityCounters);
                const scaffold = {
                    id,
                    blueprintId: s.blueprint.id,
                    ...data,
                    traceabilityCode: uiCode,
                    createdAt: ts,
                    updatedAt: ts
                };
                const nextDocument = cloneDocumentState({
                    ...current,
                    uiScaffolds: [
                        ...current.uiScaffolds,
                        scaffold
                    ],
                    traceabilityCounters: updatedCounters
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
            return id;
        },
        updateUiScaffold: (id, patch)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const ts = now();
                const nextDocument = cloneDocumentState({
                    ...current,
                    uiScaffolds: current.uiScaffolds.map((u)=>u.id === id ? {
                            ...u,
                            ...patch,
                            updatedAt: ts
                        } : u)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        deleteUiScaffold: (id)=>{
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const nextDocument = cloneDocumentState({
                    ...current,
                    uiScaffolds: current.uiScaffolds.filter((u)=>u.id !== id)
                });
                if (isSameDocument(current, nextDocument)) return s;
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
        },
        // Downstream generation
        generateRequirementFromOpportunity: (opportunityId)=>{
            let newId = null;
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                let opp = current.opportunities.find((o)=>o.id === opportunityId);
                if (!opp) return s;
                let counters = {
                    ...current.traceabilityCounters
                };
                let updatedOpportunities = current.opportunities;
                // Ensure the opportunity has a traceability code before deriving from it
                if (!opp.traceabilityCode) {
                    const { code, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceabilityCode"])('OPP', counters);
                    counters = updatedCounters;
                    opp = {
                        ...opp,
                        traceabilityCode: code
                    };
                    updatedOpportunities = current.opportunities.map((o)=>o.id === opportunityId ? opp : o);
                }
                const { requirement, updatedCounters: countersAfterReq } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$downstream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequirementFromOpportunity"])(opp, counters, s.blueprint.id);
                newId = requirement.id;
                const nextDocument = cloneDocumentState({
                    ...current,
                    opportunities: updatedOpportunities,
                    requirements: [
                        ...current.requirements,
                        requirement
                    ],
                    traceabilityCounters: countersAfterReq
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
            return newId;
        },
        generateApiContractFromRequirement: (requirementId)=>{
            let newId = null;
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const req = current.requirements.find((r)=>r.id === requirementId);
                if (!req) return s;
                const { apiContract, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$downstream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createApiContractFromRequirement"])(req, current.traceabilityCounters, s.blueprint.id);
                newId = apiContract.id;
                const nextDocument = cloneDocumentState({
                    ...current,
                    apiContracts: [
                        ...current.apiContracts,
                        apiContract
                    ],
                    traceabilityCounters: updatedCounters
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
            return newId;
        },
        generateUiScaffoldFromRequirementAndApi: (requirementId, apiContractId)=>{
            let newId = null;
            set((s)=>{
                const current = cloneDocumentState(pickDocumentState(s));
                const req = current.requirements.find((r)=>r.id === requirementId);
                const api = current.apiContracts.find((a)=>a.id === apiContractId);
                if (!req || !api) return s;
                const { uiScaffold, updatedCounters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$src$2f$lib$2f$traceability$2f$downstream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUiScaffoldFromRequirementAndApi"])(req, api, current.traceabilityCounters, s.blueprint.id);
                newId = uiScaffold.id;
                const nextDocument = cloneDocumentState({
                    ...current,
                    uiScaffolds: [
                        ...current.uiScaffolds,
                        uiScaffold
                    ],
                    traceabilityCounters: updatedCounters
                });
                const nextPast = [
                    ...s._past,
                    current
                ].slice(-HISTORY_LIMIT);
                persist(nextDocument);
                return {
                    ...s,
                    ...nextDocument,
                    _past: nextPast,
                    _future: [],
                    canUndo: true,
                    canRedo: false
                };
            });
            return newId;
        },
        // OST panel (ephemeral)
        // Strategic alignment overlay (ephemeral)
        // Opportunities panel (ephemeral)
        // Helpers
        getPersistableDocument: ()=>coercePersistedRootPointers(toPersistableSnapshot(pickDocumentState(get()))),
        getLiveDocumentSnapshot: ()=>pickDocumentState(get()),
        getStepsForStage: (stageId)=>{
            return get().steps.filter((st)=>st.stageId === stageId).sort((a, b)=>a.order - b.order);
        },
        getCardsForCell: (stepId, laneKey)=>{
            return get().cards.filter((c)=>c.stepId === stepId && c.laneKey === laneKey).sort((a, b)=>a.order - b.order);
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/defra-design/service-mapping-tool/src/store/library-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLibraryStore",
    ()=>useLibraryStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/defra-design/service-mapping-tool/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const LIBRARY_KEY = 'service-blueprint-library';
function loadLibrary() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(LIBRARY_KEY);
        if (!raw) return [];
        return JSON.parse(raw);
    } catch  {
        return [];
    }
}
function saveLibrary(entries) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(LIBRARY_KEY, JSON.stringify(entries));
    } catch  {
    /* quota exceeded */ }
}
const useLibraryStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$defra$2d$design$2f$service$2d$mapping$2d$tool$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        entries: [],
        hydrate: ()=>{
            set({
                entries: loadLibrary()
            });
        },
        save: (state)=>{
            const entry = {
                id: state.blueprint.id,
                serviceName: state.blueprint.serviceName,
                savedAt: new Date().toISOString(),
                stageCount: state.stages.length,
                stepCount: state.steps.length,
                cardCount: state.cards.length,
                state
            };
            const existing = get().entries;
            const next = existing.some((e)=>e.id === entry.id) ? existing.map((e)=>e.id === entry.id ? entry : e) : [
                entry,
                ...existing
            ];
            saveLibrary(next);
            set({
                entries: next
            });
            return entry;
        },
        remove: (id)=>{
            const next = get().entries.filter((e)=>e.id !== id);
            saveLibrary(next);
            set({
                entries: next
            });
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_defra-design_service-mapping-tool_src_store_d2098abd._.js.map