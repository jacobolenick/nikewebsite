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
  border-radius: 12px;
  box-shadow: 6px 6px 20px #CCC;
  box-shadow: 5px 2px 20px grey;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 460;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  font-weight: 150;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 200;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #000;
  border-radius: 8px;
  color: #FFF;
  box-shadow: 6px 6px 20px #ccc;
  transition: 0.2 ease-out;

  &:hover {
    background: #E9E9E8;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;