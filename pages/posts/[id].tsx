import { useRouter } from "next/router";
import { useEffect, memo, useState } from "react";

const PostId = () => {
  const [data, setData] = useState<any[]>();
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const { id, title } = router.query;

  useEffect(() => {
    console.log(111);

    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (data) console.log(333);
  console.log(222);

  if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No profile data</p>;

  return (
    <div>
      <h3>
        PostId: {id} - {title}
      </h3>
      <ul>{data && data.map((item, idx) => <li key={idx}>{item.name}</li>)}</ul>
      <a onClick={() => router.push("/about")}>Read more about us</a>
    </div>
  );
};

export default memo(PostId);
