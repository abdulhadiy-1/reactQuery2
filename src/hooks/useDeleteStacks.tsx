import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { API } from "./getEnv";

export const useDeleteStacks = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number | null) => axios.delete(`${API}/stacks/${id}`),
    onSuccess: () => {
      alert("Deleted");
      queryClient.invalidateQueries({ queryKey: ["stacks"] }); 
    },
  });
};
