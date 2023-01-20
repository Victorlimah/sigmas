import * as S from "./styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MockRooms from "../../services/mock/data";

import {
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";

import { Button } from "@mui/material";

import {
  ExpandMore as ExpandMoreIcon,
  ArrowBackIos as ArrowBackIosIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
} from "@mui/icons-material";

import { BsSnow, BsWind } from "react-icons/bs";
import { FcVideoProjector } from "react-icons/fc";

export default function AccordionRooms() {
  const navigate = useNavigate();
  const [indexDay, setIndexDay] = useState(0);

  return (
    <S.Container>
      {MockRooms[indexDay].rooms.map((turma) => (
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography id="name-block">{turma.block}</Typography>
          </AccordionSummary>

          <SelectDay />
          
          <AccordionDetails>
            <Typography className="rooms">
              {turma.rooms.map((room) => (
                <Button
                  onClick={() => openRoom(room.blockId, room.number)}
                  variant="contained"
                >
                  <S.Capacity>{room.capacity}</S.Capacity>
                  <RenderRoomIcons tags={room.tags} />
                  <S.RoomNumber>{room.number}</S.RoomNumber>
                  <S.IndicatorGroup>
                    {room.students?.map((student, index) => (
                      <S.Indicator
                        key={index}
                        students={student}
                        capacity={room.capacity}
                      >
                        {student}
                      </S.Indicator>
                    ))}
                  </S.IndicatorGroup>
                </Button>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </S.Container>
  );

  function SelectDay() {
    return (
      <S.Day>
        <span onClick={() => decrementDay()}> <ArrowBackIosIcon /> </span>
          <Typography id="text">{MockRooms[indexDay].day}</Typography>
        <span onClick={() => incrementDay()}> <ArrowForwardIosIcon /> </span>
      </S.Day>
    );
  }

  function RenderRoomIcons({ tags }){
    return (
      <S.Icons>
        {tags.includes("VENTILADOR") && <BsWind />}
        {tags.includes("AR CONDICIONADO") && <BsSnow />}
        {tags.includes("PROJETOR") && <FcVideoProjector />}
      </S.Icons>
    );
  }

  function openRoom(blockId, roomNumber) {
    navigate(`/room/${blockId}/${roomNumber}`);
  }

  function incrementDay() {
    if (indexDay === MockRooms.length - 1) setIndexDay(0);
    else setIndexDay(indexDay + 1);
  }

  function decrementDay() {
    if (indexDay === 0) setIndexDay(MockRooms.length - 1);
    else setIndexDay(indexDay - 1);
  }
}
