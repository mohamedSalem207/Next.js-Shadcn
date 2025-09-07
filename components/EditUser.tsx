"use client";

import { useForm } from "react-hook-form";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "./ui/select";
import { Button } from "./ui/button";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters!",
    })
    .max(50),
  email: z.string().email({
    message: "Invalid Email",
  }),
  phone: z.string().min(10).max(15),
  role: z.enum(["user", "admin"]),
});

export default function EditUser() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Mohamed Salem",
      email: "mohamedsalemd207@gmail.com",
      phone: "0507877306",
      role: "admin",
    },
  });

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="mb-4">Edit User</SheetTitle>

        <SheetDescription asChild>
          <Form {...form}>
            <form className="space-y-5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>

                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>

                    <FormDescription>
                      This is your public username.
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>

                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>

                    <FormDescription>
                      Only admins can see your email.
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                name="phone"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>

                    <FormItem>
                      <Input placeholder="" {...field} />
                    </FormItem>

                    <FormDescription>
                      Only admins can see your phone.
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                name="role"
                control={form.control}
                render={() => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>

                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Role" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="user" className="cursor-pointer">
                            User
                          </SelectItem>

                          <SelectItem value="admin" className="cursor-pointer">
                            Admin
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormDescription>
                      Only verified users can be admin.
                    </FormDescription>
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-end">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
}
