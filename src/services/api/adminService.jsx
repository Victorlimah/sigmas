import api from './api';

export async function getEntity(entity) {
  const response = await api.get(`/${entity}`);
  return response.data;
}

export async function addEntity(entity, data) {
  const response = await api.post(`/${entity}`, data);
  return response.data;
}

export async function updateEntity(entity, id, data) {
  const response = await api.put(`/${entity}/${id}`, data);
  return response.data;
}

export async function deleteEntity(entity, id) {
  const response = await api.delete(`/${entity}/${id}`);
  return response.data;
}
