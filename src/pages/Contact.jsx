import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
  Checkbox,
  Textarea,
} from "@material-tailwind/react";
import Layout from "../layout";

export default function ContactUs() {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center min-h-screen my-16">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-10 text-center flex items-center flex-col justify-center"
        >
          Contact Us
          <span className="text-xs opacity-30">
            Any questions or remarks? Just write us a messaage!
          </span>
        </Typography>
        <Card className="w-full max-w-[48rem] 2xl:flex-row gap-10 items-center 2xl:items-stretch">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 2xl:w-2/5 w-2/3 shrink-0 rounded-r-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className="2xl:w-96 w-full">
                <Textarea label="Message" />
              </div>
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="mt-6" fullWidth>
              Send Message
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Whether you have questions or you would just like to say hello,
              contact us.
            </Typography>
          </form>
        </Card>
      </section>
    </Layout>
  );
}
