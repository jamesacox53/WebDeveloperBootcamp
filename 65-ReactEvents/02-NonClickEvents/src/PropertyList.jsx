import "./PropertyList.css";
import Property from "./Property";

export default function PropertyList({ propertiesArr }) {
  const propArr = propertiesArr.map((propObj) => (
    <Property key={propObj.id} {...propObj} />
  ));

  return <div className="PropertyList">{propArr}</div>;
}
