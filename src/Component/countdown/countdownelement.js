import styled from "styled-components";

export const CountContainer = styled.div
`

display:flex;
`

export const TimerContainer = styled.div
`
margin:auto;
padding:1 rem;
@media(min-width:480px)
{
    padding:4 rem;
}
`

export const TimerWrapped = styled.div
`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (min-width: 35.5em) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0 2rem;
  }
`

export const DateStyled = styled.header`
  margin-bottom: 2rem;

  & h1 {
    color: #798EB0;
    font-family: Mukta;
    font-size: clamp(1rem, 2vw, 99rem);
    font-weight: 300;
    letter-spacing: 0.1875em;
    margin: unset;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const CounterStyled = styled.div`
  background: rgba(255, 255, 255, 0.025);
  border-radius: 1rem;
  color: #8973FD;
  display: flex;
  flex-direction: column;
  font-family: "JetBrains Mono", mono;
  font-size: clamp(1rem, 8vw, 99rem);
  font-weight: 100;
  line-height: 1;
  padding: 2vw
  text-align: center;

  h2 {
    color: #8973FD;
    font-family: Mukta;
    font-size: clamp(1rem, 2vw, 99rem);
    font-weight: 300;
    letter-spacing: .1875em;
    margin: 1.25rem 0 0;
    order: 1;
    overflow: hidden
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
    width: 100%;
  }
`
