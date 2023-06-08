import { FaqItem, IFaqItem } from "./faqItem";

export default async function Faq() {
  const { faq } = await getData();
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-rose-300 to-white flex flex-col items-center gap-y-3">
        <h1 className="font-sans italic text-2xl text-white py-3">
          Często zadawane pytania
        </h1>
        <div className="h-1 w-12  rounded-full mx-auto mb-12 bg-rose-600"></div>
        {faq.map((item: IFaqItem, idx: number) => (
          <FaqItem
            key={idx}
            question={item.question}
            answer={item.answer}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
}

async function getData() {
  const req = await fetch(
    "https://main--grand-pothos-cf1bca.netlify.app/api/faq"
  );
  // Recommendation: handle errors
  if (!req.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const faq = req.json();
  return faq;
}
