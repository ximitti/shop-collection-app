import styled from 'styled-components'
import { motion } from 'framer-motion'

const ProdutosWrapper = styled(motion.div)`
  height: 90vh;
  overflow-y: auto;
  padding: 1rem;
  scroll-behavior: smooth;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: center;
    gap: 1rem;
  }
`

export default ProdutosWrapper
