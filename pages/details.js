import React from 'react'
import Layout from '../src/common/layout/Layout'
import Details from '../src/components/elements/Details'
import ImageDetail from '../src/components/elements/ImageDetail'
import MoreProducts from '../src/components/elements/MoreProducts'

const details = () => {
  return (
    <Layout>
        <div className='my-10'>
            <Details/>
        </div>
        <div>
            <ImageDetail/>
        </div>
        <div>
            <MoreProducts/>
        </div>
    </Layout>
  )
}

export default details