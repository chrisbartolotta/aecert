/**
 * v0 by Vercel.
 * @see https://v0.dev/t/L4b58rIUAio
 */
export default function Component() {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <img
              alt="Team 1 logo"
              height="50"
              src="/placeholder.svg"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width="50"
            />
            <h2 className="text-2xl font-bold">Team 1</h2>
          </div>
          <div className="flex justify-between items-center">
            <img
              alt="Team 2 logo"
              height="50"
              src="/placeholder.svg"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width="50"
            />
            <h2 className="text-2xl font-bold">Team 2</h2>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Inning:</span>
            <span className="text-lg">5</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Outs:</span>
            <span className="text-lg">2</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Bases:</span>
            <span className="text-lg">1,2</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Pitcher</h3>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Name:</span>
            <span className="text-lg">John Doe</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Throws:</span>
            <span className="text-lg">Left</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">ERA:</span>
            <span className="text-lg">3.56</span>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Batter</h3>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Name:</span>
            <span className="text-lg">Jane Doe</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Bats:</span>
            <span className="text-lg">Right</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">AVG:</span>
            <span className="text-lg">.280</span>
          </div>
        </div>
      </div>
    </div>
  )
}
