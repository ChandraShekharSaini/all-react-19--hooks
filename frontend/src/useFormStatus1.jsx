import { useFormStatus } from "react-dom";

const handleSubmit = async () => {
  console.log("Click");
  await new Promise((res) => setTimeout(res, 5000));

  console.log("Click");
};

const FormField = () => {
  const { pending } = useFormStatus();

  console.log(pending);
  return (
    <div>
      <input placeholder="Enter Name" type="text" name="name" required /> <br />{" "}
      <br />
      <input
        placeholder="Enter Password"
        type="number"
        name="password"
        required
      />
      <br /> <br />
      <input
        placeholder="Enter City"
        type="text"
        name="city"
        required
      /> <br /> <br />
      <button>{pending ? <p>Submiting...</p> : <p>Submit</p>}</button>
    </div>
  );
};

const useFormStatus1 = () => {
  const handleSubmit = async (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("password"));
    console.log(formData.get("city"));

    await new Promise((res) => setTimeout(res, 5000));
  };

  return (
    <form action={handleSubmit}>
      <FormField />
    </form>
  );
};

export default useFormStatus1;
