import React from 'react'

function Metrics({ numStates = 30, numEntrepreneurs = 3000, numCompanies = 1640, numIndividuals = 120}) {
  return (
    <div>
        <div className="w-[100%] py-20 bg-[#7FDBCA] flex-col justify-start items-center gap-20 inline-flex">
            <div className="w-[100%] flex-col justify-start items-center gap-10 flex">
                <div className="text-center text-white text-xl font-semibold font-['Figtree']">Trusted by thousands of users in +{numStates} States</div>
                <div className="flex-col md:flex-row px-10 md:px-24 w-[100%] justify-center items-stretch md:items-start gap-5 inline-flex">
                    <div className="basis-1/3 p-5 bg-white rounded-2xl shadow flex-col justify-stretch items-center inline-flex">
                        <div className="self-stretch text-zinc-900 text-4xl font-semibold font-['Figtree'] leading-9">{numEntrepreneurs}+</div>
                        <div className="self-stretch text-zinc-500 text-lg font-normal font-['Figtree'] leading-7">Entrepreneurs used</div>
                    </div>
                    <div className="basis-1/3 p-5 bg-white rounded-2xl shadow flex-col justify-stretch items-center inline-flex">
                        <div className="self-stretch text-zinc-900 text-4xl font-semibold font-['Figtree'] leading-9">{numCompanies}+</div>
                        <div className="self-stretch text-zinc-500 text-lg font-normal font-['Figtree'] leading-7">Companies used</div>
                    </div>
                    <div className="basis-1/3 p-5 bg-white rounded-2xl shadow flex-col justify-stretch items-center inline-flex">
                        <div className="self-stretch text-zinc-900 text-4xl font-semibold font-['Figtree'] leading-9">{numIndividuals}+</div>
                        <div className="self-stretch text-zinc-500 text-lg font-normal font-['Figtree'] leading-7">Individuals Used</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Metrics