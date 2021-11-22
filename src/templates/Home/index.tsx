import React from 'react'
import { styled, theme } from 'twin.macro'

// Components
import Navbar from 'components/Navbar'
import Me from 'components/Me'
import BigCard from 'components/BigCard'
import SmallCard from 'components/SmallCard'

const AppleBar = styled.div(() => [
  `width: 100vw; height: 100px; position: fixed; z-index: 99; top: -100px; background: #1B1C1F;`
])

export default function HomeTemplate() {
  return (
    <>
      {/* Fix Notch Apple */}
      <AppleBar />
      <div tw="min-w-full bg-dark-100">
        <div tw="font-Heebo text-dark-300 max-w-screen-xl m-auto ">
          {/* Navbar */}
          <Navbar />

          {/* About */}
          <div tw="flex flex-col p-5 pt-32">
            <div tw="flex text-7xl text-purple-50">
              <p tw="font-Montserrat">{`{`}</p>
            </div>
            <div tw="flex sm:justify-between items-center justify-center flex-col-reverse sm:flex-row py-10">
              <div tw="flex flex-col text-center sm:text-left space-y-4 md:mr-6">
                <h1 tw="text-purple-50 text-5xl">{`<OlaMundo/>`}</h1>
                <p tw="px-4 sm:px-0">
                  Bem vindo(a) ao meu Portfólio/Blog. Nodezeiro 🚀 do {`<`}Head{' '}
                  {`/>`} ao {`<`}Footer {`/>`} e Player 🎮 nas horas vagas :P
                </p>
              </div>
              <div tw="mb-5">
                <Me
                  color={theme`colors.purple.50`}
                  img="/img/ola-mundo-eu.png"
                />
              </div>
            </div>
            <div tw="flex text-7xl text-purple-50">
              <p tw="font-Montserrat">{`}`}</p>
            </div>
          </div>

          {/* Posts */}
          <div tw="p-5 mt-20 space-y-5 ">
            <h1 tw="text-2xl">Postagens recentes</h1>
            <div tw="grid md:grid-cols-3 gap-6">
              <BigCard
                src="https://blog-geek-midia.s3.amazonaws.com/wp-content/uploads/2020/10/28181026/javascript-standard-style.jpg"
                link="#"
                title="Arrow functions, pra que servem? Como se alimentam?"
                date="22/10/2021"
                tags="Javascript, Pattern"
              />
              <BigCard
                src="https://blog-geek-midia.s3.amazonaws.com/wp-content/uploads/2020/10/28181026/javascript-standard-style.jpg"
                link="#"
                title="Arrow functions, pra que servem? Como se alimentam?"
                date="22/10/2021"
                tags="Javascript, Pattern"
              />
              <BigCard
                src="https://blog-geek-midia.s3.amazonaws.com/wp-content/uploads/2020/10/28181026/javascript-standard-style.jpg"
                link="#"
                title="Arrow functions, pra que servem? Como se alimentam?"
                date="22/10/2021"
                tags="Javascript, Pattern"
              />
            </div>
          </div>

          {/* Projects */}
          <div tw="p-5 mt-20 flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between ">
            <div tw="flex mb-10 lg:mr-32">
              <Me
                color={theme`colors.yellow.50`}
                img="/img/projetinhos-eu.png"
              />
            </div>
            <div tw="flex flex-col space-y-5 flex-1">
              <h1 tw="text-2xl">Projetinhos em destaque</h1>
              <div tw="flex flex-col">
                <SmallCard
                  src="https://media.sketchfab.com/models/2421eadea6164f19b22451e5abf0578d/thumbnails/fd95d8c5ab134b7caaba6cbc7f53744a/9954fbdeffff46e087b5e78c1c86fcd0.jpeg"
                  link="#"
                  hover={theme`colors.yellow.50`}
                  title="Arrow functions, pra que servem? Como se alimentam?"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero
                  natus blanditiis sint nam neque atque architecto quis illo dolorem
                  officia nulla aliquid corporis."
                />
                <SmallCard
                  src="https://media.sketchfab.com/models/2421eadea6164f19b22451e5abf0578d/thumbnails/fd95d8c5ab134b7caaba6cbc7f53744a/9954fbdeffff46e087b5e78c1c86fcd0.jpeg"
                  link="#"
                  hover={theme`colors.yellow.50`}
                  title="Arrow functions, pra que servem? Como se alimentam?"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero
                  natus blanditiis sint nam neque atque architecto quis illo dolorem
                  officia nulla aliquid corporis."
                />
                <SmallCard
                  src="https://media.sketchfab.com/models/2421eadea6164f19b22451e5abf0578d/thumbnails/fd95d8c5ab134b7caaba6cbc7f53744a/9954fbdeffff46e087b5e78c1c86fcd0.jpeg"
                  link="#"
                  hover={theme`colors.yellow.50`}
                  title="Arrow functions, pra que servem? Como se alimentam?"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero
                  natus blanditiis sint nam neque atque architecto quis illo dolorem
                  officia nulla aliquid corporis."
                />
                <SmallCard
                  src="https://media.sketchfab.com/models/2421eadea6164f19b22451e5abf0578d/thumbnails/fd95d8c5ab134b7caaba6cbc7f53744a/9954fbdeffff46e087b5e78c1c86fcd0.jpeg"
                  link="#"
                  hover={theme`colors.yellow.50`}
                  title="Arrow functions, pra que servem? Como se alimentam?"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero
                  natus blanditiis sint nam neque atque architecto quis illo dolorem
                  officia nulla aliquid corporis."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
