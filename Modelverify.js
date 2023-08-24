import { Map } from "./Map";

export function Modelverify({ children, map }) {
  return <div className="modelVerify">{map && <Map />}
    {children}</div>;
}
