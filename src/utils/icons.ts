// src/icons/heroicons.ts

// import {
//   ArrowLeftStartOnRectangleIcon,
//   ArrowRightEndOnRectangleIcon,
// } from "@heroicons/react/20/solid";
// import {
//   GlobeEuropeAfricaIcon,
//   PhotoIcon,
//   UserIcon,
// } from "@heroicons/react/24/solid";

/**
 * This file exports a mapping of icon names to functions that dynamically import them.
 * Only the icons you list here (which are known to be ESM) will be available for dynamic import.
 */
export const heroicons: {
  [key: string]: () => Promise<{ default: React.ComponentType<any> }>;
} = {
  HomeIcon: () => import("@heroicons/react/24/solid/HomeIcon"),
  SparklesIcon: () => import("@heroicons/react/24/solid/SparklesIcon"),
  ComputerDesktopIcon: () =>
    import("@heroicons/react/24/solid/ComputerDesktopIcon"),
  BuildingStorefrontIcon: () =>
    import("@heroicons/react/24/solid/BuildingStorefrontIcon"),
  SunIcon: () => import("@heroicons/react/24/solid/SunIcon"),
  DevicePhoneMobileIcon: () =>
    import("@heroicons/react/24/solid/DevicePhoneMobileIcon"),
  FireIcon: () => import("@heroicons/react/24/solid/FireIcon"),
  MusicalNoteIcon: () => import("@heroicons/react/24/solid/MusicalNoteIcon"),
  Squares2X2Icon: () => import("@heroicons/react/24/solid/Squares2X2Icon"), // New
  HomeModernIcon: () => import("@heroicons/react/24/solid/HomeModernIcon"), // New
  Cog6ToothIcon: () => import("@heroicons/react/24/solid/Cog6ToothIcon"), // New
  // BreakerIcon: () => import("@heroicons/react/24/solid/BreakerIcon"), //
  GlobeEuropeAfricaIcon: () =>
    import("@heroicons/react/24/solid/GlobeEuropeAfricaIcon"),
  ArrowRightEndOnRectangleIcon: () =>
    import("@heroicons/react/20/solid/ArrowRightEndOnRectangleIcon"),
  PhotoIcon: () => import("@heroicons/react/24/solid/PhotoIcon"),
  UserIcon: () => import("@heroicons/react/24/solid/UserIcon"),
  CubeIcon: () => import("@heroicons/react/24/solid/CubeIcon"),
  SpeakerWaveIcon: () => import("@heroicons/react/24/solid/SpeakerWaveIcon"),
  EyeSlashIcon: () => import("@heroicons/react/24/solid/EyeSlashIcon"),
  ArchiveBoxIcon: () => import("@heroicons/react/24/solid/ArchiveBoxIcon"),
  LockClosedIcon: () => import("@heroicons/react/24/solid/LockClosedIcon"),
  ArrowsPointingOutIcon: () =>
    import("@heroicons/react/24/solid/ArrowsPointingOutIcon"),
  EyeIcon: () => import("@heroicons/react/24/solid/EyeIcon"),
};
