import React, { useActionState } from "react";

const useActionState1 = () => {

  const fun = async (prevState, formData) => {
    const password = formData.get("password");
    const username = formData.get("username");

    if (!password && !username) return { error: "Credentials Not Filled" };
    if (!password) return { error: "Password Not Filled" };
    if (!username) return { error: "Username Not Filled" };

    await new Promise((res) => setTimeout(res, 4000));

    return { success: "Form Submitted Successfully" };
  };

  const [message, action, ispending] = useActionState(fun, {
    error: "",
  });

  console.log(ispending);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        textAlign: "center",
      }}
    >
      {ispending ? (
        <h4 style={{ fontSize: "20px", color: "red" }}>
          {" "}
          useActionState React(19){" "}
        </h4>
      ) : (
        <h4 style={{ fontSize: "20px", color: "green" }}>
          {" "}
          useActionState React(19){" "}
        </h4>
      )}
      <form
        action={action}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
          border: "1px solid black",
          width: "50%",
          margin: "auto",
        }}
      >
        <input
          style={{
            padding: "5px 10px",
            outline: "none",
            border: "2px solid red",
            borderRadius: "5px",
          }}
          placeholder="Enter UserName"
          name="username"
        />
        <input
          style={{
            padding: "5px 10px",
            outline: "none",
            border: "2px solid red",
            borderRadius: "5px",
          }}
          placeholder="Enter Password"
          name="password"
        />
        <button style={{ padding: "5px 0", cursor: "pointer" }}>
          {ispending ? <p>Submiting...</p> : <p>Submit</p>}
        </button>
      </form>

      <div>
        {message.success ? (
          <p style={{ fontSize: "18px", color: "green" }}>{message.success}</p>
        ) : (
          <p style={{ fontSize: "18px", color: "red" }}>{message.error}</p>
        )}
      </div>
    </div>
  );
};

export default useActionState1;
