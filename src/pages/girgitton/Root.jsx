import { clints } from "../../constants";
import { Image } from "antd";
import img from "../../assets/images/images.png";
import { Link } from "react-router-dom";
const Root = () => {
  return (
    <div className="container mx-auto w-[85%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-5 ">
        {clints.map((item) => {
          return (
            <div key={item.key}>
              <Link to={`/clints/${item.key}`}>
                <Image src={img} className="w-full h-[300px]" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Root;
