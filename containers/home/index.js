import React from 'react'
import Movies from '@/mocks/movies.json'
import FeatureMovie from '@/components/featured-movie'

function HomeContainer() {
  return (
    <div>
        <FeatureMovie movie={Movies} />
    </div>
  )
}

export default HomeContainer;