import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaDribbble } from 'react-icons/fa';

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  border: black solid;
`;

export const NavLink = styled(Link)`
  color: #000;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #000;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaDribbble)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
