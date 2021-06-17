import styled from 'styled-components'

const NavbarWrapper = styled.div`
  width: 100vw;
  height: 10vh;
  border-bottom: 1px solid var(--font-color);

  nav {
    height: 100%;

    ul {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 1rem 3rem;

      li {
        a {
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
    }
  }
`

export default NavbarWrapper
