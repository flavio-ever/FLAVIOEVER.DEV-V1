import React from 'react'
import { styled, theme } from 'twin.macro'

// Components
import Navbar from 'components/Navbar'
import SmallCard from 'components/SmallCard'
import Me from 'components/Me'

const AppleBar = styled.div(() => [
  `width: 100vw; height: 100px; position: fixed; z-index: 99; top: -100px; background: #1B1C1F;`
])

export type PostTemplateProps = {
  posts: {
    title: string
    slug: string
    src: string
    prevDescription: {
      html: string
      text: string
    }
  }[]
}

export default function BlogTemplate({ posts }: PostTemplateProps) {
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
            <div tw="flex text-7xl text-carmesim-50">
              <p tw="font-Montserrat">{`{`}</p>
            </div>
            <div tw="flex sm:justify-between items-center justify-center flex-col-reverse sm:flex-row py-10">
              <div tw="flex flex-col text-center sm:text-left space-y-4 md:mr-6">
                <h1 tw="text-carmesim-50 text-5xl">{`<Blog/>`}</h1>
                <p tw="px-4 sm:px-0">Postagens bem bacanas</p>
              </div>
              <div tw="mb-5">
                <Me
                  width={211}
                  height={211}
                  color={theme`colors.carmesim.50`}
                  img="/img/blog-eu.png"
                />
              </div>
            </div>
            <div tw="flex text-7xl text-carmesim-50">
              <p tw="font-Montserrat">{`}`}</p>
            </div>
          </div>

          {/* Posts */}
          <div tw="p-5 mt-20 flex items-center ">
            <div tw="flex flex-col space-y-5 flex-1">
              <h1 tw="text-2xl">Postagens recentes</h1>
              <div tw="flex flex-col">
                {posts.map((post, index: number) => (
                  <SmallCard
                    key={`post-${index}`}
                    src={post.src}
                    link={`blog/${post.slug}`}
                    hover={theme`colors.carmesim.50`}
                    title={post.title}
                    description={post.prevDescription.html}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
