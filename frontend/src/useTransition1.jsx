import { useTransition } from "react";

const UseTransition = () => {
  const [pending, startTransotion] = useTransition(false);

  const handleSubmit = () => {
    console.log("Delay start");

    
    startTransotion(async () => {
      await new Promise((res) => setTimeout(res, 4000));
    });

    console.log("Delay end");
  };

  return (
    <div>
      <button disabled={pending} onClick={handleSubmit}>
        Submit
      </button>

      {pending ? (
        <img src="https://i.gifer.com/origin/d3/d3f472b06590a25cb4372ff289d81711_w200.gif" />
      ) : null}
    </div>
  );
};

export default UseTransition;
