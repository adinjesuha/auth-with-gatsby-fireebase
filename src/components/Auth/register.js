import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import { Alert, Button, Col, Row, Card } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { connect } from "react-redux"

import { signUp } from "../../store/actions/auth"
import Image from '../image'
import { MdFavorite } from "react-icons/md";
import Wrapper from './styles'

const Register = ({auth, authError, signUp}) =>  {
  const [user, setUser] = useState({
    username: null,
    email: null,
    password: null,
  })
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setUser({
      ...user, 
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = e => {
    signUp(user)
  }
  if (auth.uid) {
    navigate("/app/dashboard", { replace: true })
    return null
  }
  return (
    <React.Fragment>
      <Wrapper>
        <Card className="overflow-hidden account-card mx-3">
          <div className="bg-primary p-4 text-white text-center position-relative">
            <h4 className="font-20">Free Register</h4>
            <p className="text-white-50 mb-4">Get your free account now.</p>
            <Link to="/" className="logo-admin">
              <Image imgName="gatsby-icon.png" />
            </Link>
          </div>
          <div className="account-card__content">
            {authError && <Alert color="danger">{authError}</Alert>}
            <AvForm className="form-horizontal" onSubmit={handleSubmit}>
              <AvField 
                name="username" 
                label="Username" 
                placeholder="Enter Username" 
                type="text" 
                value={user.username} 
                onChange={handleChange}
                required 
              />
              <AvField 
                name="email" 
                label="Email" 
                placeholder="Enter Email" 
                type="text" 
                value={user.email} 
                onChange={handleChange}
                required 
              />
              <AvField 
                name="password" 
                label="Password" 
                placeholder="Enter Password" 
                type="password" 
                value={user.password} 
                onChange={handleChange}
                required 
              />

              <Row className="form-group">
                <Col md="12" className="text-right">
                  {loading ? <Button color="primary" className="w-md waves-effect waves-light">Loading ...</Button> :
                  <Button color="primary" className="w-md waves-effect waves-light" type="submit">Register</Button>}
                </Col>
              </Row>

              <Row className="form-group mt-2 mb-0">
                <Col md="12" className="mt-2">
                  <p className="mb-0">By registering you agree to the <Link to="#" className="text-primary">Terms of Use</Link></p>
                </Col>
              </Row>

            </AvForm>
          </div>
        </Card>
        <div className="mt-4 text-center">
          <p>Already have an account ? <Link to="/" className="font-500 text-primary">Login</Link></p>
          <p>© {new Date().getFullYear()} Crafted with <MdFavorite className="text-danger"/> by AdinJesuha</p>
        </div>
      </Wrapper>
    </React.Fragment>
  );
}


const mapStateToProps = state => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser)),
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Register);



