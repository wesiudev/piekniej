export default function DriveToClient({
  setDriveToClient,
  driveToTheClient,
}: {
  setDriveToClient: Function;
  driveToTheClient: string;
}) {
  return (
    <div className="flex flex-col ">
      <h1 className="text-3xl my-3">Dojazd:</h1>
      <div className="flex flex-row space-x-3">
        <button
          onClick={() => setDriveToClient("tak")}
          className={`bg-rose-400 p-3 px-6 rounded-lg font-bold border-2 hover:border-white ${
            driveToTheClient === "tak" ? "border-white" : "border-rose-400"
          }`}
        >
          Tak
        </button>
        <button
          onClick={() => setDriveToClient("nie")}
          className={`bg-rose-400 p-3 px-6 rounded-lg font-bold border-2 hover:border-white ${
            driveToTheClient === "nie" ? "border-white" : "border-rose-400"
          }`}
        >
          Nie
        </button>
      </div>
    </div>
  );
}
