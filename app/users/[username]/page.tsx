"use client";

import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MultipleLineChart from "@/components/Charts/MultipleLineChart";

export default function User() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Users</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>Mohamed Salem</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-4 flex xl:flex-row flex-col gap-8">
        <div className="w-full xl:w-1/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>

            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/30 p-2"
                  />
                </HoverCardTrigger>

                <HoverCardContent align="start" className="p-2.5">
                  <h1 className="font-bold mb-2">Verified User</h1>

                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-blue-800/30 border-1 border-blue-800/50 p-2"
                  />
                </HoverCardTrigger>

                <HoverCardContent align="start" className="p-2.5">
                  <h1 className="font-bold mb-2">Admin</h1>

                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-800/30 border-1 border-yellow-800/50 p-2"
                  />
                </HoverCardTrigger>

                <HoverCardContent align="start" className="p-2.5">
                  <h1 className="font-bold mb-2">Awarded</h1>

                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-800/30 border-1 border-orange-800/50 p-2"
                  />
                </HoverCardTrigger>

                <HoverCardContent align="start" className="p-2.5">
                  <h1 className="font-bold mb-2">Popular</h1>

                  <p className="text-sm text-muted-foreground">
                    This user has been popular for the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="text-xl font-semibold">User Information</div>

            <div className="space-y-2 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm text-muted-foreground">
                    Profile Completion
                  </p>

                  <Sheet>
                    <SheetTrigger asChild>
                      <Button>Edit User</Button>
                    </SheetTrigger>

                    <EditUser />
                  </Sheet>
                </div>

                <Progress value={66} />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>

                <span>Mohamed Salem</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">email:</span>

                <span>mohamedsalemd207@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>

                <span>0507877306</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>

                <Badge>Admin</Badge>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Joined on 2025.01.01
            </p>
          </div>

          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>

        <div className="w-full xl:w-2/3 space-y-6">
          <div className="bg-primary-foreground p-4 space-y-1.5 rounded-lg">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />

                <AvatarFallback>MS</AvatarFallback>
              </Avatar>

              <h1 className="text-xl font-semibold">Mohamed Salem</h1>
            </div>

            <p className="text-sm ps-2 text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quae excepturi assumenda laboriosam! Dolorum totam
              iste nulla, possimus illum quos!
            </p>
          </div>

          <div className="bg-primary-foreground p-4 rounded-lg space-y-6">
            <h1 className="text-xl font-semibold">User Activity</h1>

            <MultipleLineChart />
          </div>
        </div>
      </div>
    </div>
  );
}
