"use client";

import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { formatDate } from "date-fns";

export default function TodoList() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>

      <Popover open={open} onOpenChange={() => setOpen((prev) => !prev)}>
        <PopoverTrigger asChild>
          <Button className="w-full" size="sm">
            <CalendarIcon />

            {date ? formatDate(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(e) => {
              setDate(e);

              setOpen(false);
            }}
            className="rounded-lg w-full"
          />
        </PopoverContent>
      </Popover>

      <ScrollArea className="max-h-[400px] mt-4 space-y-4 overflow-y-auto">
        <div className="lg:space-y-4 space-y-2 5">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="item1" />

              <label
                htmlFor="item1"
                className="select-none text-sm text-muted-foreground cursor-pointer"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="item1" />

              <label
                htmlFor="item1"
                className="select-none text-sm text-muted-foreground cursor-pointer"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="item1" />

              <label
                htmlFor="item1"
                className="select-none text-sm text-muted-foreground cursor-pointer"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="item1" />

              <label
                htmlFor="item1"
                className="select-none text-sm text-muted-foreground cursor-pointer"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="item1" />

              <label
                htmlFor="item1"
                className="select-none text-sm text-muted-foreground cursor-pointer"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="item1" />

              <label
                htmlFor="item1"
                className="select-none text-sm text-muted-foreground cursor-pointer"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="item1" checked />

              <label
                htmlFor="item1"
                className="select-none text-sm text-muted-foreground cursor-pointer"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="item1" checked />

              <label
                htmlFor="item1"
                className="select-none text-sm text-muted-foreground cursor-pointer"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="item1" checked />

              <label
                htmlFor="item1"
                className="select-none text-sm text-muted-foreground cursor-pointer"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Checkbox id="item1" checked />

              <label
                htmlFor="item1"
                className="select-none text-sm text-muted-foreground cursor-pointer"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}
