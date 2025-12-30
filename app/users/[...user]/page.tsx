"use client";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  return (
    <div>
      <h1>This is one user page {params.user}</h1>
    </div>
  );
};

export default page;
