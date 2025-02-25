type Session = {
  title: string;
  room: string;
  schedule: string;
  speaker: string;
  description: string;
};

export type Event = {
  group: string;
  groupSchedule: string;
  sessions: Array<Session>;
};

export const EVENTS: Array<Event> = [
  {
    group: "Entrada y Bienvenida",
    groupSchedule: "9:30 am - 10:00 am",
    sessions: [
      {
        title: "Bienvenida ETHCR Day",
        room: "Sala 1",
        schedule: "9:30 am - 9:45 am",
        speaker: "Otto Mora",
        description: "Charla de apertura",
      },
    ],
  },
  {
    group: "Keynote",
    groupSchedule: "10:00 am - 10:30 am",
    sessions: [
      {
        title: "Keynote Talk",
        room: "Auditorio",
        schedule: "10:00 am - 10:30 am",
        speaker: "",
        description: "RESERVADO",
      },
    ],
  },
  {
    group: "Bloque 1",
    groupSchedule: "10:30 am - 11:00 am",
    sessions: [
      {
        title: "Workshop: Intro a web3",
        room: "Sala 2",
        schedule: "10:30 am - 11:15 am",
        speaker: "RESERVADO",
        description: "",
      },
      {
        title: "Workshop: From Code to Contract",
        room: "Sala 3",
        schedule: "10:30 am - 11:15 am",
        speaker: "Igor Yalovoy",
        description: "",
      },
    ],
  },
  {
    group: "Bloque 2",
    groupSchedule: "11:30 am - 12:00 pm",
    sessions: [
      {
        title:
          "How NFTs create unique opportunities for artists to build communities",
        room: "Sala 1",
        schedule: "11:30 am - 12:00 pm",
        speaker: "Perchy",
        description: "",
      },
      {
        title: "Escalando Ethereum",
        room: "Sala 2",
        schedule: "11:15 am - 12:00 pm",
        speaker: "Alberto Galan 886Crypto",
        description: "",
      },
      {
        title: "Workshop: Crea tu propio token!",
        room: "Sala 3",
        schedule: "10:30 am - 11:15 am",
        speaker: "Justin Castillo",
        description:
          "Aprenderás el estándar ERC20 y lograrás desplegar tu propio token!",
      },
    ],
  },
  {
    group: "Almuerzo",
    groupSchedule: "12:00 pm - 1:00 pm",
    sessions: [
      {
        title: "Almuerzo",
        room: "Piso 3",
        schedule: "12:00 pm - 1:00 pm",
        speaker: "",
        description: "El almuerzo se servirá en el piso 3",
      },
    ],
  },
  {
    group: "Bloque 4",
    groupSchedule: "1:00 pm - 1:30 pm",
    sessions: [
      {
        title: "Organizaciones Evolucionarias",
        room: "Sala 1",
        schedule: "1:00 pm - 1:30 pm",
        speaker: "Jaf Sandí",
        description: "",
      },
      {
        title:
          "Web3 para las masas: confluencia de AA, zk-Starks y onchain worlds",
        room: "Sala 2",
        schedule: "1:00 pm - 1:30 pm",
        speaker: "Ranulfo",
        description: "",
      },
      {
        title:
          "Abriendo puertas: las oportunidades para un desarrollador en el mundo de blockchain",
        room: "Sala 3",
        schedule: "1:00 pm - 1:30 pm",
        speaker: "Ranulfo",
        description: "",
      },
    ],
  },
  {
    group: "Bloque 5",
    groupSchedule: "1:30 pm - 2:00 pm",
    sessions: [
      {
        title: '"El Abogado crypto"',
        room: "Sala 1",
        schedule: "1:30 pm - 2:00 pm",
        speaker: "Jose Miguel Zamora Socio Fundador Lighthouse",
        description: "",
      },
    ],
  },
  {
    group: "Bloque 6",
    groupSchedule: "2:00 pm - 2:30 pm",
    sessions: [
      {
        title: "Intro a Governanza, DAOs, CofiBlocks",
        room: "Sala 1",
        schedule: "2:00 pm - 2:30 pm",
        speaker: "Karla Córdoba",
        description: "",
      },
      {
        title: "El Futuro de la Venta de Entradas de Eventos con NFT",
        room: "Sala 2",
        schedule: "2:00 pm - 2:30 pm",
        speaker: "Robert Ramirez",
        description: "",
      },
      {
        title: "Workshop: desarrollando zk apps con o1js",
        room: "Sala 3",
        schedule: "1:45 pm - 2:30 pm",
        speaker: "Rafael Campos",
        description: "",
      },
    ],
  },
  {
    group: "Coffee break",
    groupSchedule: "2:30 pm - 3:00 pm",
    sessions: [
      {
        title: "Coffee Break",
        room: "Piso 3",
        schedule: "2:30 pm - 3:00 pm",
        speaker: "",
        description:
          "Break para disfrutar de un delicioso café y aprovechar para hacer networking",
      },
    ],
  },
  {
    group: "Bloque 7",
    groupSchedule: "3:00 pm - 3:30 pm",
    sessions: [
      {
        title: "Identity",
        room: "Sala 1",
        schedule: "3:00 pm - 3:30 pm",
        speaker: "Otto Mora | Polygon ID",
        description: "",
      },
      {
        title:
          "Developer onboarding: herramientas para el desarrollo en Ethereum y L2s",
        room: "Sala 3",
        schedule: "3:00 pm - 3:30 pm",
        speaker: "Edgar Barrantes",
        description: "",
      },
    ],
  },
];
