import styled from "styled-components"

const Card = ({title}) => {
  return (
    <StyledCard>
      <p>{title}</p>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  background-image: linear-gradient(rgba(0, 0, 0, -3.6), rgba(0, 0, 0, 0.7)), url("https://plus.unsplash.com/premium_photo-1676321046695-a23b1d9f576e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FsbGUlMjBkZSUyMGJhaW5zfGVufDB8fDB8fHww");
  background-size: cover;
  height: 200px;
  opacity: 1.5;
  p{
    font-weight: bold;
    color: white;
  }
  
`

export default Card