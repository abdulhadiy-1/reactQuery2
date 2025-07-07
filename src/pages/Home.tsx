import StackCard from "../components/StackCard";
import { useStacks } from "../hooks/useStacks";
import type { StackType } from "../types";

const Home = () => {
  const {data: stacks = []} = useStacks()
  console.log(stacks);
  
  
  return (
    <div className="p-10 flex flex-wrap gap-5 items-center justify-between">
      {stacks.map((item: StackType) => (
        <StackCard key={item.id} item={item}/>
      ))}
    </div>
  );
};

export default Home;
