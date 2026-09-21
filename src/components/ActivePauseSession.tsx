import React, { useState, useEffect, useRef } from 'react';
import { PauseRoutine, RoutineStep } from '../types';
import { ExerciseGraphics } from './ExerciseGraphics';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  Play,
  Pause,
  RotateCcw,
  SkipForward,
  Volume2,
  VolumeX,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronRight,
  ArrowLeft,
  Heart
} from 'lucide-react';

interface ActivePauseSessionProps {
  routine: PauseRoutine;
  onExit: () => void;
  onCompleted: (routineId: string) => void;
}

export const ActivePauseSession: React.FC<ActivePauseSessionProps> = ({
  routine,
  onExit,
  onCompleted,
}) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(120);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(soundManager.getMuted());
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [emergencyCancelled, setEmergencyCancelled] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentStep: RoutineStep = routine.steps[currentStepIndex] || routine.steps[0];
  const totalDuration = 120;
  const elapsed = totalDuration - secondsLeft;
  const progressPercent = ((totalDuration - secondsLeft) / totalDuration) * 100;

  // Calculate current step's internal time
  // Each step is 30s in our 120s routines
  const stepElapsed = elapsed % 30;
  const stepSecondsRemaining = 30 - stepElapsed;

  // Sound toggle
  const toggleSound = () => {
    const next = !isMuted;
    setIsMuted(next);
    soundManager.setMuted(next);
  };

  // Timer loop
  useEffect(() => {
    if (isRunning && secondsLeft > 0 && !isFinished && !emergencyCancelled) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleCompleteSession();
            return 0;
          }
          const next = prev - 1;
          const currentElapsed = totalDuration - next;

          // Check if step changes (every 30 seconds: at 30, 60, 90)
          const newStepIdx = Math.min(Math.floor(currentElapsed / 30), routine.steps.length - 1);
          if (newStepIdx !== currentStepIndex && newStepIdx < routine.steps.length) {
            setCurrentStepIndex(newStepIdx);
            soundManager.playStepChime();
          }

          return next;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, secondsLeft, isFinished, emergencyCancelled, currentStepIndex, routine.steps.length]);

  // Initial chime when starting session
  useEffect(() => {
    soundManager.playStepChime();
  }, []);

  const handleCompleteSession = () => {
    setIsFinished(true);
    setIsRunning(false);
    soundManager.playCompleteFanfare();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0d9488', '#10b981', '#0284c7', '#f43f5e'],
      });
    } catch {
      // Ignored
    }
    onCompleted(routine.id);
  };

  const handleRestart = () => {
    setSecondsLeft(120);
    setCurrentStepIndex(0);
    setIsFinished(false);
    setEmergencyCancelled(false);
    setIsRunning(true);
    soundManager.playStepChime();
  };

  const handleNextStep = () => {
    if (currentStepIndex < routine.steps.length - 1) {
      const nextIdx = currentStepIndex + 1;
      setCurrentStepIndex(nextIdx);
      // Advance seconds to that step boundary
      const targetElapsed = nextIdx * 30;
      setSecondsLeft(totalDuration - targetElapsed);
      soundManager.playStepChime();
    } else {
      handleCompleteSession();
    }
  };

  const formatMinutesSeconds = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Emergency exit dialog / state
  if (emergencyCancelled) {
    return (
      <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-xl border border-rose-200 p-6 text-center animate-fade-in space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-display font-bold text-slate-900">
          Pausa suspendida por llamado asistencial
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Comprendemos que la prioridad en la Sala de Partos del HUV es la vida y la seguridad materno-perinatal. ¡Gracias por tu entrega en este turno!
        </p>
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            id="emergency-resume-btn"
            onClick={() => {
              setEmergencyCancelled(false);
              setIsRunning(true);
            }}
            className="py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-colors"
          >
            Reanudar pausa activa
          </button>
          <button
            id="emergency-exit-btn"
            onClick={onExit}
            className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-sm font-semibold transition-colors shadow-xs"
          >
            Volver a la estación
          </button>
        </div>
      </div>
    );
  }

  // Finished view
  if (isFinished) {
    return (
      <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-xl border border-emerald-200 p-6 text-center animate-fade-in space-y-5">
        <div className="w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto ring-8 ring-emerald-50 shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        
        <div className="space-y-1">
          <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" /> Pausa completada (2 min)
          </span>
          <h2 className="text-2xl font-display font-extrabold text-slate-900">
            ¡Excelente labor de autocuidado!
          </h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Has regalado 120 segundos de oxigenación a tu cuerpo y mente. Tu bienestar es clave para atender con precisión y calidez a nuestras pacientes del HUV.
          </p>
        </div>

        {/* Routine Summary Pill */}
        <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 text-left space-y-1.5">
          <div className="flex items-center justify-between text-xs font-semibold text-emerald-950">
            <span>Rutina realizada:</span>
            <span className="text-emerald-700">{routine.name}</span>
          </div>
          <p className="text-xs text-slate-600">
            <strong>Impacto:</strong> {routine.benefit}
          </p>
        </div>

        {/* Motivational Quote for Obstetric Staff */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 italic">
          <Heart className="w-3.5 h-3.5 text-rose-500" />
          <span>"Cuidar a quienes dan vida empieza por cuidarte a ti."</span>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            id="repeat-routine-btn"
            onClick={handleRestart}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 text-slate-700 text-sm font-semibold transition-all shadow-2xs"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Repetir</span>
          </button>
          <button
            id="exit-to-menu-btn"
            onClick={onExit}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-semibold transition-all shadow-xs"
          >
            <span>Ver más pausas</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto space-y-4 animate-fade-in">
      {/* Top Session Header with Quick Controls */}
      <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-slate-200 shadow-2xs">
        <button
          id="back-to-menu-btn"
          onClick={onExit}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors p-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Cambiar ejercicio</span>
        </button>

        <div className="text-center">
          <h2 className="text-sm font-display font-bold text-slate-900 truncate max-w-[200px] sm:max-w-xs">
            {routine.name}
          </h2>
          <span className="text-[11px] text-emerald-800 font-medium">
            Paso {currentStepIndex + 1} de {routine.steps.length} • 2 min en total
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            id="toggle-sound-session-btn"
            onClick={toggleSound}
            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
            title={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
            aria-label="Silenciar o activar campana"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-emerald-700" />}
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Step Progress Indicators */}
        <div className="grid grid-cols-4 gap-1 p-2 bg-slate-50 border-b border-slate-200">
          {routine.steps.map((st, idx) => {
            const isPast = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;
            return (
              <div
                key={st.id}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isPast
                    ? 'bg-emerald-600'
                    : isCurrent
                    ? 'bg-emerald-500 ring-2 ring-emerald-200'
                    : 'bg-slate-200'
                }`}
              />
            );
          })}
        </div>

        <div className="p-5 sm:p-7 space-y-6">
          {/* Circular Countdown Display & SVG Graphic */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Exercise Visual Graphic */}
            <div className="w-full sm:w-1/2 flex items-center justify-center p-3 bg-slate-50/70 rounded-2xl border border-slate-200/80">
              <ExerciseGraphics
                type={currentStep.visualGraphic}
                stepSecondsRemaining={stepSecondsRemaining}
                totalStepSeconds={30}
              />
            </div>

            {/* Circular Countdown Ring */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-36 h-36 flex items-center justify-center">
                {/* Background Ring */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    className="text-slate-100"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                  />
                  {/* Progress Ring */}
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    className="text-emerald-700 transition-all duration-1000 ease-linear"
                    strokeWidth="8"
                    strokeDasharray={2 * Math.PI * 52}
                    strokeDashoffset={2 * Math.PI * 52 * (1 - progressPercent / 100)}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                  />
                </svg>

                {/* Center Time Counter */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
                    {formatMinutesSeconds(secondsLeft)}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    Restante
                  </span>
                </div>
              </div>

              {/* Step counter badge */}
              <div className="mt-2 text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Paso actual: {stepSecondsRemaining}s</span>
              </div>
            </div>
          </div>

          {/* Current Step Instruction Card */}
          <div className="space-y-3 pt-1">
            <div className="space-y-1">
              <h3 className="text-lg font-display font-bold text-slate-900">
                {currentStep.title}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {currentStep.instruction}
              </p>
            </div>

            {/* Focus Action & Clinical Rationale Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-900 block mb-0.5">
                  Acción clave
                </span>
                <p className="text-xs font-medium text-emerald-950">
                  {currentStep.keyAction}
                </p>
              </div>

              <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-200/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-900 block mb-0.5">
                  Beneficio asistencial
                </span>
                <p className="text-xs text-teal-950">
                  {currentStep.clinicalTip}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Player Controls */}
          <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-100">
            {/* Play/Pause Main Button */}
            <button
              id="play-pause-toggle-btn"
              onClick={() => setIsRunning(!isRunning)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all shadow-xs ${
                isRunning
                  ? 'bg-slate-800 hover:bg-slate-900 text-white'
                  : 'bg-emerald-700 hover:bg-emerald-800 text-white'
              }`}
            >
              {isRunning ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pausar</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Continuar</span>
                </>
              )}
            </button>

            {/* Next Step */}
            <button
              id="skip-step-btn"
              onClick={handleNextStep}
              className="p-3 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors"
              title="Siguiente movimiento"
              aria-label="Siguiente paso de la pausa"
            >
              <SkipForward className="w-5 h-5" />
            </button>

            {/* Restart */}
            <button
              id="restart-session-btn"
              onClick={handleRestart}
              className="p-3 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors"
              title="Reiniciar a 2:00"
              aria-label="Reiniciar rutina de 2 minutos"
            >
              <RotateCcw className="w-5 h-5" />
            </button>

            {/* Emergency interruption */}
            <button
              id="emergency-interrupt-btn"
              onClick={() => {
                setIsRunning(false);
                setEmergencyCancelled(true);
              }}
              className="px-3 py-3 rounded-xl border border-rose-200 bg-rose-50/50 hover:bg-rose-100/70 text-rose-700 text-xs font-semibold transition-colors flex items-center gap-1.5"
              title="Interrumpir por urgencia obstétrica o llamado a sala"
            >
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span className="hidden md:inline">Llamado a Sala</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
