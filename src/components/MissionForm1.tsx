import { useState, useEffect } from 'react';
import { MISSIONS_FORM1, MISSIONS_FDG_COMUN } from '../types';
import type { Form1State, MissionWithStatus } from '../types';

interface MissionForm1Props {
  onDataChange: (data: Form1State) => void;
}

export default function MissionForm1({ onDataChange }: MissionForm1Props) {
  const [formData, setFormData] = useState<Form1State>(() => {
    const initial: Form1State = {};
    // Initialize Borrado Gremial
    MISSIONS_FORM1.forEach((_mission, index) => {
      initial[`mission_${index}`] = {
        enabled: false,
        value1: 0,
        value2: 0,
      };
    });
    // Initialize FDG Común
    MISSIONS_FDG_COMUN.forEach((_mission, index) => {
      initial[`comun_${index}`] = {
        enabled: false,
        value1: 0,
        value2: 0,
      };
    });
    return initial;
  });

  useEffect(() => {
    onDataChange(formData);
  }, [formData, onDataChange]);

  const handleCheckboxChange = (missionKey: string) => {
    setFormData(prev => {
      const current = prev[missionKey] || { enabled: false, value1: 0, value2: 0 };
      return {
        ...prev,
        [missionKey]: {
          ...current,
          enabled: !current.enabled,
        },
      };
    });
  };

  const handleInputChange = (missionKey: string, field: 'value1' | 'value2', value: string) => {
    const numValue = value === '' ? 0 : parseInt(value, 10);
    
    // Validate range 0-400
    if (numValue < 0 || numValue > 400) return;

    setFormData(prev => {
      const current = prev[missionKey] || { enabled: false, value1: 0, value2: 0 };
      return {
        ...prev,
        [missionKey]: {
          ...current,
          [field]: numValue,
        },
      };
    });
  };

  const getAutomatedBadge = (status: 'SI' | 'NO' | 'PARCIAL' | null) => {
    if (!status) return null;
    
    const colors = {
      SI: 'bg-green-600/20 text-green-300 border-green-500/30',
      NO: 'bg-red-600/20 text-red-300 border-red-500/30',
      PARCIAL: 'bg-yellow-600/20 text-yellow-300 border-yellow-500/30',
    };

    return (
      <div className="mt-1">
        <span className="text-xs text-gray-500">¿Automáticas?</span>
        <span className={`ml-2 px-2 py-0.5 rounded text-xs font-semibold border ${colors[status]}`}>
          {status}
        </span>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* PARTE 1: BORRADO GREMIAL */}
      <div>
        <h2 className="text-xl font-bold text-green-400 mb-4 pb-2 border-b border-green-400/30">
          Borrado Gremial
        </h2>
        <div className="space-y-3">
          {MISSIONS_FORM1.map((mission, index) => {
            const missionKey = `mission_${index}`;
            const data = formData[missionKey] || { enabled: false, value1: 0, value2: 0 };

            return (
              <div
                key={missionKey}
                className="glass-card p-4 hover:bg-white/10 transition-all duration-300"
              >
                {/* Mission Name */}
                <div className="text-sm sm:text-base text-gray-200 mb-3 font-medium">
                  {mission}
                </div>

                {/* Single Row: Checkbox + Inputs */}
                <div className="flex items-end gap-4">
                  {/* Checkbox */}
                  <div className="flex items-center gap-2 pb-2">
                    <input
                      type="checkbox"
                      id={`check_${missionKey}`}
                      checked={data.enabled}
                      onChange={() => handleCheckboxChange(missionKey)}
                      className="w-4 h-4 rounded border-white/20 bg-white/5 checked:bg-green-600 checked:border-green-600 transition-all cursor-pointer"
                    />
                    <label
                      htmlFor={`check_${missionKey}`}
                      className="text-sm text-gray-300 cursor-pointer select-none whitespace-nowrap"
                    >
                     
                    </label>
                  </div>

                  {/* Min Input */}
                  <div className="flex-1">
                    <label className="text-xs text-gray-300 mb-1 block">Puntos mínimos</label>
                    <input
                      type="number"
                      min="0"
                      max="400"
                      value={data.value1 === 0 ? '' : data.value1}
                      onChange={(e) => handleInputChange(missionKey, 'value1', e.target.value)}
                      placeholder="0"
                      disabled={!data.enabled}
                      className="glass-input w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  {/* Max Input */}
                  <div className="flex-1">
                    <label className="text-xs text-gray-300 mb-1 block">Puntos máximos</label>
                    <input
                      type="number"
                      min="0"
                      max="400"
                      value={data.value2 === 0 ? '' : data.value2}
                      onChange={(e) => handleInputChange(missionKey, 'value2', e.target.value)}
                      placeholder="0"
                      disabled={!data.enabled}
                      className="glass-input w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PARTE 2: FDG COMÚN */}
      <div>
        <h2 className="text-xl font-bold text-blue-400 mb-4 pb-2 border-b border-blue-400/30">
          FDG Común
        </h2>
        <div className="space-y-3">
          {MISSIONS_FDG_COMUN.map((mission: MissionWithStatus, index: number) => {
            const missionKey = `comun_${index}`;
            const data = formData[missionKey] || { enabled: false, value1: 0, value2: 0 };

            return (
              <div
                key={missionKey}
                className="glass-card p-4 hover:bg-white/10 transition-all duration-300"
              >
                {/* Mission Name */}
                <div className="text-sm sm:text-base text-gray-200 font-medium">
                  {mission.name}
                </div>

                {/* Automated Badge */}
                {getAutomatedBadge(mission.automated)}

                {/* Single Row: Habilitar + Min + Max */}
                <div className="flex items-end gap-4 mt-3">
                  <div className="flex items-center gap-2 pb-2">
                    <input
                      type="checkbox"
                      id={`check_${missionKey}`}
                      checked={data.enabled}
                      onChange={() => handleCheckboxChange(missionKey)}
                      className="w-4 h-4 rounded border-white/20 bg-white/5 checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
                    />
                    <label
                      htmlFor={`check_${missionKey}`}
                      className="text-sm text-gray-300 cursor-pointer select-none whitespace-nowrap"
                    >
                     
                    </label>
                  </div>

                  <div className="flex-1">
                    <label className="text-xs text-gray-300 mb-1 block">Puntos mínimos</label>
                    <input
                      type="number"
                      min="0"
                      max="400"
                      value={data.value1 === 0 ? '' : data.value1}
                      onChange={(e) => handleInputChange(missionKey, 'value1', e.target.value)}
                      placeholder="0"
                      disabled={!data.enabled}
                      className="glass-input w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="text-xs text-gray-300 mb-1 block">Puntos máximos</label>
                    <input
                      type="number"
                      min="0"
                      max="400"
                      value={data.value2 === 0 ? '' : data.value2}
                      onChange={(e) => handleInputChange(missionKey, 'value2', e.target.value)}
                      placeholder="0"
                      disabled={!data.enabled}
                      className="glass-input w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
