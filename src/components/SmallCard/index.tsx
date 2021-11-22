import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

type CardBlog = {
  src: string
  link: string
  title: string
  description: string
  hover: string
}

export default function SmallCard({
  src,
  link,
  title,
  description,
  hover
}: CardBlog) {
  return (
    <Link href={link}>
      <S.Container hover={hover}>
        <S.WrapperImage>
          <Image
            layout="responsive"
            height={100}
            width={100}
            objectFit="cover"
            quality={100}
            src={src}
            key={title}
            alt={title}
          />
        </S.WrapperImage>
        <S.WrapperInfo>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.WrapperInfo>
      </S.Container>
    </Link>
  )
}
