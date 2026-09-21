import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { X, QrCode, Download, Share2, Check, Copy, MapPin, Printer } from 'lucide-react';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({ isOpen, onClose }) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      setCurrentUrl(url);
      QRCode.toDataURL(url, {
        width: 320,
        margin: 2,
        color: {
          dark: '#064e3b', // HUV forest green
          light: '#ffffff',
        },
      }).then((data) => {
        setQrDataUrl(data);
      }).catch(err => console.error(err));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleDownloadQr = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = 'QR_Pausa_Activa_Sala_Partos_HUV.png';
    link.click();
  };

  const handlePrintBadge = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div 
        id="qr-modal-card"
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-emerald-800 to-teal-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-700/80 flex items-center justify-center text-emerald-100">
              <QrCode className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white leading-tight">
                Código QR para Sala de Partos
              </h3>
              <p className="text-xs text-emerald-200">
                Hospital Universitario del Valle Evaristo García E.S.E.
              </p>
            </div>
          </div>
          <button
            id="close-qr-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-700/60 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-center">
          <p className="text-sm text-slate-600 leading-relaxed">
            Escanea desde la cámara de tu celular en el puesto de trabajo para iniciar tu <strong className="text-emerald-950 font-semibold">pausa de 2 minutos</strong> sin instalar nada.
          </p>

          {/* QR Display Card */}
          <div className="mx-auto w-64 p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 flex flex-col items-center shadow-xs">
            <div className="bg-white p-2.5 rounded-lg shadow-xs border border-slate-100">
              {qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt="QR Pausa Activa HUV Sala de Partos"
                  className="w-52 h-52 object-contain"
                />
              ) : (
                <div className="w-52 h-52 flex items-center justify-center text-slate-400">
                  Generando QR...
                </div>
              )}
            </div>
            <div className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-emerald-900">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span>HUV • Ginecobstetricia • 2 Minutos</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <button
              id="copy-qr-url-btn"
              onClick={handleCopyLink}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 text-slate-700 text-xs font-semibold transition-all shadow-2xs"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
              <span>{copied ? '¡Enlace copiado!' : 'Copiar enlace'}</span>
            </button>

            <button
              id="download-qr-btn"
              onClick={handleDownloadQr}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold transition-all shadow-xs"
            >
              <Download className="w-4 h-4 text-emerald-200" />
              <span>Guardar imagen</span>
            </button>
          </div>

          {/* Suggested Locations */}
          <div className="text-left bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <MapPin className="w-3.5 h-3.5 text-emerald-700" />
              <span>Puntos sugeridos para fijar el QR en el servicio:</span>
            </div>
            <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
              <li>Central de Monitoreo Fetal y estación de enfermería.</li>
              <li>Zona de lavado quirúrgico previo a sala de partos.</li>
              <li>Estar médico y sala de descanso del personal de turno.</li>
              <li>Puerta del vestier de ropa quirúrgica asistencial.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Acceso directo desde celulares</span>
          <button
            id="print-qr-card-btn"
            onClick={handlePrintBadge}
            className="flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-medium"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimir afiche</span>
          </button>
        </div>
      </div>
    </div>
  );
};
