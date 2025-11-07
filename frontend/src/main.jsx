import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UseOptimistic from "./useOptimisticPronlem";
import UseOptimisticSol from "./useOptimisticSol";
import UseActionState from "./useActionState1";
import UseTransition from "./useTransition1";
import UseRef1 from "./useRef1";
import UseDebugValue11 from "./useDebugValue11";
import UseId1 from "./useId1";
import UseImperativeRefParent from "./UseImperativeRefParent ";
import UseInsertionEffect from "./UseInsertionEffect ";
import UseSyncExternalStore from "./UseSyncExternalStore";
import WidthUseSyncExternalStore from "./WidthUseSyncExternalStore";
import UserReducer from "./UserReducer";
import UserFormStatus from "./useFormStatus1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseActionState />
    {/* <UseOptimistic /> */}
    {/* <UseOptimisticSol /> */}
    {/* <UseDebugValue11 /> */}
    {/* <UseId1 /> */}
    {/* <UseImperativeRefParent /> */}
    {/* < UseInsertionEffect /> */}
    {/* <UseSyncExternalStore /> */}
    {/* <WidthUseSyncExternalStore /> */}
    {/* <UserReducer />  */}

    {/* < UserFormStatus /> */}

    {/* <UseTransition /> */}

    {/* <UseRef1 /> */}
  </StrictMode>
);
