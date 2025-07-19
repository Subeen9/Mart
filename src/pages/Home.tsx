import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  const handleShopPage = ()=>{
    navigate('/shop');
  }
  return (
    <div className="container text-center py-5">
      <h1 className="mb-3">Welcome to MiniMart</h1>
      <p className="mb-4">Simple. Affordable. Essential.</p>

      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-primary" onClick = {handleShopPage}>Shop Now</button>
        <button className="btn btn-success">View Deals</button>
        <button className="btn btn-outline-dark">Contact Us</button>
      </div>
    </div>
  );
}

export default Home;
