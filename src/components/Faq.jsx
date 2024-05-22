import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function FaqPasal() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="flex flex-col items-center justify-center mx-2 2xl:mx-36">
      <Typography variant="h1" color="blue" textGradient className="my-10">
        FAQ ??
      </Typography>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          What is Hamro Pasal?
        </AccordionHeader>
        <AccordionBody>
          Hamro Pasal is an online e-commerce platform where you can buy a
          variety of products conveniently from the comfort of your home.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How can I shop on Hamro Pasal?
        </AccordionHeader>
        <AccordionBody>
          Shopping on Hamro Pasal is easy! Simply browse through our categories,
          select the products you want, add them to your cart, and proceed to
          checkout. You can then choose your preferred payment method and
          delivery option.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What kind of products does Hamro Pasal offer?
        </AccordionHeader>
        <AccordionBody>
          Hamro Pasal offers a wide range of products, including electronics,
          fashion items, home appliances, groceries, beauty products, and much
          more.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Is it safe to shop on Hamro Pasal?
        </AccordionHeader>
        <AccordionBody>
          Yes, shopping on Hamro Pasal is safe and secure. We use
          industry-standard encryption technology to ensure that your personal
          and payment information is protected at all times.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          How can I contact customer support?
        </AccordionHeader>
        <AccordionBody>
          If you have any questions, concerns, or feedback, our friendly
          customer support team is here to help. You can reach us via email at
          bishalsaud15@gmail.com, phone at +977-9865742290, or live chat on our
          website during business hours. We strive to provide prompt and
          efficient assistance to all our customers.
        </AccordionBody>
      </Accordion>
    </section>
  );
}
