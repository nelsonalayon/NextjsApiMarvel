import Image from "next/image";

export default function Card() {
  return (
    <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <Image src={""} alt={""} />
      <div className="p-4">
        <span className="font-semibold text-lg">Nombre del personaje</span>
        <div className="mt-2">
          <span className="text-gray-500">Descripción del personaje</span>
        </div>
      </div>
    </div>
  );
}
