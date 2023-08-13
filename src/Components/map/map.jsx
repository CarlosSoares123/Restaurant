import * as M from './map'
import * as GS from '../../globalStyle'

import map from '/map.svg'

export const Map = () => {
  return (
    <M.mapContainer>
      
      <GS.titles>
      <h1 className='title'>Map</h1>
      <h2 className='subtitle'>Food Map with more than 9000 Restaurants</h2>
      </GS.titles>

      <M.figure>
        <img src={map} alt="" />
      </M.figure>

    </M.mapContainer>
  )
}
