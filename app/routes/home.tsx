// pages/index.tsx (HomePage)
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-4 text-indigo-600">Mini DEX Demo</h1>
      <p className="text-center max-w-xl mb-6">
        This is a{" "}
        <span className="font-semibold">minimal decentralized exchange</span>
        built for demo purposes on the local{" "}
        <span className="font-mono">Anvil chain</span>.
        <br />
        By default, the inputs use the mock tokens:
        <span className="font-mono">
          {" "}
          WETH : 0x5FbDB2315678afecb367f032d93F642f64180aa3
        </span>{" "}
        and
        <span className="font-mono">
          {" "}
          USDT : 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
        </span>
        .
      </p>
      <p>
        Default Anvil Account with address
        0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 is already funded with the
        funds.
      </p>
      <p>
       First Add Liquidity , Then You can Proceed to swapping etc.
      </p>
      <div className="grid gap-4 w-full max-w-md mt-2">
        <Link
          to="/AddLiquidity"
          className="bg-indigo-800 hover:bg-indigo-600 text-white font-medium py-3 px-4 rounded-lg shadow text-center"
        >
          Add Liquidity
        </Link>
        <Link
          to="/swap"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-4 rounded-lg shadow text-center"
        >
          Swap Tokens
        </Link>
        <Link
          to="/RemoveLiquidity"
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-lg shadow text-center"
        >
          Remove Liquidity (USDT/WETH)
        </Link>
      </div>
    </div>
  );
}
