// custom.d.ts

// Deklarera EyesEffect-modulen
declare module "./eyesEffect" {
  import { FC } from "react";
  const EyesEffect: FC<any>;
  export default EyesEffect;
}

// Deklarera SnowBackground-modulen
declare module "./SnowBackground" {
  import { FC } from "react";
  const SnowBackground: FC<any>;
  export default SnowBackground;
}


