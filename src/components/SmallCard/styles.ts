import tw, { css, styled, theme } from 'twin.macro'

type Container = {
  hover?: string
}

export const Container = styled.div<Container>(({ hover }) => [
  tw`flex flex-row cursor-pointer`,

  css`
    & {
      padding-bottom: 1.5rem;
      margin-bottom: 1.5rem;
      border-bottom: 1px solid ${theme`colors.dark.200`};
    }

    &:last-child {
      padding: 0;
      border-bottom: none;
    }

    :hover h1 {
      color: ${hover};
    }
  `
])

export const WrapperImage = styled.div(() => [
  tw`w-full h-full sm:w-60 overflow-hidden rounded-xl shadow-md`
])

export const WrapperInfo = styled.div(() => [tw`ml-6 space-y-4`])

export const Title = styled.h1(() => [
  tw`text-lg leading-tight font-medium text-dark-400 transition-colors duration-200`
])

export const Description = styled.p(() => [
  tw`text-sm leading-tight text-dark-300`
])
