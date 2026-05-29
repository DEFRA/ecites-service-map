import { v4 as uuid } from 'uuid';
import type { Stage, Step, SubStep } from './types';

interface EcitesStepDef {
  title: string;
  subSteps: string[];
}

interface EcitesStageDef {
  title: string;
  steps?: EcitesStepDef[];
}

/** eCITES lifecycle structure (titles only — reference numbers omitted). */
export const ECITES_LIFECYCLE: EcitesStageDef[] = [
  {
    title: 'Aware',
    steps: [
      {
        title: 'Communication',
        subSteps: [
          'Comms to applicants',
          'Comms to customs agents & trade related organisations',
          'Comms to border force officers',
          'Comms to 3rd country CITES Management Authorities',
        ],
      },
      {
        title: 'Entry points',
        subSteps: [
          'Apply for a CITES permit',
          'Defra - Other',
          'Other gov.uk services',
          'Non gov.uk organisations or people',
          'Organic search',
        ],
      },
      {
        title: 'Guidance',
        subSteps: [
          'Apply for a CITES permit guidance',
          'Border force CITES guidance',
          'CITES secretariat guidance',
          'Customs agents and trade organisation guidance',
          'APHA CITES team guidance',
          'Guidance for teams adjacent to APHA CITES',
        ],
      },
    ],
  },
  { title: 'Prepare' },
  {
    title: 'Use',
    steps: [
      {
        title: 'Third country permits',
        subSteps: ['Apply for a 3rd country CITES permit'],
      },
    ],
  },
  { title: 'Leave' },
];

export interface EcitesLifecycleEntities {
  stages: Stage[];
  steps: Step[];
  subSteps: SubStep[];
}

export function buildEcitesLifecycleEntities(blueprintId: string): EcitesLifecycleEntities {
  const stages: Stage[] = [];
  const steps: Step[] = [];
  const subSteps: SubStep[] = [];

  ECITES_LIFECYCLE.forEach((stageDef, stageOrder) => {
    const stageId = uuid();
    stages.push({
      id: stageId,
      blueprintId,
      title: stageDef.title,
      outcome: '',
      order: stageOrder,
    });

    (stageDef.steps ?? []).forEach((stepDef, stepOrder) => {
      const stepId = uuid();
      steps.push({
        id: stepId,
        blueprintId,
        stageId,
        title: stepDef.title,
        order: stepOrder,
      });

      stepDef.subSteps.forEach((subStepTitle, subStepOrder) => {
        subSteps.push({
          id: uuid(),
          blueprintId,
          stageId,
          stepId,
          title: subStepTitle,
          order: subStepOrder,
        });
      });
    });
  });

  return { stages, steps, subSteps };
}
