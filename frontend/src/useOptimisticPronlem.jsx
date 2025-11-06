import React, { useOptimistic, useState, useEffect } from "react";

//Data fetch hone me time lagata , jis ke karan ui per content late render hota he
//So, to counter this problem useOptimistic() hooks
const useOptimistic1 = () => {
  const [name, setName] = useState(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills();
  }, []);
  console.log(skills);
  const getSkills = async () => {
    const res = await fetch("http://localhost:4500/getSkills", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const upSkills = await res.json();

    setSkills(upSkills);
  };

  async function sleep(ms) {
    return await new Promise((res) => setTimeout(res, ms));
  }

  const addSkills = async () => {
    const id = Math.floor(Math.random() * 1000);
    const data = { name, id };

    const res = await fetch("http://localhost:4500/addSkills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    await sleep(3000);
    const addskills = await res.json();

    if (addskills) {
      getSkills();
    }
  };

  return (
    <section>
      <div>
        <input
          placeholder="Enter Skills"
          onChange={(ev) => setName(ev.target.value)}
        />

        <button onClick={addSkills}>Click</button>
      </div>

      <ol>
        {skills.map((skill, index) => (
          <li key={index}>{skill.name}</li>
        ))}
      </ol>
    </section>
  );
};

export default useOptimistic1;
