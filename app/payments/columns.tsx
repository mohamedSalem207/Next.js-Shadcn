"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDownUp, ArrowUpDown, MoreHorizontal } from "lucide-react";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  name: string;
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");

      return (
        <div
          className={cn(
            "capitalize py-1 px-2 font-medium rounded-xs w-max text-xs",
            status === "pending" && "bg-yellow-500/40",
            status === "success" && "bg-green-500/40",
            status === "failed" && "bg-red-500/40"
          )}
        >
          {status as string}
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <div className="flex items-center justify-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span>User Name</span>

          {column.getIsSorted() === "asc" ? (
            <ArrowDownUp className="size-4" />
          ) : (
            <ArrowUpDown className="size-4" />
          )}
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const name = row.getValue("name");

      return <div className="text-center">{name as string}</div>;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <div className="flex items-center justify-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span>Email</span>

          {column.getIsSorted() === "asc" ? (
            <ArrowDownUp className="size-4" />
          ) : (
            <ArrowUpDown className="size-4" />
          )}
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const email = row.getValue("email");

      return <div className="text-center">{email as string}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <div className="text-end">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <span>Amount</span>

            {column.getIsSorted() === "asc" ? (
              <ArrowDownUp className="size-4" />
            ) : (
              <ArrowUpDown className="size-4" />
            )}
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-end font-medium pe-7">{formatted}</div>;
    },
  },
  {
    header: "",
    accessorKey: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="flex items-center justify-end"
          >
            <Button
              variant="ghost"
              className="size-8 mx-auto flex items-center justify-center p-0"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>View customer</DropdownMenuItem>

            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
