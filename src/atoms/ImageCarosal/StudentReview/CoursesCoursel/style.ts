import styled from "@emotion/styled";

/* Carousel container */
export const CoruselComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  .col-md-12 {
    text-align: center;
  }

  /* Carousel item */
  .item {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 20px;
    text-align: left;
  }

  /* Image inside carousel item */
  .item img {
    max-width: 100%;
    height: auto;
  }

  /* Price styling */
  .price {
    margin-top: 10px;
    font-weight: bold;
  }

  /* Author info */
  .author-info {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .author-info img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  /* Rating styling */
  .rating {
    display: flex;
    align-items: center;
  }

  .rating i {
    color: gold;
    margin-right: 3px;
  }

  /* Title and description */
  h4 {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    margin-top: 5px;
    color: #666;
  }

  /* Bottom info */
  .bottom-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .bottom-info ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }

  .bottom-info li {
    margin-right: 10px;
    font-size: 0.9rem;
  }

  a {
    text-decoration: none;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
  }
  /* Carousel item styles */
  .item {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 20px;
    text-align: left;
    transition: transform 0.3s;
  }

  /* Image inside carousel item */
  .item img {
    max-width: 100%;
    height: auto;
  }

  /* Price styling */
  .price {
    margin-top: 10px;
    font-weight: bold;
  }

  /* Author info */
  .author-info {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .author-info img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  /* Rating styling */
  .rating {
    display: flex;
    align-items: center;
  }

  .rating i {
    color: gold;
    margin-right: 3px;
  }

  /* Title and description */
  h4 {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    margin-top: 5px;
    color: #666;
  }

  /* Bottom info */
  .bottom-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .bottom-info ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }

  .bottom-info li {
    margin-right: 10px;
    font-size: 0.9rem;
  }

  /* Custom navigation arrows */
  .custom-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    color: gray;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .next-arrow {
    right: 10px; /* Adjust the right position */
  }

  /* Previous arrow */
  .prev-arrow {
    left: 10px; /* Adjust the left position */
  }
`;
