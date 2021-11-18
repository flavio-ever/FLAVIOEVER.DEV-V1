import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

type CardBlog = {
  src: string
  link: string
  title: string
}

export default function BigCard({ src, link, title }: CardBlog) {
  return (
    <Link href={link}>
      <S.Container>
        <S.WrapperImage>
          <Image
            layout="responsive"
            height={100}
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
          <S.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero
            natus blanditiis sint nam neque atque architecto quis illo dolorem
            officia nulla aliquid corporis.
          </S.Description>
        </S.WrapperInfo>
      </S.Container>
    </Link>
  )
}
