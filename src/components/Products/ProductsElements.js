import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #000;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
  
`;


export const ProductImg = styled.img`
  height: 375px;
  min-width: 300px;
  max-width: 100%;
  border-radius: 0px;
  border: black solid;
  
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  border: black solid;
  padding: 10px;
`;

export const ProductTitle = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  font-weight: 300;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 400;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: white;
  border-radius: opx;
  border: black solid;
  color: black;
  transition: 0.2 ease-out;

  &:hover {
    background: black;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: white;
  }
`;
