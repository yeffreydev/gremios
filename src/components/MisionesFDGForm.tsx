import { useState } from 'react';
import MissionForm2 from './MissionForm2';
import { MISSIONS_FORM2, MISSIONS_FDG_PERSONAL } from '../types';
import type { Form2State } from '../types';

export default function MisionesFDGForm() {
  const [formData, setFormData] = useState<Form2State>({});

  const handleForm2Change = (data: Form2State) => {
    setFormData(data);
  };

  const handleShowData = () => {
    let message = '';
    
    const form2Enabled = Object.entries(formData).filter(([, data]) => 
      data.bonus120.enabled || data.bonus200.enabled
    );

    if (form2Enabled.length > 0) {
      message += '*MISIONES DE FDG*\n\n';
      
      // Borrado Personal
      const personalMissions = form2Enabled.filter(([key]) => key.startsWith('personal_') && !key.startsWith('personal_fdg_'));
      if (personalMissions.length > 0) {
        message += '*Borrado Personal*\n';
        personalMissions.forEach(([key, data]) => {
          const index = parseInt(key.replace('personal_', ''));
          const missionName = MISSIONS_FORM2[index];
          message += `• ${missionName}\n`;
          if (data.bonus120.enabled) {
            message += `  120% - Min: ${data.bonus120.value1} | Max: ${data.bonus120.value2}\n`;
          }
          if (data.bonus200.enabled) {
            message += `  200% - Min: ${data.bonus200.value1} | Max: ${data.bonus200.value2}\n`;
          }
        });
        message += '\n';
      }

      // FDG Personal
      const personalFdgMissions = form2Enabled.filter(([key]) => key.startsWith('personal_fdg_'));
      if (personalFdgMissions.length > 0) {
        message += '*FDG Personal*\n';
        personalFdgMissions.forEach(([key, data]) => {
          const index = parseInt(key.replace('personal_fdg_', ''));
          const missionInfo = MISSIONS_FDG_PERSONAL[index];
          message += `• ${missionInfo.name}\n`;
          if (data.bonus120.enabled) {
            message += `  120% - Min: ${data.bonus120.value1} | Max: ${data.bonus120.value2}\n`;
          }
          if (data.bonus200.enabled) {
            message += `  200% - Min: ${data.bonus200.value1} | Max: ${data.bonus200.value2}\n`;
          }
        });
      }
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
      <MissionForm2 onDataChange={handleForm2Change} />

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
