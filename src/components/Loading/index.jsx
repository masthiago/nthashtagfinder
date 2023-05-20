import React from 'react'
import loading from '../../assets/img/loading.gif'
import { Wrapper } from '../Login/styled'

export default function Loading() {
  return (
     <Wrapper>
        <img src={loading} alt="Carregando..." />
     </Wrapper>   
    )
}
