import GigCardGenerator from "../../components/GigCardGenerator/GigCardGenerator";
const GigsCollection = () => {
  return (
    <div>
       <nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="/">Available Gigs</a>
</nav>
<div className="mb-2">
<GigCardGenerator/>
</div>
    </div>
  );
};

export default GigsCollection;



