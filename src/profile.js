import { getImageUrl } from "./utils.js";

export default function Profile(props) {
  return (
    <div>
      <section className="profile">
        <h2>{props.Name}</h2>
        <img
          className="avatar"
          src={getImageUrl(props.Img)}
          alt={props.Alt}
          width={props.width}
          height={props.Height}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {props.Profession}
          </li>
          <li>
            <b>Awards: {props.AwardsAmount} </b>
            {props.Awards}
          </li>
          <li>
            <b>Discovered: </b>
            {props.Discovered}
          </li>
        </ul>
      </section>
    </div>
  );
}
