import React from 'react'

import * as S from './styles'

export default function Me({ bgColor = '', bgImg }: S.IMe) {
  return (
    <S.Wrap bgColor={bgColor}>
      <S.Me bgImg={bgImg} />
    </S.Wrap>
  )
}
