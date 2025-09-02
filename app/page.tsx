import CardList from "@/components/CardList";
import AppAreaChart from "@/components/Charts/AppAreaChart";
import AppBarChart from "@/components/Charts/AppBarChart";
import AppBieChart from "@/components/Charts/AppBieChart";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 items-start lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transitions" />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppBieChart />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <TodoList />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Popular Content" />
      </div>
    </div>
  );
}
