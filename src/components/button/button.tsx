

export default function Button ( { children }) {
  return (
    <button className="w-max bg-red-600 hover:bg-red-700 text-white py-3 px-6 text-lg font-semibold m-1">
      {children}
    </button>
  )
}