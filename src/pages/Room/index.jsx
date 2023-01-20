/* eslint-disable react-hooks/exhaustive-deps */
import * as S from './styles';

import Header from '../../components/Header';

import { useState, useEffect } from 'react';

import { roomDefault, getRoomDetails } from "../../services/mock/room";

export default function Room() {
  const [day, setDay] = useState('segunda');
  const blockId = window.location.pathname.split('/')[2];
  const number = window.location.pathname.split('/')[3];
  const days = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];

  const [room, setRoom] = useState(roomDefault);
  const [tags, setTags] = useState(roomDefault.tags);

  useEffect(() => {
    async function getClasses() {
      const response = getRoomDetails(blockId, number);
      setTags(response.tags);
      setRoom(response);
    }
    getClasses();
  }, []);

  const { name, capacity } = room;

  return (
    <>
      <Header />
      <S.Container>
        <S.Header>
          <S.NameRoom>{name}</S.NameRoom>
        </S.Header>
        <S.Tags>
          <S.Tag>CAPACIDADE: {capacity}</S.Tag>
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

        {room[day]?.map(({ disciplina, schedules }) => (
          <S.Card>
            <S.CardHeader>
              <S.CardSubtitle>{disciplina.code}</S.CardSubtitle>
              <S.CardTitle>{disciplina.nome}</S.CardTitle>
              <S.CardSubtitle>{disciplina.professor}</S.CardSubtitle>
            </S.CardHeader>
            <S.CardBody>
              <S.CardText>{schedules}</S.CardText>
              <S.CardText>{disciplina.students} alunos</S.CardText>
            </S.CardBody>
          </S.Card>
        ))}

        {room[day]?.length === 0 && (
          <S.Card>
            <S.CardHeader>
              <S.CardTitle>Nenhuma aula cadastrada</S.CardTitle>
            </S.CardHeader>
          </S.Card>
        )}
      </S.Container>
    </>
  );

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
