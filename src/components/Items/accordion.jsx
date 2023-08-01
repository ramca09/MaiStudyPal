import { useState } from 'react';

const Accordion = ({ metadata, handleSelect }) => {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => setExpanded((current) => !current)

    return (
        <div className="my-2 bg-white overflow-y-auto" >
            <div className="px-1 text-end items-center select-none flex justify-end flex-row">
                <div className="hover:cursor-pointer" onClick={toggleExpanded}>
                    {metadata ? <div className='text-primary'>View {metadata.length} References</div> : ""}
                </div>
                <div className="flex-none pl-2 pr-4 hover:cursor-pointer" onClick={toggleExpanded}>{expanded ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                )}</div>
            </div>
            <div className={`px-1 pt-0 overflow-y-auto transition-[max-height] duration-1000 ease-in ${expanded ? "max-h-auto" : "max-h-0"}`}>
                <div className="flex flex-col justify-start items-start">
                    {metadata?.map((value, idx) => (
                        <div key={idx} className="mt-3 pl-2 inline-flex flex-col">
                            <div onClick={() => handleSelect(value?.page)} className='underline text-start text-primary hover:cursor-pointer'>Page No. {value.page}</div>
                            <div className='mt-2'>{value.ref.replaceAll('\n', '')}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Accordion;