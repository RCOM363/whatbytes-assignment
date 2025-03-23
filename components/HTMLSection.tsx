"use client";
import React from "react";
import Image from "next/image";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useScore } from "@/app/context/ScoresProvider";

const scoreFromSchema = z.object({
  rank: z.coerce.number().min(1),
  percentile: z.coerce.number().min(1).max(100),
  currentScore: z.coerce.number().min(1).max(15),
});

function HTMLSection() {
  const htmlLogo =
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg";

  const { setRank, setPercentile, setCurrentScore } = useScore();

  const form = useForm({
    resolver: zodResolver(scoreFromSchema),
    defaultValues: {
      rank: 0,
      percentile: 0,
      currentScore: 0,
    },
  });

  function onSubmit(data: z.infer<typeof scoreFromSchema>) {
    setRank(data.rank);
    setPercentile(data.percentile);
    setCurrentScore(data.currentScore);
  }

  return (
    <div className="w-full flex flex-wrap justify-evenly items-center p-5 border-solid border-2 rounded-lg">
      {/* logo */}
      <div className="w-[20%] md:w-[10%] lg:w-[10%]">
        <Image
          src={htmlLogo}
          alt="HTML_Logo"
          width={50}
          height={50}
          layout="responsive"
        />
      </div>
      <div className="p-5 text-center md:text-left lg:text-left">
        <h3 className="font-bold">Hyper Text Markup Language</h3>
        <span className="text-gray-500">
          Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
        </span>
      </div>
      {/* modal & form */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-blue-900 hover:bg-blue-950">Update</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-5 p-5">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Update Scores</h1>
              <div className="w-[20%] md:w-[10%] lg:w-[10%]">
                <Image
                  src={htmlLogo}
                  alt="HTML_Logo"
                  width={50}
                  height={50}
                  layout="responsive"
                />
              </div>
            </div>
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div className="flex flex-col gap-5">
                    {/* rank input */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 flex justify-center items-center bg-blue-800 rounded-full text-white p-2">
                          1
                        </span>
                        <span>
                          Update your <b>Rank</b>
                        </span>
                      </div>
                      <FormField
                        control={form.control}
                        name="rank"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="rank"
                                className="border-blue-800 border-2"
                                type="number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    {/* percentile input */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 flex justify-center items-center bg-blue-800 rounded-full text-white p-2">
                          2
                        </span>
                        <span>
                          Update your <b>Percentile</b>
                        </span>
                      </div>
                      <FormField
                        control={form.control}
                        name="percentile"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="percentile"
                                className="border-blue-800 border-2"
                                type="number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    {/* current score input */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 flex justify-center items-center bg-blue-800 rounded-full text-white p-2">
                          3
                        </span>
                        <span>
                          Update your <b>Current Score (out of 15)</b>
                        </span>
                      </div>
                      <FormField
                        control={form.control}
                        name="currentScore"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="current score"
                                className="border-blue-800 border-2"
                                type="number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/* button */}
                  <div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button
                          type="button"
                          variant="outline"
                          className="text-blue-800"
                        >
                          Close
                        </Button>
                      </DialogClose>
                      <Button type="submit" className="bg-blue-800 text-white">
                        Save
                      </Button>
                    </DialogFooter>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default HTMLSection;
