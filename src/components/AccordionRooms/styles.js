import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 10px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .accordion{
      margin: 20px auto 0;
      background-color: #1565c0;
      color: white;
      width: 80%;

      svg{
        color: white;
      }
    }

    .MuiTypography-root{
      font-weight: bold;
      text-align: center;
      width: 100%;
    }

    .rooms{
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      position: relative;

      button{
        width: 190px;
        height: 100px;
        color: #1565c0;
        background-color: white;
        font-weight: bold;
        margin: 0 10px 15px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        &:hover{
          color: white;
          background-color: #003B8E;

          article{
            color: white;
          }
        }
      }
    }

    #name-block{
      margin-left: 25px;
    }
    `;

export const Indicator = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: ${(props) => {
  if (props.students === 0) {
    return 'white';
  }
    if (props.capacity > props.students) {
      return 'green';
    }
    if (props.capacity < props.students) {
      return 'red';
    }
    if (props.capacity === props.students) {
      return 'orange';
    }
  }
  };
  color: ${(props) =>
    props.students === 0 ? "black" : "white"
  }
`;

export const IndicatorGroup = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`;

export const Capacity = styled.article`
  position: absolute;
  right: 5px;
  top: 2px;
  color: #1565c0;
`;

export const Icons = styled.article`
  position: absolute;
  left: 5px;
  top: 2px;
  
  svg{
    color: #1565c0 !important;
    margin-right: 1px;
    width: 25px;
    height: 19px; 
  }
`;

export const RoomNumber = styled.h2`
margin-top: 20px;
  font-size: 20px;
`; 

export const Day = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  span:hover{
    cursor: pointer;
    transform: scale(1.3);
  }

  #text{
    width: 15%;
  }
`;
