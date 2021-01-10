import React from "react";

type Props = {
  name: string;
  apellido: string;
  edad?: number;
};

export default function Tarjeta({ name, apellido, edad }: Props) {
  return (
    <div>
      <br />
      <p>Mi nombre es: {name}</p>
      <p>Mi apellido es: {apellido}</p>
      {edad && <p>mi edad es: {edad}</p>}
    </div>
  );
}
