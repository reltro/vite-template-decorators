/**
 *
 *
 *
 *
 *
 */

function myDecorator(target, key, descriptor) {
  console.debug("[Decorator]> run @myDecorator");

  return target;
}

@myDecorator
export class MyDecoratedClass {
  constructor() {
    console.debug("[Decorator]> constructor - MyDecoratedClass");
  }
}
