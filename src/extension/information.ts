import type { Schemas } from '../types/index.js';
import { nodecg } from './util/nodecg.js';
import { setupInformationArrayReplicant, runDataActiveRunReplicant } from './util/replicants.js';
import { v4 as uuid } from 'uuid';

function parseLine(line: string): string[] {
  return line.match(/"(.*?)"/g)?.map(item => item.replace(/"/g, '')) || [];
}

const createInformation = (text: string): void => {
  if (!setupInformationArrayReplicant.value) { return; }

  setupInformationArrayReplicant.value.push({
    id: uuid(),
    text,
  });

  nodecg.log.info('Add information');
};

const updateInformation = (information: Schemas.SetupInformation.SetupInformation): void => {
  if (!setupInformationArrayReplicant.value) { return; }

  const informationIndex = setupInformationArrayReplicant.value.findIndex(
    (informationRep) => informationRep.id === information.id,
  );

  if (informationIndex < -1) { return; }

  setupInformationArrayReplicant.value[informationIndex] = information;

  nodecg.log.info('Update information');
};

const deleteInformation = (id: string): void => {
  if (!setupInformationArrayReplicant.value) { return; }

  setupInformationArrayReplicant.value = setupInformationArrayReplicant.value.filter(
    (information) => information.id !== id,
  );

  nodecg.log.info('Delete information');
};

const automaticRestoreInformation = (runData: Schemas.Speedcontrol.RunData.RunData): void => {
  if (!setupInformationArrayReplicant.value) { return; }

  const setupInformationRaw = runData.customData.setupInformation;

  if (!setupInformationRaw) { return; }

  const informations = parseLine(setupInformationRaw).filter((information) => information !== '');

  if (informations.length === 0) { return; }

  setupInformationArrayReplicant.value = [];

  informations.map((information) => createInformation(information));

  nodecg.log.info('Done Automatic Restore information');
};

nodecg.listenFor('createInformation', (data, ack) => {
  createInformation(data.text);

  if (ack && !ack.handled) {
    ack(null);
  }
});

nodecg.listenFor('updateInformation', (data, ack) => {
  updateInformation(data);

  if (ack && !ack.handled) {
    ack(null);
  }
});

nodecg.listenFor('deleteInformation', (data, ack) => {
  deleteInformation(data.id);

  if (ack && !ack.handled) {
    ack(null);
  }
});

runDataActiveRunReplicant.on('change', (newVal: Schemas.Speedcontrol.RunData.RunDataActiveRun, oldVal: Schemas.Speedcontrol.RunData.RunDataActiveRun) => {
  if (newVal && oldVal?.id !== newVal.id) {
    automaticRestoreInformation(newVal);
  }
});
