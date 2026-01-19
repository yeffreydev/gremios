// Type definitions for Guild Mission Forms

export interface MissionForm1Data {
  enabled: boolean;
  value1: number;
  value2: number;
}

export interface MissionForm2BonusData {
  enabled: boolean;
  value1: number;
  value2: number;
}

export interface MissionForm2Data {
  bonus120: MissionForm2BonusData;
  bonus200: MissionForm2BonusData;
}

export type Form1State = Record<string, MissionForm1Data>;
export type Form2State = Record<string, MissionForm2Data>;

export interface FormData {
  form1: Form1State;
  form2: Form2State;
}

// Mission with automated status
export interface MissionWithStatus {
  name: string;
  automated: 'SI' | 'NO' | 'PARCIAL' | null;
}

// Mission lists for Form 1
export const MISSIONS_FORM1 = [
  "Enviar ayuda a tus compañeros de gremio",
  "Batallas del Coliseo de héroes",
  "Recursos de suministro",
  "Obtén Esencias Oscuras",
  "Aumento Poder (Misiones)",
  "Inv. de Tecnologías",
  "Entrenar Soldados",
  "Gasta monedas de gremio",
  "Completa misiones de Admin",
  "Completar misiones de Gremio",
  "Alcanza Fase 3 （Evento Solitario)",
  "Intercambios de Barco de Carga",
  "Abre Caja Misteriosa",
  "Recolectar Recursos",
  "Gana Batallas de Fortaleza Oscura (Sólo Capitán )",
  "Conseguir Nvl 19+Esencias Oscuras",
  "Ataca monstruos",
  "Completa etapas de héroe",
  "Aumento Poder (ejércitos héroe)",
  "Aumenta el poder (tropas)",
  "Aumento Poder (Edificios)",
  "Aumento Poder (Investigación)",
  "Aumenta el poder total",
  "Tiempo reduce usando velocidad Ups",
  "Tiempo reducido usando Aceleración de Fusión",
  "Fusionar Pactos",
  "Usar Fragmentos",
  "EXP de Monstruito con artículos EXP (sin Fragmentos)",
  "Usar hablidades de Ataque de Monstruito",
  "Consigue el Botín Legendario",
  "Gasta Gemas",
  "Usa Estrellas Sagradas",
  "Encuentro de Guardianes de Laberinto",
  "Enfréntate a Guardianes del Laberinto de Élite/x10",
  "Usa Amuletos",
  "Enfréntate a un Duende Guardián en el Magnate del Reino",
  "Desbloquea Estrellas del Castillo",
  "Gasta monedas de artefactos",
  "Mejora artefactos",
  "Refuerza artefactos (incluye bendiciones)",
  "Elabora equipo",
  "Alcanza Fase 3 （Evento Infierno)",
  "Top 10 en Eventos del Infierno",
  "Compra de lotes especiales",
  "Consigue una misión aleatoria.",
  "Rank en el TOP 70 para Eventos del Infierno"
];

