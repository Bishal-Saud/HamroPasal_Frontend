import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCountries } from "use-react-countries";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
  Popover,
  PopoverHandler,
  PopoverContent,
  Avatar,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { CreditCardIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import Layout from "../layout";
import { useCart } from "../components/Cartcontext";

function formatCardNumber(value) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

function formatExpires(value) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

export default function CheckoutForm() {
  const { id } = useParams();
  const { countries } = useCountries();
  const [type, setType] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpires, setCardExpires] = useState("");
  const [email, setEmail] = useState("");
  const [holderName, setHolderName] = useState("");
  const [cvc, setCVC] = useState("");
  const [cartItem, setCartItem] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const { removeFromCart } = useCart();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const selectedItem = storedItems.find((item) => item.id.toString() === id);
    setCartItem(selectedItem);
  }, [id]);

  const handlePayNow = () => {
    const orderDetails = {
      email,
      cardNumber,
      cardExpires,
      holderName,
      cvc,
    };
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    setPopupOpen(true);
  };

  if (!cartItem) {
    return (
      <Layout>
        <div className="py-16 px-8 h-screen flex items-center justify-center">
          <Typography className="text-center" variant="h5">
            Item not found in the cart!
          </Typography>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="min-h-screen">
        <Typography variant="h2" color="black" className="text-center my-10">
          Pay Now
        </Typography>

        <Card className="2xl:w-3/4 2xl:flex-row lg:flex-row gap-5 m-auto my-5 h-full md:flex-col">
          <CardHeader
            color="gray"
            floated={false}
            shadow={false}
            className="m-0 grid place-items-center px-4 py-2 text-center bg-white text-black"
          >
            <img
              src={cartItem.image}
              alt={cartItem.title}
              className="mb-4 p-6 h-[30rem]  text-white bg-white"
            />
            <Typography variant="h5" color="black">
              {cartItem.title}
            </Typography>
          </CardHeader>
          <CardBody className="2xl:w-3/4 2xl:h-full">
            <Tabs value={type} className="overflow-visible">
              <TabsHeader className="relative z-0 ">
                <Tab value="card" onClick={() => setType("card")}>
                  Pay with Card
                </Tab>
                <Tab
                  value="Mobile Banking"
                  onClick={() => setType("Mobile Banking")}
                >
                  Pay with Mobile Banking
                </Tab>
              </TabsHeader>
              <TabsBody
                className="!overflow-x-hidden !overflow-y-visible"
                animate={{
                  initial: {
                    x: type === "card" ? 400 : -400,
                  },
                  mount: {
                    x: 0,
                  },
                  unmount: {
                    x: type === "card" ? 400 : -400,
                  },
                }}
              >
                <TabPanel value="card" className="p-0">
                  <form className="mt-12 flex flex-col gap-4">
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        Your Email
                      </Typography>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@mail.com"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>

                    <div className="my-3">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium "
                      >
                        Card Details
                      </Typography>

                      <Input
                        maxLength={19}
                        value={formatCardNumber(cardNumber)}
                        onChange={(event) => setCardNumber(event.target.value)}
                        icon={
                          <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
                        }
                        placeholder="0000 0000 0000 0000"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                      <div className="my-4 flex items-center gap-4">
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-medium"
                          >
                            Expires
                          </Typography>
                          <Input
                            maxLength={5}
                            value={formatExpires(cardExpires)}
                            onChange={(event) =>
                              setCardExpires(event.target.value)
                            }
                            containerProps={{ className: "min-w-[72px]" }}
                            placeholder="00/00"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                              className:
                                "before:content-none after:content-none",
                            }}
                          />
                        </div>
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-medium"
                          >
                            CVC
                          </Typography>
                          <Input
                            maxLength={4}
                            value={cvc}
                            onChange={(e) => setCVC(e.target.value)}
                            containerProps={{ className: "min-w-[72px]" }}
                            placeholder="000"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                              className:
                                "before:content-none after:content-none",
                            }}
                          />
                        </div>
                      </div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        Holder Name
                      </Typography>
                      <Input
                        value={holderName}
                        onChange={(e) => setHolderName(e.target.value)}
                        placeholder="Card Holder"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                    <Button size="lg" onClick={handlePayNow}>
                      Pay Now
                    </Button>
                    <Typography
                      variant="small"
                      color="gray"
                      className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                    >
                      <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments
                      are secure and encrypted
                    </Typography>
                  </form>
                </TabPanel>
                <TabPanel value="Mobile Banking" className="p-0">
                  <form className="mt-12 flex flex-col gap-4">
                    <div className="my-3">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium "
                      >
                        Account Holder Name
                      </Typography>
                      <Input
                        type="text"
                        placeholder="Account Holder"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        Your Phone Number
                      </Typography>
                      <Input
                        type="number"
                        placeholder="Phone Number"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                    <div>
                      <Typography
                        variant="paragraph"
                        color="blue-gray"
                        className="mb-4 font-medium"
                      >
                        Scan Me
                      </Typography>
                      <img
                        src="../../public/images/qrPayment.png"
                        alt="QR Code"
                      />
                    </div>
                    <div className="my-3">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        Account Number
                      </Typography>
                      <Input
                        type="number"
                        placeholder="Account Number"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>

                    <Button size="lg" onClick={handlePayNow}>
                      Pay Now
                    </Button>
                    <Typography
                      variant="small"
                      color="gray"
                      className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                    >
                      <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments
                      are secure and encrypted
                    </Typography>
                  </form>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </CardBody>
        </Card>

        {popupOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setPopupOpen(false)}
          >
            <div
              className="bg-white p-8 rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">Order Placed</h2>
              <p>Your order has been placed successfully!</p>
              <p>Order Details:</p>
              <ul>
                <li>Email: {email}</li>
                <li>Card Number: {cardNumber}</li>
                <li>Expires: {cardExpires}</li>
                <li>Holder Name: {holderName}</li>
                <li>CVC: {cvc}</li>
              </ul>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setPopupOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
