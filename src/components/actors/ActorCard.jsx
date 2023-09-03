
const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
    return (
      <div>
        <div>
          <img src={image} alt={name} />
        </div>
        <h1>
          {name} {gender ? `(${gender})` : null}
        </h1>
        <p>{country ? `Comes from ${country}` : 'No country known'}</p>
        {birthday ? <p>Born {birthday}</p> : null}
        <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
      </div>
    );
  };
  export default ActorCard;