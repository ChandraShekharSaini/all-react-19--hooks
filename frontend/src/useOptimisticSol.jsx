import React, {
  useState,
  useOptimistic,
  useEffect,
  useTransition,
  startTransition,
} from "react";

const UseOptimistic = () => {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState([]);
  const [ispending, startTransition] = useTransition(false);
  const [optSkills, setoptSkills] = useOptimistic(
    skills,
    (prevSkills, newSkills) => [...prevSkills, newSkills]
  );

  useEffect(() => {
    getSkills();
  }, []);

  console.log(skills);
  async function getSkills() {
    const res = await fetch("http://localhost:4500/getSkills", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const skills = await res.json();

    setSkills(skills);
  }

  function sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  const addSkills = async () => {
    const id = Math.floor(Math.random() * 10000);

    const data = { name, id };

    console.log(data);
    setoptSkills(data);

    startTransition(async () => {
      const res = await fetch("http://localhost:4500/addSkills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      await sleep(1000);
      const response = await res.json();

      if (response) {
        getSkills();
      }
    });
  };

  const handleRemove = async (value) => {
    console.log(value);
    const res = await fetch(`http://localhost:4500/delete/${value}`, {
      method: "DELETE",
    });

    const response = await res.json();

    console.log("Response", response);

    if (response) {
      getSkills();
    }
  };

  return (
    <>
      <form action={addSkills}>
        <div>
          <input
            placeholder="Enter Skills"
            onChange={(ev) => setName(ev.target.value)}
          />
          <button type="submit" style={{ padding: "0 15px" }}>
            {ispending ? (
              <img
                src="https://assets-v2.lottiefiles.com/a/91cc0ece-1150-11ee-b7cb-d3afb5c0c001/QNF78Uk4YE.gif"
                alt="image"
                height={"50px"}
                width={"50px"}
              />
            ) : (
              <p>add</p>
            )}
          </button>
        </div>
      </form>

      <ol>
        {optSkills.map((skill, index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <li key={index}>{skill.name}</li>
              <button
                type="button"
                style={{
                  padding: "5px 7px",
                  outline: "none",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => handleRemove(skill._id)}
              >
                Dlete
              </button>
            </div>
          );
        })}
      </ol>
    </>
  );
};

export default UseOptimistic;
