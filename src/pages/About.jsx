import React from "react";
import Layout from "../layout";
import {
  Card,
  CardBody,
  Typography,
  Container,
} from "@material-tailwind/react";

const aboutPageContent = {
  title: "About Hamro Pasal",
  sections: [
    {
      heading: "Our Story",
      content:
        "Hamro Pasal started with a simple idea: to bring the best products to our customers at unbeatable prices. Founded in 2023, our journey began with a small team of passionate individuals who believed in the power of e-commerce to transform lives. Today, we are proud to be a leading e-commerce platform in the region, offering a wide range of products from fashion to electronics.",
    },
    {
      heading: "Our Mission",
      content:
        "At Hamro Pasal, our mission is to provide a seamless shopping experience that delights our customers. We strive to offer the highest quality products, exceptional customer service, and a user-friendly online shopping platform. Our goal is to become the go-to destination for all your shopping needs.",
    },
    {
      heading: "Why Choose Us",
      content:
        "What sets Hamro Pasal apart is our commitment to customer satisfaction. We offer a curated selection of products, competitive pricing, and fast, reliable delivery. Our team works tirelessly to ensure that every purchase meets your expectations. With a focus on quality and convenience, we aim to make your shopping experience as enjoyable as possible.",
    },
    {
      heading: "Our Values",
      content:
        "Our values are at the core of everything we do at Hamro Pasal. We believe in integrity, customer-centricity, innovation, and sustainability. These values guide our actions and decisions, helping us build trust and loyalty with our customers and partners.",
    },
    {
      heading: "Our Team",
      content:
        "Behind Hamro Pasal is a dedicated team of professionals who are passionate about e-commerce. From our customer service representatives to our logistics experts, every team member plays a crucial role in delivering the best shopping experience to our customers. We are proud of our diverse and talented team, who bring their expertise and enthusiasm to Hamro Pasal every day.",
    },
    {
      heading: "Contact Us",
      content:
        "We are here to help! If you have any questions, feedback, or concerns, please don't hesitate to reach out to us. You can contact our customer support team at bishalsaud15@gmai.com or call us at +977-9865742290. We look forward to hearing from you.",
    },
  ],
};

function About() {
  return (
    <Layout>
      <main className="m-16  min-h-screen">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-10 text-center text-lg md:text-4xl lg:text-3xl 2xl:text-5xl"
        >
          {aboutPageContent.title}
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aboutPageContent.sections.map((section, index) => (
            <Card key={index} className="h-full">
              <CardBody>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  {section.heading}
                </Typography>
                <Typography color="blue-gray">{section.content}</Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default About;
