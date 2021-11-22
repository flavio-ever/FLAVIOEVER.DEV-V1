import React from 'react'

import * as S from './styles'

export default function Me({ color, img, height, width }: S.IMe) {
  return (
    <S.Wrap color={color}>
      <S.Me img={img} width={width} height={height} />
    </S.Wrap>
  )
}
