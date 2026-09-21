import React, { useState, useEffect } from 'react';
import { PauseRoutine, ShiftRecord } from './types';
import { HUV_ROUTINES } from './data/routines';
import { Navbar } from './components/Navbar';
import { RoutineSelector } from './components/RoutineSelector';
import { ActivePauseSession } from './components/ActivePauseSession';
import { QrModal } from './components/QrModal';
import { ErgonomicTips } from './components/ErgonomicTips';
import { soundManager } from './utils/audio';
import {
  QrCode,
  Sparkles,
  Clock,
  ShieldAlert,
  HeartHandshake,
  RotateCcw,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';

const STORAGE_KEY = 'huv_obstetric_shift_stats_v1';

export default function App() {
  const [selectedRoutine, setSelectedRoutine] = useState<PauseRoutine | null>(null);
  const [isQrModalOpen, setIsQrModalOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(soundManager.getMuted());
  const [shiftStats, setShiftStats] = useState<ShiftRecord>({
    completedCount: 0,
    totalSeconds: 0,
    lastCompletedDate: '',
    completedCategories: [],
  });

  // Load shift stats from local storage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setShiftStats(parsed);
      }
    } catch {
      // Ignore local storage error
    }
  }, []);

  const handleRoutineCompleted = (routineId: string) => {
    const nextCategories = Array.from(new Set([...shiftStats.completedCategories, routineId]));
    const updatedStats: ShiftRecord = {
      completedCount: shiftStats.completedCount + 1,
      totalSeconds: shiftStats.totalSeconds + 120,
      lastCompletedDate: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      completedCategories: nextCategories,
    };
    setShiftStats(updatedStats);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStats));
    } catch {
      // Ignore
    }
  };

  const handleResetShift = () => {
    if (window.confirm('¿Deseas reiniciar el contador de pausas para un nuevo turno?')) {
      const freshStats: ShiftRecord = {
        completedCount: 0,
        totalSeconds: 0,
        lastCompletedDate: '',
        completedCategories: [],
      };
      setShiftStats(freshStats);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(freshStats));
      } catch {
        // Ignore
      }
    }
  };

  const handleToggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    soundManager.setMuted(next);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Navbar with HUV identity and QR access */}
      <Navbar
        completedCount={shiftStats.completedCount}
        onOpenQr={() => setIsQrModalOpen(true)}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-5 sm:py-8">
        {selectedRoutine ? (
          /* Active 2-minute Session View */
          <ActivePauseSession
            routine={selectedRoutine}
            onExit={() => setSelectedRoutine(null)}
            onCompleted={handleRoutineCompleted}
          />
        ) : (
          /* Main Dashboard: Routine Selection & Quick Shift Tools */
          <div className="space-y-6">
            {/* Hero Banner with Medical Context */}
            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md">
              {/* Background watermark badge */}
              <div className="absolute right-[-20px] bottom-[-20px] opacity-10 text-white select-none pointer-events-none font-display font-black text-9xl">
                HUV
              </div>

              <div className="relative z-10 max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/60 border border-emerald-500/40 text-emerald-200 text-xs font-semibold backdrop-blur-xs">
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span>Servicio de Sala de Partos y Urgencias Ginecológicas</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Pausa Activa de 2 Minutos
                </h1>

                <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                  Diseñada para el personal de turno: obstetras, enfermeras, auxiliares, instrumentadores y anestesiólogos. Realízala directamente en tu área de trabajo sin cambiarte de ropa ni suspender tu operatividad asistencial.
                </p>

                {/* Badges / Features */}
                <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-xs font-medium border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-emerald-300" />
                    <span>2 minutos cronometrados</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-xs font-medium border border-white/10">
                    <QrCode className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Acceso móvil por código QR</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-xs font-medium border border-white/10">
                    <ShieldAlert className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Seguro y sin equipo especial</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shift Tracker Banner */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {shiftStats.completedCount === 0
                      ? 'Inicia tu primera pausa de turno'
                      : `${shiftStats.completedCount} ${shiftStats.completedCount === 1 ? 'pausa completada' : 'pausas completadas'} en este turno`}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {shiftStats.completedCount === 0
                      ? 'Se aconseja realizar una pausa de 2 minutos cada 2 a 3 horas de atención.'
                      : `Has invertido ${(shiftStats.completedCount * 2)} minutos en tu bienestar postural y mental.`}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                {shiftStats.completedCount > 0 && (
                  <button
                    id="reset-shift-counter-btn"
                    onClick={handleResetShift}
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                    title="Reiniciar contador para nuevo turno"
                    aria-label="Reiniciar contador de turno"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}

                <button
                  id="open-qr-banner-btn"
                  onClick={() => setIsQrModalOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-semibold rounded-xl border border-emerald-200 transition-colors"
                >
                  <QrCode className="w-4 h-4 text-emerald-700" />
                  <span>Compartir QR con colega</span>
                </button>
              </div>
            </div>

            {/* Routines Grid */}
            <RoutineSelector
              routines={HUV_ROUTINES}
              onSelectRoutine={(r) => setSelectedRoutine(r)}
              completedCategories={shiftStats.completedCategories}
            />

            {/* Ergonomic & Occupational Safety Tips Accordion */}
            <ErgonomicTips />
          </div>
        )}
      </main>

      {/* Institutional Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4 space-y-2">
          <div className="flex items-center justify-center gap-2 text-slate-700 font-semibold">
            <span>Hospital Universitario del Valle "Evaristo García" E.S.E.</span>
            <span>•</span>
            <span>Cali, Colombia</span>
          </div>
          <p className="text-slate-400 text-[11px]">
            Servicio de Sala de Partos y Salud Ocupacional • Aplicación estática de acceso instantáneo mediante código QR móvil.
          </p>
          <div className="pt-1 flex items-center justify-center gap-1 text-[11px] text-emerald-800">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Comprometidos con el bienestar de quienes cuidan la vida</span>
          </div>
        </div>
      </footer>

      {/* QR Access Modal */}
      <QrModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />
    </div>
  );
}
