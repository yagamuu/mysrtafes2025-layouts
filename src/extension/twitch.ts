import type { Schemas } from '../types/index.js';
import { nodecg } from './util/nodecg.js';
import { twitch } from './util/twitch.js';
import { twitchAPIDataReplicant,  runDataActiveRunSurroundingReplicant } from './util/replicants.js';

const enableAutoMarker = nodecg.bundleConfig.enableAutoMarker;
const autoMarkerDescription = nodecg.bundleConfig.autoMarkerDescription;
const clientId = nodecg.bundleConfig.twitchClientId;

const executeMaker = async () => {
  if (!enableAutoMarker) { return; }

  const accessToken = twitchAPIDataReplicant.value?.accessToken;
  const channelID = twitchAPIDataReplicant.value?.channelID;

  if (!accessToken || !clientId || !channelID) { return; }

  const twitchApi = twitch({ clientId: clientId, bearer: accessToken });

  try {
    await twitchApi.checkMarkers(channelID, autoMarkerDescription);
    nodecg.log.info('Done Twitch Maker');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) { 
    nodecg.log.error('Error checking markers');
  }
};

runDataActiveRunSurroundingReplicant.on('change', async (newVal: Schemas.Speedcontrol.RunDataActiveRunSurrounding.RunDataActiveRunSurrounding | undefined, oldVal: Schemas.Speedcontrol.RunDataActiveRunSurrounding.RunDataActiveRunSurrounding | undefined) => {
  if (newVal && oldVal?.current !== newVal.current) {
    await executeMaker();
  }
});
