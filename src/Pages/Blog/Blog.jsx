const Blog = () => {
  return (
    <div className="mt-24 w-full lg:w-5/6 mx-auto">
      <div id="blog-container">
        <div className="border border-cyan-200 rounded-xl shadow-lg mb-4 p-12">
          <h2 className="py-6 text-2xl">
            <span className="text-cyan-600 font-bold">Question :</span>
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p>
            <span className="text-cyan-600 font-bold">Answer :</span>
            Access tokens and refresh tokens are credentials used in
            authentication systems. An access token is obtained after successful
            authentication and is used to authorize API requests. It has a
            limited lifespan and is stored on the client-side temporarily. A
            refresh token is a long-lived credential used to obtain new access
            tokens when the current one expires. It is securely stored on the
            client-side and allows the client to request new access tokens
            without reauthentication. Both tokens should be stored securely to
            prevent unauthorized access.
          </p>
        </div>
        <div className=" border-cyan-200 rounded-xl shadow-lg mb-4 p-12">
          <h2 className="py-6 text-2xl">
            <span className="text-cyan-600 font-bold">Question :</span>Compare
            SQL and NoSQL databases?
          </h2>
          <p>
            {" "}
            <span className="text-cyan-600 font-bold">Answer : </span>
            SQL databases are relational databases that use tables and a fixed
            schema to store structured data. They ensure data integrity through
            ACID properties and are suitable for complex relationships between
            entities. <br />
            NoSQL databases are non-relational databases that provide
            flexibility in data storage and retrieval. They can handle
            unstructured and semi-structured data, have a flexible schema, and
            prioritize scalability and performance over strict data consistency.{" "}
            <br />
            The choice between SQL and NoSQL databases depends on factors like
            data structure, scalability needs, and performance requirements.
          </p>
        </div>
        <div className="border border-cyan-200 rounded-xl shadow-lg mb-4 p-12">
          <h2 className="py-6 text-2xl">
            <span className="text-cyan-600 font-bold">Question :</span>What is
            express js? What is Nest JS ?
          </h2>
          <p>
            <span className="text-cyan-600 font-bold">Answer : </span>
            Express.js is a minimal and flexible web application framework for
            Node.js. It provides a set of features and tools to build web
            applications and APIs quickly and easily. Express.js is known for
            its simplicity, lightweight nature, and extensive middleware
            support, allowing developers to create robust server-side
            applications. <br />
            Nest.js is a progressive Node.js framework for building efficient,
            scalable, and maintainable server-side applications. It is built
            with TypeScript and heavily inspired by Angular, sharing similar
            concepts and features such as dependency injection, decorators, and
            module-based architecture. Nest.js provides a structured and
            opinionated approach to application development, making it suitable
            for building complex enterprise-grade applications. It also offers
            built-in support for key features like routing, authentication, and
            database integration.
          </p>
        </div>
        <div className="border border-cyan-200 rounded-xl shadow-lg mb-4 p-12">
          <h2 className="py-6 text-2xl">
            <span className="text-cyan-600 font-bold">Question :</span>What is
            MongoDB aggregate and how does it work?
          </h2>
          <p>
            {" "}
            <span className="text-cyan-600 font-bold">Answer : </span>
            MongoDBs aggregate is a powerful framework for data aggregation and
            analysis. It allows you to perform advanced operations on your data,
            such as filtering, grouping, sorting, and computing aggregate
            values.
            <br />
            The aggregate framework in MongoDB works by chaining together
            multiple stages to process and transform the data. Each stage
            performs a specific operation on the input documents and passes the
            results to the next stage. Some commonly used stages include $match
            for filtering documents, $group for grouping and aggregating data,
            $sort for sorting documents, and $project for shaping the output.{" "}
            <br />
            By combining these stages in a pipeline, you can perform complex
            aggregations and calculations on your data. The aggregate framework
            is particularly useful for generating reports, performing analytics,
            and extracting meaningful insights from your MongoDB collections.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