export const MISSIONS_FORM2 = [
  "Enviar ayuda a tus compañeros de gremio",
  "Batallas del Coliseo de héroes",
  "Recursos de suministro",
  "Obtén Esencias Oscuras",
  "Aumento Poder (Misiones)",
  "Inv. de Tecnologías",
  "Entrenar Soldados",
  "Gasta monedas de gremio",
  "Completa misiones de Admin",
  "Completar misiones de Gremio",
  "Alcanza Fase 3 （Evento Solitario)",
  "Intercambios de Barco de Carga",
  "Abre Caja Misteriosa",
  "Recolectar Recursos",
  "Gana Batallas de Fortaleza Oscura (Sólo Capitán)",
  "Conseguir Nvl 19+Esencias Oscuras",
  "Ataca monstruos",
  "Completa etapas de héroe",
  "Aumento Poder (ejércitos héroe)",
  "Aumenta el poder (tropas)",
  "Aumento Poder (Edificios)",
  "Aumento Poder (Investigación)",
  "Aumenta el poder total",
  "Tiempo reduce usando velocidad Ups",
  "Tiempo reducido usando Aceleración de Fusión",
  "Fusionar Pactos",
  "Usar Fragmentos",
  "EXP de Monstruito con artículos EXP (sin Fragmentos)",
  "Usar hablidades de Ataque de Monstruito",
  "Consigue el Botín Legendario",
  "Gasta Gemas",
  "Usa Estrellas Sagradas",
  "Encuentro de Guardianes de Laberinto",
  "Enfréntate a Guardianes del Laberinto de Élite/x10",
  "Usa Amuletos",
  "Enfréntate Duende Guardián en el Magnate del Reino",
  "Desbloquea Estrellas del Castillo",
  "Gasta monedas de artefactos",
  "Mejora artefactos",
  "Refuerza artefactos (incluye bendiciones)",
  "Elabora equipo",
  "Alcanza Fase 3 （Evento Infierno)",
  "Top 10 en Eventos del Infierno",
  "Compra de lotes especiales",
  "Consigue una misión aleatoria.",
  "Rank en el TOP 70 para Eventos del Infierno"
];

// FDG COMÚN missions with automated status
export const MISSIONS_FDG_COMUN: MissionWithStatus[] = [
  { name: "Enviar ayuda a tus compañeros de gremio", automated: "SI" },
  { name: "Batallas del Coliseo de héroes", automated: "NO" },
  { name: "Recursos de suministro", automated: "NO" },
  { name: "Obtén Esencias Oscuras", automated: "PARCIAL" },
  { name: "Aumento Poder (Misiones)", automated: "NO" },
  { name: "Inv. de Tecnologías", automated: "NO" },
  { name: "Entrenar Soldados", automated: "NO" },
  { name: "Gasta monedas de gremio", automated: "SI" },
  { name: "Completa misiones de Admin", automated: "SI" },
  { name: "Completar misiones de Gremio", automated: "SI" },
  { name: "Alcanza Fase 3 （Evento Solitario)", automated: "NO" },
  { name: "Intercambios de Barco de Carga", automated: "SI" },
  { name: "Abre Caja Misteriosa", automated: "SI" },
  { name: "Recolectar Recursos", automated: "SI" },
  { name: "Gana Batallas de Fortaleza Oscura (Sólo Capitán)", automated: "NO" },
  { name: "Conseguir Nvl 19+Esencias Oscuras", automated: "PARCIAL" },
  { name: "Ataca monstruos", automated: "NO" },
  { name: "Completa etapas de héroe", automated: "NO" },
  { name: "Aumento Poder (ejércitos héroe)", automated: "NO" },
  { name: "Aumenta el poder (tropas)", automated: "NO" },
  { name: "Aumento Poder (Edificios)", automated: "NO" },
  { name: "Aumento Poder (Investigación)", automated: "NO" },
  { name: "Aumenta el poder total", automated: "NO" },
  { name: "Tiempo reduce usando velocidad Ups", automated: "NO" },
  { name: "Tiempo reducido usando Aceleración de Fusión", automated: "NO" },
  { name: "Fusionar Pactos", automated: "NO" },
  { name: "Usar Fragmentos", automated: "NO" },
  { name: "EXP de Monstruito con artículos EXP (sin los Fragmentos)", automated: "NO" },
  { name: "Usar hablidades de Ataque de Monstruito", automated: null },
  { name: "Consigue el Botín Legendario", automated: "PARCIAL" },
  { name: "Gasta Gemas", automated: "NO" },
  { name: "Usa Estrellas Sagradas", automated: "NO" },
  { name: "Encuentro de Guardianes de Laberinto", automated: "NO" },
  { name: "Enfréntate a Guardianes del Laberinto de Élite/x10", automated: null },
  { name: "Usa Amuletos", automated: "NO" },
  { name: "Enfréntate Duende Guardián en Magnate del Reino", automated: "NO" },
  { name: "Desbloquea Estrellas del Castillo", automated: "NO" },
  { name: "Gasta monedas de artefactos", automated: "NO" },
  { name: "Mejora artefactos", automated: "NO" },
  { name: "Refuerza artefactos (incluye bendiciones)", automated: "NO" },
  { name: "Elabora equipo", automated: "NO" },
  { name: "Alcanza Fase 3 （Evento Infierno)", automated: "NO" },
  { name: "Top 10 en Eventos del Infierno", automated: "NO" },
  { name: "Compra de lotes especiales", automated: "NO" },
  { name: "Consigue una misión aleatoria.", automated: "NO" },
  { name: "Rank en el TOP 70 para Eventos del Infierno", automated: "NO" }
];

