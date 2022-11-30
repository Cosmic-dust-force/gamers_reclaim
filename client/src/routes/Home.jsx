import { useNavigate } from "react-router-dom";
import LinkButton from '../components/LinkButton';
const homeImage = require('../img/home_page_image.png')

export default function Home() {
  const navigate = useNavigate();

  const handleNavigateToProducts = () => {
    navigate("/products");
  };

  return (
    <div className="flex flex-col content-center text-lg">
      <p className="font-raj text-center font-semibold mt-3 mb-2">
        We believe in making gaming more accessible and afforable to all. 
      </p>
      <p className="font-raj text-center font-thin">
        Gamer's Reclaim accepts refurbished video game accessories and makes them accessible to the public.  
      </p>
      <p className="font-raj text-center font-thin">
      Our mission is to reduce waste and have fun doing it!  
      </p>
      

      <div className="flex justify-center mb-7 m-8">
        <img
          className="rounded-md max-w-xl"
          src={homeImage}
          alt="video game controller">
        </img>
      </div>
<div className="flex flex-row justify-center align-items-center m-10 text-center">
      <div className="p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
        <h3 className="text-xl font-bold">Secure Checkout</h3>
        <p className="text-base font-thin"> We securely accept and process payments.</p>
      </div>

      <div className="p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-center">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
        <h3 className="text-xl font-bold">Multiple Payment Methods</h3>
        <p className="text-base font-thin">We give you the convenience of paying any way you like!</p>
      </div>

      <div className="p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
        <h3 className="text-xl font-bold">Fast Shipping</h3>
        <p className="text-base font-thin">We offer fast reliable shipping!</p>

      </div>
      </div>

      <div className="max-w-small flex justify-center mb-4">
        <LinkButton
          value={"View Our Products"}
          clickHandler={handleNavigateToProducts}
        />
      </div>

    </div>
  );
}
