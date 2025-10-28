export const objCores = {
  red: 'var(--car-red)',
  purple: 'var(--car-purple)',
  yellow: 'var(--car-#ffff00)',
  green: 'var(--car-green)',
} as const;

export type CarColor = keyof typeof objCores;
