

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  // Add other properties as needed
}

interface CardProps {
  character: Character;
}

// const Card2: React.FC<CardProps> = ({ character }) => {
//   // Implement your Card component here
//   return <div>{character.name}</div>;
// };

const Card: React.FC<CardProps> = ({ character }) => {
  let img = `${character.thumbnail.path}.${character.thumbnail.extension}`; 
  let textUpperCase = character.name.toUpperCase();   
  return (
    <div className="w-52 h-72 shadow-lg rounded-lg m-4 flex flex-col justify-between" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover"   }}>
      <div></div>
      <div className="p-4 bg-slate-600 bg-opacity-80">
        <span className="font-bold text-lg text-white ">{textUpperCase}</span>
        <div className="mt-2 max-h-[70px] whitespace-nowrap overflow-hidden overflow-ellipsi ">          
          <span className="text-white ">{character.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
