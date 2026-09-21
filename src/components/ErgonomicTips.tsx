import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, ChevronUp, Stethoscope, HeartHandshake, Zap } from 'lucide-react';

export const ErgonomicTips: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const tips = [
    {
      title: 'Ajuste de camilla obstétrica',
      desc: 'Regula la altura de la camilla a nivel de tus crestas ilíacas antes de atender el expulsivo o revisión de canal; evita flexionar el tronco por más de 10 minutos seguidos.',
      icon: Stethoscope,
    },
    {
      title: 'Bases de sustentación amplias',
      desc: 'Separa los pies al ancho de los hombros y alterna el peso de una pierna a otra durante la vigilancia del trabajo de parto.',
      icon: ShieldCheck,
    },
    {
      title: 'Toma de la pausa de 2 minutos',
      desc: 'Realizar 2 minutos de descompresión cada 2 a 3 horas reduce en un 64% la fatiga neuromuscular y el riesgo de errores en la dosificación y registro clínico.',
      icon: Zap,
    },
    {
      title: 'Cuidado emocional del equipo',
      desc: 'Tras una cesárea de emergencia o código rojo, haz la pausa de respiración guiada junto a tu compañero de turno para desacelerar la respuesta de alerta.',
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs">
      <button
        id="toggle-ergonomic-tips-btn"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">
              Guía de Ergonomía y Salud Ocupacional HUV
            </h4>
            <p className="text-[11px] text-slate-500">
              Recomendaciones del Servicio de Seguridad y Salud en el Trabajo para Sala de Partos
            </p>
          </div>
        </div>
        <div className="text-slate-400">
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {isExpanded && (
        <div className="p-5 pt-1 border-t border-slate-100 bg-slate-50/50 grid grid-cols-1 md:grid-cols-2 gap-3 animate-fade-in">
          {tips.map((tip, idx) => {
            const Icon = tip.icon;
            return (
              <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <Icon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{tip.title}</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed pl-5.5">
                  {tip.desc}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
