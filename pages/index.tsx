import { useState, useRef } from "react";
import Avatar from "../components/avatar";
import Button from "../components/button";
import UploadImage from "../components/uploadImage";

export default function Home() {
  const [image, setImage] = useState<any>("");
  const referenceInput = useRef(null);
  return (
    <>
      <h1>Ola Mundo</h1>
      <Avatar />
      <div style={{ width: "200px" }}>
        <UploadImage
        setImage={setImage}
        imagePreview={image?.preview}
        setRef={(ref:any)=>referenceInput.current = ref}
        />
        <Button
          type="submit"
          text="submit"
          color="primary"
          onClick={() => console.log("botao clicado.")}
          isDisabled={true}
        />
      </div>
    </>
  );
}
