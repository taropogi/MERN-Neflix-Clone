import { Link } from "react-router-dom";
import { ORIGINAL_IMAGE_BASE_URL } from "../../utils/constants";

export default function PersonLinkImage({ item }) {
  return (
    <Link
      key={item.id}
      to={`/actor/${item.name}`}
      className="flex flex-col items-center"
    >
      <img
        src={ORIGINAL_IMAGE_BASE_URL + item.profile_path}
        alt={item.name}
        className="max-h-96 rounded-mx-auto"
      />
      <h4 className="mt-2 text-xl font-bold">{item.name}</h4>
    </Link>
  );
}
