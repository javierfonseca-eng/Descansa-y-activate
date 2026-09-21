import React from 'react';
import { motion } from 'motion/react';

interface GraphicProps {
  type: string;
  stepSecondsRemaining?: number;
  totalStepSeconds?: number;
}

export const ExerciseGraphics: React.FC<GraphicProps> = ({ type }) => {
  switch (type) {
    case 'lumbar_stretch':
      return (
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full">
            {/* Floor indicator */}
            <line x1="20" y1="145" x2="140" y2="145" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
            
            {/* Figure */}
            <circle cx="70" cy="35" r="12" fill="#0d9488" />
            {/* Spine with gentle backward curve */}
            <path d="M70,47 Q65,75 75,95 Q85,105 78,125" fill="none" stroke="#0f766e" strokeWidth="7" strokeLinecap="round" />
            {/* Hands on hips */}
            <path d="M66,60 L50,75 L62,85" fill="none" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Legs */}
            <line x1="75" y1="95" x2="70" y2="145" stroke="#0f766e" strokeWidth="6" strokeLinecap="round" />
            <line x1="75" y1="95" x2="88" y2="145" stroke="#0f766e" strokeWidth="6" strokeLinecap="round" />
            
            {/* Gentle stretch arrow */}
            <motion.path
              d="M92,80 Q105,85 100,100"
              fill="none"
              stroke="#059669"
              strokeWidth="3"
              strokeDasharray="4 3"
              animate={{ opacity: [0.3, 1, 0.3], x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            {/* Lumbar highlight glow */}
            <circle cx="73" cy="85" r="8" fill="#34d399" fillOpacity="0.4" />
          </svg>
          <span className="absolute bottom-1 text-[11px] font-semibold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-300">
            Extensión lumbar suave
          </span>
        </div>
      );

    case 'calf_raise':
      return (
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full">
            <line x1="20" y1="145" x2="140" y2="145" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
            
            {/* Head & Torso */}
            <circle cx="80" cy="30" r="11" fill="#0d9488" />
            <line x1="80" y1="41" x2="80" y2="92" stroke="#0f766e" strokeWidth="6" strokeLinecap="round" />
            {/* Arms relaxed */}
            <line x1="80" y1="52" x2="65" y2="85" stroke="#0f766e" strokeWidth="4" strokeLinecap="round" />
            <line x1="80" y1="52" x2="95" y2="85" stroke="#0f766e" strokeWidth="4" strokeLinecap="round" />
            
            {/* Animated legs going on tiptoes */}
            <motion.g
              animate={{ y: [0, -10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            >
              <line x1="80" y1="92" x2="74" y2="135" stroke="#0f766e" strokeWidth="6" strokeLinecap="round" />
              <line x1="80" y1="92" x2="86" y2="135" stroke="#0f766e" strokeWidth="6" strokeLinecap="round" />
              {/* Foot raised */}
              <line x1="74" y1="135" x2="70" y2="145" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
              <line x1="86" y1="135" x2="82" y2="145" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
            </motion.g>

            {/* Venous flow arrows upwards */}
            <motion.path
              d="M52,130 L52,105 M52,105 L47,112 M52,105 L57,112"
              fill="none"
              stroke="#0284c7"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ y: [8, -8, 8], opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            />
            <motion.path
              d="M108,130 L108,105 M108,105 L103,112 M108,105 L113,112"
              fill="none"
              stroke="#0284c7"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ y: [8, -8, 8], opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.8, delay: 0.2 }}
            />
          </svg>
          <span className="absolute bottom-1 text-[11px] font-semibold text-sky-800 bg-sky-100/90 px-2 py-0.5 rounded-full border border-sky-300">
            Retorno venoso gemelar
          </span>
        </div>
      );

    case 'hamstring_wall':
      return (
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full">
            {/* Wall */}
            <line x1="125" y1="20" x2="125" y2="145" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
            <line x1="20" y1="145" x2="140" y2="145" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />

            {/* Figure leaning hands to wall */}
            <circle cx="70" cy="50" r="11" fill="#0d9488" />
            <line x1="70" y1="61" x2="82" y2="100" stroke="#0f766e" strokeWidth="6" strokeLinecap="round" />
            {/* Arms reaching wall */}
            <line x1="72" y1="68" x2="125" y2="65" stroke="#0f766e" strokeWidth="4" strokeLinecap="round" />
            
            {/* Front bent leg */}
            <line x1="82" y1="100" x2="98" y2="122" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
            <line x1="98" y1="122" x2="98" y2="145" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />

            {/* Back straight leg stretching calf */}
            <line x1="82" y1="100" x2="48" y2="145" stroke="#0f766e" strokeWidth="6" strokeLinecap="round" />
            <ellipse cx="45" cy="144" rx="7" ry="2.5" fill="#0f766e" />

            {/* Stretch highlight at calf */}
            <circle cx="58" cy="130" r="7" fill="#38bdf8" fillOpacity="0.4" />
          </svg>
          <span className="absolute bottom-1 text-[11px] font-semibold text-teal-800 bg-teal-100/90 px-2 py-0.5 rounded-full border border-teal-300">
            Talón apoyado atrás
          </span>
        </div>
      );

    case 'weight_shift':
      return (
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full">
            <line x1="20" y1="145" x2="140" y2="145" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
            <circle cx="80" cy="35" r="11" fill="#0d9488" />
            <line x1="80" y1="46" x2="80" y2="92" stroke="#0f766e" strokeWidth="6" strokeLinecap="round" />
            {/* Swaying motion indicator */}
            <motion.g
              animate={{ rotate: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
              style={{ transformOrigin: "80px 145px" }}
            >
              <line x1="80" y1="92" x2="68" y2="145" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
              <line x1="80" y1="92" x2="92" y2="145" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
              <line x1="80" y1="55" x2="62" y2="90" stroke="#0f766e" strokeWidth="4" strokeLinecap="round" />
              <line x1="80" y1="55" x2="98" y2="90" stroke="#0f766e" strokeWidth="4" strokeLinecap="round" />
            </motion.g>
            <motion.path
              d="M50,75 C70,68 90,68 110,75"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeDasharray="4 3"
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </svg>
          <span className="absolute bottom-1 text-[11px] font-semibold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-300">
            Descarga de peso alternada
          </span>
        </div>
      );

    case 'neck_tilt':
      return (
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full">
            {/* Shoulders */}
            <path d="M30,120 Q80,105 130,120" fill="none" stroke="#0f766e" strokeWidth="8" strokeLinecap="round" />
            <line x1="80" y1="108" x2="80" y2="82" stroke="#0f766e" strokeWidth="9" strokeLinecap="round" />
            
            {/* Head tilted */}
            <motion.g
              animate={{ rotate: [-14, -14, 14, 14, -14] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              style={{ transformOrigin: "80px 85px" }}
            >
              <circle cx="80" cy="55" r="22" fill="#0d9488" />
              {/* Ear */}
              <ellipse cx="60" cy="56" rx="3.5" ry="6" fill="#14b8a6" />
              {/* Nose indicator */}
              <path d="M80,50 L84,56 L80,57" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            </motion.g>

            {/* Trapezius stretch arrow */}
            <motion.path
              d="M100,85 Q115,92 108,105"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="3"
              strokeDasharray="3 3"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </svg>
          <span className="absolute bottom-1 text-[11px] font-semibold text-teal-800 bg-teal-100/90 px-2 py-0.5 rounded-full border border-teal-300">
            Oreja hacia el hombro
          </span>
        </div>
      );

    case 'shoulder_retract':
      return (
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full">
            {/* Torso top-down / front angle */}
            <circle cx="80" cy="45" r="16" fill="#0d9488" />
            <path d="M50,90 Q80,75 110,90" fill="none" stroke="#0f766e" strokeWidth="8" strokeLinecap="round" />
            {/* Bent elbows drawn backward */}
            <motion.g
              animate={{ x: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <path d="M50,90 L32,110 L48,118" fill="none" stroke="#0f766e" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </motion.g>
            <motion.g
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <path d="M110,90 L128,110 L112,118" fill="none" stroke="#0f766e" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </motion.g>

            {/* Scapular pinch arrows */}
            <motion.path
              d="M45,78 L65,78 M65,78 L58,73 M65,78 L58,83"
              fill="none"
              stroke="#0891b2"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
            />
            <motion.path
              d="M115,78 L95,78 M95,78 L102,73 M95,78 L102,83"
              fill="none"
              stroke="#0891b2"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ x: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
            />
          </svg>
          <span className="absolute bottom-1 text-[11px] font-semibold text-cyan-800 bg-cyan-100/90 px-2 py-0.5 rounded-full border border-cyan-300">
            Juntar omóplatos / abrir pecho
          </span>
        </div>
      );

    case 'shoulder_rolls':
      return (
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full">
            <circle cx="80" cy="45" r="15" fill="#0d9488" />
            <path d="M45,85 Q80,72 115,85" fill="none" stroke="#0f766e" strokeWidth="7" strokeLinecap="round" />
            <line x1="45" y1="85" x2="38" y2="125" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
            <line x1="115" y1="85" x2="122" y2="125" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
            
            {/* Circular rotating arrows on shoulders */}
            <motion.path
              d="M35,75 A14,14 0 1,1 48,92"
              fill="none"
              stroke="#0284c7"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="4 2"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              style={{ transformOrigin: "42px 85px" }}
            />
            <motion.path
              d="M115,75 A14,14 0 1,1 128,92"
              fill="none"
              stroke="#0284c7"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="4 2"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              style={{ transformOrigin: "118px 85px" }}
            />
          </svg>
          <span className="absolute bottom-1 text-[11px] font-semibold text-teal-800 bg-teal-100/90 px-2 py-0.5 rounded-full border border-teal-300">
            Círculos continuos
          </span>
        </div>
      );

    case 'chin_tuck':
      return (
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full">
            <line x1="80" y1="130" x2="80" y2="85" stroke="#0f766e" strokeWidth="7" strokeLinecap="round" />
            <motion.g
              animate={{ rotate: [0, 20, 20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{ transformOrigin: "80px 85px" }}
            >
              <circle cx="80" cy="55" r="20" fill="#0d9488" />
              {/* Face silhouette looking down */}
              <path d="M78,55 L70,62 L75,64" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            </motion.g>
            {/* Hands on back of head */}
            <path d="M95,48 Q85,42 75,45" fill="none" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <span className="absolute bottom-1 text-[11px] font-semibold text-teal-800 bg-teal-100/90 px-2 py-0.5 rounded-full border border-teal-300">
            Mentón al pecho suave
          </span>
        </div>
      );

    case 'wrist_extension':
      return (
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full">
            {/* Forearm extended */}
            <rect x="25" y="76" width="60" height="14" rx="7" fill="#0f766e" />
            {/* Palm facing forward with fingers pulled back */}
            <path d="M85,76 L92,50 Q96,44 102,46 Q108,50 102,76 Z" fill="#0d9488" />
            {/* Helping hand pulling fingers back */}
            <path d="M102,46 Q112,50 108,70" fill="none" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" />
            {/* Stretch tension arrow */}
            <motion.path
              d="M108,58 L124,58 M124,58 L118,52 M124,58 L118,64"
              fill="none"
              stroke="#0284c7"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            {/* Wrist carpal tunnel highlight */}
            <circle cx="85" cy="83" r="6" fill="#38bdf8" fillOpacity="0.5" />
          </svg>
          <span className="absolute bottom-1 text-[11px] font-semibold text-sky-800 bg-sky-100/90 px-2 py-0.5 rounded-full border border-sky-300">
            Flexión y extensión de carpo
          </span>
        </div>
      );

    case 'finger_spread':
      return (
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full">
            {/* Palm */}
            <ellipse cx="80" cy="95" rx="20" ry="18" fill="#0d9488" />
            {/* Wrist */}
            <rect x="72" y="112" width="16" height="22" rx="4" fill="#0f766e" />
            
            {/* Animated Fingers spreading */}
            <motion.g
              animate={{ scale: [0.9, 1.15, 0.9] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ transformOrigin: "80px 95px" }}
            >
              {/* Thumb */}
              <line x1="64" y1="95" x2="44" y2="85" stroke="#0d9488" strokeWidth="6" strokeLinecap="round" />
              {/* Index */}
              <line x1="70" y1="80" x2="58" y2="48" stroke="#0d9488" strokeWidth="5" strokeLinecap="round" />
              {/* Middle */}
              <line x1="80" y1="78" x2="80" y2="42" stroke="#0d9488" strokeWidth="5.5" strokeLinecap="round" />
              {/* Ring */}
              <line x1="90" y1="80" x2="102" y2="48" stroke="#0d9488" strokeWidth="5" strokeLinecap="round" />
              {/* Pinky */}
              <line x1="96" y1="95" x2="116" y2="85" stroke="#0d9488" strokeWidth="4.5" strokeLinecap="round" />
            </motion.g>
          </svg>
          <span className="absolute bottom-1 text-[11px] font-semibold text-sky-800 bg-sky-100/90 px-2 py-0.5 rounded-full border border-sky-300">
            Abre en estrella y cierra
          </span>
        </div>
      );

    case 'thumb_massage':
      return (
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full">
            {/* Palm base */}
            <path d="M60,110 Q50,75 75,70 Q95,70 100,105 Z" fill="#0d9488" />
            {/* Thenar eminence circle */}
            <circle cx="70" cy="92" r="14" fill="#38bdf8" fillOpacity="0.4" />
            {/* Finger massaging circular motion */}
            <motion.circle
              cx="70"
              cy="92"
              r="8"
              fill="#0369a1"
              animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            {/* Circular arrows */}
            <motion.path
              d="M60,86 A12,12 0 1,1 78,102"
              fill="none"
              stroke="#0284c7"
              strokeWidth="2.5"
              strokeDasharray="3 2"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              style={{ transformOrigin: "70px 92px" }}
            />
          </svg>
          <span className="absolute bottom-1 text-[11px] font-semibold text-sky-800 bg-sky-100/90 px-2 py-0.5 rounded-full border border-sky-300">
            Masaje en base del pulgar
          </span>
        </div>
      );

    case 'wrist_shake':
      return (
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full">
            <motion.g
              animate={{ x: [-6, 6, -6], rotate: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
              style={{ transformOrigin: "80px 40px" }}
            >
              <line x1="80" y1="30" x2="80" y2="85" stroke="#0f766e" strokeWidth="6" strokeLinecap="round" />
              <ellipse cx="80" cy="105" rx="14" ry="16" fill="#0d9488" />
              <line x1="72" y1="120" x2="70" y2="135" stroke="#0d9488" strokeWidth="4" strokeLinecap="round" />
              <line x1="78" y1="122" x2="78" y2="140" stroke="#0d9488" strokeWidth="4" strokeLinecap="round" />
              <line x1="84" y1="122" x2="86" y2="138" stroke="#0d9488" strokeWidth="4" strokeLinecap="round" />
            </motion.g>
            {/* Vibration wave ripples */}
            <motion.path
              d="M50,105 Q45,100 50,95 M42,110 Q35,100 42,90"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
            <motion.path
              d="M110,105 Q115,100 110,95 M118,110 Q125,100 118,90"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </svg>
          <span className="absolute bottom-1 text-[11px] font-semibold text-sky-800 bg-sky-100/90 px-2 py-0.5 rounded-full border border-sky-300">
            Sacudida suave de manos
          </span>
        </div>
      );

    case 'rule_20_20':
      return (
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full">
            {/* Eye silhouette */}
            <path d="M30,80 Q80,45 130,80 Q80,115 30,80 Z" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="4" />
            {/* Iris */}
            <circle cx="80" cy="80" r="20" fill="#4338ca" />
            <circle cx="80" cy="80" r="10" fill="#1e1b4b" />
            <circle cx="85" cy="75" r="4" fill="#ffffff" />
            
            {/* Far vision perspective lines */}
            <motion.line
              x1="90" y1="80" x2="145" y2="50"
              stroke="#6366f1"
              strokeWidth="2"
              strokeDasharray="4 3"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <motion.line
              x1="90" y1="80" x2="145" y2="110"
              stroke="#6366f1"
              strokeWidth="2"
              strokeDasharray="4 3"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </svg>
          <span className="absolute bottom-1 text-[11px] font-semibold text-indigo-800 bg-indigo-100/90 px-2 py-0.5 rounded-full border border-indigo-300">
            Mirada a &gt;6 metros
          </span>
        </div>
      );

    case 'eye_roll':
      return (
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full">
            {/* Infinity loop path */}
            <path
              d="M45,80 C45,65 65,65 80,80 C95,95 115,95 115,80 C115,65 95,65 80,80 C65,95 45,95 45,80 Z"
              fill="none"
              stroke="#c7d2fe"
              strokeWidth="5"
            />
            {/* Moving eye pupil on figure 8 */}
            <motion.circle
              cx="80"
              cy="80"
              r="9"
              fill="#4f46e5"
              animate={{
                x: [-35, -20, 0, 20, 35, 20, 0, -20, -35],
                y: [0, -12, 0, 12, 0, -12, 0, 12, 0],
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </svg>
          <span className="absolute bottom-1 text-[11px] font-semibold text-indigo-800 bg-indigo-100/90 px-2 py-0.5 rounded-full border border-indigo-300">
            Traza un ocho lento (∞)
          </span>
        </div>
      );

    case 'palming':
      return (
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full">
            {/* Gentle dark warm field */}
            <rect x="25" y="30" width="110" height="90" rx="20" fill="#1e1b4b" />
            <motion.circle
              cx="58"
              cy="75"
              r="22"
              fill="#4338ca"
              animate={{ opacity: [0.6, 0.9, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            />
            <motion.circle
              cx="102"
              cy="75"
              r="22"
              fill="#4338ca"
              animate={{ opacity: [0.6, 0.9, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            />
            {/* Soft warmth waves */}
            <path d="M50,105 Q58,95 66,105" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M94,105 Q102,95 110,105" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="absolute bottom-1 text-[11px] font-semibold text-indigo-800 bg-indigo-100/90 px-2 py-0.5 rounded-full border border-indigo-300">
            Palmas tibias en cuenca ocular
          </span>
        </div>
      );

    case 'temple_massage':
      return (
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full">
            <circle cx="80" cy="75" r="38" fill="#e0e7ff" />
            {/* Eyes closed peacefully */}
            <path d="M60,78 Q66,84 72,78" fill="none" stroke="#4338ca" strokeWidth="3" strokeLinecap="round" />
            <path d="M88,78 Q94,84 100,78" fill="none" stroke="#4338ca" strokeWidth="3" strokeLinecap="round" />
            
            {/* Temple circular massage spots */}
            <motion.circle
              cx="46"
              cy="72"
              r="9"
              fill="#6366f1"
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 0.9, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            />
            <motion.circle
              cx="114"
              cy="72"
              r="9"
              fill="#6366f1"
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 0.9, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            />
          </svg>
          <span className="absolute bottom-1 text-[11px] font-semibold text-indigo-800 bg-indigo-100/90 px-2 py-0.5 rounded-full border border-indigo-300">
            Círculos suaves en las sienes
          </span>
        </div>
      );

    case 'box_breathing':
    default:
      return (
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
          {/* Outer soothing ripples */}
          <motion.div
            className="absolute rounded-full bg-rose-200/50 border border-rose-300"
            animate={{
              scale: [0.75, 1.25, 1.25, 0.75],
              opacity: [0.4, 0.8, 0.8, 0.4]
            }}
            transition={{
              repeat: Infinity,
              duration: 14, // 4s inhale, 4s hold, 6s exhale
              times: [0, 4/14, 8/14, 1],
              ease: "easeInOut"
            }}
            style={{ width: '130px', height: '130px' }}
          />
          {/* Inner core orb */}
          <motion.div
            className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-rose-500 via-pink-500 to-rose-400 shadow-md flex items-center justify-center text-white font-medium"
            animate={{
              scale: [0.85, 1.15, 1.15, 0.85],
            }}
            transition={{
              repeat: Infinity,
              duration: 14,
              times: [0, 4/14, 8/14, 1],
              ease: "easeInOut"
            }}
          >
            <motion.span
              key="breath-text"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-xs font-semibold text-center leading-tight px-1"
            >
              Pulso<br/>Vagal
            </motion.span>
          </motion.div>
          <span className="absolute bottom-0 text-[11px] font-semibold text-rose-800 bg-rose-100/90 px-2 py-0.5 rounded-full border border-rose-300 z-20">
            Inhala 4s • Retén 4s • Exhala 6s
          </span>
        </div>
      );
  }
};
