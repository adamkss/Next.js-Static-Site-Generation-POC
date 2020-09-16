import Head from "next/head";
import axios from "axios";

const URL_TO_BLOG_POSTS = "http://localhost:3001/posts";

export default function Home({ posts = [] }) {
  return (
    <div className="container">
      <Head>
        <title>My Awesome Static Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <span className="heading">
          This is my <strong>Awesome Blog!</strong> (statically pre-rendered)
        </span>
        <div className="posts">
          {posts.map((post) => (
            <article className="blog-post" key={post.id}>
              <span className="post__title">{post.title}</span>
              <span className="post__content">{post.content}</span>
            </article>
          ))}
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .heading {
          font-size: 2rem;
        }

        .posts {
          display: flex;
          padding: 3em;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .blog-post {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2.4em;
          box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.23);
          border-radius: 10px;
          margin: 1em;
        }

        .post__title {
          font-size: 1.35rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .post__content {
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const { data: posts } = await axios.get(URL_TO_BLOG_POSTS);
  return {
    props: {
      posts,
    },
  };
}
