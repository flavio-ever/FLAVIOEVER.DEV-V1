import tw, { styled } from 'twin.macro'

type List = {
  visible: boolean
}

export const List = styled.ul<List>(({ visible }) => [
  tw`bg-dark-50`,
  tw`flex flex-col sm:flex-row justify-center items-center`,
  tw`min-h-screen sm:min-h-0`,
  tw`fixed sm:relative`,
  tw`top-0 right-0 left-0 z-10`,
  tw`space-y-6 sm:flex sm:space-y-0 sm:space-x-4`,
  tw`transition-all duration-500 sm:transition-none`,

  visible && tw`-top-full`
])

export const Item = styled.li(() => [
  tw`hover:text-dark-400 transition-colors duration-200`
])
