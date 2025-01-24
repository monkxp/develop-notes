import useQueryStates from "./useQueryStates";

export default function SwitchWithUrlState({
  colors,
  sizes,
}: {
  colors: string[];
  sizes: string[];
}) {
  const [selectedColor, setSelectedColor] = useQueryStates("color");
  const [selectedSize, setSelectedSize] = useQueryStates("size");
  return (
    <div className="flex flex-row justify-start items-top h-auto m-8">
      <div>
        <img src="/image1.webp" alt="image1" width={200} height={200} />
      </div>
      <div className="flex flex-col gap-4 justify-start px-8">
        <h2>Color</h2>
        <div>
          {colors.map((value, index) => {
            return (
              <button
                key={index}
                className={`px-2 py-1 rounded-md mx-2 border-2 cursor-pointer ${
                  selectedColor == value
                    ? "border-blue-500 bg-gray-200"
                    : "border-gray-600"
                }`}
                onClick={() => setSelectedColor(value)}
              >
                {value}
              </button>
            );
          })}
        </div>
        <h2>Size</h2>
        <div>
          {sizes.map((value, index) => {
            return (
              <button
                key={index}
                className={`px-2 py-1 rounded-md mx-2 border-2 cursor-pointer ${
                  selectedSize == value
                    ? "border-blue-500 bg-gray-200"
                    : "border-gray-600"
                }`}
                onClick={() => setSelectedSize(value)}
              >
                {value.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
