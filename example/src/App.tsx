import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRdBloc } from "@radts/reactjs";

interface Test {
  age: number;
  profile: {
    name: string;
    hometowm: {
      address: string;
      company: {
        name: string;
        location: {
          addres: string;
          name?: string;
        };
      };
    };
  };
}

function App() {
  const [count, setCount] = useRdBloc<Test>({
    age: 13,
    profile: {
      name: "4234234",
      hometowm: {
        address: "dsfsdf",
        company: {
          name: "4324324",
          location: {
            addres: "765756",
          },
        },
      },
    },
  });

  useEffect(() => {
    console.timeEnd();
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            console.time();
            count.age = Math.random();
            setCount(); //or  setCount(count)
          }}
        >
          count is {count.age}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

