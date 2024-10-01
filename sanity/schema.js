import { album } from "./schemas/albums";
import { song } from "./schemas/songs";
import blockContent from "./schemas/blockContent";
import fieldset from "./schemas/objects/fieldset";
import { fpvideo } from "./schemas/frontpageVideo";

export const schema = {
  types: [album, song, blockContent, fieldset, fpvideo],
}
