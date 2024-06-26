/**
 *  CSS
 */
import { useEffect } from "react";
import "./App.css";

import { MyDecoratedClass } from "@template/decorators";

/**
 * MAIN
 */
export function App() {
  useEffect(() => {
    const foo = new MyDecoratedClass();
    console.debug("FOO", foo);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Hello Deco-World
    </div>
  );
}
