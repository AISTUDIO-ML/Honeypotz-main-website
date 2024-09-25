import { check_icon } from "assets/icons/icons";
import { google_g, stars } from "assets/images/images";

interface ReviewCardProps {
  data: {
    image: string;
    name: string;
    time: string;
    review: string;
  };
}

const ReviewCard: React.FC<ReviewCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl p-5">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-5">
          <div className="relative">
            <img src={data.image} alt="img" width={73} />
            <img
              src={google_g}
              alt="google"
              width={34}
              className="absolute -right-1 -bottom-1"
            />
          </div>
          <div>
            <p className="semibold text-xl">{data.name}</p>
            <p className="semibold opacity-50 mt-1">{data.time}</p>
          </div>
        </div>
        <img src={check_icon} alt="check_icon" />
      </div>
      <img src={stars} alt="stars" width={112} className="mt-4" />
      <p className="text-sm opacity-50 font-medium mt-4">{data.review}</p>
    </div>
  );
};

export default ReviewCard;
