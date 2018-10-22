import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a page that doesn&#39;t exist. Head to the <Link to="/">Home Page</Link>?</p>

  </Layout>
)

export default NotFoundPage
