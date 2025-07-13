export default function TestPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl">Test Page</h1>
      <div className="flex gap-4 overflow-x-auto">
        <div className="flex-none w-[280px] h-[400px] bg-red-500">Card 1</div>
        <div className="flex-none w-[280px] h-[400px] bg-green-500">Card 2</div>
        <div className="flex-none w-[280px] h-[400px] bg-blue-500">Card 3</div>
      </div>
    </div>
  );
} 