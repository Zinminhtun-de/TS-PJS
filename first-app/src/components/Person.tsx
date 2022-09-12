import { ChangeEvent, FC, useState } from "react";
import { UserInterface } from "../Interfaces";

type NameType = "Pedro" | "Jack" | "Manual";

export const Person: FC<UserInterface> = ({ name, age, email, hairColor }) => {
  const [country, setCountry] = useState<string | null>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event?.target.value);
  };

  const nameForType: NameType = "Pedro";
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <input placeholder="Write down your country..." onChange={handleChange} />
      {country}
      <br />
      {hairColor}
      {nameForType}
    </div>
  );
};
