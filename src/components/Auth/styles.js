import React from 'react'
import styled from 'styled-components'

const El = styled.div`
  margin: 5.5% auto;
  max-width: 492px;
  position: relative;
  .account-card{
    border: none;
    box-shadow: 0 0 13px 0 rgba(236,236,241,.44);
    margin-bottom: 30px;
    &__content{
      padding: 40px;
    }
  }
  .logo-admin {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -40px;
    margin: 0 auto;
    padding: 4px;
    width: 74px;
    height: 74px;
    line-height: 74px;
    background: #fff;
    border-radius: 50%;
  }
  svg{
    margin-bottom: 4px;
  }
`

const Wrapper = ({children}) => <El>{children}</El>

export default Wrapper