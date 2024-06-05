import headsets from "../../src/assets/HamroPhotos/Headset.jpg";
import keyboards from "../../src/assets/HamroPhotos/keyboard.jpg";
import chairs from "../../src/assets/HamroPhotos/chairs.jpg";
import deals from "../../src/assets/HamroPhotos/deals.jpg";
import dining from "../../src/assets/HamroPhotos/dining.jpg";
import dresses from "../../src/assets/HamroPhotos/dresses.jpg";
import health from "../../src/assets/HamroPhotos/health.jpg";
import home from "../../src/assets/HamroPhotos/home.jpg";
import jeansunder from "../../src/assets/HamroPhotos/jeansunder.jpg";
import kitchen from "../../src/assets/HamroPhotos/kitchen.jpg";
import mouse from "../../src/assets/HamroPhotos/mouse.jpg";
import tops from "../../src/assets/HamroPhotos/tops.jpg";
import shoesunder from "../../src/assets/HamroPhotos/shoesunder.jpg";

export default function Widget() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Gaming accessories</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <img src={headsets} alt="Headsets" className="w-full h-auto" />
            <p className="mt-2">Headsets</p>
          </div>
          <div>
            <img src={keyboards} alt="Keyboards" className="w-full h-auto" />
            <p className="mt-2">Keyboards</p>
          </div>
          <div>
            <img src={mouse} alt="Computer mice" className="w-full h-auto" />
            <p className="mt-2">Computer mice</p>
          </div>
          <div>
            <img src={chairs} alt="Chairs" className="w-full h-auto" />
            <p className="mt-2">Chairs</p>
          </div>
        </div>
        <a href="#" className="text-blue-500 hover:underline">
          See more
        </a>
      </div>

      <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Refresh your space</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <img src={dining} alt="Dining" className="w-full h-auto" />
            <p className="mt-2">Dining</p>
          </div>
          <div>
            <img src={home} alt="Home" className="w-full h-auto" />
            <p className="mt-2">Home</p>
          </div>
          <div>
            <img src={kitchen} alt="Kitchen" className="w-full h-auto" />
            <p className="mt-2">Kitchen</p>
          </div>
          <div>
            <img
              src={health}
              alt="Health and Beauty"
              className="w-full h-auto"
            />
            <p className="mt-2">Health and Beauty</p>
          </div>
        </div>
        <a href="#" className="text-blue-500 hover:underline">
          See more
        </a>
      </div>

      <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Shop deals in Fashion</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <img
              src={jeansunder}
              alt="Jeans under $50"
              className="w-full h-auto"
            />
            <p className="mt-2">Jeans under $50</p>
          </div>
          <div>
            <img src={tops} alt="Tops under $25" className="w-full h-auto" />
            <p className="mt-2">Tops under $25</p>
          </div>
          <div>
            <img
              src={dresses}
              alt="Dresses under $30"
              className="w-full h-auto"
            />
            <p className="mt-2">Dresses under $30</p>
          </div>
          <div>
            <img
              src={shoesunder}
              alt="Shoes under $50"
              className="w-full h-auto"
            />
            <p className="mt-2">Shoes under $50</p>
          </div>
        </div>
        <a href="#" className="text-blue-500 hover:underline">
          See all deals
        </a>
      </div>

      <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Deals in PCs</h2>
        <div className="mb-4">
          <img src={deals} alt="PC Deals" className="w-full h-auto" />
        </div>
        <a href="#" className="text-blue-500 hover:underline">
          Shop now
        </a>
      </div>
    </div>
  );
}
