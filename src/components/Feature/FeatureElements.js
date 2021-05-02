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
  background: transparent;
  color: white;
  border-radius: 0px;
  border: white solid;
  transition: 0.2s ease-out;

  &:hover {
    color: black;
    background: white;
    border: white solid;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
