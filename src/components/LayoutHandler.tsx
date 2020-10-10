import Head from 'next/head'
import { Dispatch, SetStateAction, useState } from 'react'

import Navbar from '../components/Navbar'
import SectionHandler from '../components/SectionHandler'

import { Description, Keywords } from '../data/MetaTags'

type LayoutHandlerType = {
  title: string,
  children?: unknown,
  scrollToSection?: string,
  carouselCallback?: Dispatch<SetStateAction<string>>,
}

export default function LayoutHandler({
  title,
  children,
  scrollToSection,
  carouselCallback
}: LayoutHandlerType): JSX.Element {

  const [shouldUpdateNavbar, setShouldUpdateNavbar] = useState(false)

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name={'language'} content={'spanish'} />
        <meta httpEquiv={'content-type'} content={'text/html'} />
        <meta name={'author'} content={'Diego Rodríguez'} />
        <meta name={'no-email-collection'} content={'http://www.unspam.com/noemailcollection'} />

        <title>{title}</title>
        <meta name={'description'} content={Description} />
        <meta name={'keywords'} content={Keywords.join(',')} />
        <meta name={'robots'} content={'index,follow'} />
        <meta name={'distribution'} content={'web'} />

        <meta name={'web_author'} content={'Diego Rodríguez'} />
        <meta name={'copyright'} content={'Copyright 2020'} />

        <meta name={'format-detection'} content={'telephone=yes'} />
        <meta name={'HandheldFriendly'} content={'true'} />
        <meta name={'viewport'} content={'width=device-width, initial-scale=1.0'} />

        <meta name={'Content-Style-Type'} content={'text/css'} />
        <meta name={'Content-Script-Type'} content={'text/javascript'} />

        <link rel={'canonical'} href={'https://morewine.ar/'} />
      </Head>
      <Navbar shouldUpdate={shouldUpdateNavbar} />
      <SectionHandler section={scrollToSection} navbarCallback={setShouldUpdateNavbar} sectionCallback={carouselCallback}>
        {children}
      </SectionHandler>
    </>
  )
}