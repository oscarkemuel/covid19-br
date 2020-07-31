import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from{
    transform: rotate(0deg)
  }

  to{
    transform: rotate(360deg)
  }
`;

export const Loading = styled.div.attrs((props) => ({
  inLoading: (props.loading === 'true'),
}))`
  display: flex;
  align-items: center;
  justify-content: center;

  p{
    margin-left: 10px;
    color: #F22E47;
    font-size: 25px;
    font-weight: bold;
  }

  svg{
    height: 80vh;
  }

  ${(props) => props.inLoading && css`
    svg{
      animation: ${rotate} 2s linear infinite;
    }
  `}
`;

export const Infos = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;

  div{
    &:hover{
      border: solid 2px #4FFA7B;
      box-shadow: 0 0 0.5em #4FFA7B;
    }

    transition: all 200ms;

    min-width: 270px;
    color: #FFF;
    background-color: #232531;
    padding: 15px 20px;
    margin: 10px;
    border: solid 2px transparent;
    border-radius: 5px;

    h2{
      color: #AA6FFD;
      font-size: 15px;
      display: flex;
      align-items: center;
      margin-bottom: 15px;

      img{
        margin-right: 10px;
        width: 35px;
        height: 25px;
      }
    }

    p{
      margin:5px auto;
      font-weight: bold;
      font-size: 15px;
      display: flex;
      align-items: center;
      color: #4FFA7B;

      svg{
        color: red;
        margin-right: 5px;
      }
    }
  }
`;

export const Principal = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p{
    color: #F22E47;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input{
    border: 0;
    border-bottom: 1px solid #F22E47;
    padding: 10px;
    color: #FFF;
    background-color: transparent;
    margin-bottom: 15px;
    font-size: 20px
  }
`;
