// Old Method
// import React, { forwardRef } from "react";

// const InputRef = (props, ref) => {
//   console.log(ref);
//   return (
//     <div>
//       <input placeholder="Enter Data" ref={ref} />
//     </div>
//   );
// };

// export default forwardRef(InputRef);

const InputRef = (props) => {
  console.log(props);
  return (
    <div>
      <input placeholder="Enter"  ref={props.ref}/>
    </div>
  );
};

export default InputRef;
