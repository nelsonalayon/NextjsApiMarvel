import Button from "../button/button";
import Link from "next/link";
import "./intro.css";

export default function Intro() {
  return (
    <div className="padre">
      <div className="background hijo1">  
      </div>
      <div className=" grow hijo2" >
        <h1>CHARACTERS</h1>
        <Button> <Link href={"/characters"}> INGRESAR</Link> </Button>
        <Button>REGISTRO</Button>
      </div>
    </div>
  );
}
