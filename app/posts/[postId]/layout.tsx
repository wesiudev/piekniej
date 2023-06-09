import { Metadata } from "next";
// export const metadata: Metadata = {
//   title:
//     "Piękniej - Pasja Manicure. Zarezerwuj manicure online Anna Żebrowska Grudziądz",
//   description:
//     "Zadbaj o swoje paznokcie, manicure na imprezę urodzinową, święto lub sylwestra? Zarezerwuj manicure na piekniej.pl",
//   themeColor: "pink",
//   publisher: "wesiudev",
//   manifest: "/manifest.json",
//   icons: {
//     icon: "/favicon.png",
//   },
// };

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full min-h-screen bg-rose-300">{children}</div>;
}
