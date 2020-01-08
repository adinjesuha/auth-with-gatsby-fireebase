import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Alert, Button, Col, Row, Card } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { connect } from "react-redux"

import { resetPassword } from '../../store/actions/auth'
import Image from '../image'
import { MdFavorite } from "react-icons/md";
import Wrapper from './styles'

const ResetPassword = ({authError, resetMessage, resetPassword}) => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setEmail([e.target.name] = e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    resetPassword(email)
  }
  return (
    <Wrapper>
      <Card className="overflow-hidden account-card mx-3">
        <div className="bg-primary p-4 text-white text-center position-relative">
          <h4 className="font-20 mb-4">Forget password ?</h4>
          <Link to="/" className="logo-admin">
            <Image imgName="gatsby-icon.png" />
          </Link>
        </div>
        <div className="account-card__content mt-4">
          {authError && <Alert color="danger">{authError}</Alert>}
          {resetMessage && <Alert color="success">{resetMessage}</Alert>}
          <AvForm className="form-horizontal m-t-30" onSubmit={handleSubmit} >
            <AvField 
              name="email" 
              label="Email" 
              placeholder="Enter Email" 
              type="email" 
              value={email}
              onChange={handleChange}
              required
            />
            <Row className="form-group m-t-20 mb-0">
              <Col md="12" className="text-right">
                {loading ? <Button color="primary" className="w-md waves-effect waves-light">Loading ...</Button> :
                <Button color="primary" className="w-md waves-effect waves-light" type="submit">Reset</Button>}
              </Col>
            </Row>
          </AvForm>
        </div>
      </Card>
      <div className="m-t-40 text-center">
        <p>Remember It ? <Link to="/" className="font-500 text-primary"> Sign In here </Link> </p>
        <p>© {new Date().getFullYear()} Crafted with <MdFavorite className="text-danger"/> by AdinJesuha</p>
      </div>
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    resetMessage: state.auth.resetMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetPassword: email => dispatch(resetPassword(email))
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ResetPassword)