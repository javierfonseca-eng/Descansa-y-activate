import React from 'react';
import { PauseRoutine } from '../types';
import {
  Clock,
  Play,
  Activity,
  Sparkles,
  Eye,
  HeartPulse,
  Hand,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface RoutineSelectorProps {
  routines: PauseRoutine[];
  onSelectRoutine: (routine: PauseRoutine) => void;
  completedCategories: string[];
}

export const RoutineSelector: React.FC<RoutineSelectorProps> = ({
  routines,
  onSelectRoutine,
  completedCategories,
}) => {
  const getRoutineIcon = (id: string) => {
    switch (id) {
      case 'lumbar':
        return <Activity className="w-5 h-5 text-emerald-700" />;
      case 'cervical':
        return <ShieldCheck className="w-5 h-5 text-teal-700" />;
      case 'hands':
        return <Hand className="w-5 h-5 text-sky-700" />;
      case 'visual':
        return <Eye className="w-5 h-5 text-indigo-700" />;
      case 'breathing':
      default:
        return <HeartPulse className="w-5 h-5 text-rose-700" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <h2 className="text-xl font-display font-extrabold text-slate-900 tracking-tight">
            Selecciona tu pausa de hoy (2 minutos)
          </h2>
          <p className="text-xs text-slate-600">
            Diseñadas específicamente para el ritmo y la exigencia postural en Sala de Partos
          </p>
        </div>
        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-emerald-50 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
          <Clock className="w-3.5 h-3.5" />
          <span>Tiempo fijo: 120 segundos</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {routines.map((routine) => {
          const isDone = completedCategories.includes(routine.id);

          return (
            <div
              key={routine.id}
              id={`routine-card-${routine.id}`}
              onClick={() => onSelectRoutine(routine)}
              className={`group text-left bg-white p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-2xs hover:shadow-md ${
                isDone
                  ? 'border-emerald-300 ring-1 ring-emerald-200 bg-emerald-50/20'
                  : 'border-slate-200/90 hover:border-emerald-400'
              }`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getRoutineIcon(routine.id)}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block">
                        {routine.shortTag}
                      </span>
                      <h3 className="text-base font-display font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                        {routine.name}
                      </h3>
                    </div>
                  </div>

                  {isDone && (
                    <span className="shrink-0 flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                      <Sparkles className="w-3 h-3 text-emerald-600" />
                      Hecho hoy
                    </span>
                  )}
                </div>

                {/* Description & benefit */}
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {routine.benefit}
                </p>

                {/* Practical recommendation in Ward */}
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/70 text-[11px] text-slate-600 mb-4">
                  <span className="font-semibold text-slate-800">Ideal para: </span>
                  {routine.recommendedFor}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-500">
                  4 fases • 30s c/u
                </span>
                <span className="inline-flex items-center gap-1.5 font-bold text-emerald-800 group-hover:text-emerald-900 group-hover:translate-x-0.5 transition-all">
                  <span>Iniciar pausa</span>
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
