import styled from 'styled-components'

const CardWrapper = styled.li`
  width: 250px;
  height: 400px;
  border: 1px solid var(--font-color);
  border-radius: 0.25rem;
  padding: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  background-color: #fff;

  header {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 0.5rem;

    h1 {
      font-size: 0.9rem;
      width: 230px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    div {
      width: 100%;
    }
  }

  main {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 1rem;

    p:first-child {
      width: 230px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  footer {
    justify-self: flex-end;
    display: flex;
    gap: 1rem;
    width: 100%;

    a,
    button {
      width: 100%;
      border: 1px solid var(--font-color);
      border-radius: 0.25rem;
      padding: 0.5rem;
      background-color: var(--font-color);
      color: var(--bg-color);
      text-transform: uppercase;
      font-size: 0.8rem;
      text-align: center;

      &:hover {
        border-color: var(--bg-color);
      }
    }
  }
`

export default CardWrapper
