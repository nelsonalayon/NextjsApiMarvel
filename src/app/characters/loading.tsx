export default function Loading() {
  return (
    <div className="flex flex-wrap justify-between">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="w-56 h-80 m-2 bg-gray-400 rounded-lg"></div>
        </div>
      ))}
    </div>
  );
}
