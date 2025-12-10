"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createPet, updatePet } from "../../actions/pet";
import { petType } from "../../db/schemas/pet";
import type { PetFormData } from "../../types/pet";
import { petFormSchema } from "../../zod/pet";

type PetFormProps = {
  mode: "create" | "update";
  petId?: string;
  defaultValues?: Partial<PetFormData>;
  onSuccess?: () => void;
};

const DEFAULT_HP = 50;

export function PetForm({
  mode,
  petId,
  defaultValues,
  onSuccess,
}: PetFormProps) {
  const form = useForm<PetFormData>({
    resolver: zodResolver(petFormSchema),
    defaultValues: {
      name: defaultValues?.name ?? "",
      petType: defaultValues?.petType ?? "dog",
      hp: defaultValues?.hp ?? DEFAULT_HP,
    },
  });

  async function onSubmit(data: PetFormData) {
    try {
      if (mode === "create") {
        await createPet(data);
        toast.success("ペットを追加しました");
      } else if (mode === "update" && petId) {
        await updatePet(petId, data);
        toast.success("ペット情報を更新しました");
      }
      form.reset();
      onSuccess?.();
    } catch {
      // Error handling in parent
    }
  }

  const isSubmitting = form.formState.isSubmitting;

  const getSubmitButtonText = () => {
    if (isSubmitting) {
      return "Submitting...";
    }
    if (mode === "create") {
      return "ペットを追加";
    }
    return "Update";
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ペットの名前</FormLabel>
              <FormControl>
                <Input autoComplete="off" placeholder="例：ポチ" {...field} />
              </FormControl>
              <FormDescription>ペットの名前を入力して下さい。</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="petType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ペットの種類</FormLabel>
              <Select defaultValue={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="ペットの種類を選択して下さい" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {petType.map((type: "dog" | "cat") => (
                    <SelectItem key={type} value={type}>
                      {type === "dog" ? "犬" : "猫"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>ペットの種類を選択して下さい</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>HP(体力)</FormLabel>
              <FormControl>
                <Input
                  max="100"
                  min="0"
                  placeholder="50"
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormDescription>
                ペットの体力を0から100の間で入力して下さい
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isSubmitting} type="submit">
          {getSubmitButtonText()}
        </Button>
      </form>
    </Form>
  );
}
