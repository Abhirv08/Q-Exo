import DisplayBox from "./components/DisplayBox"
import { useState } from 'react';
import { useCSVData } from "./hooks/useCSVData"
import { useDistinctColumnData } from "./hooks/useDistinctColumnData";

function App() {
  const csvData = useCSVData();
  const { distinctColumnData } = useDistinctColumnData(csvData);
  const [popUpMessage, setPopUpMessage] = useState("")

  return (
    <div className="bg-[url('/bg-picture.webp')] relative h-[100vh] px-10 py-5 flex flex-col justify-center items-center gap-5">
      <div className={`${popUpMessage.length > 0 ? "block" : "hidden"} absolute top-[30px] bg-red-500 py-1 px-6 rounded-md text-white text-center pop-up`}>{popUpMessage}</div>
      <h1 className="text-white text-5xl font-semibold">Q-Exo</h1>
      <DisplayBox csvData={csvData} distinctColumnData={distinctColumnData} setPopUpMessage={setPopUpMessage} />
    </div >
  )
}

export default App
