import { blogimage_1 } from "assets/images/images";
import { BlogCard } from "components/components";

const data = [
  {
    image: blogimage_1,
    category: "Design",
    name: "Al Instructional Design",
    description:
      "Analyze learning needs, design instructional strategies, and evaluate the effectiveness of your instruction so no student gets left behind.",
  },
  {
    image: blogimage_1,
    category: "Design",
    name: "Al Instructional Design",
    description:
      "Analyze learning needs, design instructional strategies, and evaluate the effectiveness of your instruction so no student gets left behind.",
  },
  {
    image: blogimage_1,
    category: "Design",
    name: "Al Instructional Design",
    description:
      "Analyze learning needs, design instructional strategies, and evaluate the effectiveness of your instruction so no student gets left behind.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="myContainer">
      <div className="flex flex-col items-center">
        <div className="text-secondary bg-secondaryLight w-44 h-11 rounded-full flex items-center justify-center">
          <p>Our Blogs</p>
        </div>
        <p className="text-primary text-3xl md:text-4xl semibold mt-5 text-center">
          Insights Into Future Of{" "}
          <span className="text-secondary">Data Security</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {data.map((item, index) => {
          return <BlogCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
