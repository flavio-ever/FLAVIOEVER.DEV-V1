import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

type Card = {
  src: string
  link: string
  title: string
  date: string
  tags: string
}

export default function SmallCard({ src, link, title, date, tags }: Card) {
  return (
    <Link href={link}>
      <S.Container>
        <S.WrapperImage>
          <Image
            layout="responsive"
            height={50}
            width={100}
            objectFit="cover"
            quality={100}
            key={`photo-1`}
            src={src}
            alt="descricao"
          />
        </S.WrapperImage>
        <S.WrapperInfo>
          <S.Title>{title}</S.Title>
          <S.WrapperSub>
            <S.Date>{date}</S.Date>
            <S.Tags>{tags}</S.Tags>
          </S.WrapperSub>
        </S.WrapperInfo>
      </S.Container>
    </Link>
  )
}
