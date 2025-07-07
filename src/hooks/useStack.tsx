import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "./getEnv";

export const useStack = (id?: number) => {
  return useQuery({
    queryKey: ["stack", id],
    queryFn: () =>
      axios.get(`${API}/stacks/${id}`).then((res) => res.data),
    enabled: !!id, 
  });
};

