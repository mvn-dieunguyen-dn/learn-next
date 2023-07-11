import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "React",
  },
  {
    id: 2,
    title: "Vue",
  },
  {
    id: 3,
    title: "Angular",
  },
];
const PostHome = () => {
  return (
    <>
      <p>PostHome page</p>
      <button>
        <Link href="/posts/create">Create post</Link>
      </button>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`posts/${post.id}?title=${post.title}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default PostHome;
