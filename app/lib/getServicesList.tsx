"use server";
export async function getServicesList() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/services`);

  const services = req.json();
  return services;
}
