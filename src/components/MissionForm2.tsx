import { useState, useEffect } from 'react';
import { MISSIONS_FORM2, MISSIONS_FDG_PERSONAL } from '../types';
import type { Form2State, MissionWithStatus, MissionForm2Data } from '../types';

interface MissionForm2Props {
  onDataChange: (data: Form2State) => void;
}

export default function MissionForm2({ onDataChange }: MissionForm2Props) {
  const [formData, setFormData] = useState<Form2State>(() => {
    const initial: Form2State = {};
    // Initialize Borrado Personal
    MISSIONS_FORM2.forEach((_mission, index) => {
      initial[`personal_${index}`] = {
        bonus120: { enabled: false, value1: 0, value2: 0 },
        bonus200: { enabled: false, value1: 0, value2: 0 },
      };
    });
    // Initialize FDG Personal
    MISSIONS_FDG_PERSONAL.forEach((_mission, index) => {
      initial[`personal_fdg_${index}`] = {
        bonus120: { enabled: false, value1: 0, value2: 0 },
        bonus200: { enabled: false, value1: 0, value2: 0 },
      };
    });
    return initial;
  });

  useEffect(() => {
    onDataChange(formData);
  }, [formData, onDataChange]);

  const handleCheckboxChange = (missionKey: string, bonus: 'bonus120' | 'bonus200') => {
    setFormData(prev => {
      const current = prev[missionKey] || {
        bonus120: { enabled: false, value1: 0, value2: 0 },
        bonus200: { enabled: false, value1: 0, value2: 0 },
      };
      return {
        ...prev,
        [missionKey]: {
          ...current,
          [bonus]: {
            ...current[bonus],
            enabled: !current[bonus].enabled,
          },
        },
      };
    });
  };

  const handleInputChange = (
    missionKey: string,
    bonus: 'bonus120' | 'bonus200',
    field: 'value1' | 'value2',
    value: string
  ) => {
    const numValue = value === '' ? 0 : parseInt(value, 10);
    
    // Validate range 0-400
    if (numValue < 0 || numValue > 400) return;

    setFormData(prev => {
      const current = prev[missionKey] || {
        bonus120: { enabled: false, value1: 0, value2: 0 },
        bonus200: { enabled: false, value1: 0, value2: 0 },
      };
      return {
        ...prev,
        [missionKey]: {
          ...current,
          [bonus]: {
            ...current[bonus],
            [field]: numValue,
          },
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

  const renderBorradoPersonal = (mission: string, index: number) => {
    const missionKey = `personal_${index}`;
    const data: MissionForm2Data = formData[missionKey] || {
      bonus120: { enabled: false, value1: 0, value2: 0 },
      bonus200: { enabled: false, value1: 0, value2: 0 },
    };

    return (
      <div
        key={missionKey}
        className="glass-card p-4 hover:bg-white/10 transition-all duration-300"
      >
        {/* Mission Name */}
        <div className="text-sm sm:text-base text-gray-200 mb-3 font-medium">
          {mission}
        </div>

        {/* 120% Row */}
        <div className="flex items-end gap-4 mb-3">
          <div className="flex items-center gap-2 pb-2">
            <input
              type="checkbox"
              id={`${missionKey}_120`}
              checked={data.bonus120.enabled}
              onChange={() => handleCheckboxChange(missionKey, 'bonus120')}
              className="w-4 h-4 rounded border-white/20 bg-white/5 checked:bg-purple-600 checked:border-purple-600 transition-all cursor-pointer"
            />
            <label
              htmlFor={`${missionKey}_120`}
              className="text-sm text-purple-300 cursor-pointer select-none font-medium whitespace-nowrap"
            >
            120%
            </label>
          </div>

          <div className="flex-1">
            <label className="text-xs text-gray-300 mb-1 block">Puntos mínimos</label>
            <input
              type="number"
              min="0"
              max="400"
              value={data.bonus120.value1 === 0 ? '' : data.bonus120.value1}
              onChange={(e) => handleInputChange(missionKey, 'bonus120', 'value1', e.target.value)}
              placeholder="0"
              disabled={!data.bonus120.enabled}
              className="glass-input w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex-1">
            <label className="text-xs text-gray-300 mb-1 block">Puntos máximos</label>
            <input
              type="number"
              min="0"
              max="400"
              value={data.bonus120.value2 === 0 ? '' : data.bonus120.value2}
              onChange={(e) => handleInputChange(missionKey, 'bonus120', 'value2', e.target.value)}
              placeholder="0"
              disabled={!data.bonus120.enabled}
              className="glass-input w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        {/* 200% Row */}
        <div className="flex items-end gap-4">
          <div className="flex items-center gap-2 pb-2">
            <input
              type="checkbox"
              id={`${missionKey}_200`}
              checked={data.bonus200.enabled}
              onChange={() => handleCheckboxChange(missionKey, 'bonus200')}
              className="w-4 h-4 rounded border-white/20 bg-white/5 checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
            />
            <label
              htmlFor={`${missionKey}_200`}
              className="text-sm text-blue-300 cursor-pointer select-none font-medium whitespace-nowrap"
            >
            200%
            </label>
          </div>

          <div className="flex-1">
            <label className="text-xs text-gray-300 mb-1 block">Puntos mínimos</label>
            <input
              type="number"
              min="0"
              max="400"
              value={data.bonus200.value1 === 0 ? '' : data.bonus200.value1}
              onChange={(e) => handleInputChange(missionKey, 'bonus200', 'value1', e.target.value)}
              placeholder="0"
              disabled={!data.bonus200.enabled}
              className="glass-input w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex-1">
            <label className="text-xs text-gray-300 mb-1 block">Puntos máximos</label>
            <input
              type="number"
              min="0"
              max="400"
              value={data.bonus200.value2 === 0 ? '' : data.bonus200.value2}
              onChange={(e) => handleInputChange(missionKey, 'bonus200', 'value2', e.target.value)}
              placeholder="0"
              disabled={!data.bonus200.enabled}
              className="glass-input w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    );
  };

  const renderDualMission = (mission: MissionWithStatus, index: number) => {
    const missionKey = `personal_fdg_${index}`;
    const data: MissionForm2Data = formData[missionKey] || {
      bonus120: { enabled: false, value1: 0, value2: 0 },
      bonus200: { enabled: false, value1: 0, value2: 0 },
    };

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

        {/* 120% Row */}
        <div className="flex items-end gap-4 mt-3 mb-3">
          <div className="flex items-center gap-2 pb-2">
            <input
              type="checkbox"
              id={`${missionKey}_120`}
              checked={data.bonus120.enabled}
              onChange={() => handleCheckboxChange(missionKey, 'bonus120')}
              className="w-4 h-4 rounded border-white/20 bg-white/5 checked:bg-purple-600 checked:border-purple-600 transition-all cursor-pointer"
            />
            <label
              htmlFor={`${missionKey}_120`}
              className="text-sm text-purple-300 cursor-pointer select-none font-medium whitespace-nowrap"
            >
            120%
            </label>
          </div>

          <div className="flex-1">
            <label className="text-xs text-gray-300 mb-1 block">Puntos mínimos</label>
            <input
              type="number"
              min="0"
              max="400"
              value={data.bonus120.value1 === 0 ? '' : data.bonus120.value1}
              onChange={(e) => handleInputChange(missionKey, 'bonus120', 'value1', e.target.value)}
              placeholder="0"
              disabled={!data.bonus120.enabled}
              className="glass-input w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex-1">
            <label className="text-xs text-gray-300 mb-1 block">Puntos máximos</label>
            <input
              type="number"
              min="0"
              max="400"
              value={data.bonus120.value2 === 0 ? '' : data.bonus120.value2}
              onChange={(e) => handleInputChange(missionKey, 'bonus120', 'value2', e.target.value)}
              placeholder="0"
              disabled={!data.bonus120.enabled}
              className="glass-input w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        {/* 200% Row */}
        <div className="flex items-end gap-4">
          <div className="flex items-center gap-2 pb-2">
            <input
              type="checkbox"
              id={`${missionKey}_200`}
              checked={data.bonus200.enabled}
              onChange={() => handleCheckboxChange(missionKey, 'bonus200')}
              className="w-4 h-4 rounded border-white/20 bg-white/5 checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
            />
            <label
              htmlFor={`${missionKey}_200`}
              className="text-sm text-blue-300 cursor-pointer select-none font-medium whitespace-nowrap"
            >
            200%
            </label>
          </div>

          <div className="flex-1">
            <label className="text-xs text-gray-300 mb-1 block">Puntos mínimos</label>
            <input
              type="number"
              min="0"
              max="400"
              value={data.bonus200.value1 === 0 ? '' : data.bonus200.value1}
              onChange={(e) => handleInputChange(missionKey, 'bonus200', 'value1', e.target.value)}
              placeholder="0"
              disabled={!data.bonus200.enabled}
              className="glass-input w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex-1">
            <label className="text-xs text-gray-300 mb-1 block">Puntos máximos</label>
            <input
              type="number"
              min="0"
              max="400"
              value={data.bonus200.value2 === 0 ? '' : data.bonus200.value2}
              onChange={(e) => handleInputChange(missionKey, 'bonus200', 'value2', e.target.value)}
              placeholder="0"
              disabled={!data.bonus200.enabled}
              className="glass-input w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* PARTE 1: BORRADO PERSONAL */}
      <div>
        <h2 className="text-xl font-bold text-orange-400 mb-4 pb-2 border-b border-orange-400/30">
          Borrado Personal
        </h2>
        <div className="space-y-3">
          {MISSIONS_FORM2.map((mission: string, index: number) => 
            renderBorradoPersonal(mission, index)
          )}
        </div>
      </div>

      {/* PARTE 2: FDG PERSONAL */}
      <div>
        <h2 className="text-xl font-bold text-purple-400 mb-4 pb-2 border-b border-purple-400/30">
          FDG Personal
        </h2>
        <div className="space-y-3">
          {MISSIONS_FDG_PERSONAL.map((mission: MissionWithStatus, index: number) => 
            renderDualMission(mission, index)
          )}
        </div>
      </div>
    </div>
  );
}
