export const roomDefault = {
  name: "R.A 201",
  tags: ["SI", "AR CONDICIONADO"],
  capacity: 30,
  segunda: [
    {
      disciplina: { code: 123, nome: "PASi", professor: "Adson", alunos: 30 },
      schedules: "13:00 - 15:00",
    },
    {
      disciplina: { code: 123, nome: "Redes", professor: "Daniel", alunos: 30 },
      schedules: "10:00 - 12:00",
    },
  ],
  terca: [],
  quarta: [
    {
      disciplina: { code: 123, nome: "PASi", professor: "Adson", alunos: 30 },
      schedules: "13:00 - 15:00",
    },
    {
      disciplina: { code: 123, nome: "Redes", professor: "Daniel", alunos: 30 },
      schedules: "10:00 - 12:00",
    },
  ],
  quinta: [],
  sexta: [],
};

const ra101 = {
  name: "R.A 101",
  tags: ["SI", "AR CONDICIONADO", "PROJETOR"],
  capacity: 30,
  segunda: [
    {
      disciplina: { code: 123, nome: "PASi", professor: "Adson", alunos: 30 },
      schedules: "13:00 - 15:00",
    },
    {
      disciplina: { code: 123, nome: "Redes", professor: "Daniel", alunos: 30 },
      schedules: "10:00 - 12:00",
    },
  ],
  terca: [],
  quarta: [
    {
      disciplina: { code: 123, nome: "PASi", professor: "Adson", alunos: 30 },
      schedules: "13:00 - 15:00",
    },
    {
      disciplina: { code: 123, nome: "Redes", professor: "Daniel", alunos: 30 },
      schedules: "10:00 - 12:00",
    },
  ],
  quinta: [],
  sexta: [],
};

const salas = {
  "RA 101": ra101,
};

export function getRoomDetails(block, number) {
  const name = `${block} ${number}`;
  return salas[name];
}
