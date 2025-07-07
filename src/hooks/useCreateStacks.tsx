import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { API } from "./getEnv";
import type { CreateStackType } from "../types";

const useCreateStacks = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateStackType) => axios.post(`${API}/stacks`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stacks"] });
    },
  });
};

export default useCreateStacks;
