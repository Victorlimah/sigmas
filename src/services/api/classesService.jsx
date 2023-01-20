import api from './api';

export async function getCreateClass() {
  const response = await api.get('/classes/create');
  return response.data;
}

export async function getAllClasses(){
  const response = await api.get('/classes');
  return response.data;
}

export async function getDistinctClasses(){
  const response = await api.get('/classes/distinct');
  return response.data;
}

export async function getNewClass() {
  const response = await api.get('/classes/new');
  return response.data;
}

export async function getClassesByRoomId(blockId, number){
  const response = await api.get(`/classes/${blockId}/${number}`);
  return response.data;
}

export async function createClass(teacherId, disciplineId, roomId, students, schedules){
  const response = await api.post('/classes', {
    teacherId,
    disciplineId,
    roomId,
    students,
    schedules
  });
  return response.data;
}

export async function updateClass(id, teacher, discipline, block, number, students){
  const response = await api.put(`/classes`, {
    id,
    teacher,
    discipline,
    block,
    number,
    students
  });

  return response.data;
}