// FDG PERSONAL missions with automated status
export const MISSIONS_FDG_PERSONAL: MissionWithStatus[] = [
  { name: "Enviar ayuda a tus compañeros de gremio", automated: "SI" },
  { name: "Batallas del Coliseo de héroes", automated: "NO" },
  { name: "Recursos de suministro", automated: "NO" },
  { name: "Obtén Esencias Oscuras", automated: "PARCIAL" },
  { name: "Aumento Poder (Misiones)", automated: "NO" },
  { name: "Inv. de Tecnologías", automated: "NO" },
  { name: "Entrenar Soldados", automated: "NO" },
  { name: "Gasta monedas de gremio", automated: "SI" },
  { name: "Completa misiones de Admin", automated: "SI" },
  { name: "Completar misiones de Gremio", automated: "SI" },
  { name: "Alcanza Fase 3 （Evento Solitario)", automated: "NO" },
  { name: "Intercambios de Barco de Carga", automated: "SI" },
  { name: "Abre Caja Misteriosa", automated: "SI" },
  { name: "Recolectar Recursos", automated: "SI" },
  { name: "Gana Batallas de Fortaleza Oscura (Sólo Capitán)", automated: "NO" },
  { name: "Conseguir Nvl 19+Esencias Oscuras", automated: "PARCIAL" },
  { name: "Ataca monstruos", automated: "NO" },
  { name: "Completa etapas de héroe", automated: "NO" },
  { name: "Aumento Poder (ejércitos héroe)", automated: "NO" },
  { name: "Aumenta el poder (tropas)", automated: "NO" },
  { name: "Aumento Poder (Edificios)", automated: "NO" },
  { name: "Aumento Poder (Investigación)", automated: "NO" },
  { name: "Aumenta el poder total", automated: "NO" },
  { name: "Tiempo reduce usando velocidad Ups", automated: "NO" },
  { name: "Tiempo reducido usando Aceleración de Fusión", automated: "NO" },
  { name: "Fusionar Pactos", automated: "NO" },
  { name: "Usar Fragmentos", automated: "NO" },
  { name: "EXP de Monstruito con artículos de EXP (sin Fragmentos)", automated: "NO" },
  { name: "Usar hablidades de Ataque de Monstruito", automated: "NO" },
  { name: "Consigue el Botín Legendario", automated: "PARCIAL" },
  { name: "Gasta Gemas", automated: "NO" },
  { name: "Usa Estrellas Sagradas", automated: "NO" },
  { name: "Encuentro de Guardianes de Laberinto", automated: "NO" },
  { name: "Enfréntate a Guardianes del Laberinto de Élite/x10", automated: "NO" },
  { name: "Usa Amuletos", automated: "NO" },
  { name: "Enfréntate a un Duende Guardián en el Magnate del Reino", automated: "NO" },
  { name: "Desbloquea Estrellas del Castillo", automated: "NO" },
  { name: "Gasta monedas de artefactos", automated: "NO" },
  { name: "Mejora artefactos", automated: "NO" },
  { name: "Refuerza artefactos (incluye bendiciones)", automated: "NO" },
  { name: "Elabora equipo", automated: "NO" },
  { name: "Alcanza Fase 3 （Evento Infierno)", automated: "NO" },
  { name: "Top 10 en Eventos del Infierno", automated: "NO" },
  { name: "Compra de lotes especiales", automated: "NO" },
  { name: "Consigue una misión aleatoria.", automated: "NO" },
  { name: "Rank en el TOP 70 para Eventos del Infierno", automated: "NO" }
];

