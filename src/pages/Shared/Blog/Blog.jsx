/* eslint-disable no-unused-vars */
import React from "react";

const Blog = () => (
  <div>
    <h2>
      What is an access token and refresh token? How do they work and where
      should we store them on the client-side?
    </h2>
    <p>
      access token is an authorization token issued with jwt standard from
      server to user to authorize his access to protected component.Acess token
      has short time expire date.
      <br />
      refresh token is used to refresh or again validate the access token.Using
      refesh token user can renew his access token again but when refesh token
      expire he must login again
      <br />
      we should we store them on http only cookies or localstorage while
      broowser cookie is more safer to store token
    </p>
    <h2>Compare SQL and NoSQL databases? </h2>
    <p>
      We know that sql is structure query language database which use to
      maintain relational database.Example;mysql,postgreSQL. It maintain row
      column format to store data which is predefined schema where Mongodb has
      dynamic schema . Sql has some cool properties like
      atomocity,consistency,isolation,duralibility
      <br />
      NoSql database is no relational database example:Mongodb.It schema are
      dynamic.It has property like consistency, availability, partition
      tolerance.
    </p>
    <h2>What is express js? What is Nest JS ?</h2>
    <p>
      Express js is a framework is build node js based application.It has
      simplest api which easy to use and it also offer built in middleware to
      integrate mongodb
      <br />
      Nextjs used on express js to add additional benefit like dependency
      injection, typescript support.
    </p>
    <h2>What is MongoDB aggregate and how does it work ?</h2>
    <p>
      We know that aggregation is a technque to process large volume of data
      with complex query to find a output.
      <br />
      In mongodb to aggrege, MongoDB aggregation pipeline is used which is a
      powerful feature.It work in multiple stages like $match, $group, $sort,
      $project, $lookup, $unwind, whicle each stage has specific operation
      method to perform task.It also provide function like $sum, $avg,$min,$max
      for calculation.
    </p>
  </div>
);

export default Blog;
