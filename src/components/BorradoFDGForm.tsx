import { useState } from 'react';
import MissionForm1 from './MissionForm1';
import { MISSIONS_FORM1, MISSIONS_FDG_COMUN } from '../types';
import type { Form1State } from '../types';

export default function BorradoFDGForm() {
  const [formData, setFormData] = useState<Form1State>({});

  const handleForm1Change = (data: Form1State) => {
    setFormData(data);
  };

  const handleShowData = () => {
    let message = '';
    
    const form1Enabled = Object.entries(formData).filter(([, data]) => data.enabled);

    if (form1Enabled.length > 0) {
      message += '*BORRADO DE FDG*\n\n';
      
      // Borrado Gremial section
      const gremialMissions = form1Enabled.filter(([key]) => key.startsWith('mission_'));
      if (gremialMissions.length > 0) {
        message += '*Borrado Gremial*\n';
        gremialMissions.forEach(([key, data]) => {
          const index = parseInt(key.replace('mission_', ''));
          const missionName = MISSIONS_FORM1[index];
          message += `• ${missionName}\n`;
          message += `  Min: ${data.value1} | Max: ${data.value2}\n`;
        });
        message += '\n';
      }

      // FDG Común section
      const comunMissions = form1Enabled.filter(([key]) => key.startsWith('comun_'));
      if (comunMissions.length > 0) {
        message += '*FDG Común*\n';
        comunMissions.forEach(([key, data]) => {
          const index = parseInt(key.replace('comun_', ''));
          const missionInfo = MISSIONS_FDG_COMUN[index];
          message += `• ${missionInfo.name}\n`;
          message += `  Min: ${data.value1} | Max: ${data.value2}\n`;
        });
        message += '\n';
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
      <MissionForm1 onDataChange={handleForm1Change} />

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
