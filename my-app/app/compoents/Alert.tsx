"use client"; 
export default function Alert() {
  function getValue() {
    console.log("Value");
    
    const value = parseInt(window.prompt("Enter Value") || "0");


    if (value % 2 === 0) {
      alert("Even Number");
    } else {
      alert("Odd Number");
    }

    return value;
  }

  const onClickHandler = () => {
    console.log("OnClick Handler");
    alert("OnClick Handler");
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <button 
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        onClick={onClickHandler}
      >
        OnClick Handler
      </button>

      <button 
        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
        onClick={getValue}
      >
        Get Value
      </button>
    </div>
  );
}
