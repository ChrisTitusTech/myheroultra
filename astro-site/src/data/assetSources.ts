export type AssetSourceType =
  | 'character-image'
  | 'skill-image'
  | 'banner-image'
  | 'ui-image';

export interface AssetSource {
  id: string;
  file: string;
  sourceUrl: string;
  sourceName: string;
  assetType: AssetSourceType;
  lastChecked: string;
  usageNote: string;
}

// Add one record here for every externally sourced asset committed to src/assets.
export const assetSources: AssetSource[] = [];
