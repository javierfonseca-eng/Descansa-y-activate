import React from 'react';
import { QrCode, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  completedCount: number;
  onOpenQr: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  completedCount,
  onOpenQr,
  isMuted,
  onToggleMute,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* HUV Logo / Branding */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-teal-900 text-white flex items-center justify-center font-display font-extrabold text-lg shadow-xs shrink-0 tracking-tighter">
            HUV
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="font-display font-bold text-sm sm:text-base text-slate-900 leading-tight truncate">
                Hospital Universitario del Valle
              </h1>
              <span className="hidden sm:inline-block text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded border border-emerald-200">
                Evaristo García E.S.E.
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium truncate">
              Sala de Partos • Pausas Activas de 2 Minutos
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Shift Counter */}
          <div
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs font-semibold text-emerald-900"
            title="Pausas activas de 2 minutos completadas en tu turno"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Turno: {completedCount} {completedCount === 1 ? 'pausa' : 'pausas'}</span>
          </div>

          {/* Sound Toggle */}
          <button
            id="navbar-sound-toggle-btn"
            onClick={onToggleMute}
            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
            title={isMuted ? 'Activar campanilla' : 'Silenciar campanilla'}
            aria-label="Silenciar o activar campanilla"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-emerald-700" />}
          </button>

          {/* QR Code Trigger Button */}
          <button
            id="navbar-open-qr-btn"
            onClick={onOpenQr}
            className="flex items-center gap-1.5 px-3 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
            aria-label="Abrir código QR para compartir en el celular"
          >
            <QrCode className="w-4 h-4 text-emerald-200" />
            <span className="hidden sm:inline">Código QR</span>
          </button>
        </div>
      </div>
    </header>
  );
};
