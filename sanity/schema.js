import { album } from "./schemas/albums";
import { song } from "./schemas/songs";
import blockContent from "./schemas/blockContent";
import fieldset from "./schemas/objects/fieldset";

export const schema = {
  types: [album, song, blockContent, fieldset],
}
