import api from './api';

export async function GetRooms() {
  const response = await api.get('/rooms');
  return response.data;
}

export async function addTagToRoom(blockId, number, tagsAdd, tagsRemove, tags) {
  const response = await api.post(`/rooms/tags`, { tagsAdd, tagsRemove, blockId, number });
  console.log(response)
  if (response.status === 201) {
    const tagsToReturn = tags.filter((tag) => !tagsRemove.includes(tag));
    return [...tagsToReturn, ...tagsAdd];
  }
  return tags;
}
