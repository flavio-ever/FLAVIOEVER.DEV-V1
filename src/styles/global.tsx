import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  :root {
    // Colors
    --dark-0: #1B1C1F;
    --dark-1: #25272E;
    --dark-2: #3D3F51;
    --dark-3: #959BBB;
    --dark-4: #D9DDF4;
    --purple: #512DE3;
    --yellow: #FFD600;
  }

  body {
    ${tw`antialiased`};

    background-color: var(--dark-0);
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
