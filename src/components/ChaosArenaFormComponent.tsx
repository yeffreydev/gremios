import { useState, useEffect } from 'react';
import { CHAOS_ARENA_MISSIONS, CHAOS_ARENA_RADIO_MISSIONS } from '../types';
import type { ChaosArenaFormState, ChaosArenaRadioMissions, ChaosArenaMissionData } from '../types';

export default function ChaosArenaFormComponent() {
  const [formData, setFormData] = useState<ChaosArenaFormState>(() => {
    const initialData: any = {
      radioMissions: {
        recursos_nivel3: '',
        recursos_nivel4: '',
        recursos_nivel5: '',
        monstruos_nivel3: '',
        monstruos_nivel4: '',
        monstruos_nivel5: ''
      }
    };
    return initialData;
  });

  const handleCheckboxChange = (missionKey: string) => {
    const currentData = formData[missionKey] as ChaosArenaMissionData | undefined;
    setFormData({
      ...formData,
      [missionKey]: {
        enabled: !currentData?.enabled,
        value1: currentData?.value1 || 0,
        value2: currentData?.value2 || 0
      }
    });
  };

  const handleInputChange = (missionKey: string, field: 'value1' | 'value2', value: string) => {
    const numValue = value === '' ? 0 : parseInt(value);
    
    if (numValue < 0 || numValue > 400) return;

    const currentData = formData[missionKey] as ChaosArenaMissionData | undefined;
    setFormData({
      ...formData,
      [missionKey]: {
        ...currentData,
        enabled: currentData?.enabled || false,
        [field]: numValue
      } as ChaosArenaMissionData
    });
  };

  const handleRadioChange = (key: keyof ChaosArenaRadioMissions, value: 'si' | 'no') => {
    setFormData({
      ...formData,
      radioMissions: {
        ...formData.radioMissions,
        [key]: value
      }
    });
  };

  const handleShowData = () => {
    let message = '*EXTRAVAGANTE ARENA DEL CAOS*\n\n';

    // Part 1: Automatic Search Articles
    const enabledMissions = Object.entries(formData).filter(
      ([key, data]) => key.startsWith('mission_') && (data as ChaosArenaMissionData).enabled
    );

    if (enabledMissions.length > 0) {
      message += '*ARTICULOS BUSQUEDA AUTOMATICA*\n';
      enabledMissions.forEach(([key, data]) => {
        const index = parseInt(key.replace('mission_', ''));
        const missionName = CHAOS_ARENA_MISSIONS[index];
        const missionData = data as ChaosArenaMissionData;
        message += `• ${missionName}\n`;
        message += `  Min: ${missionData.value1} | Max: ${missionData.value2}\n`;
      });
      message += '\n';
    }

    // Part 2: Radio Missions
    const radioMissions = formData.radioMissions;
    const hasRadioAnswers = Object.values(radioMissions).some(val => val !== '');

    if (hasRadioAnswers) {
      message += '*MISIONES ARENA DEL CAOS*\n';
      CHAOS_ARENA_RADIO_MISSIONS.forEach((mission) => {
        const answer = radioMissions[mission.key as keyof typeof radioMissions];
        if (answer) {
          message += `• ${mission.label}\n`;
          message += `  Respuesta: ${answer.toUpperCase()}\n`;
        }
      });
      message += '\n';
    }

    // Encode message for WhatsApp
    const phoneNumber = '5491171277427';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          EXTRAVAGANTE ARENA DEL CAOS
        </h1>
        <p className="text-sm text-white/60">
          Configure las búsquedas automáticas y misiones de la arena
        </p>
      </div>

      <div className="space-y-8">
        {/* Part 1: ARTICULOS BUSQUEDA AUTOMATICA */}
        <div>
          <h2 className="text-xl font-bold text-purple-400 mb-4 pb-2 border-b border-purple-400/30">
            ARTICULOS BUSQUEDA AUTOMATICA
          </h2>
          <div className="space-y-3">
            {CHAOS_ARENA_MISSIONS.map((mission, index) => {
              const missionKey = `mission_${index}`;
              const missionData = formData[missionKey] as ChaosArenaMissionData | undefined;
              const isEnabled = missionData?.enabled || false;
              const value1 = missionData?.value1 || 0;
              const value2 = missionData?.value2 || 0;

              return (
                <div
                  key={missionKey}
                  className="glass-card p-4"
                >
                  <div className="text-sm sm:text-base text-gray-200 mb-3 font-medium">
                    {mission}
                  </div>

                  <div className="flex items-end gap-4">
                    <div className="flex items-center gap-2 pb-2">
                      <input
                        type="checkbox"
                        id={`check_${missionKey}`}
                        checked={isEnabled}
                        onChange={() => handleCheckboxChange(missionKey)}
                        className="w-4 h-4 rounded border-white/20 bg-white/5 cursor-pointer"
                      />
                    </div>

                    <div className="flex-1">
                      <label className="text-xs text-gray-300 mb-1 block">Puntos mínimos</label>
                      <input
                        type="number"
                        min="0"
                        max="400"
                        value={value1 === 0 ? '' : value1}
                        onChange={(e) => handleInputChange(missionKey, 'value1', e.target.value)}
                        placeholder="0"
                        disabled={!isEnabled}
                        className="glass-input w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>

                    <div className="flex-1">
                      <label className="text-xs text-gray-300 mb-1 block">Puntos máximos</label>
                      <input
                        type="number"
                        min="0"
                        max="400"
                        value={value2 === 0 ? '' : value2}
                        onChange={(e) => handleInputChange(missionKey, 'value2', e.target.value)}
                        placeholder="0"
                        disabled={!isEnabled}
                        className="glass-input w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Radio Missions */}
        <div>
          <h2 className="text-xl font-bold text-cyan-400 mb-4 pb-2 border-b border-cyan-400/30">
            MISIONES ARENA DEL CAOS
          </h2>
          <div className="space-y-3">
            {CHAOS_ARENA_RADIO_MISSIONS.map((mission) => (
              <div
                key={mission.key}
                className="glass-card p-4"
              >
                <div className="text-sm sm:text-base text-gray-200 mb-3 font-medium">
                  {mission.label}
                </div>

                <div className="flex gap-4">
                  <label className="flex items-center gap-2 px-3 py-2 cursor-pointer">
                    <input
                      type="radio"
                      name={mission.key}
                      checked={formData.radioMissions[mission.key as keyof ChaosArenaRadioMissions] === 'si'}
                      onChange={() => handleRadioChange(mission.key as keyof ChaosArenaRadioMissions, 'si')}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-gray-200 font-medium">SÍ</span>
                  </label>
                  <label className="flex items-center gap-2 px-3 py-2 cursor-pointer">
                    <input
                      type="radio"
                      name={mission.key}
                      checked={formData.radioMissions[mission.key as keyof ChaosArenaRadioMissions] === 'no'}
                      onChange={() => handleRadioChange(mission.key as keyof ChaosArenaRadioMissions, 'no')}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-gray-200 font-medium">NO</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10 flex justify-center sm:justify-end gap-4">
        <button
          onClick={handleShowData}
          className="glass-button w-full sm:w-auto"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
