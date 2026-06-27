import Top from "./Section/Top";
import Center from "./Section/Center";
import Bottom from "./Section/Bottom";
const Card = ({ logo, company, date, post, tag1, tag2, pay, location }) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-xl p-4">
      <Top logo={logo} />
      <Center
        company={company}
        post={post}
        date={date}
        tag1={tag1}
        tag2={tag2}
      />
      <Bottom pay={pay} location={location} />
    </div>
  );
};

export default Card;
