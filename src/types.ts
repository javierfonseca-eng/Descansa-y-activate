export type RoutineCategory = 'lumbar' | 'cervical' | 'hands' | 'visual' | 'breathing';

export interface RoutineStep {
  id: string;
  title: string;
  durationSeconds: number; // sum to 120 seconds
  instruction: string;
  clinicalTip: string;
  keyAction: string;
  iconName: string;
  visualGraphic: 'lumbar_stretch' | 'calf_raise' | 'hamstring_wall' | 'weight_shift' |
                 'neck_tilt' | 'shoulder_retract' | 'shoulder_rolls' | 'chin_tuck' |
                 'wrist_extension' | 'finger_spread' | 'thumb_massage' | 'wrist_shake' |
                 'rule_20_20' | 'eye_roll' | 'palming' | 'temple_massage' |
                 'box_breathing';
}

export interface PauseRoutine {
  id: RoutineCategory;
  name: string;
  shortTag: string;
  targetRole: string; // e.g. "Médicos, Enfermería y Auxiliares"
  benefit: string;
  recommendedFor: string; // e.g. "Tras atención de expulsivo prolongado"
  colorTheme: {
    badge: string;
    bgHover: string;
    ring: string;
    accent: string;
    gradient: string;
  };
  totalDurationSeconds: number; // Always 120 (2 minutes)
  steps: RoutineStep[];
}

export interface ShiftRecord {
  completedCount: number;
  totalSeconds: number;
  lastCompletedDate: string;
  completedCategories: string[];
}
