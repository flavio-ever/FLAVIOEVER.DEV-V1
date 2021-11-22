import tw, { styled, css } from 'twin.macro'

type Wrap = {
  color?: string
}

type Me = {
  img: string
  width?: number
  height?: number
}

export interface IMe extends Me, Wrap {}

export const Wrap = styled.div<Wrap>(({ color }) => [
  tw`rounded-full flex items-center justify-center`,

  css`
    background-color: ${color};

    width: 15.31rem;
    height: 15.31rem;
  `
])

export const Me = styled.div<Me>(({ img, width = 167, height = 167 }) => [
  tw`flex bg-no-repeat bg-left-top`,

  css`
    width: ${width + `px`};
    height: ${height + `px`};
    background-image: url(${img});
  `
])
