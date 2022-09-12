import { createContext, FC } from "react";
import { Person } from "./components/Person";
import { HairColor } from "./Enums";
import { AppContextInterface } from "./Interfaces";

const ApppContext = createContext<AppContextInterface | null>(null);
const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "Pedro",
    age: 20,
    country: "Brazil",
  };
  return (
    <ApppContext.Provider value={contextValue}>
      <div className="App">
        <Person
          name="Ok"
          age={20}
          email="ok@gmail.com"
          hairColor={HairColor.Pink}
        />
      </div>
    </ApppContext.Provider>
  );
};

export default App;
