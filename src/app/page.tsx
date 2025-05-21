import { mainMetadata } from '@/utils/seo/metadata'

import Main from './_home/Main'

export const metadata = mainMetadata()

export default function Home() {
  return (
    <>
      <Main />
    </>
  )
}
