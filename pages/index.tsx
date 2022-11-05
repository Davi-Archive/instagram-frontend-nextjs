import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/avatar";
import Button from "../components/button";

export default function Home() {
  return (
    <>
      <h1>Ola Mundo</h1>
      <Avatar />
      <div style={{width:'200px'}}>
        <Button
          type="submit"
          text="submit"
          color='primary'
          onClick={() => console.log("botao clicado.")}
          isDisabled={true}
        />
      </div>
    </>
  );
}
