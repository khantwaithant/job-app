const jobLoader = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export default jobLoader;
