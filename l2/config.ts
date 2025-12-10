/// <mls shortName="config" project="102022" enhancement="_blank" />

import { Aura } from '/_102020_/l2/aura';
export var aura: Aura | undefined;

if (!aura) {
  aura = new Aura();
  aura
    .open()
    .listen('develpoment');
}