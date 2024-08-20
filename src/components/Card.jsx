import LocationPointer from "../assets/LocationPointer.svg";
export default function Card(props) {
  //   console.log(props.key);
  return (
    <div className="card--container">
      <img src={props.item.imageUrl} className="card--img" />

      <div className="card--content">
        <a href={props.item.googleMapsUrl}>
          <img src={LocationPointer} />
          <span>{props.item.location}</span>
        </a>
        <h1>{props.item.title}</h1>
        <h4>
          {props.item.startDate} - {props.item.endDate}
        </h4>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
