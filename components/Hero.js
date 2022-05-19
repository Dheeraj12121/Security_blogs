import React from 'react'

const Hero = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">
        OAuth 2.0 authentication vulnerabilities
      </h1>
      <p>
        While browsing the web, you've almost certainly come across sites that
        let you log in using your social media account. The chances are that
        this feature is built using the popular OAuth 2.0 framework. OAuth 2.0
        is highly interesting for attackers because it is both extremely common
        and inherently prone to implementation mistakes. This can result in a
        number of vulnerabilities, allowing attackers to obtain sensitive user
        data and potentially bypass authentication completely. In this section,
        we'll teach you how to identify and exploit some of the key
        vulnerabilities found in OAuth 2.0 authentication mechanisms. Don't
        worry if you're not too familiar with OAuth authentication - we've
        provided plenty of background information to help you understand the key
        concepts you'll need. We'll also explore some vulnerabilities in OAuth's
        OpenID Connect extension. Finally, we've included some guidance on how
        to protect your own applications against these kinds of attacks.
      </p>
      <br />
      <h1 className="text-2xl font-bold">What is OAuth?</h1>
      <p>
        OAuth is a commonly used authorization framework that enables websites
        and web applications to request limited access to a user's account on
        another application. Crucially, OAuth allows the user to grant this
        access without exposing their login credentials to the requesting
        application. This means users can fine-tune which data they want to
        share rather than having to hand over full control of their account to a
        third party. The basic OAuth process is widely used to integrate
        third-party functionality that requires access to certain data from a
        user's account. For example, an application might use OAuth to request
        access to your email contacts list so that it can suggest people to
        connect with. However, the same mechanism is also used to provide
        third-party authentication services, allowing users to log in with an
        account that they have with a different website.
      </p>

      <br />

      <h1 className="text-2xl font-bold">How does OAuth 2.0 work?</h1>
      <p>
        OAuth 2.0 was originally developed as a way of sharing access to
        specific data between applications. It works by defining a series of
        interactions between three distinct parties, namely a client
        application, a resource owner, and the OAuth service provider.
        <br />
        <br />
        <li>
          {' '}
          <span>Client application </span>- The website or web application that
          wants to access the user's data.
        </li>
        <li>
          {' '}
          <span>Resource owner</span> - The user whose data the client
          application wants to access.
        </li>
        <li>
          <span>OAuth service provider</span> - The website or application that
          controls the user's data and access to it. They support OAuth by
          providing an API for interacting with both an authorization server and
          a resource server.
        </li>
        <br />
        There are numerous different ways that the actual OAuth process can be
        implemented. These are known as OAuth "flows" or "grant types". In this
        topic, we'll focus on the "authorization code" and "implicit" grant
        types as these are by far the most common. Broadly speaking, both of
        these grant types involve the following stages:
        <br />
        The client application requests access to a subset of the user's data,
        specifying which grant type they want to use and what kind of access
        they want. The user is prompted to log in to the OAuth service and
        explicitly give their consent for the requested access. The client
        application receives a unique access token that proves they have
        permission from the user to access the requested data. Exactly how this
        happens varies significantly depending on the grant type. The client
        application uses this access token to make API calls fetching the
        relevant data from the resource server.
        <br />
        Before learning how OAuth is used for authentication, it's important to
        understand the fundamentals of this basic OAuth process. If you're
        completely new to OAuth, we recommend familiarizing yourself with the
        details of both of the grant types we're going to cover before reading
        further.
      </p>
      <h1>OAuth authentication</h1>
      <p>
        Although not originally intended for this purpose, OAuth has evolved
        into a means of authenticating users as well. For example, you're
        probably familiar with the option many websites provide to log in using
        your existing social media account rather than having to register with
        the website in question. Whenever you see this option, there's a good
        chance it is built on OAuth 2.0.
        <br />
        <br />
        For OAuth authentication mechanisms, the basic OAuth flows remain
        largely the same; the main difference is how the client application uses
        the data that it receives. From an end-user perspective, the result of
        OAuth authentication is something that broadly resembles SAML-based
        single sign-on (SSO). In these materials, we'll focus exclusively on
        vulnerabilities in this SSO-like use case.
      </p>
    </div>
  )
}

export default Hero
