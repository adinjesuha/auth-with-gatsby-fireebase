import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Alert, Button, Col, Row, Card } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import Image from '../image'
import { MdFavorite, MdHttps } from "react-icons/md";
import Wrapper from './styles'

const Login = () =>  {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState(null)

  const handleChange = e => {
    setUser({
      ...user, 
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    console.log(user);
  }
  return (
    <Wrapper>
      <Card className="overflow-hidden account-card mx-3">
        <div className="bg-primary p-4 text-white text-center position-relative">
          <h4 className="font-20">Welcome Back !</h4>
          <p className="text-white-50 mb-4">Sign in to continue.</p>
          <Link to="/" className="logo-admin">
            <Image imgName="gatsby-icon.png" />
          </Link>
        </div>
        <div className="account-card__content">
          {user.email && user.password && <Alert color="success">Your Login is successfull.</Alert>}
          {error && <Alert color="danger">{error}</Alert>}
          <AvForm className="form-horizontal m-t-30" onSubmit={handleSubmit} >
            <AvField 
              name="email" 
              label="Email" 
              placeholder="Enter Email" 
              type="email" 
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
            <Row className="form-group m-t-20">
              <Col sm="6"></Col>
              <Col sm="6" className="text-right">
                <Button 
                  className="btn-primary waves-effect waves-light" 
                  type="submit"
                >
                  Log In
                </Button>
              </Col>
            </Row>
            <Row className="form-group m-t-10 mb-0">
              <Col md="12" className="m-t-20">
                <Link to="/forget-password"> <MdHttps /> Forgot your password?</Link>
              </Col>
            </Row>
          </AvForm>
        </div>
      </Card>
      <div className="mt-4 text-center">
        <p>Don't have an account ? <Link to="/register" className="font-500 text-primary"> Signup now </Link></p>
        <p>© {new Date().getFullYear()} Crafted with <MdFavorite className="text-danger"/> by AdinJesuha</p>
      </div>
    </Wrapper>
  )
}

export default Login;



