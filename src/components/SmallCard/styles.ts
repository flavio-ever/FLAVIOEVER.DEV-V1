import tw, { styled } from 'twin.macro'

export const Container = styled.div(() => [
  tw`flex flex-col overflow-hidden bg-dark-200 rounded-xl shadow-md cursor-pointer`
])

export const WrapperImage = styled.div(() => [tw`w-full`])

export const Title = styled.h1(() => [
  tw`text-lg leading-tight font-medium text-dark-400`
])

export const WrapperInfo = styled.div(() => [tw`p-5`])

export const WrapperSub = styled.div(() => [tw`flex justify-between mt-5`])

export const Date = styled.p(() => [])

export const Tags = styled.p(() => [tw`truncate`])