// Bot Full Form Types and Constants
export interface BotFullFormData {
  accountName: string;
  basicFeatures: string[];
  entryTime: string[];
  shields: string[];
  antiExplorer: 'yes' | 'no' | '';
  supplyToBank: 'yes' | 'no' | '';
  rssDestination: string;
  illusoryResources: string[];
  illusoryExits: string[];
  illusoryHunting: string[];
  commonResources: string[];
  commonExits: string[];
  fortressLevel: string[];
  fortressMarches: string[];
  fortressTroopType: string[];
  shipExchange: 'yes' | 'no' | '';
  heroToImprove: string;
  coliseum: 'yes' | 'no' | '';
  spam: 'yes' | 'no' | '';
  construction: 'yes' | 'no' | '';
  constructionPriority: string[];
  research: string[];
  army: string[];
  luminarioEquipment: 'yes' | 'no' | '';
  traps: string[];
  hunting: string[];
  restArmor: string;
  pacts: string[];
  familiarsToTrain: string[];
  familiarSkills: string[];
  bank: string[];
  authorized: string;
  whiteBlackList: 'si' | 'no' | '';
  restSchedule: string[];
  downloadFiles: string[];
}

export const BASIC_FEATURES = [
  "ABRE LOS COFRES DE MOCHILA",
  "HACE DIARIO DE AVENTURA",
  "PARTICIPA EN CAMPEONATO DE GREMIO"
];

export const ENTRY_TIMES = [
  "5 MINUTOS",
  "10 MINUTOS",
  "MEDIA HORA",
  "1 HORA",
  "2 HORAS",
  "SIN ESCUDO"
];

export const SHIELDS = [
  "8 HS",
  "12 HS",
  "24 HS (ACONSEJADA)",
  "3 DÍAS",
  "7 DÍAS",
  "14 DÍAS (ACONSEJADA PARA BANCOS)"
];

export const ILLUSORY_RESOURCES = [
  "COMIDA",
  "PIEDRA",
  "MADERA",
  "MINERAL",
  "ORO",
  "LUNITE"
];

export const COMMON_RESOURCES = [
  "COMIDA",
  "PIEDRA",
  "MADERA",
  "MINERAL",
  "ORO",
  "GEMAS"
];

export const EXITS_1_8 = ["1", "2", "3", "4", "5", "6", "7", "8"];

export const EXITS_WITH_LABEL = [
  "1 SALIDAS",
  "2 SALIDAS",
  "3 SALIDAS",
  "4 SALIDAS",
  "5 SALIDAS",
  "6 SALIDAS",
  "7 SALIDAS",
  "8 SALIDAS"
];

export const LEVELS_1_6 = [
  "NVL 1",
  "NVL 2",
  "NVL 3",
  "NVL 4",
  "NVL 5",
  "NVL 6"
];

export const LEVELS_1_5 = [
  "NVL 1",
  "NVL 2",
  "NVL 3",
  "NVL 4",
  "NVL 5"
];

export const FORTRESS_TROOP_TYPES = [
  "1 TROPA",
  "NVL MÁS ALTO DE TROPAS",
  "COMO MANDA EL ARMADOR"
];

