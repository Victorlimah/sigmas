import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NameRoom = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 15px 0 25px;
`;

export const TitleModal = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

export const SubtitleModal = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 15px 0 25px;
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Tag = styled.div`
  background: green;
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: center;
  padding: 12px 18px;
  margin: 0 12px;
  border-radius: 12px;
  background-color: #003B8E;
  color: #fff;
`;

export const Day = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0 15px;
  padding: 10px;

`;

export const DayButton = styled.button`
  transition: all 0.2s;
  background: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  margin: 0 12px;
  padding: 5px 15px;
  border-radius: 12px;
  cursor: pointer;
  color: ${props => props.onSelect ? '#fff' : '#003B8E'} ;
  background-color: ${props => props.onSelect ? '#003B8E' : '#fff'} ;

  &&:focus{
    background-color: #003B8E;
  }
`;

export const Card = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 15px 0;
  padding: 10px;
  border-radius: 25px;
  background-color: #003B8E;
  color: #fff;
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 0;
`;

export const CardText = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CardTitle = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
  text-align: center;
`;

export const CardSubtitle = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 5px 0;
`;

export const CardBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 15px 0;
`;

export const CardButton = styled.button`
  transition: all 0.2s;
  background: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  margin: 0 12px;
  padding: 5px 15px;
  border-radius: 12px;
  cursor: pointer;
  color: ${props => props.onSelect ? '#fff' : '#003B8E'} ;
  background-color: ${props => props.onSelect ? '#003B8E' : '#fff'} ;

  &&:focus{
    background-color: #003B8E;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
`;

export const EditButton = styled.button`
  transition: all 0.2s;
  background: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  margin: 0 12px;
  padding: 5px 15px;
  border-radius: 12px;
  cursor: pointer;

  &&:focus, &&:hover, &&:active{
    background: none;
  }
`;

export const RoomTag = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  flex-wrap: wrap;
`;

export const TagRoom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 5px;
  padding: 8px 10px;
  border-radius: 12px;
  background-color: #003B8E;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const ActionButton = styled.button`
  transition: all 0.2s;
  background: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  margin: 0 12px;
  padding: 5px 15px;
  border-radius: 12px;
  cursor: pointer;
  color: ${props => props.type !== 'cancel' ? '#fff' : '#003B8E'} ;
  background-color: ${props => props.type !== 'cancel' ? '#003B8E' : '#fff'} ;

  &&:focus, &&:hover, &&:active{
    background-color: ${props => props.type !== 'cancel' ? '#003B8E' : '#fff'} ;
  }
`;
