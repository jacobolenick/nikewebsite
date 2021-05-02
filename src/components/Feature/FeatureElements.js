import styled from 'styled-components';
import Featurebanner from '../../images/featurebanner.jpeg';

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Featurebanner});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  border: black solid;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
    font-weight: 200;
  }
`;
export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #fff;
  color: #000;
  border-radius: 8px;
  box-shadow: 5px 2px 20px black;
  transition: 0.2s ease-out;

  &:hover {
    color: #FFF;
    background: #000;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
