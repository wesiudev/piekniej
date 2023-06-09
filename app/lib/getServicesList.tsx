export async function getServicesList() {
  "use server";
  const req = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/data`);

  const services = req.json();
  return services;
}
