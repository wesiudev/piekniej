"use client";
export default function Error(error, reset) {
  return (
    <div className="font-sans flex flex-col items-center gap-5 py-5">
      <h1 className="text-2xl">Coś poszło nie tak...</h1>
      <button
        className="px-5 py-2 bg-blue-700 rounded-md"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
