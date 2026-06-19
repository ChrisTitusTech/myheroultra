import type { CharacterRole, SkillSlot } from './characters';

export interface CharacterRosterSeed {
  id: string;
  slug: string;
  name: string;
  combatant: string;
  battleStyle: string;
  isAlternative: boolean;
  role: CharacterRole;
  hp: number;
  imageFile: string;
  sourceImageUrl: string;
  sourceUrl: string;
  unlockMethod: string | null;
  skills: Array<[SkillSlot, string]>;
}

// Generated from the focused roster and character pages on UltraRumble.com.
export const characterRoster = [
  {
    "id": "izuku-midoriya",
    "slug": "izuku-midoriya",
    "name": "Izuku Midoriya",
    "combatant": "Izuku Midoriya",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Assault",
    "hp": 300,
    "imageFile": "izuku-midoriya.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch001/GUI/FaceIcon/T_ui_com_cahraface_Ch001.png",
    "sourceUrl": "https://ultrarumble.com/character/1",
    "unlockMethod": "Starter Character Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Delaware Smash Air Force"
      ],
      [
        "beta",
        "St. Louis Smash"
      ],
      [
        "gamma",
        "Blackwhip"
      ],
      [
        "special",
        "Carry to Safety"
      ]
    ]
  },
  {
    "id": "izuku-midoriya-full-bullet",
    "slug": "izuku-midoriya-full-bullet",
    "name": "Izuku Midoriya — Full Bullet",
    "combatant": "Izuku Midoriya",
    "battleStyle": "Full Bullet",
    "isAlternative": true,
    "role": "Strike",
    "hp": 300,
    "imageFile": "izuku-midoriya-full-bullet.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch001/GUI/Variation/T_ui_Thumb_13_101_S.png",
    "sourceUrl": "https://ultrarumble.com/character/1#Variant-1",
    "unlockMethod": "Purchase with a Ticket Season 3 Release2024-01-25 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Delaware Smash Full Bullet!"
      ],
      [
        "beta",
        "Manchester Smash!"
      ],
      [
        "gamma",
        "Ground Impact"
      ],
      [
        "special",
        "Carry to Safety"
      ]
    ]
  },
  {
    "id": "izuku-midoriya-ofa",
    "slug": "izuku-midoriya-ofa",
    "name": "Izuku Midoriya OFA",
    "combatant": "Izuku Midoriya OFA",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Rapid",
    "hp": 300,
    "imageFile": "izuku-midoriya-ofa.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch202/GUI/FaceIcon/T_ui_com_cahraface_Ch202.png",
    "sourceUrl": "https://ultrarumble.com/character/202",
    "unlockMethod": "Obtained from Rolls Season 13 Release2025-09-24 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Delaware Smash Airblast"
      ],
      [
        "beta",
        "Impact 45% Detroit Smash"
      ],
      [
        "gamma",
        "2nd Transmission"
      ],
      [
        "special",
        "Smoke Screen"
      ],
      [
        "special",
        "Fa Jin"
      ]
    ]
  },
  {
    "id": "katsuki-bakugo",
    "slug": "katsuki-bakugo",
    "name": "Katsuki Bakugo",
    "combatant": "Katsuki Bakugo",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Strike",
    "hp": 350,
    "imageFile": "katsuki-bakugo.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch002/GUI/FaceIcon/T_ui_com_cahraface_Ch002.png",
    "sourceUrl": "https://ultrarumble.com/character/2",
    "unlockMethod": "Obtained from the Special License. Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "AP Shot"
      ],
      [
        "beta",
        "Improvised Grenades"
      ],
      [
        "gamma",
        "Howitzer Impact"
      ],
      [
        "special",
        "Explosive Speed"
      ]
    ]
  },
  {
    "id": "katsuki-bakugo-machine-gun",
    "slug": "katsuki-bakugo-machine-gun",
    "name": "Katsuki Bakugo — Machine Gun",
    "combatant": "Katsuki Bakugo",
    "battleStyle": "Machine Gun",
    "isAlternative": true,
    "role": "Rapid",
    "hp": 250,
    "imageFile": "katsuki-bakugo-machine-gun.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch002/GUI/Variation/T_ui_Thumb_13_201_S.png",
    "sourceUrl": "https://ultrarumble.com/character/2#Variant-1",
    "unlockMethod": "Purchase with a Ticket Season 4 Release2024-04-24 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "AP Machine Gun"
      ],
      [
        "beta",
        "Shrapnel Strike"
      ],
      [
        "gamma",
        "Bomb Blast Mine"
      ],
      [
        "special",
        "Explosive Speed"
      ]
    ]
  },
  {
    "id": "katsuki-bakugo-cluster",
    "slug": "katsuki-bakugo-cluster",
    "name": "Katsuki Bakugo — Cluster",
    "combatant": "Katsuki Bakugo",
    "battleStyle": "Cluster",
    "isAlternative": true,
    "role": "Technical",
    "hp": 300,
    "imageFile": "katsuki-bakugo-cluster.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch002/GUI/Variation/T_ui_Thumb_13_202_S.png",
    "sourceUrl": "https://ultrarumble.com/character/2#Variant-2",
    "unlockMethod": "Obtained from Rolls Season 16 Release2026-04-22 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "AP Shot Cluster"
      ],
      [
        "beta",
        "Nitro Cluster"
      ],
      [
        "gamma",
        "Howitzer Impact Cluster"
      ],
      [
        "special",
        "Explosive Speed"
      ]
    ]
  },
  {
    "id": "ochaco-uraraka",
    "slug": "ochaco-uraraka",
    "name": "Ochaco Uraraka",
    "combatant": "Ochaco Uraraka",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Rapid",
    "hp": 300,
    "imageFile": "ochaco-uraraka.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch003/GUI/FaceIcon/T_ui_com_cahraface_Ch003.png",
    "sourceUrl": "https://ultrarumble.com/character/3",
    "unlockMethod": "Starter Character Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Zodiac Wire"
      ],
      [
        "beta",
        "Home Run Comet"
      ],
      [
        "gamma",
        "Nebulous Space"
      ],
      [
        "special",
        "Zero Gravity"
      ]
    ]
  },
  {
    "id": "ochaco-uraraka-zero-satellites",
    "slug": "ochaco-uraraka-zero-satellites",
    "name": "Ochaco Uraraka — Zero Satellites",
    "combatant": "Ochaco Uraraka",
    "battleStyle": "Zero Satellites",
    "isAlternative": true,
    "role": "Assault",
    "hp": 350,
    "imageFile": "ochaco-uraraka-zero-satellites.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch003/GUI/Variation/T_ui_Thumb_13_301_S.png",
    "sourceUrl": "https://ultrarumble.com/character/3#Variant-1",
    "unlockMethod": "Obtained from Rolls Season 10 Release2025-04-23 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Comet Bunt"
      ],
      [
        "beta",
        "Zero Satellites"
      ],
      [
        "gamma",
        "Nebula Runway"
      ],
      [
        "special",
        "Zero Gravity"
      ]
    ]
  },
  {
    "id": "tenya-iida",
    "slug": "tenya-iida",
    "name": "Tenya Iida",
    "combatant": "Tenya Iida",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Rapid",
    "hp": 300,
    "imageFile": "tenya-iida.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch005/GUI/FaceIcon/T_ui_com_cahraface_Ch005.png",
    "sourceUrl": "https://ultrarumble.com/character/5",
    "unlockMethod": "Purchase with a Ticket Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Recipro Wheel"
      ],
      [
        "beta",
        "Recipro Burst"
      ],
      [
        "gamma",
        "Recipro Turbo"
      ],
      [
        "special",
        "Carry to Safety"
      ],
      [
        "special",
        "Wall Run"
      ]
    ]
  },
  {
    "id": "shoto-todoroki",
    "slug": "shoto-todoroki",
    "name": "Shoto Todoroki",
    "combatant": "Shoto Todoroki",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Strike",
    "hp": 350,
    "imageFile": "shoto-todoroki.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch004/GUI/FaceIcon/T_ui_com_cahraface_Ch004.png",
    "sourceUrl": "https://ultrarumble.com/character/4",
    "unlockMethod": "Obtained from the Special License. Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Blazing Fields of Roaring Fire"
      ],
      [
        "beta",
        "Heaven-Piercing Ice Wall"
      ],
      [
        "gamma",
        "Ice Stalagmite"
      ],
      [
        "special",
        "Scorching Flame Wave"
      ]
    ]
  },
  {
    "id": "shoto-todoroki-ice-fang-wind-flame",
    "slug": "shoto-todoroki-ice-fang-wind-flame",
    "name": "Shoto Todoroki — Ice Fang Wind Flame",
    "combatant": "Shoto Todoroki",
    "battleStyle": "Ice Fang Wind Flame",
    "isAlternative": true,
    "role": "Technical",
    "hp": 350,
    "imageFile": "shoto-todoroki-ice-fang-wind-flame.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch004/GUI/Variation/T_ui_Thumb_13_401_S.png",
    "sourceUrl": "https://ultrarumble.com/character/4#Variant-1",
    "unlockMethod": "Purchase with a Ticket Season 6 Release2024-08-21 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Ice Fang Wind Flame"
      ],
      [
        "beta",
        "Heaven-Piercing Ice Wall"
      ],
      [
        "gamma",
        "Fiery Prison"
      ],
      [
        "special",
        "Scorching Flame Wave"
      ]
    ]
  },
  {
    "id": "tsuyu-asui",
    "slug": "tsuyu-asui",
    "name": "Tsuyu Asui",
    "combatant": "Tsuyu Asui",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Rapid",
    "hp": 250,
    "imageFile": "tsuyu-asui.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch006/GUI/FaceIcon/T_ui_com_cahraface_Ch006.png",
    "sourceUrl": "https://ultrarumble.com/character/6",
    "unlockMethod": "Obtained from the Special License. Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Ribbit Shot"
      ],
      [
        "beta",
        "Ribbit Swing"
      ],
      [
        "gamma",
        "Camofrog"
      ],
      [
        "special",
        "Froggy Catch"
      ]
    ]
  },
  {
    "id": "eijiro-kirishima",
    "slug": "eijiro-kirishima",
    "name": "Eijiro Kirishima",
    "combatant": "Eijiro Kirishima",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Assault",
    "hp": 400,
    "imageFile": "eijiro-kirishima.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch008/GUI/FaceIcon/T_ui_com_cahraface_Ch008.png",
    "sourceUrl": "https://ultrarumble.com/character/8",
    "unlockMethod": "Purchase with a Ticket Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Chanbara Blade"
      ],
      [
        "beta",
        "Red Counter"
      ],
      [
        "gamma",
        "Red Burst"
      ],
      [
        "special",
        "Hardening"
      ]
    ]
  },
  {
    "id": "eijiro-kirishima-red-drive",
    "slug": "eijiro-kirishima-red-drive",
    "name": "Eijiro Kirishima — Red Drive",
    "combatant": "Eijiro Kirishima",
    "battleStyle": "Red Drive",
    "isAlternative": true,
    "role": "Strike",
    "hp": 300,
    "imageFile": "eijiro-kirishima-red-drive.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch008/GUI/Variation/T_ui_Thumb_13_801_S.png",
    "sourceUrl": "https://ultrarumble.com/character/8#Variant-1",
    "unlockMethod": "Obtained from Rolls Season 8 Release2024-12-18 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Red Drive"
      ],
      [
        "beta",
        "Red Spirit"
      ],
      [
        "gamma",
        "Red Strike"
      ],
      [
        "special",
        "Hardening"
      ]
    ]
  },
  {
    "id": "momo-yaoyorozu",
    "slug": "momo-yaoyorozu",
    "name": "Momo Yaoyorozu",
    "combatant": "Momo Yaoyorozu",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Support",
    "hp": 350,
    "imageFile": "momo-yaoyorozu.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch010/GUI/FaceIcon/T_ui_com_cahraface_Ch010.png",
    "sourceUrl": "https://ultrarumble.com/character/10",
    "unlockMethod": "Purchase with a Ticket Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Create: Strike and Stop"
      ],
      [
        "beta",
        "Create: Unfalling Castle Wall"
      ],
      [
        "gamma",
        "Create: Bullet Rain"
      ],
      [
        "special",
        "Yaoyorozu's Lucky Bag"
      ]
    ]
  },
  {
    "id": "fumikage-tokoyami",
    "slug": "fumikage-tokoyami",
    "name": "Fumikage Tokoyami",
    "combatant": "Fumikage Tokoyami",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Assault",
    "hp": 300,
    "imageFile": "fumikage-tokoyami.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch011/GUI/FaceIcon/T_ui_com_cahraface_Ch011.png",
    "sourceUrl": "https://ultrarumble.com/character/11",
    "unlockMethod": "Obtained from Rolls Season 14 Release2026-01-21 00:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Ragnarok"
      ],
      [
        "beta",
        "Spiral Shadow Born of the Gloaming"
      ],
      [
        "gamma",
        "Jet-Black Shadow Shield"
      ],
      [
        "special",
        "Black Ankh"
      ],
      [
        "special",
        "Twin Wings of the Black Arm"
      ]
    ]
  },
  {
    "id": "denki-kaminari",
    "slug": "denki-kaminari",
    "name": "Denki Kaminari",
    "combatant": "Denki Kaminari",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Strike",
    "hp": 350,
    "imageFile": "denki-kaminari.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch007/GUI/FaceIcon/T_ui_com_cahraface_Ch007.png",
    "sourceUrl": "https://ultrarumble.com/character/7",
    "unlockMethod": "Purchase with a Ticket Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Electro-target"
      ],
      [
        "beta",
        "Indiscriminate Shock 1.3 Million Volts"
      ],
      [
        "gamma",
        "Human Stun Gun"
      ],
      [
        "special",
        "Electrification"
      ]
    ]
  },
  {
    "id": "denki-kaminari-lightning",
    "slug": "denki-kaminari-lightning",
    "name": "Denki Kaminari — Lightning",
    "combatant": "Denki Kaminari",
    "battleStyle": "Lightning",
    "isAlternative": true,
    "role": "Technical",
    "hp": 350,
    "imageFile": "denki-kaminari-lightning.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch007/GUI/Variation/T_ui_Thumb_13_701_S.png",
    "sourceUrl": "https://ultrarumble.com/character/7#Variant-1",
    "unlockMethod": "Obtained from Rolls Season 9 Release2025-02-19 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Electro-Trident"
      ],
      [
        "beta",
        "Tracking Bolt"
      ],
      [
        "gamma",
        "Lightning Way"
      ],
      [
        "special",
        "Electrification"
      ]
    ]
  },
  {
    "id": "neito-monoma",
    "slug": "neito-monoma",
    "name": "Neito Monoma",
    "combatant": "Neito Monoma",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Technical",
    "hp": 300,
    "imageFile": "neito-monoma.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch104/GUI/FaceIcon/T_ui_com_cahraface_Ch104.png",
    "sourceUrl": "https://ultrarumble.com/character/104",
    "unlockMethod": "Obtained from Rolls Season 11 Release2025-05-21 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Big Fist (Copy)"
      ],
      [
        "beta",
        "Gyrate (Copy)"
      ],
      [
        "gamma",
        "Steal (Copy)"
      ],
      [
        "special",
        "Skill Switch"
      ],
      [
        "special",
        "Scanners"
      ]
    ]
  },
  {
    "id": "itsuka-kendo",
    "slug": "itsuka-kendo",
    "name": "Itsuka Kendo",
    "combatant": "Itsuka Kendo",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Assault",
    "hp": 400,
    "imageFile": "itsuka-kendo.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch046/GUI/FaceIcon/T_ui_com_cahraface_Ch046.png",
    "sourceUrl": "https://ultrarumble.com/character/46",
    "unlockMethod": "Purchase with a Ticket Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Stone-throwing Fist"
      ],
      [
        "beta",
        "Big Fist Shield"
      ],
      [
        "gamma",
        "Big Fist Grip"
      ],
      [
        "special",
        "Big Fist Carry"
      ]
    ]
  },
  {
    "id": "itsuka-kendo-twin-palm-strike",
    "slug": "itsuka-kendo-twin-palm-strike",
    "name": "Itsuka Kendo — Twin Palm Strike",
    "combatant": "Itsuka Kendo",
    "battleStyle": "Twin Palm Strike",
    "isAlternative": true,
    "role": "Strike",
    "hp": 350,
    "imageFile": "itsuka-kendo-twin-palm-strike.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch046/GUI/Variation/T_ui_Thumb_13_4601_S.png",
    "sourceUrl": "https://ultrarumble.com/character/46#Variant-1",
    "unlockMethod": "Obtained from Rolls Season 11 Release2025-07-02 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Gale Burst"
      ],
      [
        "beta",
        "Twin Palm Strike"
      ],
      [
        "gamma",
        "Whirlwind Fist"
      ],
      [
        "special",
        "Big Fist Carry"
      ]
    ]
  },
  {
    "id": "ibara-shiozaki",
    "slug": "ibara-shiozaki",
    "name": "Ibara Shiozaki",
    "combatant": "Ibara Shiozaki",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Support",
    "hp": 400,
    "imageFile": "ibara-shiozaki.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch102/GUI/FaceIcon/T_ui_com_cahraface_Ch102.png",
    "sourceUrl": "https://ultrarumble.com/character/102",
    "unlockMethod": "Purchase with a Ticket Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Purification"
      ],
      [
        "beta",
        "Via Dolorosa"
      ],
      [
        "gamma",
        "Crucifixion"
      ],
      [
        "special",
        "Faith's Shield"
      ]
    ]
  },
  {
    "id": "mirio-togata",
    "slug": "mirio-togata",
    "name": "Mirio Togata",
    "combatant": "Mirio Togata",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Rapid",
    "hp": 250,
    "imageFile": "mirio-togata.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch024/GUI/FaceIcon/T_ui_com_cahraface_Ch024.png",
    "sourceUrl": "https://ultrarumble.com/character/24",
    "unlockMethod": "Purchase with a Ticket Season 5 Release2024-05-22 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Invisible Eye Break"
      ],
      [
        "beta",
        "Phantom Dive"
      ],
      [
        "gamma",
        "Phantom Guard"
      ],
      [
        "special",
        "Permeation"
      ]
    ]
  },
  {
    "id": "mirio-togata-sheer-counter",
    "slug": "mirio-togata-sheer-counter",
    "name": "Mirio Togata — Sheer Counter",
    "combatant": "Mirio Togata",
    "battleStyle": "Sheer Counter",
    "isAlternative": true,
    "role": "Technical",
    "hp": 300,
    "imageFile": "mirio-togata-sheer-counter.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch024/GUI/Variation/T_ui_Thumb_13_2401_S.png",
    "sourceUrl": "https://ultrarumble.com/character/24#Variant-1",
    "unlockMethod": "Obtained from Rolls Season 12 Release2025-09-03 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Phantom Smash"
      ],
      [
        "beta",
        "Phantom Rush"
      ],
      [
        "gamma",
        "Sheer Counter"
      ],
      [
        "special",
        "Permeation"
      ]
    ]
  },
  {
    "id": "tamaki-amajiki",
    "slug": "tamaki-amajiki",
    "name": "Tamaki Amajiki",
    "combatant": "Tamaki Amajiki",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Strike",
    "hp": 350,
    "imageFile": "tamaki-amajiki.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch026/GUI/FaceIcon/T_ui_com_cahraface_Ch026.png",
    "sourceUrl": "https://ultrarumble.com/character/26",
    "unlockMethod": "Obtained from Rolls Season 12 Release2025-07-23 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Marlin Rapier"
      ],
      [
        "beta",
        "Octopus Mirage"
      ],
      [
        "gamma",
        "Plasma Cannon"
      ],
      [
        "special",
        "Wing Claw"
      ]
    ]
  },
  {
    "id": "nejire-hado",
    "slug": "nejire-hado",
    "name": "Nejire Hado",
    "combatant": "Nejire Hado",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Technical",
    "hp": 300,
    "imageFile": "nejire-hado.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch025/GUI/FaceIcon/T_ui_com_cahraface_Ch025.png",
    "sourceUrl": "https://ultrarumble.com/character/25",
    "unlockMethod": "Obtained from Rolls Season 8 Release2024-11-20 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Spiraling Wave"
      ],
      [
        "beta",
        "Spiraling Surge"
      ],
      [
        "gamma",
        "Spiraling Surf"
      ],
      [
        "special",
        "Surge"
      ]
    ]
  },
  {
    "id": "nejire-hado-fairy",
    "slug": "nejire-hado-fairy",
    "name": "Nejire Hado — Fairy",
    "combatant": "Nejire Hado",
    "battleStyle": "Fairy",
    "isAlternative": true,
    "role": "Support",
    "hp": 300,
    "imageFile": "nejire-hado-fairy.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch025/GUI/Variation/T_ui_Thumb_13_2501_S.png",
    "sourceUrl": "https://ultrarumble.com/character/25#Variant-1",
    "unlockMethod": "Obtained from Rolls Season 15 Release2026-02-04 00:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Spiraling Pike"
      ],
      [
        "beta",
        "Spiraling Fairy"
      ],
      [
        "gamma",
        "Spiraling Veil"
      ],
      [
        "special",
        "Surge"
      ]
    ]
  },
  {
    "id": "hitoshi-shinso",
    "slug": "hitoshi-shinso",
    "name": "Hitoshi Shinso",
    "combatant": "Hitoshi Shinso",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Strike",
    "hp": 300,
    "imageFile": "hitoshi-shinso.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch105/GUI/FaceIcon/T_ui_com_cahraface_Ch105.png",
    "sourceUrl": "https://ultrarumble.com/character/105",
    "unlockMethod": "Obtained from Rolls Season 10 Release2025-03-26 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Binding Cloth: Crushing Strike"
      ],
      [
        "beta",
        "Binding Cloth: Sky Rend"
      ],
      [
        "gamma",
        "Brainwashing"
      ],
      [
        "special",
        "Persona Chords"
      ],
      [
        "special",
        "Persona Command"
      ]
    ]
  },
  {
    "id": "all-might",
    "slug": "all-might",
    "name": "All Might",
    "combatant": "All Might",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Assault",
    "hp": 350,
    "imageFile": "all-might.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch012/GUI/FaceIcon/T_ui_com_cahraface_Ch012.png",
    "sourceUrl": "https://ultrarumble.com/character/12",
    "unlockMethod": "Obtained from the Special License. Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Texas Smash"
      ],
      [
        "beta",
        "United States of Smash"
      ],
      [
        "gamma",
        "Oklahoma Smash"
      ],
      [
        "special",
        "Carry to Safety"
      ],
      [
        "special",
        "High Jump"
      ]
    ]
  },
  {
    "id": "all-might-gatling",
    "slug": "all-might-gatling",
    "name": "All Might — Gatling",
    "combatant": "All Might",
    "battleStyle": "Gatling",
    "isAlternative": true,
    "role": "Rapid",
    "hp": 300,
    "imageFile": "all-might-gatling.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch012/GUI/Variation/T_ui_Thumb_13_1201_S.png",
    "sourceUrl": "https://ultrarumble.com/character/12#Variant-1",
    "unlockMethod": "Obtained from Rolls Season 11 Release2025-06-04 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Texas Smash Gatling"
      ],
      [
        "beta",
        "Carolina Smash"
      ],
      [
        "gamma",
        "Arizona Smash"
      ],
      [
        "special",
        "Carry to Safety"
      ],
      [
        "special",
        "High Jump"
      ]
    ]
  },
  {
    "id": "armored-all-might",
    "slug": "armored-all-might",
    "name": "Armored All Might",
    "combatant": "Armored All Might",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Technical",
    "hp": 350,
    "imageFile": "armored-all-might.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch200/GUI/FaceIcon/T_ui_com_cahraface_Ch200.png",
    "sourceUrl": "https://ultrarumble.com/character/200",
    "unlockMethod": "Obtained from Rolls Season 14 Release2025-11-19 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Ice Bullet Shot"
      ],
      [
        "beta",
        "Blackwhip Charge Bolt"
      ],
      [
        "gamma",
        "Drone Anima"
      ],
      [
        "special",
        "Thruster Uravity"
      ],
      [
        "special",
        "Thruster Ingenium"
      ]
    ]
  },
  {
    "id": "shota-aizawa",
    "slug": "shota-aizawa",
    "name": "Shota Aizawa",
    "combatant": "Shota Aizawa",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Technical",
    "hp": 300,
    "imageFile": "shota-aizawa.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch013/GUI/FaceIcon/T_ui_com_cahraface_Ch013.png",
    "sourceUrl": "https://ultrarumble.com/character/13",
    "unlockMethod": "Purchase with a Ticket Season 1 Release2023-10-25 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Binding Cloth: Capture"
      ],
      [
        "beta",
        "Powerhouse Kick Barrage"
      ],
      [
        "gamma",
        "Binding Cloth: Serpent"
      ],
      [
        "special",
        "Erasure"
      ]
    ]
  },
  {
    "id": "shota-aizawa-flow-runner",
    "slug": "shota-aizawa-flow-runner",
    "name": "Shota Aizawa — Flow Runner",
    "combatant": "Shota Aizawa",
    "battleStyle": "Flow Runner",
    "isAlternative": true,
    "role": "Strike",
    "hp": 300,
    "imageFile": "shota-aizawa-flow-runner.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch013/GUI/Variation/T_ui_Thumb_13_1301_S.png",
    "sourceUrl": "https://ultrarumble.com/character/13#Variant-1",
    "unlockMethod": "Obtained from Rolls Season 17 Release2026-06-24 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Binding Cloth: Leap"
      ],
      [
        "beta",
        "Binding Cloth: Flow Runner"
      ],
      [
        "gamma",
        "Binding Cloth: Instance"
      ],
      [
        "special",
        "Erasure"
      ]
    ]
  },
  {
    "id": "present-mic",
    "slug": "present-mic",
    "name": "Present Mic",
    "combatant": "Present Mic",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Strike",
    "hp": 300,
    "imageFile": "present-mic.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch109/GUI/FaceIcon/T_ui_com_cahraface_Ch109.png",
    "sourceUrl": "https://ultrarumble.com/character/109",
    "unlockMethod": "Purchase with a Ticket Season 7 Release2024-10-23 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Shouting Voice"
      ],
      [
        "beta",
        "Loud Voice"
      ],
      [
        "gamma",
        "DJ Punch"
      ],
      [
        "special",
        "Radio Noise"
      ]
    ]
  },
  {
    "id": "present-mic-d-j-board",
    "slug": "present-mic-d-j-board",
    "name": "Present Mic — D.J. Board",
    "combatant": "Present Mic",
    "battleStyle": "D.J. Board",
    "isAlternative": true,
    "role": "Technical",
    "hp": 300,
    "imageFile": "present-mic-d-j-board.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch109/GUI/Variation/T_ui_Thumb_13_10901_S.png",
    "sourceUrl": "https://ultrarumble.com/character/109#Variant-1",
    "unlockMethod": "Obtained from Rolls Season 17 Release2026-06-10 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Echo Voice"
      ],
      [
        "beta",
        "D.J. Board"
      ],
      [
        "gamma",
        "Loudspeaker"
      ],
      [
        "special",
        "Radio Noise"
      ]
    ]
  },
  {
    "id": "cementoss",
    "slug": "cementoss",
    "name": "Cementoss",
    "combatant": "Cementoss",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Support",
    "hp": 350,
    "imageFile": "cementoss.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch101/GUI/FaceIcon/T_ui_com_cahraface_Ch101.png",
    "sourceUrl": "https://ultrarumble.com/character/101",
    "unlockMethod": "Starter Character Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Pillar Split"
      ],
      [
        "beta",
        "Load-Bearing Wall"
      ],
      [
        "gamma",
        "Structural Slab"
      ],
      [
        "special",
        "Defensive Wall"
      ]
    ]
  },
  {
    "id": "endeavor",
    "slug": "endeavor",
    "name": "Endeavor",
    "combatant": "Endeavor",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Strike",
    "hp": 350,
    "imageFile": "endeavor.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch023/GUI/FaceIcon/T_ui_com_cahraface_Ch023.png",
    "sourceUrl": "https://ultrarumble.com/character/23",
    "unlockMethod": "Purchase with a Ticket Season 2 Release2023-11-24 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Burning Ray"
      ],
      [
        "beta",
        "Searing Arrow"
      ],
      [
        "gamma",
        "Prominence Burn"
      ],
      [
        "special",
        "Flight"
      ],
      [
        "special",
        "High Jump"
      ]
    ]
  },
  {
    "id": "endeavor-inferno-fist",
    "slug": "endeavor-inferno-fist",
    "name": "Endeavor — Inferno Fist",
    "combatant": "Endeavor",
    "battleStyle": "Inferno Fist",
    "isAlternative": true,
    "role": "Assault",
    "hp": 350,
    "imageFile": "endeavor-inferno-fist.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch023/GUI/Variation/T_ui_Thumb_13_2301_S.png",
    "sourceUrl": "https://ultrarumble.com/character/23#Variant-1",
    "unlockMethod": "Obtained from Rolls Season 12 Release2025-08-06 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Inferno Fist: Jet Burn"
      ],
      [
        "beta",
        "Vanishing Storm"
      ],
      [
        "gamma",
        "Prominence Nova"
      ],
      [
        "special",
        "Flight"
      ],
      [
        "special",
        "High Jump"
      ]
    ]
  },
  {
    "id": "hawks",
    "slug": "hawks",
    "name": "Hawks",
    "combatant": "Hawks",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Rapid",
    "hp": 250,
    "imageFile": "hawks.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch043/GUI/FaceIcon/T_ui_com_cahraface_Ch043.png",
    "sourceUrl": "https://ultrarumble.com/character/43",
    "unlockMethod": "Purchase with a Ticket Season 7 Release2024-09-25 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Wingbeat"
      ],
      [
        "beta",
        "Wind Cross"
      ],
      [
        "gamma",
        "Storm Wings"
      ],
      [
        "special",
        "Fierce Wings / Transport"
      ],
      [
        "special",
        "Fierce Wings / Flight"
      ]
    ]
  },
  {
    "id": "hawks-slicing-wind",
    "slug": "hawks-slicing-wind",
    "name": "Hawks — Slicing Wind",
    "combatant": "Hawks",
    "battleStyle": "Slicing Wind",
    "isAlternative": true,
    "role": "Strike",
    "hp": 300,
    "imageFile": "hawks-slicing-wind.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch043/GUI/Variation/T_ui_Thumb_13_4301_S.png",
    "sourceUrl": "https://ultrarumble.com/character/43#Variant-1",
    "unlockMethod": "Obtained from Rolls Season 13 Release2025-10-08 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Cold Wind"
      ],
      [
        "beta",
        "Slicing Wind"
      ],
      [
        "gamma",
        "Spiral Slash"
      ],
      [
        "special",
        "Fierce Wings / Transport"
      ],
      [
        "special",
        "Fierce Wings / Flight"
      ]
    ]
  },
  {
    "id": "mirko",
    "slug": "mirko",
    "name": "Mirko",
    "combatant": "Mirko",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Rapid",
    "hp": 300,
    "imageFile": "mirko.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch111/GUI/FaceIcon/T_ui_com_cahraface_Ch111.png",
    "sourceUrl": "https://ultrarumble.com/character/111",
    "unlockMethod": "Obtained from Rolls Season 17 Release2026-05-27 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Luna Strike"
      ],
      [
        "beta",
        "Luna Arc"
      ],
      [
        "gamma",
        "Luna Crescent"
      ],
      [
        "special",
        "Luna Step"
      ],
      [
        "special",
        "Luna Turn"
      ]
    ]
  },
  {
    "id": "star-and-stripe",
    "slug": "star-and-stripe",
    "name": "Star and Stripe",
    "combatant": "Star and Stripe",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Strike",
    "hp": 350,
    "imageFile": "star-and-stripe.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch114/GUI/FaceIcon/T_ui_com_cahraface_Ch114.png",
    "sourceUrl": "https://ultrarumble.com/character/114",
    "unlockMethod": "Obtained from Rolls Season 16 Release2026-03-25 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Diffusion Laser"
      ],
      [
        "beta",
        "Zero Air"
      ],
      [
        "gamma",
        "Keraunos"
      ],
      [
        "special",
        "Invert Area"
      ]
    ]
  },
  {
    "id": "mt-lady",
    "slug": "mt-lady",
    "name": "Mt. Lady",
    "combatant": "Mt. Lady",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Assault",
    "hp": 350,
    "imageFile": "mt-lady.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch100/GUI/FaceIcon/T_ui_com_cahraface_Ch100.png",
    "sourceUrl": "https://ultrarumble.com/character/100",
    "unlockMethod": "Starter Character Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Spike Knuckle"
      ],
      [
        "beta",
        "Caldera Stomp"
      ],
      [
        "gamma",
        "Canyon Cannon"
      ],
      [
        "special",
        "Gigantification"
      ]
    ]
  },
  {
    "id": "tomura-shigaraki",
    "slug": "tomura-shigaraki",
    "name": "Tomura Shigaraki",
    "combatant": "Tomura Shigaraki",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Strike",
    "hp": 300,
    "imageFile": "tomura-shigaraki.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch015/GUI/FaceIcon/T_ui_com_cahraface_Ch015.png",
    "sourceUrl": "https://ultrarumble.com/character/15",
    "unlockMethod": "Starter Character Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Earth Crack"
      ],
      [
        "beta",
        "Ground Destruction"
      ],
      [
        "gamma",
        "Area Glitch"
      ],
      [
        "special",
        "Collapse hand"
      ]
    ]
  },
  {
    "id": "tomura-shigaraki-catastrophe",
    "slug": "tomura-shigaraki-catastrophe",
    "name": "Tomura Shigaraki — Catastrophe",
    "combatant": "Tomura Shigaraki",
    "battleStyle": "Catastrophe",
    "isAlternative": true,
    "role": "Assault",
    "hp": 300,
    "imageFile": "tomura-shigaraki-catastrophe.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch015/GUI/Variation/T_ui_Thumb_13_1501_S.png",
    "sourceUrl": "https://ultrarumble.com/character/15#Variant-1",
    "unlockMethod": "Purchase with a Ticket Season 4 Release2024-03-27 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Earth Break"
      ],
      [
        "beta",
        "Grudge Shoot"
      ],
      [
        "gamma",
        "Catastrophe"
      ],
      [
        "special",
        "Collapse hand"
      ]
    ]
  },
  {
    "id": "tomura-shigaraki-thousand-hand-break",
    "slug": "tomura-shigaraki-thousand-hand-break",
    "name": "Tomura Shigaraki — Thousand-Hand Break",
    "combatant": "Tomura Shigaraki",
    "battleStyle": "Thousand-Hand Break",
    "isAlternative": true,
    "role": "Technical",
    "hp": 350,
    "imageFile": "tomura-shigaraki-thousand-hand-break.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch015/GUI/Variation/T_ui_Thumb_13_1502_S.png",
    "sourceUrl": "https://ultrarumble.com/character/15#Variant-2",
    "unlockMethod": "Obtained from Rolls Season 14 Release2025-12-03 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Thousand-Hand Break"
      ],
      [
        "beta",
        "Shake Heaven and Earth"
      ],
      [
        "gamma",
        "Super Regeneration"
      ],
      [
        "special",
        "Collapse hand"
      ]
    ]
  },
  {
    "id": "all-for-one",
    "slug": "all-for-one",
    "name": "All For One",
    "combatant": "All For One",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Technical",
    "hp": 400,
    "imageFile": "all-for-one.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch016/GUI/FaceIcon/T_ui_com_cahraface_Ch016.png",
    "sourceUrl": "https://ultrarumble.com/character/16",
    "unlockMethod": "Purchase with a Ticket Season 4 Release2024-04-10 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Final Blow"
      ],
      [
        "beta",
        "Manipulative Claw"
      ],
      [
        "gamma",
        "Black Field"
      ],
      [
        "special",
        "Plunder"
      ]
    ]
  },
  {
    "id": "all-for-one-factor-fusion",
    "slug": "all-for-one-factor-fusion",
    "name": "All For One — Factor Fusion",
    "combatant": "All For One",
    "battleStyle": "Factor Fusion",
    "isAlternative": true,
    "role": "Strike",
    "hp": 350,
    "imageFile": "all-for-one-factor-fusion.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch016/GUI/Variation/T_ui_Thumb_13_1601_S.png",
    "sourceUrl": "https://ultrarumble.com/character/16#Variant-1",
    "unlockMethod": "Obtained from Rolls Season 16 Release2026-04-08 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Gale Rend"
      ],
      [
        "beta",
        "Skybreaker"
      ],
      [
        "gamma",
        "Factor Fusion \"I'll Punch You\""
      ],
      [
        "special",
        "Plunder"
      ]
    ]
  },
  {
    "id": "all-for-one-youth-age",
    "slug": "all-for-one-youth-age",
    "name": "All For One (Youth age)",
    "combatant": "All For One (Youth age)",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Assault",
    "hp": 300,
    "imageFile": "all-for-one-youth-age.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch201/GUI/FaceIcon/T_ui_com_cahraface_Ch201.png",
    "sourceUrl": "https://ultrarumble.com/character/201",
    "unlockMethod": "Obtained from Rolls Season 13 Release2025-10-22 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Thunder Sepulture"
      ],
      [
        "beta",
        "Meteor Annihilation"
      ],
      [
        "gamma",
        "Divine Judgment"
      ],
      [
        "special",
        "Flight Command"
      ],
      [
        "special",
        "Phantom Strike"
      ]
    ]
  },
  {
    "id": "dabi",
    "slug": "dabi",
    "name": "Dabi",
    "combatant": "Dabi",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Technical",
    "hp": 350,
    "imageFile": "dabi.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch017/GUI/FaceIcon/T_ui_com_cahraface_Ch017.png",
    "sourceUrl": "https://ultrarumble.com/character/17",
    "unlockMethod": "Starter Character Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Arson"
      ],
      [
        "beta",
        "Shadow Fire"
      ],
      [
        "gamma",
        "Ring of Fire"
      ],
      [
        "special",
        "Unquenchable Flame"
      ]
    ]
  },
  {
    "id": "dabi-crazy-torch",
    "slug": "dabi-crazy-torch",
    "name": "Dabi — Crazy Torch",
    "combatant": "Dabi",
    "battleStyle": "Crazy Torch",
    "isAlternative": true,
    "role": "Strike",
    "hp": 350,
    "imageFile": "dabi-crazy-torch.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch017/GUI/Variation/T_ui_Thumb_13_1701_S.png",
    "sourceUrl": "https://ultrarumble.com/character/17#Variant-1",
    "unlockMethod": "Purchase with a Ticket Season 5 Release2024-06-19 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Flames of Resentment"
      ],
      [
        "beta",
        "Scorching Admonition"
      ],
      [
        "gamma",
        "Crazy Torch"
      ],
      [
        "special",
        "Unquenchable Flame"
      ]
    ]
  },
  {
    "id": "himiko-toga",
    "slug": "himiko-toga",
    "name": "Himiko Toga",
    "combatant": "Himiko Toga",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Technical",
    "hp": 350,
    "imageFile": "himiko-toga.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch018/GUI/FaceIcon/T_ui_com_cahraface_Ch018.png",
    "sourceUrl": "https://ultrarumble.com/character/18",
    "unlockMethod": "Obtained from the Special License. Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Jagged Throwing Knife"
      ],
      [
        "beta",
        "Slasher Killer Knife"
      ],
      [
        "gamma",
        "Blood Sucker"
      ],
      [
        "special",
        "Blood Sucker"
      ],
      [
        "special",
        "Transform"
      ]
    ]
  },
  {
    "id": "himiko-toga-sting-dance",
    "slug": "himiko-toga-sting-dance",
    "name": "Himiko Toga — Sting Dance",
    "combatant": "Himiko Toga",
    "battleStyle": "Sting Dance",
    "isAlternative": true,
    "role": "Rapid",
    "hp": 300,
    "imageFile": "himiko-toga-sting-dance.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch018/GUI/Variation/T_ui_Thumb_13_1801_S.png",
    "sourceUrl": "https://ultrarumble.com/character/18#Variant-1",
    "unlockMethod": "Purchase with a Ticket Season 7 Release2024-10-09 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Jagged Spinning Knife"
      ],
      [
        "beta",
        "Sting Dance"
      ],
      [
        "gamma",
        "Blood Sucker"
      ],
      [
        "special",
        "Blood Sucker"
      ],
      [
        "special",
        "Transform"
      ]
    ]
  },
  {
    "id": "twice",
    "slug": "twice",
    "name": "Twice",
    "combatant": "Twice",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Rapid",
    "hp": 300,
    "imageFile": "twice.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch037/GUI/FaceIcon/T_ui_com_cahraface_Ch037.png",
    "sourceUrl": "https://ultrarumble.com/character/37",
    "unlockMethod": "Purchase with a Ticket Season 3 Release2024-02-21 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Dagger Shot"
      ],
      [
        "beta",
        "Self Duplicate"
      ],
      [
        "gamma",
        "Foot Boost"
      ],
      [
        "special",
        "Mad Imitation"
      ]
    ]
  },
  {
    "id": "mr-compress",
    "slug": "mr-compress",
    "name": "Mr. Compress",
    "combatant": "Mr. Compress",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Support",
    "hp": 300,
    "imageFile": "mr-compress.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch038/GUI/FaceIcon/T_ui_com_cahraface_Ch038.png",
    "sourceUrl": "https://ultrarumble.com/character/38",
    "unlockMethod": "Obtained from the Special License. Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Production Magic"
      ],
      [
        "beta",
        "Sleight of Hand"
      ],
      [
        "gamma",
        "Magician's Choice"
      ],
      [
        "special",
        "Magic Resurrection"
      ]
    ]
  },
  {
    "id": "kurogiri",
    "slug": "kurogiri",
    "name": "Kurogiri",
    "combatant": "Kurogiri",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Support",
    "hp": 300,
    "imageFile": "kurogiri.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch103/GUI/FaceIcon/T_ui_com_cahraface_Ch103.png",
    "sourceUrl": "https://ultrarumble.com/character/103",
    "unlockMethod": "Obtained from Rolls Season 9 Release2025-01-22 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Dark Matter"
      ],
      [
        "beta",
        "Warp Gate"
      ],
      [
        "gamma",
        "Shadow Haunt"
      ],
      [
        "special",
        "Bail Out"
      ]
    ]
  },
  {
    "id": "lady-nagant",
    "slug": "lady-nagant",
    "name": "Lady Nagant",
    "combatant": "Lady Nagant",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Strike",
    "hp": 250,
    "imageFile": "lady-nagant.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch115/GUI/FaceIcon/T_ui_com_cahraface_Ch115.png",
    "sourceUrl": "https://ultrarumble.com/character/115",
    "unlockMethod": "Obtained from Rolls Season 14 Release2025-12-17 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Hollow Point Shot"
      ],
      [
        "beta",
        "High Angle Fire"
      ],
      [
        "gamma",
        "Kickback Shot"
      ],
      [
        "special",
        "Scope Mode"
      ],
      [
        "special",
        "Air Walk"
      ]
    ]
  },
  {
    "id": "overhaul",
    "slug": "overhaul",
    "name": "Overhaul",
    "combatant": "Overhaul",
    "battleStyle": "Original",
    "isAlternative": false,
    "role": "Support",
    "hp": 350,
    "imageFile": "overhaul.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch034/GUI/FaceIcon/T_ui_com_cahraface_Ch034.png",
    "sourceUrl": "https://ultrarumble.com/character/34",
    "unlockMethod": "Purchase with a Ticket Season 1 Release2023-09-28 13:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Underworld Crusher"
      ],
      [
        "beta",
        "Piercing Dark Spear"
      ],
      [
        "gamma",
        "Coffin of Absolute Shackles"
      ],
      [
        "special",
        "Restoration"
      ],
      [
        "special",
        "Disassembly"
      ]
    ]
  },
  {
    "id": "overhaul-blighted-precipice",
    "slug": "overhaul-blighted-precipice",
    "name": "Overhaul — Blighted Precipice",
    "combatant": "Overhaul",
    "battleStyle": "Blighted Precipice",
    "isAlternative": true,
    "role": "Assault",
    "hp": 300,
    "imageFile": "overhaul-blighted-precipice.webp",
    "sourceImageUrl": "https://ultrarumble.com/assets/Character/Ch034/GUI/Variation/T_ui_Thumb_13_3401_S.png",
    "sourceUrl": "https://ultrarumble.com/character/34#Variant-1",
    "unlockMethod": "Obtained from Rolls Season 15 Release2026-02-18 00:00:00 (JST)",
    "skills": [
      [
        "alpha",
        "Showering Shot"
      ],
      [
        "beta",
        "Blighted Precipice"
      ],
      [
        "gamma",
        "Coffin Shot"
      ],
      [
        "special",
        "Restoration"
      ],
      [
        "special",
        "Disassembly"
      ]
    ]
  }
] satisfies CharacterRosterSeed[];
