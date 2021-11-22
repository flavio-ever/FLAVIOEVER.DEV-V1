import tw, { styled, css } from 'twin.macro'

type Wrap = {
  bgColor?: string
}

type Me = {
  bgImg: string
}

export interface IMe extends Me, Wrap {}

export const Wrap = styled.div<Wrap>(({ bgColor }) => [
  tw`rounded-full flex items-center justify-center`,

  css`
    background-color: ${bgColor};

    width: 15.31rem;
    height: 15.31rem;
  `
])

export const Me = styled.div<Me>`
  ${(props: any) =>
    props.bgImg &&
    css`
      background-image: url(${props.bgImg});
    `}

  ${tw`flex bg-no-repeat bg-left-top`}

  width: 167px;
  height: 167px;
`
