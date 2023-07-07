import { Link } from "react-router-dom";

type ProductLinkProps = {
  id: number;
  name: string;
  price: number;
  images: string[];
};

export default function ProductLink({
  id,
  name,
  price,
  images,
}: ProductLinkProps) {
  return (
    <Link to={"/"} className="m-6">
      <div
        className="w-60 h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[0]})` }}
      ></div>
      <p>{name}</p>
      <p>€ {price}</p>
    </Link>
  );
}
