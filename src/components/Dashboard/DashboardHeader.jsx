import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { DashboardMenu } from "./DashboardSlide";

export function DashboardHeader() {
  return (
    <nav className=" w-full border py-3">
      <div className="flex flex-wrap items-center justify-between gap-y-4 ">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Dashboard
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <DashboardMenu />

          <IconButton variant="text" color="black">
            <BellIcon className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            color="black"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button
            size="sm"
            color="black"
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>
      </div>
    </nav>
  );
}
