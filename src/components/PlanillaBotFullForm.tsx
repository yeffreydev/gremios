import { useState } from 'react';
import BotFullForm from './BotFullForm';
import type { BotFullFormData } from '../types';

export default function PlanillaBotFullForm() {
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

  const handleFormDataChange = (data: BotFullFormData) => {
    setFormData(data);
  };

  const handleShowData = () => {
    let message = '*PLANILLA BOT FULL*\n\n';

    if (formData.accountName) {
      message += `*NOMBRE DE LA CUENTA:* ${formData.accountName}\n\n`;
    }

    if (formData.basicFeatures.length > 0) {
      message += '*BÁSICO - TILDAR LO QUE SÍ HACE:*\n';
      formData.basicFeatures.forEach(feature => {
        message += `• ${feature}\n`;
      });
      message += '\n';
    }

    if (formData.entryTime.length > 0) {
      message += '*TIEMPO DE ENTRADA A CUENTA:*\n';
      formData.entryTime.forEach(time => {
        message += `• ${time}\n`;
      });
      message += '\n';
    }

    if (formData.shields.length > 0) {
      message += '*ESCUDOS:*\n';
      formData.shields.forEach(shield => {
        message += `• ${shield}\n`;
      });
      message += '\n';
    }

    if (formData.antiExplorer) {
      message += `*ANTIEXPLORER:* ${formData.antiExplorer.toUpperCase()}\n\n`;
    }

    if (formData.supplyToBank) {
      message += `*SUMINISTRA A ALGÚN BANCO:* ${formData.supplyToBank.toUpperCase()}\n\n`;
    }

    if (formData.rssDestination) {
      message += `*NOMBRE DONDE MANDA LOS RSS:* ${formData.rssDestination}\n\n`;
    }

    if (formData.illusoryResources.length > 0) {
      message += '*REINO ILUSORIO - RECURSOS:*\n';
      formData.illusoryResources.forEach(resource => {
        message += `• ${resource}\n`;
      });
      message += '\n';
    }

    if (formData.illusoryExits.length > 0) {
      message += `*REINO ILUSORIO - SALIDAS:* ${formData.illusoryExits.join(', ')}\n\n`;
    }

    if (formData.illusoryHunting.length > 0) {
      message += `*CACERÍA REINO ILUSORIO:* ${formData.illusoryHunting.join(', ')}\n\n`;
    }

    if (formData.commonResources.length > 0) {
      message += '*RECOLECCIÓN REINO COMÚN - RECURSOS:*\n';
      formData.commonResources.forEach(resource => {
        message += `• ${resource}\n`;
      });
      message += '\n';
    }

    if (formData.commonExits.length > 0) {
      message += `*RECOLECCIÓN REINO COMÚN - SALIDAS:* ${formData.commonExits.join(', ')}\n\n`;
    }

    if (formData.fortressLevel.length > 0) {
      message += `*FORTALEZAS - NIVEL:* ${formData.fortressLevel.join(', ')}\n\n`;
    }

    if (formData.fortressMarches.length > 0) {
      message += `*FORTALEZAS - MARCHAS:* ${formData.fortressMarches.join(', ')}\n\n`;
    }

    if (formData.fortressTroopType.length > 0) {
      message += '*FORTALEZAS - COMO MANDA:*\n';
      formData.fortressTroopType.forEach(type => {
        message += `• ${type}\n`;
      });
      message += '\n';
    }

    if (formData.shipExchange) {
      message += `*INTERCAMBIO DE BARCO:* ${formData.shipExchange.toUpperCase()}\n\n`;
    }

    if (formData.heroToImprove) {
      message += `*HÉROES A MEJORAR:* ${formData.heroToImprove}\n\n`;
    }

    if (formData.coliseum) {
      message += `*HACE COLISEO:* ${formData.coliseum.toUpperCase()}\n\n`;
    }

    if (formData.spam) {
      message += `*HACE SPAM:* ${formData.spam.toUpperCase()}\n\n`;
    }

    if (formData.construction) {
      message += `*CONSTRUCCIÓN:* ${formData.construction.toUpperCase()}\n\n`;
    }

    if (formData.constructionPriority.length > 0) {
      message += '*QUE CONSTRUYE:*\n';
      formData.constructionPriority.forEach(item => {
        message += `• ${item}\n`;
      });
      message += '\n';
    }

    if (formData.research.length > 0) {
      message += '*INVESTIGACIÓN:*\n';
      formData.research.forEach(item => {
        message += `• ${item}\n`;
      });
      message += '\n';
    }

    if (formData.army.length > 0) {
      message += '*EJÉRCITO:*\n';
      formData.army.forEach(troop => {
        message += `• ${troop}\n`;
      });
      message += '\n';
    }

    if (formData.luminarioEquipment) {
      message += `*HACE EQUIPO LUMINARIO:* ${formData.luminarioEquipment.toUpperCase()}\n\n`;
    }

    if (formData.traps.length > 0) {
      message += '*HACE TRAMPAS:*\n';
      formData.traps.forEach(trap => {
        message += `• ${trap}\n`;
      });
      message += '\n';
    }

    if (formData.hunting.length > 0) {
      message += `*CACERÍA:* ${formData.hunting.join(', ')}\n\n`;
    }

    if (formData.restArmor) {
      message += `*ARMADURA DE DESCANSO:* ${formData.restArmor}\n\n`;
    }

    if (formData.pacts.length > 0) {
      message += `*PACTOS:* ${formData.pacts.join(', ')}\n\n`;
    }

    if (formData.familiarsToTrain.length > 0) {
      message += '*MOUSTRITOS ENTRENA:*\n';
      formData.familiarsToTrain.forEach(familiar => {
        message += `• ${familiar}\n`;
      });
      message += '\n';
    }

    if (formData.familiarSkills.length > 0) {
      message += '*HABILIDADES DE MOUSTRITOS:*\n';
      formData.familiarSkills.forEach(skill => {
        message += `• ${skill}\n`;
      });
      message += '\n';
    }

    if (formData.bank.length > 0) {
      message += `*BANCO:* ${formData.bank.join(', ')}\n\n`;
    }

    if (formData.authorized) {
      message += `*AUTORIZADOS:* ${formData.authorized}\n\n`;
    }

    if (formData.whiteBlackList) {
      message += `*LISTA BLANCA Y NEGRA:* ${formData.whiteBlackList.toUpperCase()}\n\n`;
    }

    if (formData.restSchedule.length > 0) {
      message += '*HORARIO DE DESCANSO:*\n';
      formData.restSchedule.forEach(schedule => {
        message += `• ${schedule}\n`;
      });
      message += '\n';
    }

    if (formData.downloadFiles.length > 0) {
      message += `*DESCARGA ARCHIVOS DE:* ${formData.downloadFiles.join(', ')}\n\n`;
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
          PLANILLA BOT FULL
        </h1>
        <p className="text-sm text-white/60">
          Complete todos los campos para configurar su bot
        </p>
      </div>

      <BotFullForm onDataChange={handleFormDataChange} />

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