export const HEROES = [
  "[Escudero del Mar] Lochfin",
  "[Reina de la Nieve] Alice",
  "[Incineradora] Mónica",
  "[Cuervo Nocturno] Ícaro",
  "[Sabio de Viento] Anderson",
  "[Cuervo Negro] Chadra",
  "[Guardián] Wesley",
  "[Estafador] Chismoso",
  "[Trasgo Dinamita] Tinkus",
  "[Prima Donna] Felicia",
  "[Rastreadora] Boom-Hilda",
  "[Forjador de Almas] Drumyr",
  "[Sombra] Blink",
  "[Rayo Escarlata] Greta",
  "[Matademonios] Shroud",
  "[Caballero Letal] Shane",
  "[Hijo de la Luz] Sparky",
  "[Arquera Letal] Cathiss",
  "[Caballera de la Rosa] Joan",
  "[Elementalista] Rasmus"
];

export const CONSTRUCTION_PRIORITIES = [
  "CASTILLO",
  "ACADEMIA",
  "MANSION",
  "CUARTEL/ENFERMERIA",
  "DOMINIO DE MONSTRUO",
  "MONSTRUITOS",
  "PUESTO COMERCIAL",
  "RECURSOS (NO MANSION)",
  "CAMARA DEL TESORO",
  "TALLER",
  "LUNAR",
  "SIN PRIORIDAD"
];

export const RESEARCH_TYPES = [
  "ECONOMIA",
  "DEFENSA",
  "EJERCITO",
  "CACERIA DE MONSTRUOS",
  "MEJORA DE DEFENSAS",
  "MEJORA MILITAR",
  "LIDERAZGO DE EJERCITO",
  "COMANDO MILITAR",
  "MONSTRUITOS",
  "SIGILOS",
  "BATALLA PO LA MARAVILLA",
  "DESPERTAR DEL MANA",
  "COMBATE DE MOUSTRITOS",
  "EQUIPO",
  "BATALLAS POR LAS MARVILLAS AVANZADAS"
];

export const ARMY_TYPES = [
  "T1 INFANTERIA",
  "T1 ARQUERO",
  "T1 CATAFRACTO",
  "T1 BALISTA",
  "T2 GLADIADOR",
  "T2 TIRADOR",
  "T2 JINETE REPTILIANO",
  "T2 CATAPULTA",
  "T3 GUARDIA REAL",
  "T3 FRANCOTIRADOR",
  "T3 CABALLERIA REAL",
  "T3 LANZAPIEDRAS FUEGO",
  "T4 GUERRERO HEROICO",
  "T4 CAÑONERO HEROICO",
  "T4 JINETE DRAGON ANCESTRAL",
  "T4 DESTRUCTOR",
  "T5 GUARDIAN LUMINARIO",
  "T5 TIRADOR LUMINARIO",
  "T5 LEON LUMINARIO",
  "T5 VENGADOR LUMINARIO",
  "NO ENTRENA TROPAS"
];

export const TRAPS = [
  "PUAS",
  "TORRE DE ARQUERO",
  "ROCAS CON PUAS",
  "PUAS DE METAL",
  "TORRE DE FRANCOTIRADOR",
  "TRONCOS RODANTES",
  "PUAS DE HIERRO CANDENTE",
  "TORRE FORTIFICADA",
  "ROCAS DE LLAMAS",
  "PUAS ARDIENTES",
  "RASCACIELOS",
  "TRONCOS ARDIENTES"
];

export const PACTS = ["1A", "1B", "2A", "2B", "3", "4"];

export const FAMILIARS = [
  "JAZIEK",
  "YETI",
  "MAGUS",
  "HECHICERO",
  "CABEZA HUECA",
  "BAUM",
  "MAGMALIUS",
  "CONCHASPINA",
  "GNOMO",
  "CHAMAN TOPO",
  "INGENIERO",
  "MAESTRO BESTIA",
  "TEMPESTIZO",
  "AQUQRION",
  "TERRIZO",
  "PYRIS",
  "ARPIA",
  "STRIX",
  "ALAESCARCHA",
  "GARGANTUA",
  "BESTIA DE NIEVE",
  "GUIVERNO DE JADE",
  "GRIFO",
  "MEGALARVA",
  "DRIDER INFERNAL",
  "NOCEROS",
  "LA MUERTE",
  "SABERFANG",
  "TITAN DE MAREA",
  "BUEN APETITO",
  "ABEJA REINA",
  "ALANEGRA",
  "CABALLO DE TROYA",
  "GOBLIN",
  "EL MAL GORGOJO",
  "TOTEM",
  "ROCOSO",
  "KANGREJO",
  "HUEY HOPS",
  "ACAPARADOR",
  "GEMMING DUENDECILLO",
  "TRUCO ESTRELLA"
];

