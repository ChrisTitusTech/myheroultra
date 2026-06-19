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

// One record is required for every externally sourced asset in src/assets.
export const assetSources: AssetSource[] = [
  {
    "id": "izuku-midoriya-artwork",
    "file": "/src/assets/characters/izuku-midoriya.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch001/GUI/FaceIcon/T_ui_com_cahraface_Ch001.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Izuku Midoriya roster artwork for an unofficial fan guide"
  },
  {
    "id": "izuku-midoriya-full-bullet-artwork",
    "file": "/src/assets/characters/izuku-midoriya-full-bullet.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch001/GUI/Variation/T_ui_Thumb_13_101_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Izuku Midoriya — Full Bullet roster artwork for an unofficial fan guide"
  },
  {
    "id": "izuku-midoriya-ofa-artwork",
    "file": "/src/assets/characters/izuku-midoriya-ofa.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch202/GUI/FaceIcon/T_ui_com_cahraface_Ch202.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Izuku Midoriya OFA roster artwork for an unofficial fan guide"
  },
  {
    "id": "katsuki-bakugo-artwork",
    "file": "/src/assets/characters/katsuki-bakugo.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch002/GUI/FaceIcon/T_ui_com_cahraface_Ch002.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Katsuki Bakugo roster artwork for an unofficial fan guide"
  },
  {
    "id": "katsuki-bakugo-machine-gun-artwork",
    "file": "/src/assets/characters/katsuki-bakugo-machine-gun.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch002/GUI/Variation/T_ui_Thumb_13_201_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Katsuki Bakugo — Machine Gun roster artwork for an unofficial fan guide"
  },
  {
    "id": "katsuki-bakugo-cluster-artwork",
    "file": "/src/assets/characters/katsuki-bakugo-cluster.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch002/GUI/Variation/T_ui_Thumb_13_202_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Katsuki Bakugo — Cluster roster artwork for an unofficial fan guide"
  },
  {
    "id": "ochaco-uraraka-artwork",
    "file": "/src/assets/characters/ochaco-uraraka.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch003/GUI/FaceIcon/T_ui_com_cahraface_Ch003.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Ochaco Uraraka roster artwork for an unofficial fan guide"
  },
  {
    "id": "ochaco-uraraka-zero-satellites-artwork",
    "file": "/src/assets/characters/ochaco-uraraka-zero-satellites.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch003/GUI/Variation/T_ui_Thumb_13_301_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Ochaco Uraraka — Zero Satellites roster artwork for an unofficial fan guide"
  },
  {
    "id": "tenya-iida-artwork",
    "file": "/src/assets/characters/tenya-iida.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch005/GUI/FaceIcon/T_ui_com_cahraface_Ch005.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Tenya Iida roster artwork for an unofficial fan guide"
  },
  {
    "id": "shoto-todoroki-artwork",
    "file": "/src/assets/characters/shoto-todoroki.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch004/GUI/FaceIcon/T_ui_com_cahraface_Ch004.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Shoto Todoroki roster artwork for an unofficial fan guide"
  },
  {
    "id": "shoto-todoroki-ice-fang-wind-flame-artwork",
    "file": "/src/assets/characters/shoto-todoroki-ice-fang-wind-flame.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch004/GUI/Variation/T_ui_Thumb_13_401_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Shoto Todoroki — Ice Fang Wind Flame roster artwork for an unofficial fan guide"
  },
  {
    "id": "tsuyu-asui-artwork",
    "file": "/src/assets/characters/tsuyu-asui.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch006/GUI/FaceIcon/T_ui_com_cahraface_Ch006.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Tsuyu Asui roster artwork for an unofficial fan guide"
  },
  {
    "id": "eijiro-kirishima-artwork",
    "file": "/src/assets/characters/eijiro-kirishima.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch008/GUI/FaceIcon/T_ui_com_cahraface_Ch008.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Eijiro Kirishima roster artwork for an unofficial fan guide"
  },
  {
    "id": "eijiro-kirishima-red-drive-artwork",
    "file": "/src/assets/characters/eijiro-kirishima-red-drive.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch008/GUI/Variation/T_ui_Thumb_13_801_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Eijiro Kirishima — Red Drive roster artwork for an unofficial fan guide"
  },
  {
    "id": "momo-yaoyorozu-artwork",
    "file": "/src/assets/characters/momo-yaoyorozu.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch010/GUI/FaceIcon/T_ui_com_cahraface_Ch010.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Momo Yaoyorozu roster artwork for an unofficial fan guide"
  },
  {
    "id": "fumikage-tokoyami-artwork",
    "file": "/src/assets/characters/fumikage-tokoyami.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch011/GUI/FaceIcon/T_ui_com_cahraface_Ch011.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Fumikage Tokoyami roster artwork for an unofficial fan guide"
  },
  {
    "id": "denki-kaminari-artwork",
    "file": "/src/assets/characters/denki-kaminari.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch007/GUI/FaceIcon/T_ui_com_cahraface_Ch007.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Denki Kaminari roster artwork for an unofficial fan guide"
  },
  {
    "id": "denki-kaminari-lightning-artwork",
    "file": "/src/assets/characters/denki-kaminari-lightning.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch007/GUI/Variation/T_ui_Thumb_13_701_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Denki Kaminari — Lightning roster artwork for an unofficial fan guide"
  },
  {
    "id": "neito-monoma-artwork",
    "file": "/src/assets/characters/neito-monoma.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch104/GUI/FaceIcon/T_ui_com_cahraface_Ch104.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Neito Monoma roster artwork for an unofficial fan guide"
  },
  {
    "id": "itsuka-kendo-artwork",
    "file": "/src/assets/characters/itsuka-kendo.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch046/GUI/FaceIcon/T_ui_com_cahraface_Ch046.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Itsuka Kendo roster artwork for an unofficial fan guide"
  },
  {
    "id": "itsuka-kendo-twin-palm-strike-artwork",
    "file": "/src/assets/characters/itsuka-kendo-twin-palm-strike.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch046/GUI/Variation/T_ui_Thumb_13_4601_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Itsuka Kendo — Twin Palm Strike roster artwork for an unofficial fan guide"
  },
  {
    "id": "ibara-shiozaki-artwork",
    "file": "/src/assets/characters/ibara-shiozaki.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch102/GUI/FaceIcon/T_ui_com_cahraface_Ch102.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Ibara Shiozaki roster artwork for an unofficial fan guide"
  },
  {
    "id": "mirio-togata-artwork",
    "file": "/src/assets/characters/mirio-togata.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch024/GUI/FaceIcon/T_ui_com_cahraface_Ch024.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Mirio Togata roster artwork for an unofficial fan guide"
  },
  {
    "id": "mirio-togata-sheer-counter-artwork",
    "file": "/src/assets/characters/mirio-togata-sheer-counter.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch024/GUI/Variation/T_ui_Thumb_13_2401_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Mirio Togata — Sheer Counter roster artwork for an unofficial fan guide"
  },
  {
    "id": "tamaki-amajiki-artwork",
    "file": "/src/assets/characters/tamaki-amajiki.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch026/GUI/FaceIcon/T_ui_com_cahraface_Ch026.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Tamaki Amajiki roster artwork for an unofficial fan guide"
  },
  {
    "id": "nejire-hado-artwork",
    "file": "/src/assets/characters/nejire-hado.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch025/GUI/FaceIcon/T_ui_com_cahraface_Ch025.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Nejire Hado roster artwork for an unofficial fan guide"
  },
  {
    "id": "nejire-hado-fairy-artwork",
    "file": "/src/assets/characters/nejire-hado-fairy.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch025/GUI/Variation/T_ui_Thumb_13_2501_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Nejire Hado — Fairy roster artwork for an unofficial fan guide"
  },
  {
    "id": "hitoshi-shinso-artwork",
    "file": "/src/assets/characters/hitoshi-shinso.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch105/GUI/FaceIcon/T_ui_com_cahraface_Ch105.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Hitoshi Shinso roster artwork for an unofficial fan guide"
  },
  {
    "id": "all-might-artwork",
    "file": "/src/assets/characters/all-might.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch012/GUI/FaceIcon/T_ui_com_cahraface_Ch012.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "All Might roster artwork for an unofficial fan guide"
  },
  {
    "id": "all-might-gatling-artwork",
    "file": "/src/assets/characters/all-might-gatling.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch012/GUI/Variation/T_ui_Thumb_13_1201_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "All Might — Gatling roster artwork for an unofficial fan guide"
  },
  {
    "id": "armored-all-might-artwork",
    "file": "/src/assets/characters/armored-all-might.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch200/GUI/FaceIcon/T_ui_com_cahraface_Ch200.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Armored All Might roster artwork for an unofficial fan guide"
  },
  {
    "id": "shota-aizawa-artwork",
    "file": "/src/assets/characters/shota-aizawa.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch013/GUI/FaceIcon/T_ui_com_cahraface_Ch013.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Shota Aizawa roster artwork for an unofficial fan guide"
  },
  {
    "id": "shota-aizawa-flow-runner-artwork",
    "file": "/src/assets/characters/shota-aizawa-flow-runner.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch013/GUI/Variation/T_ui_Thumb_13_1301_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Shota Aizawa — Flow Runner roster artwork for an unofficial fan guide"
  },
  {
    "id": "present-mic-artwork",
    "file": "/src/assets/characters/present-mic.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch109/GUI/FaceIcon/T_ui_com_cahraface_Ch109.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Present Mic roster artwork for an unofficial fan guide"
  },
  {
    "id": "present-mic-d-j-board-artwork",
    "file": "/src/assets/characters/present-mic-d-j-board.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch109/GUI/Variation/T_ui_Thumb_13_10901_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Present Mic — D.J. Board roster artwork for an unofficial fan guide"
  },
  {
    "id": "cementoss-artwork",
    "file": "/src/assets/characters/cementoss.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch101/GUI/FaceIcon/T_ui_com_cahraface_Ch101.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Cementoss roster artwork for an unofficial fan guide"
  },
  {
    "id": "endeavor-artwork",
    "file": "/src/assets/characters/endeavor.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch023/GUI/FaceIcon/T_ui_com_cahraface_Ch023.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Endeavor roster artwork for an unofficial fan guide"
  },
  {
    "id": "endeavor-inferno-fist-artwork",
    "file": "/src/assets/characters/endeavor-inferno-fist.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch023/GUI/Variation/T_ui_Thumb_13_2301_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Endeavor — Inferno Fist roster artwork for an unofficial fan guide"
  },
  {
    "id": "hawks-artwork",
    "file": "/src/assets/characters/hawks.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch043/GUI/FaceIcon/T_ui_com_cahraface_Ch043.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Hawks roster artwork for an unofficial fan guide"
  },
  {
    "id": "hawks-slicing-wind-artwork",
    "file": "/src/assets/characters/hawks-slicing-wind.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch043/GUI/Variation/T_ui_Thumb_13_4301_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Hawks — Slicing Wind roster artwork for an unofficial fan guide"
  },
  {
    "id": "mirko-artwork",
    "file": "/src/assets/characters/mirko.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch111/GUI/FaceIcon/T_ui_com_cahraface_Ch111.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Mirko roster artwork for an unofficial fan guide"
  },
  {
    "id": "star-and-stripe-artwork",
    "file": "/src/assets/characters/star-and-stripe.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch114/GUI/FaceIcon/T_ui_com_cahraface_Ch114.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Star and Stripe roster artwork for an unofficial fan guide"
  },
  {
    "id": "mt-lady-artwork",
    "file": "/src/assets/characters/mt-lady.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch100/GUI/FaceIcon/T_ui_com_cahraface_Ch100.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Mt. Lady roster artwork for an unofficial fan guide"
  },
  {
    "id": "tomura-shigaraki-artwork",
    "file": "/src/assets/characters/tomura-shigaraki.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch015/GUI/FaceIcon/T_ui_com_cahraface_Ch015.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Tomura Shigaraki roster artwork for an unofficial fan guide"
  },
  {
    "id": "tomura-shigaraki-catastrophe-artwork",
    "file": "/src/assets/characters/tomura-shigaraki-catastrophe.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch015/GUI/Variation/T_ui_Thumb_13_1501_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Tomura Shigaraki — Catastrophe roster artwork for an unofficial fan guide"
  },
  {
    "id": "tomura-shigaraki-thousand-hand-break-artwork",
    "file": "/src/assets/characters/tomura-shigaraki-thousand-hand-break.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch015/GUI/Variation/T_ui_Thumb_13_1502_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Tomura Shigaraki — Thousand-Hand Break roster artwork for an unofficial fan guide"
  },
  {
    "id": "all-for-one-artwork",
    "file": "/src/assets/characters/all-for-one.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch016/GUI/FaceIcon/T_ui_com_cahraface_Ch016.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "All For One roster artwork for an unofficial fan guide"
  },
  {
    "id": "all-for-one-factor-fusion-artwork",
    "file": "/src/assets/characters/all-for-one-factor-fusion.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch016/GUI/Variation/T_ui_Thumb_13_1601_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "All For One — Factor Fusion roster artwork for an unofficial fan guide"
  },
  {
    "id": "all-for-one-youth-age-artwork",
    "file": "/src/assets/characters/all-for-one-youth-age.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch201/GUI/FaceIcon/T_ui_com_cahraface_Ch201.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "All For One (Youth age) roster artwork for an unofficial fan guide"
  },
  {
    "id": "dabi-artwork",
    "file": "/src/assets/characters/dabi.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch017/GUI/FaceIcon/T_ui_com_cahraface_Ch017.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Dabi roster artwork for an unofficial fan guide"
  },
  {
    "id": "dabi-crazy-torch-artwork",
    "file": "/src/assets/characters/dabi-crazy-torch.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch017/GUI/Variation/T_ui_Thumb_13_1701_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Dabi — Crazy Torch roster artwork for an unofficial fan guide"
  },
  {
    "id": "himiko-toga-artwork",
    "file": "/src/assets/characters/himiko-toga.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch018/GUI/FaceIcon/T_ui_com_cahraface_Ch018.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Himiko Toga roster artwork for an unofficial fan guide"
  },
  {
    "id": "himiko-toga-sting-dance-artwork",
    "file": "/src/assets/characters/himiko-toga-sting-dance.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch018/GUI/Variation/T_ui_Thumb_13_1801_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Himiko Toga — Sting Dance roster artwork for an unofficial fan guide"
  },
  {
    "id": "twice-artwork",
    "file": "/src/assets/characters/twice.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch037/GUI/FaceIcon/T_ui_com_cahraface_Ch037.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Twice roster artwork for an unofficial fan guide"
  },
  {
    "id": "mr-compress-artwork",
    "file": "/src/assets/characters/mr-compress.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch038/GUI/FaceIcon/T_ui_com_cahraface_Ch038.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Mr. Compress roster artwork for an unofficial fan guide"
  },
  {
    "id": "kurogiri-artwork",
    "file": "/src/assets/characters/kurogiri.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch103/GUI/FaceIcon/T_ui_com_cahraface_Ch103.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Kurogiri roster artwork for an unofficial fan guide"
  },
  {
    "id": "lady-nagant-artwork",
    "file": "/src/assets/characters/lady-nagant.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch115/GUI/FaceIcon/T_ui_com_cahraface_Ch115.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Lady Nagant roster artwork for an unofficial fan guide"
  },
  {
    "id": "overhaul-artwork",
    "file": "/src/assets/characters/overhaul.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch034/GUI/FaceIcon/T_ui_com_cahraface_Ch034.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Overhaul roster artwork for an unofficial fan guide"
  },
  {
    "id": "overhaul-blighted-precipice-artwork",
    "file": "/src/assets/characters/overhaul-blighted-precipice.webp",
    "sourceUrl": "https://ultrarumble.com/assets/Character/Ch034/GUI/Variation/T_ui_Thumb_13_3401_S.png",
    "sourceName": "UltraRumble.com",
    "assetType": "character-image",
    "lastChecked": "2026-06-19",
    "usageNote": "Overhaul — Blighted Precipice roster artwork for an unofficial fan guide"
  }
];
