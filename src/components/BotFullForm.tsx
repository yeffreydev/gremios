import { useState, useEffect } from 'react';
import type { BotFullFormData } from '../types';
import {
  BASIC_FEATURES,
  ENTRY_TIMES,
  SHIELDS,
  ILLUSORY_RESOURCES,
  COMMON_RESOURCES,
  EXITS_1_8,
  EXITS_WITH_LABEL,
  LEVELS_1_6,
  LEVELS_1_5,
  FORTRESS_TROOP_TYPES,
  HEROES,
  CONSTRUCTION_PRIORITIES,
  RESEARCH_TYPES,
  ARMY_TYPES,
  TRAPS,
  PACTS,
  FAMILIARS,
  BANK_TYPES,
  REST_SCHEDULES,
  DOWNLOAD_FILES
} from '../types';

interface BotFullFormProps {
  onDataChange: (data: BotFullFormData) => void;
}

export default function BotFullForm({ onDataChange }: BotFullFormProps) {
  const [formData, setFormData] = useState<BotFullFormData>({
    accountName: '',
    basicFeatures: [],
    entryTime: [],
    shields: [],
    antiExplorer: '',
    supplyToBank: '',
    rssDestination: '',
    illusoryResources: [],
    illusoryExits: [],
    illusoryHunting: [],
    commonResources: [],
    commonExits: [],
    fortressLevel: [],
    fortressMarches: [],
    fortressTroopType: [],
    shipExchange: '',
    heroToImprove: '',
    coliseum: '',
    spam: '',
    construction: '',
    constructionPriority: [],
    research: [],
    army: [],
    luminarioEquipment: '',
    traps: [],
    hunting: [],
    restArmor: '',
    pacts: [],
    familiarsToTrain: [],
    familiarSkills: [],
    bank: [],
    authorized: '',
    whiteBlackList: '',
    restSchedule: [],
    downloadFiles: []
  });

  useEffect(() => {
    onDataChange(formData);
  }, [formData, onDataChange]);

  const handleTextChange = (field: keyof BotFullFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleMultiSelectChange = (field: keyof BotFullFormData, value: string) => {
    const currentValues = formData[field] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    setFormData({ ...formData, [field]: newValues });
  };

  const handleRadioChange = (field: keyof BotFullFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const renderMultiSelect = (
    title: string,
    field: keyof BotFullFormData,
    options: string[]
  ) => (
    <div className="mb-6">
      <h3 className="text-base sm:text-lg font-semibold mb-3 text-white/90">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-start gap-2 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
          >
            <input
              type="checkbox"
              checked={(formData[field] as string[]).includes(option)}
              onChange={() => handleMultiSelectChange(field, option)}
              className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-2 focus:ring-purple-500"
            />
            <span className="text-sm text-white/80">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const renderRadio = (
    title: string,
    field: keyof BotFullFormData,
    options: { label: string; value: string }[]
  ) => (
    <div className="mb-6">
      <h3 className="text-base sm:text-lg font-semibold mb-3 text-white/90">{title}</h3>
      <div className="flex gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
          >
            <input
              type="radio"
              name={field}
              checked={formData[field] === option.value}
              onChange={() => handleRadioChange(field, option.value)}
              className="w-4 h-4 border-white/20 bg-white/5 text-purple-500 focus:ring-2 focus:ring-purple-500"
            />
            <span className="text-sm text-white/80">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const renderTextInput = (
    title: string,
    field: keyof BotFullFormData,
    placeholder: string = ''
  ) => (
    <div className="mb-6">
      <h3 className="text-base sm:text-lg font-semibold mb-3 text-white/90">{title}</h3>
      <input
        type="text"
        value={formData[field] as string}
        onChange={(e) => handleTextChange(field, e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50"
      />
    </div>
  );

  const renderSelect = (
    title: string,
    field: keyof BotFullFormData,
    options: string[]
  ) => (
    <div className="mb-6">
      <h3 className="text-base sm:text-lg font-semibold mb-3 text-white/90">{title}</h3>
      <select
        value={formData[field] as string}
        onChange={(e) => handleTextChange(field, e.target.value)}
        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50"
      >
        <option value="">Seleccionar...</option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-gray-800">
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Question 1 */}
      {renderTextInput('NOMBRE DE LA CUENTA', 'accountName', 'Ingrese el nombre de la cuenta')}

      {/* Question 2 */}
      {renderMultiSelect('BÁSICO - TILDAR LO QUE SÍ HACE', 'basicFeatures', BASIC_FEATURES)}

      {/* Question 3 */}
      {renderMultiSelect('TIEMPO DE ENTRADA A CUENTA', 'entryTime', ENTRY_TIMES)}

      {/* Question 4 */}
      {renderMultiSelect('ESCUDOS', 'shields', SHIELDS)}

      {/* Question 5 */}
      {renderRadio('ANTIEXPLORER', 'antiExplorer', [
        { label: 'YES', value: 'yes' },
        { label: 'NO', value: 'no' }
      ])}

      {/* Question 6 */}
      {renderRadio('SUMINISTRA A ALGÚN BANCO', 'supplyToBank', [
        { label: 'YES', value: 'yes' },
        { label: 'NO', value: 'no' }
      ])}

      {/* Question 7 */}
      {renderTextInput('NOMBRE DONDE MANDA LOS RSS', 'rssDestination', 'Ingrese el nombre')}

      {/* Question 8 */}
      {renderMultiSelect('REINO ILUSORIO - RECURSOS', 'illusoryResources', ILLUSORY_RESOURCES)}

      {/* Question 9 */}
      {renderMultiSelect('REINO ILUSORIO - CUÁNTAS SALIDAS A RECOLECTAR (1-8)', 'illusoryExits', EXITS_1_8)}

      {/* Question 10 */}
      {renderMultiSelect('CACERÍA REINO ILUSORIO', 'illusoryHunting', LEVELS_1_5)}

      {/* Question 11 */}
      {renderMultiSelect('RECOLECCIÓN REINO COMÚN - RECURSOS', 'commonResources', COMMON_RESOURCES)}

      {/* Question 12 */}
      {renderMultiSelect('RECOLECCIÓN REINO COMÚN - CUÁNTAS SALIDAS (1-8)', 'commonExits', EXITS_WITH_LABEL)}

      {/* Question 13 */}
      {renderMultiSelect('FORTALEZAS - NIVEL', 'fortressLevel', LEVELS_1_6)}

      {/* Question 14 */}
      {renderMultiSelect('FORTALEZAS - CUÁNTAS MARCHAS (1-8)', 'fortressMarches', EXITS_1_8)}

      {/* Question 15 */}
      {renderMultiSelect('FORTALEZAS - COMO MANDA', 'fortressTroopType', FORTRESS_TROOP_TYPES)}

      {/* Question 16 */}
      {renderRadio('INTERCAMBIO DE BARCO', 'shipExchange', [
        { label: 'YES', value: 'yes' },
        { label: 'NO', value: 'no' }
      ])}

      {/* Question 17 */}
      {renderSelect('HÉROES A MEJORAR', 'heroToImprove', HEROES)}

      {/* Question 18 */}
      {renderRadio('HACE COLISEO', 'coliseum', [
        { label: 'YES', value: 'yes' },
        { label: 'NO', value: 'no' }
      ])}

      {/* Question 19 */}
      {renderRadio('HACE SPAM', 'spam', [
        { label: 'YES', value: 'yes' },
        { label: 'NO', value: 'no' }
      ])}

      {/* Question 20 */}
      {renderRadio('CONSTRUCCIÓN', 'construction', [
        { label: 'YES', value: 'yes' },
        { label: 'NO', value: 'no' }
      ])}

      {/* Question 21 */}
      {renderMultiSelect('QUE CONSTRUYE', 'constructionPriority', CONSTRUCTION_PRIORITIES)}

      {/* Question 22 */}
      {renderMultiSelect('INVESTIGACIÓN', 'research', RESEARCH_TYPES)}

      {/* Question 23 */}
      {renderMultiSelect('EJÉRCITO', 'army', ARMY_TYPES)}

      {/* Question 24 */}
      {renderRadio('HACE EQUIPO LUMINARIO', 'luminarioEquipment', [
        { label: 'YES', value: 'yes' },
        { label: 'NO', value: 'no' }
      ])}

      {/* Question 25 */}
      {renderMultiSelect('HACE TRAMPAS', 'traps', TRAPS)}

      {/* Question 26 */}
      {renderMultiSelect('CACERÍA', 'hunting', LEVELS_1_5)}

      {/* Question 27 */}
      {renderTextInput('Q ARMADURA DE DESCANSO USA', 'restArmor', 'Ingrese el nombre de la armadura')}

      {/* Question 28 */}
      {renderMultiSelect('PACTOS', 'pacts', PACTS)}

      {/* Question 29 */}
      {renderMultiSelect('¿QUÉ MOUSTRITOS ENTRENA?', 'familiarsToTrain', FAMILIARS)}

      {/* Question 30 */}
      {renderMultiSelect('HABILIDADES DE MOUSTRITOS', 'familiarSkills', FAMILIARS)}

      {/* Question 31 */}
      {renderMultiSelect('BANCO', 'bank', BANK_TYPES)}

      {/* Question 32 */}
      {renderTextInput('AUTORIZADOS (hasta 5 castillos)', 'authorized', 'Nombres separados por comas')}

      {/* Question 33 */}
      {renderRadio('LISTA BLANCA Y NEGRA', 'whiteBlackList', [
        { label: 'SÍ', value: 'si' },
        { label: 'NO', value: 'no' }
      ])}

      {/* Question 34 */}
      {renderMultiSelect('HORARIO DE DESCANSO', 'restSchedule', REST_SCHEDULES)}

      {/* Question 35 */}
      {renderMultiSelect('DESCARGA ARCHIVOS DE', 'downloadFiles', DOWNLOAD_FILES)}
    </div>
  );
}
