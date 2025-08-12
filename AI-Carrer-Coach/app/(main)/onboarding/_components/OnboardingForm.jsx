"use client";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { onboardingSchema } from "@/app/lib/schema";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useFetch from "@/hook/use-fetch";
import { updateUser } from "@/actions/user";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
const OnboardingForm = ({ industries }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(onboardingSchema),
  });
  const{
    loading:updateLoading,
    fn:updateUserFn,
    data:updateResult,
  }=useFetch(updateUser);
  const watchIndustry=watch("Industry");
  const onSubmit=async(values)=>{
    try{
      const formatteIndustry=`${values.indusrtry}-${values.subIndustry.toLowerCase().replace(/ /g,"-")}`;
      await updateUserFn({
        ...values,
        industry:formatteIndustry,
      })
      console.log(values);
    }

    catch(error){
      console.error("onboarding error:",error);
    }
  };
  useEffect(()=>{
    if(updateResult?.success && !updateLoading){
      toast.success("profile completed successfully");
      router.push("/dashboard");
      router.refresh();
    }
  },[updateResult,updateLoading]);

  return (
    <div className="flex items-center justify-center bg-background">
      <Card className="w-full max-w-lg mt-10 mt-10 mx-2">
        <CardHeader>
          <CardTitle>Complete your profile</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>

        <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="industry">Industry</Label>
            <Select 
              onValueChange={(value) => {
                setValue("industry", value);
                setSelectedIndustry(
                  industries.find((ind)=>ind.id === value)
                );
                setValue("subIndustry", "")
              }}
            >
              <SelectTrigger id="industry">
                <SelectValue placeholder="select an industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((ind) => {
                  return (
                    <SelectItem value={ind.id} key={ind.id}>
                      {ind.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            {errors.industry && (
              <p className="text-sm text-red-500">{errors.industry.message}</p>
            )}
          </div>
          {
            
            <div className="space-y-2">
            <Label htmlFor="subIndustry">Specialization</Label>
            <Select
              onValueChange={(value)=>setValue("subIndustry",value)}
            >
              <SelectTrigger id="subIndustry">
                <SelectValue placeholder="select an industry" />
              </SelectTrigger>
              <SelectContent>
                {selectedIndustry?.subIndustries.map((ind) => {
                  return (
                    <SelectItem value={ind} key={ind}>
                      {ind}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            {errors.subIndustry && (
              <p className="text-sm text-red-500">{errors.subIndustry.message}</p>
            )}
          </div>
        }
         <div className="space-y-2">
            <Label htmlFor="experience">Years of experience</Label>
            <Input 
            id="experience"
            type="number"
            min="0"
            max="50"
            placeholder="years of experience"
            {...register("experience")}
            />
            {errors.subIndustry && (
              <p className="text-sm text-red-500">{errors.subIndustry.message}</p>
            )}
          </div>
           <div className="space-y-2">
            <Label htmlFor="skills">Skills</Label>
            <Input 
            id="skills"
            placeholder="python,JavaScript,Project Manager"
            {...register("skills")}
            />
            <p className="text-sm text-muted-foreground">Separate multiple skills with commas</p>
            {errors.skills && (
              <p className="text-sm text-red-500">{errors.skills.message}</p>
            )}
          </div>
            <div className="space-y-2">
            <Label htmlFor="bio">Professional Bio</Label>
            <Input 
            id="bio"
            placeholder="Tell us about your professional background" className="h-32"
            {...register("bio")}
            />
            {errors.bio && (
              <p className="text-sm text-red-500">{errors.bio.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={updateLoading}>
            {updateLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Complete Profile"
              )}
          </Button>
        </form>
      </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingForm;
