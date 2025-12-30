"use client";
import { useParams } from "next/navigation";
const page = () => {
  const router = useParams();
  return (
    <div>
      <h1>This is blog details page</h1>
      <p>Post: {router.slug}</p>
    </div>
  );
};

export default page;
