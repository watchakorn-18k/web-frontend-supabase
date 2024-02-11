export default function Card({ title, description }: any) {
  return (
    <div className="card w-64 bg-base-100 shadow-2xl border border-base-300">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
      <figure>
        <img
          src={`https://source.unsplash.com/random/300x300/?${title},coding,lesson`}
          alt={title}
        />
      </figure>
    </div>
  );
}
