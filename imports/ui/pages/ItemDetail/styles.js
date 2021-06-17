import styled from 'styled-components'
import { motion } from 'framer-motion'

// --------------------------
const ItemDetailWrapper = styled(motion.div)`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
  height: 90vh;
  overflow-y: auto;
  padding: 1rem 0;
  scroll-behavior: smooth;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  header {
    width: 100%;
    text-align: center;

    h1 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    button {
      width: 25%;
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

    @media (max-width: 600px) {
      button {
        width: 50%;
      }
    }
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'imagem texto';
    overflow: hidden;
    border: 1px solid var(--font-color);

    .imagem {
      width: 480px;

      img {
        width: 960px;
        height: 100%;
      }
    }

    .texto {
      padding: 2rem;

      p {
        padding: 0.5rem;
        border: 1px solid var(--bg-color);
        background-color: var(--font-color);
        color: var(--bg-color);
      }
    }

    @media (max-width: 961px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas: 'imagem' 'texto';
      width: 90%;
      justify-content: center;
      align-items: center;

      .imagem {
        min-width: 300px;
        width: 100%;
        height: 100%;

        img {
          min-width: 300px;
          width: 100%;
        }
      }

      .texto {
        min-width: 300px;
        width: 100%;
        height: 100%;
        padding: 1rem;
        display: flex;
        align-items: center;
      }
    }
  }

  footer {
    width: 100%;
    text-align: center;
  }
`

export default ItemDetailWrapper
