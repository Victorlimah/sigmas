/* eslint-disable react-hooks/exhaustive-deps */
import * as S from './styles';

import Header from '../../components/Header';

import M from 'materialize-css';

import { useState, useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import { getEntity } from '../../services/api/adminService';
import { addTagToRoom } from '../../services/api/roomsService';

import { getClassesByRoomId } from '../../services/api/classesService';

export default function Room() {
  const [day, setDay] = useState('segunda');
  const blockId = window.location.pathname.split('/')[2];
  const number = window.location.pathname.split('/')[3];
  const days = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];

  const data = {
    name: "R.A 201", tags: ["SI", "AR CONDICIONADO"], capacity: 30,
    segunda: [
      {
        disciplina: { code: 123, nome: "PASi", professor: "Adson", alunos: 30 },
        schedules: "13:00 - 15:00",
      },
      {
        disciplina: { code: 123, nome: "Redes", professor: "Daniel", alunos: 30 },
        schedules: "10:00 - 12:00",
      }
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
      }],
    quinta: [],
    sexta: [],
  }

  const [data2, setData2] = useState(data);
  const [tags, setTags] = useState(data.tags);
  const [allTags, setAllTags] = useState([]);
  const [tempTags, setTempTags] = useState([]);
  const [tempAllTags, setTempAllTags] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function getClasses() {
      const response = await getClassesByRoomId(blockId, number);
      const tags2 = await getEntity('tags');
      const tags = response.tags;
      setAllTags(tags2.filter((tag) => !tags.includes(tag.name)));
      setTempAllTags(tags2.filter((tag) => !tags.includes(tag.name)).map((tag) => tag.name));
      setTags(tags);
      setTempTags(tags);
      setData2(response);
      console.log(response);
    }
    getClasses();
  }, [refresh]);

  return (
    <>
      <Header />
      <S.Container>
        <S.Header>
          <S.NameRoom>{data2?.name}</S.NameRoom>
          <S.EditButton
            data-target="modal1"
            class="btn modal-trigger"
            onClick={() => openEditModal()}
          >
            <FiSettings />
          </S.EditButton>
        </S.Header>
        <S.Tags>
          <S.Tag>CAPACIDADE: {data2?.capacity}</S.Tag>
          {tags?.map((tag, index) => (
            <S.Tag key={index}>{tag}</S.Tag>
          ))}
        </S.Tags>
        <S.Day>
          {days.map((today, index) => (
            <S.DayButton
              key={index}
              onSelect={day === today}
              onClick={() => setDay(today)}
            >
              {capitalize(today)}
            </S.DayButton>
          ))}
        </S.Day>

        {data2[day]?.map((item) => (
          <S.Card>
            <S.CardHeader>
              <S.CardSubtitle>{item.code}</S.CardSubtitle>
              <S.CardTitle>{item.name}</S.CardTitle>
              <S.CardSubtitle>{item.teacher}</S.CardSubtitle>
            </S.CardHeader>
            <S.CardBody>
              <S.CardText>{item.schedule}</S.CardText>
              <S.CardText>{item.students} alunos</S.CardText>
            </S.CardBody>
          </S.Card>
        ))}

        {data2[day]?.length === 0 && (
          <S.Card>
            <S.CardHeader>
              <S.CardTitle>Nenhuma aula cadastrada</S.CardTitle>
            </S.CardHeader>
          </S.Card>
        )}

        <div id="modal1" class="modal">
          <div class="modal-content">
            <S.TitleModal>{data2?.name}</S.TitleModal>
            <S.SubtitleModal>Tags da sala</S.SubtitleModal>
            <S.RoomTag>
              {tempTags.map((tag, index) => (
                <S.TagRoom 
                onClick={() => removeTag(tag)}
                key={index}>{tag}</S.TagRoom>
              ))}
            </S.RoomTag>
            <S.SubtitleModal>Mais Tags</S.SubtitleModal>
            <S.RoomTag>
              {[...tempAllTags]?.map((tag, index) => (
                <S.TagRoom 
                onClick={() => addTag(tag)}
                key={index}>{tag}</S.TagRoom>
              ))}
            </S.RoomTag>
          </div>
          <div class="modal-footer">
            <S.ActionButton
              onClick={() => cancelEdit()}
              type="cancel"
              href="#!"
              class="modal-close waves-effect waves-green btn-flat"
            >
              Cancelar
            </S.ActionButton>
            <S.ActionButton
              onClick={() => saveEdit()}
              type="add"
              href="#!"
              class="modal-close waves-effect waves-green btn-flat"
            >
              Salvar
            </S.ActionButton>
          </div>
        </div>
      </S.Container>
    </>
  );

  function openEditModal() {
    const modal = document.querySelector('#modal1');
    const instance = M.Modal.init(modal);
    instance.open();
  }

  function cancelEdit() {
    const modal = document.querySelector('#modal1');
    const instance = M.Modal.init(modal);
    instance.close();
  }

  async function saveEdit() {
    const tagsToAdd = tempTags.filter((tag) => !tags.includes(tag));
    const tagsToRemove = tags.filter((tag) => !tempTags.includes(tag));

    const modal = document.querySelector('#modal1');
    const instance = M.Modal.init(modal);
    instance.close();
    
    const response = await addTagToRoom(Number(blockId), number, tagsToAdd, tagsToRemove, tags);
    if (response) setTags(response)
  }

  function addTag(tag) {
    setTempAllTags(tempAllTags.filter((item) => item !== tag));
    setTempTags([...tempTags, tag]);
  }

  function removeTag(tag) {
    setTempTags(tempTags.filter((item) => item !== tag));
    setTempAllTags([...tempAllTags, tag]);
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
