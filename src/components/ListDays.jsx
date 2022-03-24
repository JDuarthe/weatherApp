import { Card } from "./Card";

export const ListDays = ({ days, title }) => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <h2 className="text-center">{title}</h2>
        <h6 className="text-center">{title && "Weather of the city"}</h6>
        {days.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </div>
  );
};