export const BANK_TYPES = ["PRIVADO", "DE GREMIO"];

export const REST_SCHEDULES = [
  "22PM A 01AM HORA ARG",
  "3AM A 6AM HORA ARG",
  "6AM A 9AM HORA ARG",
  "SIN DESCANSO"
];

export const DOWNLOAD_FILES = ["CACERIA", "KILLS", "FDG"];

// Chaos Arena Form Types and Constants
export interface ChaosArenaMissionData {
  enabled: boolean;
  value1: number;
  value2: number;
}

export interface ChaosArenaRadioMissions {
  recursos_nivel3: 'si' | 'no' | '';
  recursos_nivel4: 'si' | 'no' | '';
  recursos_nivel5: 'si' | 'no' | '';
  monstruos_nivel3: 'si' | 'no' | '';
  monstruos_nivel4: 'si' | 'no' | '';
  monstruos_nivel5: 'si' | 'no' | '';
}

export interface ChaosArenaFormState {
  [key: string]: ChaosArenaMissionData | ChaosArenaRadioMissions;
  radioMissions: ChaosArenaRadioMissions;
}

export const CHAOS_ARENA_MISSIONS = [
  "Compra de lotes especiales",
  "Aumenta el poder total",
  "Abrir cofre de la feria de artefactos",
  "Aumentar el poder (artefactos)",
  "Alcanza Fase 3 （Evento Infierno)",
  "Tiempo reduce usando velocidad Ups",
  "Gasta energía cazando monstruos en el mapa del reino",
  "Usa RES en las etapas de héroe",
  "Entrenar Soldados",
  "Enfréntate a Guardianes del Laberinto de Élite/x10",
  "Encuentro de Guardianes de Laberinto",
  "Tiempo reducido usando Aceleración de Fusión",
  "Usa Estrellas Sagradas",
  "EXP de Monstruito con artículos de EXP (sin Fragmentos)",
  "Fusionar Pactos",
  "Usar Fragmentos",
  "Enfréntate a un Duende Guardián en el Magnate del Reino",
  "Mata monstruos de nivel 4 o superior",
  "Fusionar Piedras de Habilidad",
  "Usa Amuletos",
  "Usa rollos de estrella de castillo",
  "Completa misiones de Admin",
  "Completar misiones de Gremio",
  "Batallas del Coliseo de héroes",
  "Forja de Equipo",
  "Gasta Gemas"
];

export const CHAOS_ARENA_RADIO_MISSIONS = [
  { key: 'recursos_nivel3', label: 'Consigue todos los recursos restantes en casillas de recursos de nivel 3 y superior en la Arena del Caos' },
  { key: 'recursos_nivel4', label: 'Consigue todos los recursos restantes en casillas de recursos de nivel 4 y superior en la Arena del Caos' },
  { key: 'recursos_nivel5', label: 'Consigue todos los recursos restantes en casillas de recursos de nivel 5 y superior en la Arena del Caos' },
  { key: 'monstruos_nivel3', label: 'Mata a monstruos de nv. 3 o superior en la Arena del Caos' },
  { key: 'monstruos_nivel4', label: 'Mata a monstruos de nv. 4 o superior en la Arena del Caos' },
  { key: 'monstruos_nivel5', label: 'Mata a monstruos de nv. 5 o superior en la Arena del Caos' }
];

