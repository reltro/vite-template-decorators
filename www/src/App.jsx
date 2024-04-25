/**
 *  CSS
 */
import "./App.css";

import { MyDecoratedClass } from "@template/decorators";

/**
 * MAIN
 */
export function App() {
  const foo = new MyDecoratedClass();

  return <div>Hello World</div>;
}
