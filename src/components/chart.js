import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'

export default (props) => {
  return(
    //humidity
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  )
}
