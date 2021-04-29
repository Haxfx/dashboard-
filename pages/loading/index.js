export default function Index() {
  return (
    <div className="flex items-center justify-center m-0 p-0 w-screen h-screen text-sm text-center">
      <div className="edge3 animate-custom-spin before:edge1 after:edge2">
        <span className="loading animate-reverse-spin">Loading...</span>
      </div>
    </div>
  );
}
