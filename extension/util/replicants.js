import { nodecg } from './nodecg.js';
// Wrapper for replicants that have a default (based on schema).
function hasDefault(name, namespace) {
    if (namespace) {
        return nodecg.Replicant(name, namespace);
    }
    return nodecg.Replicant(name);
}
// Wrapper for replicants that don't have a default (based on schema).
function hasNoDefault(name, namespace) {
    if (namespace) {
        return nodecg.Replicant(name, namespace);
    }
    return nodecg.Replicant(name);
}
/**
 * This is where you can declare all of your replicants to import easily into other files,
 * and to make sure they have any correct settings on startup.
 */
export const exampleReplicant = hasDefault('exampleReplicant');
export const displaySoundReplicant = hasDefault('displaySound');
export const setupInformationArrayReplicant = hasDefault('setupInformationArray');
export const startSoonReplicant = hasDefault('startSoon');
export const runDataActiveRunReplicant = hasNoDefault('runDataActiveRun', 'nodecg-speedcontrol');
export const runDataActiveRunSurroundingReplicant = hasNoDefault('runDataActiveRunSurrounding', 'nodecg-speedcontrol');
export const twitchAPIDataReplicant = hasNoDefault('twitchAPIData', 'nodecg-speedcontrol');
