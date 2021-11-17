import React from 'react'
import Link from 'next/link'
import 'twin.macro'

import { useState } from 'react'
import { GiHamburger } from 'react-icons/gi'
import { IoClose, IoMailOutline } from 'react-icons/io5'

import * as S from './styles'

export default function Navbar() {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <div tw="fixed left-0 top-0 right-0 bg-dark-50 z-50">
        <nav tw="w-full px-4 top-0 py-7 flex justify-between text-lg max-w-screen-xl m-auto">
          <div tw="flex space-x-6 items-center">
            <IoMailOutline tw="fill-current text-dark-400 w-6 h-6" />
            <p>me@flavioever.dev</p>
          </div>
          <GiHamburger
            tw="fill-current text-dark-400 cursor-pointer sm:hidden w-6 h-6"
            onClick={() => setVisible(!visible)}
          />
          <S.List visible={!visible}>
            <S.Item>
              <Link href="#">Blog</Link>
              <Link href="#">Sobre</Link>
            </S.Item>
            <IoClose
              tw="fill-current text-dark-400 cursor-pointer sm:hidden absolute top-0 right-3 w-8 h-8"
              onClick={() => setVisible(!visible)}
            />
          </S.List>
        </nav>
      </div>
    </>
  )
}
