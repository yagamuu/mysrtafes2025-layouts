import type NodeCG from '@nodecg/types';
import type { Schemas } from '../../types/index.js';
import { nodecg } from './nodecg.js';

// Wrapper for replicants that have a default (based on schema).
function hasDefault<T>(name: string, namespace?: string) {
  if (namespace) {
    return nodecg.Replicant<T>(name, namespace) as unknown as NodeCG.default.ServerReplicantWithSchemaDefault<T>;
  }
  return nodecg.Replicant<T>(name) as unknown as NodeCG.default.ServerReplicantWithSchemaDefault<T>;
}
// Wrapper for replicants that don't have a default (based on schema).
function hasNoDefault<T>(name: string, namespace?: string) {
  if (namespace) {
    return nodecg.Replicant<T>(name, namespace) as unknown as NodeCG.default.ServerReplicant<T>;
  }
  return nodecg.Replicant<T>(name) as NodeCG.default.ServerReplicant<T>;
}

/**
 * This is where you can declare all of your replicants to import easily into other files,
 * and to make sure they have any correct settings on startup.
 */
export const exampleReplicant = hasDefault<Schemas.ExampleReplicant>('exampleReplicant');

export const displaySoundReplicant = hasDefault<Schemas.DisplaySound>('displaySound');
export const setupInformationArrayReplicant = hasDefault<Schemas.SetupInformation.SetupInformationArray>('setupInformationArray');
export const startSoonReplicant = hasDefault<Schemas.StartSoon>('startSoon');

export const runDataActiveRunReplicant = hasNoDefault<Schemas.Speedcontrol.RunData.RunDataActiveRun>('runDataActiveRun', 'nodecg-speedcontrol');
export const runDataActiveRunSurroundingReplicant = hasNoDefault<Schemas.Speedcontrol.RunDataActiveRunSurrounding.RunDataActiveRunSurrounding>('runDataActiveRunSurrounding', 'nodecg-speedcontrol');
export const twitchAPIDataReplicant = hasNoDefault<Schemas.Speedcontrol.TwitchAPIData.TwitchAPIData>('twitchAPIData', 'nodecg-speedcontrol');
