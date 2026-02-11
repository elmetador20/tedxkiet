export default function Failed() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold text-red-600">Payment Failed ❌</h1>
      <p>Something went wrong. Please try again.</p>
    </div>
  );
}
