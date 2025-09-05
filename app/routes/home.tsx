import { useEffect, useState } from "react";
import { usePublicClient } from "wagmi";
import {
  routerAddress,
  wethAddress,
  usdtAddress,
  usdtAbi,
  wethAbi,
  routerAbi,
  factoryAddress,
  FactoryAbi,
  ERC20Abi,
  EngineAbi,
  //@ts-ignore
} from "constants/contract.js";

export default function PairsList() {
  const publicClient = usePublicClient();
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    async function fetchPairs() {
      try {
        // 1. Get total pairs
        const length = await publicClient?.readContract({
          address: factoryAddress,
          abi: FactoryAbi,
          functionName: "s_AllPairs",
        });
        console.log(length, "Length");
        const all = [];
        for (let i = 0; i < Number(length); i++) {
          const pair = await publicClient?.readContract({
            address: factoryAddress,
            abi: FactoryAbi,
            functionName: "s_AllPairs",
            args: [i],
          });

          // 2. Get token addresses
          const token0 = await publicClient?.readContract({
            address: pair,
            abi: EngineAbi,
            functionName: "token0",
          });

          const token1 = await publicClient?.readContract({
            address: pair,
            abi: EngineAbi,
            functionName: "token1",
          });

          // 3. Get reserves
          const [reserve0, reserve1] = await publicClient?.readContract({
            address: pair,
            abi: EngineAbi,
            functionName: "getReserves",
          });

          // 4. Get token symbols
          const symbol0 = await publicClient?.readContract({
            address: token0,
            abi: ERC20Abi,
            functionName: "symbol",
          });

          const symbol1 = await publicClient?.readContract({
            address: token1,
            abi: ERC20Abi,
            functionName: "symbol",
          });

          all.push({
            pair,
            token0,
            token1,
            symbol0,
            symbol1,
            reserve0: reserve0.toString(),
            reserve1: reserve1.toString(),
          });
        }
        //@ts-ignore
        setPairs(all);
      } catch (err) {
        console.error("Error fetching pairs:", err);
      }
    }

    fetchPairs();
  }, [publicClient]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Liquidity Pools</h1>
      {pairs.map((p, idx) => (
        <div key={idx} className="border p-3 rounded mb-2 shadow">
          <p className="font-semibold">
            {
              //@ts-ignore
              p.symbol0
            }
            /{" "}
            {
              //@ts-ignore

              p.symbol1
            }
          </p>
          <p>
            Token0 Reserve:
            {
              //@ts-ignore

              p.reserve0
            }
          </p>
          <p>
            Token1 Reserve:{" "}
            {
              //@ts-ignore

              p.reserve1
            }
          </p>
          <p className="text-gray-500 text-sm">
            Pair:{" "}
            {
              //@ts-ignore

              p.pair
            }
          </p>
        </div>
      ))}
    </div>
  );
}
